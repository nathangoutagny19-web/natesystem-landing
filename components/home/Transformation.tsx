'use client'

import { X, Check, ArrowRight } from 'lucide-react'
import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'

export default function Transformation() {
  const { t } = useLang()

  const before = [
    t('trans.before1'),
    t('trans.before2'),
    t('trans.before3'),
    t('trans.before4'),
    t('trans.before5'),
  ]
  const after = [
    t('trans.after1'),
    t('trans.after2'),
    t('trans.after3'),
    t('trans.after4'),
    t('trans.after5'),
  ]

  return (
    <section id="transformation" style={{ padding: '120px 24px' }}>
      <div className="mx-auto" style={{ maxWidth: '1100px' }}>
        <FadeUp className="text-center mb-16">
          <span className="section-label">{t('trans.label')}</span>
          <h2 className="section-title" style={{ maxWidth: '720px', margin: '0 auto' }}>
            {t('trans.title')}{' '}
            <span className="accent">{t('trans.titleAccent')}</span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.12}>
          <div className="trans-grid">
            {/* BEFORE — terne, friction */}
            <div className="trans-card trans-before">
              <p className="font-mono trans-tag trans-tag-before">{t('trans.beforeLabel')}</p>
              <ul className="trans-list">
                {before.map((item) => (
                  <li key={item} className="trans-item">
                    <span className="trans-ico trans-ico-x" aria-hidden="true">
                      <X size={13} strokeWidth={2.4} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Arrow — before → after */}
            <div className="trans-arrow" aria-hidden="true">
              <span className="trans-arrow-badge">
                <ArrowRight size={20} strokeWidth={2} />
              </span>
            </div>

            {/* AFTER — clair, fluide, accent */}
            <div className="trans-card trans-after">
              <p className="font-mono trans-tag trans-tag-after">{t('trans.afterLabel')}</p>
              <ul className="trans-list">
                {after.map((item) => (
                  <li key={item} className="trans-item trans-item-after">
                    <span className="trans-ico trans-ico-check" aria-hidden="true">
                      <Check size={13} strokeWidth={2.6} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p
            className="font-serif italic text-center"
            style={{
              fontSize: 'clamp(20px, 3vw, 26px)',
              fontWeight: 400,
              color: 'var(--text)',
              lineHeight: 1.4,
              maxWidth: '640px',
              margin: '48px auto 0',
            }}
          >
            {t('trans.punch')}
          </p>
        </FadeUp>
      </div>

      <style jsx>{`
        .trans-grid {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: stretch;
          gap: 0;
        }
        .trans-card {
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 32px 28px;
          height: 100%;
        }
        /* BEFORE — muted, slightly recessed, cool grey */
        .trans-before {
          background: var(--bg-elevated);
        }
        /* AFTER — clean white, lifted, accent-tinted edge */
        .trans-after {
          background: var(--bg-card);
          border-color: rgba(230, 57, 70, 0.18);
          box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px -16px rgba(15, 23, 42, 0.12);
        }
        .trans-tag {
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-weight: 400;
          margin: 0 0 20px;
        }
        .trans-tag-before {
          color: var(--text-muted);
        }
        .trans-tag-after {
          color: var(--accent);
        }
        .trans-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          gap: 16px;
        }
        .trans-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 14.5px;
          line-height: 1.5;
          font-weight: 300;
          color: var(--text-secondary);
        }
        .trans-item-after {
          color: var(--text);
          font-weight: 400;
        }
        .trans-ico {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 22px;
          height: 22px;
          border-radius: 7px;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .trans-ico-x {
          background: rgba(15, 23, 42, 0.06);
          color: var(--text-muted);
        }
        .trans-ico-check {
          background: var(--accent-subtle);
          color: var(--accent);
          border: 1px solid rgba(230, 57, 70, 0.18);
        }
        /* Center arrow */
        .trans-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 20px;
        }
        .trans-arrow-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: var(--accent-subtle);
          border: 1px solid rgba(230, 57, 70, 0.18);
          color: var(--accent);
        }

        @media (max-width: 760px) {
          .trans-grid {
            grid-template-columns: 1fr;
            gap: 0;
          }
          .trans-arrow {
            padding: 16px 0;
          }
          /* On mobile the arrow points down (before → after stacked) */
          .trans-arrow-badge :global(svg) {
            transform: rotate(90deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .trans-arrow-badge :global(svg) {
            transition: none;
          }
        }
      `}</style>
    </section>
  )
}
