'use client'

import Link from 'next/link'
import { useLang } from '@/components/providers/LangProvider'
import { useTheme } from '@/components/providers/ThemeProvider'

/**
 * Site-wide footer.
 *
 * Top row — 4 link columns + brand block:
 *   1. Brand: logo + tagline
 *   2. Sections (home anchors): services, problem, process, results, contact
 *   3. Tools & demos: interactive tools + product demos (Actifs / Stock / Reviews)
 *   4. Resources: blog, case studies, all tools index, book a call
 *   5. Legal: mentions légales + theme toggle
 *
 * The dense link grid is intentional — it gives crawlers and LLM citers
 * a clear internal map of the catalogue, which matters more since the
 * Dec 2025 Google update extending E-E-A-T to competitive queries.
 *
 * Bottom row — copyright + SIRET + lang note.
 */
export default function Footer() {
  const { t } = useLang()
  const { theme, toggleTheme } = useTheme()

  return (
    <footer
      className="mx-auto"
      style={{
        maxWidth: '1100px',
        borderTop: '1px solid var(--border)',
        padding: '56px 24px 32px',
      }}
    >
      {/* Top row — brand + 4 link columns */}
      <div
        className="footer-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.4fr) repeat(4, minmax(0, 1fr))',
          gap: 40,
          alignItems: 'flex-start',
        }}
      >
        {/* Brand block */}
        <div className="flex flex-col gap-3">
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
          <p className="font-sans" style={{ fontSize: '12px', color: 'var(--text-muted)', maxWidth: '240px', fontWeight: 300, lineHeight: 1.6 }}>
            {t('footer.tagline')}
          </p>
          <div className="flex flex-col gap-1" style={{ marginTop: 8 }}>
            <p
              className="font-mono"
              style={{
                fontSize: 10,
                letterSpacing: 2,
                textTransform: 'uppercase',
                color: 'var(--text)',
                fontWeight: 600,
              }}
            >
              {t('footer.contactLabel')}
            </p>
            <a
              href="mailto:nathan@natesystem.com"
              className="font-sans footer-link"
              style={{
                fontSize: '13px',
                color: 'var(--text-muted)',
                textDecoration: 'none',
                fontWeight: 300,
                lineHeight: 1.6,
                transition: 'color 0.2s',
              }}
            >
              nathan@natesystem.com
            </a>
          </div>
        </div>

        {/* Sections column */}
        <FooterCol title={t('footer.col.sections')}>
          <FooterLink href="/">{t('footer.link.home')}</FooterLink>
          <FooterLink href="/#prestations">{t('footer.link.services')}</FooterLink>
          <FooterLink href="/#probleme">{t('footer.link.problem')}</FooterLink>
          <FooterLink href="/#process">{t('footer.link.process')}</FooterLink>
          <FooterLink href="/#case-study">{t('footer.link.results')}</FooterLink>
          <FooterLink href="/#contact">{t('footer.link.contact')}</FooterLink>
        </FooterCol>

        {/* Tools & demos column */}
        <FooterCol title={t('footer.col.toolsDemos')}>
          <FooterLink href="/tools">{t('footer.link.allTools')}</FooterLink>
          <FooterLink href="/tools/diagnostic-ia">{t('tools.diagnostic.title')}</FooterLink>
          <FooterLink href="/reviews">{t('footer.link.reviewsDemo')}</FooterLink>
          <FooterLink href="https://actifs.natesystem.com" external>{t('footer.link.actifsDemo')}</FooterLink>
          <FooterLink href="https://stack-stock.natesystem.com" external>{t('footer.link.stockDemo')}</FooterLink>
        </FooterCol>

        {/* Resources column */}
        <FooterCol title={t('footer.col.resources')}>
          <FooterLink href="/blog">{t('resources.blog')}</FooterLink>
          <FooterLink href="/playbook">{t('footer.link.playbooks')}</FooterLink>
          <FooterLink href="/resources#case-studies">{t('resources.caseStudies')}</FooterLink>
          <FooterLink href="/resources">{t('nav.resources')}</FooterLink>
          <FooterLink href="/book">{t('footer.link.book')}</FooterLink>
        </FooterCol>

        {/* Legal column + theme toggle */}
        <FooterCol title={t('footer.col.legal')}>
          <FooterLink href="/mentions-legales">{t('footer.legal')}</FooterLink>
          <div className="theme-toggle" style={{ marginTop: 8 }}>
            <button
              className={`theme-toggle-option ${theme === 'light' ? 'active' : ''}`}
              onClick={() => theme !== 'light' && toggleTheme()}
              aria-label="Switch to light mode"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
            </button>
            <button
              className={`theme-toggle-option ${theme === 'dark' ? 'active' : ''}`}
              onClick={() => theme !== 'dark' && toggleTheme()}
              aria-label="Switch to dark mode"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            </button>
          </div>
        </FooterCol>
      </div>

      {/* Bottom row — copyright + SIRET */}
      <div
        className="footer-bottom"
        style={{
          marginTop: 48,
          paddingTop: 20,
          borderTop: '1px solid var(--border)',
          display: 'flex',
          flexWrap: 'wrap',
          gap: 14,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <p className="font-sans" style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 300 }}>
          © 2026 NateSystem · Nathan Goutagny
        </p>
        <p className="font-sans" style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 300 }}>
          SIRET 92949816000035
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
          .footer-grid > div:first-child {
            grid-column: 1 / -1;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  )
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <p
        className="font-mono"
        style={{
          fontSize: 10,
          letterSpacing: 2,
          textTransform: 'uppercase',
          color: 'var(--text)',
          fontWeight: 600,
          marginBottom: 6,
        }}
      >
        {title}
      </p>
      {children}
    </div>
  )
}

function FooterLink({
  href,
  children,
  external,
}: {
  href: string
  children: React.ReactNode
  external?: boolean
}) {
  const style: React.CSSProperties = {
    fontSize: '13px',
    color: 'var(--text-muted)',
    textDecoration: 'none',
    fontWeight: 300,
    lineHeight: 1.6,
    transition: 'color 0.2s',
  }

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-sans footer-link"
        style={style}
      >
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className="font-sans footer-link" style={style}>
      {children}
    </Link>
  )
}
