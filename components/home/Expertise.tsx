'use client'

import { ShieldCheck, HeartHandshake } from 'lucide-react'
import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'

export default function Expertise() {
  const { t } = useLang()

  const pillars = [
    {
      icon: ShieldCheck,
      title: t('expertise.p1.title'),
      desc: t('expertise.p1.desc'),
    },
    {
      icon: HeartHandshake,
      title: t('expertise.p2.title'),
      desc: t('expertise.p2.desc'),
    },
  ]

  return (
    <section style={{ padding: '120px 24px' }}>
      <div className="mx-auto" style={{ maxWidth: '1100px' }}>
        <FadeUp className="text-center mb-16">
          <span className="section-label">{t('expertise.label')}</span>
          <h2 className="section-title" style={{ maxWidth: '720px', margin: '0 auto 20px' }}>
            {t('expertise.title')}{' '}
            <span className="accent">{t('expertise.titleAccent')}</span>
          </h2>
          <p
            className="font-sans"
            style={{
              fontSize: '15px',
              fontWeight: 300,
              color: 'var(--text-secondary)',
              maxWidth: '560px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            {t('expertise.sub')}
          </p>
        </FadeUp>

        <div className="expertise-grid">
          {pillars.map((p, i) => {
            const Icon = p.icon
            return (
              <FadeUp key={p.title} delay={i * 0.12}>
                <article
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    borderRadius: 12,
                    padding: '36px 32px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 18,
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 10,
                      background: 'var(--accent-subtle)',
                      display: 'grid',
                      placeItems: 'center',
                      color: 'var(--accent)',
                    }}
                  >
                    <Icon size={24} strokeWidth={1.6} />
                  </div>
                  <h3
                    className="font-serif italic"
                    style={{
                      fontSize: 24,
                      fontWeight: 400,
                      lineHeight: 1.2,
                      color: 'var(--text)',
                      margin: 0,
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="font-sans"
                    style={{
                      fontSize: 14,
                      color: 'var(--text-secondary)',
                      lineHeight: 1.65,
                      fontWeight: 300,
                      margin: 0,
                    }}
                  >
                    {p.desc}
                  </p>
                </article>
              </FadeUp>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        .expertise-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }
        @media (max-width: 760px) {
          .expertise-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
