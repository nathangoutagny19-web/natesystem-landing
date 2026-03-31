'use client'

import { createContext, useContext, useState, useCallback } from 'react'
import { translations, type TranslationKey } from '@/lib/i18n'

type Lang = 'en' | 'fr'

interface LangContextValue {
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: TranslationKey) => string
}

const LangContext = createContext<LangContextValue>({
  lang: 'fr',
  setLang: () => {},
  t: (key) => key,
})

export function useLang() {
  return useContext(LangContext)
}

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('fr')

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    document.documentElement.lang = l
  }, [])

  const t = useCallback(
    (key: TranslationKey): string => {
      return translations[key]?.[lang] ?? key
    },
    [lang]
  )

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  )
}
