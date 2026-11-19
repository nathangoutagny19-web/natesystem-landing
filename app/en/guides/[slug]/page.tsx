import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import GuidePage from '@/components/sector/GuidePage'
import { GUIDES } from '@/lib/guides'
import { guideMetadata } from '@/lib/guide-metadata'

/* Problem guides (SEO strategy of 19/11/2026), English version. Content: lib/guides.ts. */
const PREFIX = '/en/guides/'
const mine = GUIDES.filter((g) => g.lang === 'en' && g.path.startsWith(PREFIX))
const find = (slug: string) => mine.find((g) => g.path === PREFIX + slug)

export const dynamicParams = false

export function generateStaticParams() {
  return mine.map((g) => ({ slug: g.path.slice(PREFIX.length) }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const g = find(params.slug)
  return g ? guideMetadata(g) : {}
}

export default function GuideRouteEn({ params }: { params: { slug: string } }) {
  const g = find(params.slug)
  if (!g) notFound()
  return <GuidePage guide={g} />
}
