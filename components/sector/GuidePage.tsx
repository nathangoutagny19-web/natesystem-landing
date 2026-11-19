'use client'

import { useState } from 'react'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import MobileCta from '@/components/layout/MobileCta'
import FadeUp from '@/components/ui/FadeUp'
import AuditFinal from '@/components/home/AuditFinal'
import { SITE_URL } from '@/lib/constants'
import type { Guide } from '@/lib/guides'

/**
 * LE GABARIT DES GUIDES « PROBLÈMES » (stratégie SEO du 19/11/2026).
 * La réponse d'emblée (c'est ce que Google et les moteurs de réponse
 * reprennent), puis les sections, le lien vers la page du métier, la FAQ.
 * Données structurées : Article, FAQPage, BreadcrumbList.
 */
export default function GuidePage({ guide }: { guide: Guide }) {
  const fr = guide.lang === 'fr'
  const [open, setOpen] = useState(0)
  const url = `${SITE_URL}${guide.path}/`

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: guide.h1.join(''),
      description: guide.description,
      inLanguage: guide.lang,
      datePublished: guide.date,
      dateModified: guide.date,
      mainEntityOfPage: url,
      author: { '@type': 'Person', name: 'Nathan Goutagny', url: `${SITE_URL}/a-propos/` },
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: guide.lang,
      mainEntity: guide.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: fr ? 'Accueil' : 'Home', item: fr ? `${SITE_URL}/` : `${SITE_URL}/en/` },
        { '@type': 'ListItem', position: 2, name: guide.pillar.label, item: `${SITE_URL}${guide.pillar.href}/` },
        { '@type': 'ListItem', position: 3, name: guide.h1.join(''), item: url },
      ],
    },
  ]

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav tone="dark" />

      <section className="gp-hero v3-night">
        <div className="gp-col">
          <FadeUp>
            <p className="v3-label">{guide.label}</p>
            <h1 className="font-serif gp-h1">
              {guide.h1[0]}
              <em>{guide.h1[1]}</em>
            </h1>
            <p className="font-sans gp-answer">{guide.answer}</p>
            <p className="font-sans gp-by">
              {fr ? 'Par Nathan Goutagny, fondateur de NateSystem' : 'By Nathan Goutagny, founder of NateSystem'}
            </p>
          </FadeUp>
        </div>
      </section>

      <article className="lx-section gp-body">
        <div className="gp-col">
          {guide.sections.map((s) => (
            <FadeUp key={s.h2}>
              <section className="gp-sec">
                <h2 className="font-serif gp-h2">{s.h2}</h2>
                {s.paras.map((p) => (
                  <p key={p} className="font-sans gp-p">{p}</p>
                ))}
                {s.list && (
                  <ul className="gp-list">
                    {s.list.map((li) => (
                      <li key={li} className="font-sans">{li}</li>
                    ))}
                  </ul>
                )}
              </section>
            </FadeUp>
          ))}

          <FadeUp>
            <Link href={guide.pillar.href} className="gp-pillar">
              <span className="v3-label">{fr ? 'Pour aller plus loin' : 'Go further'}</span>
              <span className="font-serif gp-pillar-title">{guide.pillar.label}</span>
              <span className="font-sans gp-pillar-more">{fr ? 'Voir la page' : 'See the page'} <span aria-hidden="true">→</span></span>
            </Link>
          </FadeUp>

          <section className="gp-faq">
            <h2 className="font-serif gp-h2">{fr ? 'Questions fréquentes' : 'Frequently asked questions'}</h2>
            <ol className="gp-faq-list">
              {guide.faq.map((f, i) => {
                const isOpen = i === open
                return (
                  <li key={f.q} className={`gp-faq-item${isOpen ? ' gp-faq-open' : ''}`}>
                    <button type="button" className="gp-faq-head" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : i)}>
                      <span className="font-serif gp-num">{String(i + 1).padStart(2, '0')}</span>
                      <span className="font-sans gp-faq-q">{f.q}</span>
                      <span className="gp-plus" aria-hidden="true" />
                    </button>
                    <div className="gp-faq-a" hidden={!isOpen}>
                      <p className="font-sans">{f.a}</p>
                    </div>
                  </li>
                )
              })}
            </ol>
          </section>
        </div>
      </article>

      <AuditFinal paddingTop={0} />
      <Footer />
      <MobileCta />

      <style jsx>{`
        .gp-col { max-width: 760px; margin: 0 auto; }
        .gp-hero { padding: clamp(140px, 16vw, 180px) 24px clamp(64px, 8vw, 96px); }
        .gp-h1 { margin: 24px 0 0; font-weight: 400; color: #f0f0f2; font-size: clamp(36px, 4.6vw, 60px); line-height: 1.05; letter-spacing: -0.015em; }
        .gp-h1 em { font-style: italic; color: var(--accent); }
        .gp-answer { margin: 30px 0 0; font-size: clamp(16px, 1.5vw, 18.5px); font-weight: 300; line-height: 1.75; color: rgba(240, 240, 242, 0.78); }
        .gp-by { margin: 22px 0 0; font-size: 12px; letter-spacing: 1.6px; text-transform: uppercase; color: rgba(240, 240, 242, 0.45); }
        .gp-sec { margin-bottom: clamp(44px, 5vw, 64px); }
        .gp-h2 { margin: 0 0 16px; font-size: clamp(26px, 2.8vw, 36px); font-weight: 400; line-height: 1.15; color: var(--text); }
        .gp-p { margin: 0 0 16px; font-size: 17px; font-weight: 300; line-height: 1.8; color: var(--text-secondary); }
        .gp-list { list-style: none; margin: 8px 0 0; padding: 0; }
        .gp-list li { position: relative; padding-left: 22px; margin: 10px 0; font-size: 16.5px; line-height: 1.6; color: var(--text); }
        .gp-list li::before { content: ''; position: absolute; left: 0; top: 0.78em; width: 10px; height: 1px; background: var(--accent); }
        .gp-col :global(.gp-pillar) {
          display: flex; flex-direction: column; gap: 10px; margin: 8px 0 clamp(56px, 7vw, 80px);
          padding: 28px 30px; border-radius: 4px; text-decoration: none;
          background: radial-gradient(120% 90% at 85% 10%, rgba(230, 57, 70, 0.14), transparent 60%), #0e0e12;
        }
        .gp-pillar-title { font-size: clamp(22px, 2.2vw, 28px); line-height: 1.15; color: #f0f0f2; }
        .gp-pillar-more { font-size: 14px; color: rgba(240, 240, 242, 0.75); }
        .gp-faq-list { list-style: none; margin: 8px 0 0; padding: 0; border-top: 1px solid var(--border); }
        .gp-faq-item { border-bottom: 1px solid var(--border); }
        .gp-faq-head { width: 100%; display: grid; grid-template-columns: 44px minmax(0, 1fr) 18px; align-items: baseline; padding: 20px 0; background: none; border: 0; cursor: pointer; text-align: left; color: inherit; }
        .gp-num { font-style: italic; font-size: 17px; color: var(--text-muted); }
        .gp-faq-open .gp-num, .gp-faq-head:hover .gp-num { color: var(--accent); }
        .gp-faq-q { font-size: 16.5px; line-height: 1.45; color: var(--text); padding-right: 16px; }
        .gp-plus { position: relative; align-self: center; width: 14px; height: 14px; }
        .gp-plus::before, .gp-plus::after { content: ''; position: absolute; left: 0; right: 0; top: 50%; height: 1.3px; margin-top: -0.65px; background: var(--text-muted); transition: transform 0.35s ease; }
        .gp-plus::after { transform: rotate(90deg); }
        .gp-faq-open .gp-plus::after { transform: rotate(0deg); }
        .gp-faq-a { padding: 0 34px 22px 44px; }
        .gp-faq-a p { margin: 0; font-size: 15.5px; font-weight: 300; line-height: 1.75; color: var(--text-secondary); }
      `}</style>
    </main>
  )
}
