'use client'

import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import MobileCta from '@/components/layout/MobileCta'
import Divider from '@/components/ui/Divider'
import FadeUp from '@/components/ui/FadeUp'
import RelatedLinks from '@/components/ui/RelatedLinks'
import { CAL_LINK } from '@/lib/constants'

const rows: { criterion: string; saas: string; custom: string }[] = [
  { criterion: 'Coût à l\'entrée', saas: 'Faible — abonnement mensuel', custom: 'Plus élevé — investissement initial' },
  { criterion: 'Coût dans la durée', saas: 'Croît avec les utilisateurs, à vie', custom: 'Hébergement + maintenance seulement' },
  { criterion: 'Propriété', saas: 'Vous louez un accès', custom: 'Code et données 100 % à vous' },
  { criterion: 'Adaptation à vos process', saas: 'Vous vous adaptez à l\'outil', custom: 'L\'outil épouse votre métier' },
  { criterion: 'Outils qui se parlent', saas: 'Patchwork à connecter', custom: 'Un seul système unifié' },
  { criterion: 'Lock-in', saas: 'Élevé — migration coûteuse', custom: 'Aucun — vous reprenez la main' },
  { criterion: 'Données', saas: 'Chez l\'éditeur', custom: 'Hébergées chez vous · UE · RGPD' },
]

const saasWins = [
  'Un besoin standard, partagé par tout le monde (paie, signature électronique…)',
  'Un besoin ponctuel ou un test rapide',
  'Une très petite structure sans process spécifique',
]
const customWins = [
  'Vos process sont spécifiques et font votre différence',
  'Vous empilez plusieurs SaaS qui ne communiquent pas',
  'Vous voulez être propriétaire de votre outil et de vos données',
  'Le coût cumulé de vos abonnements dépasse celui d\'un système qui vous appartiendrait',
]

export default function VsPage() {
  return (
    <main>
      <Nav />

      <section style={{ padding: '160px 24px 40px' }}>
        <div className="mx-auto text-center" style={{ maxWidth: 820 }}>
          <FadeUp>
            <span className="section-label">Comparatif</span>
            <h1 className="font-serif italic" style={{ fontSize: 'clamp(32px, 5.4vw, 54px)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text)', maxWidth: 760, margin: '14px auto 24px' }}>
              Logiciel sur-mesure <span className="accent">vs SaaS</span> : lequel choisir ?
            </h1>
            <p className="font-sans" style={{ fontSize: 'clamp(15px, 3vw, 18px)', fontWeight: 300, color: 'var(--text-secondary)', maxWidth: 640, margin: '0 auto', lineHeight: 1.65 }}>
              Le SaaS coûte moins cher à l&apos;entrée mais court à vie et vous fait vous adapter à l&apos;outil. Le sur-mesure
              demande un investissement initial, puis vous appartient. Voici, critère par critère, quand chacun a du sens.
            </p>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* Comparison table */}
      <section style={{ padding: '70px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 900 }}>
          <FadeUp>
            <div style={{ overflowX: 'auto', border: '1px solid var(--border)', borderRadius: 14, background: 'var(--bg-card)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 640 }}>
                <thead>
                  <tr>
                    <th style={th}>Critère</th>
                    <th style={th}>SaaS</th>
                    <th style={{ ...th, color: 'var(--accent)' }}>Sur-mesure</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.criterion}>
                      <td style={{ ...td, fontWeight: 500, color: 'var(--text)' }}>{r.criterion}</td>
                      <td style={td}>{r.saas}</td>
                      <td style={{ ...td, color: 'var(--text)' }}>{r.custom}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* When each wins */}
      <section style={{ padding: '70px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 900 }}>
          <div className="vs-cols">
            <FadeUp>
              <div style={cardBox}>
                <h2 className="font-serif italic" style={cardH}>Quand le SaaS suffit</h2>
                <ul style={ul}>{saasWins.map((s) => <li key={s} style={li}>{s}</li>)}</ul>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div style={{ ...cardBox, borderColor: 'rgba(230,57,70,0.25)' }}>
                <h2 className="font-serif italic" style={{ ...cardH, color: 'var(--accent)' }}>Quand le sur-mesure gagne</h2>
                <ul style={ul}>{customWins.map((s) => <li key={s} style={li}>{s}</li>)}</ul>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <Divider />

      <RelatedLinks
        links={[
          { href: '/prix-logiciel-sur-mesure', label: 'Combien coûte le sur-mesure ?', desc: 'Les fourchettes réalistes et le point de bascule vs SaaS.' },
          { href: '/blog/base-de-donnees-vs-excel-pourquoi-migrer', label: 'Base de données vs Excel', desc: 'Quand vos tableurs deviennent un frein — et quoi faire.' },
          { href: '/agence-logiciel-ia-lyon', label: 'Agence à Lyon', desc: 'Qui construit votre logiciel sur-mesure et votre IA.' },
          { href: '/playbook', label: 'Playbooks sectoriels', desc: 'L\'approche appliquée à votre métier.' },
        ]}
      />

      <Divider />

      {/* Verdict + CTA */}
      <section style={{ padding: '80px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp>
            <div style={{ background: 'var(--bg-card)', border: '1px solid rgba(230,57,70,0.15)', borderRadius: 12, padding: '48px 40px', textAlign: 'center' }}>
              <h2 className="font-serif italic" style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 400, marginBottom: 16, color: 'var(--text)' }}>
                Le verdict dépend de vos chiffres.
              </h2>
              <p className="font-sans" style={{ fontSize: 15, fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 520, margin: '0 auto 32px' }}>
                En 20 minutes, on regarde vos abonnements actuels et vos process, et on vous dit franchement si le sur-mesure
                est rentable pour vous — ou si un SaaS fait le job. Offert, sans pitch.
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
        .vs-cols {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          align-items: stretch;
        }
        .vs-cols li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 8px;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--accent);
        }
        @media (max-width: 800px) {
          .vs-cols { grid-template-columns: 1fr; gap: 18px; }
        }
      `}</style>
    </main>
  )
}

const th: React.CSSProperties = {
  textAlign: 'left',
  padding: '16px 20px',
  fontFamily: 'var(--font-mono)',
  fontSize: 11,
  letterSpacing: 1.2,
  textTransform: 'uppercase',
  color: 'var(--text)',
  fontWeight: 600,
  borderBottom: '1px solid var(--border)',
  background: 'var(--bg-elevated)',
}
const td: React.CSSProperties = {
  padding: '14px 20px',
  fontFamily: 'var(--font-sans)',
  fontSize: 13.5,
  fontWeight: 300,
  color: 'var(--text-secondary)',
  lineHeight: 1.5,
  borderBottom: '1px solid var(--border)',
  verticalAlign: 'top',
}
const cardBox: React.CSSProperties = { background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 14, padding: '30px 28px', height: '100%' }
const cardH: React.CSSProperties = { fontSize: 22, fontWeight: 400, lineHeight: 1.2, color: 'var(--text)', margin: '0 0 18px' }
const ul: React.CSSProperties = { listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }
const li: React.CSSProperties = { fontSize: 13.5, color: 'var(--text-secondary)', lineHeight: 1.55, fontWeight: 300, paddingLeft: 16, position: 'relative' }
