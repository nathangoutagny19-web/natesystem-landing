'use client'

import { useState } from 'react'
import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'

export default function Faq() {
  const { t } = useLang()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqItems = [
    { q: t('faq.q1'), a: t('faq.a1') },
    { q: t('faq.q2'), a: t('faq.a2') },
    { q: t('faq.q3'), a: t('faq.a3') },
    { q: t('faq.q4'), a: t('faq.a4') },
    { q: t('faq.q5'), a: t('faq.a5') },
  ]

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section id="faq" style={{ padding: '120px 24px' }}>
      <div className="mx-auto" style={{ maxWidth: '1100px' }}>
        <FadeUp className="text-center mb-16">
          <span className="section-label">{t('faq.label')}</span>
          <h2 className="section-title" style={{ maxWidth: '700px', margin: '0 auto' }}>
            {t('faq.title')} <span className="accent">{t('faq.titleAccent')}</span>
          </h2>
        </FadeUp>

        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          {faqItems.map((item, i) => (
            <FadeUp key={i} delay={i * 0.05}>
              <div className={`faq-item${openIndex === i ? ' open' : ''}`}>
                <button className="faq-question" onClick={() => toggle(i)}>
                  {item.q}
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">
                  <p
                    className="font-sans"
                    style={{
                      fontSize: '15px',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.7,
                      fontWeight: 300,
                      paddingBottom: '24px',
                    }}
                  >
                    {item.a}
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
