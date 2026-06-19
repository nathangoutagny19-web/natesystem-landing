'use client'

import { Check, X } from 'lucide-react'
import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'

export default function Comparison() {
  const { t } = useLang()

  const rows = [
    { crit: t('cmp.r1.crit'), other: t('cmp.r1.other'), us: t('cmp.r1.us') },
    { crit: t('cmp.r2.crit'), other: t('cmp.r2.other'), us: t('cmp.r2.us') },
    { crit: t('cmp.r3.crit'), other: t('cmp.r3.other'), us: t('cmp.r3.us') },
    { crit: t('cmp.r4.crit'), other: t('cmp.r4.other'), us: t('cmp.r4.us') },
    { crit: t('cmp.r5.crit'), other: t('cmp.r5.other'), us: t('cmp.r5.us') },
    { crit: t('cmp.r6.crit'), other: t('cmp.r6.other'), us: t('cmp.r6.us') },
  ]

  return (
    <section id="comparatif" style={{ padding: '120px 24px' }}>
      <div className="mx-auto" style={{ maxWidth: '980px' }}>
        <FadeUp className="text-center mb-16">
          <span className="section-label">{t('cmp.label')}</span>
          <h2 className="section-title" style={{ maxWidth: '720px', margin: '0 auto 20px' }}>
            {t('cmp.title')}{' '}
            <span className="accent">{t('cmp.titleAccent')}</span>
          </h2>
          <p className="font-sans" style={{ fontSize: '16px', color: 'var(--text-secondary)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7, fontWeight: 300 }}>
            {t('cmp.sub')}
          </p>
        </FadeUp>

        <FadeUp delay={0.12}>
          <div className="cmp-table">
            {/* Header row */}
            <div className="cmp-row cmp-head">
              <div className="cmp-cell cmp-crit" />
              <div className="cmp-cell cmp-other-head">
                <span className="font-mono">{t('cmp.colOther')}</span>
              </div>
              <div className="cmp-cell cmp-us-head">
                <span className="font-serif italic">{t('cmp.colUs')}</span>
              </div>
            </div>

            {rows.map((r) => (
              <div className="cmp-row" key={r.crit}>
                <div className="cmp-cell cmp-crit">{r.crit}</div>
                <div className="cmp-cell cmp-other">
                  <X size={15} strokeWidth={2.2} className="cmp-ico cmp-ico-x" />
                  <span>{r.other}</span>
                </div>
                <div className="cmp-cell cmp-us">
                  <Check size={15} strokeWidth={2.4} className="cmp-ico cmp-ico-check" />
                  <span>{r.us}</span>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>

      <style jsx>{`
        .cmp-table {
          border: 1px solid var(--border);
          border-radius: 16px;
          overflow: hidden;
          background: var(--bg-card);
        }
        .cmp-row {
          display: grid;
          grid-template-columns: 1.1fr 1.4fr 1.4fr;
          align-items: stretch;
          border-bottom: 1px solid var(--border);
        }
        .cmp-row:last-child {
          border-bottom: none;
        }
        .cmp-cell {
          padding: 18px 20px;
          font-size: 14px;
          line-height: 1.5;
          display: flex;
          align-items: center;
          gap: 9px;
        }
        /* Critère (1st col) */
        .cmp-crit {
          font-weight: 500;
          color: var(--text);
          background: var(--bg-elevated);
          border-right: 1px solid var(--border);
        }
        /* Header */
        .cmp-head .cmp-cell {
          padding-top: 22px;
          padding-bottom: 22px;
        }
        .cmp-other-head {
          justify-content: center;
          color: var(--text-muted);
        }
        .cmp-other-head :global(span) {
          font-size: 11px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          font-weight: 400;
        }
        .cmp-us-head {
          justify-content: center;
          background: var(--accent-subtle);
          border-left: 1px solid rgba(230, 57, 70, 0.18);
        }
        .cmp-us-head :global(span) {
          font-size: 22px;
          font-weight: 400;
          color: var(--accent);
        }
        /* Body cells */
        .cmp-other {
          color: var(--text-secondary);
          font-weight: 300;
        }
        .cmp-us {
          color: var(--text);
          font-weight: 400;
          background: var(--accent-subtle);
          border-left: 1px solid rgba(230, 57, 70, 0.18);
        }
        .cmp-ico {
          flex-shrink: 0;
        }
        .cmp-ico-x {
          color: var(--text-muted);
          opacity: 0.7;
        }
        .cmp-ico-check {
          color: var(--accent);
        }

        @media (max-width: 760px) {
          .cmp-row {
            grid-template-columns: 1fr;
          }
          .cmp-crit {
            border-right: none;
            border-bottom: 1px solid var(--border);
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            padding: 12px 16px;
          }
          .cmp-cell {
            padding: 12px 16px;
          }
          .cmp-us {
            border-left: none;
          }
          .cmp-us-head,
          .cmp-other-head {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}
