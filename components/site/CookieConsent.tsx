'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

/**
 * Lightweight, fully self-controlled GDPR cookie consent.
 *
 * Replaces Iubenda (whose autoblocking veil + offscreen buttons broke the UX).
 * - No tracking script loads until the visitor clicks "Accepter".
 * - Choice is remembered in localStorage ('ns-cookie-consent' = 'granted'|'denied').
 * - Compact bottom-left card, 100% CSS-controlled → never offscreen, never covers
 *   the hero CTA. Accept & Refuse are given equal visual weight (CNIL-compliant).
 *
 * Scripts gated on consent: Google Analytics (GA4), Microsoft Clarity,
 * Leadsy/Instantly visitor tag.
 */

const STORAGE_KEY = 'ns-cookie-consent'
const GA_ID = 'G-JCM93QPKTD'
const CLARITY_ID = 'w4g9vbwe3u'

function loadTrackingScripts() {
  if (typeof window === 'undefined') return
  if ((window as unknown as { __nsTrackingLoaded?: boolean }).__nsTrackingLoaded) return
  ;(window as unknown as { __nsTrackingLoaded?: boolean }).__nsTrackingLoaded = true

  // Google Analytics (GA4)
  const ga = document.createElement('script')
  ga.async = true
  ga.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(ga)
  ;(window as unknown as { dataLayer: unknown[] }).dataLayer =
    (window as unknown as { dataLayer: unknown[] }).dataLayer || []
  function gtag(...args: unknown[]) {
    ;(window as unknown as { dataLayer: unknown[] }).dataLayer.push(args)
  }
  gtag('js', new Date())
  gtag('config', GA_ID)

  // Microsoft Clarity
  ;(function (c: any, l: Document, a: string, r: string, i: string) {
    c[a] = c[a] || function (...args: unknown[]) { (c[a].q = c[a].q || []).push(args) }
    const t = l.createElement(r) as HTMLScriptElement
    t.async = true
    t.src = 'https://www.clarity.ms/tag/' + i
    const y = l.getElementsByTagName(r)[0]
    y.parentNode!.insertBefore(t, y)
  })(window, document, 'clarity', 'script', CLARITY_ID)

  // Leadsy / Instantly visitor tag
  const vtag = document.createElement('script')
  vtag.id = 'vtag-ai-js'
  vtag.async = true
  vtag.src = 'https://r2.leadsy.ai/tag.js'
  vtag.setAttribute('data-pid', '1hn7HHJQniW34BpBT')
  vtag.setAttribute('data-version', '062024')
  document.head.appendChild(vtag)
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let choice: string | null = null
    try {
      choice = localStorage.getItem(STORAGE_KEY)
    } catch {
      /* localStorage blocked — show the banner */
    }
    if (choice === 'granted') {
      loadTrackingScripts()
    } else if (choice !== 'denied') {
      setVisible(true)
    }
  }, [])

  const decide = (granted: boolean) => {
    try {
      localStorage.setItem(STORAGE_KEY, granted ? 'granted' : 'denied')
    } catch {
      /* ignore */
    }
    if (granted) loadTrackingScripts()
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Consentement aux cookies"
      className="ns-cookie"
    >
      <p className="ns-cookie-text">
        On utilise des cookies de mesure d&apos;audience pour améliorer le site.{' '}
        <Link href="/mentions-legales" className="ns-cookie-link">
          En savoir plus
        </Link>
      </p>
      <div className="ns-cookie-actions">
        <button type="button" onClick={() => decide(false)} className="ns-cookie-btn ns-cookie-btn--ghost">
          Refuser
        </button>
        <button type="button" onClick={() => decide(true)} className="ns-cookie-btn ns-cookie-btn--accept">
          Accepter
        </button>
      </div>

      <style jsx>{`
        .ns-cookie {
          position: fixed;
          left: 20px;
          bottom: 20px;
          z-index: 2147483000;
          width: 320px;
          max-width: calc(100vw - 40px);
          background: var(--bg-card, #fff);
          border: 1px solid var(--border, rgba(0, 0, 0, 0.1));
          border-radius: 14px;
          padding: 18px 18px 16px;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.16);
          font-family: var(--font-sans), system-ui, sans-serif;
          animation: nsCookieIn 0.35s ease-out;
        }
        @keyframes nsCookieIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .ns-cookie-text {
          margin: 0 0 14px;
          font-size: 13px;
          line-height: 1.5;
          font-weight: 300;
          color: var(--text-secondary, #555);
        }
        .ns-cookie-link {
          color: var(--accent, #e63946);
          text-decoration: underline;
          text-underline-offset: 2px;
        }
        .ns-cookie-actions {
          display: flex;
          gap: 10px;
          justify-content: flex-end;
        }
        .ns-cookie-btn {
          font-family: inherit;
          font-size: 13px;
          font-weight: 500;
          padding: 8px 18px;
          border-radius: 9px;
          cursor: pointer;
          transition: opacity 0.2s ease, background 0.2s ease;
          border: 1px solid var(--border, rgba(0, 0, 0, 0.12));
        }
        .ns-cookie-btn--ghost {
          background: transparent;
          color: var(--text, #1a1a1d);
        }
        .ns-cookie-btn--ghost:hover {
          background: var(--bg-elevated, rgba(0, 0, 0, 0.04));
        }
        .ns-cookie-btn--accept {
          background: var(--accent, #e63946);
          color: #fff;
          border-color: var(--accent, #e63946);
        }
        .ns-cookie-btn--accept:hover {
          opacity: 0.9;
        }
        @media (max-width: 480px) {
          .ns-cookie {
            left: 12px;
            right: 12px;
            bottom: 12px;
            width: auto;
          }
        }
      `}</style>
    </div>
  )
}
