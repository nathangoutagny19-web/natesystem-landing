'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'
import { CAL_LINK } from '@/lib/constants'

export default function Fomo() {
  const { t } = useLang()

  const stats = [
    { num: t('fomo.stat1.num'), desc: t('fomo.stat1.desc'), source: t('fomo.stat1.source'), url: t('fomo.stat1.url') },
    { num: t('fomo.stat2.num'), desc: t('fomo.stat2.desc'), source: t('fomo.stat2.source'), url: t('fomo.stat2.url') },
    { num: t('fomo.stat3.num'), desc: t('fomo.stat3.desc'), source: t('fomo.stat3.source'), url: t('fomo.stat3.url') },
    { num: t('fomo.stat4.num'), desc: t('fomo.stat4.desc'), source: t('fomo.stat4.source'), url: t('fomo.stat4.url') },
  ]

  return (
    <section style={{ padding: '120px 24px', background: 'var(--bg-card)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="mx-auto" style={{ maxWidth: '1100px' }}>
        <FadeUp className="text-center mb-16">
          <span className="section-label">{t('fomo.label')}</span>
          <h2 className="section-title" style={{ maxWidth: '700px', margin: '0 auto 20px' }}>
            {t('fomo.title')}{' '}
            <span className="accent">{t('fomo.titleAccent')}</span>
          </h2>
        </FadeUp>

        <div className="fomo-grid">
          {stats.map((s, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <article
                style={{
                  background: 'var(--bg)',
                  border: '1px solid var(--border)',
                  borderRadius: 12,
                  padding: '28px 24px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                }}
              >
                <div
                  className="font-serif italic"
                  style={{
                    fontSize: 'clamp(42px, 5vw, 56px)',
                    fontWeight: 400,
                    color: 'var(--accent)',
                    lineHeight: 1,
                    margin: 0,
                  }}
                >
                  {s.num}
                </div>
                <p
                  className="font-sans"
                  style={{
                    fontSize: 13.5,
                    color: 'var(--text)',
                    lineHeight: 1.55,
                    fontWeight: 400,
                    margin: 0,
                    flex: 1,
                  }}
                >
                  {s.desc}
                </p>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono"
                  style={{
                    fontSize: 10,
                    color: 'var(--text-muted)',
                    textDecoration: 'underline',
                    textDecorationColor: 'var(--border-hover)',
                    letterSpacing: 0.5,
                    marginTop: 8,
                    fontWeight: 400,
                  }}
                >
                  — {s.source} ↗
                </a>
              </article>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.4}>
          <p
            className="font-sans"
            style={{
              fontSize: 'clamp(15px, 1.6vw, 17px)',
              fontWeight: 300,
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              maxWidth: '720px',
              margin: '48px auto 36px',
              textAlign: 'center',
            }}
          >
            {t('fomo.body')}
          </p>

          <div className="text-center">
            <Link
              href={CAL_LINK}
              className="btn-primary"
              style={{ fontSize: 14, display: 'inline-flex', alignItems: 'center', gap: 8 }}
            >
              <span className="btn-primary-dot" />
              {t('fomo.cta')} <ArrowRight size={14} strokeWidth={2} />
            </Link>
          </div>
        </FadeUp>
      </div>

      <style jsx>{`
        .fomo-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 14px;
        }
        @media (max-width: 980px) {
          .fomo-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (max-width: 540px) {
          .fomo-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
