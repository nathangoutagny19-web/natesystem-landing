'use client'

import Link from 'next/link'
import { Check } from 'lucide-react'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import MobileCta from '@/components/layout/MobileCta'
import Divider from '@/components/ui/Divider'
import FadeUp from '@/components/ui/FadeUp'
import RelatedLinks from '@/components/ui/RelatedLinks'
import { CAL_LINK } from '@/lib/constants'

// Real systems deployed for hospitality clients (see home "Systems" section).
const systems = [
  {
    title: 'Cockpit ops & KPI',
    desc: 'Couverts, masse salariale, KPI quotidiens en temps réel — et un plan d\'action suggéré par l\'IA. Les décisions data se prennent en 2 minutes, plus en 2 heures sur Excel.',
    metric: 'Décisions en 2 min vs ~2h sur Excel',
  },
  {
    title: 'Contrôle des factures F&B',
    desc: 'Stock temps réel, prix fournisseurs suivis dans le temps, détection automatique des surfacturations et doubles facturations sur les factures entrantes.',
    metric: '~3-5 % de marge récupérée sur les achats F&B',
  },
  {
    title: 'Pointeuse & paie',
    desc: 'Pointage mobile, planning hebdo, suivi des heures sup, exports prêts pour la paie. Remplace les fiches papier et les chaînes Excel.',
    metric: 'Paie validée en 30 min vs une demi-journée',
  },
  {
    title: 'Réputation & avis',
    desc: 'Agrège les avis Google, TripAdvisor, Facebook. L\'IA rédige des réponses dans votre ton. Synthèse mensuelle générée automatiquement par établissement.',
    metric: 'Temps de réponse aux avis ÷10',
  },
]

const pains = [
  'Une caisse, un Excel masse salariale, un tableur fournisseurs, des avis éparpillés — rien ne se parle',
  'Le pilotage hebdo prend des heures à reconstituer à la main',
  'Les surfacturations fournisseurs passent inaperçues',
  'Quand un manager part, le process part avec lui',
]

export default function RestaurationPage() {
  return (
    <main>
      <Nav />

      <section style={{ padding: '160px 24px 40px' }}>
        <div className="mx-auto text-center" style={{ maxWidth: 820 }}>
          <FadeUp>
            <span className="section-label">Restauration</span>
            <h1 className="font-serif italic" style={{ fontSize: 'clamp(32px, 5.4vw, 54px)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text)', maxWidth: 760, margin: '14px auto 24px' }}>
              Le logiciel sur-mesure qui <span className="accent">pilote votre restaurant.</span>
            </h1>
            <p className="font-sans" style={{ fontSize: 'clamp(15px, 3vw, 18px)', fontWeight: 300, color: 'var(--text-secondary)', maxWidth: 640, margin: '0 auto 36px', lineHeight: 1.65 }}>
              Un seul système réunit couverts, KPI, factures fournisseurs, planning, paie et avis — là où vous jonglez
              aujourd&apos;hui entre une caisse, des tableurs et des outils qui ne se parlent pas. Avec l&apos;IA intégrée
              uniquement là où elle remplace de vraies heures.
            </p>
            <Link href={CAL_LINK} className="btn-primary" style={{ margin: '0 auto', fontSize: 14 }}>
              <span className="btn-primary-dot" />Réserver 20 min · offert →
            </Link>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* Pain */}
      <section style={{ padding: '70px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp className="text-center mb-10">
            <span className="section-label">Le quotidien d&apos;un resto qui grandit</span>
            <h2 className="section-title" style={{ maxWidth: 620, margin: '0 auto' }}>
              Le <span className="accent">SaaS-spaghetti</span> de la restauration
            </h2>
          </FadeUp>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 auto', maxWidth: 600, display: 'grid', gap: 13 }}>
            {pains.map((p) => (
              <li key={p} className="flex items-start gap-3" style={{ fontSize: 14.5, color: 'var(--text-secondary)', lineHeight: 1.55, fontWeight: 300 }}>
                <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 1, fontWeight: 600 }}>—</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Divider />

      {/* Systems */}
      <section style={{ padding: '70px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 1100 }}>
          <FadeUp className="text-center mb-12">
            <span className="section-label">Ce qu&apos;on construit pour la restauration</span>
            <h2 className="section-title" style={{ maxWidth: 640, margin: '0 auto' }}>
              Quatre modules, <span className="accent">un seul système.</span>
            </h2>
          </FadeUp>
          <div className="resto-grid">
            {systems.map((s) => (
              <div key={s.title} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 14, padding: '28px 26px', height: '100%', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <h3 className="font-serif italic" style={{ fontSize: 22, fontWeight: 400, lineHeight: 1.15, color: 'var(--text)', margin: 0 }}>{s.title}</h3>
                <p className="font-sans" style={{ fontSize: 13.5, color: 'var(--text-secondary)', lineHeight: 1.6, fontWeight: 300, margin: 0, flex: 1 }}>{s.desc}</p>
                <div style={{ borderLeft: '2px solid var(--accent)', paddingLeft: 12, marginTop: 4 }}>
                  <p className="font-mono" style={{ fontSize: 11, fontWeight: 500, color: 'var(--accent)', lineHeight: 1.4, margin: 0 }}>{s.metric}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* Proof — Chromosome */}
      <section style={{ padding: '70px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 14, padding: '40px 36px', textAlign: 'center' }}>
              <p className="font-serif italic accent" style={{ fontSize: 'clamp(44px, 8vw, 64px)', fontWeight: 400, lineHeight: 1, margin: '0 0 8px' }}>×11</p>
              <p className="font-sans" style={{ fontSize: 15, color: 'var(--text)', fontWeight: 400, lineHeight: 1.6, maxWidth: 520, margin: '0 auto 6px' }}>
                moins de temps passé par manager sur les opérations hebdomadaires — de 11h à 1h.
              </p>
              <p className="font-mono" style={{ fontSize: 11, letterSpacing: 1.2, textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 500, margin: 0 }}>
                Chromosome · Groupe de restaurants
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* Guarantees */}
      <section style={{ padding: '60px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 600 }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 14 }}>
            {[
              'Code source livré · vous êtes propriétaire à 100 %',
              'Données hébergées en UE · RGPD-natif',
              'En production en 4 à 8 semaines · vos équipes continuent de travailler',
            ].map((g) => (
              <li key={g} className="flex items-start gap-3" style={{ fontSize: 14.5, color: 'var(--text-secondary)', lineHeight: 1.55, fontWeight: 300 }}>
                <Check size={16} strokeWidth={2.2} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 3 }} />
                <span>{g}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Divider />

      <RelatedLinks
        links={[
          { href: '/logiciel-sur-mesure-vs-saas', label: 'Sur-mesure ou SaaS ?', desc: 'Pourquoi sortir de l\'empilement d\'outils du restaurant.' },
          { href: '/prix-logiciel-sur-mesure', label: 'Combien ça coûte ?', desc: 'Les fourchettes de prix réalistes.' },
          { href: '/agence-logiciel-ia-lyon', label: 'Agence à Lyon', desc: 'Qui conçoit et déploie votre système.' },
          { href: '/playbook', label: 'Playbooks sectoriels', desc: 'L\'IA appliquée à d\'autres métiers.' },
        ]}
      />

      <Divider />

      {/* CTA */}
      <section style={{ padding: '80px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp>
            <div style={{ background: 'var(--bg-card)', border: '1px solid rgba(230,57,70,0.15)', borderRadius: 12, padding: '48px 40px', textAlign: 'center' }}>
              <h2 className="font-serif italic" style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 400, marginBottom: 16, color: 'var(--text)' }}>
                Reprenez le pilotage de votre restaurant.
              </h2>
              <p className="font-sans" style={{ fontSize: 15, fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 520, margin: '0 auto 32px' }}>
                20 minutes, offert. On regarde vos outils actuels et on identifie ce qu&apos;un seul système vous ferait gagner —
                en temps, en marge, en clarté. Même si on ne travaille pas ensemble.
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
        .resto-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
          align-items: stretch;
        }
        @media (max-width: 800px) {
          .resto-grid { grid-template-columns: 1fr; gap: 18px; }
        }
      `}</style>
    </main>
  )
}
