import type { Metadata } from 'next'
import { LangProvider } from '@/components/providers/LangProvider'
import { SITE_URL } from '@/lib/constants'

/**
 * LA PAGE D'ATTERRISSAGE ÉCOLES PRIVÉES.
 *
 * C'est la destination du lien que Nathan poste sur LinkedIn depuis son profil
 * niché sur les écoles privées. Avant elle, ce lien tombait sur la home
 * générique en français : la carte de partage promettait des écoles, la page
 * parlait d'autre chose.
 *
 * Anglaise, et hors de l'arbre de traduction, pour la même raison que les
 * pages de villes sont françaises et n'existent qu'en français : une page vit
 * dans la langue de ceux qu'elle vise. Elle n'est donc pas dans
 * TRANSLATED_ROUTES, et le drapeau de la nav ne propose pas de miroir.
 *
 * Le `LangProvider` en anglais habille la nav et le pied de page : sans lui,
 * une page anglaise serait encadrée d'une nav française.
 */

const TITLE = 'Custom platforms for private schools | NateSystem'
const DESCRIPTION =
  'Give your school administration 30 hours a month back. Custom software built on your calendar, your collective agreement, your sites. You own the code, hosted in the EU.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'school management software',
    'private school administration software',
    'custom software for schools',
    'staff scheduling software schools',
    'school time clock multi-site',
    'logiciel gestion école privée',
  ],
  alternates: { canonical: `${SITE_URL}/schools` },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/schools`,
    siteName: 'NateSystem',
    title: TITLE,
    description: DESCRIPTION,
    locale: 'en_US',
    images: [
      {
        url: '/og-schools.png',
        width: 1200,
        height: 630,
        alt: 'NateSystem, custom platforms for private schools',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: 'Give your school administration 30 hours a month back.',
    images: ['/og-schools.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Custom platforms for private schools',
      serviceType: 'Custom software development',
      description: DESCRIPTION,
      inLanguage: 'en',
      areaServed: ['FR', 'EU'],
      provider: { '@id': `${SITE_URL}/#organization` },
      url: `${SITE_URL}/schools`,
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Private schools', item: `${SITE_URL}/schools` },
      ],
    },
  ],
}

export default function SchoolsLayout({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider initialLang="en">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script dangerouslySetInnerHTML={{ __html: `document.documentElement.lang='en'` }} />
      {children}
    </LangProvider>
  )
}
