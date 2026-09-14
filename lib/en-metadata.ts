import type { Metadata } from 'next'
import { SITE_URL } from './constants'

/**
 * LES MÉTADONNÉES DES ROUTES ANGLAISES.
 *
 * Sans layout propre, une route sous `/en` hérite de `app/en/layout.tsx` :
 * le titre de l'accueil et la canonique `/en`. Vingt pages déclarées au
 * sitemap se canonicalisaient donc vers la même adresse, ce qui revient à
 * demander à Google de n'en indexer qu'une.
 *
 * Ce helper pose la canonique, le hreflang réciproque et l'Open Graph de la
 * même façon partout, pour que chaque `app/en/<route>/layout.tsx` tienne en
 * dix lignes et ne puisse pas diverger des autres.
 */
export function enMetadata({
  path,
  title,
  description,
  keywords,
  robots,
}: {
  /** Le chemin français, sans /en. Par exemple '/services/audit'. */
  path: string
  title: string
  description: string
  keywords?: string[]
  robots?: Metadata['robots']
}): Metadata {
  const frUrl = `${SITE_URL}${path}`
  const enUrl = `${SITE_URL}/en${path}`

  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    ...(robots ? { robots } : {}),
    alternates: {
      canonical: enUrl,
      languages: { 'fr-FR': frUrl, en: enUrl, 'x-default': frUrl },
    },
    openGraph: {
      title,
      description,
      url: enUrl,
      type: 'website',
      locale: 'en_US',
    },
  }
}
