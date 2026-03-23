'use client'

import FadeUp from '@/components/ui/FadeUp'
import { motion } from 'framer-motion'
import { useLang } from '@/components/providers/LangProvider'

export default function Process() {
  const { t } = useLang()

  const steps = [
    { number: '01', title: t('process.step1'), duration: t('process.step1Duration'), desc: t('process.step1Desc'), highlight: 'Audit Stratégique — 990€ HT' },
    { number: '02', title: t('process.step2'), duration: t('process.step2Duration'), desc: t('process.step2Desc'), highlight: 'Infrastructure Setup' },
    { number: '03', title: t('process.step3'), duration: t('process.step3Duration'), desc: t('process.step3Desc'), highlight: 'Licence NateSystem' },
  ]

  const guarantees = [
    { icon: '⏱', text: t('process.guarantee1') },
    { icon: '📊', text: t('process.guarantee2') },
    { icon: '🔒', text: t('process.guarantee3') },
  ]

  return (
    <section id="process" style={{ padding: '120px 24px' }}>
      <div className="mx-auto" style={{ maxWidth: '1100px' }}>
        <FadeUp className="text-center mb-20">
          <span className="section-label">{t('process.label')}</span>
          <h2 className="section-title" style={{ maxWidth: '700px', margin: '0 auto 24px' }}>
            {t('process.title')}{' '}
            <span className="accent">{t('process.titleAccent')}</span>
          </h2>
          <p className="font-sans" style={{ fontSize: '15px', fontWeight: 300, color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
            {t('process.sub')}
          </p>
        </FadeUp>

        {/* Steps */}
        <div className="flex flex-col gap-[2px]">
          {steps.map((step, i) => (
            <FadeUp key={step.number} delay={i * 0.12}>
              <motion.div
                className="grid gap-10 cursor-default"
                style={{
                  gridTemplateColumns: '80px 1fr',
                  padding: '48px 40px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                }}
                whileHover={{ borderColor: 'var(--border-hover)', backgroundColor: 'var(--bg-elevated)' }}
                transition={{ duration: 0.3 }}
              >
                <span className="font-serif italic" style={{ fontSize: '48px', color: 'var(--accent)', opacity: 0.6 }}>
                  {step.number}
                </span>
                <div>
                  <p className="font-mono inline-block px-3 py-1 rounded-full mb-3" style={{
                    fontSize: '10px', fontWeight: 400, letterSpacing: '1.5px', textTransform: 'uppercase',
                    color: 'var(--accent)', background: 'var(--accent-subtle)', border: '1px solid rgba(230,57,70,0.2)',
                  }}>
                    {step.duration}
                  </p>
                  <h3 className="font-serif italic mb-3" style={{ fontSize: '26px', fontWeight: 400, color: 'var(--text)', lineHeight: 1.2 }}>
                    {step.title}
                  </h3>
                  <p className="font-sans mb-4" style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7, fontWeight: 300 }}>
                    {step.desc}
                  </p>
                  <p className="font-mono" style={{ fontSize: '13px', color: 'var(--accent)', letterSpacing: '0.5px' }}>
                    → {step.highlight}
                  </p>
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>

        {/* Guarantee strip */}
        <FadeUp delay={0.3} className="mt-16">
          <div
            className="flex flex-col md:flex-row items-center justify-between gap-4 px-8 py-6"
            style={{ background: 'var(--accent-subtle)', border: '1px solid rgba(230,57,70,0.2)', borderRadius: '12px' }}
          >
            {guarantees.map((g) => (
              <div key={g.text} className="flex items-center gap-3">
                <span className="text-lg">{g.icon}</span>
                <p className="font-sans" style={{ fontSize: '13px', color: 'var(--text)', lineHeight: 1.4, fontWeight: 300 }}>
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
