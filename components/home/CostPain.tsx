'use client'

import FadeUp from '@/components/ui/FadeUp'

const painPoints = [
  { stat: '3h/jour', text: 'Temps perdu à faire communiquer des outils qui ne se parlent pas.' },
  { stat: '8 SaaS', text: 'En moyenne, dont 5 que vous n\'utilisez qu\'à 20% de leur potentiel.' },
  { stat: '47%', text: 'Des données critiques vivent dans la tête d\'une seule personne.' },
  { stat: '2 mois', text: 'Pour former un nouveau collaborateur à vos process non documentés.' },
  { stat: '15h/sem', text: 'De tâches répétitives que personne n\'aime faire — mais qui coûtent cher.' },
]

export default function CostPain() {
  return (
    <section id="cout" style={{ padding: '120px 24px' }}>
      <div className="mx-auto" style={{ maxWidth: '1100px' }}>
        <FadeUp className="text-center mb-16">
          <span className="section-label">LE VRAI PROBLÈME</span>
          <h2 className="section-title" style={{ maxWidth: '700px', margin: '0 auto' }}>
            Ce qui coûte cher <span className="accent">dans votre entreprise.</span>
          </h2>
        </FadeUp>

        <div className="flex flex-col gap-4" style={{ maxWidth: '800px', margin: '0 auto' }}>
          {painPoints.map((item, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '24px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  padding: '24px',
                }}
              >
                <span
                  className="font-serif italic flex-shrink-0"
                  style={{
                    fontSize: 'clamp(24px, 3vw, 32px)',
                    color: 'var(--accent)',
                    minWidth: '100px',
                    textAlign: 'center',
                    fontWeight: 400,
                  }}
                >
                  {item.stat}
                </span>
                <p
                  className="font-sans"
                  style={{
                    fontSize: '15px',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    fontWeight: 300,
                  }}
                >
                  {item.text}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
