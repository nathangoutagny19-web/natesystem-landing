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

const modules = [
  {
    title: 'Parcours étudiant centralisé',
    desc: 'Chaque étudiant, son parcours, ses notes, ses échanges, son statut — dans une seule fiche. Fini les multi-tableurs où l\'information se perd entre deux services.',
    metric: '200+ étudiants suivis dans un seul outil',
  },
  {
    title: 'Suivi des stages',
    desc: 'Conventions, entreprises d\'accueil, tuteurs, échéances : tout le cycle de stage piloté au même endroit, avec des relances automatiques.',
    metric: 'Plus de conventions perdues entre deux boîtes mail',
  },
  {
    title: 'Relation alumni',
    desc: 'Garder le lien avec les anciens, suivre leur insertion, alimenter votre réseau et vos statistiques d\'employabilité — sans ressaisie manuelle.',
    metric: 'Insertion suivie automatiquement',
  },
  {
    title: 'Adoption par les équipes',
    desc: 'Un outil pensé pour être utilisé au quotidien par les équipes pédagogiques et administratives, pas un énième logiciel imposé qui finit abandonné.',
    metric: 'Adoption 90 %+ par les équipes',
  },
]

const pains = [
  'Le parcours d\'un étudiant éclaté entre l\'admin, la pédagogie et les stages',
  'Des tableurs Excel dupliqués, jamais à jour, que chaque service maintient à sa façon',
  'Le suivi alumni et l\'employabilité reconstitués à la main chaque année',
  'Des données sensibles dispersées, loin des exigences RGPD d\'un établissement',
]

export default function EducationPage() {
  return (
    <main>
      <Nav />

      <section style={{ padding: '160px 24px 40px' }}>
        <div className="mx-auto text-center" style={{ maxWidth: 820 }}>
          <FadeUp>
            <span className="section-label">Enseignement supérieur</span>
            <h1 className="font-serif italic" style={{ fontSize: 'clamp(32px, 5.4vw, 54px)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text)', maxWidth: 760, margin: '14px auto 24px' }}>
              Le CRM pédagogique <span className="accent">qui centralise tout.</span>
            </h1>
            <p className="font-sans" style={{ fontSize: 'clamp(15px, 3vw, 18px)', fontWeight: 300, color: 'var(--text-secondary)', maxWidth: 640, margin: '0 auto 36px', lineHeight: 1.65 }}>
              Parcours étudiant, suivi de stages, relation alumni — réunis dans un seul outil bâti pour votre établissement,
              là où vous jonglez aujourd&apos;hui entre des tableurs que chaque service maintient à sa façon. Hébergé en UE, RGPD-natif.
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
            <span className="section-label">Le quotidien d&apos;un établissement</span>
            <h2 className="section-title" style={{ maxWidth: 620, margin: '0 auto' }}>
              Quand l&apos;information <span className="accent">se perd entre les services</span>
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

      {/* Modules */}
      <section style={{ padding: '70px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 1100 }}>
          <FadeUp className="text-center mb-12">
            <span className="section-label">Ce qu&apos;on construit pour l&apos;enseignement supérieur</span>
            <h2 className="section-title" style={{ maxWidth: 640, margin: '0 auto' }}>
              Quatre modules, <span className="accent">un seul système.</span>
            </h2>
          </FadeUp>
          <div className="edu-grid">
            {modules.map((m) => (
              <div key={m.title} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 14, padding: '28px 26px', height: '100%', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <h3 className="font-serif italic" style={{ fontSize: 22, fontWeight: 400, lineHeight: 1.15, color: 'var(--text)', margin: 0 }}>{m.title}</h3>
                <p className="font-sans" style={{ fontSize: 13.5, color: 'var(--text-secondary)', lineHeight: 1.6, fontWeight: 300, margin: 0, flex: 1 }}>{m.desc}</p>
                <div style={{ borderLeft: '2px solid var(--accent)', paddingLeft: 12, marginTop: 4 }}>
                  <p className="font-mono" style={{ fontSize: 11, fontWeight: 500, color: 'var(--accent)', lineHeight: 1.4, margin: 0 }}>{m.metric}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* Proof — references */}
      <section style={{ padding: '70px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 14, padding: '40px 36px', textAlign: 'center' }}>
              <p className="font-serif italic" style={{ fontSize: 'clamp(22px, 3.4vw, 28px)', fontWeight: 400, lineHeight: 1.3, color: 'var(--text)', maxWidth: 560, margin: '0 auto 18px' }}>
                On a construit pour des établissements qui ne peuvent pas se permettre l&apos;à-peu-près sur leurs données.
              </p>
              <p className="font-mono" style={{ fontSize: 11, letterSpacing: 1.2, textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 500, margin: 0 }}>
                Université Jean Monnet · Groupe scolaire Les Chartreux
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
              'Données hébergées en UE · RGPD-natif · adapté au public',
              'Code source livré · vous êtes propriétaire à 100 %',
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
          { href: '/logiciel-sur-mesure-vs-saas', label: 'Sur-mesure ou SaaS ?', desc: 'Pourquoi un CRM pédagogique propriétaire plutôt qu\'un outil générique.' },
          { href: '/prix-logiciel-sur-mesure', label: 'Combien ça coûte ?', desc: 'Les fourchettes de prix réalistes.' },
          { href: '/logiciel-sur-mesure-restauration', label: 'Et pour la restauration ?', desc: 'Un autre secteur, la même méthode.' },
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
                Centralisez le suivi de vos étudiants.
              </h2>
              <p className="font-sans" style={{ fontSize: 15, fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 520, margin: '0 auto 32px' }}>
                20 minutes, offert. On regarde vos outils actuels et on identifie ce qu&apos;un CRM pédagogique sur-mesure vous
                ferait gagner. Même si on ne travaille pas ensemble.
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
        .edu-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
          align-items: stretch;
        }
        @media (max-width: 800px) {
          .edu-grid { grid-template-columns: 1fr; gap: 18px; }
        }
      `}</style>
    </main>
  )
}
