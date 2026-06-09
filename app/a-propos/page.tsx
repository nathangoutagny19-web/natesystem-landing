'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Mail } from 'lucide-react'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import MobileCta from '@/components/layout/MobileCta'
import Divider from '@/components/ui/Divider'
import FadeUp from '@/components/ui/FadeUp'
import { CAL_LINK } from '@/lib/constants'

function LinkedInIcon({ size = 15 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  )
}

// Credibility points reflect real, documented deployments (see case studies).
const proof = [
  { k: 'Lyon, France', v: 'Basé à Lyon · interventions FR & HU' },
  { k: 'Restauration', v: 'Cockpit ops & KPI, contrôle de factures, RH, réputation — groupe Chromosome (×11 sur le temps de pilotage hebdo)' },
  { k: 'Enseignement supérieur', v: 'CRM pédagogique, 200+ étudiants suivis, 90 %+ d\'adoption' },
  { k: 'Conseil & événementiel', v: 'Relance commerciale automatisée, gestion d\'équipes & bénévoles' },
]

export default function AProposPage() {
  return (
    <main>
      <Nav />

      {/* Hero */}
      <section style={{ padding: '160px 24px 40px' }}>
        <div className="mx-auto" style={{ maxWidth: 880 }}>
          <FadeUp className="text-center mb-2">
            <span className="section-label">Qui construit</span>
            <h1
              className="font-serif italic"
              style={{
                fontSize: 'clamp(32px, 5.5vw, 52px)',
                fontWeight: 400,
                lineHeight: 1.1,
                color: 'var(--text)',
                maxWidth: 720,
                margin: '14px auto 0',
              }}
            >
              Nathan Goutagny.{' '}
              <span className="accent">Un seul opérateur, des déploiements concrets.</span>
            </h1>
          </FadeUp>
        </div>
      </section>

      {/* Profile card */}
      <section style={{ padding: '24px 24px 60px' }}>
        <div className="mx-auto" style={{ maxWidth: 880 }}>
          <FadeUp delay={0.1}>
            <article
              className="apropos-card"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 14,
                padding: 36,
                display: 'grid',
                gridTemplateColumns: '140px 1fr',
                gap: 32,
                alignItems: 'flex-start',
              }}
            >
              <div style={{ width: 140, height: 140, borderRadius: '50%', overflow: 'hidden', border: '1px solid var(--border)', position: 'relative', flexShrink: 0 }}>
                <Image src="/nathan.png" alt="Nathan Goutagny, fondateur de NateSystem" fill sizes="140px" style={{ objectFit: 'cover' }} priority />
              </div>

              <div>
                <p className="font-mono" style={{ fontSize: 11, letterSpacing: 1.8, color: 'var(--accent)', textTransform: 'uppercase', margin: '0 0 16px', fontWeight: 500 }}>
                  Fondateur · Logiciel sur-mesure · IA appliquée · Lyon
                </p>
                <p className="font-sans" style={{ fontSize: 15.5, color: 'var(--text-secondary)', lineHeight: 1.75, fontWeight: 300, margin: '0 0 16px' }}>
                  Ingénieur formé au croisement du software et de l&apos;IA appliquée. Des années à construire des systèmes
                  opérationnels pour des PME françaises et hongroises — restauration, enseignement supérieur, conseil.
                  Une conviction simple : le logiciel qui appartient à l&apos;entreprise vaut mieux que dix SaaS qu&apos;elle loue à vie.
                </p>
                <p className="font-sans" style={{ fontSize: 14, color: 'var(--text)', fontWeight: 500, fontStyle: 'italic', borderLeft: '2px solid var(--accent)', paddingLeft: 14, margin: '0 0 22px', lineHeight: 1.6 }}>
                  Si vous me parlez, c&apos;est moi qui code derrière. Pas un commercial, pas un junior.
                </p>
                <div className="flex gap-3 items-center flex-wrap">
                  <a href="https://www.linkedin.com/in/nathan-goutagny" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Nathan Goutagny" className="apropos-link" style={linkStyle}>
                    <LinkedInIcon size={15} /><span>LinkedIn</span>
                  </a>
                  <a href="mailto:nathan@natesystem.com" aria-label="Email Nathan" className="apropos-link" style={linkStyle}>
                    <Mail size={15} strokeWidth={1.8} /><span>nathan@natesystem.com</span>
                  </a>
                </div>
              </div>
            </article>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* Proof / expertise */}
      <section style={{ padding: '80px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 880 }}>
          <FadeUp className="text-center mb-12">
            <span className="section-label">Sur quoi je fais autorité</span>
            <h2 className="section-title" style={{ maxWidth: 640, margin: '0 auto' }}>
              Des secteurs réels. <span className="accent">Des chiffres vérifiés.</span>
            </h2>
          </FadeUp>

          {/* No per-card FadeUp here: this is E-E-A-T proof content that must be
              visible to users and crawlers regardless of scroll/JS state. */}
          <div className="apropos-proof-grid">
            {proof.map((p) => (
              <div key={p.k} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 12, padding: '22px 24px', height: '100%' }}>
                <p className="font-mono" style={{ fontSize: 10.5, letterSpacing: 1.5, textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600, margin: '0 0 8px' }}>{p.k}</p>
                <p className="font-sans" style={{ fontSize: 13.5, color: 'var(--text-secondary)', lineHeight: 1.6, fontWeight: 300, margin: 0 }}>{p.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* CTA */}
      <section style={{ padding: '80px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp>
            <div style={{ background: 'var(--bg-card)', border: '1px solid rgba(230,57,70,0.15)', borderRadius: 12, padding: '48px 40px', textAlign: 'center' }}>
              <h2 className="font-serif italic" style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 400, marginBottom: 16, color: 'var(--text)' }}>
                Parlons de ce que vous construisez.
              </h2>
              <p className="font-sans" style={{ fontSize: 15, fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 500, margin: '0 auto 32px' }}>
                20 minutes, offert. On regarde votre situation, et vous repartez avec une vision claire — même si on ne travaille pas ensemble.
              </p>
              <Link href={CAL_LINK} className="btn-primary" style={{ margin: '0 auto' }}>
                <span className="btn-primary-dot" />Réserver 20 min · offert
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <Divider />
      <Footer />
      <MobileCta />

      <style jsx>{`
        .apropos-proof-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          align-items: stretch;
        }
        @media (max-width: 700px) {
          .apropos-card {
            grid-template-columns: 1fr !important;
            text-align: center;
            justify-items: center;
          }
          .apropos-proof-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  )
}

const linkStyle: React.CSSProperties = {
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
}
