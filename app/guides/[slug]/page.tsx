import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import GuidePage from '@/components/sector/GuidePage'
import { GUIDES } from '@/lib/guides'
import { guideMetadata } from '@/lib/guide-metadata'

/* Guides « problèmes » (stratégie SEO du 19/11/2026), version française. Contenu : lib/guides.ts. */
const PREFIX = '/guides/'
const mine = GUIDES.filter((g) => g.lang === 'fr' && g.path.startsWith(PREFIX))
const find = (slug: string) => mine.find((g) => g.path === PREFIX + slug)

export const dynamicParams = false

export function generateStaticParams() {
  return mine.map((g) => ({ slug: g.path.slice(PREFIX.length) }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const g = find(params.slug)
  return g ? guideMetadata(g) : {}
}

export default function GuideRouteFr({ params }: { params: { slug: string } }) {
  const g = find(params.slug)
  if (!g) notFound()
  return <GuidePage guide={g} />
}
