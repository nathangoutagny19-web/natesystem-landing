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
    title: 'Un audit avant de coder',
    desc: 'Un bon prestataire commence par comprendre votre métier et vos process réels, pas par vous vendre une techno. On chiffre l\'impact — heures et euros gagnés — avant le moindre devis.',
    metric: 'Le besoin d\'abord, le code ensuite',
  },
  {
    title: 'Un périmètre et un prix fixes',
    desc: 'Pas de facturation au temps passé qui dérape. On cadre le périmètre, on annonce le prix, on s\'y tient. Vous savez ce que vous payez avant de signer.',
    metric: 'Aucune mauvaise surprise sur le devis',
  },
  {
    title: 'Une livraison en 4 à 8 semaines',
    desc: 'On met en production le process qui vous fait le plus mal, puis on étend. C\'est la méthode qui évite les projets sans fin et les solutions livrées un an trop tard.',
    metric: 'En production en 4 à 8 semaines',
  },
  {
    title: 'Un logiciel que vous possédez',
    desc: 'Le code source vous est livré : votre entreprise est propriétaire de sa solution logicielle, pas locataire d\'un abonnement. Vous pouvez la faire évoluer et changer de prestataire.',
    metric: 'Propriété 100 %, hébergement UE',
  },
]

const pains = [
  'Des prestataires qui vendent une techno avant d\'avoir compris votre métier',
  'Des devis au temps passé qui doublent en cours de route',
  'Des projets qui s\'éternisent et ne sortent jamais vraiment en production',
  'Un logiciel que vous louez à vie sans jamais en être propriétaire',
]

const guarantees = [
  'Code source livré · votre entreprise est propriétaire à 100 %',
  'Données hébergées en UE · RGPD-natif',
  'En production en 4 à 8 semaines · périmètre et prix fixes',
  'Formation de l\'équipe jusqu\'à l\'autonomie',
]

export default function AgenceLogicielSurMesurePage() {
  return (
    <main>
      <Nav />

      {/* Hero — H1 with primary keyword + bonus */}
      <section style={{ padding: '160px 24px 40px' }}>
        <div className="mx-auto text-center" style={{ maxWidth: 820 }}>
          <FadeUp>
            <span className="section-label">Agence de logiciel sur-mesure</span>
            <h1 className="font-serif italic" style={{ fontSize: 'clamp(30px, 5.2vw, 52px)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text)', maxWidth: 800, margin: '14px auto 24px' }}>
              Agence de logiciel sur-mesure : comment choisir <span className="accent" style={{ color: 'var(--accent)' }}>le bon partenaire.</span>
            </h1>
            <p className="font-sans" style={{ fontSize: 'clamp(15px, 3vw, 18px)', fontWeight: 300, color: 'var(--text-secondary)', maxWidth: 660, margin: '0 auto 36px', lineHeight: 1.65 }}>
              NateSystem est une agence de développement de logiciel sur-mesure pour les entreprises et PME en France.
              On conçoit des solutions logicielles métier — avec ou sans IA — que votre entreprise possède à vie.
              Voici comment reconnaître un bon prestataire.
            </p>
            <Link href={CAL_LINK} className="btn-primary" style={{ margin: '0 auto', fontSize: 14 }}>
              <span className="btn-primary-dot" />Réserver 20 min · offert →
            </Link>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* Direct answer — what is a custom software agency (GEO + intro answer) */}
      <section style={{ padding: '70px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp className="text-center mb-8">
            <h2 className="section-title" style={{ maxWidth: 640, margin: '0 auto' }}>
              Qu'est-ce qu'une <span className="accent">agence de logiciel sur-mesure</span> ?
            </h2>
          </FadeUp>
          <FadeUp>
            <p className="font-sans" style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.75, fontWeight: 300, maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
              Une agence de logiciel sur-mesure est un prestataire qui conçoit et développe une application métier pour
              l'usage propre de votre entreprise, au lieu de vous vendre un logiciel standard. Un bon prestataire part
              de votre besoin réel, fixe un périmètre et un prix avant de coder, livre une solution logicielle dont vous
              êtes propriétaire, puis forme votre équipe jusqu'à l'autonomie. NateSystem travaille ainsi avec les
              entreprises partout en France.
            </p>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* Pain */}
      <section style={{ padding: '70px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp className="text-center mb-10">
            <span className="section-label">Ce qui fait fuir les entreprises</span>
            <h2 className="section-title" style={{ maxWidth: 620, margin: '0 auto' }}>
              Les pièges d'un mauvais <span className="accent">prestataire.</span>
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

      {/* Solutions — what a good agency does */}
      <section style={{ padding: '70px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 1100 }}>
          <FadeUp className="text-center mb-12">
            <span className="section-label">Ce que fait une bonne agence</span>
            <h2 className="section-title" style={{ maxWidth: 680, margin: '0 auto' }}>
              Quatre repères pour <span className="accent">choisir sereinement.</span>
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

      {/* Method / context */}
      <section style={{ padding: '70px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp className="text-center mb-8">
            <h2 className="section-title" style={{ maxWidth: 640, margin: '0 auto' }}>
              Une méthode <span className="accent">claire</span>, du besoin à la mise en production.
            </h2>
          </FadeUp>
          <FadeUp>
            <p className="font-sans" style={{ fontSize: 15.5, color: 'var(--text-secondary)', lineHeight: 1.75, fontWeight: 300, maxWidth: 680, margin: '0 auto 16px', textAlign: 'center' }}>
              Basé à Lyon, NateSystem accompagne les entreprises partout en France. On commence par un audit pour
              comprendre vos process et chiffrer l'impact, on fixe le périmètre et le prix, puis on livre une
              première version utile en 4 à 8 semaines. On étend ensuite, process après process, sans projet qui
              s'éternise.
            </p>
            <p className="font-sans" style={{ fontSize: 15.5, color: 'var(--text-secondary)', lineHeight: 1.75, fontWeight: 300, maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
              Pour aller plus loin sur les critères de sélection, on a détaillé{' '}
              <Link href="/comment-choisir-prestataire-logiciel-ia" style={{ color: 'var(--accent)', textDecoration: 'none' }}>comment choisir son prestataire</Link>{' '}
              de logiciel et d'IA. C'est le meilleur point de départ avant de lancer un projet.
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
                q: 'Qu\'est-ce qu\'une agence de logiciel sur-mesure ?',
                a: 'Une agence de logiciel sur-mesure est un prestataire qui conçoit une application métier pour l\'usage propre de votre entreprise, au lieu de vous vendre un logiciel standard. Un bon prestataire part de votre besoin réel, fixe un périmètre et un prix avant de coder, livre une solution dont vous êtes propriétaire, puis forme votre équipe.',
              },
              {
                q: 'Comment choisir la bonne agence de développement sur-mesure ?',
                a: 'Vérifiez quatre points : un audit du besoin avant tout devis, un périmètre et un prix fixes (pas de facturation au temps passé qui dérape), la livraison du code source (vous êtes propriétaire, pas locataire), et un hébergement en UE conforme au RGPD. Un bon prestataire vous dit aussi quand un logiciel standard suffirait.',
              },
              {
                q: 'Combien de temps pour développer un logiciel sur-mesure ?',
                a: 'Une première version utile se livre en général en 4 à 8 semaines, à condition que le périmètre soit cadré dès le départ. On commence par le process qui vous fait le plus mal, on le met en production, puis on étend. C\'est la méthode qui évite les projets sans fin.',
              },
              {
                q: 'À qui appartient le logiciel développé par l\'agence ?',
                a: 'Avec NateSystem, le code source est livré et votre entreprise en est propriétaire à 100 %. Vous n\'êtes pas locataire d\'un abonnement : vous pouvez faire évoluer la solution, changer de prestataire ou l\'héberger où vous voulez. Les données restent hébergées en UE, en conformité RGPD.',
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
          { href: '/comment-choisir-prestataire-logiciel-ia', label: 'Comment choisir son prestataire', desc: 'Les critères pour ne pas se tromper.' },
          { href: '/services/logiciel-sur-mesure', label: 'Le logiciel sur-mesure', desc: 'Ce qu\'on construit, en détail.' },
          { href: '/prix-logiciel-sur-mesure', label: 'Combien ça coûte ?', desc: 'Les fourchettes de prix réalistes.' },
          { href: '/services/audit', label: 'L\'audit de besoins', desc: 'Le point de départ de tout projet.' },
        ]}
      />

      <Divider />

      {/* CTA */}
      <section style={{ padding: '80px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp>
            <div style={{ background: 'var(--bg-card)', border: '1px solid rgba(230,57,70,0.15)', borderRadius: 12, padding: '48px 40px', textAlign: 'center' }}>
              <h2 className="font-serif italic" style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 400, marginBottom: 16, color: 'var(--text)' }}>
                Parlons de votre projet.
              </h2>
              <p className="font-sans" style={{ fontSize: 15, fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 520, margin: '0 auto 32px' }}>
                20 minutes, offert. On regarde vos outils actuels et on identifie ce qu'un logiciel sur-mesure ferait
                gagner à votre entreprise — en temps, en argent, en clarté. On vous dira aussi franchement si vous
                n'en avez pas besoin.
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
