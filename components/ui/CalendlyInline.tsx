'use client'

import { useEffect, useMemo, useState } from 'react'
import { useTheme } from '@/components/providers/ThemeProvider'
import { CALENDLY_URL } from '@/lib/constants'

/**
 * L'agenda Calendly intégré à la page (remplace l'embed Cal.com, 24/10/2026).
 *
 * Après la réservation, Calendly redirige vers /en/rdv-confirme avec le prénom
 * (réglage « Pass event details » côté Calendly) : la page de confirmation est
 * la nôtre, pas celle de Calendly.
 *
 * ⚠︎ Les couleurs passées dans l'URL ne sont appliquées que sur les plans payants
 * de Calendly : sur un plan gratuit elles sont ignorées, sans erreur.
 */
const SCRIPT_SRC = 'https://assets.calendly.com/assets/external/widget.js'

type Props = { name?: string; email?: string; minHeight?: number }

export default function CalendlyInline({ name, email, minHeight = 720 }: Props) {
  const { theme } = useTheme()
  const [ready, setReady] = useState(false)

  const url = useMemo(() => {
    const p = new URLSearchParams({
      hide_gdpr_banner: '1',
      hide_landing_page_details: '0',
      primary_color: 'e63946',
      background_color: theme === 'dark' ? '0e0e12' : 'ffffff',
      text_color: theme === 'dark' ? 'f2f2f2' : '1a1a1a',
    })
    if (name) p.set('name', name)
    if (email) p.set('email', email)
    return `${CALENDLY_URL}?${p.toString()}`
  }, [theme, name, email])

  useEffect(() => {
    if (document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
      setReady(true)
      return
    }
    const s = document.createElement('script')
    s.src = SCRIPT_SRC
    s.async = true
    s.onload = () => setReady(true)
    document.body.appendChild(s)
  }, [])

  useEffect(() => {
    if (!ready) return
    const el = document.getElementById('calendly-inline')
    const w = window as unknown as { Calendly?: { initInlineWidget: (o: { url: string; parentElement: HTMLElement }) => void } }
    if (!el || !w.Calendly) return
    el.innerHTML = ''
    w.Calendly.initInlineWidget({ url, parentElement: el })
  }, [ready, url])

  return <div id="calendly-inline" style={{ width: '100%', minHeight, height: minHeight }} />
}
