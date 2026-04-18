'use client'

import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'

export default function Solution() {
  const { t } = useLang()

  const pillars = [
    { number: '01', title: t('solution.connect'), desc: t('solution.connectDesc'), tags: t('solution.connectTags') },
    { number: '02', title: t('solution.automate'), desc: t('solution.automateDesc'), tags: t('solution.automateTags') },
    { number: '03', title: t('solution.decide'), desc: t('solution.decideDesc'), tags: t('solution.decideTags') },
  ]

  return (
    <section id="prestations" style={{ padding: '120px 24px' }}>
      <div className="mx-auto" style={{ maxWidth: '1100px' }}>
        <FadeUp className="text-center mb-20">
          <span className="section-label">{t('solution.label')}</span>
          <h2 className="section-title" style={{ maxWidth: '700px', margin: '0 auto 24px' }}>
            {t('solution.title')}{' '}
            <span className="accent">{t('solution.titleAccent')}</span>
          </h2>
          <p className="font-sans" style={{ fontSize: '15px', fontWeight: 300, color: 'var(--text-secondary)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
            {t('solution.sub')}
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px]">
          {pillars.map((p, i) => (
            <FadeUp key={p.number} delay={i * 0.12}>
              <div
                className="relative overflow-hidden h-full process-card-hover"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', padding: '48px 36px 44px', transition: 'border-color 0.3s, background 0.3s' }}
              >
                {/* Top accent line on hover */}
                <div className="absolute top-0 left-0 right-0 h-px bg-ns-accent scale-x-0 hover:scale-x-100 transition-transform duration-400 origin-left" />

                <span className="font-serif italic block mb-6" style={{ fontSize: '48px', color: 'var(--accent)', opacity: 0.6, lineHeight: 1 }}>
                  {p.number}
                </span>
                <h3 className="font-serif italic mb-4" style={{ fontSize: '24px', fontWeight: 400, color: 'var(--text)', lineHeight: 1.3 }}>
                  {p.title}
                </h3>
                <p className="font-sans mb-6" style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7, fontWeight: 300 }}>
                  {p.desc}
                </p>
                <p className="font-mono" style={{ fontSize: '11px', color: 'var(--accent)', letterSpacing: '1.5px', textTransform: 'uppercase', opacity: 0.7 }}>
                  {p.tags}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
