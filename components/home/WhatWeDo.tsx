'use client'

import { useState } from 'react'
import { useLang } from '@/components/providers/LangProvider'
import FadeUp from '@/components/ui/FadeUp'

type Item = { titleFr: string; titleEn: string; descFr: string; descEn: string }

const ITEMS: Item[] = [
  {
    titleFr: 'Consulting & cartographie',
    titleEn: 'Consulting & mapping',
    descFr: 'On analyse vos process, opérations et workflows — de l’arrivée d’un prospect au client qui recommande. On cartographie tout, puis on repère où vous gagnez le plus.',
    descEn: 'We analyse your processes, operations and workflows — from a prospect’s arrival to a client who refers you. We map it all, then pinpoint where you gain the most.',
  },
  {
    titleFr: 'Système sur-mesure',
    titleEn: 'Custom system',
    descFr: 'On développe le logiciel qui vous manque — métier, ERP, portail, cockpit — construit autour de vos opérations, pas l’inverse. Vos données unifiées, votre code qui vous appartient.',
    descEn: 'We develop the software you’re missing — business app, ERP, portal, cockpit — built around your operations, not the other way round. Your data unified, your code owned by you.',
  },
  {
    titleFr: 'Transformation & IA',
    titleEn: 'Digital & AI',
    descFr: 'De l’IA et de l’automatisation intégrées par-dessus votre système, uniquement là où elles remplacent de vraies heures. Jamais en décoration.',
    descEn: 'AI and automation layered on top of your system, only where they replace real hours. Never for show.',
  },
  {
    titleFr: 'Formation & accompagnement',
    titleEn: 'Training & support',
    descFr: 'On forme vos équipes, du dirigeant au terrain, à utiliser ces outils au quotidien — jusqu’à l’autonomie complète.',
    descEn: 'We train your teams, from leadership to the field, to use these tools day-to-day — all the way to full autonomy.',
  },
]

export default function WhatWeDo() {
  const { lang } = useLang()
  const d = (fr: string, en: string) => (lang === 'en' ? en : fr)
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="ce-quon-fait" style={{ padding: '120px 24px' }}>
      <div className="mx-auto" style={{ maxWidth: '1000px' }}>
        <FadeUp className="text-center mb-16">
          <span className="section-label">{d('Ce qu’on fait', 'What we do')}</span>
          <h2 className="section-title" style={{ maxWidth: '720px', margin: '0 auto 20px' }}>
            {d('Une infrastructure, ', 'One infrastructure, ')}
            <span className="accent">{d('pas des rustines.', 'not band-aids.')}</span>
          </h2>
          <p className="font-sans" style={{ fontSize: '15px', fontWeight: 300, color: 'var(--text-secondary)', maxWidth: '620px', margin: '0 auto', lineHeight: 1.7 }}>
            {d('On remplace les outils génériques qui ne collent pas par du sur-mesure que vous possédez. L’IA et l’automatisation sont intégrées uniquement là où elles font gagner de vraies heures.',
               'We replace ill-fitting generic tools with custom software you own. AI and automation are embedded only where they save real hours.')}
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="wwx-list">
            {ITEMS.map((it, i) => (
              <button
                key={it.titleFr}
                className={`wwx-row${active === i ? ' on' : ''}`}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(null)}
                type="button"
              >
                <span className="font-mono wwx-num">{String(i + 1).padStart(2, '0')}</span>

                <span className="wwx-main">
                  <span className="wwx-title-wrap">
                    <span className="font-serif italic wwx-title">{d(it.titleFr, it.titleEn)}</span>
                    {/* Soulignement dessiné à la main — se trace au survol (signature NateSystem) */}
                    <svg className="wwx-underline" viewBox="0 0 300 12" preserveAspectRatio="none" fill="none" aria-hidden="true">
                      <path d="M2 8 C 60 2, 110 2, 156 6 S 250 12, 298 5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                  </span>
                  <span className="wwx-desc-wrap">
                    <span className="font-sans wwx-desc">{d(it.descFr, it.descEn)}</span>
                  </span>
                </span>

                <span className="wwx-arrow" aria-hidden="true">→</span>
              </button>
            ))}
          </div>
        </FadeUp>
      </div>

      <style jsx>{`
        .wwx-list { border-top: 1px solid var(--border); }
        .wwx-row {
          width: 100%;
          display: grid;
          grid-template-columns: 54px 1fr 28px;
          align-items: start;
          gap: 22px;
          padding: 30px 10px;
          border-bottom: 1px solid var(--border);
          background: none;
          text-align: left;
          cursor: pointer;
          transition: background 0.35s ease, padding-left 0.35s ease;
        }
        .wwx-row.on { background: linear-gradient(90deg, var(--accent-subtle), transparent 62%); padding-left: 18px; }

        .wwx-num {
          font-size: 14px;
          letter-spacing: 1px;
          color: var(--text-muted);
          padding-top: 12px;
          transition: color 0.35s ease;
        }
        .wwx-row.on .wwx-num { color: var(--accent); }

        .wwx-main { min-width: 0; }
        .wwx-title-wrap { position: relative; display: inline-block; }
        .wwx-title {
          display: block;
          font-size: clamp(25px, 3.4vw, 37px);
          font-weight: 400;
          color: var(--text);
          line-height: 1.15;
          transition: transform 0.35s ease;
        }
        .wwx-row.on .wwx-title { transform: translateX(4px); }

        .wwx-underline {
          position: absolute;
          left: 0;
          right: -4px;
          bottom: -9px;
          width: calc(100% + 4px);
          height: 11px;
          color: var(--accent);
          pointer-events: none;
        }
        .wwx-underline path {
          stroke-dasharray: 320;
          stroke-dashoffset: 320;
          transition: stroke-dashoffset 0.55s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .wwx-row.on .wwx-underline path { stroke-dashoffset: 0; }

        /* Description — repliée par défaut (épuré), se révèle au survol */
        .wwx-desc-wrap {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.42s ease, margin-top 0.42s ease;
          margin-top: 0;
        }
        .wwx-row.on .wwx-desc-wrap { grid-template-rows: 1fr; margin-top: 16px; }
        .wwx-desc {
          display: block;
          overflow: hidden;
          font-size: 15px;
          font-weight: 300;
          line-height: 1.65;
          color: var(--text-secondary);
          max-width: 620px;
          opacity: 0;
          transition: opacity 0.42s ease;
        }
        .wwx-row.on .wwx-desc { opacity: 1; }

        .wwx-arrow {
          font-size: 20px;
          color: var(--text-muted);
          padding-top: 10px;
          opacity: 0;
          transform: translateX(-8px);
          transition: opacity 0.35s ease, transform 0.35s ease, color 0.35s ease;
        }
        .wwx-row.on .wwx-arrow { opacity: 1; transform: translateX(0); color: var(--accent); }

        /* Mobile — pas de survol : tout est ouvert, plus compact */
        @media (max-width: 760px) {
          .wwx-row { grid-template-columns: 40px 1fr; gap: 14px; padding: 24px 4px; }
          .wwx-row .wwx-arrow { display: none; }
          .wwx-num { padding-top: 8px; }
          .wwx-desc-wrap { grid-template-rows: 1fr; margin-top: 12px; }
          .wwx-desc { opacity: 1; }
          .wwx-underline path { stroke-dashoffset: 0; }
        }
      `}</style>
    </section>
  )
}
