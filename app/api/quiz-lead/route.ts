import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/**
 * /api/quiz-lead, notification d'un lead du diagnostic « prêt pour l'IA ? ».
 *
 * L'e-mail est OPTIONNEL côté quiz (le score s'affiche sans lui). Quand le
 * visiteur le laisse, Nathan reçoit son adresse + ses scores par pilier, de
 * quoi préparer l'appel. Best-effort : toute erreur est avalée, jamais bloquante.
 */

const NOTIFY_TO = 'nathan@natesystem.com'
const NOTIFY_FROM = 'NateSystem <hello@natesystem.com>'

let resendClient: Resend | null = null
const getResend = (): Resend => {
  if (resendClient) return resendClient
  const key = process.env.RESEND_API_KEY
  if (!key) throw new Error('RESEND_API_KEY not set')
  resendClient = new Resend(key)
  return resendClient
}

type PillarScore = { name?: string; score?: number; level?: string }
type Payload = {
  email?: string
  total?: number
  verdict?: string
  weakest?: string
  pillars?: PillarScore[]
}

const esc = (s: unknown) =>
  String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

const LEVEL_FR: Record<string, string> = { red: 'Rouge', orange: 'Orange', green: 'Vert' }
const VERDICT_FR: Record<string, string> = {
  red: 'À consolider avant l’IA',
  orange: 'Bonne base',
  green: 'Prêt',
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Payload
    const { email = '', total, verdict = '', weakest = '', pillars = [] } = body

    if (!email.trim() || !/.+@.+\..+/.test(email)) {
      return NextResponse.json({ error: 'invalid_email' }, { status: 400 })
    }

    const pillarRows = pillars
      .map(
        (p) => `
      <tr>
        <td style="padding:6px 12px 6px 0;font-size:13px;color:#1a1a1d;font-family:-apple-system,sans-serif;">${esc(p.name)}</td>
        <td style="padding:6px 0;font-size:13px;color:#1a1a1d;font-family:-apple-system,sans-serif;font-weight:600;">${esc(p.score)} / 8 · ${esc(LEVEL_FR[p.level ?? ''] ?? p.level)}</td>
      </tr>`
      )
      .join('')

    const subject = `Diagnostic IA · ${esc(email)} · ${total ?? '?'}/24 (${VERDICT_FR[verdict] ?? verdict})`

    const html = `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#f5f4f0;font-family:-apple-system,'Segoe UI',sans-serif;">
  <table cellpadding="0" cellspacing="0" border="0" width="100%" style="padding:32px 16px;">
    <tr><td align="center">
      <table cellpadding="0" cellspacing="0" border="0" width="560" style="max-width:560px;background:#fff;border-radius:12px;border:1px solid rgba(0,0,0,0.08);overflow:hidden;">
        <tr>
          <td style="padding:24px 28px;border-bottom:1px solid rgba(0,0,0,0.06);background:#0e0e12;">
            <p style="margin:0;font-family:'JetBrains Mono',ui-monospace,monospace;font-size:11px;letter-spacing:2px;color:#E63946;text-transform:uppercase;">Nouveau lead · Diagnostic IA</p>
            <h1 style="margin:8px 0 0;font-size:20px;color:#fff;font-weight:600;line-height:1.3;">
              <a href="mailto:${esc(email)}" style="color:#fff;text-decoration:none;">${esc(email)}</a>
            </h1>
            <p style="margin:6px 0 0;font-size:13px;color:#aaa;">Score global : <strong style="color:#fff;">${esc(total)} / 24</strong> · ${esc(VERDICT_FR[verdict] ?? verdict)}</p>
          </td>
        </tr>
        <tr>
          <td style="padding:24px 28px;">
            <p style="margin:0 0 12px;font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:2px;color:#999;text-transform:uppercase;">Scores par pilier</p>
            <table cellpadding="0" cellspacing="0" border="0" width="100%">${pillarRows}</table>
            <p style="margin:18px 0 0;font-size:13px;color:#1a1a1d;font-family:-apple-system,sans-serif;line-height:1.5;">
              Pilier le plus faible : <strong>${esc(weakest)}</strong>. C'est l'angle d'accroche pour l'appel.
            </p>
          </td>
        </tr>
        <tr>
          <td style="padding:18px 28px;background:#fafaf8;border-top:1px solid rgba(0,0,0,0.06);font-size:12px;color:#666;font-family:-apple-system,sans-serif;">
            Réponds-lui → <a href="mailto:${esc(email)}" style="color:#E63946;">${esc(email)}</a>
          </td>
        </tr>
      </table>
      <p style="margin:16px 0 0;font-size:11px;color:#999;font-family:-apple-system,sans-serif;">Notification automatique · /outils/pret-pour-lia</p>
    </td></tr>
  </table>
</body>
</html>`

    const text = `Nouveau lead Diagnostic IA
Email : ${email}
Score global : ${total ?? '?'} / 24 (${VERDICT_FR[verdict] ?? verdict})
${pillars.map((p) => `- ${p.name} : ${p.score}/8 (${LEVEL_FR[p.level ?? ''] ?? p.level})`).join('\n')}
Pilier le plus faible : ${weakest}
`

    await getResend().emails.send({
      from: NOTIFY_FROM,
      to: NOTIFY_TO,
      replyTo: email,
      subject,
      html,
      text,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[quiz-lead] failed', err)
    return NextResponse.json({ error: 'notify_failed' }, { status: 500 })
  }
}
