'use client'

import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
      <path d="M4 9.5L7.5 13L14 5" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
      <path d="M5 5L13 13M13 5L5 13" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function ForWho() {
  const { t } = useLang()

  const forYou = [
    t('forwho.yes.1'),
    t('forwho.yes.2'),
    t('forwho.yes.3'),
    t('forwho.yes.4'),
  ]

  const notForYou = [
    t('forwho.no.1'),
    t('forwho.no.2'),
    t('forwho.no.3'),
    t('forwho.no.4'),
  ]

  return (
    <section id="for-who" style={{ padding: '120px 24px' }}>
      <div className="mx-auto" style={{ maxWidth: '1100px' }}>
        <FadeUp className="text-center mb-20">
          <span className="section-label">{t('forwho.label')}</span>
          <h2
            className="section-title"
            style={{ maxWidth: 700, margin: '0 auto 24px' }}
          >
            {t('forwho.title')}{' '}
            <span className="accent">{t('forwho.titleAccent')}</span>
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Positive column */}
          <FadeUp delay={0}>
            <div
              className="p-6 md:py-10 md:px-8"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 12,
                height: '100%',
              }}
            >
              <div className="flex items-center gap-3 mb-8">
                <CheckIcon />
                <h3
                  className="font-serif italic"
                  style={{
                    fontSize: 22,
                    fontWeight: 400,
                    color: 'var(--text)',
                    lineHeight: 1.3,
                  }}
                >
                  {t('forwho.yes.title')}
                </h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {forYou.map((item, i) => (
                  <li
                    key={i}
                    className="font-sans flex items-start gap-3"
                    style={{
                      fontSize: 14,
                      fontWeight: 300,
                      color: 'var(--text)',
                      lineHeight: 1.7,
                      marginBottom: 14,
                    }}
                  >
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>

          {/* Negative column */}
          <FadeUp delay={0.12}>
            <div
              className="p-6 md:py-10 md:px-8"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 12,
                height: '100%',
              }}
            >
              <div className="flex items-center gap-3 mb-8">
                <XIcon />
                <h3
                  className="font-serif italic"
                  style={{
                    fontSize: 22,
                    fontWeight: 400,
                    color: 'var(--text)',
                    lineHeight: 1.3,
                  }}
                >
                  {t('forwho.no.title')}
                </h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {notForYou.map((item, i) => (
                  <li
                    key={i}
                    className="font-sans flex items-start gap-3"
                    style={{
                      fontSize: 14,
                      fontWeight: 300,
                      color: 'var(--text)',
                      lineHeight: 1.7,
                      marginBottom: 14,
                    }}
                  >
                    <XIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>

        {/* Promises strip (owned-code, no lock-in, fixed price) */}
        <FadeUp delay={0.2}>
          <div
            style={{
              textAlign: 'center',
              marginBottom: 20,
            }}
          >
            <span
              className="font-mono"
              style={{
                fontSize: 10,
                letterSpacing: 2.5,
                textTransform: 'uppercase',
                color: 'var(--accent)',
              }}
            >
              {t('forwho.promise.label')}
            </span>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 14,
              background: 'var(--accent-subtle)',
              border: '1px solid rgba(230,57,70,0.18)',
              borderRadius: 14,
              padding: '28px 24px',
            }}
          >
            {[t('forwho.promise1'), t('forwho.promise2'), t('forwho.promise3')].map((p) => (
              <div
                key={p}
                className="flex items-start gap-3"
                style={{ justifyContent: 'center' }}
              >
                <CheckIcon />
                <p
                  className="font-sans"
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
                    color: 'var(--text)',
                    lineHeight: 1.6,
                  }}
                >
                  {p}
                </p>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
