import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CheckCircle2 } from 'lucide-react'
import { allSlugs, getPlaybookBySlug, storageObjectFor } from '@/lib/playbooks'
import {
  PLAYBOOK_BUCKET,
  SIGNED_URL_TTL_SECONDS,
  supabaseAdmin,
} from '@/lib/supabase-admin'
import PlaybookFooter from '../../_components/PlaybookFooter'

type Params = { slug: string }
type SearchParams = { email?: string }

export const metadata: Metadata = {
  title: 'Merci — votre playbook arrive',
  robots: { index: false, follow: false },
}

export function generateStaticParams(): Params[] {
  return allSlugs().map((slug) => ({ slug }))
}

export const dynamic = 'force-dynamic'

async function getFallbackDownloadUrl(slug: string): Promise<string | null> {
  try {
    const supabase = supabaseAdmin()
    const { data, error } = await supabase.storage
      .from(PLAYBOOK_BUCKET)
      .createSignedUrl(storageObjectFor(slug), SIGNED_URL_TTL_SECONDS)
    if (error || !data?.signedUrl) return null
    return data.signedUrl
  } catch {
    return null
  }
}

export default async function ThankYouPage({
  params,
  searchParams,
}: {
  params: Params
  searchParams: SearchParams
}) {
  const playbook = getPlaybookBySlug(params.slug)
  if (!playbook) notFound()

  const email = searchParams.email
  const downloadUrl = await getFallbackDownloadUrl(params.slug)

  return (
    <>
      <section className="pb-ty">
        <div className="pb-ty-check" aria-hidden="true">
          <CheckCircle2 size={32} strokeWidth={1.8} />
        </div>
        <span className="pb-eyebrow-soft">Votre playbook arrive</span>
        <h1 className="pb-h2" style={{ marginTop: 12 }}>
          C&apos;est en route{email ? ' à ' : ''}
          {email && <span style={{ color: 'var(--pb-red)' }}>{email}</span>}.
        </h1>
        <p className="pb-lead" style={{ margin: '0 auto 28px' }}>
          Vérifiez votre boîte de réception dans les 30 prochaines secondes — y compris
          le dossier spam. Si vous voulez le PDF immédiatement, voici le lien direct&nbsp;:
        </p>
        {downloadUrl ? (
          <a className="pb-btn-primary" style={{ maxWidth: 320, margin: '0 auto' }} href={downloadUrl}>
            Télécharger le PDF maintenant
          </a>
        ) : (
          <p className="pb-microcopy" style={{ marginTop: 8 }}>
            Si le lien direct n&apos;apparaît pas, le mail arrive dans moins d&apos;une minute.
          </p>
        )}
        <div className="pb-ty-secondary">
          <Link href="/playbook" className="pb-btn-secondary">
            Voir les autres playbooks
          </Link>
          <Link href="/" className="pb-btn-secondary">
            Découvrir NateSystem
          </Link>
        </div>
      </section>
      <PlaybookFooter />
    </>
  )
}
