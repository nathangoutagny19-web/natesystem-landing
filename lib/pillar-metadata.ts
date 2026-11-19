import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'
import type { Pillar } from '@/lib/pillars'

/**
 * Les métadonnées d'une page pilier, dans sa langue : titre, description,
 * canonique, et les deux versions reliées par hreflang (19/11/2026).
 */
export function pillarMetadata(pillar: Pillar, lang: 'fr' | 'en'): Metadata {
  const fr = `${SITE_URL}${pillar.path.fr}/`
  const en = `${SITE_URL}${pillar.path.en}/`
  const url = lang === 'fr' ? fr : en
  return {
    title: pillar.meta.title[lang],
    description: pillar.meta.description[lang],
    alternates: { canonical: url, languages: { 'fr-FR': fr, en, 'x-default': en } },
    openGraph: {
      title: pillar.meta.title[lang],
      description: pillar.meta.description[lang],
      url,
      siteName: 'NateSystem',
      locale: lang === 'fr' ? 'fr_FR' : 'en_GB',
      type: 'website',
      images: [{ url: '/og-image-2026-11.png' }],
    },
  }
}
