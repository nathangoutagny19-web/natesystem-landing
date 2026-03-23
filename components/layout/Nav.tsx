'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLang } from '@/components/providers/LangProvider'
import { CAL_LINK } from '@/lib/constants'

export default function Nav() {
  const { lang, setLang, t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [mobileToolsOpen, setMobileToolsOpen] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false)
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
    <>
      {/* Logo — fixed top-left */}
      <Link
        href="/"
        className="fixed top-5 left-6 z-[100] flex items-center gap-[10px] no-underline transition-all duration-500"
        style={{ textDecoration: 'none' }}
      >
        <span
          className="font-serif italic leading-none transition-all duration-500"
          style={{ fontSize: scrolled ? '22px' : '26px', color: 'var(--text)' }}
        >
          N
        </span>
        <span
          className="w-[5px] h-[5px] rounded-full -ml-[5px] mt-2"
          style={{ background: 'var(--accent)', boxShadow: '0 0 8px var(--accent-glow)' }}
        />
        <span
          className="text-xs font-medium tracking-[1.5px] uppercase transition-all duration-500"
          style={{
            color: 'var(--text-muted)',
            opacity: scrolled ? 0 : 1,
            width: scrolled ? 0 : 'auto',
            overflow: 'hidden',
          }}
        >
          NateSystem
        </span>
      </Link>

      {/* Center nav pill */}
      <nav
        className="fixed z-[100] hidden md:flex items-center gap-1 rounded-full transition-all duration-500"
        style={{
          top: scrolled ? '12px' : '16px',
          left: '50%',
          transform: 'translateX(-50%)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          background: scrolled ? 'rgba(14,14,18,0.85)' : 'rgba(14,14,18,0.4)',
          border: scrolled ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(255,255,255,0.06)',
          boxShadow: scrolled ? '0 8px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.03) inset' : 'none',
        }}
      >
        <NavLink href="/#prestations">{t('nav.services')}</NavLink>
        <span className="w-px h-4" style={{ background: 'var(--border)' }} />
        <NavLink href="/#resultats">{t('nav.results')}</NavLink>
        <span className="w-px h-4" style={{ background: 'var(--border)' }} />
        <NavLink href="/#process">{t('nav.process')}</NavLink>
        <span className="w-px h-4" style={{ background: 'var(--border)' }} />

        {/* Tools — mega dropdown trigger */}
        <div className="mega-trigger">
          <Link href="/tools" className="nav-link">{t('nav.tools')}</Link>
          <div className="mega-panel">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="mega-col-title">{t('mega.interactive')}</p>
                <MegaItem href="/tools/saas-calculator" icon="🔢" title={t('tools.calculator.title')} desc={t('tools.calculator.desc')} />
                <MegaItem href="/tools/ai-readiness" icon="🧠" title={t('tools.quiz.title')} desc={t('tools.quiz.desc')} />
              </div>
              <div>
                <p className="mega-col-title">{t('mega.templates')}</p>
                <MegaItem href="/tools#audit" icon="📋" title={t('tools.audit.title')} desc={t('tools.audit.desc')} />
                <MegaItem href="/tools#process-map" icon="🗺️" title={t('tools.processMap.title')} desc={t('tools.processMap.desc')} />
                <MegaItem href="/tools#checklist" icon="✅" title={t('tools.checklist.title')} desc={t('tools.checklist.desc')} />
              </div>
            </div>
          </div>
        </div>

        <span className="w-px h-4" style={{ background: 'var(--border)' }} />
        <NavLink href="/resources">{t('nav.resources')}</NavLink>

        <span className="w-px h-4" style={{ background: 'var(--border)' }} />

        {/* CTA */}
        <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="nav-cta">
          <span className="btn-primary-dot" style={{ width: 5, height: 5 }} />
          <span style={{ position: 'relative', zIndex: 1 }}>{t('nav.cta')}</span>
        </a>
      </nav>

      {/* Right nav — lang dropdown */}
      <div
        className="fixed z-[100] hidden md:flex items-center rounded-full transition-all duration-500"
        style={{
          top: scrolled ? '12px' : '16px',
          right: '24px',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          background: scrolled ? 'rgba(14,14,18,0.85)' : 'rgba(14,14,18,0.4)',
          border: scrolled ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(255,255,255,0.06)',
          boxShadow: scrolled ? '0 8px 40px rgba(0,0,0,0.4)' : 'none',
        }}
      >
        <div ref={langRef} className={`lang-dropdown ${langOpen ? 'open' : ''}`}>
          <button className="lang-current" onClick={() => setLangOpen(!langOpen)}>
            <span className={`lang-flag lang-flag-${lang}`} />
            <span className="font-medium">{lang.toUpperCase()}</span>
            <svg className="lang-chevron" width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
          <div className="lang-options">
            <button
              className={`lang-option ${lang === 'en' ? 'active' : ''}`}
              onClick={() => { setLang('en'); setLangOpen(false) }}
            >
              <span className="lang-flag lang-flag-en" />
              English
            </button>
            <button
              className={`lang-option ${lang === 'fr' ? 'active' : ''}`}
              onClick={() => { setLang('fr'); setLangOpen(false) }}
            >
              <span className="lang-flag lang-flag-fr" />
              Français
            </button>
          </div>
        </div>
      </div>

      {/* Mobile hamburger */}
      <button
        className="fixed top-5 right-6 z-[100] md:hidden flex flex-col gap-[5px] p-2 cursor-pointer bg-transparent border-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span className="block h-[1px] w-6 transition-all duration-300" style={{
          backgroundColor: 'var(--text)',
          transform: menuOpen ? 'rotate(45deg) translateY(6px)' : 'none',
        }} />
        <span className="block h-[1px] w-6 transition-all duration-300" style={{
          backgroundColor: 'var(--text)',
          opacity: menuOpen ? 0 : 1,
        }} />
        <span className="block h-[1px] w-6 transition-all duration-300" style={{
          backgroundColor: 'var(--text)',
          transform: menuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none',
        }} />
      </button>

      {/* Mobile menu */}
      <motion.div
        className="fixed inset-0 z-[90] md:hidden"
        initial={false}
        animate={{ opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? 'auto' : 'none' }}
        transition={{ duration: 0.3 }}
        style={{
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          background: 'rgba(14,14,18,0.95)',
        }}
      >
        <div className="pt-20 px-6 flex flex-col gap-1">
          <MobileLink href="/#prestations" onClick={() => setMenuOpen(false)}>{t('nav.services')}</MobileLink>
          <MobileLink href="/#resultats" onClick={() => setMenuOpen(false)}>{t('nav.results')}</MobileLink>
          <MobileLink href="/#process" onClick={() => setMenuOpen(false)}>{t('nav.process')}</MobileLink>

          {/* Tools accordion */}
          <button
            className="py-3 text-sm font-light w-full text-left flex justify-between items-center"
            style={{ fontFamily: 'var(--font-sans)', color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)', background: 'none', border: 'none', borderBottomWidth: 1, borderBottomStyle: 'solid', borderBottomColor: 'var(--border)' }}
            onClick={() => setMobileToolsOpen(!mobileToolsOpen)}
          >
            {t('nav.tools')}
            <span style={{ transition: 'transform 0.3s', transform: mobileToolsOpen ? 'rotate(180deg)' : 'none', color: 'var(--text-muted)', fontSize: 12 }}>▼</span>
          </button>
          {mobileToolsOpen && (
            <div className="pl-4 flex flex-col gap-0">
              <MobileLink href="/tools/saas-calculator" onClick={() => setMenuOpen(false)}>🔢 {t('tools.calculator.title')}</MobileLink>
              <MobileLink href="/tools/ai-readiness" onClick={() => setMenuOpen(false)}>🧠 {t('tools.quiz.title')}</MobileLink>
              <MobileLink href="/tools" onClick={() => setMenuOpen(false)}>→ {t('tools.title')}</MobileLink>
            </div>
          )}

          <MobileLink href="/resources" onClick={() => setMenuOpen(false)}>{t('nav.resources')}</MobileLink>

          {/* Lang switcher mobile */}
          <div className="flex gap-2 mt-4">
            <button
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all"
              style={{
                background: lang === 'en' ? 'var(--accent-subtle)' : 'transparent',
                color: lang === 'en' ? 'var(--accent)' : 'var(--text-muted)',
                border: `1px solid ${lang === 'en' ? 'var(--accent)' : 'var(--border)'}`,
              }}
              onClick={() => setLang('en')}
            >
              <span className="lang-flag lang-flag-en mr-2" style={{ display: 'inline-block' }} /> EN
            </button>
            <button
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all"
              style={{
                background: lang === 'fr' ? 'var(--accent-subtle)' : 'transparent',
                color: lang === 'fr' ? 'var(--accent)' : 'var(--text-muted)',
                border: `1px solid ${lang === 'fr' ? 'var(--accent)' : 'var(--border)'}`,
              }}
              onClick={() => setLang('fr')}
            >
              <span className="lang-flag lang-flag-fr mr-2" style={{ display: 'inline-block' }} /> FR
            </button>
          </div>

          <a
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-6 justify-center"
          >
            <span className="btn-primary-dot" />
            {t('nav.cta')}
          </a>
        </div>
      </motion.div>
    </>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="nav-link">
      {children}
    </Link>
  )
}

function MegaItem({ href, icon, title, desc }: { href: string; icon: string; title: string; desc: string }) {
  return (
    <Link href={href} className="mega-item">
      <span className="mega-item-icon">{icon}</span>
      <div>
        <p className="mega-item-title">{title}</p>
        <p className="mega-item-desc">{desc}</p>
      </div>
    </Link>
  )
}

function MobileLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="py-3 text-sm font-light"
      style={{
        fontFamily: 'var(--font-sans)',
        color: 'var(--text-secondary)',
        borderBottom: '1px solid var(--border)',
        textDecoration: 'none',
        display: 'block',
      }}
    >
      {children}
    </Link>
  )
}
