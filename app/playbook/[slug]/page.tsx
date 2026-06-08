import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allSlugs, getPlaybookBySlug } from '@/lib/playbooks'
import PlaybookHero from '../_components/PlaybookHero'
import PlaybookBullets from '../_components/PlaybookBullets'
import PlaybookTOC from '../_components/PlaybookTOC'
import PlaybookSocialProof from '../_components/PlaybookSocialProof'
import PlaybookBrandContext from '../_components/PlaybookBrandContext'
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
  const url = `https://www.natesystem.com/playbook/${params.slug}`
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

  const url = `https://www.natesystem.com/playbook/${playbook.slug}`
  // Breadcrumb structured data (JSON-LD) — invisible, helps Google show the
  // Accueil › Playbooks › [secteur] trail and feeds AI answer engines.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.natesystem.com' },
      { '@type': 'ListItem', position: 2, name: 'Playbooks', item: 'https://www.natesystem.com/playbook' },
      { '@type': 'ListItem', position: 3, name: playbook.title, item: url },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PlaybookHero playbook={playbook} />
      <PlaybookBullets bullets={playbook.bullets} />
      <PlaybookTOC />
      <PlaybookSocialProof />
      <PlaybookBrandContext />
      <PlaybookCTA slug={playbook.slug} />
      <PlaybookFooter />
    </>
  )
}
