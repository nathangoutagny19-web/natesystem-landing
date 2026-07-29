'use client'

import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'

/**
 * ComparisonV2, variante 4 colonnes de la comparaison honnête (REFONTE §7).
 * Ajoute les vraies alternatives du prospect : Freelance / ESN / SaaS / NateSystem.
 * Colonne NateSystem mise en avant (fond accent-subtle). La table scrolle
 * horizontalement dans son propre conteneur sur mobile (jamais le body).
 */
export default function ComparisonV2() {
  const { t } = useLang()

  const cols = [
    { key: 'freelance', label: t('v2.cmp.colFreelance') },
    { key: 'esn', label: t('v2.cmp.colEsn') },
    { key: 'saas', label: t('v2.cmp.colSaas') },
  ]

  const rows = [
    { crit: t('v2.cmp.r1.crit'), freelance: t('v2.cmp.r1.freelance'), esn: t('v2.cmp.r1.esn'), saas: t('v2.cmp.r1.saas'), us: t('v2.cmp.r1.us') },
    { crit: t('v2.cmp.r2.crit'), freelance: t('v2.cmp.r2.freelance'), esn: t('v2.cmp.r2.esn'), saas: t('v2.cmp.r2.saas'), us: t('v2.cmp.r2.us') },
    { crit: t('v2.cmp.r3.crit'), freelance: t('v2.cmp.r3.freelance'), esn: t('v2.cmp.r3.esn'), saas: t('v2.cmp.r3.saas'), us: t('v2.cmp.r3.us') },
    { crit: t('v2.cmp.r4.crit'), freelance: t('v2.cmp.r4.freelance'), esn: t('v2.cmp.r4.esn'), saas: t('v2.cmp.r4.saas'), us: t('v2.cmp.r4.us') },
    { crit: t('v2.cmp.r5.crit'), freelance: t('v2.cmp.r5.freelance'), esn: t('v2.cmp.r5.esn'), saas: t('v2.cmp.r5.saas'), us: t('v2.cmp.r5.us') },
  ]

  return (
    <section id="comparatif-v2" style={{ padding: '110px 24px' }}>
      <div className="mx-auto" style={{ maxWidth: 1080 }}>
        <FadeUp className="text-center" >
          <span className="section-label">{t('v2.cmp.eyebrow')}</span>
          <h2 className="section-title" style={{ maxWidth: 640, margin: '0 auto 40px' }}>
            {t('v2.cmp.title')}{' '}
            <span className="accent" style={{ color: 'var(--accent)' }}>{t('v2.cmp.titleAccent')}</span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.12}>
          <div className="cmp4-scroll">
            <div className="cmp4">
              {/* Header */}
              <div className="cmp4-row cmp4-head">
                <div className="cmp4-cell cmp4-crit" />
                {cols.map((c) => (
                  <div key={c.key} className="cmp4-cell cmp4-colhead font-mono">{c.label}</div>
                ))}
                <div className="cmp4-cell cmp4-colhead cmp4-us font-serif italic">{t('v2.cmp.colUs')}</div>
              </div>

              {rows.map((r) => (
                <div className="cmp4-row" key={r.crit}>
                  <div className="cmp4-cell cmp4-crit">{r.crit}</div>
                  <div className="cmp4-cell cmp4-alt">{r.freelance}</div>
                  <div className="cmp4-cell cmp4-alt">{r.esn}</div>
                  <div className="cmp4-cell cmp4-alt">{r.saas}</div>
                  <div className="cmp4-cell cmp4-us">{r.us}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>

      <style jsx>{`
        .cmp4-scroll {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }
        .cmp4 {
          min-width: 680px;
          border: 1px solid var(--border);
          border-radius: 12px;
          overflow: hidden;
          background: var(--bg-card);
          box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px -16px rgba(15, 23, 42, 0.12);
        }
        .cmp4-row {
          display: grid;
          grid-template-columns: 1.2fr 1fr 1fr 1fr 1.15fr;
          border-bottom: 1px solid var(--border);
        }
        .cmp4-row:last-child { border-bottom: none; }
        .cmp4-cell {
          padding: 16px 18px;
          font-size: 13.5px;
          line-height: 1.45;
          display: flex;
          align-items: center;
        }
        .cmp4-crit {
          font-weight: 500;
          color: var(--text);
          background: var(--bg-elevated);
          border-right: 1px solid var(--border);
        }
        .cmp4-head .cmp4-cell { padding-top: 18px; padding-bottom: 18px; }
        .cmp4-colhead {
          justify-content: center;
          text-align: center;
          color: var(--text-muted);
          font-size: 11px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        .cmp4-alt {
          color: var(--text-secondary);
          font-weight: 300;
        }
        .cmp4-us {
          color: var(--text);
          font-weight: 500;
          background: var(--accent-subtle);
          border-left: 1px solid rgba(230, 57, 70, 0.18);
        }
        .cmp4-colhead.cmp4-us {
          color: var(--accent);
          font-size: 20px;
          font-weight: 400;
          letter-spacing: 0;
          text-transform: none;
        }
      `}</style>
    </section>
  )
}
