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
    title: 'Pipeline calé sur votre vente',
    desc: 'Vos étapes de vente, vos statuts, votre vocabulaire. Le pipeline reproduit la façon dont votre équipe vend vraiment, au lieu de vous imposer un modèle générique que personne ne suit.',
    metric: 'Un pipeline que l\'équipe utilise vraiment',
  },
  {
    title: 'Suivi prospects & clients',
    desc: 'Toutes les fiches, échanges et historiques au même endroit, à jour. Chaque commercial sait où en est chaque prospect, sans fouiller dans les mails ou relancer un collègue.',
    metric: 'Plus aucun prospect oublié',
  },
  {
    title: 'Relances qui partent au bon moment',
    desc: 'Le CRM rappelle les relances à faire et les déclenche selon vos règles. Fini les opportunités perdues parce que personne n\'a recontacté à temps.',
    metric: 'Zéro relance qui passe à la trappe',
  },
  {
    title: 'IA pour qualifier et relancer',
    desc: 'L\'IA intégrée qualifie les prospects entrants, propose la bonne relance et résume les échanges. Un copilote pour votre équipe commerciale, là où il fait gagner des heures.',
    metric: 'Des heures regagnées chaque semaine',
  },
]

const pains = [
  'Des prospects suivis dans Excel, des mails et la tête de chacun — rien de centralisé',
  'Des relances oubliées et des opportunités qui se perdent faute de suivi',
  'Un CRM standard que personne ne remplit parce qu\'il ne colle pas à votre vente',
  'Aucune vue claire sur le pipeline : vous pilotez votre activité commerciale à l\'aveugle',
]

const guarantees = [
  'Code source livré · votre entreprise est propriétaire à 100 %',
  'Données hébergées en UE · RGPD-natif',
  'En production en 4 à 8 semaines · périmètre et prix fixes',
  'Formation de l\'équipe jusqu\'à l\'autonomie',
]

export default function CrmSurMesurePage() {
  return (
    <main>
      <Nav />

      {/* Hero — H1 with primary keyword + bonus */}
      <section style={{ padding: '160px 24px 40px' }}>
        <div className="mx-auto text-center" style={{ maxWidth: 820 }}>
          <FadeUp>
            <span className="section-label">CRM sur-mesure</span>
            <h1 className="font-serif italic" style={{ fontSize: 'clamp(30px, 5.2vw, 52px)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text)', maxWidth: 800, margin: '14px auto 24px' }}>
              CRM sur-mesure : le logiciel calé sur <span className="accent" style={{ color: 'var(--accent)' }}>votre cycle de vente réel.</span>
            </h1>
            <p className="font-sans" style={{ fontSize: 'clamp(15px, 3vw, 18px)', fontWeight: 300, color: 'var(--text-secondary)', maxWidth: 660, margin: '0 auto 36px', lineHeight: 1.65 }}>
              NateSystem conçoit des solutions CRM sur-mesure pour les entreprises : suivi des prospects et clients,
              relances, pipeline, intégrations à vos outils, le tout avec une IA qui qualifie et relance. Un logiciel que
              votre entreprise possède à vie, pas un CRM standard que vous subissez.
            </p>
            <Link href={CAL_LINK} className="btn-primary" style={{ margin: '0 auto', fontSize: 14 }}>
              <span className="btn-primary-dot" />Réserver 20 min · offert →
            </Link>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* Direct answer — what is a custom CRM (GEO + intro answer) */}
      <section style={{ padding: '70px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp className="text-center mb-8">
            <h2 className="section-title" style={{ maxWidth: 640, margin: '0 auto' }}>
              Qu'est-ce qu'un <span className="accent">CRM sur-mesure</span> ?
            </h2>
          </FadeUp>
          <FadeUp>
            <p className="font-sans" style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.75, fontWeight: 300, maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
              Un CRM sur-mesure est un logiciel de gestion commerciale conçu autour du cycle de vente réel de votre
              entreprise, au lieu d'un CRM standard que vous adaptez tant bien que mal. Il réunit en une seule solution
              le suivi des prospects et clients, les relances, le pipeline et les intégrations à vos autres outils —
              exactement comme votre équipe vend. NateSystem conçoit ces solutions logicielles sur-mesure pour que votre
              entreprise en soit propriétaire.
            </p>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* Pain */}
      <section style={{ padding: '70px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp className="text-center mb-10">
            <span className="section-label">Ce que vivent les équipes commerciales</span>
            <h2 className="section-title" style={{ maxWidth: 620, margin: '0 auto' }}>
              Quand le CRM <span className="accent">freine la vente.</span>
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
            <span className="section-label">Nos solutions CRM</span>
            <h2 className="section-title" style={{ maxWidth: 680, margin: '0 auto' }}>
              Le CRM, <span className="accent">taillé pour votre vente.</span>
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

      {/* Context — custom vs standard CRM */}
      <section style={{ padding: '70px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp className="text-center mb-8">
            <h2 className="section-title" style={{ maxWidth: 640, margin: '0 auto' }}>
              Un CRM <span className="accent">que vous possédez</span>, pas que vous subissez.
            </h2>
          </FadeUp>
          <FadeUp>
            <p className="font-sans" style={{ fontSize: 15.5, color: 'var(--text-secondary)', lineHeight: 1.75, fontWeight: 300, maxWidth: 680, margin: '0 auto 16px', textAlign: 'center' }}>
              La plupart des CRM standard imposent leur logique : vous pliez votre vente à l'outil, vous payez des
              modules inutiles et vous louez le tout à vie. Un CRM sur-mesure fait l'inverse — il épouse vos étapes,
              votre équipe l'adopte parce qu'il parle son langage, et votre entreprise en est propriétaire.
            </p>
            <p className="font-sans" style={{ fontSize: 15.5, color: 'var(--text-secondary)', lineHeight: 1.75, fontWeight: 300, maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
              C'est souvent la brique commerciale d'un <Link href="/services/logiciel-sur-mesure" style={{ color: 'var(--accent)', textDecoration: 'none' }}>logiciel sur-mesure</Link> plus
              large. Basé à Lyon, NateSystem accompagne les PME partout en France, à distance et en présentiel selon vos besoins.
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
                q: 'Qu\'est-ce qu\'un CRM sur-mesure ?',
                a: 'Un CRM sur-mesure est un logiciel de gestion commerciale conçu autour du cycle de vente réel de votre entreprise, au lieu d\'un CRM standard que vous subissez. Il regroupe le suivi des prospects et clients, les relances, le pipeline et les intégrations à vos autres outils, exactement comme votre équipe vend. NateSystem conçoit ces solutions logicielles sur-mesure pour que votre entreprise en soit propriétaire.',
              },
              {
                q: 'Pourquoi un CRM sur-mesure plutôt qu\'un CRM standard du marché ?',
                a: 'Un CRM standard vous oblige à plier votre process de vente à l\'outil, à payer des modules inutiles et à louer le tout à vie. Un CRM sur-mesure épouse vos étapes de vente, votre équipe l\'adopte vite parce qu\'il parle son langage, et votre entreprise en est propriétaire. Il devient rentable dès que les abonnements et les saisies manuelles s\'accumulent.',
              },
              {
                q: 'Comment l\'IA est-elle intégrée dans le CRM ?',
                a: 'L\'IA est intégrée là où elle remplace de vraies heures de travail : qualifier les prospects entrants, proposer les bonnes relances au bon moment, résumer les échanges et préparer les suites. Elle reste un copilote au service de votre équipe commerciale, jamais un gadget ni une boîte noire.',
              },
              {
                q: 'Combien coûte un CRM sur-mesure ?',
                a: 'Le prix dépend du périmètre (un pipeline simple ou une plateforme commerciale complète), des intégrations et de l\'IA. Pour une PME, une première version utile se situe entre quelques milliers et quelques dizaines de milliers d\'euros. On chiffre l\'impact en heures et en euros gagnés avant le devis, pendant l\'audit offert.',
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
          { href: '/crm-agence-immobiliere-sur-mesure', label: 'CRM agence immobilière', desc: 'Le CRM sur-mesure pour l\'immobilier.' },
          { href: '/services/logiciel-sur-mesure', label: 'Le logiciel sur-mesure', desc: 'Ce qu\'on construit, en détail.' },
          { href: '/prix-logiciel-sur-mesure', label: 'Combien ça coûte ?', desc: 'Les fourchettes de prix réalistes.' },
          { href: '/services/audit', label: 'L\'audit offert', desc: 'Comment on chiffre l\'impact avant le devis.' },
        ]}
      />

      <Divider />

      {/* CTA */}
      <section style={{ padding: '80px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp>
            <div style={{ background: 'var(--bg-card)', border: '1px solid rgba(230,57,70,0.15)', borderRadius: 12, padding: '48px 40px', textAlign: 'center' }}>
              <h2 className="font-serif italic" style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 400, marginBottom: 16, color: 'var(--text)' }}>
                Votre CRM sur-mesure.
              </h2>
              <p className="font-sans" style={{ fontSize: 15, fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 520, margin: '0 auto 32px' }}>
                20 minutes, offert. On regarde comment votre équipe vend et suit ses prospects aujourd'hui, et on
                identifie ce qu'un CRM sur-mesure ferait gagner à votre entreprise — en temps, en deals, en clarté.
                Même si on ne travaille pas ensemble.
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
