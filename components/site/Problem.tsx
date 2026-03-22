'use client'

import FadeUp from '@/components/ui/FadeUp'
import { motion } from 'framer-motion'

const PAIN_POINTS = [
  {
    title: '8 SaaS actifs. Tu en utilises 3 vraiment.',
    detail: 'Chaque abonnement coûte, ralentit l\'onboarding, et crée de la friction — sans créer de valeur.',
  },
  {
    title: '2h/jour à faire communiquer des outils qui ne se parlent pas.',
    detail: 'Copier-coller entre systèmes, ressaisie manuelle, erreurs humaines. C\'est du temps qui disparaît chaque jour.',
  },
  {
    title: 'Quand un employé clé part, tout part avec lui.',
    detail: 'Le savoir-faire vit dans les têtes. Pas dans des systèmes. Résultat : formation longue, erreurs répétées, dépendance humaine.',
  },
  {
    title: 'Chaque fois que tu scales, le chaos scale avec toi.',
    detail: 'Plus de clients = plus d\'opérations = plus de charge. Sans infrastructure intelligente, la croissance coûte trop cher en humain.',
  },
]

export default function Problem() {
  return (
    <section
      id="probleme"
      className="section-cream"
      style={{ padding: '120px 24px' }}
    >
      <div
        className="mx-auto"
        style={{ maxWidth: '1100px' }}
      >
        {/* Header */}
        <FadeUp className="text-center mb-20">
          <span
            className="section-label"
            style={{ color: 'var(--color-gold)' }}
          >
            The Real Problem
          </span>
          <h2
            className="font-display font-normal"
            style={{
              fontSize: 'clamp(36px, 5vw, 60px)',
              lineHeight: 1.1,
              color: 'var(--color-black)',
              maxWidth: '760px',
              margin: '0 auto 24px',
            }}
          >
            You know you need to change.
            <br />
            You just don&apos;t know{' '}
            <em style={{ color: 'var(--color-gold)' }}>where to start.</em>
          </h2>
          <p
            className="font-body font-light"
            style={{
              fontSize: '17px',
              lineHeight: 1.7,
              color: 'var(--color-gray)',
              maxWidth: '560px',
              margin: '0 auto',
            }}
          >
            Every PME we work with has the same four problems. They&apos;re not
            unique to your sector. They&apos;re structural — and they&apos;re solvable.
          </p>
        </FadeUp>

        {/* Pain points */}
        <div className="flex flex-col">
          {PAIN_POINTS.map((item, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <motion.div
                className="flex items-start gap-6 py-7 px-8 transition-all duration-300 cursor-default"
                style={{
                  borderLeft: '2px solid rgba(201,168,76,0.2)',
                  borderBottom: i < PAIN_POINTS.length - 1
                    ? '1px solid rgba(0,0,0,0.06)'
                    : 'none',
                  borderTop: i === 0 ? '1px solid rgba(0,0,0,0.06)' : 'none',
                }}
                whileHover={{
                  borderLeftColor: 'var(--color-gold)',
                  backgroundColor: 'rgba(201,168,76,0.04)',
                  x: 4,
                }}
                transition={{ duration: 0.25 }}
              >
                {/* X icon */}
                <span
                  className="flex-shrink-0 text-xl font-light mt-0.5 select-none"
                  style={{
                    color: '#c0392b',
                    fontFamily: 'var(--font-body)',
                    lineHeight: 1,
                    fontSize: '20px',
                  }}
                >
                  ×
                </span>

                {/* Text */}
                <div>
                  <p
                    className="font-body mb-1"
                    style={{
                      fontSize: '16px',
                      fontWeight: 500,
                      color: 'var(--color-black)',
                      lineHeight: 1.5,
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="font-body font-light"
                    style={{
                      fontSize: '14px',
                      color: 'var(--color-gray)',
                      lineHeight: 1.65,
                    }}
                  >
                    {item.detail}
                  </p>
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
