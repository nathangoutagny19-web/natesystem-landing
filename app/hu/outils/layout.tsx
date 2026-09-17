import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'

/**
 * MÉTADONNÉES DE `/hu/outils`.
 *
 * Sans ce layout, la route hériterait de `app/hu/layout.tsx` : titre d'accueil
 * et canonique pointant sur `/en`. La page serait dans le sitemap sans être
 * indexable sous sa propre adresse. Le JSON-LD est l'équivalent hongrois de
 * celui de `app/outils/layout.tsx`, avec les URL `/en`.
 */

export const metadata: Metadata = {
  title: 'Free tools for small businesses: inventory & cash flow forecast | NateSystem',
  description:
    'Free tools for owners of small and mid-sized companies, no signup. Simple free inventory management software, a free cash flow forecasting tool and an AI readiness test. Try them right now.',
  keywords: [
    'free inventory management software',
    'free stock management software small business',
    'free cash flow forecast tool',
    'cash flow forecast for small business',
    'free business tools no signup',
    'free asset management software',
    'free equipment tracking software',
    'AI readiness test for business',
  ],
  alternates: {
    canonical: `${SITE_URL}/hu/outils`,
    languages: {
      'fr-FR': `${SITE_URL}/outils`,
      en: `${SITE_URL}/en/outils`,
      hu: `${SITE_URL}/hu/outils`,
      'x-default': `${SITE_URL}/outils`,
    },
  },
  openGraph: {
    title: 'Free tools for small businesses: inventory & cash flow forecast | NateSystem',
    description:
      'Free inventory management software and a free cash flow forecasting tool, live with no signup. Free versions of the custom software we build.',
    url: `${SITE_URL}/hu/outils`,
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free tools for small businesses | NateSystem',
    description: 'Free inventory management and cash flow forecasting, no signup.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': `${SITE_URL}/hu/outils#page`,
      name: 'Free tools for small businesses',
      description:
        'Free tools for owners of small and mid-sized companies: free inventory management software and a free cash flow forecasting tool, live with no signup.',
      url: `${SITE_URL}/hu/outils`,
      inLanguage: 'hu',
      isPartOf: { '@id': `${SITE_URL}/#website` },
    },
    {
      '@type': 'SoftwareApplication',
      name: 'NateSystem Stock',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description:
        'Free, simple inventory management software for small companies. See in real time what you hold, what is missing and what runs out next. Items, stock in and out, alert thresholds, suppliers, no signup.',
      url: 'https://stack-stock.natesystem.com',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
      provider: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'SoftwareApplication',
      name: 'The Forecast',
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Web',
      description:
        'Free cash flow forecasting tool for business. Know which month your cash goes into the red: VAT, salaries, payroll taxes, due dates and late payments included. A clear forecast table, no signup.',
      url: 'https://natesystem-treso.vercel.app',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
      provider: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'SoftwareApplication',
      name: 'NateSystem Asset Management',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description:
        'Free asset and equipment management software for small companies. Bring all your equipment (IT, vehicles, machines, furniture) into one place with automatic depreciation, replacement alerts and history per item. No signup.',
      url: 'https://actifs.natesystem.com',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
      provider: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/hu` },
        { '@type': 'ListItem', position: 2, name: 'Free tools', item: `${SITE_URL}/hu/outils` },
      ],
    },
  ],
}

export default function HuOutilsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}
