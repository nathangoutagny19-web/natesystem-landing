'use client'

import Link from 'next/link'
import { Check } from 'lucide-react'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import MobileCta from '@/components/layout/MobileCta'
import Divider from '@/components/ui/Divider'
import FadeUp from '@/components/ui/FadeUp'
import { CAL_LINK } from '@/lib/constants'

const tiers = [
  {
    range: '15 000 – 50 000 €',
    unit: 'investissement initial',
    title: 'Un premier logiciel métier',
    desc: 'Base de données unifiée + interfaces sur-mesure pour remplacer un patchwork de tableurs et de SaaS. Puis 100 à 500 €/mois d\'hébergement et maintenance.',
  },
  {
    range: 'à partir de 2 000 €',
    unit: 'par mois · conception + maintenance',
    title: 'Infrastructure complète avec IA',
    desc: 'Logiciel métier + IA intégrée (agents, automatisation, analytics) là où elle remplace de vraies heures. Évolutif dans le temps.',
  },
  {
    range: 'forfait fixe',
    unit: 'livré sous 7 jours',
    title: 'Audit & Plan d\'Action',
    desc: 'Si vous voulez d\'abord le chiffrage avant d\'engager : un audit opérationnel + plan chiffré de 15-25 pages, exécutable avec nous ou en interne.',
  },
]

const factors = [
  'Le périmètre fonctionnel — nombre d\'écrans, de vues et de workflows',
  'Le nombre d\'intégrations avec vos outils existants',
  'La complexité de votre logique métier',
  'La présence ou non d\'IA — agents, automatisation, data analytics',
]

export default function PrixPage() {
  return (
    <main>
      <Nav />

      <section style={{ padding: '160px 24px 40px' }}>
        <div className="mx-auto text-center" style={{ maxWidth: 820 }}>
          <FadeUp>
            <span className="section-label">Prix</span>
            <h1 className="font-serif italic" style={{ fontSize: 'clamp(32px, 5.4vw, 54px)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text)', maxWidth: 760, margin: '14px auto 24px' }}>
              Combien coûte un logiciel <span className="accent">sur-mesure</span> en 2026 ?
            </h1>
            <p className="font-sans" style={{ fontSize: 'clamp(15px, 3vw, 18px)', fontWeight: 300, color: 'var(--text-secondary)', maxWidth: 640, margin: '0 auto', lineHeight: 1.65 }}>
              Pour une PME, comptez entre <strong style={{ color: 'var(--text)', fontWeight: 500 }}>15 000 et 50 000 €</strong> pour un
              premier logiciel métier, ou <strong style={{ color: 'var(--text)', fontWeight: 500 }}>à partir de 2 000 €/mois</strong> pour
              une infrastructure complète avec IA. Le prix exact dépend de quatre facteurs — voici lesquels, et les repères honnêtes.
            </p>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* Tiers */}
      <section style={{ padding: '70px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 1100 }}>
          <FadeUp className="text-center mb-12">
            <span className="section-label">Les repères</span>
            <h2 className="section-title" style={{ maxWidth: 620, margin: '0 auto' }}>
              Trois manières d&apos;<span className="accent">entrer dans le sur-mesure.</span>
            </h2>
          </FadeUp>
          <div className="prix-grid">
            {tiers.map((t) => (
              <div key={t.title} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 14, padding: '30px 28px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <p className="font-serif italic accent" style={{ fontSize: 28, fontWeight: 400, lineHeight: 1.1, margin: '0 0 4px' }}>{t.range}</p>
                <p className="font-mono" style={{ fontSize: 10.5, letterSpacing: 1.2, textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 500, margin: '0 0 18px' }}>{t.unit}</p>
                <h3 className="font-sans" style={{ fontSize: 16, fontWeight: 600, color: 'var(--text)', margin: '0 0 10px' }}>{t.title}</h3>
                <p className="font-sans" style={{ fontSize: 13.5, color: 'var(--text-secondary)', lineHeight: 1.6, fontWeight: 300, margin: 0 }}>{t.desc}</p>
              </div>
            ))}
          </div>
          <FadeUp>
            <p className="font-sans text-center" style={{ fontSize: 12.5, color: 'var(--text-muted)', fontWeight: 300, margin: '24px auto 0', maxWidth: 600, lineHeight: 1.6 }}>
              Ces fourchettes sont des repères de marché. Votre chiffrage précis — périmètre fixe, prix fixe — se fait lors de l&apos;appel.
            </p>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* Factors */}
      <section style={{ padding: '70px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp className="text-center mb-10">
            <h2 className="section-title" style={{ maxWidth: 620, margin: '0 auto' }}>
              Ce qui fait <span className="accent">varier le prix</span>
            </h2>
          </FadeUp>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 auto', maxWidth: 580, display: 'grid', gap: 14 }}>
            {factors.map((f) => (
              <li key={f} className="flex items-start gap-3" style={{ fontSize: 14.5, color: 'var(--text-secondary)', lineHeight: 1.55, fontWeight: 300 }}>
                <Check size={16} strokeWidth={2.2} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 3 }} />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <FadeUp delay={0.1}>
            <p className="font-sans text-center" style={{ fontSize: 14, color: 'var(--text-secondary)', fontWeight: 300, lineHeight: 1.7, margin: '32px auto 0', maxWidth: 600 }}>
              Un repère utile : comparez le prix à ce que vous payez <strong style={{ color: 'var(--text)', fontWeight: 500 }}>déjà</strong> en
              abonnements SaaS. Le sur-mesure coûte plus à l&apos;entrée, mais il vous appartient — là où le SaaS court à vie. Le point
              de bascule se situe souvent entre 2 et 4 ans.
            </p>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* CTA */}
      <section style={{ padding: '80px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp>
            <div style={{ background: 'var(--bg-card)', border: '1px solid rgba(230,57,70,0.15)', borderRadius: 12, padding: '48px 40px', textAlign: 'center' }}>
              <h2 className="font-serif italic" style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 400, marginBottom: 16, color: 'var(--text)' }}>
                Votre chiffrage, en 20 minutes.
              </h2>
              <p className="font-sans" style={{ fontSize: 15, fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 520, margin: '0 auto 32px' }}>
                On regarde votre périmètre et vos outils actuels, et on vous donne une fourchette claire pour votre cas précis.
                Offert, sans pitch — vous repartez avec le chiffre, même si on ne travaille pas ensemble.
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
        .prix-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
          align-items: stretch;
        }
        @media (max-width: 900px) {
          .prix-grid { grid-template-columns: 1fr; gap: 18px; }
        }
      `}</style>
    </main>
  )
}
