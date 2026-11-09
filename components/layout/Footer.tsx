'use client'

import Link from 'next/link'
import { useLang } from '@/components/providers/LangProvider'
import { makeD } from '@/lib/lang'
import { AUDIT_LINK } from '@/lib/constants'
import { localizedHref } from '@/lib/routes'
import { useTheme } from '@/components/providers/ThemeProvider'

/**
 * Site-wide footer.
 *
 * Top row, 4 link columns + brand block:
 *   1. Brand: logo + tagline
 *   2. Sections (home anchors): services, problem, process, results, contact
 *   3. Tools & demos: interactive tools + product demos (Actifs / Stock / Reviews)
 *   4. Resources: blog, case studies, all tools index, the free audit
 *   5. Legal: mentions légales + theme toggle
 *
 * The dense link grid is intentional, it gives crawlers and LLM citers
 * a clear internal map of the catalogue, which matters more since the
 * Dec 2025 Google update extending E-E-A-T to competitive queries.
 *
 * Bottom row, copyright + SIRET + lang note.
 */
export default function Footer() {
  const { lang, t, setLang } = useLang()
  const d = makeD(lang)
  const { theme, toggleTheme } = useTheme()

  return (
    <footer
      className="mx-auto"
      style={{
        maxWidth: '1100px',
        borderTop: '1px solid var(--border)',
        padding: '56px 24px 32px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Refonte du 9 novembre 2026 : le logo et une phrase, les quatre pages,
          le contact et le bouton, puis les mentions légales. L'ancienne grille
          de liens (pages restauration, Lyon, écoles…) quitte le pied de page ;
          ces pages restent en ligne et dans le plan du site. */}
      <div className="footer-top" style={{ position: 'relative', zIndex: 1 }}>
        <div className="footer-brand">
          <div className="flex items-center gap-1">
            <span className="font-serif italic" style={{ fontSize: '24px', fontWeight: 400, color: 'var(--text)' }}>N</span>
            <span className="w-[5px] h-[5px] rounded-full -ml-[2px] mt-[10px]" style={{ backgroundColor: 'var(--accent)' }} />
          </div>
          <p className="font-serif italic footer-phrase">
            {d('Logiciels sur mesure pour l’hospitalité de luxe.', 'Bespoke software for luxury hospitality.', 'Egyedi szoftverek a luxusvendéglátásnak.')}
          </p>
          <div className="footer-socials">
            <a href="https://www.linkedin.com/in/nathan-goutagny/" target="_blank" rel="noopener noreferrer" className="footer-soc" aria-label="LinkedIn, Nathan Goutagny">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="https://www.youtube.com/channel/UC4FHx5cD7xsePnIVZ13abmw" target="_blank" rel="noopener noreferrer" className="footer-soc" aria-label="YouTube, Nathan Goutagny">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>

        <nav className="footer-nav" aria-label={d('Pages', 'Pages', 'Oldalak')}>
          <FooterLink href="/services">{t('nav.services')}</FooterLink>
          <FooterLink href="/case-studies">{t('nav.realisations')}</FooterLink>
          <FooterLink href="/resources">{t('nav.resources')}</FooterLink>
          <FooterLink href="/a-propos">{t('nav.about')}</FooterLink>
        </nav>

        <div className="footer-contact">
          <a href="mailto:nathan@natesystem.com" className="font-sans footer-mail">nathan@natesystem.com</a>
          <Link href={localizedHref(AUDIT_LINK, lang)} className="btn-primary" style={{ padding: '12px 22px', fontSize: 13 }}>
            <span className="btn-primary-dot" />{d('Recevoir votre audit gratuit', 'Get your free audit', 'Kérje ingyenes auditját')}
          </Link>
        </div>
      </div>

      {/* Bottom row : mentions légales, langues, Monténégro, copyright */}
      <div
        className="footer-bottom"
        style={{
          marginTop: 56,
          paddingTop: 20,
          borderTop: '1px solid var(--border)',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px 22px',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div className="flex flex-wrap items-center" style={{ gap: '8px 20px' }}>
          <FooterLink href="/mentions-legales">{t('footer.legal')}</FooterLink>
          {/* Pages Monténégro, anglaises seulement : leur seul lien interne. */}
          <FooterLink href="/en/montenegro">Montenegro · Tivat · Kotor</FooterLink>
          <span className="font-sans" style={{ fontSize: 12, color: 'var(--text-muted)' }}>
            <button type="button" className="footer-lang" onClick={() => setLang('fr')} aria-pressed={lang === 'fr'}>FR</button>
            {' / '}
            <button type="button" className="footer-lang" onClick={() => setLang('en')} aria-pressed={lang === 'en'}>EN</button>
          </span>
          <div className="theme-toggle">
            <button className={`theme-toggle-option ${theme === 'light' ? 'active' : ''}`} onClick={() => theme !== 'light' && toggleTheme()} aria-label="Switch to light mode">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
            </button>
            <button className={`theme-toggle-option ${theme === 'dark' ? 'active' : ''}`} onClick={() => theme !== 'dark' && toggleTheme()} aria-label="Switch to dark mode">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            </button>
          </div>
        </div>
        <p className="font-sans" style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 300 }}>
          © 2026 NateSystem · Nathan Goutagny · SIRET 92949816000035
        </p>
      </div>

      {/* Giant semi-transparent brand watermark, bleeding off the bottom edge
          (Frontal-style). Decorative only. */}
      <span aria-hidden="true" className="footer-watermark font-serif italic">NateSystem</span>

      <style>{`
        .footer-socials { display: flex; gap: 8px; margin-top: 4px; }
        .footer-soc {
          width: 36px; height: 36px; display: inline-flex; align-items: center; justify-content: center;
          border-radius: 9px; background: var(--bg-elevated); border: 1px solid var(--border);
          color: var(--text-secondary); transition: color .2s, border-color .2s, transform .2s;
        }
        .footer-soc:hover { color: var(--accent); border-color: var(--accent); transform: translateY(-2px); }
        .footer-top { display: grid; grid-template-columns: 1.4fr 1fr 1fr; gap: 40px; align-items: start; }
        .footer-phrase { font-size: 20px; line-height: 1.35; color: var(--text); margin: 14px 0 18px; max-width: 280px; }
        .footer-nav { display: flex; flex-direction: column; gap: 10px; }
        .footer-nav a { font-size: 15px !important; color: var(--text) !important; font-weight: 400 !important; }
        .footer-contact { display: flex; flex-direction: column; align-items: flex-start; gap: 16px; }
        .footer-mail { font-size: 14px; color: var(--text); text-decoration: none; border-bottom: 1px solid var(--border-hover); padding-bottom: 2px; }
        .footer-mail:hover { color: var(--accent); border-color: var(--accent); }
        .footer-lang { background: none; border: 0; padding: 0; cursor: pointer; font: inherit; color: var(--text-muted); }
        .footer-lang[aria-pressed=true] { color: var(--text); font-weight: 500; }
        @media (max-width: 768px) {
          .footer-top { grid-template-columns: 1fr 1fr; gap: 32px 20px; }
          .footer-brand { grid-column: 1 / -1; }
          .footer-contact { grid-column: 1 / -1; }
          .footer-contact a { white-space: nowrap; }
        }
        .footer-watermark {
          position: absolute;
          left: 50%;
          bottom: -0.26em;
          transform: translateX(-50%);
          font-weight: 400;
          font-size: clamp(84px, 19vw, 320px);
          line-height: 0.9;
          white-space: nowrap;
          color: var(--accent);
          opacity: 0.09;
          pointer-events: none;
          user-select: none;
          z-index: 0;
          -webkit-mask: linear-gradient(to bottom, #000 30%, rgba(0,0,0,0.12));
                  mask: linear-gradient(to bottom, #000 30%, rgba(0,0,0,0.12));
        }
      `}</style>
    </footer>
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
  /* Le href est écrit en français dans les colonnes ci-dessus. Sous /en il est
     préfixé ici, une fois, plutôt que dans chacun des vingt appels. */
  const { lang } = useLang()
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
    <Link href={localizedHref(href, lang)} className="font-sans footer-link" style={style}>
      {children}
    </Link>
  )
}
