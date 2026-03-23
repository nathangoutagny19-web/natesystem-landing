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
          <FooterLink href="/#prestations">{t('nav.agency')}</FooterLink>
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
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
            </button>
            <button
              className={`theme-toggle-option ${theme === 'dark' ? 'active' : ''}`}
              onClick={() => theme !== 'dark' && toggleTheme()}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
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
