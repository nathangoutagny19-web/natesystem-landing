'use client'

import { useEffect, useMemo, useState } from 'react'
import { useTheme } from '@/components/providers/ThemeProvider'
import { useLang } from '@/components/providers/LangProvider'
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
  const { lang } = useLang()
  const [ready, setReady] = useState(false)
  /* Calendly envoie la hauteur réelle de sa page (calendly.page_height). Le cadre
     la suit : sans ça, la liste des horaires défile dans un cadre trop court et
     passe sous le titre du jour (vu en prod le 24/10/2026). */
  const [height, setHeight] = useState(minHeight)

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== 'https://calendly.com') return
      const data = e.data as { event?: string; payload?: { height?: string } }
      if (data?.event !== 'calendly.page_height' || !data.payload?.height) return
      const h = parseInt(data.payload.height, 10)
      if (Number.isFinite(h)) setHeight(Math.max(minHeight, h))
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [minHeight])

  /* ⚠︎ C'EST LE SITE QUI REDIRIGE, PAS CALENDLY. La redirection réglée côté
     Calendly passe par sa page « You are leaving Calendly » (lien externe, à
     cliquer) : un clic et une page étrangère juste après la réservation. On
     écoute l'événement de réservation et on envoie nous-mêmes vers la page de
     confirmation, dans la langue du visiteur. */
  useEffect(() => {
    const onScheduled = (e: MessageEvent) => {
      if (e.origin !== 'https://calendly.com') return
      const data = e.data as { event?: string }
      if (data?.event !== 'calendly.event_scheduled') return
      const nameParam = name ? `?prenom=${encodeURIComponent(name.split(' ')[0])}` : ''
      window.location.href = `${lang === 'en' ? '/en' : ''}/rdv-confirme/${nameParam}`
    }
    window.addEventListener('message', onScheduled)
    return () => window.removeEventListener('message', onScheduled)
  }, [lang, name])

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

  return (
    <>
      <style>{`#calendly-inline iframe { height: 100% !important; }`}</style>
      <div id="calendly-inline" style={{ width: '100%', minHeight, height }} />
    </>
  )
}
