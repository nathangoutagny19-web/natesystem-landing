import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allCaseSlugs, getCaseStudy } from '@/lib/case-studies'
import CaseStudyDetail from './CaseStudyDetail'

export function generateStaticParams() {
  return allCaseSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const study = getCaseStudy(params.slug)
  if (!study) return {}
  const url = `https://www.natesystem.com/case-studies/${study.slug}`
  return {
    title: `${study.title}, ${study.sector}, ${study.location} | Étude de cas NateSystem`,
    description: study.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: `${study.title}, étude de cas NateSystem`,
      description: study.metaDescription,
      url,
      type: 'article',
    },
  }
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = getCaseStudy(params.slug)
  if (!study) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: `${study.title}, ${study.sector}`,
        description: study.metaDescription,
        about: study.title,
        isPartOf: { '@id': 'https://www.natesystem.com/#organization' },
        mainEntityOfPage: `https://www.natesystem.com/case-studies/${study.slug}`,
        review: {
          '@type': 'Review',
          reviewBody: study.quote,
          author: { '@type': 'Person', name: study.quoteAuthor },
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.natesystem.com' },
          { '@type': 'ListItem', position: 2, name: 'Réalisations', item: 'https://www.natesystem.com/case-studies' },
          { '@type': 'ListItem', position: 3, name: study.title, item: `https://www.natesystem.com/case-studies/${study.slug}` },
        ],
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CaseStudyDetail study={study} />
    </>
  )
}
