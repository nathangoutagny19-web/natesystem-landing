'use client'

import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'

export default function AboutNathan() {
  const { t } = useLang()

  return (
    <section style={{ padding: '120px 24px' }}>
      <div className="mx-auto" style={{ maxWidth: '880px' }}>
        <FadeUp className="text-center mb-12">
          <span className="section-label">{t('about.label')}</span>
          <h2 className="section-title" style={{ maxWidth: '700px', margin: '0 auto 20px' }}>
            {t('about.title')}{' '}
            <span className="accent">{t('about.titleAccent')}</span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.15}>
          <article
            className="about-card"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 14,
              padding: '36px',
              display: 'grid',
              gridTemplateColumns: '120px 1fr',
              gap: 28,
              alignItems: 'flex-start',
            }}
          >
            <div
              style={{
                width: 120,
                height: 120,
                borderRadius: '50%',
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border)',
                display: 'grid',
                placeItems: 'center',
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: 56,
                color: 'var(--accent)',
              }}
            >
              N
            </div>

            <div>
              <h3
                className="font-serif italic"
                style={{ fontSize: 26, fontWeight: 400, color: 'var(--text)', margin: 0, lineHeight: 1.1 }}
              >
                {t('about.name')}
              </h3>
              <p
                className="font-mono"
                style={{
                  fontSize: 11,
                  letterSpacing: 1.8,
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                  margin: '8px 0 16px',
                  fontWeight: 500,
                }}
              >
                {t('about.role')}
              </p>
              <p
                className="font-sans"
                style={{
                  fontSize: 14.5,
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  fontWeight: 300,
                  margin: '0 0 18px',
                }}
              >
                {t('about.bio')}
              </p>
              <p
                className="font-sans"
                style={{
                  fontSize: 13.5,
                  color: 'var(--text)',
                  fontWeight: 500,
                  fontStyle: 'italic',
                  borderLeft: '2px solid var(--accent)',
                  paddingLeft: 14,
                  margin: '0 0 20px',
                  lineHeight: 1.6,
                }}
              >
                {t('about.note')}
              </p>
              <div className="flex gap-4 items-center">
                <a
                  href="https://www.linkedin.com/in/nathan-goutagny"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans"
                  style={{
                    fontSize: 13,
                    fontWeight: 500,
                    color: 'var(--text)',
                    textDecoration: 'underline',
                    textDecorationColor: 'var(--border-hover)',
                  }}
                >
                  {t('about.linkedin')} ↗
                </a>
                <a
                  href="mailto:nathan@natesystem.com"
                  className="font-sans"
                  style={{
                    fontSize: 13,
                    fontWeight: 500,
                    color: 'var(--text)',
                    textDecoration: 'underline',
                    textDecorationColor: 'var(--border-hover)',
                  }}
                >
                  nathan@natesystem.com
                </a>
              </div>
            </div>
          </article>
        </FadeUp>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .about-card {
            grid-template-columns: 1fr !important;
            text-align: center;
            justify-items: center;
          }
          .about-card > div:first-child {
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  )
}
