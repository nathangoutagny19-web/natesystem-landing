'use client'

import FadeUp from '@/components/ui/FadeUp'
import { motion } from 'framer-motion'
import { useLang } from '@/components/providers/LangProvider'

export default function Process() {
  const { t } = useLang()

  const steps = [
    { number: '01', title: t('process.step1'), duration: t('process.step1Duration'), desc: t('process.step1Desc'), highlight: t('process.step1Highlight') },
    { number: '02', title: t('process.step2'), duration: t('process.step2Duration'), desc: t('process.step2Desc'), highlight: t('process.step2Highlight') },
    { number: '03', title: t('process.step3'), duration: t('process.step3Duration'), desc: t('process.step3Desc'), highlight: t('process.step3Highlight') },
    { number: '04', title: t('process.step4'), duration: t('process.step4Duration'), desc: t('process.step4Desc'), highlight: t('process.step4Highlight') },
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

        {/* Steps — one connected group with app-style rounded corners + fine shadow */}
        <div
          className="flex flex-col gap-[2px] overflow-hidden"
          style={{
            borderRadius: 12,
            boxShadow: '0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px -16px rgba(15, 23, 42, 0.12)',
          }}
        >
          {steps.map((step, i) => (
            <FadeUp key={step.number} delay={i * 0.12}>
              <div
                className="process-step-grid cursor-default process-card-hover"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  transition: 'border-color 0.3s, background 0.3s',
                }}
              >
                <span
                  className="font-serif italic"
                  aria-hidden="true"
                  style={{
                    fontSize: '34px',
                    color: 'var(--accent)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 56,
                    height: 56,
                    borderRadius: 12,
                    background: 'var(--accent-subtle)',
                    border: '1px solid rgba(230,57,70,0.18)',
                    flexShrink: 0,
                  }}
                >
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
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  )
}
