'use client'

import FadeUp from '@/components/ui/FadeUp'
import { motion } from 'framer-motion'

const STEPS = [
  {
    number: '01',
    title: 'Free Audit',
    duration: '30 min · No commitment',
    description:
      'We analyze your processes, map your tools, and identify exactly where AI can deliver immediate and measurable ROI. You leave with a complete roadmap — regardless of what comes next.',
    highlight: 'Audit Stratégique — 990€ HT',
  },
  {
    number: '02',
    title: 'Build',
    duration: '4 to 8 weeks',
    description:
      'We build your custom AI infrastructure — internal platforms, centralized data architecture, and specialized agents trained on your specific operations. Proprietary. 100% yours.',
    highlight: 'Infrastructure Setup',
  },
  {
    number: '03',
    title: 'Deploy + Handover',
    duration: '30-day support included',
    description:
      'We deploy, train your teams, and measure first ROI. Your infrastructure is live, adopted, and evolving. You can then extend it with the NateSystem License — your dedicated external tech team.',
    highlight: 'Licence NateSystem',
  },
]

export default function Process() {
  return (
    <section
      id="process"
      className="section-cream"
      style={{ padding: '120px 24px' }}
    >
      <div className="mx-auto" style={{ maxWidth: '1100px' }}>
        {/* Header */}
        <FadeUp className="text-center mb-20">
          <span className="section-label">How does it work?</span>
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
            Three steps. No disruption.{' '}
            <em style={{ color: 'var(--color-gold)' }}>Results in 90 days.</em>
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
            Your teams keep working normally while we build around them.
            The first results are visible within the first two weeks.
          </p>
        </FadeUp>

        {/* Steps — horizontal desktop, vertical mobile */}
        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div
            className="hidden md:block absolute top-[52px] left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-[1px]"
            style={{ background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.25), transparent)' }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STEPS.map((step, i) => (
              <FadeUp key={step.number} delay={i * 0.15}>
                <motion.div
                  className="relative"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Number circle */}
                  <div className="relative mb-8">
                    <div
                      className="w-[52px] h-[52px] rounded-full flex items-center justify-center mx-auto md:mx-0"
                      style={{
                        border: '1px solid rgba(201,168,76,0.4)',
                        background: 'rgba(201,168,76,0.06)',
                      }}
                    >
                      <span
                        className="font-display italic"
                        style={{
                          fontSize: '18px',
                          fontWeight: 400,
                          color: 'var(--color-gold)',
                          lineHeight: 1,
                        }}
                      >
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center md:text-left">
                    {/* Duration badge */}
                    <p
                      className="font-body mb-3 inline-block px-3 py-1 rounded-full"
                      style={{
                        fontSize: '10px',
                        fontWeight: 500,
                        letterSpacing: '1.5px',
                        textTransform: 'uppercase',
                        color: 'var(--color-gold)',
                        background: 'rgba(201,168,76,0.08)',
                        border: '1px solid rgba(201,168,76,0.2)',
                      }}
                    >
                      {step.duration}
                    </p>

                    {/* Title */}
                    <h3
                      className="font-display italic mb-3"
                      style={{
                        fontSize: '32px',
                        fontWeight: 400,
                        color: 'var(--color-black)',
                        lineHeight: 1.15,
                      }}
                    >
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="font-body font-light mb-5"
                      style={{
                        fontSize: '14px',
                        color: 'var(--color-gray)',
                        lineHeight: 1.75,
                      }}
                    >
                      {step.description}
                    </p>

                    {/* Product name */}
                    <p
                      className="font-body"
                      style={{
                        fontSize: '11px',
                        fontWeight: 500,
                        letterSpacing: '1.5px',
                        textTransform: 'uppercase',
                        color: 'var(--color-gold)',
                        opacity: 0.7,
                      }}
                    >
                      → {step.highlight}
                    </p>
                  </div>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>

        {/* Guarantee strip */}
        <FadeUp delay={0.3} className="mt-20">
          <div
            className="flex flex-col md:flex-row items-center justify-between gap-4 rounded-sm px-8 py-6"
            style={{
              background: 'rgba(201,168,76,0.06)',
              border: '1px solid rgba(201,168,76,0.2)',
            }}
          >
            {[
              { icon: '⏱', text: 'Délais garantis ou −10%/semaine de retard' },
              { icon: '📊', text: 'Garantie ROI sur 12 mois' },
              { icon: '🔒', text: 'Code source complet livré · Propriété définitive' },
            ].map((g) => (
              <div key={g.text} className="flex items-center gap-3">
                <span className="text-lg">{g.icon}</span>
                <p
                  className="font-body font-light"
                  style={{
                    fontSize: '13px',
                    color: 'var(--color-black)',
                    lineHeight: 1.4,
                  }}
                >
                  {g.text}
                </p>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
