'use client'

import Link from 'next/link'
import { useLang } from '@/components/providers/LangProvider'
import { makeD } from '@/lib/lang'
import { AUDIT_LINK } from '@/lib/constants'
import { localizedHref } from '@/lib/routes'
import { useTheme } from '@/components/providers/ThemeProvider'
import { SECTOR_LIST, sectorHash } from '@/lib/sectors'

/**
 * LE PIED DE PAGE, VERSION NUIT (refonte du 14 novembre 2026). Toujours sur
 * fond nuit, quel que soit le thème : il ferme chaque page comme le hero
 * l'ouvre. La marque et sa phrase, quatre colonnes (secteurs, services,
 * l'agence, contact), puis les mentions légales, les langues, le thème.
 *
 * Les pages SEO (villes, restauration, écoles…) restent en ligne et dans le
 * plan du site, pas ici (décision du 9 novembre 2026).
 */
export default function Footer() {
  const { lang, t, setLang } = useLang()
  const d = makeD(lang)
  const { theme, toggleTheme } = useTheme()

  return (
    <footer className="ft">
      <div className="ft-inner">
        <div className="ft-top">
          <div className="ft-brand">
            <Link href={localizedHref('/', lang)} className="ft-logo" aria-label="NateSystem">
              <span className="font-serif ft-logo-n">N</span>
              <span className="ft-logo-dot" />
            </Link>
            <p className="font-serif ft-phrase">
              {d('Logiciels sur mesure pour ', 'Bespoke software for ', 'Egyedi szoftverek a ')}
              <em>{d('l’hospitalité de luxe.', 'luxury hospitality.', 'luxusvendéglátásnak.')}</em>
            </p>
            <Link href={localizedHref(AUDIT_LINK, lang)} className="v3-pill ft-cta">
              {t('hero.ctaAudit')} <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="ft-cols">
            <div className="ft-col">
              <span className="font-mono ft-col-label">{d('Secteurs', 'Industries', 'Ágazatok')}</span>
              {SECTOR_LIST.map((s) => (
                <Link key={s.slug} href={localizedHref('/services', lang) + sectorHash(s.slug)} className="font-sans ft-link">
                  {s.name[lang]}
                </Link>
              ))}
            </div>
            <div className="ft-col">
              <span className="font-mono ft-col-label">{d('Services', 'Services', 'Szolgáltatások')}</span>
              <FtLink href="/services/audit">{d('Le diagnostic', 'The diagnostic', 'A diagnózis')}</FtLink>
              <FtLink href="/services/logiciel-sur-mesure">{d('L’outil sur mesure', 'The bespoke tool', 'Az egyedi eszköz')}</FtLink>
              <FtLink href="/services/ia">{d('Les tâches qui se font seules', 'Tasks that run themselves', 'Magától elvégzett feladatok')}</FtLink>
              <FtLink href="/services/formation">{d('Formation et suivi', 'Training and support', 'Képzés és támogatás')}</FtLink>
            </div>
            <div className="ft-col">
              <span className="font-mono ft-col-label">{d('L’agence', 'The agency', 'Az ügynökség')}</span>
              <FtLink href="/case-studies">{t('nav.realisations')}</FtLink>
              <FtLink href="/resources">{t('nav.resources')}</FtLink>
              <FtLink href="/a-propos">{t('nav.about')}</FtLink>
              {/* Pages Monténégro, anglaises seulement : leur seul lien interne. */}
              <FtLink href="/en/montenegro">Montenegro · Tivat · Kotor</FtLink>
            </div>
            <div className="ft-col">
              <span className="font-mono ft-col-label">{d('Contact', 'Contact', 'Kapcsolat')}</span>
              <a href="mailto:nathan@natesystem.com" className="font-sans ft-link">nathan@natesystem.com</a>
              <a href="https://www.linkedin.com/in/nathan-goutagny/" target="_blank" rel="noopener noreferrer" className="font-sans ft-link">LinkedIn</a>
              <a href="https://www.youtube.com/channel/UC4FHx5cD7xsePnIVZ13abmw" target="_blank" rel="noopener noreferrer" className="font-sans ft-link">YouTube</a>
            </div>
          </div>
        </div>

        <div className="ft-bottom">
          <div className="ft-bottom-left">
            <FtLink href="/mentions-legales" small>{t('footer.legal')}</FtLink>
            <span className="font-mono ft-langs">
              <button type="button" className="ft-lang" onClick={() => setLang('fr')} aria-pressed={lang === 'fr'}>FR</button>
              <span aria-hidden="true">/</span>
              <button type="button" className="ft-lang" onClick={() => setLang('en')} aria-pressed={lang === 'en'}>EN</button>
            </span>
            <div className="ft-theme" role="group" aria-label={d('Thème', 'Theme', 'Téma')}>
              <button className={`ft-theme-opt${theme === 'light' ? ' on' : ''}`} onClick={() => theme !== 'light' && toggleTheme()} aria-label="Switch to light mode">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>
              </button>
              <button className={`ft-theme-opt${theme === 'dark' ? ' on' : ''}`} onClick={() => theme !== 'dark' && toggleTheme()} aria-label="Switch to dark mode">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
              </button>
            </div>
          </div>
          <p className="font-mono ft-copy">© 2026 NateSystem · Nathan Goutagny · SIRET 92949816000035</p>
        </div>
      </div>

      <span aria-hidden="true" className="font-serif ft-mark">NateSystem</span>

      <style jsx>{`
        .ft { position: relative; overflow: hidden; background: #0e0e12; color: #f0f0f2; border-top: 1px solid rgba(255, 255, 255, 0.06); }
        .ft-inner { position: relative; z-index: 1; max-width: 1240px; margin: 0 auto; padding: clamp(72px, 9vw, 112px) 24px 32px; }
        .ft-top { display: grid; grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.6fr); gap: clamp(40px, 6vw, 96px); }
        .ft-brand { display: flex; flex-direction: column; align-items: flex-start; }
        .ft-brand :global(.ft-logo) { display: inline-flex; align-items: flex-start; text-decoration: none; }
        .ft-logo-n { font-style: italic; font-size: 40px; line-height: 1; color: #f0f0f2; }
        .ft-logo-dot { width: 7px; height: 7px; border-radius: 50%; margin: 26px 0 0 -2px; background: var(--accent); }
        .ft-phrase { margin: 26px 0 0; font-size: clamp(26px, 2.6vw, 34px); line-height: 1.12; font-weight: 400; color: #f0f0f2; max-width: 14ch; }
        .ft-phrase em { font-style: italic; color: var(--accent); }
        .ft-brand :global(.ft-cta) { margin-top: 32px; }

        .ft-cols { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 28px; }
        .ft-col { display: flex; flex-direction: column; gap: 12px; }
        .ft-col-label { font-size: 10px; letter-spacing: 2.4px; text-transform: uppercase; color: rgba(240, 240, 242, 0.42); margin-bottom: 6px; }
        .ft :global(.ft-link) {
          font-size: 14px; font-weight: 300; line-height: 1.45; color: rgba(240, 240, 242, 0.78); text-decoration: none;
          transition: color 0.2s ease;
        }
        .ft :global(.ft-link:hover) { color: var(--accent); }
        .ft :global(.ft-link-sm) { font-size: 12px; color: rgba(240, 240, 242, 0.5); }

        .ft-bottom {
          margin-top: clamp(64px, 8vw, 104px); padding-top: 22px; border-top: 1px solid rgba(255, 255, 255, 0.1);
          display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 14px 24px;
        }
        .ft-bottom-left { display: flex; flex-wrap: wrap; align-items: center; gap: 10px 22px; }
        .ft-langs { display: inline-flex; gap: 6px; font-size: 11px; color: rgba(240, 240, 242, 0.35); }
        .ft-lang { background: none; border: 0; padding: 0; cursor: pointer; font: inherit; letter-spacing: 1px; color: rgba(240, 240, 242, 0.45); }
        .ft-lang[aria-pressed=true] { color: #f0f0f2; }
        .ft-theme { display: inline-flex; padding: 3px; border-radius: 999px; border: 1px solid rgba(255, 255, 255, 0.12); }
        .ft-theme-opt { display: inline-flex; align-items: center; justify-content: center; width: 28px; height: 24px; border-radius: 999px; border: 0; background: none; color: rgba(240, 240, 242, 0.45); cursor: pointer; }
        .ft-theme-opt.on { background: rgba(255, 255, 255, 0.1); color: #f0f0f2; }
        .ft-copy { margin: 0; font-size: 10.5px; letter-spacing: 1px; color: rgba(240, 240, 242, 0.4); }

        .ft-mark {
          position: absolute; left: 50%; bottom: -0.24em; transform: translateX(-50%);
          font-size: clamp(90px, 19vw, 320px); line-height: 0.9; white-space: nowrap; font-weight: 400;
          color: #f0f0f2; opacity: 0.035; pointer-events: none; user-select: none;
        }

        @media (max-width: 960px) {
          .ft-top { grid-template-columns: 1fr; }
          .ft-cols { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 36px 24px; }
        }
      `}</style>
    </footer>
  )
}

function FtLink({ href, children, small }: { href: string; children: React.ReactNode; small?: boolean }) {
  /* Le href est écrit en français ; sous /en ou /hu il est préfixé ici. */
  const { lang } = useLang()
  return (
    <Link href={localizedHref(href, lang)} className={`font-sans ft-link${small ? ' ft-link-sm' : ''}`}>
      {children}
    </Link>
  )
}
