import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, XCircle } from 'lucide-react'
import { supabaseAdmin } from '@/lib/supabase-admin'
import PlaybookFooter from '../_components/PlaybookFooter'

type SearchParams = { token?: string; email?: string; slug?: string }

export const metadata: Metadata = {
  title: 'Désabonnement — NateSystem',
  robots: { index: false, follow: false },
}

export const dynamic = 'force-dynamic'

function decodeToken(token: string): { email: string; slug: string } | null {
  try {
    const raw = Buffer.from(token, 'base64url').toString('utf-8')
    const [email, slug] = raw.split('|')
    if (!email || !slug) return null
    return { email, slug }
  } catch {
    return null
  }
}

async function unsubscribe(email: string, slug: string): Promise<boolean> {
  try {
    const supabase = supabaseAdmin()
    const { error } = await supabase
      .from('playbook_leads')
      .update({ unsubscribed_at: new Date().toISOString() })
      .eq('email', email.toLowerCase())
      .eq('playbook_slug', slug)
    if (error) {
      console.error('Unsubscribe error:', error)
      return false
    }
    return true
  } catch (err) {
    console.error('Unsubscribe init error:', err)
    return false
  }
}

export default async function UnsubscribePage({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  let email: string | null = null
  let slug: string | null = null

  if (searchParams.token) {
    const decoded = decodeToken(searchParams.token)
    if (decoded) {
      email = decoded.email
      slug = decoded.slug
    }
  } else if (searchParams.email && searchParams.slug) {
    email = searchParams.email
    slug = searchParams.slug
  }

  const ok = email && slug ? await unsubscribe(email, slug) : false

  return (
    <>
      <section className="pb-unsub">
        {ok ? (
          <>
            <div className="pb-ty-check" aria-hidden="true">
              <CheckCircle2 size={32} strokeWidth={1.8} />
            </div>
            <span className="pb-eyebrow-soft">Désabonnement confirmé</span>
            <h1 className="pb-h2" style={{ marginTop: 12 }}>
              C&apos;est fait.
            </h1>
            <p className="pb-lead" style={{ margin: '0 auto 24px' }}>
              Vous ne recevrez plus aucun email concernant ce playbook. Si vous changez
              d&apos;avis, vous pouvez le re-télécharger à tout moment.
            </p>
          </>
        ) : (
          <>
            <div
              className="pb-ty-check"
              aria-hidden="true"
              style={{ background: 'rgba(154, 154, 160, 0.12)', color: '#6b6b70' }}
            >
              <XCircle size={32} strokeWidth={1.8} />
            </div>
            <span className="pb-eyebrow-soft" style={{ color: '#6b6b70' }}>
              Lien expiré ou invalide
            </span>
            <h1 className="pb-h2" style={{ marginTop: 12 }}>
              Désabonnement impossible.
            </h1>
            <p className="pb-lead" style={{ margin: '0 auto 24px' }}>
              Le lien est invalide. Répondez simplement à un de nos mails avec
              &laquo;&nbsp;désabonnement&nbsp;&raquo; et c&apos;est traité dans la journée.
            </p>
          </>
        )}
        <Link href="/" className="pb-btn-secondary">
          Retour à natesystem.com
        </Link>
      </section>
      <PlaybookFooter />
    </>
  )
}
