'use client'

import Link from 'next/link'
import { Map, MousePointerClick, FileText } from 'lucide-react'
import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'
import { VizCarte, VizProto, VizFeuille } from '@/components/v2/DiagViz'

/**
 * Le Diagnostic, l'offre d'entrée (REFONTE §4.3).
 * Réimaginée : header centré + 3 livrables en ligne, chacun avec un mockup 16:9
 * (image vue en entier, jamais rognée), cartes compactes et alignées.
 */
export default function SprintDiagnostic() {
  const { t } = useLang()

  const deliverables = [
    { icon: Map, name: t('v2.sprint.d1.name'), desc: t('v2.sprint.d1.desc'), Viz: VizCarte },
    { icon: MousePointerClick, name: t('v2.sprint.d2.name'), desc: t('v2.sprint.d2.desc'), Viz: VizProto },
    { icon: FileText, name: t('v2.sprint.d3.name'), desc: t('v2.sprint.d3.desc'), Viz: VizFeuille },
  ]

  return (
    <section id="sprint-diagnostic" style={{ padding: '110px 24px' }}>
      <div className="mx-auto" style={{ maxWidth: 1080 }}>
        {/* Header centré */}
        <FadeUp className="text-center">
          <span
            className="font-mono"
            style={{ fontSize: 11, letterSpacing: 2.5, textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600 }}
          >
            {t('v2.sprint.eyebrow')}
          </span>
          <h2
            className="font-serif italic"
            style={{ fontSize: 'clamp(30px, 4vw, 46px)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text)', margin: '12px 0 16px' }}
          >
            {t('v2.sprint.title')}
          </h2>
          <span
            className="font-mono"
            style={{
              display: 'inline-block',
              fontSize: 12,
              letterSpacing: 0.5,
              color: 'var(--text)',
              background: 'var(--accent-subtle)',
              border: '1px solid rgba(230,57,70,0.22)',
              borderRadius: 999,
              padding: '6px 14px',
              marginBottom: 20,
            }}
          >
            {t('v2.sprint.format')}
          </span>
          <p
            className="font-serif italic"
            style={{ fontSize: 18, lineHeight: 1.5, color: 'var(--text-secondary)', maxWidth: 560, margin: '0 auto' }}
          >
            {t('v2.sprint.promise')}
          </p>
        </FadeUp>

        {/* 3 livrables en ligne, mockup 16:9 + texte */}
        <div className="dg-cards">
          {deliverables.map((d, i) => {
            const Icon = d.icon
            const Viz = d.Viz
            return (
              <FadeUp key={d.name} delay={0.1 + i * 0.1}>
                <div className="dg-card">
                  <div className="dg-mock">
                    <div className="dg-mock-inner">
                      <div className="dg-mock-bar" aria-hidden="true">
                        <i /><i /><i />
                      </div>
                      <div className="dg-mock-viz" role="img" aria-label={d.name}>
                        <Viz />
                      </div>
                    </div>
                  </div>
                  <div className="dg-body">
                    <span className="dg-num font-mono">
                      <Icon size={13} strokeWidth={2} />
                      {String(i + 1).padStart(2, '0')} / 03
                    </span>
                    <h3 className="dg-name font-serif italic">{d.name}</h3>
                    <p className="dg-desc font-sans">{d.desc}</p>
                  </div>
                </div>
              </FadeUp>
            )
          })}
        </div>

        {/* Phrase honnête, juste après les cartes, avant le CTA */}
        <FadeUp className="text-center" delay={0.35}>
          <p
            className="font-sans"
            style={{ fontSize: 15.5, lineHeight: 1.7, fontWeight: 300, color: 'var(--text-secondary)', maxWidth: 640, margin: '48px auto 0' }}
          >
            {t('v2.sprint.afterA')}
            <span style={{ color: 'var(--text)', fontWeight: 400 }}>{t('v2.sprint.afterB')}</span>
            {t('v2.sprint.afterC')}
          </p>
        </FadeUp>

        {/* CTA, juste sous la phrase */}
        <FadeUp className="text-center" delay={0.4}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, marginTop: 30 }}>
            <Link href="#rendez-vous" className="btn-primary" style={{ fontSize: 14 }}>
              <span className="btn-primary-dot" />
              {t('v2.sprint.cta')} →
            </Link>
            <Link href="/tools/diagnostic-ia" className="dg-selfserve font-mono">
              {t('v2.sprint.selfserve')} →
            </Link>
          </div>
        </FadeUp>
      </div>

      <style jsx>{`
        .dg-selfserve {
          font-size: 12.5px;
          letter-spacing: 0.3px;
          color: var(--text-secondary);
          text-decoration: none;
          border-bottom: 1px solid var(--border);
          padding-bottom: 2px;
          transition: color 0.25s ease, border-color 0.25s ease;
        }
        .dg-selfserve:hover { color: var(--accent); border-color: var(--accent); }

        .dg-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 56px;
        }
        .dg-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 14px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: border-color 0.25s ease, transform 0.25s ease;
        }
        .dg-card:hover { border-color: var(--border-hover); transform: translateY(-3px); }

        .dg-mock { padding: 12px 12px 0; }
        .dg-mock-inner {
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid var(--border);
          background: var(--bg-elevated);
        }
        .dg-mock-bar {
          height: 20px;
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 0 9px;
          background: var(--bg-card);
          border-bottom: 1px solid var(--border);
        }
        .dg-mock-bar i { width: 6px; height: 6px; border-radius: 50%; background: var(--text-muted); opacity: 0.5; }
        .dg-mock-viz {
          aspect-ratio: 16 / 9;
          background: var(--bg-elevated);
          display: block;
        }
        .dg-mock-viz :global(.dg-viz-svg) { width: 100%; height: 100%; display: block; }

        .dg-body { padding: 16px 18px 20px; }
        .dg-num {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 10px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--accent);
          font-weight: 600;
        }
        .dg-name { display: block; font-size: 20px; font-weight: 400; color: var(--text); margin: 8px 0 6px; line-height: 1.2; }
        .dg-desc { font-size: 13px; line-height: 1.55; font-weight: 300; color: var(--text-secondary); margin: 0; }

        @media (max-width: 820px) {
          .dg-cards { grid-template-columns: 1fr; max-width: 440px; margin-left: auto; margin-right: auto; }
        }
      `}</style>
    </section>
  )
}
