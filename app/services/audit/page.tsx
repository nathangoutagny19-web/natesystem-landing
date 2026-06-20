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

const steps = [
  {
    title: 'On cartographie vos process',
    desc: 'Votre façon réelle de travailler, mise à plat : qui fait quoi, dans quel ordre, avec quelles infos. On repère ce qui bloque, ce qui ralentit, ce qui se perd.',
    metric: 'Une vision claire de votre fonctionnement',
  },
  {
    title: 'On chiffre le coût de l\'inaction',
    desc: 'Les heures perdues, les marges qui fuient, les tâches qui traînent. On met un chiffre sur ce que vous coûte de ne rien changer.',
    metric: 'Le coût réel, en euros',
  },
  {
    title: 'On dessine la cible',
    desc: 'Vos opérations telles qu\'elles tourneraient avec un logiciel sur-mesure et de l\'IA là où elle aide. Concret, pas théorique.',
    metric: 'Le « après », à l\'échelle de votre métier',
  },
  {
    title: 'On vous remet le plan',
    desc: 'Un plan d\'action clair et chiffré, priorisé par impact. Exécutable avec nous, en interne, ou un mix. Vous repartez avec, même sans nous.',
    metric: 'Un plan exécutable, livré',
  },
]

const pains = [
  'Vous sentez que ça bloque, mais vous ne savez pas exactement où',
  'Vous voulez digitaliser, mais sans automatiser un process bancal',
  'On vous a déjà vendu des outils qui n\'ont rien changé',
  'Vous voulez savoir où agir en premier — et combien ça coûte',
]

export default function AuditPage() {
  return (
    <main>
      <Nav />

      <section style={{ padding: '160px 24px 40px' }}>
        <div className="mx-auto text-center" style={{ maxWidth: 820 }}>
          <FadeUp>
            <span className="section-label">Audit & consulting</span>
            <h1 className="font-serif italic" style={{ fontSize: 'clamp(32px, 5.4vw, 54px)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text)', maxWidth: 780, margin: '14px auto 24px' }}>
              On comprend votre activité <span className="accent" style={{ color: 'var(--accent)' }}>avant de construire quoi que ce soit.</span>
            </h1>
            <p className="font-sans" style={{ fontSize: 'clamp(15px, 3vw, 18px)', fontWeight: 300, color: 'var(--text-secondary)', maxWidth: 660, margin: '0 auto 36px', lineHeight: 1.65 }}>
              On cartographie vos process, on repère ce qui vous fait perdre du temps et de l&apos;argent, et on vous remet un
              plan d&apos;action clair et chiffré. Vous repartez avec le plan — même si on ne travaille pas ensemble.
            </p>
            <Link href={CAL_LINK} className="btn-primary" style={{ margin: '0 auto', fontSize: 14 }}>
              <span className="btn-primary-dot" />Réserver 20 min · offert →
            </Link>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* Direct answer (GEO) */}
      <section style={{ padding: '70px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp className="text-center mb-8">
            <h2 className="section-title" style={{ maxWidth: 640, margin: '0 auto' }}>
              En quoi consiste <span className="accent">un audit de process</span> ?
            </h2>
          </FadeUp>
          <FadeUp>
            <p className="font-sans" style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.75, fontWeight: 300, maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
              Tout commence par un appel découverte de 20 min, offert, pour comprendre votre situation. Puis on cartographie
              votre façon réelle de travailler, on repère ce qui bloque, et on chiffre ce que vous coûte l&apos;inaction. On
              dessine la cible et on vous remet un plan d&apos;action clair et chiffré.
            </p>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* Pain */}
      <section style={{ padding: '70px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp className="text-center mb-10">
            <span className="section-label">Si vous vous reconnaissez</span>
            <h2 className="section-title" style={{ maxWidth: 620, margin: '0 auto' }}>
              L&apos;audit est <span className="accent">pour vous.</span>
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

      {/* Steps */}
      <section style={{ padding: '70px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 1100 }}>
          <FadeUp className="text-center mb-12">
            <span className="section-label">Comment se passe l&apos;audit</span>
            <h2 className="section-title" style={{ maxWidth: 660, margin: '0 auto' }}>
              Quatre temps, <span className="accent">un plan clair.</span>
            </h2>
          </FadeUp>
          <div className="svc-grid">
            {steps.map((s) => (
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

      {/* Guarantees */}
      <section style={{ padding: '60px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 600 }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 14 }}>
            {[
              'Appel découverte de 20 min · offert',
              'Un plan d\'action clair et chiffré · vous repartez avec',
              'Exécutable avec nous, en interne, ou un mix',
              'Sans engagement · même si on ne travaille pas ensemble',
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
          { href: '/services/logiciel-sur-mesure', label: 'Le logiciel sur-mesure', desc: 'Ce qu\'on construit après l\'audit.' },
          { href: '/services/ia', label: 'L\'IA agentique', desc: 'Là où l\'IA fait gagner de vraies heures.' },
          { href: '/prix-logiciel-sur-mesure', label: 'Combien ça coûte ?', desc: 'Les fourchettes de prix réalistes.' },
          { href: '/tools/diagnostic-ia', label: 'Diagnostic IA', desc: 'Mesurez en 4 min où l\'IA peut vous aider.' },
        ]}
      />

      <Divider />

      {/* CTA */}
      <section style={{ padding: '80px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp>
            <div style={{ background: 'var(--bg-card)', border: '1px solid rgba(230,57,70,0.15)', borderRadius: 12, padding: '48px 40px', textAlign: 'center' }}>
              <h2 className="font-serif italic" style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 400, marginBottom: 16, color: 'var(--text)' }}>
                Sachez où agir en premier.
              </h2>
              <p className="font-sans" style={{ fontSize: 15, fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 520, margin: '0 auto 32px' }}>
                20 minutes, offert. On regarde votre activité et on identifie où vous faire gagner du temps et de l&apos;argent.
                Vous repartez avec un plan clair — même si on ne travaille pas ensemble.
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
