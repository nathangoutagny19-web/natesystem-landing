import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allCaseSlugs, getCaseStudy } from '@/lib/case-studies'
import type { Lang } from '@/lib/i18n'
import CaseStudyDetail from './CaseStudyDetail'

/**
 * La fiche d'un cas client, servie dans les deux langues.
 *
 * C'est un composant serveur : il ne peut pas lire le LangProvider. La langue
 * est donc passée en argument, et `app/en/case-studies/[slug]/page.tsx`
 * réutilise ces fonctions en lui passant 'en' plutôt que de dupliquer la page.
 */

const BASE = 'https://www.natesystem.com'

export function generateStaticParams() {
  return allCaseSlugs().map((slug) => ({ slug }))
}

export function caseStudyMetadata(slug: string, lang: Lang): Metadata {
  const study = getCaseStudy(slug, lang)
  if (!study) return {}
  const frUrl = `${BASE}/case-studies/${study.slug}`
  const url = lang === 'fr' ? frUrl : `${BASE}/${lang}/case-studies/${study.slug}`

  const title =
    lang === 'en'
      ? `${study.title}, ${study.sector}, ${study.location} | NateSystem case study`
      : lang === 'hu'
        ? `${study.title}, ${study.sector}, ${study.location} | NateSystem esettanulmány`
        : `${study.title}, ${study.sector}, ${study.location} | Étude de cas NateSystem`

  return {
    title,
    description: study.metaDescription,
    alternates: {
      canonical: url,
      languages: {
        'fr-FR': frUrl,
        en: `${BASE}/en/case-studies/${study.slug}`,
        hu: `${BASE}/hu/case-studies/${study.slug}`,
        'x-default': frUrl,
      },
    },
    openGraph: {
      title,
      description: study.metaDescription,
      url,
      type: 'article',
      locale: lang === 'en' ? 'en_US' : lang === 'hu' ? 'hu_HU' : 'fr_FR',
    },
  }
}

export function CaseStudyRoute({ slug, lang }: { slug: string; lang: Lang }) {
  const study = getCaseStudy(slug, lang)
  if (!study) notFound()

  const root = lang === 'fr' ? BASE : `${BASE}/${lang}`
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: `${study.title}, ${study.sector}`,
        description: study.metaDescription,
        about: study.title,
        inLanguage: lang,
        isPartOf: { '@id': `${BASE}/#organization` },
        mainEntityOfPage: `${root}/case-studies/${study.slug}`,
        // Review seulement si un vrai témoignage nominatif existe (règle d'or)
        ...(study.quote
          ? {
              review: {
                '@type': 'Review',
                reviewBody: study.quote,
                author: { '@type': 'Person', name: study.quoteAuthor },
              },
            }
          : {}),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: lang === 'en' ? 'Home' : lang === 'hu' ? 'Főoldal' : 'Accueil', item: root },
          { '@type': 'ListItem', position: 2, name: lang === 'en' ? 'Case studies' : lang === 'hu' ? 'Esettanulmányok' : 'Réalisations', item: `${root}/case-studies` },
          { '@type': 'ListItem', position: 3, name: study.title, item: `${root}/case-studies/${study.slug}` },
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

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  return caseStudyMetadata(params.slug, 'fr')
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  return <CaseStudyRoute slug={params.slug} lang="fr" />
}
