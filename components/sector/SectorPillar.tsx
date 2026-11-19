'use client'

import { useState } from 'react'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import MobileCta from '@/components/layout/MobileCta'
import FadeUp from '@/components/ui/FadeUp'
import ClientsBar from '@/components/home/ClientsBar'
import SectorGlyph from '@/components/home/SectorGlyph'
import WorldMap from '@/components/about/WorldMap'
import AuditFinal from '@/components/home/AuditFinal'
import { useLang } from '@/components/providers/LangProvider'
import { localizedHref } from '@/lib/routes'
import { AUDIT_LINK, SITE_URL } from '@/lib/constants'
import type { Pillar } from '@/lib/pillars'

/**
 * LE GABARIT DES PAGES PILIERS PAR MÉTIER (stratégie SEO du 19 novembre 2026).
 * Même système visuel que l'accueil refait le 14/11 : sections nuit et claires,
 * serif droite avec l'accent en italique rouge, filets, numéros en serif
 * italique. Le contenu vit dans lib/pillars.ts, en français et en anglais.
 *
 * Données structurées : Service, FAQPage (mot pour mot ce qui est affiché) et
 * BreadcrumbList.
 */
export default function SectorPillar({ pillar }: { pillar: Pillar }) {
  const { lang: rawLang } = useLang()
  const lang: 'fr' | 'en' = rawLang === 'fr' ? 'fr' : 'en'
  const t = (v: { fr: string; en: string }) => v[lang]
  const fr = lang === 'fr'
  const [open, setOpen] = useState(0)
  const url = `${SITE_URL}${pillar.path[lang]}/`

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: t(pillar.meta.title).replace(' | NateSystem', ''),
      serviceType: t(pillar.serviceType),
      description: t(pillar.meta.description),
      url,
      provider: { '@id': `${SITE_URL}/#organization` },
      areaServed: ['FR', 'CH', 'HU', 'ME', 'ES', 'US', 'AE'],
      inLanguage: lang,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: lang,
      mainEntity: pillar.faq.map((f) => ({ '@type': 'Question', name: t(f.q), acceptedAnswer: { '@type': 'Answer', text: t(f.a) } })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: fr ? 'Accueil' : 'Home', item: fr ? `${SITE_URL}/` : `${SITE_URL}/en/` },
        { '@type': 'ListItem', position: 2, name: t(pillar.serviceType), item: url },
      ],
    },
  ]

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav tone="dark" />

      {/* 1, nuit : le titre et le dessin du métier */}
      <section className="sp-hero v3-night">
        <div className="sp-hero-inner">
          <FadeUp>
            <div>
              <p className="v3-label">{t(pillar.label)}</p>
              <h1 className="font-serif sp-h1">
                {pillar.h1[lang][0]}
                <em>{pillar.h1[lang][1]}</em>
              </h1>
              <p className="font-sans sp-sub">{t(pillar.sub)}</p>
              <div className="sp-ctas">
                <Link href={localizedHref(AUDIT_LINK, lang)} className="v3-pill">
                  {fr ? 'Recevoir votre audit gratuit' : 'Get your free audit'} <span aria-hidden="true">→</span>
                </Link>
                <Link href="/en/montenegro/tivat" className="v3-link sp-link">
                  {fr ? 'Notre base à Tivat (en anglais)' : 'Our base in Tivat'}
                </Link>
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="sp-card" aria-hidden="true">
              <SectorGlyph index={pillar.glyph} size={220} stroke={0.6} />
            </div>
          </FadeUp>
        </div>
      </section>

      <ClientsBar />

      {/* 2, pour qui */}
      <section className="lx-section">
        <div className="lx-wrap">
          <FadeUp>
            <span className="v3-label">{fr ? 'Pour qui' : 'Who it’s for'}</span>
            <h2 className="lx-title">
              {pillar.whoTitle[lang][0]}
              <span className="accent">{pillar.whoTitle[lang][1]}</span>
            </h2>
          </FadeUp>
          <div className="sp-who">
            {pillar.forWho.map((w, i) => (
              <FadeUp key={w.title.en} delay={0.05 * i}>
                <div className="sp-who-item">
                  <span className="font-serif sp-num">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="font-serif sp-who-title">{t(w.title)}</h3>
                  <p className="font-sans sp-who-text">{t(w.text)}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 3, nuit : le problème */}
      <section className="lx-section v3-night">
        <div className="lx-narrow">
          <FadeUp>
            <span className="v3-label">{fr ? 'Aujourd’hui' : 'Today'}</span>
            <p className="font-serif sp-pain">{t(pillar.pain)}</p>
          </FadeUp>
        </div>
      </section>

      {/* 4, ce qu'on construit */}
      <section className="lx-section">
        <div className="lx-wrap">
          <FadeUp>
            <span className="v3-label">{fr ? 'Ce que nous construisons' : 'What we build'}</span>
            <h2 className="lx-title">
              {pillar.buildsTitle[lang][0]}
              <span className="accent">{pillar.buildsTitle[lang][1]}</span>
            </h2>
          </FadeUp>
          <ol className="sp-builds">
            {pillar.builds.map((b, i) => (
              <FadeUp key={b.title.en} delay={0.04 * (i % 2)}>
                <li className="sp-build">
                  <span className="font-serif sp-num">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="font-serif sp-build-title">{t(b.title)}</h3>
                    <p className="font-sans sp-build-text">{t(b.text)}</p>
                  </div>
                </li>
              </FadeUp>
            ))}
          </ol>
        </div>
      </section>

      {/* 5, nuit : sur mesure ou logiciel du marché */}
      <section className="lx-section v3-night">
        <div className="lx-wrap">
          <FadeUp>
            <span className="v3-label">{fr ? 'Le vrai choix' : 'The real choice'}</span>
            <h2 className="lx-title">
              {fr ? 'Sur mesure ou ' : 'Custom or '}
              <span className="accent">{fr ? 'logiciel du marché ?' : 'off-the-shelf?'}</span>
            </h2>
            <p className="lx-lead">{t(pillar.compare.intro)}</p>
          </FadeUp>
          <FadeUp delay={0.06}>
            <div className="sp-table" role="table" aria-label={fr ? 'Comparaison' : 'Comparison'}>
              <div className="sp-row sp-row-head" role="row">
                <span role="columnheader" />
                <span role="columnheader" className="font-sans">{fr ? 'Logiciel du marché' : 'Off-the-shelf'}</span>
                <span role="columnheader" className="font-sans sp-col-us">{fr ? 'Sur mesure, avec NateSystem' : 'Custom, with NateSystem'}</span>
              </div>
              {pillar.compare.rows.map((r) => (
                <div key={r.criterion.en} className="sp-row" role="row">
                  <span role="rowheader" className="font-serif sp-crit">{t(r.criterion)}</span>
                  <span role="cell" className="font-sans">{t(r.market)}</span>
                  <span role="cell" className="font-sans sp-col-us">{t(r.custom)}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 6, depuis Tivat : la carte */}
      <section className="lx-section">
        <div className="lx-wrap">
          <FadeUp>
            <span className="v3-label">{fr ? 'Où nous sommes' : 'Where we are'}</span>
            <h2 className="lx-title">
              {fr ? 'Depuis Tivat, ' : 'From Tivat, '}
              <span className="accent">{fr ? 'sur place quand il le faut.' : 'on site when it matters.'}</span>
            </h2>
            <p className="lx-lead">
              {fr
                ? 'Basés à Tivat, sur la baie de Kotor. On vous rencontre sur place autour de Porto Montenegro et de Kotor, et on travaille à distance avec nos clients en France, en Suisse, en Espagne, en Hongrie, aux États-Unis et aux Émirats.'
                : 'Based in Tivat, on the Bay of Kotor. We meet you in person around Porto Montenegro and Kotor, and work remotely with clients in France, Switzerland, Spain, Hungary, the United States and the UAE.'}
            </p>
          </FadeUp>
          <WorldMap />
        </div>
      </section>

      {/* 7, nuit : la FAQ */}
      <section className="lx-section v3-night">
        <div className="sp-faq-wrap">
          <FadeUp>
            <span className="v3-label" style={{ textAlign: 'center' }}>FAQ</span>
            <h2 className="lx-title" style={{ margin: '18px auto 0', textAlign: 'center', maxWidth: 'none' }}>
              {fr ? 'Ce qu’on nous demande ' : 'What people ask us '}
              <span className="accent">{fr ? 'avant de commencer.' : 'before we start.'}</span>
            </h2>
          </FadeUp>
          <ol className="sp-faq">
            {pillar.faq.map((f, i) => {
              const isOpen = i === open
              return (
                <li key={f.q.en} className={`sp-faq-item${isOpen ? ' sp-faq-open' : ''}`}>
                  <button type="button" className="sp-faq-head" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : i)}>
                    <span className="font-serif sp-num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="font-sans sp-faq-q">{t(f.q)}</span>
                    <span className="sp-plus" aria-hidden="true" />
                  </button>
                  <div className="sp-faq-a" hidden={!isOpen}>
                    <p className="font-sans">{t(f.a)}</p>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </section>

      <AuditFinal />
      <Footer />
      <MobileCta />

      <style jsx>{`
        .sp-hero { position: relative; overflow: hidden; padding: clamp(140px, 16vw, 190px) 24px clamp(80px, 10vw, 120px); }
        .sp-hero-inner {
          max-width: 1240px; margin: 0 auto;
          display: grid; grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr); gap: clamp(40px, 6vw, 88px); align-items: center;
        }
        .sp-h1 { margin: 26px 0 0; font-weight: 400; color: #f0f0f2; font-size: clamp(40px, 5vw, 72px); line-height: 1.02; letter-spacing: -0.015em; }
        .sp-h1 em { font-style: italic; color: var(--accent); }
        .sp-sub { margin: 30px 0 0; max-width: 560px; font-size: clamp(15.5px, 1.4vw, 17.5px); font-weight: 300; line-height: 1.7; color: rgba(240, 240, 242, 0.68); }
        .sp-ctas { display: flex; flex-wrap: wrap; align-items: center; gap: 18px 28px; margin-top: 38px; }
        .sp-ctas :global(.sp-link) { color: #f0f0f2; }
        .sp-card {
          aspect-ratio: 1 / 1; max-width: 440px; margin-left: auto; border-radius: 4px;
          display: flex; align-items: center; justify-content: center;
          background: radial-gradient(120% 90% at 75% 15%, rgba(230, 57, 70, 0.14), transparent 60%), #17171c;
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.06);
        }
        .sp-card :global(.glyph) { color: #f0f0f2; margin-bottom: 0; }

        .sp-num { font-style: italic; font-size: 17px; color: var(--accent); }
        .sp-who { margin-top: clamp(48px, 6vw, 72px); display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); border-top: 1px solid var(--border); }
        .sp-who-item { padding: 28px 28px 30px 0; border-right: 1px solid var(--border); height: 100%; }
        .sp-who > :global(*:last-child) .sp-who-item { border-right: 0; }
        .sp-who > :global(*:not(:first-child)) .sp-who-item { padding-left: 28px; }
        .sp-who-title { margin: 14px 0 0; font-size: clamp(22px, 2vw, 27px); font-weight: 400; line-height: 1.15; color: var(--text); }
        .sp-who-text { margin: 10px 0 0; font-size: 15px; font-weight: 300; line-height: 1.65; color: var(--text-secondary); }

        .sp-pain { margin: 22px 0 0; font-size: clamp(24px, 2.6vw, 34px); line-height: 1.3; color: #f0f0f2; font-weight: 400; }

        .sp-builds {
          list-style: none; margin: clamp(48px, 6vw, 72px) 0 0; padding: 0;
          display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); column-gap: 64px;
          border-top: 1px solid var(--border);
        }
        .sp-build { display: grid; grid-template-columns: 44px minmax(0, 1fr); gap: 0; padding: 24px 0; border-bottom: 1px solid var(--border); height: 100%; }
        .sp-build-title { margin: 0; font-size: clamp(20px, 1.8vw, 24px); font-weight: 400; line-height: 1.2; color: var(--text); }
        .sp-build-text { margin: 8px 0 0; font-size: 15px; font-weight: 300; line-height: 1.65; color: var(--text-secondary); }

        .sp-table { margin-top: clamp(40px, 5vw, 60px); border-top: 1px solid rgba(255, 255, 255, 0.12); }
        .sp-row { display: grid; grid-template-columns: minmax(0, 0.8fr) minmax(0, 1fr) minmax(0, 1fr); gap: 24px; padding: 20px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.1); align-items: baseline; }
        .sp-row > span { font-size: 15px; font-weight: 300; line-height: 1.55; color: rgba(240, 240, 242, 0.62); }
        .sp-row-head > span { font-size: 11px; letter-spacing: 2.2px; text-transform: uppercase; color: rgba(240, 240, 242, 0.45); }
        .sp-row > .sp-col-us { color: #f0f0f2; }
        .sp-row-head > .sp-col-us { color: var(--accent); }
        .sp-row > .sp-crit { font-size: clamp(18px, 1.6vw, 21px); color: #f0f0f2; font-weight: 400; }

        .sp-faq-wrap { max-width: 860px; margin: 0 auto; }
        .sp-faq { list-style: none; margin: clamp(48px, 6vw, 72px) 0 0; padding: 0; border-top: 1px solid rgba(255, 255, 255, 0.1); }
        .sp-faq-item { border-bottom: 1px solid rgba(255, 255, 255, 0.1); }
        .sp-faq-head {
          width: 100%; display: grid; grid-template-columns: 44px minmax(0, 1fr) 18px; align-items: baseline;
          padding: 24px 0; background: none; border: 0; cursor: pointer; text-align: left; color: inherit;
        }
        .sp-faq-head .sp-num { color: rgba(240, 240, 242, 0.42); }
        .sp-faq-open .sp-num, .sp-faq-head:hover .sp-num { color: var(--accent); }
        .sp-faq-q { font-size: clamp(16px, 1.5vw, 18px); line-height: 1.45; color: #f0f0f2; padding-right: 16px; }
        .sp-plus { position: relative; align-self: center; width: 14px; height: 14px; }
        .sp-plus::before, .sp-plus::after { content: ''; position: absolute; left: 0; right: 0; top: 50%; height: 1.3px; margin-top: -0.65px; background: rgba(240, 240, 242, 0.6); transition: transform 0.35s ease; }
        .sp-plus::after { transform: rotate(90deg); }
        .sp-faq-open .sp-plus::after { transform: rotate(0deg); }
        .sp-faq-a { padding: 0 34px 26px 44px; }
        .sp-faq-a p { margin: 0; font-size: 15px; font-weight: 300; line-height: 1.75; color: rgba(240, 240, 242, 0.66); }

        @media (max-width: 900px) {
          .sp-hero-inner { grid-template-columns: 1fr; }
          .sp-card { margin: 0; max-width: 300px; }
          .sp-who { grid-template-columns: 1fr; }
          .sp-who-item, .sp-who > :global(*:not(:first-child)) .sp-who-item { padding: 24px 0; border-right: 0; border-bottom: 1px solid var(--border); }
          .sp-builds { grid-template-columns: 1fr; }
          .sp-row { grid-template-columns: 1fr 1fr; }
          .sp-row > .sp-crit, .sp-row-head > span:first-child { grid-column: 1 / -1; }
          .sp-row-head > span:first-child { display: none; }
        }
      `}</style>
    </main>
  )
}
