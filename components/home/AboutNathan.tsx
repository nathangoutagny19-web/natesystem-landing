'use client'

import Image from 'next/image'
import { Mail } from 'lucide-react'
import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'

function LinkedInIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  )
}

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
                overflow: 'hidden',
                border: '1px solid var(--border)',
                position: 'relative',
                flexShrink: 0,
              }}
            >
              <Image
                src="/nathan.png"
                alt="Nathan Goutagny"
                fill
                sizes="120px"
                style={{ objectFit: 'cover' }}
                priority
              />
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
              <div className="flex gap-3 items-center flex-wrap">
                <a
                  href="https://www.linkedin.com/in/nathan-goutagny"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Nathan Goutagny"
                  className="about-link"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    fontSize: 13,
                    fontWeight: 500,
                    color: 'var(--text)',
                    textDecoration: 'none',
                    padding: '8px 14px',
                    border: '1px solid var(--border)',
                    borderRadius: 8,
                    transition: 'border-color 0.2s ease, background 0.2s ease',
                  }}
                >
                  <LinkedInIcon size={15} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="mailto:nathan@natesystem.com"
                  aria-label="Email Nathan"
                  className="about-link"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    fontSize: 13,
                    fontWeight: 500,
                    color: 'var(--text)',
                    textDecoration: 'none',
                    padding: '8px 14px',
                    border: '1px solid var(--border)',
                    borderRadius: 8,
                    transition: 'border-color 0.2s ease, background 0.2s ease',
                  }}
                >
                  <Mail size={15} strokeWidth={1.8} />
                  <span>nathan@natesystem.com</span>
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
