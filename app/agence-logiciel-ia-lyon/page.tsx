'use client'

import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import MobileCta from '@/components/layout/MobileCta'
import Divider from '@/components/ui/Divider'
import FadeUp from '@/components/ui/FadeUp'
import { CAL_LINK } from '@/lib/constants'

const doors = [
  {
    title: 'Plateforme Dédiée',
    desc: 'Le logiciel métier sur-mesure qui pilote votre activité. Base de données unifiée, dashboards, interfaces taillées pour vos opérations. Le système vous appartient à vie.',
  },
  {
    title: 'Écosystème IA',
    desc: 'L\'intégration de l\'IA — agentique, automatisation, data analytics — dans vos outils existants, là où elle remplace de vraies heures. Sans tout migrer.',
  },
  {
    title: 'Audit & Plan d\'Action',
    desc: 'Un audit opérationnel approfondi et un plan chiffré (15-25 pages, sous 7 jours) qui identifie vos 3-5 leviers prioritaires. Exécutable avec nous ou en interne.',
  },
]

const points = [
  'Code source livré · vous êtes propriétaire à 100 %',
  'Données hébergées en UE · RGPD-natif',
  'En production en 4 à 8 semaines · périmètre et prix fixes',
  'Stack moderne : Next.js · Supabase · Claude API',
]

export default function LyonPage() {
  return (
    <main>
      <Nav />

      {/* Hero */}
      <section style={{ padding: '160px 24px 40px' }}>
        <div className="mx-auto text-center" style={{ maxWidth: 820 }}>
          <FadeUp>
            <span className="section-label">Agence à Lyon</span>
            <h1
              className="font-serif italic"
              style={{ fontSize: 'clamp(32px, 5.4vw, 56px)', fontWeight: 400, lineHeight: 1.08, color: 'var(--text)', maxWidth: 760, margin: '14px auto 24px' }}
            >
              Votre agence de logiciel sur-mesure{' '}
              <span className="accent">et d&apos;IA, à Lyon.</span>
            </h1>
            <p className="font-sans" style={{ fontSize: 'clamp(15px, 3vw, 18px)', fontWeight: 300, color: 'var(--text-secondary)', maxWidth: 620, margin: '0 auto 36px', lineHeight: 1.65 }}>
              NateSystem est une agence lyonnaise qui construit le logiciel métier qui pilote votre activité — avec l&apos;IA intégrée
              là où elle vous fait gagner du temps. Vos données, votre infrastructure, votre code. Vous restez propriétaire.
            </p>
            <Link href={CAL_LINK} className="btn-primary" style={{ margin: '0 auto', fontSize: 14 }}>
              <span className="btn-primary-dot" />Réserver 20 min · offert →
            </Link>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* What we do — 3 doors */}
      <section style={{ padding: '80px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 1100 }}>
          <FadeUp className="text-center mb-12">
            <span className="section-label">Ce qu&apos;on construit à Lyon</span>
            <h2 className="section-title" style={{ maxWidth: 640, margin: '0 auto' }}>
              Trois portes d&apos;entrée. <span className="accent">Un seul standard.</span>
            </h2>
          </FadeUp>
          <div className="lyon-grid">
            {doors.map((d) => (
              <div key={d.title} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 14, padding: '30px 28px', height: '100%' }}>
                <h3 className="font-serif italic" style={{ fontSize: 24, fontWeight: 400, lineHeight: 1.15, color: 'var(--text)', margin: '0 0 14px' }}>{d.title}</h3>
                <p className="font-sans" style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.65, fontWeight: 300, margin: 0 }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* Why local + guarantees */}
      <section style={{ padding: '80px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 820 }}>
          <FadeUp>
            <h2 className="section-title text-center" style={{ maxWidth: 640, margin: '0 auto 16px' }}>
              Pourquoi une agence <span className="accent">basée à Lyon</span>
            </h2>
            <p className="font-sans text-center" style={{ fontSize: 15, fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 620, margin: '0 auto 36px' }}>
              Un interlocuteur unique, joignable, qui code lui-même votre système. Pas de sous-traitance, pas de couche commerciale.
              On accompagne des PME à Lyon, en France et en Hongrie — restauration, enseignement supérieur, conseil, événementiel.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 auto', maxWidth: 560, display: 'grid', gap: 14 }}>
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3" style={{ fontSize: 14.5, color: 'var(--text-secondary)', lineHeight: 1.55, fontWeight: 300 }}>
                  <Check size={16} strokeWidth={2.2} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 3 }} />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* CTA */}
      <section style={{ padding: '80px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp>
            <div style={{ background: 'var(--bg-card)', border: '1px solid rgba(230,57,70,0.15)', borderRadius: 12, padding: '48px 40px', textAlign: 'center' }}>
              <h2 className="font-serif italic" style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 400, marginBottom: 16, color: 'var(--text)' }}>
                Parlons de votre projet, à Lyon ou en visio.
              </h2>
              <p className="font-sans" style={{ fontSize: 15, fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 500, margin: '0 auto 32px' }}>
                20 minutes, offert. On regarde votre situation et vous repartez avec une vision claire du logiciel dont votre
                activité a besoin — même si on ne travaille pas ensemble.
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
        .lyon-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
          align-items: stretch;
        }
        @media (max-width: 900px) {
          .lyon-grid { grid-template-columns: 1fr; gap: 18px; }
        }
      `}</style>
    </main>
  )
}
