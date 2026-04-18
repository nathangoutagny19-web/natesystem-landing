'use client'

import { createContext, useContext, useState, useCallback, useEffect } from 'react'
import { translations, type TranslationKey } from '@/lib/i18n'

export type Lang = 'en' | 'fr' | 'hu'

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

  // 1. Respect explicit user choice from prior visit
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === 'fr' || saved === 'en' || saved === 'hu') return saved
  } catch {
    // localStorage can throw in private mode — fall through to navigator
  }

  // 2. Map navigator.language → supported language
  const nav = (window.navigator?.language || '').toLowerCase()
  if (nav.startsWith('fr')) return 'fr'
  if (nav.startsWith('hu')) return 'hu'
  return 'en'
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
