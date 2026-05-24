import { NextResponse, type NextRequest } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'
import {
  PLAYBOOK_BUCKET,
  SIGNED_URL_TTL_SECONDS,
  supabaseAdmin,
} from '@/lib/supabase-admin'
import { getPlaybookBySlug, storageObjectFor } from '@/lib/playbooks'

const bodySchema = z.object({
  slug: z.string().min(1),
  first_name: z.string().min(1).max(60),
  email: z.string().email(),
  rgpd_consent: z.literal(true),
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
})

const SITE = 'https://natesystem.com'

function unsubscribeUrl(email: string, slug: string): string {
  const token = Buffer.from(`${email}|${slug}`, 'utf-8').toString('base64url')
  return `${SITE}/playbook/unsubscribe?token=${token}`
}

function renderEmailHtml({
  firstName,
  downloadUrl,
  unsubUrl,
  playbookTitle,
}: {
  firstName: string
  downloadUrl: string
  unsubUrl: string
  playbookTitle: string
}): string {
  return `<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${playbookTitle}</title>
</head>
<body style="margin:0;padding:0;background:#faf8f4;font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif;color:#1a1a1d;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#faf8f4;padding:40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border:1px solid rgba(26,26,29,0.08);border-radius:8px;padding:40px 36px;">
          <tr>
            <td>
              <p style="font-family:'JetBrains Mono',Menlo,monospace;font-size:11px;letter-spacing:2px;color:#E63946;font-weight:700;margin:0 0 24px;">● NATESYSTEM</p>
              <p style="font-size:16px;line-height:1.55;margin:0 0 8px;">Bonjour ${firstName},</p>
              <p style="font-size:15px;line-height:1.6;margin:0 0 24px;color:#3a3a3f;">
                Votre playbook est prêt : <strong style="color:#1a1a1d;">${playbookTitle}</strong>.<br />
                Lisible en 25 minutes, actionnable dès lundi matin.
              </p>
              <table role="presentation" cellpadding="0" cellspacing="0" style="margin:8px 0 24px;">
                <tr>
                  <td>
                    <a href="${downloadUrl}" style="display:inline-block;background:#E63946;color:#ffffff;text-decoration:none;font-weight:600;font-size:15px;padding:14px 24px;border-radius:6px;">Télécharger le PDF</a>
                  </td>
                </tr>
              </table>
              <p style="font-size:13px;line-height:1.55;color:#6b6b70;margin:0 0 24px;">
                Le lien est valable 24h. Si vous le manquez, il vous suffit de redemander le playbook depuis la page d&rsquo;origine.
              </p>
              <hr style="border:none;border-top:1px solid rgba(26,26,29,0.1);margin:28px 0;" />
              <p style="font-size:15px;line-height:1.55;color:#1a1a1d;margin:0 0 8px;font-weight:600;">Vous voulez en discuter ?</p>
              <p style="font-size:14px;line-height:1.55;color:#3a3a3f;margin:0 0 20px;">
                30 minutes au téléphone, sans engagement. On regarde où, dans votre activité, l&rsquo;IA remplacerait de vraies heures de travail.
              </p>
              <p style="margin:0 0 28px;">
                <a href="https://cal.com/natesystem/session-strategique" style="color:#1a1a1d;text-decoration:underline;font-size:14px;">Réserver 30 min →</a>
              </p>
              <p style="font-family:'JetBrains Mono',Menlo,monospace;font-size:10px;letter-spacing:1.5px;color:#9a9aa0;text-transform:uppercase;margin:0 0 6px;">— Nathan Goutagny, NateSystem</p>
              <p style="font-size:11px;color:#9a9aa0;margin:24px 0 0;">
                Vous recevez ce mail car vous avez téléchargé un playbook sur natesystem.com.
                <a href="${unsubUrl}" style="color:#9a9aa0;text-decoration:underline;">Se désabonner</a>.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

export async function POST(req: NextRequest) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Corps invalide' }, { status: 400 })
  }

  const parsed = bodySchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? 'Données invalides' },
      { status: 400 }
    )
  }

  const { slug, first_name, email, rgpd_consent, utm_source, utm_medium, utm_campaign } =
    parsed.data

  const playbook = getPlaybookBySlug(slug)
  if (!playbook) {
    return NextResponse.json({ error: 'Playbook introuvable' }, { status: 404 })
  }

  const normalizedEmail = email.trim().toLowerCase()
  const ipAddress =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? null
  const userAgent = req.headers.get('user-agent') ?? null

  let supabase
  try {
    supabase = supabaseAdmin()
  } catch (err) {
    console.error('Supabase init error:', err)
    return NextResponse.json(
      {
        error:
          'Le service est en cours de configuration. Écrivez-nous à nathan@natesystem.com et on vous envoie le playbook dans la minute.',
      },
      { status: 503 }
    )
  }

  const { error: upsertError } = await supabase.from('playbook_leads').upsert(
    {
      email: normalizedEmail,
      first_name: first_name.trim(),
      playbook_slug: slug,
      utm_source: utm_source ?? null,
      utm_medium: utm_medium ?? null,
      utm_campaign: utm_campaign ?? null,
      ip_address: ipAddress,
      user_agent: userAgent,
      rgpd_consent,
      unsubscribed_at: null,
    },
    { onConflict: 'email,playbook_slug', ignoreDuplicates: false }
  )

  if (upsertError) {
    console.error('playbook_leads upsert error:', upsertError)
    return NextResponse.json(
      { error: 'Erreur enregistrement' },
      { status: 500 }
    )
  }

  const { data: signed, error: signedError } = await supabase.storage
    .from(PLAYBOOK_BUCKET)
    .createSignedUrl(storageObjectFor(slug), SIGNED_URL_TTL_SECONDS)

  if (signedError || !signed?.signedUrl) {
    console.error('Signed URL error:', signedError)
    return NextResponse.json(
      {
        error:
          'Ce playbook est encore en finalisation. Écrivez-nous à nathan@natesystem.com avec le nom du secteur et on vous l\'envoie directement.',
      },
      { status: 503 }
    )
  }

  const resendKey = process.env.RESEND_API_KEY
  if (resendKey) {
    try {
      const resend = new Resend(resendKey)
      await resend.emails.send({
        from: 'NateSystem <hello@natesystem.com>',
        to: normalizedEmail,
        replyTo: 'nathan@natesystem.com',
        subject: `${first_name.trim()}, votre playbook est prêt`,
        html: renderEmailHtml({
          firstName: first_name.trim(),
          downloadUrl: signed.signedUrl,
          unsubUrl: unsubscribeUrl(normalizedEmail, slug),
          playbookTitle: playbook.title,
        }),
      })

      await supabase
        .from('playbook_leads')
        .update({ email_sent_at: new Date().toISOString() })
        .eq('email', normalizedEmail)
        .eq('playbook_slug', slug)
    } catch (err) {
      console.error('Resend error:', err)
      // Non-fatal: lead is saved, user has the link on thank-you page.
    }
  } else {
    console.warn('RESEND_API_KEY missing — skipping email send')
  }

  return NextResponse.json({ success: true })
}
