'use client'

import FadeUp from '@/components/ui/FadeUp'
import Link from 'next/link'

const lines = [
  { formula: '3h/jour × 5 collaborateurs', result: '= 15h perdues/jour' },
  { formula: '15h × 22 jours', result: '= 330h/mois' },
  { formula: '330h × 35\u00A0€/h', result: '= 11\u00A0550\u00A0€/mois' },
]

export default function Quantification() {
  return (
    <section id="quantification" style={{ padding: '120px 24px' }}>
      <div className="mx-auto" style={{ maxWidth: '1100px' }}>
        <FadeUp className="text-center mb-16">
          <span className="section-label">QUANTIFICATION</span>
          <h2 className="section-title" style={{ maxWidth: '700px', margin: '0 auto' }}>
            Le vrai coût <span className="accent">de ne rien faire.</span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.12}>
          <div
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '40px 32px',
              maxWidth: '700px',
              margin: '0 auto',
            }}
          >
            <div className="flex flex-col gap-4" style={{ marginBottom: '24px' }}>
              {lines.map((line, i) => (
                <div
                  key={i}
                  className="font-mono"
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    fontSize: '14px',
                    color: 'var(--text-secondary)',
                    gap: '12px',
                  }}
                >
                  <span style={{ fontWeight: 300 }}>{line.formula}</span>
                  <span style={{ fontWeight: 600, color: 'var(--text)' }}>{line.result}</span>
                </div>
              ))}
            </div>

            <div
              style={{
                borderTop: '1px solid var(--border)',
                paddingTop: '24px',
                marginTop: '8px',
              }}
            >
              <p
                className="font-serif italic text-center"
                style={{
                  fontSize: 'clamp(22px, 3vw, 28px)',
                  color: 'var(--accent)',
                  fontWeight: 400,
                  lineHeight: 1.3,
                }}
              >
                138&nbsp;600&nbsp;€/an de productivité perdue.
              </p>
            </div>

            <p
              className="font-sans text-center"
              style={{
                fontSize: '12px',
                color: 'var(--text-muted)',
                fontWeight: 300,
                marginTop: '20px',
                lineHeight: 1.5,
              }}
            >
              Estimation basée sur un coût horaire moyen de 35€ chargé.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.2} className="text-center">
          <Link
            href="/tools/saas-calculator"
            className="font-sans"
            style={{
              display: 'inline-block',
              marginTop: '32px',
              padding: '14px 32px',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              color: 'var(--text)',
              fontSize: '14px',
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'border-color 0.3s ease, color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent)'
              e.currentTarget.style.color = 'var(--accent)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.color = 'var(--text)'
            }}
          >
            Calculer mon coût réel &rarr;
          </Link>
        </FadeUp>
      </div>
    </section>
  )
}
