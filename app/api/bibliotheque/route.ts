import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { API_URL } from '@/lib/constants'
import { SECTEURS, SECTEUR_IDS, assetParSlug, type Secteur } from '@/lib/bibliotheque'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/**
 * /api/bibliotheque — la porte de la bibliothèque.
 *
 * Prénom et email, puis deux destinations en parallèle : un mail à Nathan, et
 * le CRM via la route lead-magnet du backend, qui sait déjà empiler les
 * téléchargements sur un contact existant au lieu d'écraser sa fiche.
 *
 * ⚠︎ L'APPEL AU CRM PART DU SERVEUR, PAS DU NAVIGATEUR, et c'est ce qui le
 * fait marcher. En production, ALLOWED_ORIGINS du backend ne contient que
 * nathangoutagny.com : tout appel depuis natesystem.com est bloqué au
 * preflight, et c'est ce qui casse /book et les lead magnets. De serveur à
 * serveur il n'y a pas d'origine, donc pas de preflight. Quand la variable
 * sera corrigée, ce code continuera de marcher tel quel.
 *
 * LA SEGMENTATION. Le type d'établissement (facultatif) part dans le champ
 * `secteur` de la route, qui l'écrit dans `contacts.sector`. ⚠︎ Seulement à la
 * création du contact : pour un contact déjà connu, la route n'écrase rien,
 * c'est voulu côté CRM (un tiers qui connaît l'email ne doit pas pouvoir
 * réécrire la fiche). Le secteur reste alors lisible dans le mail à Nathan.
 * La ressource ouverte part comme `lead_magnet_id`, ce qui l'empile dans
 * `lead_magnets_downloaded` et dans la timeline du contact.
 *
 * LE CONSENTEMENT. Le formulaire dit, avant l'envoi, que Nathan écrira à
 * chaque nouvelle ressource et qu'on peut se désinscrire : d'où
 * `newsletter: true`. Le retrait passe par /bibliotheque/desinscription.
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

const esc = (s: unknown) =>
  String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

export async function POST(req: NextRequest) {
  let body: { prenom?: string; email?: string; lang?: string; secteur?: string; slug?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 })
  }

  const prenom = String(body.prenom ?? '').trim().slice(0, 60)
  const email = String(body.email ?? '').trim().toLowerCase().slice(0, 200)
  const lang = body.lang === 'en' ? 'en' : 'fr'
  /* Tout ce qui ne figure pas dans les listes est ignoré, pas rejeté : un
     champ facultatif mal rempli ne doit pas fermer la porte. */
  const secteur = (SECTEUR_IDS as string[]).includes(String(body.secteur))
    ? (body.secteur as Secteur)
    : body.secteur === 'autre'
      ? 'autre'
      : null
  const secteurLabel = secteur
    ? secteur === 'autre'
      ? 'Autre'
      : SECTEURS.find((x) => x.id === secteur)!.fr
    : null
  const asset = body.slug ? assetParSlug(String(body.slug)) : undefined

  if (!prenom || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ error: 'missing_fields' }, { status: 400 })
  }

  const [mail, crm] = await Promise.allSettled([
    getResend().emails.send({
      from: NOTIFY_FROM,
      to: NOTIFY_TO,
      replyTo: email,
      subject: `Bibliothèque ouverte · ${prenom}${secteurLabel ? ` (${secteurLabel})` : ''}`,
      text: `${prenom} vient d'ouvrir la bibliothèque.\nEmail : ${email}\nÉtablissement : ${secteurLabel ?? 'non précisé'}\nDepuis : ${asset ? asset.titreFr : 'la page de la bibliothèque'}\nLangue : ${lang}\n\nRéponds : ${email}`,
      html: `<!DOCTYPE html><html><body style="margin:0;padding:32px 16px;background:#f5f4f0;font-family:-apple-system,sans-serif;">
<table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td align="center">
<table cellpadding="0" cellspacing="0" border="0" width="560" style="max-width:560px;background:#fff;border-radius:12px;border:1px solid rgba(0,0,0,.08);overflow:hidden;">
<tr><td style="padding:24px 28px;background:#0e0e12;">
  <p style="margin:0;font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:2px;color:#E63946;text-transform:uppercase;">Biblioth&egrave;que &middot; /bibliotheque</p>
  <h1 style="margin:8px 0 0;font-size:22px;color:#fff;font-weight:600;">${esc(prenom)}</h1>
  <p style="margin:6px 0 0;font-size:13px;color:#aaa;"><a href="mailto:${esc(email)}" style="color:#E63946;text-decoration:none;">${esc(email)}</a></p>
</td></tr>
<tr><td style="padding:20px 28px;font-size:13px;color:#666;">
  &Eacute;tablissement : ${esc(secteurLabel ?? 'non précisé')}<br />
  Depuis : ${esc(asset ? asset.titreFr : 'la page de la bibliothèque')}<br />
  Langue : ${esc(lang)}<br /><br />R&eacute;ponds-lui &rarr; <a href="mailto:${esc(email)}" style="color:#E63946;">${esc(email)}</a>
</td></tr></table></td></tr></table></body></html>`,
    }),
    fetch(`${API_URL}/api/leads/capture-lead-magnet`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        prenom,
        email,
        source: 'bibliotheque',
        lead_magnet_id: asset ? asset.slug : 'bibliotheque',
        lead_magnet_name: asset ? asset.titreFr : 'Bibliothèque NateSystem',
        secteur: secteurLabel,
        newsletter: true,
        metadata: { lang, secteur, slug: asset?.slug ?? null },
      }),
    }).then((r) => {
      if (!r.ok) throw new Error(`CRM ${r.status}`)
      return r.json()
    }),
  ])

  if (mail.status === 'rejected') console.error('[bibliotheque] mail échoué', mail.reason)
  if (crm.status === 'rejected') console.error('[bibliotheque] CRM échoué', crm.reason)

  /* La porte s'ouvre dès qu'une des deux destinations a reçu l'inscription :
     refuser l'accès parce que NOTRE mail n'est pas parti, ce serait lui faire
     payer notre panne. */
  if (mail.status === 'rejected' && crm.status === 'rejected') {
    return NextResponse.json({ error: 'send_failed' }, { status: 502 })
  }

  return NextResponse.json({
    success: true,
    notified: mail.status === 'fulfilled',
    recorded: crm.status === 'fulfilled',
  })
}
