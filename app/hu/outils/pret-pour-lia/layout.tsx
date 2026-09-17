import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'

/** Équivalent hongrois de `app/outils/pret-pour-lia/layout.tsx`. */

export const metadata: Metadata = {
  title: 'Teszt: készen áll a cége az MI-re? (2 perc, ingyenes) | NateSystem',
  description:
    'Ingyenes MI-érettségi teszt cégvezetőknek: tizenkét kérdés megmondja, készen áll-e a cége az MI-re. Folyamatok, adatok, elfogadás, őszinte ítélet és egy konkrét első lépés. Regisztráció nélkül.',
  keywords: [
    'készen áll a cégem az MI-re',
    'MI-érettség felmérés',
    'MI-érettségi teszt vállalkozásoknak',
    'mesterséges intelligencia teszt cégeknek',
    'ingyenes MI-audit',
    'hol kezdjem az MI-t egy kkv-ban',
  ],
  alternates: {
    canonical: `${SITE_URL}/hu/outils/pret-pour-lia`,
    languages: {
      'fr-FR': `${SITE_URL}/outils/pret-pour-lia`,
      en: `${SITE_URL}/en/outils/pret-pour-lia`,
      hu: `${SITE_URL}/hu/outils/pret-pour-lia`,
      'x-default': `${SITE_URL}/outils/pret-pour-lia`,
    },
  },
  openGraph: {
    title: 'Készen áll a cége az MI-re? A kétperces teszt',
    description:
      'Ingyenes MI-érettségi teszt: folyamatok, adatok, elfogadás. Őszinte ítélet és egy konkrét első lépés, regisztráció nélkül.',
    url: `${SITE_URL}/hu/outils/pret-pour-lia`,
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Készen áll a cége az MI-re?',
    description: 'A kétperces teszt, ingyen és regisztráció nélkül.',
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
      url: `${SITE_URL}/hu/outils/pret-pour-lia`,
      inLanguage: 'hu',
      description:
        'Ingyenes MI-érettségi teszt: tizenkét kérdés három pillér mentén (világos folyamatok, megbízható adatok, elfogadás és emberek). Pillérenkénti pontszám, összesített ítélet és a leggyengébb pillérre szabott javaslat.',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
      provider: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/hu` },
        { '@type': 'ListItem', position: 2, name: 'Free tools', item: `${SITE_URL}/hu/outils` },
        { '@type': 'ListItem', position: 3, name: 'AI Diagnostic', item: `${SITE_URL}/hu/outils/pret-pour-lia` },
      ],
    },
  ],
}

export default function HuPretPourLiaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}
