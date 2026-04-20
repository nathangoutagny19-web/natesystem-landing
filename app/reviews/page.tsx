/**
 * /reviews — NateSystem · Reviews agency landing.
 *
 * Structure follows the brief in nate-reviews-assets/PROMPT.md:
 *   1. Hero (with 01-reputation-score.png + red glow)
 *   2. Problem (3 number cards)
 *   3. What's inside (6 features, two-column, 03-reviews-feed.png)
 *   4. Roadmap (02-action-plan.png)
 *   5. €790 audit ribbon (04-audit-pdf.png)
 *   6. Proof numbers + analytics (05-analytics.png)
 *   7. How it works (4 steps, 06-response-draft.png)
 *   8. FAQ (5 items)
 *   9. Final CTA ribbon
 *
 * Sticky mobile "Book a free audit" bar at the bottom.
 *
 * Every mockup lives in /public/reviews/ (copied from /nate-reviews-assets/).
 * Do NOT rename or crop them — they are designed at 1600×1000 with deliberate padding.
 */

'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'
import { CAL_LINK } from '@/lib/constants'

export default function ReviewsPage() {
  const { t } = useLang()

  return (
    <main style={{ background: 'var(--bg)' }}>
      <Nav />

      {/* ════════════════════════════════════════════════════════════
         1. HERO
         ════════════════════════════════════════════════════════════ */}
      <section
        style={{
          position: 'relative',
          padding: '160px 24px 100px',
          minHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <FadeUp>
          <span className="section-label" style={{ letterSpacing: 3 }}>
            {t('reviews.kicker')}
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
            {t('reviews.hero.title1')}{' '}
            <span className="accent">{t('reviews.hero.titleAccent')}</span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.16}>
          <p
            className="font-sans"
            style={{
              fontSize: 'clamp(15px, 1.6vw, 17px)',
              fontWeight: 300,
              color: 'var(--text-secondary)',
              maxWidth: 600,
              lineHeight: 1.7,
              margin: '0 auto 36px',
            }}
          >
            {t('reviews.hero.sub')}
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
            <Link
              href={CAL_LINK}
              className="btn-primary"
              style={{ fontSize: 14 }}
            >
              <span className="btn-primary-dot" />
              {t('reviews.hero.ctaPrimary')} →
            </Link>
            <a
              href="#features"
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
              {t('reviews.hero.ctaGhost')}
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
              textTransform: 'none',
            }}
          >
            {t('reviews.hero.socialProof')}
          </p>
        </FadeUp>

        {/* Hero image — 01-reputation-score.png with subtle red glow behind */}
        <FadeUp delay={0.4}>
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: 980,
              margin: '0 auto',
            }}
          >
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
              alt="Reputation score dashboard"
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
         2. PROBLEM
         ════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '100px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 1100 }}>
          <div style={{ marginBottom: 56, textAlign: 'center' }}>
            <FadeUp>
              <span className="section-label">{t('reviews.problem.kicker')}</span>
            </FadeUp>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 20,
            }}
          >
            <ProblemCard
              value={t('reviews.problem.a.value')}
              title={t('reviews.problem.a.title')}
              desc={t('reviews.problem.a.desc')}
              delay={0}
            />
            <ProblemCard
              value={t('reviews.problem.b.value')}
              title={t('reviews.problem.b.title')}
              desc={t('reviews.problem.b.desc')}
              delay={0.08}
            />
            <ProblemCard
              value={t('reviews.problem.c.value')}
              title={t('reviews.problem.c.title')}
              desc={t('reviews.problem.c.desc')}
              delay={0.16}
            />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
         3. WHAT'S INSIDE
         ════════════════════════════════════════════════════════════ */}
      <section id="features" style={{ padding: '100px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 1100 }}>
          <div style={{ marginBottom: 64, textAlign: 'center' }}>
            <FadeUp>
              <span className="section-label">{t('reviews.features.kicker')}</span>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h2
                className="font-serif italic"
                style={{
                  fontSize: 'clamp(26px, 3.2vw, 40px)',
                  lineHeight: 1.2,
                  maxWidth: 780,
                  margin: '14px auto 0',
                  color: 'var(--text)',
                  fontWeight: 400,
                }}
              >
                {t('reviews.features.title1')}
                <br />
                <span className="accent">{t('reviews.features.title2')}</span>
              </h2>
            </FadeUp>
          </div>

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
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <FeatureRow title={t('reviews.features.f1.title')} desc={t('reviews.features.f1.desc')} />
                <FeatureRow title={t('reviews.features.f2.title')} desc={t('reviews.features.f2.desc')} />
                <FeatureRow title={t('reviews.features.f3.title')} desc={t('reviews.features.f3.desc')} />
                <FeatureRow title={t('reviews.features.f4.title')} desc={t('reviews.features.f4.desc')} />
                <FeatureRow title={t('reviews.features.f5.title')} desc={t('reviews.features.f5.desc')} />
                <FeatureRow title={t('reviews.features.f6.title')} desc={t('reviews.features.f6.desc')} last />
              </ul>
            </FadeUp>

            <FadeUp delay={0.12}>
              <MockupFigure
                src="/reviews/03-reviews-feed.png"
                alt="Reviews feed"
                caption={t('reviews.features.imgCaption')}
              />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
         4. ROADMAP
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
              <span className="section-label">{t('reviews.roadmap.kicker')}</span>
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
                {t('reviews.roadmap.title1')}{' '}
                <span className="accent">{t('reviews.roadmap.titleAccent')}</span>
              </h2>
              <p
                className="font-sans"
                style={{
                  fontSize: 15,
                  fontWeight: 300,
                  color: 'var(--text-secondary)',
                  lineHeight: 1.8,
                  maxWidth: 480,
                }}
              >
                {t('reviews.roadmap.body')}
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <MockupFigure
                src="/reviews/02-action-plan.png"
                alt="90-day action plan"
                caption={t('reviews.roadmap.imgCaption')}
              />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
         5. €790 AUDIT RIBBON — conversion accelerator
         ════════════════════════════════════════════════════════════ */}
      <section
        style={{
          padding: '100px 24px',
          background: 'var(--accent-subtle)',
          borderTop: '1px solid rgba(230,57,70,0.12)',
          borderBottom: '1px solid rgba(230,57,70,0.12)',
        }}
      >
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
              <span className="section-label" style={{ color: 'var(--accent)' }}>
                {t('reviews.audit.kicker')}
              </span>
              <h2
                className="font-serif italic"
                style={{
                  fontSize: 'clamp(30px, 3.8vw, 48px)',
                  lineHeight: 1.15,
                  color: 'var(--text)',
                  fontWeight: 400,
                  margin: '14px 0 20px',
                }}
              >
                {t('reviews.audit.title1')}{' '}
                <span className="accent">{t('reviews.audit.titleAccent')}</span>
              </h2>
              <p
                className="font-sans"
                style={{
                  fontSize: 16,
                  fontWeight: 300,
                  color: 'var(--text-secondary)',
                  lineHeight: 1.75,
                  maxWidth: 560,
                  marginBottom: 28,
                }}
              >
                {t('reviews.audit.body')}
              </p>
              <Link href={CAL_LINK} className="btn-primary" style={{ fontSize: 14 }}>
                <span className="btn-primary-dot" />
                {t('reviews.audit.cta')} →
              </Link>
            </FadeUp>

            <FadeUp delay={0.12}>
              <MockupFigure
                src="/reviews/04-audit-pdf.png"
                alt="Sample €790 audit PDF"
                caption={t('reviews.audit.imgCaption')}
              />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
         6. PROOF NUMBERS + ANALYTICS
         ════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '100px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 1100 }}>
          <div style={{ marginBottom: 56, textAlign: 'center' }}>
            <FadeUp>
              <span className="section-label">{t('reviews.proof.kicker')}</span>
            </FadeUp>
          </div>

          <FadeUp>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: 0,
                border: '1px solid var(--border)',
                borderRadius: 16,
                overflow: 'hidden',
                background: 'var(--bg-card)',
                marginBottom: 48,
              }}
            >
              <StatCell value={t('reviews.proof.a.value')} label={t('reviews.proof.a.label')} />
              <StatCell value={t('reviews.proof.b.value')} label={t('reviews.proof.b.label')} bordered />
              <StatCell value={t('reviews.proof.c.value')} label={t('reviews.proof.c.label')} bordered />
              <StatCell value={t('reviews.proof.d.value')} label={t('reviews.proof.d.label')} bordered />
            </div>
          </FadeUp>

          <FadeUp delay={0.12}>
            <MockupFigure
              src="/reviews/05-analytics.png"
              alt="Monthly analytics dashboard"
              caption={t('reviews.proof.imgCaption')}
              fullWidth
            />
          </FadeUp>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
         7. HOW IT WORKS
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
              <span className="section-label">{t('reviews.how.kicker')}</span>
              <h2
                className="font-serif italic"
                style={{
                  fontSize: 'clamp(26px, 3.2vw, 40px)',
                  lineHeight: 1.2,
                  color: 'var(--text)',
                  fontWeight: 400,
                  margin: '14px 0 32px',
                }}
              >
                {t('reviews.how.title1')}{' '}
                <span className="accent">{t('reviews.how.titleAccent')}</span>
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                <HowStep n={1} title={t('reviews.how.s1.title')} desc={t('reviews.how.s1.desc')} />
                <HowStep n={2} title={t('reviews.how.s2.title')} desc={t('reviews.how.s2.desc')} />
                <HowStep n={3} title={t('reviews.how.s3.title')} desc={t('reviews.how.s3.desc')} />
                <HowStep n={4} title={t('reviews.how.s4.title')} desc={t('reviews.how.s4.desc')} />
              </div>
            </FadeUp>

            <FadeUp delay={0.12}>
              <MockupFigure
                src="/reviews/06-response-draft.png"
                alt="Response drafting screen"
                caption={t('reviews.how.imgCaption')}
              />
            </FadeUp>
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
              <span className="section-label">{t('reviews.faq.kicker')}</span>
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
                {t('reviews.faq.title1')}{' '}
                <span className="accent">{t('reviews.faq.titleAccent')}</span>
              </h2>
            </FadeUp>
          </div>

          <FaqItem q={t('reviews.faq.q1')} a={t('reviews.faq.a1')} delay={0} />
          <FaqItem q={t('reviews.faq.q2')} a={t('reviews.faq.a2')} delay={0.05} />
          <FaqItem q={t('reviews.faq.q3')} a={t('reviews.faq.a3')} delay={0.1} />
          <FaqItem q={t('reviews.faq.q4')} a={t('reviews.faq.a4')} delay={0.15} />
          <FaqItem q={t('reviews.faq.q5')} a={t('reviews.faq.a5')} delay={0.2} />
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
              {t('reviews.finalCta.title1')}
              <br />
              <span className="accent">{t('reviews.finalCta.titleAccent')}</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <Link href={CAL_LINK} className="btn-primary" style={{ fontSize: 15, padding: '20px 44px' }}>
              <span className="btn-primary-dot" />
              {t('reviews.finalCta.cta')} →
            </Link>
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
        <Link
          href={CAL_LINK}
          className="btn-primary"
          style={{
            width: '100%',
            justifyContent: 'center',
            fontSize: 14,
            padding: '14px 20px',
          }}
        >
          <span className="btn-primary-dot" />
          {t('reviews.stickyCta')} →
        </Link>
      </div>

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
          lineHeight: 1.5,
          textAlign: 'center',
        }}
      >
        {caption}
      </figcaption>
    </figure>
  )
}

function ProblemCard({
  value,
  title,
  desc,
  delay,
}: {
  value: string
  title: string
  desc: string
  delay: number
}) {
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
          className="font-serif italic"
          style={{
            fontSize: 'clamp(40px, 5vw, 56px)',
            color: 'var(--accent)',
            lineHeight: 1,
            marginBottom: 20,
            fontWeight: 400,
          }}
        >
          {value}
        </p>
        <p
          className="font-sans"
          style={{
            fontSize: 18,
            fontWeight: 500,
            color: 'var(--text)',
            lineHeight: 1.4,
            marginBottom: 10,
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
          }}
        >
          {desc}
        </p>
      </div>
    </FadeUp>
  )
}

function FeatureRow({
  title,
  desc,
  last,
}: {
  title: string
  desc: string
  last?: boolean
}) {
  return (
    <li
      style={{
        display: 'flex',
        gap: 16,
        paddingBottom: last ? 0 : 20,
        marginBottom: last ? 0 : 20,
        borderBottom: last ? 'none' : '1px solid var(--border)',
      }}
    >
      <span
        aria-hidden="true"
        style={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: 'var(--accent)',
          flexShrink: 0,
          marginTop: 8,
        }}
      />
      <div style={{ flex: 1, minWidth: 0 }}>
        <p
          className="font-sans"
          style={{
            fontSize: 16,
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
            lineHeight: 1.65,
          }}
        >
          {desc}
        </p>
      </div>
    </li>
  )
}

function StatCell({
  value,
  label,
  bordered,
}: {
  value: string
  label: string
  bordered?: boolean
}) {
  return (
    <div
      style={{
        padding: '32px 20px',
        borderLeft: bordered ? '1px solid var(--border)' : 'none',
        textAlign: 'center',
      }}
    >
      <p
        className="font-serif italic"
        style={{
          fontSize: 'clamp(28px, 4vw, 44px)',
          color: 'var(--accent)',
          lineHeight: 1.1,
          marginBottom: 10,
          fontWeight: 400,
        }}
      >
        {value}
      </p>
      <p
        className="font-sans"
        style={{
          fontSize: 12,
          fontWeight: 300,
          color: 'var(--text-muted)',
          lineHeight: 1.5,
          maxWidth: 220,
          margin: '0 auto',
        }}
      >
        {label}
      </p>
    </div>
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
            maxWidth: 420,
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
      <div
        style={{
          borderBottom: '1px solid var(--border)',
        }}
      >
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
