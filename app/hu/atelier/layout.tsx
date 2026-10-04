import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Ingyenes 3 órás workshop a tantestületének · NateSystem',
  description:
    'Három óra ajándékba a tantestületének: minden tanár megépíti a saját tanórai eszközét, kipróbálja a diákjai valódi dolgozatain, és magával viszi. Fejlesztő nélkül, az iskolában vagy online. Ebben a negyedévben három intézmény.',
  keywords: [
    'workshop tanároknak',
    'digitális eszközök tanároknak',
    'saját tanórai eszközök fejlesztő nélkül',
    'tantestületi továbbképzés',
    'NateSystem',
  ],
  /* hreflang réciproque sur les trois versions : le français et l'anglais
     déclarent le hongrois, le hongrois les déclare tous les deux. */
  alternates: {
    canonical: `${SITE_URL}/hu/atelier`,
    languages: {
      'fr-FR': `${SITE_URL}/atelier`,
      en: `${SITE_URL}/en/atelier`,
      hu: `${SITE_URL}/hu/atelier`,
      'x-default': `${SITE_URL}/atelier`,
    },
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Három óra ajándékba a tanárainak · NateSystem',
    description:
      'A tanárainak mind van egy táblázata, amit egyedül barkácsoltak össze. Három óra alatt megépítik az eszközt, amely leváltja.',
    url: `${SITE_URL}/hu/atelier`,
    type: 'website',
    locale: 'hu_HU',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'NateSystem' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Három óra ajándékba a tanárainak · NateSystem',
    description:
      'A tanárainak mind van egy táblázata, amit egyedül barkácsoltak össze. Három óra alatt megépítik az eszközt, amely leváltja.',
  },
}

export default function AtelierHuLayout({ children }: { children: React.ReactNode }) {
  return children
}
