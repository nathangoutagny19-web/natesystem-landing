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

const capabilities = [
  {
    title: 'Agents autonomes',
    desc: 'Une IA agentique avec mémoire persistante qui exécute des tâches multi-étapes dans vos outils, apprend votre métier et s\'améliore à chaque utilisation.',
    metric: 'Des tâches prises en charge de bout en bout',
  },
  {
    title: 'Lecture de documents',
    desc: 'Factures, contrats, devis, formulaires : l\'IA lit, extrait, structure et classe. Elle ne passe à l\'humain que les cas qui le méritent.',
    metric: 'La moitié d\'un poste admin absorbée',
  },
  {
    title: 'Qualification & relances',
    desc: 'Chaque entrant lu, scoré, enrichi, routé vers la bonne personne. Relances personnalisées qui s\'arrêtent dès que le prospect répond.',
    metric: 'Plus de leads convertis, sans budget pub',
  },
  {
    title: 'Data analytics',
    desc: 'Vos données réunies en temps réel, au même endroit. Tableaux de bord clairs, anticipation des tendances. Vous décidez sur du concret, vite.',
    metric: 'Décisions data en minutes',
  },
]

const pains = [
  'Vos équipes passent des heures sur des tâches répétitives',
  'Vous croulez sous les documents à lire, trier, recopier',
  'Vous décidez « au feeling », faute de chiffres clairs',
  'Vous avez peur que l\'IA soit un gadget de plus',
]

export default function IaPage() {
  return (
    <main>
      <Nav />

      <section style={{ padding: '160px 24px 40px' }}>
        <div className="mx-auto text-center" style={{ maxWidth: 820 }}>
          <FadeUp>
            <span className="section-label">IA agentique & data analytics</span>
            <h1 className="font-serif italic" style={{ fontSize: 'clamp(32px, 5.4vw, 54px)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text)', maxWidth: 780, margin: '14px auto 24px' }}>
              Une IA qui <span className="accent" style={{ color: 'var(--accent)' }}>travaille vraiment pour vous.</span>
            </h1>
            <p className="font-sans" style={{ fontSize: 'clamp(15px, 3vw, 18px)', fontWeight: 300, color: 'var(--text-secondary)', maxWidth: 660, margin: '0 auto 36px', lineHeight: 1.65 }}>
              Une IA agentique avec mémoire persistante : elle exécute des tâches de bout en bout, apprend votre métier et
              s&apos;améliore avec le temps. Intégrée uniquement là où elle remplace de vraies heures — jamais en gadget.
              Vos données restent en UE.
            </p>
            <Link href={CAL_LINK} className="btn-primary" style={{ margin: '0 auto', fontSize: 14 }}>
              <span className="btn-primary-dot" />Réserver 20 min · offert →
            </Link>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* Direct answer (GEO) */}
      <section style={{ padding: '70px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp className="text-center mb-8">
            <h2 className="section-title" style={{ maxWidth: 640, margin: '0 auto' }}>
              Qu&apos;est-ce que <span className="accent">l&apos;IA agentique</span> ?
            </h2>
          </FadeUp>
          <FadeUp>
            <p className="font-sans" style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.75, fontWeight: 300, maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
              C&apos;est une IA qui ne se contente pas de répondre : elle exécute des tâches de bout en bout dans vos outils,
              avec une mémoire persistante du contexte de votre activité. Elle apprend de chaque interaction et s&apos;améliore
              avec le temps — qualifier un lead, lire un document, router une demande, rédiger une première réponse.
            </p>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* Pain */}
      <section style={{ padding: '70px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp className="text-center mb-10">
            <span className="section-label">Ce qui vous coûte des heures</span>
            <h2 className="section-title" style={{ maxWidth: 620, margin: '0 auto' }}>
              Là où l&apos;IA <span className="accent">change la donne.</span>
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

      {/* Capabilities */}
      <section style={{ padding: '70px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 1100 }}>
          <FadeUp className="text-center mb-12">
            <span className="section-label">Ce que l&apos;IA prend en charge</span>
            <h2 className="section-title" style={{ maxWidth: 660, margin: '0 auto' }}>
              L&apos;IA, <span className="accent">là où elle fait gagner des heures.</span>
            </h2>
          </FadeUp>
          <div className="svc-grid">
            {capabilities.map((s) => (
              <div key={s.title} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 12, padding: '28px 26px', height: '100%', display: 'flex', flexDirection: 'column', gap: 12, boxShadow: '0 1px 2px rgba(15,23,42,0.04), 0 8px 24px -16px rgba(15,23,42,0.12)' }}>
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

      {/* Guarantees */}
      <section style={{ padding: '60px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 600 }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 14 }}>
            {[
              'IA intégrée uniquement là où elle remplace de vraies heures',
              'Vos données restent en UE · RGPD-natif',
              'Modèle au choix · Claude, GPT ou auto-hébergé selon votre souveraineté',
              'ROI mesuré · on ne déploie rien sans impact chiffrable',
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
          { href: '/services/logiciel-sur-mesure', label: 'Le logiciel sur-mesure', desc: 'L\'IA s\'intègre dedans, sur votre métier.' },
          { href: '/services/audit', label: 'L\'audit & consulting', desc: 'On identifie où l\'IA a du ROI.' },
          { href: '/tools/diagnostic-ia', label: 'Diagnostic IA', desc: 'Mesurez en 4 min où l\'IA peut vous aider.' },
          { href: '/glossaire', label: 'Glossaire', desc: 'IA agentique, automatisation, data analytics.' },
        ]}
      />

      <Divider />

      {/* CTA */}
      <section style={{ padding: '80px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp>
            <div style={{ background: 'var(--bg-card)', border: '1px solid rgba(230,57,70,0.15)', borderRadius: 12, padding: '48px 40px', textAlign: 'center' }}>
              <h2 className="font-serif italic" style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 400, marginBottom: 16, color: 'var(--text)' }}>
                Déléguez le répétitif à l&apos;IA.
              </h2>
              <p className="font-sans" style={{ fontSize: 15, fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 520, margin: '0 auto 32px' }}>
                20 minutes, offert. On regarde vos tâches répétitives et on identifie où l&apos;IA vous ferait gagner de vraies
                heures — avec un ROI mesurable. Même si on ne travaille pas ensemble.
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
        .svc-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
          align-items: stretch;
        }
        @media (max-width: 800px) {
          .svc-grid { grid-template-columns: 1fr; gap: 18px; }
        }
      `}</style>
    </main>
  )
}
