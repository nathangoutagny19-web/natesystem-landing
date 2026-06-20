'use client'

import Link from 'next/link'
import { ClipboardCheck, Boxes, Brain, ArrowRight, type LucideIcon } from 'lucide-react'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import MobileCta from '@/components/layout/MobileCta'
import Divider from '@/components/ui/Divider'
import FadeUp from '@/components/ui/FadeUp'
import { CAL_LINK } from '@/lib/constants'

const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': 'https://www.natesystem.com/services#page',
      name: 'Nos services',
      description: 'Les services NateSystem : audit & consulting, logiciel & plateforme sur-mesure, IA agentique & data analytics.',
      isPartOf: { '@id': 'https://www.natesystem.com/#organization' },
    },
    {
      '@type': 'ItemList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Audit & consulting', url: 'https://www.natesystem.com/services/audit' },
        { '@type': 'ListItem', position: 2, name: 'Logiciel & plateforme sur-mesure', url: 'https://www.natesystem.com/services/logiciel-sur-mesure' },
        { '@type': 'ListItem', position: 3, name: 'IA agentique & data analytics', url: 'https://www.natesystem.com/services/ia' },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.natesystem.com' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.natesystem.com/services' },
      ],
    },
  ],
}

type Pillar = { icon: LucideIcon; eyebrow: string; title: string; desc: string; href: string }

const pillars: Pillar[] = [
  {
    icon: ClipboardCheck,
    eyebrow: 'On comprend',
    title: 'Audit & consulting',
    desc: 'On cartographie vos process, on repère ce qui vous fait perdre du temps et de l\'argent, et on vous remet un plan d\'action clair et chiffré.',
    href: '/services/audit',
  },
  {
    icon: Boxes,
    eyebrow: 'On construit',
    title: 'Logiciel & plateforme sur-mesure',
    desc: 'On réunit vos outils et vos données dans une seule plateforme conçue pour votre métier. Vous êtes propriétaire du code, hébergé en UE.',
    href: '/services/logiciel-sur-mesure',
  },
  {
    icon: Brain,
    eyebrow: 'On propulse',
    title: 'IA agentique & data analytics',
    desc: 'Une IA qui exécute des tâches de bout en bout, apprend votre métier et s\'améliore. De la data analytics pour décider sur du concret.',
    href: '/services/ia',
  },
]

export default function ServicesPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }} />
      <Nav />

      <section style={{ padding: '160px 24px 40px' }}>
        <div className="mx-auto text-center" style={{ maxWidth: 820 }}>
          <FadeUp>
            <span className="section-label">Nos services</span>
            <h1 className="font-serif italic" style={{ fontSize: 'clamp(32px, 5.4vw, 54px)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text)', maxWidth: 780, margin: '14px auto 24px' }}>
              On comprend. <span className="accent" style={{ color: 'var(--accent)' }}>On construit sur-mesure.</span>
            </h1>
            <p className="font-sans" style={{ fontSize: 'clamp(15px, 3vw, 18px)', fontWeight: 300, color: 'var(--text-secondary)', maxWidth: 640, margin: '0 auto 36px', lineHeight: 1.65 }}>
              On part de votre métier, on assemble ce qu&apos;il vous faut : audit, logiciel & plateforme sur-mesure, IA là où
              elle vous fait gagner. Rarement l&apos;un ou l&apos;autre — un écosystème digital taillé pour votre activité.
            </p>
            <Link href={CAL_LINK} className="btn-primary" style={{ margin: '0 auto', fontSize: 14 }}>
              <span className="btn-primary-dot" />Réserver 20 min · offert →
            </Link>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* The 3 pillars */}
      <section style={{ padding: '70px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 1100 }}>
          <div className="svc-pillars">
            {pillars.map((p, i) => {
              const Icon = p.icon
              return (
                <FadeUp key={p.title} delay={i * 0.1}>
                  <Link href={p.href} className="svc-pillar-card">
                    <span className="svc-pillar-ico" aria-hidden="true">
                      <Icon size={22} strokeWidth={1.8} />
                    </span>
                    <p className="font-mono svc-pillar-eyebrow">{p.eyebrow}</p>
                    <h2 className="font-serif italic svc-pillar-title">{p.title}</h2>
                    <p className="font-sans svc-pillar-desc">{p.desc}</p>
                    <span className="font-mono svc-pillar-link">
                      En savoir plus <ArrowRight size={14} strokeWidth={2} />
                    </span>
                  </Link>
                </FadeUp>
              )
            })}
          </div>
        </div>
      </section>

      <Divider />

      {/* CTA */}
      <section style={{ padding: '80px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp>
            <div style={{ background: 'var(--bg-card)', border: '1px solid rgba(230,57,70,0.15)', borderRadius: 12, padding: '48px 40px', textAlign: 'center' }}>
              <h2 className="font-serif italic" style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 400, marginBottom: 16, color: 'var(--text)' }}>
                On part de votre métier.
              </h2>
              <p className="font-sans" style={{ fontSize: 15, fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 520, margin: '0 auto 32px' }}>
                20 minutes, offert. On regarde votre activité et on identifie ce qu&apos;il vous faut vraiment — audit,
                logiciel sur-mesure, IA. Vous repartez avec un plan clair, même si on ne travaille pas ensemble.
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
        .svc-pillars {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
          align-items: stretch;
        }
        .svc-pillar-card {
          display: flex; flex-direction: column; gap: 14px; height: 100%;
          background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px;
          padding: 32px 28px; text-decoration: none;
          box-shadow: 0 1px 2px rgba(15,23,42,0.04), 0 8px 24px -16px rgba(15,23,42,0.12);
          transition: transform 280ms cubic-bezier(0.22,1,0.36,1), border-color 280ms ease, box-shadow 280ms ease;
        }
        .svc-pillar-card:hover {
          transform: translateY(-4px);
          border-color: rgba(230,57,70,0.28);
          box-shadow: 0 18px 40px -22px rgba(230,57,70,0.28), 0 1px 2px rgba(15,23,42,0.04);
        }
        .svc-pillar-ico {
          display: inline-flex; align-items: center; justify-content: center;
          width: 48px; height: 48px; border-radius: 12px;
          background: var(--accent-subtle); border: 1px solid rgba(230,57,70,0.18); color: var(--accent);
        }
        .svc-pillar-eyebrow {
          font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase;
          color: var(--text-muted); font-weight: 600; margin: 0;
        }
        .svc-pillar-title { font-size: 22px; font-weight: 400; line-height: 1.15; color: var(--text); margin: 0; }
        .svc-pillar-desc { font-size: 14px; line-height: 1.6; font-weight: 300; color: var(--text-secondary); margin: 0; flex: 1; }
        .svc-pillar-link {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 12px; letter-spacing: 0.5px; color: var(--accent); margin-top: 4px;
        }
        .svc-pillar-card :global(svg) { transition: transform 220ms ease; }
        .svc-pillar-card:hover .svc-pillar-link :global(svg) { transform: translateX(3px); }

        @media (max-width: 900px) { .svc-pillars { grid-template-columns: 1fr; gap: 18px; } }
      `}</style>
    </main>
  )
}
