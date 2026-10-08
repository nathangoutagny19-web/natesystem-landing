import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/**
 * /api/bibliotheque/desinscription : quelqu'un ne veut plus recevoir d'email.
 *
 * ⚠︎ ÇA PREVIENT NATHAN, ÇA NE TOUCHE PAS LE CRM. La route lead-magnet du
 * backend sait écrire `newsletter_opted_in: true` à la création, mais aucune
 * route n'existe pour le repasser à false, et la landing n'a pas d'accès direct
 * à Supabase (retiré le 29/09/2026). La désinscription se fait donc à la main
 * dans le cockpit, sur ce mail. Le jour où le backend expose une route de
 * retrait, c'est ici qu'on la branche.
 *
 * La réponse est la même que l'adresse soit connue ou non : la page ne doit
 * pas servir à vérifier qui est inscrit.
 */

const NOTIFY_TO = 'nathan@natesystem.com'
const NOTIFY_FROM = 'NateSystem <hello@natesystem.com>'

export async function POST(req: NextRequest) {
  let body: { email?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 })
  }

  const email = String(body.email ?? '').trim().toLowerCase().slice(0, 200)
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ error: 'invalid_email' }, { status: 400 })
  }

  const key = process.env.RESEND_API_KEY
  if (!key) {
    console.error('[bibliotheque/desinscription] RESEND_API_KEY absente')
    return NextResponse.json({ error: 'send_failed' }, { status: 502 })
  }

  try {
    await new Resend(key).emails.send({
      from: NOTIFY_FROM,
      to: NOTIFY_TO,
      subject: `⛔ Désinscription bibliothèque · ${email}`,
      text: `${email} demande à ne plus recevoir d'email.\n\nÀ faire dans le cockpit : passer newsletter_opted_in à false sur ce contact, et ne plus lui écrire.`,
    })
  } catch (err) {
    console.error('[bibliotheque/desinscription] mail échoué', err)
    return NextResponse.json({ error: 'send_failed' }, { status: 502 })
  }

  return NextResponse.json({ success: true })
}
