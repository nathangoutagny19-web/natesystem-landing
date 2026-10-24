'use client'

import { useEffect, type ReactNode } from 'react'
import { useTheme } from '@/components/providers/ThemeProvider'
import { CALENDLY_URL } from '@/lib/constants'

/**
 * Bouton qui ouvre Calendly en fenêtre plein écran par-dessus la page (24/10/2026).
 *
 * ⚠︎ POURQUOI PAS L'AGENDA INTÉGRÉ DANS LA PAGE : en ligne, le cadre Calendly
 * empilait une longue colonne d'horaires, faisait passer le titre du jour à la
 * ligne et affichait le bandeau « Powered by Calendly » au milieu de la home.
 * La fenêtre plein écran garde la mise en page native de Calendly, et la page
 * reste dans le design du site.
 */
const SCRIPT_SRC = 'https://assets.calendly.com/assets/external/widget.js'
const CSS_HREF = 'https://assets.calendly.com/assets/external/widget.css'

type CalendlyWindow = { Calendly?: { initPopupWidget: (o: { url: string }) => void } }

export default function CalendlyButton({ children, className = 'btn-primary', style }: { children: ReactNode; className?: string; style?: React.CSSProperties }) {
  const { theme } = useTheme()

  useEffect(() => {
    if (!document.querySelector(`link[href="${CSS_HREF}"]`)) {
      const l = document.createElement('link')
      l.rel = 'stylesheet'
      l.href = CSS_HREF
      document.head.appendChild(l)
    }
    if (!document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
      const s = document.createElement('script')
      s.src = SCRIPT_SRC
      s.async = true
      document.body.appendChild(s)
    }
  }, [])

  const open = () => {
    const p = new URLSearchParams({
      hide_gdpr_banner: '1',
      primary_color: 'e63946',
      background_color: theme === 'dark' ? '0e0e12' : 'ffffff',
      text_color: theme === 'dark' ? 'f2f2f2' : '1a1a1a',
    })
    const url = `${CALENDLY_URL}?${p.toString()}`
    const w = window as unknown as CalendlyWindow
    if (w.Calendly) w.Calendly.initPopupWidget({ url })
    else window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <button type="button" onClick={open} className={className} style={style}>
      {children}
    </button>
  )
}
