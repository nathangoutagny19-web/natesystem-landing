'use client'

import FadeUp from '@/components/ui/FadeUp'

const guarantees = [
  {
    title: 'ROI garanti sur 12 mois',
    desc: 'Si le ROI n\'est pas atteint, on continue gratuitement jusqu\'à ce qu\'il le soit.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Délais garantis ou -10%/semaine',
    desc: 'Chaque semaine de retard = 10% de réduction sur la facture.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: 'Code 100% propriétaire',
    desc: 'Tout le code source vous appartient. Aucune dépendance à NateSystem.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: 'Satisfaction 30 jours',
    desc: 'Pas satisfait après 30 jours ? Remboursement intégral, sans condition.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
  },
  {
    title: 'Confidentialité totale',
    desc: 'NDA signé dès le premier contact. Vos données ne quittent jamais vos serveurs.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
]

export default function Guarantees() {
  return (
    <section id="garanties" style={{ padding: '120px 24px' }}>
      <div className="mx-auto" style={{ maxWidth: '1100px' }}>
        <FadeUp className="text-center mb-16">
          <span className="section-label">GARANTIES</span>
          <h2 className="section-title" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Zéro risque. <span className="accent">5 garanties.</span>
          </h2>
        </FadeUp>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '16px',
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          {guarantees.map((g, i) => (
            <FadeUp key={i} delay={i * 0.07}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  padding: '24px',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    minWidth: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'var(--accent-subtle)',
                    color: 'var(--accent)',
                    borderRadius: '10px',
                  }}
                >
                  {g.icon}
                </div>
                <div>
                  <p
                    className="font-sans"
                    style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text)', marginBottom: '6px' }}
                  >
                    {g.title}
                  </p>
                  <p
                    className="font-sans"
                    style={{ fontSize: '14px', fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.6 }}
                  >
                    {g.desc}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
