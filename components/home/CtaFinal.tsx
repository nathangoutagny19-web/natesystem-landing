'use client'

import FadeUp from '@/components/ui/FadeUp'
import { motion } from 'framer-motion'
import { useLang } from '@/components/providers/LangProvider'
import { CAL_LINK } from '@/lib/constants'
import Footer from '@/components/layout/Footer'

export default function CtaFinal() {
  const { t } = useLang()

  const reassurances = [
    { icon: '✓', text: t('cta.r1') },
    { icon: '✓', text: t('cta.r2') },
    { icon: '✓', text: t('cta.r3') },
  ]

  return (
    <section id="contact" style={{ padding: '0 24px' }}>
      {/* CTA block */}
      <div className="mx-auto text-center" style={{ maxWidth: '800px', padding: '160px 0 120px' }}>
        <FadeUp>
          <span className="section-label">{t('cta.label')}</span>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="section-title" style={{ maxWidth: '700px', margin: '0 auto 28px' }}>
            {t('cta.title')}{' '}
            <span className="accent">{t('cta.titleAccent')}</span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="font-sans mb-12" style={{ fontSize: '17px', fontWeight: 300, color: 'var(--text-secondary)', maxWidth: '520px', margin: '0 auto 48px', lineHeight: 1.6 }}>
            {t('cta.sub')}
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <motion.a
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
            style={{ fontSize: '15px', padding: '20px 52px', marginBottom: '28px' }}
            whileHover={{ scale: 1.03 }}
          >
            <span className="btn-primary-dot" />
            {t('cta.button')} →
          </motion.a>
        </FadeUp>

        <FadeUp delay={0.4}>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            {reassurances.map((r) => (
              <div key={r.text} className="flex items-center gap-2">
                <span className="font-sans" style={{ fontSize: '14px', color: 'var(--accent)' }}>{r.icon}</span>
                <span className="font-sans" style={{ fontSize: '13px', color: 'var(--text-secondary)', fontWeight: 300 }}>{r.text}</span>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>

      <Footer />
    </section>
  )
}
