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
    title: 'Logiciel de gestion sur-mesure',
    desc: 'Un seul logiciel pour piloter votre entreprise : ventes, opérations, équipe. On réunit vos outils dispersés dans une solution unique, conçue pour vos process réels.',
    metric: 'Fin des doubles saisies entre dix outils',
  },
  {
    title: 'Données centralisées en temps réel',
    desc: 'Toutes vos données au même endroit, à jour, accessibles à toute l\'équipe. Des dashboards clairs pour décider sur du concret, pas au feeling.',
    metric: 'Une seule source de vérité',
  },
  {
    title: 'Portails & outils internes',
    desc: 'Portails clients, espaces équipe, outils métier : chaque écran pensé pour la tâche qu\'il sert. Vos collaborateurs gagnent du temps sur chaque opération.',
    metric: 'Chaque rôle a l\'outil qu\'il lui faut',
  },
  {
    title: 'IA intégrée à vos process',
    desc: 'Automatisations, lecture de documents, relances : l\'IA intégrée là où elle remplace de vraies heures de travail, jamais en gadget.',
    metric: 'Des heures regagnées chaque semaine',
  },
]

const pains = [
  'Excel, mails et dix outils qui ne se parlent pas dans votre entreprise',
  'Des heures perdues chaque semaine à recopier les données d\'un logiciel à l\'autre',
  'Aucune vue claire sur votre activité — vous pilotez à l\'aveugle',
  'Les solutions du marché ne collent jamais vraiment à votre métier',
]

const guarantees = [
  'Code source livré · votre entreprise est propriétaire à 100 %',
  'Données hébergées en UE · RGPD-natif',
  'En production en 4 à 8 semaines · périmètre et prix fixes',
  'Formation de l\'équipe jusqu\'à l\'autonomie',
]

export default function LogicielInterneClermontFerrandPage() {
  return (
    <main>
      <Nav />

      {/* Hero — H1 with primary keyword + bonus */}
      <section style={{ padding: '160px 24px 40px' }}>
        <div className="mx-auto text-center" style={{ maxWidth: 820 }}>
          <FadeUp>
            <span className="section-label">Logiciel interne · Clermont-Ferrand</span>
            <h1 className="font-serif italic" style={{ fontSize: 'clamp(30px, 5.2vw, 52px)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text)', maxWidth: 800, margin: '14px auto 24px' }}>
              Logiciel interne à Clermont-Ferrand : la solution sur-mesure qui <span className="accent" style={{ color: 'var(--accent)' }}>pilote votre entreprise.</span>
            </h1>
            <p className="font-sans" style={{ fontSize: 'clamp(15px, 3vw, 18px)', fontWeight: 300, color: 'var(--text-secondary)', maxWidth: 660, margin: '0 auto 36px', lineHeight: 1.65 }}>
              NateSystem conçoit des solutions logicielles internes sur-mesure pour les entreprises de Clermont-Ferrand et
              du Puy-de-Dôme — de l'industrie aux services. Un seul logiciel pour réunir vos outils, vos données et
              votre équipe, que votre entreprise possède à vie.
            </p>
            <Link href={CAL_LINK} className="btn-primary" style={{ margin: '0 auto', fontSize: 14 }}>
              <span className="btn-primary-dot" />Réserver 20 min · offert →
            </Link>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* Direct answer — what is internal software (GEO + intro answer) */}
      <section style={{ padding: '70px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp className="text-center mb-8">
            <h2 className="section-title" style={{ maxWidth: 640, margin: '0 auto' }}>
              Qu'est-ce qu'un <span className="accent">logiciel interne</span> ?
            </h2>
          </FadeUp>
          <FadeUp>
            <p className="font-sans" style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.75, fontWeight: 300, maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
              Un logiciel interne est une application métier développée pour l'usage propre de votre entreprise, au lieu
              d'un logiciel standard du marché. Il réunit en une seule solution ce que vous éparpillez aujourd'hui
              entre tableurs, mails et outils déconnectés : gestion, données, équipe, pilotage. À Clermont-Ferrand,
              NateSystem conçoit ces solutions logicielles sur-mesure pour que votre entreprise en soit propriétaire.
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
              Quand les outils <span className="accent">freinent votre équipe.</span>
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
              Le logiciel interne, <span className="accent">taillé pour votre métier.</span>
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

      {/* Why Clermont-Ferrand / local */}
      <section style={{ padding: '70px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp className="text-center mb-8">
            <h2 className="section-title" style={{ maxWidth: 640, margin: '0 auto' }}>
              Un logiciel pensé pour le tissu <span className="accent">clermontois</span>.
            </h2>
          </FadeUp>
          <FadeUp>
            <p className="font-sans" style={{ fontSize: 15.5, color: 'var(--text-secondary)', lineHeight: 1.75, fontWeight: 300, maxWidth: 680, margin: '0 auto 16px', textAlign: 'center' }}>
              Clermont-Ferrand, capitale de l'Auvergne, vit d'un tissu économique solide : industrie
              (pneumatique, agroalimentaire), services et PME régionales. Ces entreprises ont des process exigeants et
              beaucoup de données à gérer — mais l'offre numérique locale reste rare. C'est un vrai potentiel :
              un logiciel interne sur-mesure y fait souvent une différence immédiate sur l'organisation et le
              pilotage de l'équipe.
            </p>
            <p className="font-sans" style={{ fontSize: 15.5, color: 'var(--text-secondary)', lineHeight: 1.75, fontWeight: 300, maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
              On commence par comprendre votre métier sur le terrain, puis on construit la solution qui colle à vos
              besoins réels. NateSystem accompagne aussi les entreprises de <Link href="/logiciel-interne-lyon" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Lyon</Link> et
              de toute l'Auvergne-Rhône-Alpes ; le développement se fait à distance et en présentiel selon vos
              besoins.
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
                q: 'Qu\'est-ce qu\'un logiciel interne ?',
                a: 'Un logiciel interne est une application métier développée pour l\'usage propre d\'une entreprise, au lieu d\'un logiciel standard. Il réunit en une seule solution la gestion, les données et le travail de l\'équipe. À Clermont-Ferrand, NateSystem conçoit ces solutions logicielles sur-mesure dont l\'entreprise est propriétaire.',
              },
              {
                q: 'Pourquoi un logiciel interne sur-mesure plutôt qu\'un logiciel standard ?',
                a: 'Un logiciel standard vous oblige à adapter votre métier à l\'outil, et vous le louez à vie. Une solution sur-mesure est construite autour de vos process, votre équipe l\'adopte vite, et votre entreprise en est propriétaire. Elle devient rentable dès que vous cumulez plusieurs abonnements qui ne se parlent pas.',
              },
              {
                q: 'Combien coûte un logiciel interne à Clermont-Ferrand ?',
                a: 'Le prix dépend du périmètre, des intégrations et de l\'IA. Pour une PME clermontoise, une première version utile se situe entre quelques milliers et quelques dizaines de milliers d\'euros. On chiffre l\'impact avant le devis, pendant l\'audit offert.',
              },
              {
                q: 'Intervenez-vous uniquement à Clermont-Ferrand ?',
                a: 'NateSystem accompagne les entreprises de Clermont-Ferrand, du Puy-de-Dôme et de toute l\'Auvergne-Rhône-Alpes, dont Lyon. Le travail se fait à distance et en présentiel selon les besoins.',
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
          { href: '/logiciel-interne-lyon', label: 'Logiciel interne Lyon', desc: 'La même approche, pour le Rhône.' },
          { href: '/logiciel-interne-lyon', label: 'Agence à Lyon', desc: 'Notre base régionale en Auvergne-Rhône-Alpes.' },
          { href: '/services/logiciel-sur-mesure', label: 'Le logiciel sur-mesure', desc: 'Ce qu\'on construit, en détail.' },
          { href: '/prix-logiciel-sur-mesure', label: 'Combien ça coûte ?', desc: 'Les fourchettes de prix réalistes.' },
        ]}
      />

      <Divider />

      {/* CTA */}
      <section style={{ padding: '80px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp>
            <div style={{ background: 'var(--bg-card)', border: '1px solid rgba(230,57,70,0.15)', borderRadius: 12, padding: '48px 40px', textAlign: 'center' }}>
              <h2 className="font-serif italic" style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 400, marginBottom: 16, color: 'var(--text)' }}>
                Votre logiciel interne, à Clermont-Ferrand.
              </h2>
              <p className="font-sans" style={{ fontSize: 15, fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 520, margin: '0 auto 32px' }}>
                20 minutes, offert. On regarde vos outils actuels et on identifie ce qu'un logiciel interne sur-mesure
                ferait gagner à votre entreprise — en temps, en argent, en clarté. Même si on ne travaille pas ensemble.
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
