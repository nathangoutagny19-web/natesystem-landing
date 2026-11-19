/**
 * La home anglaise. Elle ne duplique rien : elle rend exactement le même
 * composant que `/`, et c'est `app/en/layout.tsx` qui fournit `lang="en"` à
 * tout l'arbre. Une seule page à maintenir, deux URL indexables.
 */
import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'

export { default } from '../(fr)/page'

export const metadata: Metadata = {
  alternates: {
    canonical: `${SITE_URL}/en/`,
    languages: {
      'fr-FR': `${SITE_URL}/`,
      en: `${SITE_URL}/en/`,
      hu: `${SITE_URL}/hu/`,
      'x-default': `${SITE_URL}/`,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${SITE_URL}/en/`,
    siteName: 'NateSystem',
    title: 'Custom software for luxury hospitality | NateSystem',
    description: 'The way you serve your clients is unique. Your software should be too. Concierge services, villas, chalets, yachts. You own the code.',
    images: [{ url: '/og-image-2026-11.png', width: 1200, height: 630, alt: 'NateSystem' }],
  },
}
