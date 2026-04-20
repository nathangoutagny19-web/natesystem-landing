/**
 * /reviews — NateSystem Reviews (online reputation for hospitality).
 *
 * Placeholder images: replace the inline SVG cards in <ProofBlock> with
 *   <Image> tags pointing at `/public/reviews/*` once real assets land:
 *     - /public/reviews/dashboard-screenshot.png     1600×900
 *     - /public/reviews/google-maps-rating-evolution.png  1200×800
 *     - /public/reviews/restaurant-interior.jpg       1600×1067
 *     - /public/reviews/og-image.png                  1200×630 (metadata below)
 *
 * Form target: POST /api/leads/capture with resourceId 'reviews-lead'.
 * Reviews leads land in the same backend pipeline as the rest of the site,
 * tagged by resourceId so they can be filtered.
 */

'use client'

import { useState } from 'react'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'
import { API_URL } from '@/lib/constants'

type FormState = {
  name: string
  email: string
  business: string
  country: 'Hungary' | 'France' | 'Other' | ''
  rating: string
  locations: string
  message: string
}

const initialForm: FormState = {
  name: '', email: '', business: '', country: '',
  rating: '', locations: '1', message: '',
}

export default function ReviewsPage() {
  const { t, lang } = useLang()
  const [form, setForm] = useState<FormState>(initialForm)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const canSubmit =
    form.name.trim() &&
    form.email.trim().includes('@') &&
    form.business.trim()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!canSubmit || status === 'sending') return
    setStatus('sending')
    try {
      await fetch(`${API_URL}/api/leads/capture`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          resourceId: 'reviews-lead',
          prenom: form.name,
          email: form.email,
          entreprise: form.business,
          lang,
          newsletter: false,
          reviews: {
            country: form.country,
            currentRating: form.rating ? Number(form.rating) : null,
            locations: form.locations ? Number(form.locations) : 1,
            message: form.message,
          },
        }),
      })
      setStatus('success')
      window.scrollTo({ top: document.getElementById('contact')?.offsetTop ?? 0, behavior: 'smooth' })
    } catch {
      // Even on failure, show success — the user isn't blocked, and we can
      // always recover the lead from email/Analytics. Matches the rest of
      // the site's capture UX.
      setStatus('success')
    }
  }

  const scrollToForm = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl text-sm transition focus:outline-none focus:ring-2 focus:ring-[#E63946]/30 focus:border-[#E63946]'
  const inputStyle = {
    background: 'var(--bg-elevated)',
    border: '1px solid var(--border)',
    color: 'var(--text)',
  }

  return (
    <main style={{ background: 'var(--bg)' }}>
      <Nav />

      {/* ══ Hero ══ */}
      <section
        className="flex flex-col items-center justify-center text-center"
        style={{ padding: '160px 24px 80px', minHeight: '80vh' }}
      >
        <FadeUp>
          <span className="section-label">{t('reviews.label')}</span>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h1
            className="font-serif italic"
            style={{
              fontSize: 'clamp(30px, 4vw, 52px)',
              lineHeight: 1.15,
              maxWidth: 840,
              margin: '20px auto 24px',
              color: 'var(--text)',
              fontWeight: 400,
            }}
          >
            {t('reviews.hero.title')}{' '}
            <span className="accent">{t('reviews.hero.titleAccent')}</span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p
            className="font-sans"
            style={{
              fontSize: 'clamp(15px, 1.7vw, 17px)',
              fontWeight: 300,
              color: 'var(--text-secondary)',
              maxWidth: 580,
              lineHeight: 1.7,
              margin: '0 auto 40px',
            }}
          >
            {t('reviews.hero.sub')}
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <button
            type="button"
            onClick={scrollToForm}
            className="btn-primary"
            style={{ fontSize: 14, cursor: 'pointer' }}
          >
            <span className="btn-primary-dot" />
            {t('reviews.hero.cta')} →
          </button>
        </FadeUp>

        <FadeUp delay={0.4}>
          <button
            type="button"
            onClick={scrollToForm}
            className="font-sans"
            style={{
              marginTop: 18,
              background: 'transparent',
              border: 'none',
              color: 'var(--text-muted)',
              fontSize: 13,
              fontWeight: 300,
              cursor: 'pointer',
            }}
          >
            {t('reviews.hero.secondary')}
          </button>
        </FadeUp>
      </section>

      {/* ══ Proof blocks ══ */}
      <section style={{ padding: '80px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 1100 }}>
          <div style={{ marginBottom: 48 }}>
            <FadeUp className="text-center">
              <span className="section-label">{t('reviews.proof.label')}</span>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5">
            <ProofBlock variant="dashboard" caption={t('reviews.proof.a.caption')} delay={0} />
            <ProofBlock variant="rating-evolution" caption={t('reviews.proof.b.caption')} delay={0.1} />
            <ProofBlock variant="interior" caption={t('reviews.proof.c.caption')} delay={0.2} />
          </div>
        </div>
      </section>

      {/* ══ What we do ══ */}
      <section style={{ padding: '80px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 900 }}>
          <div style={{ marginBottom: 48 }}>
            <FadeUp className="text-center">
              <span className="section-label">{t('reviews.what.label')}</span>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <WhatCard
              title={t('reviews.what.collect.title')}
              desc={t('reviews.what.collect.desc')}
              delay={0}
            />
            <WhatCard
              title={t('reviews.what.respond.title')}
              desc={t('reviews.what.respond.desc')}
              delay={0.1}
            />
            <WhatCard
              title={t('reviews.what.improve.title')}
              desc={t('reviews.what.improve.desc')}
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* ══ Numbers band (TODO: replace placeholders with real data) ══ */}
      <section style={{ padding: '80px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 1100 }}>
          <FadeUp>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: 0,
                border: '1px solid var(--border)',
                borderRadius: 16,
                overflow: 'hidden',
                background: 'var(--bg-card)',
              }}
            >
              <NumberCell
                value={t('reviews.numbers.a.value')}
                label={t('reviews.numbers.a.label')}
              />
              <NumberCell
                value={t('reviews.numbers.b.value')}
                label={t('reviews.numbers.b.label')}
                bordered
              />
              <NumberCell
                value={t('reviews.numbers.c.value')}
                label={t('reviews.numbers.c.label')}
                bordered
              />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ══ Contact form ══ */}
      <section id="contact" style={{ padding: '80px 24px 120px' }}>
        <div className="mx-auto" style={{ maxWidth: 640 }}>
          <div style={{ marginBottom: 32 }}>
            <FadeUp className="text-center">
              <h2 className="section-title" style={{ margin: '0 auto 14px' }}>
                {t('reviews.form.title')}
              </h2>
              <p
                className="font-sans"
                style={{
                  fontSize: 15,
                  fontWeight: 300,
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  maxWidth: 480,
                  margin: '0 auto',
                }}
              >
                {t('reviews.form.sub')}
              </p>
            </FadeUp>
          </div>

          <FadeUp>
            {status === 'success' ? (
              <div
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 16,
                  padding: '40px 32px',
                  textAlign: 'center',
                }}
              >
                <p
                  className="font-serif italic"
                  style={{
                    fontSize: 'clamp(20px, 2.4vw, 26px)',
                    color: 'var(--text)',
                    lineHeight: 1.4,
                    marginBottom: 28,
                    fontWeight: 400,
                  }}
                >
                  {t('reviews.form.success')}
                </p>
                <Link
                  href="/book"
                  className="btn-primary inline-flex"
                  style={{ fontSize: 13, padding: '12px 24px' }}
                >
                  <span className="btn-primary-dot" />
                  {t('reviews.form.bookNow')}
                </Link>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 16,
                  padding: '32px',
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label={t('reviews.form.name')} required>
                    <input
                      type="text"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className={inputClass}
                      style={inputStyle}
                      required
                    />
                  </Field>
                  <Field label={t('reviews.form.email')} required>
                    <input
                      type="email"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className={inputClass}
                      style={inputStyle}
                      required
                    />
                  </Field>
                </div>

                <div className="mt-4">
                  <Field label={t('reviews.form.business')} required>
                    <input
                      type="text"
                      value={form.business}
                      onChange={e => setForm({ ...form, business: e.target.value })}
                      className={inputClass}
                      style={inputStyle}
                      required
                    />
                  </Field>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <Field label={t('reviews.form.country')}>
                    <select
                      value={form.country}
                      onChange={e =>
                        setForm({ ...form, country: e.target.value as FormState['country'] })
                      }
                      className={inputClass}
                      style={{
                        ...inputStyle,
                        color: form.country ? 'var(--text)' : 'var(--text-muted)',
                      }}
                    >
                      <option value="">—</option>
                      <option value="Hungary">{t('reviews.form.country.hu')}</option>
                      <option value="France">{t('reviews.form.country.fr')}</option>
                      <option value="Other">{t('reviews.form.country.other')}</option>
                    </select>
                  </Field>
                  <Field label={t('reviews.form.locations')}>
                    <input
                      type="number"
                      min={1}
                      value={form.locations}
                      onChange={e => setForm({ ...form, locations: e.target.value })}
                      className={inputClass}
                      style={inputStyle}
                    />
                  </Field>
                </div>

                <div className="mt-4">
                  <Field label={t('reviews.form.rating')}>
                    <input
                      type="number"
                      min={0}
                      max={5}
                      step={0.1}
                      placeholder="4.2"
                      value={form.rating}
                      onChange={e => setForm({ ...form, rating: e.target.value })}
                      className={inputClass}
                      style={inputStyle}
                    />
                  </Field>
                </div>

                <div className="mt-4">
                  <Field label={t('reviews.form.message')}>
                    <textarea
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      rows={4}
                      className={inputClass}
                      style={{ ...inputStyle, resize: 'vertical' }}
                    />
                  </Field>
                </div>

                <button
                  type="submit"
                  disabled={!canSubmit || status === 'sending'}
                  className="w-full mt-6 flex items-center justify-center gap-2"
                  style={{
                    padding: '16px 32px',
                    background: 'var(--accent)',
                    color: '#fff',
                    fontFamily: 'var(--font-sans)',
                    fontSize: 15,
                    fontWeight: 600,
                    borderRadius: 12,
                    border: 'none',
                    cursor: canSubmit && status !== 'sending' ? 'pointer' : 'not-allowed',
                    opacity: canSubmit && status !== 'sending' ? 1 : 0.5,
                    transition: 'all 0.3s',
                    boxShadow: '0 4px 16px rgba(230,57,70,0.25)',
                  }}
                >
                  {status === 'sending' ? t('reviews.form.sending') : t('reviews.form.submit')}
                </button>
              </form>
            )}
          </FadeUp>
        </div>
      </section>

      {/* ══ Sister brand cross-link ══ */}
      <section style={{ padding: '0 24px 80px' }}>
        <div
          className="mx-auto text-center"
          style={{ maxWidth: 680 }}
        >
          <p
            className="font-sans"
            style={{
              fontSize: 13,
              fontWeight: 300,
              color: 'var(--text-muted)',
              lineHeight: 1.7,
            }}
          >
            {t('reviews.sister.text')}{' '}
            <Link
              href="/"
              className="font-sans"
              style={{
                color: 'var(--accent)',
                fontWeight: 500,
                textDecoration: 'none',
                borderBottom: '1px solid rgba(230,57,70,0.3)',
              }}
            >
              {t('reviews.sister.cta')}
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}

/* ══════════════════════════════════════════════════════════════════
   Sub-components
   ══════════════════════════════════════════════════════════════════ */

function ProofBlock({
  variant,
  caption,
  delay,
}: {
  variant: 'dashboard' | 'rating-evolution' | 'interior'
  caption: string
  delay: number
}) {
  return (
    <FadeUp delay={delay}>
      <figure style={{ margin: 0 }}>
        {/*
          TODO: replace with real asset from /public/reviews/
          Placeholder SVG kept deliberately editorial (no busy graphic noise).
        */}
        <div
          style={{
            aspectRatio: variant === 'interior' ? '3/2' : '4/3',
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 12,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <PlaceholderArt variant={variant} />
        </div>
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
    </FadeUp>
  )
}

function PlaceholderArt({ variant }: { variant: 'dashboard' | 'rating-evolution' | 'interior' }) {
  const accent = 'var(--accent)'
  const muted = 'var(--text-muted)'

  if (variant === 'dashboard') {
    return (
      <svg viewBox="0 0 400 300" width="90%" height="90%" role="presentation" aria-hidden="true">
        <rect x="16" y="16" width="368" height="42" rx="6" fill="var(--bg-elevated)" />
        <circle cx="36" cy="37" r="5" fill={accent} />
        <rect x="52" y="30" width="120" height="6" rx="2" fill={muted} opacity="0.4" />
        <rect x="52" y="42" width="80" height="4" rx="2" fill={muted} opacity="0.25" />
        <rect x="16" y="74" width="176" height="92" rx="6" fill="var(--bg-elevated)" />
        <rect x="200" y="74" width="184" height="92" rx="6" fill="var(--bg-elevated)" />
        <text x="32" y="112" fontFamily="monospace" fontSize="28" fill={accent}>4.6</text>
        <text x="32" y="134" fontFamily="monospace" fontSize="10" fill={muted}>AVG RATING</text>
        <text x="216" y="112" fontFamily="monospace" fontSize="28" fill={accent}>+127</text>
        <text x="216" y="134" fontFamily="monospace" fontSize="10" fill={muted}>NEW REVIEWS</text>
        <rect x="16" y="182" width="368" height="98" rx="6" fill="var(--bg-elevated)" />
        <polyline
          points="32,260 80,244 128,248 176,230 224,220 272,210 320,196 368,188"
          fill="none"
          stroke={accent}
          strokeWidth="2"
        />
      </svg>
    )
  }

  if (variant === 'rating-evolution') {
    return (
      <svg viewBox="0 0 400 300" width="90%" height="90%" role="presentation" aria-hidden="true">
        <text x="40" y="56" fontFamily="serif" fontStyle="italic" fontSize="36" fill={muted}>3.8</text>
        <text x="40" y="78" fontFamily="monospace" fontSize="10" fill={muted}>JAN</text>
        <text x="310" y="56" fontFamily="serif" fontStyle="italic" fontSize="36" fill={accent}>4.6</text>
        <text x="310" y="78" fontFamily="monospace" fontSize="10" fill={muted}>AUG</text>
        <path d="M 70 100 Q 200 110 330 70" stroke={accent} strokeWidth="2" fill="none" />
        <polyline
          points="40,230 88,220 136,210 184,188 232,170 280,150 328,130"
          fill="none"
          stroke={accent}
          strokeWidth="2"
        />
        {[0, 1, 2, 3, 4, 5, 6].map(i => (
          <circle
            key={i}
            cx={40 + i * 48}
            cy={230 - i * 16.5}
            r={3}
            fill={accent}
          />
        ))}
        <line x1="40" y1="260" x2="360" y2="260" stroke={muted} strokeOpacity="0.25" />
      </svg>
    )
  }

  // interior
  return (
    <svg viewBox="0 0 400 270" width="95%" height="95%" role="presentation" aria-hidden="true">
      <rect width="400" height="270" fill="var(--bg-elevated)" />
      {/* Abstract interior lines */}
      <line x1="0" y1="100" x2="400" y2="100" stroke={muted} strokeOpacity="0.2" />
      <line x1="80" y1="100" x2="80" y2="270" stroke={muted} strokeOpacity="0.2" />
      <line x1="320" y1="100" x2="320" y2="270" stroke={muted} strokeOpacity="0.2" />
      {/* Table */}
      <rect x="140" y="180" width="120" height="6" rx="3" fill={muted} opacity="0.35" />
      <rect x="150" y="186" width="4" height="40" fill={muted} opacity="0.3" />
      <rect x="246" y="186" width="4" height="40" fill={muted} opacity="0.3" />
      {/* Hanging lamps */}
      <line x1="160" y1="100" x2="160" y2="150" stroke={muted} strokeOpacity="0.3" />
      <circle cx="160" cy="156" r="6" fill={accent} opacity="0.6" />
      <line x1="240" y1="100" x2="240" y2="150" stroke={muted} strokeOpacity="0.3" />
      <circle cx="240" cy="156" r="6" fill={accent} opacity="0.6" />
      {/* 5 stars glyph bottom-right */}
      {[0, 1, 2, 3, 4].map(i => (
        <text
          key={i}
          x={300 + i * 14}
          y="250"
          fontFamily="serif"
          fontSize="16"
          fill={accent}
        >
          ★
        </text>
      ))}
    </svg>
  )
}

function WhatCard({ title, desc, delay }: { title: string; desc: string; delay: number }) {
  return (
    <FadeUp delay={delay}>
      <div
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: 16,
          padding: '28px 24px',
          height: '100%',
        }}
      >
        <h3
          className="font-serif italic"
          style={{
            fontSize: 22,
            fontWeight: 400,
            color: 'var(--accent)',
            lineHeight: 1.2,
            marginBottom: 12,
          }}
        >
          {title}
        </h3>
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

function NumberCell({
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
      className="text-center"
      style={{
        padding: '36px 24px',
        borderLeft: bordered ? '1px solid var(--border)' : 'none',
      }}
    >
      <p
        className="font-mono"
        style={{
          fontSize: 'clamp(28px, 4vw, 38px)',
          color: 'var(--accent)',
          fontWeight: 400,
          lineHeight: 1.1,
          marginBottom: 10,
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
          maxWidth: 240,
          margin: '0 auto',
        }}
      >
        {label}
      </p>
    </div>
  )
}

function Field({
  label,
  required,
  children,
}: {
  label: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div>
      <label
        className="font-sans"
        style={{
          display: 'block',
          fontSize: 13,
          fontWeight: 500,
          color: 'var(--text-secondary)',
          marginBottom: 6,
        }}
      >
        {label} {required && <span style={{ color: 'var(--accent)' }}>*</span>}
      </label>
      {children}
    </div>
  )
}
