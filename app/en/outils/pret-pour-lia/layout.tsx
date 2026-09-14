import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'

/** Équivalent anglais de `app/outils/pret-pour-lia/layout.tsx`. */

export const metadata: Metadata = {
  title: 'Test: is your company ready for AI? (2 min, free) | NateSystem',
  description:
    'Free AI readiness test for business owners: twelve questions tell you whether your company is ready for AI. Process, data, adoption, a straight verdict and one concrete first step. No signup.',
  keywords: [
    'is my company ready for AI',
    'AI readiness assessment',
    'AI maturity test for business',
    'AI readiness quiz',
    'free AI audit',
    'where to start with AI in a small business',
  ],
  alternates: {
    canonical: `${SITE_URL}/en/outils/pret-pour-lia`,
    languages: {
      'fr-FR': `${SITE_URL}/outils/pret-pour-lia`,
      en: `${SITE_URL}/en/outils/pret-pour-lia`,
      'x-default': `${SITE_URL}/outils/pret-pour-lia`,
    },
  },
  openGraph: {
    title: 'Is your company ready for AI? The two-minute test',
    description:
      'Free AI readiness test: process, data, adoption. A straight verdict and one concrete first step, no signup.',
    url: `${SITE_URL}/en/outils/pret-pour-lia`,
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Is your company ready for AI?',
    description: 'The two-minute test, free and with no signup.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'AI Diagnostic · Is your company ready for AI?',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      url: `${SITE_URL}/en/outils/pret-pour-lia`,
      inLanguage: 'en',
      description:
        'Free AI readiness test: twelve questions across three pillars (clear process, reliable data, adoption and people). Score per pillar, overall verdict and a recommendation aimed at your weakest pillar.',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
      provider: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/en` },
        { '@type': 'ListItem', position: 2, name: 'Free tools', item: `${SITE_URL}/en/outils` },
        { '@type': 'ListItem', position: 3, name: 'AI Diagnostic', item: `${SITE_URL}/en/outils/pret-pour-lia` },
      ],
    },
  ],
}

export default function EnPretPourLiaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}
