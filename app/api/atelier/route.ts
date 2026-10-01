import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { API_URL } from '@/lib/constants'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/**
 * /api/atelier, la demande d'atelier part vers DEUX destinations.
 *
 *   1. Un mail à Nathan, via Resend. C'est l'alerte : il la lit et il rappelle.
 *   2. Le CRM, via natesystem-backend/api/leads/capture-atelier, qui écrit le
 *      contact dans Supabase avec sa date de prochaine action. C'est le
 *      registre, et c'est ce qui évite la ressaisie à la main.
 *
 * Les deux partent EN PARALLÈLE et ne se bloquent pas : si le CRM tombe,
 * Nathan reçoit quand même son mail et rien n'est perdu.
 *
 * ⚠︎ CETTE ROUTE N'AVALE PAS SES ERREURS, et c'est la différence avec
 * /api/book/notify. Là-bas l'email n'est qu'une notification, le lead est déjà
 * parti au backend et le rendez-vous se prend ensuite sur Cal : un hoquet de
 * Resend ne doit rien bloquer. Ici le formulaire EST la conversion. Si les
 * deux chemins échouent, on le dit, et la page affiche l'adresse email en
 * repli plutôt que de laisser croire que c'est parti.
 */

const NOTIFY_TO = 'nathan@natesystem.com'
const NOTIFY_FROM = 'NateSystem <hello@natesystem.com>'
const CRM_ENDPOINT = `${API_URL}/api/leads/capture-atelier`

// Instanciation différée : une RESEND_API_KEY absente ne doit échouer qu'à la
// requête, pas à la collecte de données du build Vercel.
let resendClient: Resend | null = null
const getResend = (): Resend => {
  if (resendClient) return resendClient
  const key = process.env.RESEND_API_KEY
  if (!key) throw new Error('RESEND_API_KEY not set')
  resendClient = new Resend(key)
  return resendClient
}

type Payload = {
  nom?: string
  /** Case requise du formulaire : « oui » si le directeur a confirmé les prérequis. */
  prerequis?: string
  fonction?: string
  etablissement?: string
  email?: string
  telephone?: string
  personnes?: string
  lieu?: string
  mot?: string
}

const esc = (s: unknown) =>
  String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

const row = (label: string, value: string | undefined): string => `
  <tr>
    <td style="padding:7px 14px 7px 0;font-size:12px;color:#666;font-family:-apple-system,sans-serif;vertical-align:top;white-space:nowrap;">${esc(label)}</td>
    <td style="padding:7px 0;font-size:14px;color:#1a1a1d;font-family:-apple-system,sans-serif;line-height:1.5;">${
      value?.trim() ? esc(value) : '<span style="color:#999;">·</span>'
    }</td>
  </tr>`

export async function POST(req: NextRequest) {
  let body: Payload
  try {
    body = (await req.json()) as Payload
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 })
  }

  const {
    nom = '', fonction = '', etablissement = '', email = '',
    telephone = '', personnes = '', lieu = '', mot = '', prerequis = '',
  } = body

  if (!nom.trim() || !email.trim() || !etablissement.trim()) {
    return NextResponse.json({ error: 'missing_fields' }, { status: 400 })
  }

  // La fonction du demandeur change l'urgence : un chef d'établissement qui
  // demande lui-même, c'est la condition « direction présente » déjà remplie.
  const direction = /chef|direction|responsable/i.test(fonction)
  const subject = `${direction ? '🔴 ' : ''}Atelier demandé · ${etablissement.trim()} (${nom.trim()})`

  const html = `<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#f5f4f0;font-family:-apple-system,'Segoe UI',sans-serif;">
  <table cellpadding="0" cellspacing="0" border="0" width="100%" style="padding:32px 16px;">
    <tr><td align="center">
      <table cellpadding="0" cellspacing="0" border="0" width="620" style="max-width:620px;background:#fff;border-radius:12px;border:1px solid rgba(0,0,0,0.08);overflow:hidden;">
        <tr>
          <td style="padding:24px 28px;background:#0e0e12;border-bottom:1px solid rgba(0,0,0,0.06);">
            <p style="margin:0;font-family:'JetBrains Mono',ui-monospace,monospace;font-size:11px;letter-spacing:2px;color:#E63946;text-transform:uppercase;">Demande d'atelier · /atelier</p>
            <h1 style="margin:8px 0 0;font-size:22px;color:#fff;font-weight:600;line-height:1.3;">${esc(etablissement)}</h1>
            <p style="margin:6px 0 0;font-size:13px;color:#aaa;">
              ${esc(nom)}${fonction.trim() ? `, ${esc(fonction)}` : ''} ·
              <a href="mailto:${esc(email)}" style="color:#E63946;text-decoration:none;">${esc(email)}</a>
            </p>
          </td>
        </tr>
        <tr>
          <td style="padding:24px 28px;">
            <table cellpadding="0" cellspacing="0" border="0" width="100%">
              ${row('Téléphone', telephone)}
              ${row('Participants', personnes)}
              ${row('Format souhaité', lieu)}
              ${row('Fonction', fonction)}
              ${row('Prérequis confirmés', prerequis === 'oui' ? 'Oui, case cochée' : 'NON')}
            </table>
          </td>
        </tr>
        ${mot.trim() ? `
        <tr>
          <td style="padding:0 28px 24px;">
            <p style="margin:0 0 8px;font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:2px;color:#999;text-transform:uppercase;">Son mot</p>
            <p style="margin:0;font-size:14px;color:#1a1a1d;line-height:1.6;white-space:pre-wrap;border-left:2px solid #E63946;padding-left:14px;">${esc(mot)}</p>
          </td>
        </tr>` : ''}
        <tr>
          <td style="padding:18px 28px;background:#fafaf8;border-top:1px solid rgba(0,0,0,0.06);font-size:12px;color:#666;">
            ${direction
              ? 'La direction demande elle-même : la condition « un membre de la direction dans la salle » est déjà remplie.'
              : 'Ce n\'est pas la direction qui demande. Vérifier qu\'un membre de la direction sera présent avant de caler la date.'}
            <br /><br />
            Réponds-lui → <a href="mailto:${esc(email)}" style="color:#E63946;">${esc(email)}</a>
          </td>
        </tr>
      </table>
      <p style="margin:16px 0 0;font-size:11px;color:#999;">Envoyé par natesystem.com/atelier</p>
    </td></tr>
  </table>
</body>
</html>`

  const text = `Demande d'atelier, ${etablissement}

${nom}${fonction ? `, ${fonction}` : ''}
Email : ${email}
Téléphone : ${telephone || '—'}
Participants : ${personnes || '—'}
Format : ${lieu || '—'}
Prérequis confirmés : ${prerequis === 'oui' ? 'oui' : 'NON'}
${mot.trim() ? `\nSon mot :\n${mot}\n` : ''}
${direction
  ? 'La direction demande elle-même, condition remplie.'
  : 'Ce n\'est pas la direction qui demande, vérifier sa présence avant de caler la date.'}

Réponds : ${email}
`

  const [mail, crm] = await Promise.allSettled([
    getResend().emails.send({
      from: NOTIFY_FROM,
      to: NOTIFY_TO,
      replyTo: email,
      subject,
      html,
      text,
    }),
    // Le CRM reçoit la charge brute : c'est lui qui décide du stage, du score
    // et de la date de prochaine action, pas la landing.
    fetch(CRM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nom, fonction, etablissement, email, telephone, personnes, lieu, mot, prerequis }),
    }).then((r) => {
      if (!r.ok) throw new Error(`CRM ${r.status}`)
      return r.json()
    }),
  ])

  if (mail.status === 'rejected') console.error('[atelier] mail échoué', mail.reason)
  if (crm.status === 'rejected') console.error('[atelier] CRM échoué', crm.reason)

  // Tant qu'un des deux est passé, la demande existe quelque part et le
  // visiteur n'a aucune raison de la ressaisir.
  if (mail.status === 'rejected' && crm.status === 'rejected') {
    return NextResponse.json({ error: 'send_failed' }, { status: 502 })
  }

  return NextResponse.json({
    success: true,
    notified: mail.status === 'fulfilled',
    recorded: crm.status === 'fulfilled',
  })
}
