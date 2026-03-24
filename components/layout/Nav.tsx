'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLang } from '@/components/providers/LangProvider'
import { CAL_LINK } from '@/lib/constants'

/* ——— SVG Icons (monoline, 18px) ——— */
const icons = {
  calculator: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" /><line x1="8" y1="6" x2="16" y2="6" />
      <line x1="8" y1="10" x2="10" y2="10" /><line x1="14" y1="10" x2="16" y2="10" />
      <line x1="8" y1="14" x2="10" y2="14" /><line x1="14" y1="14" x2="16" y2="14" />
      <line x1="8" y1="18" x2="16" y2="18" />
    </svg>
  ),
  brain: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a5 5 0 0 1 5 5c0 1.5-.7 2.9-1.8 3.8A5 5 0 0 1 17 15a5 5 0 0 1-5 5 5 5 0 0 1-5-5c0-1.6.8-3.1 2-4A5 5 0 0 1 7 7a5 5 0 0 1 5-5z" />
      <path d="M12 2v20" />
    </svg>
  ),
  clipboard: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="4" width="12" height="17" rx="2" />
      <path d="M9 2h6a1 1 0 0 1 1 1v1H8V3a1 1 0 0 1 1-1z" />
      <line x1="10" y1="10" x2="14" y2="10" /><line x1="10" y1="14" x2="14" y2="14" />
    </svg>
  ),
  map: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
      <line x1="8" y1="2" x2="8" y2="18" /><line x1="16" y1="6" x2="16" y2="22" />
    </svg>
  ),
  check: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="3" /><polyline points="9 12 11 14 15 10" />
    </svg>
  ),
  caseStudy: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  ),
  blog: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
    </svg>
  ),
}

const Chevron = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="chevron-icon">
    <path d="M2.5 3.75L5 6.25L7.5 3.75" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Nav() {
  const { lang, setLang, t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [mobileToolsOpen, setMobileToolsOpen] = useState(false)
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false)
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
    <>
      {/* ——— Full-width nav bar ——— */}
      <header className={`nav-bar ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="nav-inner">
          {/* Logo */}
          <Link href="/" className="nav-logo">
            <span className="nav-logo-n">N</span>
            <span className="nav-logo-dot" />
            <span className={`nav-logo-text ${scrolled ? 'nav-logo-text-hidden' : ''}`}>NateSystem</span>
          </Link>

          {/* Center links — desktop */}
          <nav className="nav-links">
            <Link href="/#prestations" className="nav-link">{t('nav.agency')}</Link>

            {/* Tools dropdown */}
            <div className="nav-dropdown">
              <Link href="/tools" className="nav-link nav-link-dropdown">
                {t('nav.tools')} <Chevron />
              </Link>
              <div className="nav-mega">
                <div className="nav-mega-inner">
                  <div className="nav-mega-col">
                    <p className="nav-mega-label">{t('mega.interactive')}</p>
                    <MegaItem href="/tools/saas-calculator" icon={icons.calculator} title={t('tools.calculator.title')} desc={t('tools.calculator.desc')} />
                    <MegaItem href="/tools/ai-readiness" icon={icons.brain} title={t('tools.quiz.title')} desc={t('tools.quiz.desc')} />
                  </div>
                  <div className="nav-mega-col">
                    <p className="nav-mega-label">{t('mega.templates')}</p>
                    <MegaItem href="/tools#audit" icon={icons.clipboard} title={t('tools.audit.title')} desc={t('tools.audit.desc')} />
                    <MegaItem href="/tools#process-map" icon={icons.map} title={t('tools.processMap.title')} desc={t('tools.processMap.desc')} />
                    <MegaItem href="/tools#checklist" icon={icons.check} title={t('tools.checklist.title')} desc={t('tools.checklist.desc')} />
                  </div>
                </div>
              </div>
            </div>

            {/* Resources dropdown */}
            <div className="nav-dropdown">
              <Link href="/resources" className="nav-link nav-link-dropdown">
                {t('nav.resources')} <Chevron />
              </Link>
              <div className="nav-mega nav-mega-sm">
                <div className="nav-mega-inner nav-mega-inner-single">
                  <MegaItem href="/resources#case-studies" icon={icons.caseStudy} title={t('resources.caseStudies')} desc={t('resources.caseStudies.desc')} />
                  <MegaItem href="/blog" icon={icons.blog} title={t('resources.blog')} desc={t('resources.blog.desc')} />
                </div>
              </div>
            </div>
          </nav>

          {/* Right side — lang + CTA */}
          <div className="nav-right">
            {/* Lang */}
            <div ref={langRef} className={`lang-dropdown ${langOpen ? 'open' : ''}`}>
              <button className="lang-current" onClick={() => setLangOpen(!langOpen)}>
                <span className={`lang-flag lang-flag-${lang}`} />
                <span>{lang.toUpperCase()}</span>
                <Chevron />
              </button>
              <div className="lang-options">
                <button className={`lang-option ${lang === 'en' ? 'active' : ''}`} onClick={() => { setLang('en'); setLangOpen(false) }}>
                  <span className="lang-flag lang-flag-en" /> English
                </button>
                <button className={`lang-option ${lang === 'fr' ? 'active' : ''}`} onClick={() => { setLang('fr'); setLangOpen(false) }}>
                  <span className="lang-flag lang-flag-fr" /> Français
                </button>
              </div>
            </div>

            {/* CTA */}
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="nav-cta-btn">
              {t('nav.cta')}
            </a>
          </div>
        </div>
      </header>

      {/* ——— Mobile logo ——— */}
      <Link href="/" className="fixed top-5 left-6 z-[100] md:hidden flex items-center gap-[6px]" style={{ textDecoration: 'none' }}>
        <span className="nav-logo-n">N</span>
        <span className="nav-logo-dot" />
      </Link>

      {/* ——— Mobile hamburger ——— */}
      <button
        className="fixed top-5 right-6 z-[100] md:hidden flex flex-col gap-[5px] p-2 cursor-pointer bg-transparent border-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        {[0, 1, 2].map(i => (
          <span key={i} className="block h-[1px] w-6 transition-all duration-300" style={{
            backgroundColor: 'var(--text)',
            ...(i === 0 && menuOpen ? { transform: 'rotate(45deg) translateY(6px)' } : {}),
            ...(i === 1 ? { opacity: menuOpen ? 0 : 1 } : {}),
            ...(i === 2 && menuOpen ? { transform: 'rotate(-45deg) translateY(-6px)' } : {}),
          }} />
        ))}
      </button>

      {/* ——— Mobile menu ——— */}
      <motion.div
        className="fixed inset-0 z-[90] md:hidden"
        initial={false}
        animate={{ opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? 'auto' : 'none' }}
        transition={{ duration: 0.3 }}
        style={{ backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', background: 'var(--mobile-menu-bg, rgba(14,14,18,0.95))' }}
      >
        <div className="pt-20 px-6 flex flex-col gap-1">
          <MobileLink href="/#prestations" onClick={() => setMenuOpen(false)}>{t('nav.agency')}</MobileLink>

          <MobileAccordion label={t('nav.tools')} open={mobileToolsOpen} onToggle={() => setMobileToolsOpen(!mobileToolsOpen)}>
            <MobileLink href="/tools/saas-calculator" onClick={() => setMenuOpen(false)}>{t('tools.calculator.title')}</MobileLink>
            <MobileLink href="/tools/ai-readiness" onClick={() => setMenuOpen(false)}>{t('tools.quiz.title')}</MobileLink>
            <MobileLink href="/tools" onClick={() => setMenuOpen(false)}>{t('tools.title')}</MobileLink>
          </MobileAccordion>

          <MobileAccordion label={t('nav.resources')} open={mobileResourcesOpen} onToggle={() => setMobileResourcesOpen(!mobileResourcesOpen)}>
            <MobileLink href="/resources#case-studies" onClick={() => setMenuOpen(false)}>{t('resources.caseStudies')}</MobileLink>
            <MobileLink href="/blog" onClick={() => setMenuOpen(false)}>{t('resources.blog')}</MobileLink>
          </MobileAccordion>

          <div className="flex gap-2 mt-4">
            {(['en', 'fr'] as const).map(l => (
              <button key={l} className="px-4 py-2 rounded-lg text-sm font-medium transition-all" style={{
                background: lang === l ? 'var(--accent-subtle)' : 'transparent',
                color: lang === l ? 'var(--accent)' : 'var(--text-muted)',
                border: `1px solid ${lang === l ? 'var(--accent)' : 'var(--border)'}`,
              }} onClick={() => setLang(l)}>
                <span className={`lang-flag lang-flag-${l} mr-2`} style={{ display: 'inline-block' }} /> {l.toUpperCase()}
              </button>
            ))}
          </div>

          <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 justify-center">
            <span className="btn-primary-dot" />{t('nav.cta')}
          </a>
        </div>
      </motion.div>
    </>
  )
}

/* ——— Sub-components ——— */

function MegaItem({ href, icon, title, desc }: { href: string; icon: React.ReactNode; title: string; desc: string }) {
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

function MobileAccordion({ label, open, onToggle, children }: { label: string; open: boolean; onToggle: () => void; children: React.ReactNode }) {
  return (
    <>
      <button
        className="py-3 text-sm font-light w-full text-left flex justify-between items-center"
        style={{ fontFamily: 'var(--font-sans)', color: 'var(--text-secondary)', background: 'none', border: 'none', borderBottom: '1px solid var(--border)' }}
        onClick={onToggle}
      >
        {label}
        <span style={{ transition: 'transform 0.3s', transform: open ? 'rotate(180deg)' : 'none', color: 'var(--text-muted)' }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
        </span>
      </button>
      {open && <div className="pl-4 flex flex-col">{children}</div>}
    </>
  )
}

function MobileLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link href={href} onClick={onClick} className="py-3 text-sm font-light" style={{
      fontFamily: 'var(--font-sans)', color: 'var(--text-secondary)',
      borderBottom: '1px solid var(--border)', textDecoration: 'none', display: 'block',
    }}>{children}</Link>
  )
}
