'use client'

import FadeUp from '@/components/ui/FadeUp'
import Link from 'next/link'

export default function StrategyCall() {
  return (
    <section id="strategy-call" style={{ padding: '120px 24px' }}>
      <div className="mx-auto" style={{ maxWidth: 700 }}>

        <FadeUp className="text-center">
          {/* Top pill */}
          <a
            href="/book"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '8px 20px', borderRadius: 100,
              border: '1px solid var(--border-hover)',
              background: 'var(--bg-card)',
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 1.5,
              textTransform: 'uppercase', textDecoration: 'none',
              marginBottom: 24, transition: 'all 0.3s',
            }}
          >
            Réserver un appel de 30 minutes
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" /><path d="M12 8l4 4-4 4M8 12h8" />
            </svg>
          </a>

          {/* Title */}
          <h2
            className="section-title"
            style={{ maxWidth: 600, margin: '24px auto 24px' }}
          >
            Réservez votre{' '}
            <span className="accent">appel stratégique.</span>
          </h2>

          {/* Founder photo + name */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16, marginBottom: 32 }}>
            <div style={{
              width: 56, height: 56, borderRadius: '50%',
              background: 'var(--accent-subtle)', border: '2px solid var(--accent)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-serif)', fontStyle: 'italic',
              fontSize: 22, color: 'var(--accent)',
            }}>
              N
            </div>
            <div style={{ textAlign: 'left' }}>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 600, color: 'var(--text)' }}>
                Nathan Goutagny
              </p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: 1 }}>
                FONDATEUR · NATESYSTEM
              </p>
            </div>
          </div>

          {/* Subtitle */}
          <p style={{
            fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 300,
            color: 'var(--text-secondary)', lineHeight: 1.7,
            maxWidth: 500, margin: '0 auto 40px',
          }}>
            Pour les entreprises qui veulent{' '}
            <strong style={{ fontWeight: 600, color: 'var(--text)' }}>
              rendre leurs opérations autonomes
            </strong>
            {' '}grâce à l&apos;IA — sans recruter et sans dépendre d&apos;un SaaS.
          </p>
        </FadeUp>

        {/* CTA Card */}
        <FadeUp delay={0.15}>
          <div style={{
            background: 'var(--bg-card)', border: '1px solid var(--border)',
            borderRadius: 16, padding: '40px 32px', textAlign: 'center',
          }}>
            {/* Email + CTA row */}
            <a
              href="/book"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 12,
                padding: '16px 40px',
                background: 'var(--accent)', color: '#fff',
                fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 600,
                borderRadius: 12, textDecoration: 'none',
                transition: 'all 0.3s', letterSpacing: 0.3,
                boxShadow: '0 4px 16px rgba(230,57,70,0.25)',
              }}
              className="strategy-cta-hover"
            >
              Réserver mon appel stratégique gratuit
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            {/* What the call includes */}
            <div style={{
              display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 24,
              marginTop: 32, paddingTop: 24, borderTop: '1px solid var(--border)',
            }}>
              {[
                'Analyse de vos outils actuels',
                'Identification des quick wins',
                'Plan d\'action personnalisé',
                'Recommandations concrètes',
              ].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--text-secondary)', fontWeight: 400 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Bottom reassurance */}
        <FadeUp delay={0.25} className="text-center">
          <p style={{
            fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 300,
            color: 'var(--text-muted)', marginTop: 20, lineHeight: 1.6,
          }}>
            30 min · Gratuit · Sans engagement · Nathan répond sous 24h
          </p>
        </FadeUp>
      </div>

      <style>{`
        .strategy-cta-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(230,57,70,0.35);
        }
      `}</style>
    </section>
  )
}
