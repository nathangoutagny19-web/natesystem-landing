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

  // On mount: read the actual DOM state (set by the inline script in layout.tsx)
  useEffect(() => {
    const stored = localStorage.getItem('ns-theme') as Theme | null
    if (stored === 'dark' || stored === 'light') {
      // Sync DOM to stored preference
      document.documentElement.classList.toggle('light', stored === 'light')
      setTheme(stored)
    } else {
      // No stored pref — default to light (inline script already added 'light' class)
      document.documentElement.classList.add('light')
      localStorage.setItem('ns-theme', 'light')
      setTheme('light')
    }
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark'
      document.documentElement.classList.toggle('light', next === 'light')
      document.documentElement.classList.toggle('dark', next === 'dark')
      localStorage.setItem('ns-theme', next)
      return next
    })
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
