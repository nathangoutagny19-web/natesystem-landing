'use client'

import FadeUp from '@/components/ui/FadeUp'
import { motion } from 'framer-motion'

const CASE_STUDIES = [
  {
    tag: 'Restaurant Group · Saint-Étienne',
    company: 'Chromosome',
    metricBefore: '10h / week',
    metricAfter: '20 min',
    metricLabel: 'Team scheduling time',
    before: '10 heures par semaine perdues en gestion d\'équipe, planning refait plusieurs fois, erreurs de communication fréquentes.',
    after: 'Planning généré en 20 minutes. 1 000€/mois économisés. Zéro erreur de communication depuis le déploiement.',
    quote: '"It changed the way we run everything."',
    author: 'Catherine P.',
    role: 'General Manager, Chromosome Saint-Étienne',
  },
  {
    tag: 'École Privée · Lyon',
    company: 'Institut Saint-Irénée',
    metricBefore: '5 outils',
    metricAfter: '1 système',
    metricLabel: 'Infrastructure digitale',
    before: '5 outils séparés, aucune visibilité consolidée, données dispersées, charge administrative excessive.',
    after: '1 système intégré, −60% de tâches administratives, accès centralisé à toutes les données en temps réel.',
    quote: '"Nos équipes ont retrouvé du temps pour ce qui compte vraiment."',
    author: 'Direction',
    role: 'Institut Saint-Irénée, Lyon',
  },
]

export default function Results() {
  return (
    <section
      id="resultats"
      className="section-cream"
      style={{ padding: '120px 24px' }}
    >
      <div className="mx-auto" style={{ maxWidth: '1100px' }}>
        {/* Header */}
        <FadeUp className="text-center mb-16">
          <span className="section-label">What it changes, concretely</span>
          <h2
            className="font-display font-normal"
            style={{
              fontSize: 'clamp(36px, 5vw, 60px)',
              lineHeight: 1.1,
              color: 'var(--color-black)',
              maxWidth: '680px',
              margin: '0 auto 20px',
            }}
          >
            Real results.{' '}
            <em style={{ color: 'var(--color-gold)' }}>Real clients.</em>
            {' '}Real numbers.
          </h2>
          <p
            className="font-body font-light"
            style={{
              fontSize: '16px',
              lineHeight: 1.7,
              color: 'var(--color-gray)',
              maxWidth: '500px',
              margin: '0 auto',
            }}
          >
            We don&apos;t estimate. Every number below is measured,
            documented, and verified with the client.
          </p>
        </FadeUp>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CASE_STUDIES.map((cs, i) => (
            <FadeUp key={cs.company} delay={i * 0.15}>
              <motion.div
                className="h-full rounded-sm overflow-hidden"
                style={{
                  background: 'white',
                  border: '1px solid rgba(0,0,0,0.06)',
                  borderLeft: '3px solid var(--color-gold)',
                }}
                whileHover={{
                  boxShadow: '0 12px 48px rgba(0,0,0,0.1)',
                  y: -4,
                }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <div style={{ padding: '40px 36px 36px' }}>
                  {/* Tag */}
                  <p
                    className="font-body mb-3"
                    style={{
                      fontSize: '10px',
                      fontWeight: 500,
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                      color: 'var(--color-gold)',
                    }}
                  >
                    {cs.tag}
                  </p>

                  {/* Company */}
                  <h3
                    className="font-display italic mb-6"
                    style={{
                      fontSize: '28px',
                      fontWeight: 400,
                      color: 'var(--color-black)',
                      lineHeight: 1.2,
                    }}
                  >
                    {cs.company}
                  </h3>

                  {/* Metric */}
                  <div
                    className="flex items-center gap-4 mb-8 pb-6"
                    style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}
                  >
                    <div className="text-center">
                      <p
                        className="font-display italic"
                        style={{
                          fontSize: '32px',
                          fontWeight: 400,
                          color: 'var(--color-gray)',
                          textDecoration: 'line-through',
                          opacity: 0.5,
                        }}
                      >
                        {cs.metricBefore}
                      </p>
                    </div>
                    <span
                      style={{
                        color: 'var(--color-gold)',
                        fontSize: '20px',
                        fontWeight: 300,
                      }}
                    >
                      →
                    </span>
                    <div className="text-center">
                      <p
                        className="font-display italic"
                        style={{
                          fontSize: '32px',
                          fontWeight: 400,
                          color: 'var(--color-gold)',
                        }}
                      >
                        {cs.metricAfter}
                      </p>
                    </div>
                    <p
                      className="font-body font-light text-left"
                      style={{
                        fontSize: '12px',
                        color: 'var(--color-gray)',
                        lineHeight: 1.4,
                        marginLeft: 'auto',
                        maxWidth: '120px',
                      }}
                    >
                      {cs.metricLabel}
                    </p>
                  </div>

                  {/* Before / After */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div>
                      <p
                        className="font-body mb-2"
                        style={{
                          fontSize: '10px',
                          fontWeight: 500,
                          letterSpacing: '2px',
                          textTransform: 'uppercase',
                          color: '#c0392b',
                          opacity: 0.7,
                        }}
                      >
                        Before
                      </p>
                      <p
                        className="font-body font-light"
                        style={{
                          fontSize: '13px',
                          color: 'var(--color-gray)',
                          lineHeight: 1.6,
                        }}
                      >
                        {cs.before}
                      </p>
                    </div>
                    <div>
                      <p
                        className="font-body mb-2"
                        style={{
                          fontSize: '10px',
                          fontWeight: 500,
                          letterSpacing: '2px',
                          textTransform: 'uppercase',
                          color: '#27ae60',
                          opacity: 0.8,
                        }}
                      >
                        After
                      </p>
                      <p
                        className="font-body font-light"
                        style={{
                          fontSize: '13px',
                          color: 'var(--color-black)',
                          lineHeight: 1.6,
                        }}
                      >
                        {cs.after}
                      </p>
                    </div>
                  </div>

                  {/* Quote */}
                  <div
                    className="pt-5"
                    style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}
                  >
                    <p
                      className="font-display italic mb-3"
                      style={{
                        fontSize: '17px',
                        fontWeight: 400,
                        color: 'var(--color-black)',
                        lineHeight: 1.5,
                      }}
                    >
                      {cs.quote}
                    </p>
                    <div>
                      <p
                        className="font-body"
                        style={{
                          fontSize: '13px',
                          fontWeight: 500,
                          color: 'var(--color-black)',
                        }}
                      >
                        {cs.author}
                      </p>
                      <p
                        className="font-body font-light"
                        style={{
                          fontSize: '12px',
                          color: 'var(--color-gray)',
                        }}
                      >
                        {cs.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
