'use client'

import FadeUp from '@/components/ui/FadeUp'
import Button from '@/components/ui/Button'

const included = [
  'Cartographie complète de vos outils et process',
  'Identification des 3 quick wins à impact immédiat',
  "Plan d'action chiffré avec ROI estimé",
  "Recommandations d'infrastructure sur-mesure",
]

const deliverables = [
  'Un document de 15+ pages avec votre feuille de route',
  "Un devis détaillé pour l'infrastructure si vous souhaitez continuer",
]

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
      <path d="M4 9.5L7.5 13L14 5" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
      <path d="M3 8h10M9 4l4 4-4 4" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function AuditOffer() {
  return (
    <section id="audit" style={{ padding: '120px 24px' }}>
      <div className="mx-auto" style={{ maxWidth: '1100px' }}>
        <FadeUp>
          <div
            style={{
              maxWidth: 800,
              margin: '0 auto',
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 12,
              borderTop: '2px solid var(--accent)',
              padding: '56px 48px',
            }}
          >
            {/* Label */}
            <span
              className="font-mono"
              style={{
                fontSize: 11,
                fontWeight: 300,
                letterSpacing: 3,
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                display: 'block',
                marginBottom: 12,
              }}
            >
              {"PORTE D'ENTR\u00C9E"}
            </span>

            {/* Title */}
            <h2
              className="font-serif italic"
              style={{
                fontSize: 'clamp(32px, 4vw, 48px)',
                fontWeight: 400,
                color: 'var(--text)',
                lineHeight: 1.15,
                marginBottom: 16,
              }}
            >
              {"L'Audit Stratégique"}
            </h2>

            {/* Price */}
            <p
              className="font-serif italic"
              style={{
                fontSize: 'clamp(32px, 4vw, 48px)',
                color: 'var(--accent)',
                marginBottom: 24,
                lineHeight: 1.2,
              }}
            >
              990€ HT
            </p>

            {/* Description */}
            <p
              className="font-sans"
              style={{
                fontSize: 15,
                fontWeight: 300,
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: 40,
                maxWidth: 600,
              }}
            >
              {"Un audit approfondi de vos opérations en 2 sessions. On cartographie vos outils, identifie les goulots d'étranglement, et livre un plan d'action chiffré."}
            </p>

            {/* What's included */}
            <p
              className="font-mono"
              style={{
                fontSize: 11,
                fontWeight: 400,
                letterSpacing: 1.5,
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: 16,
              }}
            >
              CE QUI EST INCLUS
            </p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: 32 }}>
              {included.map((item) => (
                <li
                  key={item}
                  className="font-sans flex items-start gap-3"
                  style={{
                    fontSize: 14,
                    fontWeight: 300,
                    color: 'var(--text)',
                    lineHeight: 1.7,
                    marginBottom: 10,
                  }}
                >
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>

            {/* Deliverables */}
            <p
              className="font-mono"
              style={{
                fontSize: 11,
                fontWeight: 400,
                letterSpacing: 1.5,
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: 16,
              }}
            >
              CE QUE VOUS REPARTEZ AVEC
            </p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: 40 }}>
              {deliverables.map((item) => (
                <li
                  key={item}
                  className="font-sans flex items-start gap-3"
                  style={{
                    fontSize: 14,
                    fontWeight: 300,
                    color: 'var(--text)',
                    lineHeight: 1.7,
                    marginBottom: 10,
                  }}
                >
                  <ArrowIcon />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div style={{ marginBottom: 20 }}>
              <Button href="https://cal.com/natesystem/session-strategique" variant="primary" external>
                {"Réserver mon audit \u2192"}
              </Button>
            </div>

            {/* Note */}
            <p
              className="font-mono"
              style={{
                fontSize: 11,
                color: 'var(--text-muted)',
                letterSpacing: 0.5,
              }}
            >
              {"Risque minimal \u00B7 Remboursé si pas satisfait \u00B7 Déductible de l'infrastructure"}
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
