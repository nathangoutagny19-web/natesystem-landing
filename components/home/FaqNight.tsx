'use client'

import { useState } from 'react'
import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'
import { makeD } from '@/lib/lang'

/**
 * LA FAQ, VERSION NUIT ET NUMÉROTÉE (refonte du 14 novembre 2026). Les neuf
 * questions et réponses sont celles de la FAQ existante (faq.q1…q9 dans
 * lib/i18n.ts), mot pour mot. Le schéma FAQPage suit la langue de la page.
 */
export default function FaqNight() {
  const { lang, t } = useLang()
  const d = makeD(lang)
  const [open, setOpen] = useState<number>(-1)

  const items = ([1, 2, 3, 4, 5, 6, 7, 8, 9] as const).map((n) => ({ q: t(`faq.q${n}`), a: t(`faq.a${n}`) }))
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: lang,
    mainEntity: items.map((it) => ({ '@type': 'Question', name: it.q, acceptedAnswer: { '@type': 'Answer', text: it.a } })),
  }

  return (
    <section id="faq" className="fq lx-section v3-night">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="fq-wrap">
        <FadeUp>
          <span className="v3-label" style={{ textAlign: 'center' }}>FAQ</span>
          <h2 className="lx-title fq-title">
            {d('Ce qu’on nous demande ', 'What people ask us ', 'Amit kérdezni szoktak ')}
            <span className="accent">{d('avant de commencer.', 'before we start.', 'mielőtt elkezdjük.')}</span>
          </h2>
        </FadeUp>

        <ol className="fq-list">
          {items.map((it, i) => {
            const isOpen = i === open
            return (
              <li key={it.q} className={`fq-item${isOpen ? ' fq-open' : ''}`}>
                <button type="button" className="fq-head" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : i)}>
                  <span className="font-mono fq-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-sans fq-q">{it.q}</span>
                  <span className="fq-plus" aria-hidden="true" />
                </button>
                <div className="fq-a-wrap" hidden={!isOpen}>
                  <p className="font-sans fq-a">{it.a}</p>
                </div>
              </li>
            )
          })}
        </ol>
      </div>

      <style jsx>{`
        .fq-wrap { max-width: 860px; margin: 0 auto; }
        .fq-title { margin: 18px auto 0; max-width: none; text-align: center; }
        .fq-list { list-style: none; margin: clamp(48px, 6vw, 72px) 0 0; padding: 0; border-top: 1px solid rgba(255, 255, 255, 0.1); }
        .fq-item { border-bottom: 1px solid rgba(255, 255, 255, 0.1); }
        .fq-head {
          width: 100%; display: grid; grid-template-columns: 44px minmax(0, 1fr) 18px; align-items: baseline; gap: 0;
          padding: 24px 0; background: none; border: 0; cursor: pointer; text-align: left; color: inherit;
          -webkit-tap-highlight-color: transparent;
        }
        .fq-num { font-family: var(--font-serif); font-style: italic; font-size: 17px; letter-spacing: 0; color: rgba(240, 240, 242, 0.42); transition: color 0.3s ease; }
        .fq-open .fq-num, .fq-head:hover .fq-num { color: var(--accent); }
        .fq-q { font-size: clamp(16px, 1.5vw, 18px); font-weight: 400; line-height: 1.45; color: #f0f0f2; padding-right: 16px; }
        .fq-plus { position: relative; align-self: center; width: 14px; height: 14px; }
        .fq-plus::before, .fq-plus::after {
          content: ''; position: absolute; left: 0; right: 0; top: 50%; height: 1.3px; margin-top: -0.65px;
          background: rgba(240, 240, 242, 0.6); transition: transform 0.35s ease;
        }
        .fq-plus::after { transform: rotate(90deg); }
        .fq-open .fq-plus::after { transform: rotate(0deg); }
        .fq-a-wrap { padding: 0 34px 26px 44px; animation: fqIn 0.45s ease both; }
        @keyframes fqIn { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: none; } }
        .fq-a { margin: 0; font-size: 15px; font-weight: 300; line-height: 1.75; color: rgba(240, 240, 242, 0.66); }
        @media (max-width: 640px) {
          .fq-head { grid-template-columns: 36px minmax(0, 1fr) 16px; padding: 20px 0; }
          .fq-a-wrap { padding: 0 8px 22px 36px; }
        }
      `}</style>
    </section>
  )
}
