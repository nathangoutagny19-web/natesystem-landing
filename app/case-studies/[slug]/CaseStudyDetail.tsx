'use client'

import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import MobileCta from '@/components/layout/MobileCta'
import FadeUp from '@/components/ui/FadeUp'
import Divider from '@/components/ui/Divider'
import LiteYouTube from '@/components/ui/LiteYouTube'
import { CAL_LINK } from '@/lib/constants'
import type { CaseStudy } from '@/lib/case-studies'

const SECTIONS = [
  { n: '01', key: 'problem' as const, labelTitle: 'problemTitle' as const },
  { n: '02', key: 'solution' as const, labelTitle: 'solutionTitle' as const },
  { n: '03', key: 'results' as const, labelTitle: 'resultsTitle' as const },
]

export default function CaseStudyDetail({ study }: { study: CaseStudy }) {
  return (
    <main>
      <Nav />

      {/* Hero */}
      <section style={{ padding: '160px 24px 32px' }}>
        <div className="mx-auto" style={{ maxWidth: '820px' }}>
          <FadeUp>
            <span className="section-label">
              Réalisation · {study.sector} · {study.location}
            </span>
            <h1
              className="font-serif italic"
              style={{
                fontSize: 'clamp(38px, 6vw, 64px)',
                fontWeight: 400,
                lineHeight: 1.05,
                color: 'var(--text)',
                margin: '0 0 20px',
              }}
            >
              {study.title}
            </h1>
            <p
              className="font-sans"
              style={{
                fontSize: '19px',
                fontWeight: 300,
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                maxWidth: '640px',
              }}
            >
              {study.subtitle}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Métriques */}
      <section style={{ padding: '16px 24px 48px' }}>
        <div className="mx-auto" style={{ maxWidth: '900px' }}>
          <FadeUp>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
                gap: '14px',
              }}
            >
              {study.metrics.map((m, i) => (
                <div
                  key={i}
                  style={{
                    padding: '22px 20px',
                    borderRadius: 14,
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                  }}
                >
                  <div
                    className="font-serif italic"
                    style={{ fontSize: '34px', fontWeight: 400, color: 'var(--accent)', lineHeight: 1, marginBottom: 10 }}
                  >
                    {m.value}
                  </div>
                  <div
                    className="font-sans"
                    style={{ fontSize: '13.5px', fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.5 }}
                  >
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Vidéo témoignage */}
      {study.videoId && (
        <section style={{ padding: '0 24px 64px' }}>
          <div className="mx-auto" style={{ maxWidth: '900px' }}>
            <FadeUp>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  paddingBottom: '56.25%',
                  borderRadius: 12,
                  overflow: 'hidden',
                  border: '1px solid var(--border)',
                }}
              >
                <LiteYouTube id={study.videoId} title={`Témoignage vidéo, ${study.title}`} />
              </div>
            </FadeUp>
          </div>
        </section>
      )}

      <Divider />

      {/* Problème · Solution · Résultats */}
      <section style={{ padding: '64px 24px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: '820px' }}>
          {SECTIONS.map((s) => (
            <FadeUp key={s.n}>
              <div style={{ marginBottom: 56 }}>
                <div
                  className="font-mono"
                  style={{
                    fontSize: '12px',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--accent)',
                    marginBottom: 14,
                  }}
                >
                  {s.n} · {study[s.labelTitle]}
                </div>
                {(study[s.key] as string[]).map((p, i) => (
                  <p
                    key={i}
                    className="font-sans"
                    style={{
                      fontSize: '17px',
                      fontWeight: 300,
                      color: 'var(--text-secondary)',
                      lineHeight: 1.75,
                      margin: '0 0 16px',
                    }}
                  >
                    {p}
                  </p>
                ))}
              </div>
            </FadeUp>
          ))}

          {/* Citation */}
          <FadeUp>
            <blockquote
              style={{
                margin: '8px 0 0',
                padding: '28px 28px 28px 30px',
                borderLeft: '3px solid var(--accent)',
                background: 'var(--bg-card)',
                borderRadius: '0 14px 14px 0',
              }}
            >
              <p
                className="font-serif italic"
                style={{ fontSize: 'clamp(21px, 3vw, 27px)', fontWeight: 400, color: 'var(--text)', lineHeight: 1.4, margin: '0 0 18px' }}
              >
                « {study.quote} »
              </p>
              <div className="font-sans" style={{ fontSize: '14.5px', fontWeight: 500, color: 'var(--text)' }}>
                {study.quoteAuthor}
              </div>
              <div className="font-sans" style={{ fontSize: '13px', fontWeight: 300, color: 'var(--text-secondary)', marginTop: 2 }}>
                {study.quoteRole}
              </div>
            </blockquote>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* CTA */}
      <section style={{ padding: '64px 24px 96px' }}>
        <div className="mx-auto text-center" style={{ maxWidth: '620px' }}>
          <FadeUp>
            <h2
              className="font-serif italic"
              style={{ fontSize: 'clamp(24px, 3.4vw, 34px)', fontWeight: 400, color: 'var(--text)', lineHeight: 1.25, marginBottom: 12 }}
            >
              Envie du même résultat chez vous ?
            </h2>
            <p className="font-sans" style={{ fontSize: '15px', fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 26 }}>
              On commence par un diagnostic, on regarde où partent vos heures avant de proposer quoi que ce soit.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href={CAL_LINK} className="btn-primary">
                <span className="btn-primary-dot" />
                Réserver un appel &rarr;
              </Link>
              <Link href="/case-studies" className="btn-ghost">
                Voir les réalisations
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
      <MobileCta />
    </main>
  )
}
