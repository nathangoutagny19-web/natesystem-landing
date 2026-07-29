'use client'

import { useState } from 'react'
import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'

/**
 * La Radiographie, pièce maîtresse de /methode.
 * On applique NOTRE propre méthode sur une activité type, en démo : on
 * « radiographie » le bordel (sources éparpillées) puis on le résout en 4 temps.
 * 4 étapes cliquables à gauche · une scène SVG « rayons X » à droite qui se
 * transforme selon l'étape active. SVG fait main (charte : jamais de lib de chart).
 */

// Sources éparpillées (positions dans le viewBox 0 0 480 360)
const SOURCES = [
  { x: 74, y: 66, label: 'Tableurs' },
  { x: 58, y: 158, label: 'Cahiers' },
  { x: 92, y: 250, label: 'WhatsApp' },
  { x: 168, y: 312, label: 'Mails' },
  { x: 176, y: 128, label: 'Les têtes' },
]
const HUB = { x: 356, y: 186 }

export default function Radiographie() {
  const { t } = useLang()
  const [active, setActive] = useState(0)

  const steps = [
    { name: t('radio.s1.name'), tag: t('radio.s1.tag'), desc: t('radio.s1.desc') },
    { name: t('radio.s2.name'), tag: t('radio.s2.tag'), desc: t('radio.s2.desc') },
    { name: t('radio.s3.name'), tag: t('radio.s3.tag'), desc: t('radio.s3.desc') },
    { name: t('radio.s4.name'), tag: t('radio.s4.tag'), desc: t('radio.s4.desc') },
  ]

  // Visibilités dérivées de l'étape active
  const connected = active >= 1 // liens vers la base
  const automated = active >= 2 // badges Auto/IA
  const owned = active >= 3      // sceau propriété + passation

  return (
    <section id="radiographie" style={{ padding: '110px 24px' }}>
      <div className="mx-auto" style={{ maxWidth: 1100 }}>
        <FadeUp className="text-center mb-12">
          <span className="section-label">{t('radio.eyebrow')}</span>
          <h2 className="section-title" style={{ maxWidth: 640, margin: '0 auto 16px' }}>
            {t('radio.title')} <span className="accent">{t('radio.titleAccent')}</span>
          </h2>
          <p className="font-sans" style={{ fontSize: 15, fontWeight: 300, color: 'var(--text-secondary)', maxWidth: 540, margin: '0 auto', lineHeight: 1.7 }}>
            {t('radio.sub')}
          </p>
        </FadeUp>

        <div className="radio-grid">
          {/* ─── Gauche : les 4 étapes cliquables ─── */}
          <div className="radio-steps">
            {steps.map((s, i) => {
              const isActive = i === active
              return (
                <button
                  key={s.name}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`radio-step ${isActive ? 'is-active' : ''}`}
                  aria-pressed={isActive}
                >
                  <span className="radio-step-num font-serif italic">{`0${i + 1}`}</span>
                  <span className="radio-step-body">
                    <span className="radio-step-head">
                      <span className="radio-step-name font-serif italic">{s.name}</span>
                      <span className="radio-step-tag font-mono">{s.tag}</span>
                    </span>
                    <span
                      className="radio-step-desc font-sans"
                      style={{ maxHeight: isActive ? 160 : 0, opacity: isActive ? 1 : 0 }}
                    >
                      {s.desc}
                    </span>
                  </span>
                </button>
              )
            })}
            <p className="radio-hint font-mono">{t('radio.hint')}</p>
          </div>

          {/* ─── Droite : la scène « rayons X » ─── */}
          <FadeUp delay={0.1}>
            <div className="radio-scene">
              <svg viewBox="0 0 480 360" width="100%" role="img" aria-label="Radiographie du process">
                {/* grille de fond façon scanner */}
                <defs>
                  <pattern id="radioGrid" width="24" height="24" patternUnits="userSpaceOnUse">
                    <path d="M24 0H0V24" fill="none" stroke="var(--border)" strokeWidth="0.5" opacity="0.5" />
                  </pattern>
                </defs>
                <rect x="0" y="0" width="480" height="360" fill="url(#radioGrid)" />

                {/* connecteurs source → base */}
                {SOURCES.map((s, i) => (
                  <line
                    key={`l${i}`}
                    x1={s.x} y1={s.y} x2={HUB.x} y2={HUB.y}
                    stroke="var(--accent)"
                    strokeWidth="1.4"
                    strokeDasharray="440"
                    style={{
                      strokeDashoffset: connected ? 0 : 440,
                      opacity: connected ? 0.55 : 0,
                      transition: 'stroke-dashoffset 0.7s ease, opacity 0.5s ease',
                      transitionDelay: `${i * 0.06}s`,
                    }}
                  />
                ))}

                {/* badges Auto / IA sur 2 connecteurs (étape 3) */}
                {[{ i: 0, label: t('radio.scene.auto') }, { i: 2, label: t('radio.scene.ai') }].map(({ i, label }) => {
                  const s = SOURCES[i]
                  const mx = (s.x + HUB.x) / 2
                  const my = (s.y + HUB.y) / 2
                  return (
                    <g key={`b${i}`} style={{ opacity: automated ? 1 : 0, transition: 'opacity 0.45s ease', transitionDelay: '0.15s' }}>
                      <rect x={mx - 22} y={my - 12} width="44" height="22" rx="11" fill="var(--accent)" />
                      <text x={mx} y={my + 4} textAnchor="middle" fontSize="11" fontFamily="var(--font-mono)" fill="#fff" fontWeight="500">{label}</text>
                    </g>
                  )
                })}

                {/* sources éparpillées */}
                {SOURCES.map((s, i) => (
                  <g key={`s${i}`}>
                    <rect
                      x={s.x - 42} y={s.y - 15} width="84" height="30" rx="8"
                      fill="var(--bg-card)" stroke="var(--border)" strokeWidth="1"
                      style={{ opacity: connected ? 0.7 : 1, transition: 'opacity 0.5s ease' }}
                    />
                    <text x={s.x} y={s.y + 4} textAnchor="middle" fontSize="11" fontFamily="var(--font-mono)" fill="var(--text-secondary)">{s.label}</text>
                  </g>
                ))}

                {/* la base unifiée (hub) */}
                <g style={{ opacity: connected ? 1 : 0.25, transition: 'opacity 0.5s ease' }}>
                  <circle cx={HUB.x} cy={HUB.y} r="46" fill="var(--accent-subtle)" stroke="var(--accent)" strokeWidth="1.5" />
                  <circle cx={HUB.x} cy={HUB.y} r="46" fill="none" stroke="var(--accent)" strokeWidth="1.5"
                    style={{ opacity: automated ? 0.5 : 0, transformOrigin: `${HUB.x}px ${HUB.y}px`, animation: automated ? 'radioPulse 2.4s ease-in-out infinite' : 'none' }} />
                  <text x={HUB.x} y={HUB.y + 4} textAnchor="middle" fontSize="12" fontFamily="var(--font-mono)" fill="var(--accent)" fontWeight="600">{t('radio.scene.hub')}</text>
                </g>

                {/* passation : sceau propriété + doc + sortie équipe (étape 4) */}
                <g style={{ opacity: owned ? 1 : 0, transition: 'opacity 0.5s ease' }}>
                  <rect x={HUB.x - 34} y={HUB.y + 54} width="68" height="24" rx="12" fill="none" stroke="var(--accent)" strokeWidth="1.2" />
                  <text x={HUB.x} y={HUB.y + 70} textAnchor="middle" fontSize="10" fontFamily="var(--font-mono)" fill="var(--accent)" fontWeight="600">{t('radio.scene.yours')}</text>
                  <rect x={HUB.x - 20} y={HUB.y - 92} width="40" height="22" rx="6" fill="var(--bg-card)" stroke="var(--border)" />
                  <text x={HUB.x} y={HUB.y - 77} textAnchor="middle" fontSize="10" fontFamily="var(--font-mono)" fill="var(--text-secondary)">{t('radio.scene.doc')}</text>
                </g>

                {/* ligne de scan (forte à l'étape 1) */}
                <rect
                  x="0" y="0" width="2.5" height="360" fill="var(--accent)"
                  style={{ opacity: active === 0 ? 0.6 : 0.12, animation: 'radioScan 3.4s linear infinite' }}
                />
              </svg>
            </div>
          </FadeUp>
        </div>
      </div>

      <style jsx>{`
        .radio-grid {
          display: grid;
          grid-template-columns: 0.92fr 1.08fr;
          gap: 48px;
          align-items: center;
        }
        .radio-steps { display: flex; flex-direction: column; gap: 8px; }
        .radio-step {
          display: flex; gap: 16px; align-items: flex-start;
          width: 100%; text-align: left; cursor: pointer;
          background: transparent; border: 1px solid transparent;
          border-radius: 12px; padding: 16px 18px;
          border-left: 2px solid var(--border);
          transition: background 0.3s ease, border-color 0.3s ease;
        }
        .radio-step:hover { background: var(--bg-card); }
        .radio-step.is-active {
          background: var(--bg-card);
          border-color: var(--border);
          border-left: 2px solid var(--accent);
        }
        .radio-step-num {
          font-size: 22px; color: var(--accent); line-height: 1; flex: none;
          opacity: 0.5; transition: opacity 0.3s ease; padding-top: 2px;
        }
        .radio-step.is-active .radio-step-num { opacity: 1; }
        .radio-step-body { display: flex; flex-direction: column; gap: 4px; flex: 1; }
        .radio-step-head { display: flex; align-items: baseline; gap: 12px; flex-wrap: wrap; }
        .radio-step-name { font-size: 21px; font-weight: 400; color: var(--text); }
        .radio-step-tag {
          font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase;
          color: var(--accent); font-weight: 500;
        }
        .radio-step-desc {
          font-size: 14px; line-height: 1.6; font-weight: 300;
          color: var(--text-secondary); overflow: hidden;
          transition: max-height 0.4s ease, opacity 0.4s ease;
        }
        .radio-hint {
          font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase;
          color: var(--text-muted); margin: 10px 0 0 20px;
        }
        .radio-scene {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 18px;
          box-shadow: 0 1px 2px rgba(15,23,42,0.04), 0 8px 24px -16px rgba(15,23,42,0.12);
        }
        @media (max-width: 900px) {
          .radio-grid { grid-template-columns: 1fr; gap: 32px; }
          .radio-scene { order: -1; }
        }
      `}</style>

      {/* keyframes globales (scan + pulse) */}
      <style>{`
        @keyframes radioScan {
          0% { transform: translateX(0); }
          100% { transform: translateX(480px); }
        }
        @keyframes radioPulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.14); opacity: 0; }
        }
      `}</style>
    </section>
  )
}
