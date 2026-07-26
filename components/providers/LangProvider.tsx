'use client'

import { createContext, useContext, useState, useCallback, useEffect } from 'react'
import { translations, type TranslationKey } from '@/lib/i18n'

export type Lang = 'en' | 'fr'

const STORAGE_KEY = 'ns_lang'
const DEFAULT_LANG: Lang = 'fr'

interface LangContextValue {
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: TranslationKey) => string
}

const LangContext = createContext<LangContextValue>({
  lang: DEFAULT_LANG,
  setLang: () => {},
  t: (key) => key,
})

export function useLang() {
  return useContext(LangContext)
}

function detectLang(): Lang {
  if (typeof window === 'undefined') return DEFAULT_LANG

  // Respect an explicit language choice from a prior visit (the FR/EN selector).
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === 'fr' || saved === 'en') return saved
  } catch {
    // localStorage can throw in private mode — fall through to the default.
  }

  // PATCH ASSUMÉ (Lot 0) — pas de détection via navigator.language. Le français
  // est le rendu par défaut pour tout le monde, crawlers compris, pour ne pas
  // indexer d'anglais sur des requêtes SEO françaises. Effet accepté : la
  // version EN est invisible en recherche. NE PAS "réparer" la détection ici :
  // le correctif propre est des routes localisées /fr /en avec hreflang valide
  // (il y a un vrai marché anglophone à Budapest). Voir BRIEF-SITE-V2.md §4.3.
  return DEFAULT_LANG
}

export function LangProvider({ children }: { children: React.ReactNode }) {
  // SSR-safe default; real detection happens on the client in useEffect below
  // so the server-rendered HTML stays stable (no hydration mismatch).
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG)

  useEffect(() => {
    const detected = detectLang()
    if (detected !== DEFAULT_LANG) {
      setLangState(detected)
      document.documentElement.lang = detected
    }
  }, [])

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    document.documentElement.lang = l
    try {
      window.localStorage.setItem(STORAGE_KEY, l)
    } catch {
      // private mode — ignore
    }
  }, [])

  const t = useCallback(
    (key: TranslationKey): string => {
      return translations[key]?.[lang] ?? translations[key]?.[DEFAULT_LANG] ?? key
    },
    [lang]
  )

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  )
}
