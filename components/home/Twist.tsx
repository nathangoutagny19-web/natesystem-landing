'use client'

import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'

/**
 * "We don't just build software" — the benefit core.
 * Hand-drawn / sketch icons (custom organic-stroke SVGs, no template square)
 * that draw themselves on card hover. Charter accent red, dark-mode safe.
 */

type SketchIcon = (props: { className?: string }) => JSX.Element

/* All sketch icons share: organic slightly-irregular stroke, round caps,
   fill none, stroke currentColor. The dash-draw animation runs on hover. */
const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

// 1 — Time: a hand-drawn clock
const IcoTime: SketchIcon = ({ className }) => (
  <svg viewBox="0 0 48 48" className={className} {...stroke}>
    <path className="sk" d="M24 7c9.2-.3 17 7.2 17 16.8 0 9.8-7.7 17.4-17.2 17.2C14.4 40.8 7 33.3 7 24 7 14.8 14.6 7.2 24 7Z" />
    <path className="sk" d="M24 14.5c.2 3.4.1 6.7.3 9.8l7 4.2" />
  </svg>
)
// 2 — Profitability: rising sketch arrow + a coin
const IcoMoney: SketchIcon = ({ className }) => (
  <svg viewBox="0 0 48 48" className={className} {...stroke}>
    <path className="sk" d="M7 32c4-1 7.5-7 12-10.5S28 16 31 19" />
    <path className="sk" d="M31 12.5c3.2-.2 6.3-.1 9.3.2.4 3 .5 6 .4 9.1" />
    <path className="sk" d="M33 36.5c4.7.3 8.6-3.2 8.4-7.4-.2-3.9-3.9-6.8-8-6.4-3.7.3-6.4 3.4-6 7 .3 3.2 2.7 5.6 5.6 6.8Z" />
  </svg>
)
// 3 — Clear decisions: target / focus
const IcoTarget: SketchIcon = ({ className }) => (
  <svg viewBox="0 0 48 48" className={className} {...stroke}>
    <path className="sk" d="M24 9c8.6-.2 15.6 6.7 15.4 15.3C39.2 32.7 32.4 39.2 24 39 15.8 38.8 9 32.2 9 24 9 15.6 15.7 9.2 24 9Z" />
    <path className="sk" d="M24 16.5c4.4-.2 8 3.2 7.8 7.7-.2 4.1-3.6 7.1-7.8 7C20 31 16.7 27.7 16.8 23.7 16.9 19.9 20 16.7 24 16.5Z" />
    <path className="sk" d="M24 22.6c1.1 0 2.1.9 2 2.1-.1 1-1 1.8-2 1.7-1-.1-1.8-1-1.7-2 .1-1 .8-1.7 1.7-1.8Z" />
  </svg>
)
// 4 — Team aligned: three people
const IcoTeam: SketchIcon = ({ className }) => (
  <svg viewBox="0 0 48 48" className={className} {...stroke}>
    <path className="sk" d="M19 19.5c3.1-.2 5.6 2.3 5.4 5.4-.2 2.8-2.5 4.8-5.4 4.7-2.8-.1-5-2.4-4.9-5.2.1-2.6 2.2-4.7 4.9-4.9Z" />
    <path className="sk" d="M9.5 39c.4-4.6 4.2-8.2 9.4-8.1 5 .1 8.8 3.6 9.3 8" />
    <path className="sk" d="M30 19.5c2.8-1 5.8.8 6.2 3.7.3 2.4-1.3 4.6-3.7 5" />
    <path className="sk" d="M33.5 31c3.6.2 6.4 2.8 6.9 6.3" />
  </svg>
)
// 5 — Calm reliability: shield with a check
const IcoShield: SketchIcon = ({ className }) => (
  <svg viewBox="0 0 48 48" className={className} {...stroke}>
    <path className="sk" d="M24 7.5c4.3 2.6 8.8 4 13.8 4.3.6 6.8.2 13-2.4 18.2-2.5 5-6.4 8.3-11.4 11-5-2.6-9-6-11.5-11C9.9 24.8 9.6 18.6 10.2 11.8 15.2 11.5 19.7 10.1 24 7.5Z" />
    <path className="sk" d="M18 23.5c2 1.8 3.6 3.7 5 5.8 2.2-4 4.9-7.3 8-10.2" />
  </svg>
)
// 6 — Self-improving AI: a spark / star
const IcoSpark: SketchIcon = ({ className }) => (
  <svg viewBox="0 0 48 48" className={className} {...stroke}>
    <path className="sk" d="M22 8c1.3 4.6 2.4 9 5 11.6 2.5 2.6 6.8 3.7 11.4 5-4.5 1.4-8.8 2.5-11.4 5.1-2.6 2.6-3.7 7-5 11.5-1.3-4.5-2.4-8.9-5-11.5-2.6-2.6-7-3.7-11.5-5.1 4.6-1.3 9-2.4 11.6-5C19.7 17 20.8 12.6 22 8Z" />
    <path className="sk" d="M37 9c.5 1.7.8 3.4 1 5.2 1.8.2 3.5.5 5.2 1-1.7.5-3.4.8-5.2 1-.2 1.8-.5 3.5-1 5.2-.5-1.7-.8-3.4-1-5.2-1.8-.2-3.5-.5-5.2-1 1.7-.5 3.4-.8 5.2-1 .2-1.8.5-3.5 1-5.2Z" />
  </svg>
)

const ICONS: SketchIcon[] = [IcoTime, IcoMoney, IcoTarget, IcoTeam, IcoShield, IcoSpark]

export default function Twist() {
  const { t } = useLang()

  const benefits = [
    { title: t('twist.b1.title'), desc: t('twist.b1.desc') },
    { title: t('twist.b2.title'), desc: t('twist.b2.desc') },
    { title: t('twist.b3.title'), desc: t('twist.b3.desc') },
    { title: t('twist.b4.title'), desc: t('twist.b4.desc') },
    { title: t('twist.b5.title'), desc: t('twist.b5.desc') },
    { title: t('twist.b6.title'), desc: t('twist.b6.desc') },
  ]

  return (
    <section id="twist" style={{ padding: '120px 24px' }}>
      <div className="mx-auto" style={{ maxWidth: '1100px' }}>
        <FadeUp className="text-center mb-16">
          <span className="section-label">{t('twist.label')}</span>
          <h2 className="section-title" style={{ maxWidth: '720px', margin: '0 auto 20px' }}>
            {t('twist.title')}
          </h2>
          <p className="font-sans" style={{ fontSize: '16px', color: 'var(--text-secondary)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7, fontWeight: 300 }}>
            {t('twist.sub')}
          </p>
        </FadeUp>

        <div className="twist-grid">
          {benefits.map((b, i) => {
            const Icon = ICONS[i]
            return (
              <FadeUp key={b.title} delay={i * 0.08}>
                <article className="twist-card">
                  <span className="twist-ico" aria-hidden="true">
                    <Icon className="twist-ico-svg" />
                  </span>
                  <h3 className="font-serif italic twist-card-title">{b.title}</h3>
                  <p className="font-sans twist-card-desc">{b.desc}</p>
                </article>
              </FadeUp>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        .twist-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          align-items: stretch;
        }
        .twist-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 28px 26px;
          height: 100%;
          box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px -16px rgba(15, 23, 42, 0.12);
          transition: transform 280ms cubic-bezier(0.22, 1, 0.36, 1), border-color 280ms ease, box-shadow 280ms ease;
        }
        .twist-card:hover {
          transform: translateY(-3px);
          border-color: rgba(230, 57, 70, 0.28);
          box-shadow: 0 14px 34px -18px rgba(230, 57, 70, 0.28), 0 1px 2px rgba(15, 23, 42, 0.04);
        }

        /* hand-drawn icon — no template square, just the sketch in accent red */
        .twist-ico {
          display: inline-flex;
          width: 44px; height: 44px;
          color: var(--accent);
          margin-bottom: 18px;
        }
        .twist-ico-svg { width: 100%; height: 100%; display: block; overflow: visible; }

        /* the stroke "draws itself" on hover (and once on first reveal) */
        .twist-ico-svg :global(.sk) {
          stroke-dasharray: 240;
          stroke-dashoffset: 0;
        }
        .twist-card:hover .twist-ico-svg :global(.sk) {
          animation: sk-draw 1.1s cubic-bezier(0.6, 0, 0.2, 1) both;
        }
        .twist-card:hover .twist-ico-svg :global(.sk:nth-child(2)) { animation-delay: 0.12s; }
        .twist-card:hover .twist-ico-svg :global(.sk:nth-child(3)) { animation-delay: 0.22s; }
        .twist-card:hover .twist-ico-svg :global(.sk:nth-child(4)) { animation-delay: 0.3s; }
        @keyframes sk-draw {
          0% { stroke-dashoffset: 240; }
          100% { stroke-dashoffset: 0; }
        }

        .twist-card-title { font-size: 21px; font-weight: 400; line-height: 1.2; color: var(--text); margin: 0 0 10px; }
        .twist-card-desc { font-size: 14px; line-height: 1.6; font-weight: 300; color: var(--text-secondary); margin: 0; }

        @media (max-width: 900px) {
          .twist-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (max-width: 560px) {
          .twist-grid { grid-template-columns: 1fr; }
        }
        @media (prefers-reduced-motion: reduce) {
          .twist-card { transition: none; }
          .twist-card:hover { transform: none; }
          .twist-card:hover .twist-ico-svg :global(.sk) { animation: none; }
        }
      `}</style>
    </section>
  )
}
