'use client'

import { useState } from 'react'
import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'

export default function Faq() {
  const { lang, t } = useLang()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqItems = [
    { q: t('faq.q1'), a: t('faq.a1') },
    { q: t('faq.q2'), a: t('faq.a2') },
    { q: t('faq.q3'), a: t('faq.a3') },
    { q: t('faq.q4'), a: t('faq.a4') },
    { q: t('faq.q5'), a: t('faq.a5') },
    { q: t('faq.q6'), a: t('faq.a6') },
    { q: t('faq.q7'), a: t('faq.a7') },
    { q: t('faq.q8'), a: t('faq.a8') },
  ]

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  /* Le schema suit mot pour mot ce qui est affiché au-dessus, et donc la
     langue de la page. Il vit ici plutôt que dans le layout racine, où il
     était servi en français sur toutes les pages du site. */
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: lang,
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
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
    </>
  )
}
