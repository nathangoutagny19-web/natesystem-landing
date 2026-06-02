import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/**
 * /api/book/notify — fan-out a "new /book lead" email to Nathan.
 *
 * The /book flow already POSTs the full payload to the legacy backend
 * (natesystem-backend.vercel.app/api/leads/capture → Supabase). This
 * route is the in-repo notification layer: as soon as the prospect
 * finishes the form + 4-step audit, Nathan gets a readable summary
 * in his inbox so he can prep the call before they show up on Cal.
 *
 * Best-effort: any failure here is swallowed so the user-facing flow
 * (Cal embed) is never blocked by a Resend hiccup. The legacy backend
 * remains the source of truth.
 */

const NOTIFY_TO = 'nathan@natesystem.com'
const NOTIFY_FROM = 'NateSystem <hello@natesystem.com>'

// Deferred so a missing RESEND_API_KEY only fails at request time, not at
// build/data-collection time (Vercel collects page data without env in some
// preview/build contexts).
let resendClient: Resend | null = null
const getResend = (): Resend => {
  if (resendClient) return resendClient
  const key = process.env.RESEND_API_KEY
  if (!key) throw new Error('RESEND_API_KEY not set')
  resendClient = new Resend(key)
  return resendClient
}

type Audit = {
  tools?: string[]
  saasCount?: string
  toolsConnected?: string
  tasks?: string[]
  hoursWasted?: string
  whoDoesIt?: string
  processDocs?: string
  dataLocations?: string[]
  absenceImpact?: string
  desiredResults?: string[]
  urgency?: string
  triedBefore?: string
}

type Payload = {
  prenom?: string
  nom?: string
  email?: string
  entreprise?: string
  site?: string
  role?: string
  secteur?: string
  taille?: string
  challenge?: string
  budget?: string
  details?: string
  audit?: Audit
  lang?: string
}

const esc = (s: unknown) =>
  String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

const fmt = (v: string | string[] | undefined): string => {
  if (!v) return '<span style="color:#999;">—</span>'
  if (Array.isArray(v)) return v.length ? esc(v.join(', ')) : '<span style="color:#999;">—</span>'
  return esc(v)
}

const row = (label: string, value: string | string[] | undefined): string => `
  <tr>
    <td style="padding:6px 12px 6px 0;font-size:12px;color:#666;font-family:-apple-system,sans-serif;vertical-align:top;white-space:nowrap;">${esc(label)}</td>
    <td style="padding:6px 0;font-size:13px;color:#1a1a1d;font-family:-apple-system,sans-serif;line-height:1.5;">${fmt(value)}</td>
  </tr>`

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Payload
    const {
      prenom = '', nom = '', email = '', entreprise = '', site = '',
      role = '', secteur = '', taille = '', challenge = '', budget = '',
      details = '', audit = {}, lang = 'fr',
    } = body

    if (!email?.trim() || !prenom?.trim()) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const fullName = `${prenom} ${nom}`.trim()
    const urgencyTag = audit.urgency?.toLowerCase().includes('critique') || audit.urgency?.toLowerCase().includes('critical')
      ? '🔥 '
      : ''

    const subject = `${urgencyTag}Nouveau lead /book — ${fullName}${entreprise ? ` (${entreprise})` : ''}`

    const html = `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#f5f4f0;font-family:-apple-system,'Segoe UI',sans-serif;">
  <table cellpadding="0" cellspacing="0" border="0" width="100%" style="padding:32px 16px;">
    <tr>
      <td align="center">
        <table cellpadding="0" cellspacing="0" border="0" width="640" style="max-width:640px;background:#fff;border-radius:12px;border:1px solid rgba(0,0,0,0.08);overflow:hidden;">
          <tr>
            <td style="padding:24px 28px;border-bottom:1px solid rgba(0,0,0,0.06);background:#0e0e12;">
              <p style="margin:0;font-family:'JetBrains Mono',ui-monospace,monospace;font-size:11px;letter-spacing:2px;color:#E63946;text-transform:uppercase;">Nouveau lead · /book</p>
              <h1 style="margin:8px 0 0;font-size:22px;color:#fff;font-weight:600;line-height:1.3;">${esc(fullName)}${entreprise ? ` <span style="color:#888;font-weight:400;">— ${esc(entreprise)}</span>` : ''}</h1>
              <p style="margin:6px 0 0;font-size:13px;color:#aaa;">
                <a href="mailto:${esc(email)}" style="color:#E63946;text-decoration:none;">${esc(email)}</a>
                ${site ? ` · <a href="${esc(site)}" style="color:#aaa;text-decoration:none;">${esc(site)}</a>` : ''}
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding:24px 28px;">
              <p style="margin:0 0 12px;font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:2px;color:#999;text-transform:uppercase;">Identité</p>
              <table cellpadding="0" cellspacing="0" border="0" width="100%">
                ${row('Rôle', role)}
                ${row('Secteur', secteur)}
                ${row('Taille équipe', taille)}
                ${row('Défi principal', challenge)}
                ${row('Budget annuel', budget)}
                ${row('Langue', lang)}
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:0 28px 24px;">
              <p style="margin:0 0 12px;font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:2px;color:#999;text-transform:uppercase;">Stack actuelle</p>
              <table cellpadding="0" cellspacing="0" border="0" width="100%">
                ${row('Outils', audit.tools)}
                ${row('Nb SaaS payés', audit.saasCount)}
                ${row('Outils connectés', audit.toolsConnected)}
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:0 28px 24px;">
              <p style="margin:0 0 12px;font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:2px;color:#999;text-transform:uppercase;">Temps perdu</p>
              <table cellpadding="0" cellspacing="0" border="0" width="100%">
                ${row('Tâches répétitives', audit.tasks)}
                ${row('Heures/sem perdues', audit.hoursWasted)}
                ${row('Qui les fait', audit.whoDoesIt)}
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:0 28px 24px;">
              <p style="margin:0 0 12px;font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:2px;color:#999;text-transform:uppercase;">Process & données</p>
              <table cellpadding="0" cellspacing="0" border="0" width="100%">
                ${row('Process documentés', audit.processDocs)}
                ${row('Où vivent les données', audit.dataLocations)}
                ${row('Impact absence clé', audit.absenceImpact)}
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:0 28px 24px;">
              <p style="margin:0 0 12px;font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:2px;color:#999;text-transform:uppercase;">Objectifs & urgence</p>
              <table cellpadding="0" cellspacing="0" border="0" width="100%">
                ${row('Résultats voulus 90j', audit.desiredResults)}
                ${row('Urgence', audit.urgency)}
                ${row('Déjà tenté', audit.triedBefore)}
              </table>
            </td>
          </tr>

          ${details?.trim() ? `
          <tr>
            <td style="padding:0 28px 24px;">
              <p style="margin:0 0 8px;font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:2px;color:#999;text-transform:uppercase;">Précisions</p>
              <p style="margin:0;font-size:13px;color:#1a1a1d;line-height:1.55;white-space:pre-wrap;border-left:2px solid #E63946;padding-left:12px;">${esc(details)}</p>
            </td>
          </tr>` : ''}

          <tr>
            <td style="padding:20px 28px;background:#fafaf8;border-top:1px solid rgba(0,0,0,0.06);font-size:12px;color:#666;font-family:-apple-system,sans-serif;">
              Réponds-leur directement → <a href="mailto:${esc(email)}" style="color:#E63946;">${esc(email)}</a>
            </td>
          </tr>
        </table>
        <p style="margin:16px 0 0;font-size:11px;color:#999;font-family:-apple-system,sans-serif;">
          Notification envoyée automatiquement par /book · natesystem.com
        </p>
      </td>
    </tr>
  </table>
</body>
</html>`

    const text = `Nouveau lead /book — ${fullName}${entreprise ? ` (${entreprise})` : ''}
Email : ${email}
${site ? `Site : ${site}\n` : ''}
— Identité —
Rôle : ${role || '—'}
Secteur : ${secteur || '—'}
Équipe : ${taille || '—'}
Défi : ${challenge || '—'}
Budget : ${budget || '—'}
Langue : ${lang}

— Stack actuelle —
Outils : ${audit.tools?.join(', ') || '—'}
Nb SaaS payés : ${audit.saasCount || '—'}
Outils connectés : ${audit.toolsConnected || '—'}

— Temps perdu —
Tâches répétitives : ${audit.tasks?.join(', ') || '—'}
Heures/sem perdues : ${audit.hoursWasted || '—'}
Qui les fait : ${audit.whoDoesIt || '—'}

— Process & données —
Process documentés : ${audit.processDocs || '—'}
Où vivent les données : ${audit.dataLocations?.join(', ') || '—'}
Impact absence clé : ${audit.absenceImpact || '—'}

— Objectifs & urgence —
Résultats voulus 90j : ${audit.desiredResults?.join(', ') || '—'}
Urgence : ${audit.urgency || '—'}
Déjà tenté : ${audit.triedBefore || '—'}
${details?.trim() ? `\n— Précisions —\n${details}\n` : ''}
Réponds : ${email}
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
    console.error('[book/notify] failed', err)
    return NextResponse.json({ error: 'notify_failed' }, { status: 500 })
  }
}
