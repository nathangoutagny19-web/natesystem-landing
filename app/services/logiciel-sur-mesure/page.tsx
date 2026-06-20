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

// What we actually build inside a custom platform.
const modules = [
  {
    title: 'Base de données unifiée',
    desc: 'Une seule source de vérité. On cartographie votre vrai workflow et on remplace le patchwork d\'outils par un système unique où toute votre équipe se connecte.',
    metric: 'Fin des doubles saisies et des données dispersées',
  },
  {
    title: 'Dashboards & pilotage',
    desc: 'Vos chiffres en temps réel, au même endroit. Vous voyez où vous en êtes d\'un coup d\'œil et vous décidez sur du concret, pas au feeling.',
    metric: 'Décisions data en minutes, pas en heures',
  },
  {
    title: 'Portails & outils internes',
    desc: 'Portails clients, espaces fournisseurs, outils métier — chaque écran pensé pour la tâche qu\'il sert. Pas de feature bloat, pas de menus qu\'on n\'ouvre jamais.',
    metric: 'Chaque rôle a exactement ce qu\'il lui faut',
  },
  {
    title: 'Automatisations & IA intégrée',
    desc: 'Workflows automatisés, lecture de documents, relances, alertes — l\'IA intégrée uniquement là où elle remplace de vraies heures de travail.',
    metric: 'Des heures regagnées chaque semaine',
  },
]

const pains = [
  'Excel, mails et dix outils qui ne se parlent pas',
  'Des heures perdues chaque semaine à tout recopier d\'un outil à l\'autre',
  'Aucune vue claire sur votre activité — vous pilotez à l\'aveugle',
  'Quand quelqu\'un part, son savoir part avec lui',
]

export default function LogicielSurMesurePage() {
  return (
    <main>
      <Nav />

      <section style={{ padding: '160px 24px 40px' }}>
        <div className="mx-auto text-center" style={{ maxWidth: 820 }}>
          <FadeUp>
            <span className="section-label">Logiciel & plateforme sur-mesure</span>
            <h1 className="font-serif italic" style={{ fontSize: 'clamp(32px, 5.4vw, 54px)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text)', maxWidth: 780, margin: '14px auto 24px' }}>
              Un seul logiciel sur-mesure pour <span className="accent" style={{ color: 'var(--accent)' }}>piloter votre activité.</span>
            </h1>
            <p className="font-sans" style={{ fontSize: 'clamp(15px, 3vw, 18px)', fontWeight: 300, color: 'var(--text-secondary)', maxWidth: 660, margin: '0 auto 36px', lineHeight: 1.65 }}>
              On réunit vos outils et vos données dans une seule plateforme conçue pour votre métier — base unifiée,
              dashboards, portails, outils internes. La vôtre, pas un abonnement de plus. Vous êtes propriétaire du code,
              hébergé en UE, en production en 4 à 8 semaines.
            </p>
            <Link href={CAL_LINK} className="btn-primary" style={{ margin: '0 auto', fontSize: 14 }}>
              <span className="btn-primary-dot" />Réserver 20 min · offert →
            </Link>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* Direct answer — what is custom software (GEO-friendly) */}
      <section style={{ padding: '70px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp className="text-center mb-8">
            <h2 className="section-title" style={{ maxWidth: 640, margin: '0 auto' }}>
              Qu&apos;est-ce qu&apos;un <span className="accent">logiciel sur-mesure</span> ?
            </h2>
          </FadeUp>
          <FadeUp>
            <p className="font-sans" style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.75, fontWeight: 300, maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
              C&apos;est une application métier conçue spécifiquement pour votre façon de travailler, au lieu d&apos;un SaaS
              générique que vous louez. Elle réunit en un seul système ce que vous éparpillez aujourd&apos;hui entre tableurs,
              mails et outils déconnectés. Le code vous appartient, et il évolue avec votre activité.
            </p>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* Pain */}
      <section style={{ padding: '70px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp className="text-center mb-10">
            <span className="section-label">Ce que vous vivez aujourd&apos;hui</span>
            <h2 className="section-title" style={{ maxWidth: 620, margin: '0 auto' }}>
              Le <span className="accent">SaaS-spaghetti.</span>
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

      {/* What we build */}
      <section style={{ padding: '70px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 1100 }}>
          <FadeUp className="text-center mb-12">
            <span className="section-label">Ce qu&apos;on construit</span>
            <h2 className="section-title" style={{ maxWidth: 660, margin: '0 auto' }}>
              Tout ce qu&apos;il vous faut, <span className="accent">au même endroit.</span>
            </h2>
          </FadeUp>
          <div className="svc-grid">
            {modules.map((s) => (
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

      {/* Sur-mesure vs SaaS — mini, with internal link */}
      <section style={{ padding: '70px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 12, padding: '36px 32px', boxShadow: '0 1px 2px rgba(15,23,42,0.04), 0 8px 24px -16px rgba(15,23,42,0.12)' }}>
              <h2 className="font-serif italic" style={{ fontSize: 'clamp(22px, 4vw, 28px)', fontWeight: 400, color: 'var(--text)', margin: '0 0 14px', textAlign: 'center' }}>
                Sur-mesure ou SaaS ?
              </h2>
              <p className="font-sans" style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.7, fontWeight: 300, maxWidth: 620, margin: '0 auto 18px', textAlign: 'center' }}>
                Un SaaS est un outil standard, loué par abonnement, que vous adaptez à votre métier. Un logiciel sur-mesure
                est construit autour de votre métier, vous en êtes propriétaire et il est hébergé chez vous. Le sur-mesure
                devient rentable dès que vous payez plusieurs SaaS qui ne se parlent pas.
              </p>
              <p style={{ textAlign: 'center', margin: 0 }}>
                <Link href="/logiciel-sur-mesure-vs-saas" className="font-mono" style={{ fontSize: 13, color: 'var(--accent)', letterSpacing: 0.5, textDecoration: 'none' }}>
                  Le comparatif complet sur-mesure vs SaaS →
                </Link>
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
              'Formation jusqu\'à l\'autonomie · on ne livre pas pour disparaître',
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
          { href: '/logiciel-sur-mesure-vs-saas', label: 'Sur-mesure ou SaaS ?', desc: 'Quand le sur-mesure devient rentable.' },
          { href: '/prix-logiciel-sur-mesure', label: 'Combien ça coûte ?', desc: 'Les fourchettes de prix réalistes.' },
          { href: '/logiciel-sur-mesure-restauration', label: 'Exemple : la restauration', desc: 'Un secteur concret, la même méthode.' },
          { href: '/glossaire', label: 'Glossaire', desc: 'Les termes du logiciel sur-mesure et de l\'IA.' },
        ]}
      />

      <Divider />

      {/* CTA */}
      <section style={{ padding: '80px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp>
            <div style={{ background: 'var(--bg-card)', border: '1px solid rgba(230,57,70,0.15)', borderRadius: 12, padding: '48px 40px', textAlign: 'center' }}>
              <h2 className="font-serif italic" style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 400, marginBottom: 16, color: 'var(--text)' }}>
                Et si tout était au même endroit ?
              </h2>
              <p className="font-sans" style={{ fontSize: 15, fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 520, margin: '0 auto 32px' }}>
                20 minutes, offert. On regarde vos outils actuels et on identifie ce qu&apos;un seul logiciel sur-mesure vous
                ferait gagner — en temps, en argent, en clarté. Même si on ne travaille pas ensemble.
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
