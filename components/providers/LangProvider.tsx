'use client'

import { createContext, useContext, useCallback } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { translations, type TranslationKey, type Lang } from '@/lib/i18n'
import { hasEnglishVersion } from '@/lib/routes'

export type { Lang }

export const DEFAULT_LANG: Lang = 'fr'

/**
 * LA LANGUE EST DANS L'URL, ET NULLE PART AILLEURS.
 *
 * ═══ CE QUI EXISTAIT AVANT, ET POURQUOI ÇA A ÉTÉ REMPLACÉ ═══
 *
 * La langue vivait dans `localStorage` sous `ns_lang`, choisie par le drapeau
 * de la nav. Un seul et même URL servait les deux langues. Le commentaire de
 * l'ancienne version disait déjà où ça menait :
 *
 *   « Effet accepté : la version EN est invisible en recherche. NE PAS
 *     "réparer" la détection ici : le correctif propre est des routes
 *     localisées avec hreflang valide. »
 *
 * C'était juste. 1 548 lignes de traduction anglaise étaient écrites, et
 * aucune n'était indexable : sans URL distincte, Google n'a rien à référencer,
 * personne ne peut partager la version anglaise, et le site déclarait un
 * `og:locale:alternate` en_US pour une page qui n'avait pas d'adresse.
 *
 * ═══ CE QUI LE REMPLACE ═══
 *
 * Le français reste sur `/`, sans préfixe : c'est là que vivent l'ancienneté
 * du domaine, les huit pages de villes et les articles. Aucune URL existante
 * ne bouge. L'anglais arrive sur `/en/`.
 *
 * Le provider ne devine plus rien. Il reçoit sa langue de la route, via
 * `initialLang`, et le drapeau de la nav ne bascule plus un état : il navigue
 * vers l'URL miroir. La langue affichée et la langue de l'adresse ne peuvent
 * donc plus diverger, ce qui était le vrai défaut de l'ancienne version.
 */

interface LangContextValue {
  lang: Lang
  /** Navigue vers l'URL miroir. Ne change pas d'état : change de page. */
  setLang: (l: Lang) => void
  t: (key: TranslationKey) => string
  /** Le chemin équivalent dans l'autre langue, pour les liens et le hreflang. */
  otherLangHref: string
}

const LangContext = createContext<LangContextValue>({
  lang: DEFAULT_LANG,
  setLang: () => {},
  t: (key) => key,
  otherLangHref: '/',
})

export function useLang() {
  return useContext(LangContext)
}

/**
 * Le chemin équivalent dans l'autre langue.
 * `/services/` ↔ `/en/services/`, `/` ↔ `/en`.
 */
export function mirrorPath(pathname: string, target: Lang): string {
  const withoutPrefix = pathname.replace(/^\/en(?=\/|$)/, '') || '/'
  if (target === 'fr') return withoutPrefix
  /* Toutes les pages françaises n'ont pas d'équivalent anglais : les villes,
     les pages sectorielles et le blog restent français. Le drapeau renvoyait
     vers /en/<slug français>, donc vers une 404. Il ramène à l'accueil
     anglais, qui existe toujours. */
  if (!hasEnglishVersion(withoutPrefix)) return '/en'
  const trimmed = withoutPrefix.replace(/\/+$/, '')
  return trimmed === '' ? '/en' : `/en${trimmed}`
}

export function LangProvider({
  children,
  initialLang = DEFAULT_LANG,
}: {
  children: React.ReactNode
  initialLang?: Lang
}) {
  const pathname = usePathname()
  const router = useRouter()

  const lang = initialLang

  const setLang = useCallback(
    (l: Lang) => {
      if (l === lang) return
      router.push(mirrorPath(pathname || '/', l))
    },
    [lang, pathname, router]
  )

  const t = useCallback(
    (key: TranslationKey): string =>
      translations[key]?.[lang] ?? translations[key]?.[DEFAULT_LANG] ?? key,
    [lang]
  )

  const otherLangHref = mirrorPath(pathname || '/', lang === 'fr' ? 'en' : 'fr')

  return (
    <LangContext.Provider value={{ lang, setLang, t, otherLangHref }}>
      {children}
    </LangContext.Provider>
  )
}
