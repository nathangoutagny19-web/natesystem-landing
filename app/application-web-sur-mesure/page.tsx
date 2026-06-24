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

const solutions = [
  {
    title: 'Portail client ou partenaire',
    desc: 'Un espace en ligne où vos clients suivent leurs commandes, déposent leurs documents, échangent avec vous. Accessible depuis n\'importe quel navigateur, à votre image.',
    metric: 'Fini les allers-retours par mail',
  },
  {
    title: 'Outil interne pour votre équipe',
    desc: 'L\'application métier que vos collaborateurs utilisent au quotidien : suivi d\'activité, saisie, planning, validation. Chaque écran pensé pour la tâche qu\'il sert.',
    metric: 'Chaque rôle a l\'outil qu\'il lui faut',
  },
  {
    title: 'Plateforme multi-utilisateurs',
    desc: 'Plusieurs équipes, plusieurs droits d\'accès, des données partagées et à jour en temps réel pour tout le monde. Une seule solution au lieu de dix outils dispersés.',
    metric: 'Une seule source de vérité, en direct',
  },
  {
    title: 'IA intégrée à l\'application',
    desc: 'Lecture de documents, automatisations, relances : l\'IA intégrée directement dans l\'application, là où elle remplace de vraies heures de travail, jamais en gadget.',
    metric: 'Des heures regagnées chaque semaine',
  },
]

const pains = [
  'Un besoin métier précis qu\'aucun logiciel du marché ne couvre vraiment',
  'Des fichiers Excel partagés qui se cassent dès que plusieurs personnes y touchent',
  'Pas de vue partagée en temps réel : chacun travaille sur sa version des données',
  'Des abonnements qui s\'accumulent pour un usage que vous ne maîtrisez jamais à 100 %',
]

const guarantees = [
  'Code source livré · votre entreprise est propriétaire à 100 %',
  'Données hébergées en UE · RGPD-natif',
  'En production en 4 à 8 semaines · périmètre et prix fixes',
  'Formation de l\'équipe jusqu\'à l\'autonomie',
]

export default function ApplicationWebSurMesurePage() {
  return (
    <main>
      <Nav />

      {/* Hero — H1 with primary keyword + bonus */}
      <section style={{ padding: '160px 24px 40px' }}>
        <div className="mx-auto text-center" style={{ maxWidth: 820 }}>
          <FadeUp>
            <span className="section-label">Application web sur-mesure</span>
            <h1 className="font-serif italic" style={{ fontSize: 'clamp(30px, 5.2vw, 52px)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text)', maxWidth: 800, margin: '14px auto 24px' }}>
              Application web sur-mesure : votre outil métier <span className="accent" style={{ color: 'var(--accent)' }}>accessible partout, en temps réel.</span>
            </h1>
            <p className="font-sans" style={{ fontSize: 'clamp(15px, 3vw, 18px)', fontWeight: 300, color: 'var(--text-secondary)', maxWidth: 660, margin: '0 auto 36px', lineHeight: 1.65 }}>
              NateSystem conçoit des applications web sur-mesure pour les entreprises : portail, outil interne ou plateforme,
              accessible depuis un simple navigateur, multi-utilisateurs et à jour en temps réel. Un logiciel taillé pour
              votre besoin métier — que votre entreprise possède à vie.
            </p>
            <Link href={CAL_LINK} className="btn-primary" style={{ margin: '0 auto', fontSize: 14 }}>
              <span className="btn-primary-dot" />Réserver 20 min · offert →
            </Link>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* Direct answer — what is a custom web app (GEO + intro answer) */}
      <section style={{ padding: '70px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp className="text-center mb-8">
            <h2 className="section-title" style={{ maxWidth: 640, margin: '0 auto' }}>
              Qu'est-ce qu'une <span className="accent">application web sur-mesure</span> ?
            </h2>
          </FadeUp>
          <FadeUp>
            <p className="font-sans" style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.75, fontWeight: 300, maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
              Une application web sur-mesure est un logiciel accessible depuis un simple navigateur, développé pour un besoin
              métier précis de votre entreprise au lieu d'être acheté sur étagère. Multi-utilisateurs et en temps réel,
              elle peut prendre la forme d'un portail client, d'un outil interne ou d'une plateforme complète.
              Rien à installer : chaque collaborateur s'y connecte depuis son ordinateur ou son téléphone. NateSystem
              conçoit ces solutions sur-mesure pour que votre entreprise en soit propriétaire.
            </p>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* Pain */}
      <section style={{ padding: '70px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp className="text-center mb-10">
            <span className="section-label">Ce que vivent les entreprises</span>
            <h2 className="section-title" style={{ maxWidth: 620, margin: '0 auto' }}>
              Quand aucun outil du marché <span className="accent">ne colle à votre métier.</span>
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

      {/* Solutions */}
      <section style={{ padding: '70px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 1100 }}>
          <FadeUp className="text-center mb-12">
            <span className="section-label">Nos solutions logicielles</span>
            <h2 className="section-title" style={{ maxWidth: 680, margin: '0 auto' }}>
              L'application web, <span className="accent">taillée pour votre besoin.</span>
            </h2>
          </FadeUp>
          <div className="svc-grid">
            {solutions.map((s) => (
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

      {/* Difference vs standard app / ownership */}
      <section style={{ padding: '70px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp className="text-center mb-8">
            <h2 className="section-title" style={{ maxWidth: 640, margin: '0 auto' }}>
              Sur-mesure plutôt que <span className="accent">sur étagère.</span>
            </h2>
          </FadeUp>
          <FadeUp>
            <p className="font-sans" style={{ fontSize: 15.5, color: 'var(--text-secondary)', lineHeight: 1.75, fontWeight: 300, maxWidth: 680, margin: '0 auto 16px', textAlign: 'center' }}>
              Une application standard vous oblige à plier votre métier à l'outil, et vous la louez à vie. Une application
              web sur-mesure ne contient que ce dont vous avez besoin : elle suit vos process réels, votre équipe l'adopte
              vite, et votre entreprise en est propriétaire à 100 %. Le code vous est livré, les données restent hébergées en
              Union européenne.
            </p>
            <p className="font-sans" style={{ fontSize: 15.5, color: 'var(--text-secondary)', lineHeight: 1.75, fontWeight: 300, maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
              C'est l'approche que l'on applique à tous nos projets. Pour voir en détail ce qu'on construit, découvrez{' '}
              <Link href="/services/logiciel-sur-mesure" style={{ color: 'var(--accent)', textDecoration: 'none' }}>le logiciel sur-mesure</Link>.
            </p>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* Guarantees */}
      <section style={{ padding: '60px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 600 }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 14 }}>
            {guarantees.map((g) => (
              <li key={g} className="flex items-start gap-3" style={{ fontSize: 14.5, color: 'var(--text-secondary)', lineHeight: 1.55, fontWeight: 300 }}>
                <Check size={16} strokeWidth={2.2} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 3 }} />
                <span>{g}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Divider />

      {/* FAQ — required by the tool + FAQPage schema in layout */}
      <section style={{ padding: '70px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp className="text-center mb-10">
            <h2 className="section-title" style={{ margin: '0 auto' }}>Questions fréquentes</h2>
          </FadeUp>
          <div style={{ display: 'grid', gap: 22, maxWidth: 680, margin: '0 auto' }}>
            {[
              {
                q: 'Qu\'est-ce qu\'une application web sur-mesure ?',
                a: 'Une application web sur-mesure est un logiciel accessible depuis un simple navigateur, développé pour un besoin métier précis de votre entreprise plutôt qu\'acheté sur étagère. Multi-utilisateurs et en temps réel, elle peut prendre la forme d\'un portail client, d\'un outil interne ou d\'une plateforme complète. Rien à installer : chaque collaborateur s\'y connecte depuis son ordinateur ou son téléphone.',
              },
              {
                q: 'Quelle différence avec une application standard du marché ?',
                a: 'Une application standard vous oblige à adapter votre métier à l\'outil, et vous la louez à vie par abonnement. Une application web sur-mesure est construite autour de vos process réels : elle ne contient que ce dont vous avez besoin, votre équipe l\'adopte vite, et votre entreprise en est propriétaire à 100 %. Elle devient rentable dès que vous cumulez plusieurs abonnements qui ne se parlent pas.',
              },
              {
                q: 'Combien coûte une application web sur-mesure ?',
                a: 'Le prix dépend du périmètre (un portail simple ou une plateforme complète), des intégrations et de l\'IA. Pour une PME, une première version utile se situe entre quelques milliers et quelques dizaines de milliers d\'euros. On chiffre l\'impact en heures et en euros gagnés avant le devis, pendant l\'audit offert.',
              },
              {
                q: 'À qui appartient l\'application et où sont hébergées les données ?',
                a: 'Votre entreprise est propriétaire à 100 % : le code source vous est livré. Les données sont hébergées en Union européenne, dans une approche RGPD-native. Vous n\'êtes prisonnier d\'aucun éditeur et vous gardez le contrôle total de votre solution.',
              },
            ].map((item) => (
              <div key={item.q}>
                <h3 className="font-serif italic" style={{ fontSize: 18, fontWeight: 400, color: 'var(--text)', margin: '0 0 8px' }}>{item.q}</h3>
                <p className="font-sans" style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, fontWeight: 300, margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      <RelatedLinks
        links={[
          { href: '/services/logiciel-sur-mesure', label: 'Le logiciel sur-mesure', desc: 'Ce qu\'on construit, en détail.' },
          { href: '/services/ia', label: 'L\'IA intégrée à vos outils', desc: 'L\'IA là où elle gagne des heures.' },
          { href: '/prix-logiciel-sur-mesure', label: 'Combien ça coûte ?', desc: 'Les fourchettes de prix réalistes.' },
          { href: '/services/audit', label: 'L\'audit offert', desc: 'Le point de départ de tout projet.' },
        ]}
      />

      <Divider />

      {/* CTA */}
      <section style={{ padding: '80px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp>
            <div style={{ background: 'var(--bg-card)', border: '1px solid rgba(230,57,70,0.15)', borderRadius: 12, padding: '48px 40px', textAlign: 'center' }}>
              <h2 className="font-serif italic" style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 400, marginBottom: 16, color: 'var(--text)' }}>
                Votre application web sur-mesure.
              </h2>
              <p className="font-sans" style={{ fontSize: 15, fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 520, margin: '0 auto 32px' }}>
                20 minutes, offert. On regarde votre besoin métier et vos outils actuels, et on identifie ce qu'une
                application web sur-mesure ferait gagner à votre entreprise — en temps, en argent, en clarté. Même si on ne
                travaille pas ensemble.
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
