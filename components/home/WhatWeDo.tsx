'use client'

import { useState } from 'react'
import { useLang } from '@/components/providers/LangProvider'
import FadeUp from '@/components/ui/FadeUp'

type Item = { titleFr: string; titleEn: string; descFr: string; descEn: string }

const ITEMS: Item[] = [
  {
    titleFr: 'Consulting opérationnel',
    titleEn: 'Operational consulting',
    descFr: 'On analyse vos process, opérations et workflows, de l’arrivée d’un prospect au client qui recommande. On cartographie tout, puis on repère où vous gagnez le plus.',
    descEn: 'We analyse your processes, operations and workflows, from a prospect’s arrival to a client who refers you. We map it all, then pinpoint where you gain the most.',
  },
  {
    titleFr: 'Système sur-mesure',
    titleEn: 'Custom system',
    descFr: 'On développe le logiciel qui vous manque, métier, ERP, portail, cockpit, construit autour de vos opérations, pas l’inverse. Vos données unifiées, votre code qui vous appartient.',
    descEn: 'We develop the software you’re missing, business app, ERP, portal, cockpit, built around your operations, not the other way round. Your data unified, your code owned by you.',
  },
  {
    titleFr: 'Digitalisation & IA',
    titleEn: 'Digitalisation & AI',
    descFr: 'De l’IA et de l’automatisation intégrées par-dessus votre système, uniquement là où elles remplacent de vraies heures. Jamais en décoration.',
    descEn: 'AI and automation layered on top of your system, only where they replace real hours. Never for show.',
  },
  {
    titleFr: 'Formation & accompagnement',
    titleEn: 'Training & support',
    descFr: 'On forme vos équipes, du dirigeant au terrain, à utiliser ces outils au quotidien, jusqu’à l’autonomie complète.',
    descEn: 'We train your teams, from leadership to the field, to use these tools day-to-day, all the way to full autonomy.',
  },
]

/* ——— Visuels SVG hand-rolled, animés quand la ligne est active ——— */

// 1. Cartographie façon Miro : nœuds/bulles reliés
function VizMap() {
  return (
    <svg viewBox="0 0 200 130" fill="none" className="wwx-viz-svg" aria-hidden="true">
      <path className="viz-link" d="M45 32 L100 66" />
      <path className="viz-link" d="M152 28 L100 66" />
      <path className="viz-link" d="M100 66 L50 102" />
      <path className="viz-link" d="M100 66 L158 98" />
      <rect className="viz-node viz-node-a" style={{ transitionDelay: '0s' }} x="30" y="20" width="34" height="24" rx="6" />
      <rect className="viz-node" style={{ transitionDelay: '0.06s' }} x="134" y="16" width="36" height="24" rx="6" />
      <rect className="viz-node viz-node-a" style={{ transitionDelay: '0.12s' }} x="80" y="54" width="40" height="26" rx="6" />
      <rect className="viz-node" style={{ transitionDelay: '0.18s' }} x="32" y="90" width="36" height="24" rx="6" />
      <rect className="viz-node" style={{ transitionDelay: '0.24s' }} x="140" y="86" width="36" height="24" rx="6" />
    </svg>
  )
}

// 2. Prototype logiciel : fenêtre dashboard + barres
function VizProto() {
  return (
    <svg viewBox="0 0 200 130" fill="none" className="wwx-viz-svg" aria-hidden="true">
      <rect className="viz-win" x="22" y="14" width="156" height="102" rx="10" />
      <line className="viz-bar-top" x1="22" y1="34" x2="178" y2="34" />
      <circle className="viz-dot" cx="34" cy="24" r="2.4" />
      <circle className="viz-dot" cx="43" cy="24" r="2.4" />
      <circle className="viz-dot" cx="52" cy="24" r="2.4" />
      <rect className="viz-kpi" x="34" y="44" width="54" height="20" rx="4" />
      <rect className="viz-kpi" x="98" y="44" width="68" height="20" rx="4" />
      <rect className="viz-grow" style={{ transitionDelay: '0s' }} x="40" y="74" width="16" height="30" rx="3" />
      <rect className="viz-grow" style={{ transitionDelay: '0.06s' }} x="66" y="74" width="16" height="30" rx="3" />
      <rect className="viz-grow viz-grow-a" style={{ transitionDelay: '0.12s' }} x="92" y="74" width="16" height="30" rx="3" />
      <rect className="viz-grow" style={{ transitionDelay: '0.18s' }} x="118" y="74" width="16" height="30" rx="3" />
      <rect className="viz-grow viz-grow-a" style={{ transitionDelay: '0.24s' }} x="144" y="74" width="16" height="30" rx="3" />
    </svg>
  )
}

// 3. Courbes en hausse
function VizGrowth() {
  return (
    <svg viewBox="0 0 200 130" fill="none" className="wwx-viz-svg" aria-hidden="true">
      <line className="viz-axis" x1="24" y1="20" x2="24" y2="108" />
      <line className="viz-axis" x1="24" y1="108" x2="180" y2="108" />
      <path className="viz-curve" d="M28 96 L64 78 L98 86 L134 52 L172 30" />
      <path className="viz-arrow" d="M172 30 L160 34 M172 30 L168 42" />
      <circle className="viz-tip" cx="172" cy="30" r="4" />
    </svg>
  )
}

// 4. Quelqu'un qui enseigne : tableau + personne
function VizTeach() {
  return (
    <svg viewBox="0 0 200 130" fill="none" className="wwx-viz-svg" aria-hidden="true">
      <rect className="viz-board" x="70" y="16" width="112" height="72" rx="8" />
      <line className="viz-write" style={{ transitionDelay: '0s' }} x1="84" y1="34" x2="150" y2="34" />
      <line className="viz-write" style={{ transitionDelay: '0.12s' }} x1="84" y1="48" x2="168" y2="48" />
      <line className="viz-write" style={{ transitionDelay: '0.24s' }} x1="84" y1="62" x2="132" y2="62" />
      {/* personne */}
      <circle className="viz-person" cx="34" cy="52" r="11" />
      <path className="viz-person" d="M16 104 C 16 78, 52 78, 52 104" />
      <path className="viz-point" d="M46 60 L70 46" />
    </svg>
  )
}

const VIZ = [VizMap, VizProto, VizGrowth, VizTeach]

export default function WhatWeDo() {
  const { lang } = useLang()
  const d = (fr: string, en: string) => (lang === 'en' ? en : fr)
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="ce-quon-fait" style={{ padding: '120px 24px' }}>
      <div className="mx-auto" style={{ maxWidth: '1040px' }}>
        <FadeUp className="text-center mb-16">
          <span className="section-label">{d('Nos services', 'Our services')}</span>
          <h2 className="section-title" style={{ maxWidth: '720px', margin: '0 auto 20px' }}>
            {d('Une expertise, ', 'Real expertise, ')}
            <span className="accent">{d('forgée sur le terrain.', 'forged in the field.')}</span>
          </h2>
          <p className="font-sans" style={{ fontSize: '15px', fontWeight: 300, color: 'var(--text-secondary)', maxWidth: '620px', margin: '0 auto', lineHeight: 1.7 }}>
            {d('On remplace les outils génériques qui ne collent pas par du sur-mesure que vous possédez. L’IA et l’automatisation sont intégrées uniquement là où elles font gagner de vraies heures.',
               'We replace ill-fitting generic tools with custom software you own. AI and automation are embedded only where they save real hours.')}
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="wwx-list">
            {ITEMS.map((it, i) => {
              const Viz = VIZ[i]
              return (
                <button
                  key={it.titleFr}
                  className={`wwx-row${active === i ? ' on' : ''}`}
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(i)}
                  onBlur={() => setActive(null)}
                  type="button"
                >
                  <span className="wwx-mark" aria-hidden="true" />

                  <span className="wwx-main">
                    <span className="wwx-title-wrap">
                      <span className="font-serif italic wwx-title">{d(it.titleFr, it.titleEn)}</span>
                      <svg className="wwx-underline" viewBox="0 0 300 12" preserveAspectRatio="none" fill="none" aria-hidden="true">
                        <path d="M2 8 C 60 2, 110 2, 156 6 S 250 12, 298 5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                      </svg>
                    </span>
                    <span className="wwx-desc-wrap">
                      <span className="font-sans wwx-desc">{d(it.descFr, it.descEn)}</span>
                    </span>
                  </span>

                  <span className="wwx-viz" aria-hidden="true"><Viz /></span>
                </button>
              )
            })}
          </div>
        </FadeUp>
      </div>

      <style jsx>{`
        .wwx-list { border-top: 1px solid var(--border); }
        .wwx-row {
          width: 100%;
          display: grid;
          grid-template-columns: 54px 1fr 200px;
          align-items: center;
          gap: 22px;
          padding: 26px 10px;
          border-bottom: 1px solid var(--border);
          background: none;
          text-align: left;
          cursor: pointer;
          transition: background 0.35s ease, padding-left 0.35s ease;
        }
        .wwx-row.on { background: linear-gradient(90deg, var(--accent-subtle), transparent 70%); padding-left: 18px; }

        .wwx-mark {
          align-self: start;
          margin-top: 22px;
          width: 22px;
          height: 2px;
          border-radius: 2px;
          background: var(--border-hover);
          transition: background 0.35s ease, width 0.35s ease;
        }
        .wwx-row.on .wwx-mark { background: var(--accent); width: 34px; }

        .wwx-main { min-width: 0; align-self: center; }
        .wwx-title-wrap { position: relative; display: inline-block; }
        .wwx-title {
          display: block;
          font-size: clamp(24px, 3.2vw, 35px);
          font-weight: 400;
          color: var(--text);
          line-height: 1.15;
          transition: transform 0.35s ease;
        }
        .wwx-row.on .wwx-title { transform: translateX(4px); }

        .wwx-underline {
          position: absolute;
          left: 0; right: -4px; bottom: -9px;
          width: calc(100% + 4px); height: 11px;
          color: var(--accent);
          pointer-events: none;
        }
        .wwx-underline path {
          stroke-dasharray: 320;
          stroke-dashoffset: 320;
          transition: stroke-dashoffset 0.55s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .wwx-row.on .wwx-underline path { stroke-dashoffset: 0; }

        .wwx-desc-wrap {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.42s ease, margin-top 0.42s ease;
          margin-top: 0;
        }
        .wwx-row.on .wwx-desc-wrap { grid-template-rows: 1fr; margin-top: 14px; }
        .wwx-desc {
          display: block;
          overflow: hidden;
          font-size: 15px;
          font-weight: 300;
          line-height: 1.65;
          color: var(--text-secondary);
          max-width: 560px;
          opacity: 0;
          transition: opacity 0.42s ease;
        }
        .wwx-row.on .wwx-desc { opacity: 1; }

        /* ——— Visuel animé à droite ——— */
        .wwx-viz {
          justify-self: end;
          width: 200px;
          height: 130px;
          opacity: 0;
          transform: translateX(12px) scale(0.96);
          transition: opacity 0.4s ease, transform 0.45s ease;
          pointer-events: none;
        }
        .wwx-row.on .wwx-viz { opacity: 1; transform: translateX(0) scale(1); }
      `}</style>

      {/* Styles globaux des visuels, transitions (pas de keyframes : plus fiable sous styled-jsx global) */}
      <style jsx global>{`
        .wwx-viz-svg { width: 100%; height: 100%; overflow: visible; }
        .wwx-viz-svg [class^='viz-'] { vector-effect: non-scaling-stroke; }

        /* état de repos (invisible / non tracé) + transition */
        .viz-link { stroke: var(--border-hover); stroke-width: 1.5; stroke-dasharray: 130; stroke-dashoffset: 130; transition: stroke-dashoffset 0.6s ease; }
        .viz-node { fill: var(--bg-elevated); stroke: var(--border-hover); stroke-width: 1.5; opacity: 0; transform-box: fill-box; transform-origin: center; transform: scale(0.4); transition: opacity 0.4s ease, transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1); }
        .viz-node-a { stroke: var(--accent); fill: var(--accent-subtle); }
        .viz-win { stroke: var(--border-hover); stroke-width: 1.5; fill: var(--bg-elevated); }
        .viz-bar-top { stroke: var(--border-hover); stroke-width: 1.5; }
        .viz-dot { fill: var(--text-muted); }
        .viz-kpi { fill: none; stroke: var(--border-hover); stroke-width: 1.5; }
        .viz-grow { fill: var(--border-hover); transform-box: fill-box; transform-origin: bottom; transform: scaleY(0); transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1); }
        .viz-grow-a { fill: var(--accent); }
        .viz-axis { stroke: var(--border-hover); stroke-width: 1.5; }
        .viz-curve { stroke: var(--accent); stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; stroke-dasharray: 260; stroke-dashoffset: 260; transition: stroke-dashoffset 0.7s ease; }
        .viz-arrow { stroke: var(--accent); stroke-width: 2.5; stroke-linecap: round; opacity: 0; transition: opacity 0.3s ease 0.5s; }
        .viz-tip { fill: var(--accent); opacity: 0; transform-box: fill-box; transform-origin: center; transform: scale(0); transition: opacity 0.3s ease 0.45s, transform 0.3s ease 0.45s; }
        .viz-board { stroke: var(--border-hover); stroke-width: 1.5; fill: var(--bg-elevated); }
        .viz-write { stroke: var(--accent); stroke-width: 2; stroke-linecap: round; stroke-dasharray: 130; stroke-dashoffset: 130; transition: stroke-dashoffset 0.5s ease; }
        .viz-person { stroke: var(--text-secondary); stroke-width: 2; fill: none; opacity: 0; transform-box: fill-box; transform-origin: center; transform: scale(0.5); transition: opacity 0.4s ease, transform 0.4s ease; }
        .viz-point { stroke: var(--accent); stroke-width: 2; stroke-linecap: round; stroke-dasharray: 40; stroke-dashoffset: 40; transition: stroke-dashoffset 0.4s ease 0.2s; }

        /* état actif = valeurs cibles (les transitions font le reste) */
        .wwx-row.on .viz-link { stroke-dashoffset: 0; }
        .wwx-row.on .viz-node { opacity: 1; transform: scale(1); }
        .wwx-row.on .viz-grow { transform: scaleY(1); }
        .wwx-row.on .viz-curve { stroke-dashoffset: 0; }
        .wwx-row.on .viz-arrow { opacity: 1; }
        .wwx-row.on .viz-tip { opacity: 1; transform: scale(1); }
        .wwx-row.on .viz-write { stroke-dashoffset: 0; }
        .wwx-row.on .viz-person { opacity: 1; transform: scale(1); }
        .wwx-row.on .viz-point { stroke-dashoffset: 0; }

        @media (max-width: 820px) {
          .wwx-viz { display: none; }
        }
      `}</style>

      <style jsx>{`
        @media (max-width: 820px) {
          .wwx-row { grid-template-columns: 32px 1fr; gap: 14px; padding: 24px 4px; }
          .wwx-mark { margin-top: 16px; }
          .wwx-desc-wrap { grid-template-rows: 1fr; margin-top: 12px; }
          .wwx-desc { opacity: 1; }
          .wwx-underline path { stroke-dashoffset: 0; }
        }
      `}</style>
    </section>
  )
}
