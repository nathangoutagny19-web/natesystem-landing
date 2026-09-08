'use client'

import { createContext, useContext, useEffect, useState, useCallback } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextValue {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'light',
  toggleTheme: () => {},
})

export function useTheme() {
  return useContext(ThemeContext)
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')

  /* Le site ouvre toujours en clair, et le theme n'est plus persiste.
     Decision de Nathan, 8 septembre 2026. Ce provider lisait 'ns-theme' :
     quiconque avait bascule en sombre une fois rouvrait en sombre a chaque
     visite, y compris Nathan. Le script inline de layout.tsx a deja pose la
     classe avant le premier rendu, il n'y a plus rien a resynchroniser ici. */
  useEffect(() => {
    document.documentElement.classList.add('light')
    document.documentElement.classList.remove('dark')
    setTheme('light')
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark'
      document.documentElement.classList.toggle('light', next === 'light')
      document.documentElement.classList.toggle('dark', next === 'dark')
      /* Volontairement pas de localStorage : le choix vaut pour cette session,
         le prochain chargement repart en clair. */
      return next
    })
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
