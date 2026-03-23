import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { prenom, email, role, secteur, resourceId, newsletter } = body

    // Validate
    if (!prenom?.trim() || !email?.trim() || !resourceId) {
      return NextResponse.json({ error: 'Champs requis manquants' }, { status: 400 })
    }

    // Check duplicate
    const { data: existing } = await supabase
      .from('resource_leads')
      .select('id')
      .eq('email', email)
      .eq('resource_id', resourceId)
      .single()

    if (existing) {
      // Already downloaded — still return success
      return NextResponse.json({ success: true, duplicate: true })
    }

    // Insert lead
    const { error: insertError } = await supabase
      .from('resource_leads')
      .insert({
        prenom: prenom.trim(),
        email: email.trim().toLowerCase(),
        role,
        secteur,
        resource_id: resourceId,
        newsletter: newsletter || false,
      })

    if (insertError) {
      console.error('Supabase insert error:', insertError)
      return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
    }

    // Newsletter upsert
    if (newsletter) {
      await supabase
        .from('newsletter_subscribers')
        .upsert(
          {
            email: email.trim().toLowerCase(),
            prenom: prenom.trim(),
            role,
            secteur,
            source: `resource:${resourceId}`,
            active: true,
          },
          { onConflict: 'email' }
        )
    }

    // Send email via Resend (in background, don't block)
    let emailSent = false
    try {
      await resend.emails.send({
        from: 'NateSystem <hello@natesystem.com>',
        to: email.trim().toLowerCase(),
        subject: `${prenom}, ton pack est pr\u00eat`,
        html: `
          <div style="font-family: -apple-system, sans-serif; max-width: 560px; margin: 0 auto; padding: 40px 24px;">
            <p style="color: #ED4245; font-weight: 700; font-size: 14px; letter-spacing: 1px; margin-bottom: 32px;">NATESYSTEM</p>
            <p style="font-size: 16px; color: #1a1a1a;">Bonjour ${prenom},</p>
            <p style="font-size: 15px; color: #444; line-height: 1.6; margin-top: 12px;">
              Ton pack est en pi\u00e8ce jointe. Tu peux aussi le t\u00e9l\u00e9charger directement depuis notre site.
            </p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 28px 0;" />
            <p style="font-size: 15px; color: #1a1a1a; font-weight: 600;">Tu veux qu&rsquo;on impl\u00e9mente \u00e7a dans ta bo\u00eete ?</p>
            <p style="margin-top: 16px;">
              <a href="https://cal.com/natesystem/audit" style="display: inline-block; padding: 14px 28px; background: #ED4245; color: #fff; text-decoration: none; border-radius: 10px; font-weight: 600; font-size: 14px;">
                R\u00e9server un audit gratuit 30 min
              </a>
            </p>
            <p style="font-size: 12px; color: #999; margin-top: 32px; line-height: 1.5;">
              Nathan Goutagny &middot; NateSystem &middot; natesystem.com
            </p>
          </div>
        `,
      })
      emailSent = true
    } catch (e) {
      console.error('Resend error:', e)
    }

    // Update email_sent status
    if (emailSent) {
      await supabase
        .from('resource_leads')
        .update({ email_sent: true })
        .eq('email', email.trim().toLowerCase())
        .eq('resource_id', resourceId)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Download API error:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
