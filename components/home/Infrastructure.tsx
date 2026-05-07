'use client'

/**
 * Infrastructure — sovereignty + ownership block.
 *
 * Sits between Process and Integrations. Tone: declarative, no
 * antagonism. Lists the cloud providers and the AI models we
 * deploy on, then a row of 4 promise tags.
 */

import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'

export default function Infrastructure() {
  const { t } = useLang()

  return (
    <section id="infrastructure" style={{ padding: '120px 24px' }}>
      <div className="mx-auto" style={{ maxWidth: '900px' }}>
        <FadeUp className="text-center mb-10">
          <span className="section-label">{t('infra.label')}</span>
          <h2
            className="section-title"
            style={{ maxWidth: '720px', margin: '0 auto 24px' }}
          >
            {t('infra.title')}{' '}
            <span className="accent">{t('infra.titleAccent')}</span>
          </h2>
          <p
            className="font-sans"
            style={{
              fontSize: 15,
              fontWeight: 300,
              color: 'var(--text-secondary)',
              lineHeight: 1.8,
              maxWidth: 680,
              margin: '0 auto',
            }}
          >
            {t('infra.body')}
          </p>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 10,
              justifyContent: 'center',
              marginTop: 36,
            }}
          >
            {[
              t('infra.tag1'),
              t('infra.tag2'),
              t('infra.tag3'),
              t('infra.tag4'),
            ].map((tag) => (
              <span
                key={tag}
                className="font-mono"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '8px 14px',
                  borderRadius: 999,
                  border: '1px solid var(--border)',
                  background: 'var(--bg-card)',
                  color: 'var(--text-secondary)',
                  fontSize: 11,
                  letterSpacing: 1.5,
                  textTransform: 'uppercase',
                  fontWeight: 300,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
