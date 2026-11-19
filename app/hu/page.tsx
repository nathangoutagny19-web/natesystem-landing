/**
 * La home hongroise. Elle ne duplique rien : elle rend exactement le même
 * composant que `/`, et c'est `app/hu/layout.tsx` qui fournit `lang="hu"` à
 * tout l'arbre. Une seule page à maintenir, deux URL indexables.
 */
import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'

export { default } from '../(fr)/page'

export const metadata: Metadata = {
  alternates: {
    canonical: `${SITE_URL}/hu/`,
    languages: {
      'fr-FR': `${SITE_URL}/`,
      en: `${SITE_URL}/en/`,
      hu: `${SITE_URL}/hu/`,
      'x-default': `${SITE_URL}/`,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'hu_HU',
    url: `${SITE_URL}/hu/`,
    siteName: 'NateSystem',
    title: 'Egyedi szoftver a luxusvendéglátásnak | NateSystem',
    description: 'Az Ön vendégfogadása egyedi. A szoftvere is legyen az. Concierge-szolgáltatások, villák, faházak, jachtok. A forráskód az Öné.',
    images: [{ url: '/og-image-2026-11.png', width: 1200, height: 630, alt: 'NateSystem' }],
  },
}
