import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allSlugs, getPlaybookBySlug } from '@/lib/playbooks'
import PlaybookHero from '../_components/PlaybookHero'
import PlaybookBullets from '../_components/PlaybookBullets'
import PlaybookTOC from '../_components/PlaybookTOC'
import PlaybookSocialProof from '../_components/PlaybookSocialProof'
import PlaybookCTA from '../_components/PlaybookCTA'
import PlaybookFooter from '../_components/PlaybookFooter'

type Params = { slug: string }

export function generateStaticParams(): Params[] {
  return allSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Params
}): Promise<Metadata> {
  const playbook = getPlaybookBySlug(params.slug)
  if (!playbook) return {}
  const url = `https://natesystem.com/playbook/${params.slug}`
  return {
    title: `${playbook.title} — NateSystem`,
    description: playbook.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: playbook.title,
      description: playbook.metaDescription,
      url,
      type: 'website',
      locale: 'fr_FR',
    },
    twitter: {
      card: 'summary_large_image',
      title: playbook.title,
      description: playbook.metaDescription,
    },
  }
}

export default function PlaybookSlugPage({ params }: { params: Params }) {
  const playbook = getPlaybookBySlug(params.slug)
  if (!playbook) notFound()

  return (
    <>
      <PlaybookHero playbook={playbook} />
      <PlaybookBullets bullets={playbook.bullets} />
      <PlaybookTOC />
      <PlaybookSocialProof />
      <PlaybookCTA slug={playbook.slug} />
      <PlaybookFooter />
    </>
  )
}
