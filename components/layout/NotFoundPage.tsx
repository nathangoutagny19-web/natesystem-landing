'use client'

import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import SectorGlyph from '@/components/home/SectorGlyph'
import { SECTOR_LIST, sectorHref } from '@/lib/sectors'
import { localizedHref } from '@/lib/routes'
import { AUDIT_LINK } from '@/lib/constants'
import type { Lang } from '@/lib/i18n'

/**
 * LA PAGE 404 (19/11/2026), une par langue.
 *
 * ⚠︎ Next 14 avec plusieurs layouts racines : un not-found.tsx posé au niveau
 * du layout racine (app/(fr)/, app/en/, app/hu/) n'est PAS utilisé, Next sert
 * sa 404 nue. Le not-found doit être un niveau plus bas : dans l'attrape-tout
 * de chaque langue, et dans les dossiers des routes dynamiques (blog, guides,
 * études de cas) dont la page appelle notFound().
 *
 * Depuis que le site a un layout racine par langue, Next ne sait plus
 * habiller une adresse inconnue : il servait une page blanche « 404: This
 * page could not be found. », sans le site autour. Un attrape-tout par
 * langue (`[...introuvable]`) envoie maintenant ici, dans la bonne langue.
 *
 * Le visiteur qui suit un lien mort (Search Console en relevait 15) repart
 * vers l'accueil, les quatre métiers ou l'audit, au lieu de fermer l'onglet.
 */
const TEXT = {
  fr: {
    label: 'Erreur 404',
    title: 'Cette page n’existe pas.',
    lead: 'L’adresse a peut-être changé. Voici où retrouver ce que vous cherchiez.',
    home: 'Retour à l’accueil',
    audit: 'Demander l’audit gratuit',
  },
  en: {
    label: 'Error 404',
    title: 'This page doesn’t exist.',
    lead: 'The address may have changed. Here is where to find what you were looking for.',
    home: 'Back to the home page',
    audit: 'Get the free audit',
  },
  hu: {
    label: '404-es hiba',
    title: 'Ez az oldal nem létezik.',
    lead: 'Lehet, hogy megváltozott a cím. Itt megtalálja, amit keresett.',
    home: 'Vissza a kezdőlapra',
    audit: 'Kérem az ingyenes auditot',
  },
} as const

export default function NotFoundPage({ lang }: { lang: Lang }) {
  const t = TEXT[lang]

  return (
    <main>
      <Nav tone="dark" />
      <section className="nf v3-night">
        <div className="nf-col">
          <p className="v3-label">{t.label}</p>
          <h1 className="font-serif nf-title">{t.title}</h1>
          <p className="font-sans nf-lead">{t.lead}</p>

          <ul className="nf-list">
            {SECTOR_LIST.map((s) => (
              <li key={s.slug}>
                <Link href={sectorHref(s.slug, lang)} className="nf-item">
                  <span className="nf-glyph" aria-hidden="true">
                    <SectorGlyph index={s.glyph} size={34} stroke={1.3} />
                  </span>
                  <span className="font-serif nf-name">{s.name[lang]}</span>
                  <span className="nf-arrow" aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="nf-actions">
            <Link href={localizedHref(AUDIT_LINK, lang)} className="v3-pill">
              {t.audit}
            </Link>
            <Link href={localizedHref('/', lang)} className="font-sans nf-home">
              {t.home}
            </Link>
          </div>
        </div>
      </section>
      <Footer />

      <style jsx>{`
        .nf { padding: clamp(140px, 16vw, 190px) 24px clamp(72px, 9vw, 110px); }
        .nf-col { max-width: 760px; margin: 0 auto; }
        .nf-title { margin: 22px 0 0; font-weight: 400; color: #f0f0f2; font-size: clamp(38px, 5vw, 64px); line-height: 1.05; letter-spacing: -0.015em; }
        .nf-lead { margin: 22px 0 0; font-size: clamp(16px, 1.5vw, 18px); font-weight: 300; line-height: 1.7; color: rgba(240, 240, 242, 0.75); }
        .nf-list { list-style: none; margin: 44px 0 0; padding: 0; border-top: 1px solid rgba(240, 240, 242, 0.14); }
        .nf-list li { border-bottom: 1px solid rgba(240, 240, 242, 0.14); }
        .nf-col :global(.nf-item) { display: grid; grid-template-columns: 46px minmax(0, 1fr) 20px; align-items: center; gap: 12px; padding: 16px 0; text-decoration: none; color: #f0f0f2; }
        .nf-glyph { display: inline-flex; }
        .nf-glyph :global(.glyph) { color: rgba(240, 240, 242, 0.7); margin: 0; transition: color 0.3s ease; }
        .nf-name { font-size: clamp(20px, 2vw, 24px); line-height: 1.2; }
        .nf-arrow { color: rgba(240, 240, 242, 0.45); transition: transform 0.3s ease, color 0.3s ease; }
        .nf-col :global(.nf-item:hover) .nf-arrow { color: var(--accent); transform: translateX(4px); }
        .nf-col :global(.nf-item:hover) .nf-glyph :global(.glyph) { color: #f0f0f2; }
        .nf-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 22px; margin-top: 40px; }
        .nf-col :global(.nf-home) { font-size: 15px; color: rgba(240, 240, 242, 0.75); text-decoration: underline; text-underline-offset: 4px; }
      `}</style>
    </main>
  )
}
