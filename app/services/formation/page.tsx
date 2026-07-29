'use client'

import Link from 'next/link'
import { Check } from 'lucide-react'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import MobileCta from '@/components/layout/MobileCta'
import Divider from '@/components/ui/Divider'
import FadeUp from '@/components/ui/FadeUp'
import RelatedLinks from '@/components/ui/RelatedLinks'
import ServiceFit from '@/components/services/ServiceFit'
import { CAL_LINK } from '@/lib/constants'

const included = [
  {
    title: 'Formation sur votre propre outil',
    desc: 'On forme sur VOTRE logiciel, avec vos vraies données, pas une démo générique. Chacun apprend exactement ce qu\'il utilisera au quotidien.',
    metric: 'Une adoption réelle, pas théorique',
  },
  {
    title: 'Du dirigeant au terrain',
    desc: 'Chaque rôle est formé sur ce qui le concerne : le dirigeant lit ses tableaux de bord, l\'équipe pilote son quotidien, personne n\'est perdu.',
    metric: 'Toute l\'équipe autonome',
  },
  {
    title: 'Documentation complète',
    desc: 'Guides, vidéos, procédures : tout est écrit et à vous. De quoi former vos prochaines recrues sans nous, quand vous voulez.',
    metric: 'Onboarding des nouveaux, sans nous',
  },
  {
    title: 'Accompagnement puis autonomie',
    desc: 'On reste à vos côtés le temps qu\'il faut, puis on vous laisse la main. Toujours dispo si besoin, mais jamais indispensable.',
    metric: 'On part quand vous êtes prêts',
  },
]

const pains = [
  'Vous avez déjà payé des outils que, au final, personne n\'utilise',
  'L\'équipe résiste au changement, par peur ou par habitude',
  'Vous dépendez d\'un prestataire pour la moindre modification',
  'Le savoir reste dans la tête d\'une ou deux personnes clés',
]

export default function FormationPage() {
  return (
    <main>
      <Nav />

      <section style={{ padding: '160px 24px 40px' }}>
        <div className="mx-auto text-center" style={{ maxWidth: 820 }}>
          <FadeUp>
            <span className="section-label">Formation & accompagnement</span>
            <h1 className="font-serif italic" style={{ fontSize: 'clamp(32px, 5.4vw, 54px)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text)', maxWidth: 780, margin: '14px auto 24px' }}>
              On vous forme, jusqu&apos;à <span className="accent" style={{ color: 'var(--accent)' }}>l&apos;autonomie complète.</span>
            </h1>
            <p className="font-sans" style={{ fontSize: 'clamp(15px, 3vw, 18px)', fontWeight: 300, color: 'var(--text-secondary)', maxWidth: 660, margin: '0 auto 36px', lineHeight: 1.65 }}>
              Un logiciel, ça ne se livre pas, ça s&apos;adopte. On forme vos équipes, du dirigeant au terrain, jusqu&apos;à ce qu&apos;elles
              pilotent l&apos;outil seules. Le code et l&apos;infrastructure vous appartiennent. Vous n&apos;êtes jamais coincé avec personne.
            </p>
            <Link href={CAL_LINK} className="btn-primary" style={{ margin: '0 auto', fontSize: 14 }}>
              <span className="btn-primary-dot" />Réserver un appel · offert →
            </Link>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* Pain */}
      <section style={{ padding: '70px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp className="text-center mb-10">
            <span className="section-label">Ce qui bloque l&apos;adoption</span>
            <h2 className="section-title" style={{ maxWidth: 620, margin: '0 auto' }}>
              Un outil, ça ne sert à rien <span className="accent">si personne ne l&apos;utilise.</span>
            </h2>
          </FadeUp>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 auto', maxWidth: 600, display: 'grid', gap: 13 }}>
            {pains.map((p) => (
              <li key={p} className="flex items-start gap-3" style={{ fontSize: 14.5, color: 'var(--text-secondary)', lineHeight: 1.55, fontWeight: 300 }}>
                <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 1, fontWeight: 600 }}>·</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Divider />

      {/* Ce qui est inclus */}
      <section style={{ padding: '70px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 1100 }}>
          <FadeUp className="text-center mb-12">
            <span className="section-label">Comment on forme</span>
            <h2 className="section-title" style={{ maxWidth: 660, margin: '0 auto' }}>
              Ce qui est inclus, <span className="accent">jusqu&apos;à l&apos;autonomie.</span>
            </h2>
          </FadeUp>
          <div className="svc-grid">
            {included.map((s) => (
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

      {/* Engagements */}
      <section style={{ padding: '60px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 600 }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 14 }}>
            {[
              'Le code et l\'infrastructure vous appartiennent à 100 %',
              'Documentation complète · vous formez vos nouveaux sans nous',
              'On part quand vos équipes sont autonomes, jamais avant',
              'Toujours dispo si vous en avez besoin, sans dépendance',
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
          { href: '/methode', label: 'Notre méthode', desc: 'La formation, dernière étape avant l\'autonomie.' },
          { href: '/services/logiciel-sur-mesure', label: 'Le système sur-mesure', desc: 'L\'outil qu\'on vous apprend à piloter.' },
          { href: '/services/audit', label: 'Le consulting', desc: 'On repère d\'abord où vous gagnez le plus.' },
          { href: '/case-studies', label: 'Nos réalisations', desc: 'Des équipes qui pilotent leur outil seules.' },
        ]}
      />

      <Divider />

      <ServiceFit
        forYou={[
          'Vous voulez que vos équipes soient vraiment autonomes',
          'Vous en avez assez de dépendre d\'un prestataire pour tout',
          'Vous tenez à posséder votre outil et le savoir qui va avec',
          'Vous voulez pouvoir former vos futures recrues vous-même',
        ]}
        notForYou={[
          'Vous préférez tout déléguer sans jamais mettre les mains dedans',
          'Vous voulez garder un prestataire à vie, quoi qu\'il arrive',
          'Vous ne pouvez pas mobiliser un peu vos équipes',
          'L\'autonomie ne vous intéresse pas vraiment',
        ]}
      />

      <Divider />

      {/* CTA */}
      <section style={{ padding: '80px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp>
            <div style={{ background: 'var(--bg-card)', border: '1px solid rgba(230,57,70,0.15)', borderRadius: 12, padding: '48px 40px', textAlign: 'center' }}>
              <h2 className="font-serif italic" style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 400, marginBottom: 16, color: 'var(--text)' }}>
                Rendez vos équipes autonomes.
              </h2>
              <p className="font-sans" style={{ fontSize: 15, fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 520, margin: '0 auto 32px' }}>
                Un appel offert. On regarde votre situation et on vous dit comment on rendrait votre équipe autonome sur son
                outil, sans dépendance. Même si on ne travaille pas ensemble.
              </p>
              <Link href={CAL_LINK} className="btn-primary" style={{ margin: '0 auto' }}>
                <span className="btn-primary-dot" />Réserver un appel · offert
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
