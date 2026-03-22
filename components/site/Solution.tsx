'use client'

import FadeUp from '@/components/ui/FadeUp'
import { motion } from 'framer-motion'

const PILLARS = [
  {
    number: '01',
    title: 'Connect',
    description:
      'We map your processes, identify your data architecture, and build the foundation of your custom AI ecosystem. Every tool, every workflow, every data source — understood before a single line of code.',
    detail: 'Cartography · Architecture · Data mapping',
  },
  {
    number: '02',
    title: 'Automate',
    description:
      'We deploy specialized AI agents trained on your specific operations, data, and workflows. They don\'t make mistakes, they don\'t take holidays, and they don\'t leave the company.',
    detail: 'AI agents · Workflows · Internal tools',
  },
  {
    number: '03',
    title: 'Decide',
    description:
      'Your team makes better decisions, faster, with less effort — backed by real-time data and intelligent automation. Operations become a competitive advantage, not a bottleneck.',
    detail: 'Data-driven · Scalable · Proprietary',
  },
]

export default function Solution() {
  return (
    <section
      id="prestations"
      style={{ padding: '120px 24px', backgroundColor: 'var(--color-black)' }}
    >
      <div className="mx-auto" style={{ maxWidth: '1100px' }}>
        {/* Header */}
        <FadeUp className="text-center mb-20">
          <span className="section-label">Built-in AI</span>
          <h2
            className="font-display font-normal"
            style={{
              fontSize: 'clamp(36px, 5vw, 60px)',
              lineHeight: 1.1,
              color: 'var(--text-primary)',
              maxWidth: '680px',
              margin: '0 auto 20px',
            }}
          >
            We make your operations{' '}
            <em style={{ color: 'var(--color-gold)' }}>autonomous.</em>
          </h2>
          <p
            className="font-body font-light"
            style={{
              fontSize: '17px',
              lineHeight: 1.7,
              color: 'var(--text-secondary)',
              maxWidth: '520px',
              margin: '0 auto',
            }}
          >
            Not a SaaS subscription. Not a consultant. A complete AI
            infrastructure — proprietary, connected to your data, owned by you.
          </p>
        </FadeUp>

        {/* 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px]">
          {PILLARS.map((pillar, i) => (
            <FadeUp key={pillar.number} delay={i * 0.12}>
              <motion.div
                className="relative overflow-hidden h-full"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid var(--border-subtle)',
                  padding: '48px 36px 44px',
                }}
                whileHover={{
                  backgroundColor: 'rgba(201,168,76,0.04)',
                  borderColor: 'rgba(201,168,76,0.2)',
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Gold top border line */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-[1px]"
                  style={{ backgroundColor: 'var(--color-gold)', scaleX: 0, originX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />

                {/* Number */}
                <span
                  className="font-display italic block mb-6"
                  style={{
                    fontSize: '52px',
                    color: 'var(--color-gold)',
                    opacity: 0.35,
                    lineHeight: 1,
                    fontWeight: 400,
                  }}
                >
                  {pillar.number}
                </span>

                {/* Title */}
                <h3
                  className="font-display italic mb-4"
                  style={{
                    fontSize: '28px',
                    fontWeight: 400,
                    color: 'var(--text-primary)',
                    lineHeight: 1.2,
                  }}
                >
                  {pillar.title}
                </h3>

                {/* Description */}
                <p
                  className="font-body font-light mb-6"
                  style={{
                    fontSize: '14px',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.75,
                  }}
                >
                  {pillar.description}
                </p>

                {/* Detail tags */}
                <p
                  className="font-body"
                  style={{
                    fontSize: '11px',
                    color: 'var(--color-gold)',
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    opacity: 0.7,
                  }}
                >
                  {pillar.detail}
                </p>
              </motion.div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  )
}
