'use client'

import { useState } from 'react'
import { Search, Boxes, Cpu, GraduationCap, type LucideIcon } from 'lucide-react'
import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'

type Item = { icon: LucideIcon; titleFr: string; titleEn: string; descFr: string; descEn: string }

const ITEMS: Item[] = [
  {
    icon: Search,
    titleFr: 'Consulting & cartographie',
    titleEn: 'Consulting & mapping',
    descFr: 'On analyse vos process, opérations et workflows — de l’arrivée d’un prospect au client qui recommande. On cartographie tout, puis on repère où vous gagnez le plus.',
    descEn: 'We analyse your processes, operations and workflows — from a prospect’s arrival to a client who refers you. We map it all, then pinpoint where you gain the most.',
  },
  {
    icon: Boxes,
    titleFr: 'Système sur-mesure',
    titleEn: 'Custom system',
    descFr: 'On développe le logiciel qui vous manque — métier, ERP, portail, cockpit — construit autour de vos opérations, pas l’inverse. Vos données unifiées, votre code qui vous appartient.',
    descEn: 'We develop the software you’re missing — business app, ERP, portal, cockpit — built around your operations, not the other way round. Your data unified, your code owned by you.',
  },
  {
    icon: Cpu,
    titleFr: 'Transformation & IA',
    titleEn: 'Digital & AI',
    descFr: 'De l’IA et de l’automatisation intégrées par-dessus votre système, uniquement là où elles remplacent de vraies heures. Jamais en décoration.',
    descEn: 'AI and automation layered on top of your system, only where they replace real hours. Never for show.',
  },
  {
    icon: GraduationCap,
    titleFr: 'Formation & accompagnement',
    titleEn: 'Training & support',
    descFr: 'On forme vos équipes, du dirigeant au terrain, à utiliser ces outils au quotidien — jusqu’à l’autonomie complète.',
    descEn: 'We train your teams, from leadership to the field, to use these tools day-to-day — all the way to full autonomy.',
  },
]

export default function WhatWeDo() {
  const { lang } = useLang()
  const d = (fr: string, en: string) => (lang === 'en' ? en : fr)
  const [active, setActive] = useState(0)

  return (
    <section id="ce-quon-fait" style={{ padding: '120px 24px' }}>
      <div className="mx-auto" style={{ maxWidth: '1100px' }}>
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
          <div className="wwd-acc" role="tablist" aria-label={d('Ce qu’on fait', 'What we do')}>
            {ITEMS.map((it, i) => {
              const Icon = it.icon
              const on = i === active
              return (
                <button
                  key={it.titleFr}
                  role="tab"
                  aria-selected={on}
                  className={`wwd-acc-card${on ? ' on' : ''}`}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                >
                  <span className="wwd-acc-top">
                    <span className="wwd-acc-icon"><Icon size={20} strokeWidth={1.7} /></span>
                    <span className="font-mono wwd-acc-num">{String(i + 1).padStart(2, '0')}</span>
                  </span>

                  {/* Label vertical quand replié */}
                  <span className="font-sans wwd-acc-vert">{d(it.titleFr, it.titleEn)}</span>

                  {/* Détail quand déplié */}
                  <span className="wwd-acc-detail">
                    <span className="font-serif italic wwd-acc-title">{d(it.titleFr, it.titleEn)}</span>
                    <span className="font-sans wwd-acc-desc">{d(it.descFr, it.descEn)}</span>
                  </span>
                </button>
              )
            })}
          </div>
        </FadeUp>
      </div>

      <style jsx>{`
        .wwd-acc {
          display: flex;
          gap: 12px;
          height: 380px;
        }
        .wwd-acc-card {
          position: relative;
          flex: 1 1 0;
          min-width: 0;
          text-align: left;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 18px;
          padding: 22px;
          cursor: pointer;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: flex-grow 0.55s cubic-bezier(0.4, 0, 0.2, 1), background 0.4s ease, border-color 0.4s ease;
        }
        .wwd-acc-card:hover { border-color: var(--border-hover); }
        .wwd-acc-card.on {
          flex-grow: 3.4;
          background: var(--bg-elevated);
          border-color: rgba(230, 57, 70, 0.28);
          box-shadow: 0 24px 60px -32px rgba(230, 57, 70, 0.35);
        }
        .wwd-acc-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
        }
        .wwd-acc-icon {
          flex: none;
          width: 46px;
          height: 46px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--accent-subtle);
          color: var(--text-muted);
          transition: color 0.4s ease;
        }
        .wwd-acc-card.on .wwd-acc-icon { color: var(--accent); }
        .wwd-acc-num {
          font-size: 12px;
          letter-spacing: 1px;
          color: var(--text-muted);
          opacity: 0;
          transform: translateY(-2px);
          transition: opacity 0.4s ease;
        }
        .wwd-acc-card.on .wwd-acc-num { opacity: 1; }

        /* Label vertical (replié) — centré dans la carte */
        .wwd-acc-vert {
          position: absolute;
          left: 50%;
          top: 52%;
          writing-mode: vertical-rl;
          transform: translate(-50%, -50%) rotate(180deg);
          white-space: nowrap;
          font-size: 16px;
          font-weight: 500;
          letter-spacing: 0.4px;
          color: var(--text);
          opacity: 1;
          transition: opacity 0.3s ease;
        }
        .wwd-acc-card.on .wwd-acc-vert { opacity: 0; }

        /* Détail (déplié) */
        .wwd-acc-detail {
          position: absolute;
          left: 22px;
          right: 22px;
          bottom: 22px;
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.45s ease 0.12s, transform 0.45s ease 0.12s;
          pointer-events: none;
        }
        .wwd-acc-card.on .wwd-acc-detail { opacity: 1; transform: translateY(0); }
        .wwd-acc-title {
          display: block;
          font-size: 25px;
          font-weight: 400;
          color: var(--text);
          margin-bottom: 12px;
        }
        .wwd-acc-desc {
          display: block;
          font-size: 14.5px;
          font-weight: 300;
          line-height: 1.6;
          color: var(--text-secondary);
          max-width: 460px;
        }

        /* Mobile / tablette étroite — on empile, tout est ouvert */
        @media (max-width: 820px) {
          .wwd-acc { flex-direction: column; height: auto; gap: 14px; }
          .wwd-acc-card { flex: none; padding: 24px; }
          .wwd-acc-card.on { flex: none; box-shadow: none; }
          .wwd-acc-num { display: none; }
          .wwd-acc-vert { display: none; }
          .wwd-acc-detail {
            position: static;
            opacity: 1;
            transform: none;
            margin-top: 18px;
          }
          .wwd-acc-desc { max-width: none; }
        }
      `}</style>
    </section>
  )
}
