'use client'

import Link from 'next/link'
import { useLang } from '@/components/providers/LangProvider'
import { useTheme } from '@/components/providers/ThemeProvider'

export default function Footer() {
  const { t } = useLang()
  const { theme, toggleTheme } = useTheme()

  return (
    <footer
      className="mx-auto"
      style={{
        maxWidth: '1200px',
        borderTop: '1px solid var(--border)',
        padding: '40px 24px 48px',
      }}
    >
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        {/* Logo + tagline */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-1">
            <span className="font-serif italic" style={{ fontSize: '22px', fontWeight: 400, color: 'var(--text)' }}>
              N
            </span>
            <span
              className="w-[5px] h-[5px] rounded-full -ml-[2px] mt-[10px]"
              style={{ backgroundColor: 'var(--accent)' }}
            />
            <span
              className="font-sans ml-2"
              style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-muted)' }}
            >
              NateSystem
            </span>
          </div>
          <p className="font-sans" style={{ fontSize: '12px', color: 'var(--text-muted)', maxWidth: '240px', fontWeight: 300 }}>
            {t('footer.tagline')}
          </p>
        </div>

        {/* Nav links */}
        <nav className="flex items-center gap-6 flex-wrap justify-center">
          <FooterLink href="/#prestations">{t('nav.services')}</FooterLink>
          <FooterLink href="/#resultats">{t('nav.results')}</FooterLink>
          <FooterLink href="/tools">{t('nav.tools')}</FooterLink>
          <FooterLink href="/resources">{t('nav.resources')}</FooterLink>
        </nav>

        {/* Theme toggle + legal */}
        <div className="flex flex-col items-center md:items-end gap-3">
          {/* Theme pill toggle */}
          <div className="theme-toggle">
            <button
              className={`theme-toggle-option ${theme === 'light' ? 'active' : ''}`}
              onClick={() => theme !== 'light' && toggleTheme()}
            >
              ☀️
            </button>
            <button
              className={`theme-toggle-option ${theme === 'dark' ? 'active' : ''}`}
              onClick={() => theme !== 'dark' && toggleTheme()}
            >
              🌙
            </button>
          </div>

          <p className="font-sans" style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 300 }}>
            © 2026 NateSystem · Nathan Goutagny
          </p>
          <p className="font-sans" style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 300 }}>
            SIRET 92949816000035
          </p>
          <Link
            href="/mentions-legales"
            className="font-sans transition-colors duration-300 hover:opacity-100"
            style={{ fontSize: '11px', color: 'var(--accent)', textDecoration: 'none', opacity: 0.7, fontWeight: 300 }}
          >
            {t('footer.legal')}
          </Link>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="font-sans transition-colors duration-300"
      style={{ fontSize: '12px', color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 300 }}
    >
      {children}
    </Link>
  )
}
