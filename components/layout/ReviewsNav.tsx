'use client'

/**
 * ReviewsNav — standalone top bar for /reviews.
 *
 * Intentionally NOT the main site Nav: Reviews is a sub-brand with a
 * different audience (restaurants, referred by partner Kis Zoltán).
 * This keeps /reviews visually independent so the upcoming move to
 * its own domain costs nothing — the page is already autonomous.
 *
 * Ships with:
 *   - Logo mark + "NateSystem · Reviews" wordmark (links to /reviews)
 *   - Language switcher (EN / FR / HU) — same LangProvider as the rest
 *   - Theme toggle (light / dark) — same ThemeProvider
 *   - Primary CTA → /book
 *
 * No dropdowns, no nav links, no site-wide cross-surface clutter.
 */

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useLang, type Lang } from '@/components/providers/LangProvider'
import { useTheme } from '@/components/providers/ThemeProvider'
import { CAL_LINK } from '@/lib/constants'

const Chevron = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="chevron-icon">
    <path d="M2.5 3.75L5 6.25L7.5 3.75" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function ReviewsNav() {
  const { lang, setLang, t } = useLang()
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  const chooseLang = (l: Lang) => {
    setLang(l)
    setLangOpen(false)
  }

  return (
    <>
      <header className={`nav-bar ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="nav-inner">
          {/* Brand lockup */}
          <Link href="/reviews" className="nav-logo" style={{ gap: 8 }}>
            <span className="nav-logo-n">N</span>
            <span className="nav-logo-dot" />
            <span
              className={`nav-logo-text ${scrolled ? 'nav-logo-text-hidden' : ''}`}
              style={{ whiteSpace: 'nowrap' }}
            >
              NateSystem{' '}
              <span style={{ color: 'var(--accent)', fontStyle: 'italic', fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
                · Reviews
              </span>
            </span>
          </Link>

          {/* Right side — lang + theme + CTA (desktop) */}
          <div className="nav-right">
            {/* Lang */}
            <div ref={langRef} className={`lang-dropdown ${langOpen ? 'open' : ''}`}>
              <button className="lang-current" onClick={() => setLangOpen(!langOpen)}>
                <span className={`lang-flag lang-flag-${lang}`} />
                <span>{lang.toUpperCase()}</span>
                <Chevron />
              </button>
              <div className="lang-options">
                <button
                  className={`lang-option ${lang === 'en' ? 'active' : ''}`}
                  onClick={() => chooseLang('en')}
                >
                  <span className="lang-flag lang-flag-en" /> English
                </button>
                <button
                  className={`lang-option ${lang === 'fr' ? 'active' : ''}`}
                  onClick={() => chooseLang('fr')}
                >
                  <span className="lang-flag lang-flag-fr" /> Français
                </button>
                <button
                  className={`lang-option ${lang === 'hu' ? 'active' : ''}`}
                  onClick={() => chooseLang('hu')}
                >
                  <span className="lang-flag lang-flag-hu" /> Magyar
                </button>
              </div>
            </div>

            {/* Theme toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              style={{
                width: 34,
                height: 34,
                borderRadius: 10,
                border: '1px solid var(--border)',
                background: 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-hover)'
                e.currentTarget.style.color = 'var(--text)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.color = 'var(--text-secondary)'
              }}
            >
              {theme === 'light' ? (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              ) : (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              )}
            </button>

            {/* CTA */}
            <Link href={CAL_LINK} className="nav-cta-btn">
              {t('reviews.hero.ctaPrimary')}
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile logo + hamburger */}
      <Link
        href="/reviews"
        className="fixed top-5 left-6 z-[100] md:hidden flex items-center gap-[6px]"
        style={{ textDecoration: 'none' }}
      >
        <span className="nav-logo-n">N</span>
        <span className="nav-logo-dot" />
      </Link>

      <button
        className="fixed top-5 right-6 z-[100] md:hidden flex flex-col gap-[5px] p-2 cursor-pointer bg-transparent border-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="block h-[1px] w-6 transition-all duration-300"
            style={{
              backgroundColor: 'var(--text)',
              ...(i === 0 && menuOpen ? { transform: 'rotate(45deg) translateY(6px)' } : {}),
              ...(i === 1 ? { opacity: menuOpen ? 0 : 1 } : {}),
              ...(i === 2 && menuOpen ? { transform: 'rotate(-45deg) translateY(-6px)' } : {}),
            }}
          />
        ))}
      </button>

      {/* Mobile sheet */}
      <div
        className="fixed inset-0 z-[90] md:hidden"
        style={{
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          background: 'var(--mobile-menu-bg, rgba(14,14,18,0.95))',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s',
        }}
      >
        <div className="pt-24 px-6 flex flex-col gap-6">
          <div
            className="font-serif italic"
            style={{ fontSize: 22, color: 'var(--text)', fontWeight: 400 }}
          >
            NateSystem{' '}
            <span className="accent">· Reviews</span>
          </div>

          <div style={{ borderTop: '1px solid var(--border)', paddingTop: 20 }}>
            <p
              className="font-mono mb-3"
              style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--text-muted)' }}
            >
              Language
            </p>
            <div className="flex gap-2 flex-wrap">
              {(['en', 'fr', 'hu'] as const).map((l) => (
                <button
                  key={l}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-all"
                  style={{
                    background: lang === l ? 'var(--accent-subtle)' : 'transparent',
                    color: lang === l ? 'var(--accent)' : 'var(--text-muted)',
                    border: `1px solid ${lang === l ? 'var(--accent)' : 'var(--border)'}`,
                    fontFamily: 'var(--font-sans)',
                  }}
                  onClick={() => {
                    setLang(l)
                    setMenuOpen(false)
                  }}
                >
                  <span
                    className={`lang-flag lang-flag-${l} mr-2`}
                    style={{ display: 'inline-block' }}
                  />{' '}
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div style={{ borderTop: '1px solid var(--border)', paddingTop: 20 }}>
            <p
              className="font-mono mb-3"
              style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--text-muted)' }}
            >
              Theme
            </p>
            <button
              type="button"
              onClick={() => {
                toggleTheme()
              }}
              className="font-sans"
              style={{
                padding: '10px 18px',
                border: '1px solid var(--border)',
                borderRadius: 10,
                background: 'transparent',
                color: 'var(--text)',
                fontSize: 13,
                fontWeight: 400,
                cursor: 'pointer',
              }}
            >
              {theme === 'light' ? '☾ Dark' : '☀ Light'}
            </button>
          </div>

          <Link
            href={CAL_LINK}
            onClick={() => setMenuOpen(false)}
            className="btn-primary mt-4 justify-center"
          >
            <span className="btn-primary-dot" />
            {t('reviews.hero.ctaPrimary')}
          </Link>
        </div>
      </div>
    </>
  )
}
