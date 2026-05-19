/**
 * /reviews — NateSystem · Reviews (product demo landing).
 *
 * Reviews is a software product (review intelligence) we built and run
 * for our own catalogue. This page is its demo landing: agency framing
 * is intentionally absent. Access to the live demo is gated behind a
 * short request form, same pattern as the rest of the demo catalogue —
 * but unlike /actifs and /stock, the access link is sent by email after
 * a manual check (no public demo URL).
 *
 * Narrative arc:
 *   1. Hero — product positioning + request-access CTA
 *   2. Inside the demo — three modules you can click through
 *   3. AI aspect analysis (03-aspect-analysis.png)
 *   4. Response agent (06-responses.png)
 *   5. 90-day plan from data (02-action-plan.png)
 *   6. Live evidence — full-width single review (05-reviews-ai.png)
 *   7. How the demo works — four steps
 *   8. FAQ — five product/demo questions
 *   9. Final ribbon — "See the product. Make your own call."
 *
 * Every mockup is a real production screenshot from the partner
 * restaurant "Kéfrenkos" (200 imported reviews). Do NOT crop or
 * letterbox — render at native aspect.
 */

'use client'

import { useState } from 'react'
import Image from 'next/image'
import ReviewsNav from '@/components/layout/ReviewsNav'
import Footer from '@/components/layout/Footer'
import FadeUp from '@/components/ui/FadeUp'
import DemoRequestModal, { DemoRequest } from '@/components/ui/DemoRequestModal'
import { useLang } from '@/components/providers/LangProvider'

const REVIEWS_DEMO: DemoRequest = { id: 'reviews', title: 'NateSystem · Reviews' }

export default function ReviewsPage() {
  const { t } = useLang()
  const [requesting, setRequesting] = useState<DemoRequest | null>(null)

  const openRequest = () => setRequesting(REVIEWS_DEMO)

  return (
    <main style={{ background: 'var(--bg)' }}>
      <ReviewsNav onRequestDemo={openRequest} />

      {/* ════════════════════════════════════════════════════════════
         1. HERO
         ════════════════════════════════════════════════════════════ */}
      <section
        style={{
          position: 'relative',
          padding: '160px 24px 100px',
          minHeight: '88vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <FadeUp>
          <span className="section-label" style={{ letterSpacing: 3 }}>
            {t('reviewsDemo.kicker')}
          </span>
        </FadeUp>

        <FadeUp delay={0.08}>
          <h1
            className="font-serif italic"
            style={{
              fontSize: 'clamp(30px, 4.4vw, 58px)',
              lineHeight: 1.1,
              maxWidth: 920,
              margin: '20px auto 26px',
              color: 'var(--text)',
              fontWeight: 400,
            }}
          >
            {t('reviewsDemo.hero.title1')}
            <br />
            <span className="accent">{t('reviewsDemo.hero.titleAccent')}</span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.16}>
          <p
            className="font-sans"
            style={{
              fontSize: 'clamp(15px, 1.6vw, 17px)',
              fontWeight: 300,
              color: 'var(--text-secondary)',
              maxWidth: 700,
              lineHeight: 1.7,
              margin: '0 auto 36px',
            }}
          >
            {t('reviewsDemo.hero.sub')}
          </p>
        </FadeUp>

        <FadeUp delay={0.24}>
          <div
            style={{
              display: 'flex',
              gap: 14,
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginBottom: 20,
            }}
          >
            <button type="button" onClick={openRequest} className="btn-primary" style={{ fontSize: 14, border: 'none', cursor: 'pointer' }}>
              <span className="btn-primary-dot" />
              {t('reviewsDemo.hero.ctaPrimary')} →
            </button>
            <a
              href="#inside"
              className="font-sans"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '14px 26px',
                border: '1px solid rgba(230,57,70,0.35)',
                borderRadius: 12,
                color: 'var(--text)',
                fontSize: 14,
                fontWeight: 500,
                textDecoration: 'none',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent)'
                e.currentTarget.style.boxShadow = '0 0 16px rgba(230,57,70,0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(230,57,70,0.35)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {t('reviewsDemo.hero.ctaGhost')}
            </a>
          </div>
        </FadeUp>

        <FadeUp delay={0.32}>
          <p
            className="font-mono"
            style={{
              fontSize: 11,
              letterSpacing: 1.8,
              color: 'var(--text-muted)',
              marginBottom: 56,
            }}
          >
            {t('reviewsDemo.hero.note')}
          </p>
        </FadeUp>

        {/* Hero image with subtle accent radial glow */}
        <FadeUp delay={0.4}>
          <div style={{ position: 'relative', width: '100%', maxWidth: 980, margin: '0 auto' }}>
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: '-6% -6% -6% -6%',
                background:
                  'radial-gradient(circle at 50% 50%, rgba(230,57,70,0.12), transparent 62%)',
                pointerEvents: 'none',
              }}
            />
            <Image
              src="/reviews/01-reputation-score.png"
              alt={t('reviewsDemo.hero.imgAlt')}
              width={1600}
              height={1000}
              priority
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: 16,
                border: '1px solid var(--border)',
                boxShadow: '0 40px 80px -30px rgba(0,0,0,0.4)',
                position: 'relative',
              }}
            />
          </div>
        </FadeUp>
      </section>

      {/* ════════════════════════════════════════════════════════════
         2. INSIDE THE DEMO — three modules
         ════════════════════════════════════════════════════════════ */}
      <section id="inside" style={{ padding: '100px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 1100 }}>
          <div style={{ marginBottom: 56, textAlign: 'center' }}>
            <FadeUp>
              <span className="section-label">{t('reviewsDemo.inside.kicker')}</span>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h2
                className="font-serif italic"
                style={{
                  fontSize: 'clamp(26px, 3.2vw, 40px)',
                  lineHeight: 1.2,
                  color: 'var(--text)',
                  fontWeight: 400,
                  margin: '14px auto 0',
                  maxWidth: 720,
                }}
              >
                {t('reviewsDemo.inside.title1')}{' '}
                <span className="accent">{t('reviewsDemo.inside.titleAccent')}</span>
              </h2>
            </FadeUp>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 20,
            }}
          >
            <InsideCard label={t('reviewsDemo.inside.a.label')} desc={t('reviewsDemo.inside.a.desc')} delay={0} />
            <InsideCard label={t('reviewsDemo.inside.b.label')} desc={t('reviewsDemo.inside.b.desc')} delay={0.08} />
            <InsideCard label={t('reviewsDemo.inside.c.label')} desc={t('reviewsDemo.inside.c.desc')} delay={0.16} />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
         3. AI ANALYSIS — aspect scoring (03-aspect-analysis.png)
         ════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '100px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 1100 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
              gap: 56,
              alignItems: 'center',
            }}
            className="reviews-split"
          >
            <FadeUp delay={0.1}>
              <MockupFigure
                src="/reviews/03-aspect-analysis.png"
                alt="Six-dimension aspect analysis"
                caption={t('reviewsDemo.aspect.imgCaption')}
              />
            </FadeUp>

            <FadeUp>
              <span className="section-label">{t('reviewsDemo.aspect.kicker')}</span>
              <h2
                className="font-serif italic"
                style={{
                  fontSize: 'clamp(26px, 3.2vw, 40px)',
                  lineHeight: 1.2,
                  color: 'var(--text)',
                  fontWeight: 400,
                  margin: '14px 0 22px',
                }}
              >
                {t('reviewsDemo.aspect.title')}
              </h2>
              <p
                className="font-sans"
                style={{
                  fontSize: 15,
                  fontWeight: 300,
                  color: 'var(--text-secondary)',
                  lineHeight: 1.8,
                  maxWidth: 500,
                }}
              >
                {t('reviewsDemo.aspect.body')}
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
         4. RESPONSE AGENT (06-responses.png)
         ════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '100px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 1100 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
              gap: 56,
              alignItems: 'center',
            }}
            className="reviews-split"
          >
            <FadeUp>
              <span className="section-label">{t('reviewsDemo.respond.kicker')}</span>
              <h2
                className="font-serif italic"
                style={{
                  fontSize: 'clamp(26px, 3.2vw, 40px)',
                  lineHeight: 1.2,
                  color: 'var(--text)',
                  fontWeight: 400,
                  margin: '14px 0 22px',
                }}
              >
                {t('reviewsDemo.respond.title1')}
                <br />
                <span className="accent">{t('reviewsDemo.respond.titleAccent')}</span>
              </h2>
              <p
                className="font-sans"
                style={{
                  fontSize: 15,
                  fontWeight: 300,
                  color: 'var(--text-secondary)',
                  lineHeight: 1.8,
                  maxWidth: 500,
                  marginBottom: 20,
                }}
              >
                {t('reviewsDemo.respond.body')}
              </p>
              <p
                className="font-mono"
                style={{
                  fontSize: 11,
                  letterSpacing: 1.5,
                  color: 'var(--text-muted)',
                }}
              >
                {t('reviewsDemo.respond.footnote')}
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <MockupFigure
                src="/reviews/06-responses.png"
                alt="AI Response Agent configuration — brand voice, system prompt, learned examples"
                caption={t('reviewsDemo.respond.imgCaption')}
              />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
         5. 90-DAY PLAN (02-action-plan.png)
         ════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '100px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 1100 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
              gap: 56,
              alignItems: 'center',
            }}
            className="reviews-split"
          >
            <FadeUp delay={0.1}>
              <MockupFigure
                src="/reviews/02-action-plan.png"
                alt="90-day action plan generated from review data"
                caption={t('reviewsDemo.roadmap.imgCaption')}
              />
            </FadeUp>

            <FadeUp>
              <span className="section-label">{t('reviewsDemo.roadmap.kicker')}</span>
              <h2
                className="font-serif italic"
                style={{
                  fontSize: 'clamp(26px, 3.2vw, 40px)',
                  lineHeight: 1.2,
                  color: 'var(--text)',
                  fontWeight: 400,
                  margin: '14px 0 22px',
                }}
              >
                {t('reviewsDemo.roadmap.title1')}{' '}
                <span className="accent">{t('reviewsDemo.roadmap.titleAccent')}</span>
              </h2>
              <p
                className="font-sans"
                style={{
                  fontSize: 15,
                  fontWeight: 300,
                  color: 'var(--text-secondary)',
                  lineHeight: 1.8,
                  maxWidth: 500,
                  marginBottom: 18,
                }}
              >
                {t('reviewsDemo.roadmap.body1')}
              </p>
              <p
                className="font-sans"
                style={{
                  fontSize: 15,
                  fontWeight: 300,
                  color: 'var(--text-secondary)',
                  lineHeight: 1.8,
                  maxWidth: 500,
                }}
              >
                {t('reviewsDemo.roadmap.body2')}
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
         6. LIVE EVIDENCE — full-width (05-reviews-ai.png)
         ════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '100px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 1100 }}>
          <div style={{ marginBottom: 40, textAlign: 'center' }}>
            <FadeUp>
              <span className="section-label">{t('reviewsDemo.live.kicker')}</span>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h2
                className="font-serif italic"
                style={{
                  fontSize: 'clamp(26px, 3.2vw, 40px)',
                  lineHeight: 1.2,
                  color: 'var(--text)',
                  fontWeight: 400,
                  margin: '14px auto 0',
                  maxWidth: 780,
                }}
              >
                {t('reviewsDemo.live.title1')}{' '}
                <span className="accent">{t('reviewsDemo.live.titleAccent')}</span>
              </h2>
            </FadeUp>
          </div>

          <FadeUp delay={0.1}>
            <MockupFigure
              src="/reviews/05-reviews-ai.png"
              alt="One review decomposed — six aspects scored, AI summary, response CTA"
              caption={t('reviewsDemo.live.imgCaption')}
              fullWidth
            />
          </FadeUp>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
         7. HOW THE DEMO WORKS
         ════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '100px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 820 }}>
          <div style={{ marginBottom: 48, textAlign: 'center' }}>
            <FadeUp>
              <span className="section-label">{t('reviewsDemo.how.kicker')}</span>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h2
                className="font-serif italic"
                style={{
                  fontSize: 'clamp(26px, 3.2vw, 40px)',
                  lineHeight: 1.2,
                  color: 'var(--text)',
                  fontWeight: 400,
                  margin: '14px auto 0',
                  maxWidth: 620,
                }}
              >
                {t('reviewsDemo.how.title1')}{' '}
                <span className="accent">{t('reviewsDemo.how.titleAccent')}</span>
              </h2>
            </FadeUp>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            <HowStep n={1} title={t('reviewsDemo.how.s1.title')} desc={t('reviewsDemo.how.s1.desc')} />
            <HowStep n={2} title={t('reviewsDemo.how.s2.title')} desc={t('reviewsDemo.how.s2.desc')} />
            <HowStep n={3} title={t('reviewsDemo.how.s3.title')} desc={t('reviewsDemo.how.s3.desc')} />
            <HowStep n={4} title={t('reviewsDemo.how.s4.title')} desc={t('reviewsDemo.how.s4.desc')} />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
         8. FAQ
         ════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '100px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 820 }}>
          <div style={{ marginBottom: 48, textAlign: 'center' }}>
            <FadeUp>
              <span className="section-label">{t('reviewsDemo.faq.kicker')}</span>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h2
                className="font-serif italic"
                style={{
                  fontSize: 'clamp(24px, 3vw, 36px)',
                  lineHeight: 1.2,
                  color: 'var(--text)',
                  fontWeight: 400,
                  margin: '14px 0 0',
                }}
              >
                {t('reviewsDemo.faq.title1')}{' '}
                <span className="accent">{t('reviewsDemo.faq.titleAccent')}</span>
              </h2>
            </FadeUp>
          </div>

          <FaqItem q={t('reviewsDemo.faq.q1')} a={t('reviewsDemo.faq.a1')} delay={0} />
          <FaqItem q={t('reviewsDemo.faq.q2')} a={t('reviewsDemo.faq.a2')} delay={0.05} />
          <FaqItem q={t('reviewsDemo.faq.q3')} a={t('reviewsDemo.faq.a3')} delay={0.1} />
          <FaqItem q={t('reviewsDemo.faq.q4')} a={t('reviewsDemo.faq.a4')} delay={0.15} />
          <FaqItem q={t('reviewsDemo.faq.q5')} a={t('reviewsDemo.faq.a5')} delay={0.2} />
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
         9. FINAL CTA RIBBON
         ════════════════════════════════════════════════════════════ */}
      <section
        style={{
          padding: '120px 24px',
          background: 'var(--accent-subtle)',
          borderTop: '1px solid rgba(230,57,70,0.12)',
          borderBottom: '1px solid rgba(230,57,70,0.12)',
          textAlign: 'center',
        }}
      >
        <div className="mx-auto" style={{ maxWidth: 820 }}>
          <FadeUp>
            <h2
              className="font-serif italic"
              style={{
                fontSize: 'clamp(28px, 4vw, 52px)',
                lineHeight: 1.15,
                color: 'var(--text)',
                fontWeight: 400,
                marginBottom: 36,
              }}
            >
              {t('reviewsDemo.finalCta.title1')}
              <br />
              <span className="accent">{t('reviewsDemo.finalCta.titleAccent')}</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <button
              type="button"
              onClick={openRequest}
              className="btn-primary"
              style={{ fontSize: 15, padding: '20px 44px', border: 'none', cursor: 'pointer' }}
            >
              <span className="btn-primary-dot" />
              {t('reviewsDemo.finalCta.cta')} →
            </button>
          </FadeUp>
        </div>
      </section>

      <Footer />

      {/* Sticky mobile CTA */}
      <div
        className="reviews-sticky-mobile"
        style={{
          position: 'fixed',
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 60,
          padding: '12px 16px calc(12px + env(safe-area-inset-bottom))',
          background: 'var(--bg)',
          borderTop: '1px solid var(--border)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        }}
      >
        <button
          type="button"
          onClick={openRequest}
          className="btn-primary"
          style={{
            width: '100%',
            justifyContent: 'center',
            fontSize: 14,
            padding: '14px 20px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <span className="btn-primary-dot" />
          {t('reviewsDemo.stickyCta')} →
        </button>
      </div>

      <DemoRequestModal demo={requesting} onClose={() => setRequesting(null)} />

      <style>{`
        @media (max-width: 768px) {
          .reviews-split {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
        @media (min-width: 769px) {
          .reviews-sticky-mobile { display: none !important; }
        }
      `}</style>
    </main>
  )
}

/* ══════════════════════════════════════════════════════════════════
   Sub-components
   ══════════════════════════════════════════════════════════════════ */

function MockupFigure({
  src,
  alt,
  caption,
  fullWidth,
}: {
  src: string
  alt: string
  caption: string
  fullWidth?: boolean
}) {
  return (
    <figure style={{ margin: 0 }}>
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={1000}
        loading="lazy"
        style={{
          width: '100%',
          maxWidth: fullWidth ? '100%' : 900,
          height: 'auto',
          borderRadius: 16,
          border: '1px solid var(--border)',
          boxShadow: '0 40px 80px -30px rgba(0,0,0,0.4)',
          display: 'block',
        }}
      />
      <figcaption
        className="font-sans"
        style={{
          marginTop: 14,
          fontSize: 12,
          fontWeight: 300,
          color: 'var(--text-muted)',
          lineHeight: 1.55,
          textAlign: 'center',
          maxWidth: 720,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        {caption}
      </figcaption>
    </figure>
  )
}

function InsideCard({ label, desc, delay }: { label: string; desc: string; delay: number }) {
  return (
    <FadeUp delay={delay}>
      <div
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: 16,
          padding: '32px 28px',
          height: '100%',
        }}
      >
        <p
          className="font-mono"
          style={{
            fontSize: 11,
            letterSpacing: 1.8,
            textTransform: 'uppercase',
            color: 'var(--accent)',
            marginBottom: 18,
            lineHeight: 1.4,
          }}
        >
          {label}
        </p>
        <p
          className="font-sans"
          style={{
            fontSize: 14,
            fontWeight: 300,
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
          }}
        >
          {desc}
        </p>
      </div>
    </FadeUp>
  )
}

function HowStep({ n, title, desc }: { n: number; title: string; desc: string }) {
  return (
    <div style={{ display: 'flex', gap: 22 }}>
      <span
        className="font-serif italic"
        style={{
          fontSize: 'clamp(44px, 5vw, 64px)',
          color: 'var(--text-muted)',
          lineHeight: 1,
          fontWeight: 400,
          opacity: 0.55,
          minWidth: 56,
        }}
      >
        0{n}
      </span>
      <div style={{ flex: 1, minWidth: 0, paddingTop: 8 }}>
        <p
          className="font-sans"
          style={{
            fontSize: 18,
            fontWeight: 500,
            color: 'var(--text)',
            lineHeight: 1.35,
            marginBottom: 6,
          }}
        >
          {title}
        </p>
        <p
          className="font-sans"
          style={{
            fontSize: 13,
            fontWeight: 300,
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            maxWidth: 520,
          }}
        >
          {desc}
        </p>
      </div>
    </div>
  )
}

function FaqItem({ q, a, delay }: { q: string; a: string; delay: number }) {
  const [open, setOpen] = useState(false)
  return (
    <FadeUp delay={delay}>
      <div style={{ borderBottom: '1px solid var(--border)' }}>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 20,
            padding: '22px 0',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            textAlign: 'left',
            fontFamily: 'var(--font-sans)',
            fontSize: 16,
            fontWeight: 500,
            color: 'var(--text)',
            lineHeight: 1.4,
          }}
        >
          <span>{q}</span>
          <span
            aria-hidden="true"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 18,
              color: 'var(--accent)',
              flexShrink: 0,
              transition: 'transform 0.3s',
              transform: open ? 'rotate(45deg)' : 'none',
              lineHeight: 1,
            }}
          >
            +
          </span>
        </button>
        {open && (
          <p
            className="font-sans"
            style={{
              fontSize: 14,
              fontWeight: 300,
              color: 'var(--text-secondary)',
              lineHeight: 1.75,
              paddingBottom: 22,
              maxWidth: 700,
            }}
          >
            {a}
          </p>
        )}
      </div>
    </FadeUp>
  )
}
