import type { Metadata } from 'next'
import type { Lang } from './i18n'
import { SITE_URL } from './constants'

/**
 * LES MÉTADONNÉES DES ROUTES TRADUITES.
 *
 * Sans layout propre, une route sous `/en` ou `/hu` hérite du layout de sa
 * langue : le titre de l'accueil et une canonique vers `/en`. Vingt pages
 * déclarées au sitemap se canonicalisaient donc vers la même adresse, ce qui
 * revient à demander à Google de n'en indexer qu'une.
 *
 * Ce helper pose la canonique, les trois hreflang et l'Open Graph de la même
 * façon partout, pour que chaque `app/<lang>/<route>/layout.tsx` tienne en dix
 * lignes et ne puisse pas diverger des autres.
 */

const OG_LOCALE: Record<Lang, string> = { fr: 'fr_FR', en: 'en_US', hu: 'hu_HU' }

export function localeMetadata({
  lang,
  path,
  title,
  description,
  keywords,
  robots,
}: {
  lang: Lang
  /** Le chemin français, sans préfixe de langue. Par exemple '/services/audit'. */
  path: string
  title: string
  description: string
  keywords?: string[]
  robots?: Metadata['robots']
}): Metadata {
  const fr = `${SITE_URL}${path}`
  const url = lang === 'fr' ? fr : `${SITE_URL}/${lang}${path}`

  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    ...(robots ? { robots } : {}),
    alternates: {
      canonical: url,
      languages: {
        'fr-FR': fr,
        en: `${SITE_URL}/en${path}`,
        hu: `${SITE_URL}/hu${path}`,
        'x-default': fr,
      },
    },
    openGraph: { title, description, url, type: 'website', locale: OG_LOCALE[lang] },
  }
}

/** Ancien nom, conservé le temps que les layouts anglais soient migrés. */
export function enMetadata(args: { path: string; title: string; description: string; keywords?: string[]; robots?: Metadata['robots'] }): Metadata {
  return localeMetadata({ ...args, lang: 'en' })
}
