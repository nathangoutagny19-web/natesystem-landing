'use client'

import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'

type ResultCard = {
  num: string
  desc: string
  client: string
  coming?: boolean
}

export default function ResultsMetrics() {
  const { t } = useLang()

  const results: ResultCard[] = [
    {
      num: t('results2.r1.num'),
      desc: t('results2.r1.desc'),
      client: t('results2.r1.client'),
    },
    {
      num: t('results2.r2.num'),
      desc: t('results2.r2.desc'),
      client: t('results2.r2.client'),
      coming: true,
    },
    {
      num: t('results2.r3.num'),
      desc: t('results2.r3.desc'),
      client: t('results2.r3.client'),
      coming: true,
    },
  ]

  return (
    <section style={{ padding: '120px 24px' }}>
      <div className="mx-auto" style={{ maxWidth: '1100px' }}>
        <FadeUp className="text-center mb-16">
          <span className="section-label">{t('results2.label')}</span>
          <h2 className="section-title" style={{ maxWidth: '680px', margin: '0 auto 20px' }}>
            {t('results2.title')}{' '}
            <span className="accent">{t('results2.titleAccent')}</span>
          </h2>
          <p
            className="font-sans"
            style={{
              fontSize: '15px',
              fontWeight: 300,
              color: 'var(--text-secondary)',
              maxWidth: '560px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            {t('results2.sub')}
          </p>
        </FadeUp>

        <div className="results-grid">
          {results.map((r, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <article
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 12,
                  padding: '36px 32px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 18,
                  opacity: r.coming ? 0.55 : 1,
                }}
              >
                <div
                  className="font-serif italic"
                  style={{
                    fontSize: 'clamp(56px, 6vw, 76px)',
                    fontWeight: 400,
                    color: r.coming ? 'var(--text-muted)' : 'var(--accent)',
                    lineHeight: 1,
                    margin: 0,
                  }}
                >
                  {r.num}
                </div>
                <p
                  className="font-sans"
                  style={{
                    fontSize: 14,
                    color: 'var(--text)',
                    lineHeight: 1.55,
                    fontWeight: 400,
                    margin: 0,
                    flex: 1,
                  }}
                >
                  {r.desc}
                </p>
                <p
                  className="font-mono"
                  style={{
                    fontSize: 10.5,
                    letterSpacing: 1.5,
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    fontWeight: 500,
                    margin: 0,
                    borderTop: '1px solid var(--border)',
                    paddingTop: 14,
                  }}
                >
                  {r.client}
                </p>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>

      <style jsx>{`
        .results-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }
        @media (max-width: 880px) {
          .results-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
