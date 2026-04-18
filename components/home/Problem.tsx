'use client'

import FadeUp from '@/components/ui/FadeUp'
import { motion } from 'framer-motion'
import { useLang } from '@/components/providers/LangProvider'

export default function Problem() {
  const { t } = useLang()

  const items = [t('problem.p1'), t('problem.p2'), t('problem.p3'), t('problem.p4')]

  return (
    <section id="probleme" style={{ padding: '120px 24px' }}>
      <div className="mx-auto" style={{ maxWidth: '1100px' }}>
        <FadeUp className="text-center mb-20">
          <span className="section-label">{t('problem.label')}</span>
          <h2 className="section-title" style={{ maxWidth: '720px', margin: '0 auto 24px' }}>
            {t('problem.title1')}{' '}
            <span className="accent">{t('problem.titleAccent')}</span>
          </h2>
          <p className="font-sans" style={{ fontSize: '15px', fontWeight: 300, color: 'var(--text-secondary)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
            {t('problem.sub')}
          </p>
        </FadeUp>

        <div className="flex flex-col gap-0 mb-10">
          {items.map((text, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <motion.div
                className="flex items-start gap-5 transition-all cursor-default"
                style={{
                  padding: '24px 32px',
                  background: 'var(--accent-subtle)',
                  borderLeft: '2px solid rgba(230,57,70,0.3)',
                  borderBottom: i < items.length - 1 ? '1px solid var(--border)' : 'none',
                  borderTop: i === 0 ? '1px solid var(--border)' : 'none',
                }}
                whileHover={{ borderLeftColor: 'var(--accent)', backgroundColor: 'rgba(230,57,70,0.06)', x: 4 }}
                transition={{ duration: 0.25 }}
              >
                <span className="flex-shrink-0 font-mono text-sm mt-0.5" style={{ color: 'var(--accent)' }}>→</span>
                <p className="font-sans" style={{ fontSize: '15px', color: 'var(--text)', lineHeight: 1.6, fontWeight: 400 }}>
                  {text}
                </p>
              </motion.div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.4}>
          <p
            className="font-serif italic text-center"
            style={{
              fontSize: 'clamp(18px, 2.4vw, 22px)',
              fontWeight: 400,
              color: 'var(--text)',
              lineHeight: 1.5,
              maxWidth: '680px',
              margin: '0 auto',
              paddingTop: '24px',
              borderTop: '1px solid var(--border)',
            }}
          >
            {t('problem.stat')}
          </p>
        </FadeUp>
      </div>
    </section>
  )
}
