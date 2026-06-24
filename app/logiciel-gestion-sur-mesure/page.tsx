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
    title: 'Toute la gestion, un seul logiciel',
    desc: 'Ventes, opérations, stocks, équipe : tout dans une solution unique conçue pour vos process réels. On réunit les outils dispersés au lieu d\'empiler les abonnements.',
    metric: 'Fin des dix outils qui ne se parlent pas',
  },
  {
    title: 'Pilotage en temps réel',
    desc: 'Des tableaux de bord clairs sur votre activité : chiffre, stocks, charge des équipes, marges. Vous décidez sur du concret, pas au feeling, avec des données à jour.',
    metric: 'Une seule source de vérité',
  },
  {
    title: 'Stocks & opérations maîtrisés',
    desc: 'Suivi des stocks, achats, planning, facturation : chaque flux automatisé là où il vous fait perdre du temps. Moins d\'erreurs de saisie, moins de ruptures.',
    metric: 'Des heures regagnées chaque semaine',
  },
  {
    title: 'Une solution que vous possédez',
    desc: 'Contrairement à un ERP loué à vie, votre logiciel de gestion sur-mesure vous appartient : code livré, hébergé en UE. Il évolue avec votre entreprise, sans licence par utilisateur.',
    metric: 'Propriété 100 %, sans abonnement par siège',
  },
]

const pains = [
  'Un ERP standard trop rigide, où vous adaptez votre métier à l\'outil au lieu de l\'inverse',
  'Des stocks, des ventes et un planning éclatés entre Excel, mails et plusieurs logiciels',
  'Des heures perdues à recopier les mêmes données d\'un outil à l\'autre',
  'Aucune vue d\'ensemble sur votre activité — vous pilotez votre entreprise à l\'aveugle',
]

const guarantees = [
  'Code source livré · votre entreprise est propriétaire à 100 %',
  'Données hébergées en UE · RGPD-natif',
  'En production en 4 à 8 semaines · périmètre et prix fixes',
  'Formation de l\'équipe jusqu\'à l\'autonomie',
]

export default function LogicielGestionSurMesurePage() {
  return (
    <main>
      <Nav />

      {/* Hero — H1 with primary keyword + bonus */}
      <section style={{ padding: '160px 24px 40px' }}>
        <div className="mx-auto text-center" style={{ maxWidth: 820 }}>
          <FadeUp>
            <span className="section-label">Logiciel de gestion · sur-mesure</span>
            <h1 className="font-serif italic" style={{ fontSize: 'clamp(30px, 5.2vw, 52px)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text)', maxWidth: 800, margin: '14px auto 24px' }}>
              Logiciel de gestion sur-mesure pour <span className="accent" style={{ color: 'var(--accent)' }}>piloter toute votre PME.</span>
            </h1>
            <p className="font-sans" style={{ fontSize: 'clamp(15px, 3vw, 18px)', fontWeight: 300, color: 'var(--text-secondary)', maxWidth: 680, margin: '0 auto 36px', lineHeight: 1.65 }}>
              Au lieu d'un ERP standard rigide, NateSystem conçoit une solution de gestion sur-mesure qui réunit ventes,
              opérations, stocks et équipe en un seul logiciel. Construit autour de vos process réels — et que votre
              entreprise possède à vie.
            </p>
            <Link href={CAL_LINK} className="btn-primary" style={{ margin: '0 auto', fontSize: 14 }}>
              <span className="btn-primary-dot" />Réserver 20 min · offert →
            </Link>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* Direct answer — what is a custom management software (GEO) */}
      <section style={{ padding: '70px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp className="text-center mb-8">
            <h2 className="section-title" style={{ maxWidth: 640, margin: '0 auto' }}>
              Qu'est-ce qu'un <span className="accent">logiciel de gestion sur-mesure</span> ?
            </h2>
          </FadeUp>
          <FadeUp>
            <p className="font-sans" style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.75, fontWeight: 300, maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
              Un logiciel de gestion sur-mesure est une solution développée spécifiquement pour piloter l'activité de
              votre entreprise : ventes, opérations, stocks, équipe. Au lieu d'un ERP standard auquel vous devez adapter
              votre métier, il réunit en un seul système ce que vous éparpillez aujourd'hui entre tableurs et logiciels
              qui ne se parlent pas. NateSystem conçoit ces solutions sur-mesure, pour les PME de toute la France, pour que
              votre entreprise en soit propriétaire.
            </p>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* Pain */}
      <section style={{ padding: '70px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp className="text-center mb-10">
            <span className="section-label">Ce que vivent les PME</span>
            <h2 className="section-title" style={{ maxWidth: 620, margin: '0 auto' }}>
              Quand la gestion <span className="accent">freine votre activité.</span>
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
            <span className="section-label">Nos solutions de gestion</span>
            <h2 className="section-title" style={{ maxWidth: 680, margin: '0 auto' }}>
              Un logiciel de gestion, <span className="accent">taillé pour votre métier.</span>
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

      {/* Sur-mesure vs ERP standard / context */}
      <section style={{ padding: '70px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp className="text-center mb-8">
            <h2 className="section-title" style={{ maxWidth: 640, margin: '0 auto' }}>
              Sur-mesure <span className="accent">plutôt qu'un ERP standard.</span>
            </h2>
          </FadeUp>
          <FadeUp>
            <p className="font-sans" style={{ fontSize: 15.5, color: 'var(--text-secondary)', lineHeight: 1.75, fontWeight: 300, maxWidth: 680, margin: '0 auto 16px', textAlign: 'center' }}>
              Un ERP du marché vous impose ses écrans et ses process : vous adaptez votre métier à l'outil, vous payez
              des modules inutilisés, et vous le louez à vie. Une solution de gestion sur-mesure ne contient que ce dont
              votre entreprise a besoin, épouse vos process réels, et vous appartient — code livré, hébergé en UE.
            </p>
            <p className="font-sans" style={{ fontSize: 15.5, color: 'var(--text-secondary)', lineHeight: 1.75, fontWeight: 300, maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
              Pour comparer les deux approches en détail, voyez notre page <Link href="/erp-vs-logiciel-sur-mesure" style={{ color: 'var(--accent)', textDecoration: 'none' }}>ERP vs logiciel sur-mesure</Link>.
              Le choix dépend de votre activité, de vos volumes et de votre budget — on en parle pendant l'audit.
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

      {/* FAQ — mirrors FAQPage schema in layout */}
      <section style={{ padding: '70px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp className="text-center mb-10">
            <h2 className="section-title" style={{ margin: '0 auto' }}>Questions fréquentes</h2>
          </FadeUp>
          <div style={{ display: 'grid', gap: 22, maxWidth: 680, margin: '0 auto' }}>
            {[
              {
                q: 'Qu\'est-ce qu\'un logiciel de gestion sur-mesure ?',
                a: 'Un logiciel de gestion sur-mesure est une solution développée spécifiquement pour piloter l\'activité de votre entreprise : ventes, opérations, stocks, équipe. Au lieu d\'un ERP standard auquel vous adaptez votre métier, il réunit en un seul système ce que vous éparpillez entre tableurs et logiciels qui ne se parlent pas. NateSystem conçoit ces solutions pour que votre entreprise en soit propriétaire.',
              },
              {
                q: 'Quelle différence avec un ERP standard ?',
                a: 'Un ERP standard vous impose ses process et ses écrans : vous payez des modules inutilisés et vous le louez à vie. Un logiciel de gestion sur-mesure est construit autour de vos process réels, ne contient que ce dont vous avez besoin, et votre entreprise en est propriétaire. L\'adoption par l\'équipe est plus rapide car chaque écran sert une tâche concrète.',
              },
              {
                q: 'Que peut piloter ce type de logiciel ?',
                a: 'Tout ce qui fait tourner votre activité, dans une seule solution : ventes et devis, opérations et planning, stocks et achats, suivi de l\'équipe, facturation, et tableaux de bord en temps réel. On part de vos process réels et on construit uniquement les modules utiles, avec des intégrations vers vos outils existants quand c\'est pertinent.',
              },
              {
                q: 'Combien coûte un logiciel de gestion sur-mesure ?',
                a: 'Le prix dépend du périmètre (un process ou toute la gestion), des intégrations et de l\'IA. Pour une PME, une première version utile se situe entre quelques milliers et quelques dizaines de milliers d\'euros. On chiffre l\'impact en heures et en euros gagnés avant le devis, pendant l\'audit offert.',
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
          { href: '/erp-vs-logiciel-sur-mesure', label: 'ERP vs logiciel sur-mesure', desc: 'Quelle approche pour votre PME ?' },
          { href: '/services/logiciel-sur-mesure', label: 'Le logiciel sur-mesure', desc: 'Ce qu\'on construit, en détail.' },
          { href: '/prix-logiciel-sur-mesure', label: 'Combien ça coûte ?', desc: 'Les fourchettes de prix réalistes.' },
          { href: '/services/audit', label: 'L\'audit offert', desc: 'Comment se passe le premier appel.' },
        ]}
      />

      <Divider />

      {/* CTA */}
      <section style={{ padding: '80px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp>
            <div style={{ background: 'var(--bg-card)', border: '1px solid rgba(230,57,70,0.15)', borderRadius: 12, padding: '48px 40px', textAlign: 'center' }}>
              <h2 className="font-serif italic" style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 400, marginBottom: 16, color: 'var(--text)' }}>
                Votre logiciel de gestion, sur-mesure.
              </h2>
              <p className="font-sans" style={{ fontSize: 15, fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 520, margin: '0 auto 32px' }}>
                20 minutes, offert. On regarde comment vous gérez aujourd'hui vos ventes, vos stocks et vos opérations, et
                on identifie ce qu'une solution sur-mesure ferait gagner à votre entreprise — en temps, en argent, en
                clarté. Même si on ne travaille pas ensemble.
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
