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
import { useLang } from '@/components/providers/LangProvider'
import { localizedHref } from '@/lib/routes'

function LinkedInIcon({ size = 15 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  )
}

// Credibility points reflect real, documented deployments (see case studies).
// Les chiffres sont ceux des cas clients : traduits, jamais réinterprétés.
type Proof = { kFr: string; kEn: string; vFr: string; vEn: string }
const proof: Proof[] = [
  {
    kFr: 'Lyon, France', kEn: 'Lyon, France',
    vFr: 'Basé à Lyon · interventions FR & HU',
    vEn: 'Based in Lyon · working in France & Hungary',
  },
  {
    kFr: 'Restauration', kEn: 'Restaurants',
    vFr: 'Cockpit ops & KPI, contrôle de factures, RH, réputation, groupe Chromosome (×11 sur le temps de pilotage hebdo)',
    vEn: 'Ops & KPI cockpit, invoice checking, HR, reputation, for the Chromosome group (×11 on weekly steering time)',
  },
  {
    kFr: 'Enseignement supérieur', kEn: 'Higher education',
    vFr: 'CRM pédagogique, 200+ étudiants suivis, 90 %+ d\u2019adoption',
    vEn: 'Teaching CRM, 200+ students tracked, 90 %+ adoption',
  },
  {
    kFr: 'Conseil & événementiel', kEn: 'Consulting & events',
    vFr: 'Relance commerciale automatisée, gestion d\u2019équipes & bénévoles',
    vEn: 'Automated sales follow-up, team and volunteer management',
  },
]

export default function AProposPage() {
  const { lang } = useLang()
  const d = (fr: string, en: string) => (lang === 'en' ? en : fr)

  return (
    <main>
      <Nav />

      {/* Hero */}
      <section style={{ padding: '160px 24px 40px' }}>
        <div className="mx-auto" style={{ maxWidth: 880 }}>
          <FadeUp className="text-center mb-2">
            <span className="section-label">{d('Qui construit', 'Who builds it')}</span>
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
              <span className="accent" style={{ color: 'var(--accent)' }}>{d('Le fondateur code, pas un commercial.', 'The founder writes the code, not a sales rep.')}</span>
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
                <Image src="/nathan.png" alt={d('Nathan Goutagny, fondateur de NateSystem', 'Nathan Goutagny, founder of NateSystem')} fill sizes="140px" style={{ objectFit: 'cover' }} priority />
              </div>

              <div>
                <p className="font-mono" style={{ fontSize: 11, letterSpacing: 1.8, color: 'var(--accent)', textTransform: 'uppercase', margin: '0 0 16px', fontWeight: 500 }}>
                  {d('Fondateur · Logiciel sur-mesure · IA appliquée · Lyon', 'Founder · Custom software · Applied AI · Lyon')}
                </p>
                <p className="font-sans" style={{ fontSize: 15.5, color: 'var(--text-secondary)', lineHeight: 1.75, fontWeight: 300, margin: '0 0 16px' }}>
                  {d(
                    'Ingénieur formé au croisement du software et de l\u2019IA appliquée. Des années à construire des systèmes opérationnels pour des PME françaises et hongroises, restauration, enseignement supérieur, conseil. Une conviction simple : le logiciel qui appartient à l\u2019entreprise vaut mieux que dix SaaS qu\u2019elle loue à vie.',
                    'An engineer trained where software meets applied AI. Years spent building operational systems for French and Hungarian companies, in restaurants, higher education and consulting. One simple conviction: software a company owns beats ten it rents for life.'
                  )}
                </p>
                <p className="font-sans" style={{ fontSize: 14, color: 'var(--text)', fontWeight: 500, fontStyle: 'italic', borderLeft: '2px solid var(--accent)', paddingLeft: 14, margin: '0 0 22px', lineHeight: 1.6 }}>
                  {d('Si vous me parlez, c\u2019est moi qui code derrière. Pas un commercial, pas un junior.', 'If you are talking to me, I am the one writing the code. Not a sales rep, not a junior.')}
                </p>
                <div className="flex gap-3 items-center flex-wrap">
                  <a href="https://www.linkedin.com/in/nathan-goutagny" target="_blank" rel="noopener noreferrer" aria-label={d('LinkedIn Nathan Goutagny', 'Nathan Goutagny on LinkedIn')} className="apropos-link" style={linkStyle}>
                    <LinkedInIcon size={15} /><span>LinkedIn</span>
                  </a>
                  <a href="mailto:nathan@natesystem.com" aria-label={d('Email Nathan', 'Email Nathan')} className="apropos-link" style={linkStyle}>
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
            <span className="section-label">{d('Sur quoi je fais autorité', 'Where I have real ground')}</span>
            <h2 className="section-title" style={{ maxWidth: 640, margin: '0 auto' }}>
              {d('Des secteurs réels. ', 'Real sectors. ')}<span className="accent">{d('Des chiffres vérifiés.', 'Figures that hold up.')}</span>
            </h2>
          </FadeUp>

          {/* No per-card FadeUp here: this is E-E-A-T proof content that must be
              visible to users and crawlers regardless of scroll/JS state. */}
          <div className="apropos-proof-grid">
            {proof.map((p) => (
              <div key={p.kEn} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 12, padding: '22px 24px', height: '100%' }}>
                <p className="font-mono" style={{ fontSize: 10.5, letterSpacing: 1.5, textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600, margin: '0 0 8px' }}>{d(p.kFr, p.kEn)}</p>
                <p className="font-sans" style={{ fontSize: 13.5, color: 'var(--text-secondary)', lineHeight: 1.6, fontWeight: 300, margin: 0 }}>{d(p.vFr, p.vEn)}</p>
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
                {d('Parlons de ce que vous construisez.', 'Let us talk about what you are building.')}
              </h2>
              <p className="font-sans" style={{ fontSize: 15, fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 500, margin: '0 auto 32px' }}>
                {d(
                  'Un appel offert. On regarde votre situation, et vous repartez avec une vision claire, même si on ne travaille pas ensemble.',
                  'A free call. We look at where you stand, and you leave with a clear view, even if we never work together.'
                )}
              </p>
              <Link href={localizedHref(CAL_LINK, lang)} className="btn-primary" style={{ margin: '0 auto' }}>
                <span className="btn-primary-dot" />{d('Réserver un appel · offert', 'Book a call · free')}
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
