import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'
import type { Guide } from '@/lib/guides'

/** Métadonnées d'un guide : titre, description, canonique, hreflang si l'autre langue existe. */
export function guideMetadata(guide: Guide): Metadata {
  const url = `${SITE_URL}${guide.path}/`
  const languages: Record<string, string> = {}
  if (guide.alternate) {
    const alt = `${SITE_URL}${guide.alternate}/`
    if (guide.lang === 'fr') { languages['fr-FR'] = url; languages.en = alt; languages['x-default'] = alt }
    else { languages['fr-FR'] = alt; languages.en = url; languages['x-default'] = url }
  }
  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: url, ...(guide.alternate ? { languages } : {}) },
    openGraph: {
      title: guide.title, description: guide.description, url, siteName: 'NateSystem', type: 'article',
      locale: guide.lang === 'fr' ? 'fr_FR' : 'en_GB', publishedTime: guide.date,
      images: [{ url: '/og-image-2026-11.png' }],
    },
  }
}
