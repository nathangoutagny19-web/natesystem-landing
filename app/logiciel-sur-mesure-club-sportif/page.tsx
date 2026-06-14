'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Check } from 'lucide-react'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import MobileCta from '@/components/layout/MobileCta'
import Divider from '@/components/ui/Divider'
import FadeUp from '@/components/ui/FadeUp'
import RelatedLinks from '@/components/ui/RelatedLinks'
import { CAL_LINK } from '@/lib/constants'

const YOUTUBE_ID = '4ae5mATIjhw'

const modules = [
  {
    title: 'Offres de sponsoring automatiques',
    desc: 'Après chaque appel partenaire, l\'outil génère l\'offre de sponsoring — en PDF, slides ou mail — instantanément, dans votre identité, reliée à votre CRM. Fini les heures passées sur Excel et PowerPoint.',
    metric: 'Une offre prête en minutes, pas en heures',
  },
  {
    title: 'Back-office commercial unifié',
    desc: 'Vos partenaires, vos relances, vos contrats et vos échéances pilotés au même endroit — au lieu d\'un patchwork d\'Excel, WhatsApp et outils génériques.',
    metric: 'Des heures de gestion hebdo récupérées',
  },
  {
    title: 'Gestion des bénévoles',
    desc: 'Planning, attribution des rôles, check-in en temps réel, communication interne — intégrés à la même infrastructure, sans Excel + WhatsApp en chaos.',
    metric: 'Coordination divisée, no-shows en baisse',
  },
  {
    title: 'Un système qui vous appartient',
    desc: 'Tout est réuni dans un logiciel sur-mesure dont le club est propriétaire — pas un abonnement de plus, pas de données chez un tiers.',
    metric: 'Code livré · hébergé en UE',
  },
]

const pains = [
  'Les offres de sponsoring composées à la main, à chaque fois, dans Excel et PowerPoint',
  'Un back-office commercial éparpillé entre tableurs, WhatsApp et outils génériques',
  'La gestion des bénévoles qui repose sur des fichiers que tout le monde modifie',
  'Des données du club dispersées, sans système qui lui appartienne vraiment',
]

function LiteYouTube({ title }: { title: string }) {
  const [loaded, setLoaded] = useState(false)
  if (loaded) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0&modestbranding=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
        style={{ borderRadius: 12, border: 0 }}
      />
    )
  }
  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      aria-label={title}
      className="absolute inset-0 w-full h-full group"
      style={{ borderRadius: 12, border: 0, padding: 0, cursor: 'pointer', background: '#000' }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://i.ytimg.com/vi/${YOUTUBE_ID}/maxresdefault.jpg`}
        alt={title}
        loading="lazy"
        className="absolute inset-0 w-full h-full"
        style={{ objectFit: 'cover', transition: 'transform 0.5s ease', opacity: 0.85 }}
        onError={(e) => {
          ;(e.target as HTMLImageElement).src = `https://i.ytimg.com/vi/${YOUTUBE_ID}/hqdefault.jpg`
        }}
      />
      <span
        className="absolute left-1/2 top-1/2"
        style={{
          transform: 'translate(-50%, -50%)',
          width: 68,
          height: 48,
          borderRadius: 12,
          background: 'var(--accent)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
      </span>
    </button>
  )
}

export default function ClubSportifPage() {
  return (
    <main>
      <Nav />

      <section style={{ padding: '160px 24px 40px' }}>
        <div className="mx-auto text-center" style={{ maxWidth: 820 }}>
          <FadeUp>
            <span className="section-label">Clubs sportifs</span>
            <h1 className="font-serif italic" style={{ fontSize: 'clamp(32px, 5.4vw, 54px)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text)', maxWidth: 760, margin: '14px auto 24px' }}>
              Générez vos offres de sponsoring <span className="accent" style={{ color: 'var(--accent)' }}>en minutes, pas en heures.</span>
            </h1>
            <p className="font-sans" style={{ fontSize: 'clamp(15px, 3vw, 18px)', fontWeight: 300, color: 'var(--text-secondary)', maxWidth: 640, margin: '0 auto 36px', lineHeight: 1.65 }}>
              Pour un club sportif, le logiciel et l&apos;IA sur-mesure automatisent le back-office commercial — création des
              offres partenaires reliée au CRM — et la gestion des bénévoles. Un seul système, qui appartient au club.
              L&apos;IA intégrée uniquement là où elle remplace de vraies heures.
            </p>
            <Link href={CAL_LINK} className="btn-primary" style={{ margin: '0 auto', fontSize: 14 }}>
              <span className="btn-primary-dot" />Réserver 20 min · offert →
            </Link>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* Video demo */}
      <section style={{ padding: '60px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 860 }}>
          <FadeUp className="text-center mb-8">
            <span className="section-label">La démo en 2 minutes</span>
            <h2 className="section-title" style={{ maxWidth: 640, margin: '0 auto' }}>
              Comment un club gagne <span className="accent">jusqu&apos;à 15h par semaine</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', borderRadius: 12, overflow: 'hidden', border: '1px solid var(--border)' }}>
              <LiteYouTube title="Comment un club sportif gagne jusqu'à 15h par semaine avec l'IA" />
            </div>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* Pain */}
      <section style={{ padding: '70px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp className="text-center mb-10">
            <span className="section-label">Le quotidien d&apos;un club</span>
            <h2 className="section-title" style={{ maxWidth: 620, margin: '0 auto' }}>
              Le <span className="accent">SaaS-spaghetti</span> d&apos;un club sportif
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

      {/* Modules */}
      <section style={{ padding: '70px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 1100 }}>
          <FadeUp className="text-center mb-12">
            <span className="section-label">Ce qu&apos;on construit pour les clubs sportifs</span>
            <h2 className="section-title" style={{ maxWidth: 640, margin: '0 auto' }}>
              Quatre leviers, <span className="accent">un seul système.</span>
            </h2>
          </FadeUp>
          <div className="club-grid">
            {modules.map((m) => (
              <div key={m.title} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 14, padding: '28px 26px', height: '100%', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <h3 className="font-serif italic" style={{ fontSize: 22, fontWeight: 400, lineHeight: 1.15, color: 'var(--text)', margin: 0 }}>{m.title}</h3>
                <p className="font-sans" style={{ fontSize: 13.5, color: 'var(--text-secondary)', lineHeight: 1.6, fontWeight: 300, margin: 0, flex: 1 }}>{m.desc}</p>
                <div style={{ borderLeft: '2px solid var(--accent)', paddingLeft: 12, marginTop: 4 }}>
                  <p className="font-mono" style={{ fontSize: 11, fontWeight: 500, color: 'var(--accent)', lineHeight: 1.4, margin: 0 }}>{m.metric}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* What the system targets — capability, not a client claim */}
      <section style={{ padding: '70px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 14, padding: '40px 36px', textAlign: 'center' }}>
              <p className="font-serif italic accent" style={{ color: 'var(--accent)', fontSize: 'clamp(28px, 4.5vw, 38px)', fontWeight: 400, lineHeight: 1.2, margin: '0 0 12px' }}>
                L&apos;essentiel du back-office commercial, automatisé.
              </p>
              <p className="font-sans" style={{ fontSize: 15, color: 'var(--text-secondary)', fontWeight: 300, lineHeight: 1.65, maxWidth: 540, margin: '0 auto' }}>
                Génération des offres de sponsoring, suivi des partenaires, gestion des bénévoles : ce que la démo ci-dessus
                montre, c&apos;est exactement ce qu&apos;un club peut faire piloter par un seul système sur-mesure, à sa main.
                On part de votre situation pour chiffrer concrètement ce que ça vous ferait gagner.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* Guarantees */}
      <section style={{ padding: '60px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 600 }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 14 }}>
            {[
              'Code source livré · le club est propriétaire à 100 %',
              'Données hébergées en UE · RGPD-natif',
              'En production en 4 à 8 semaines · vos équipes continuent de travailler',
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
          { href: '/logiciel-sur-mesure-vs-saas', label: 'Sur-mesure ou SaaS ?', desc: 'Pourquoi un système qui appartient au club plutôt qu\'un outil loué.' },
          { href: '/prix-logiciel-sur-mesure', label: 'Combien ça coûte ?', desc: 'Les fourchettes de prix réalistes.' },
          { href: '/logiciel-sur-mesure-conseil', label: 'Et pour le conseil ?', desc: 'Un autre secteur, la même méthode.' },
          { href: '/playbook', label: 'Playbooks sectoriels', desc: 'L\'IA appliquée à d\'autres métiers.' },
        ]}
      />

      <Divider />

      {/* CTA */}
      <section style={{ padding: '80px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp>
            <div style={{ background: 'var(--bg-card)', border: '1px solid rgba(230,57,70,0.15)', borderRadius: 12, padding: '48px 40px', textAlign: 'center' }}>
              <h2 className="font-serif italic" style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 400, marginBottom: 16, color: 'var(--text)' }}>
                Libérez le temps de votre club.
              </h2>
              <p className="font-sans" style={{ fontSize: 15, fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 520, margin: '0 auto 32px' }}>
                20 minutes, offert. On regarde votre back-office commercial et votre gestion des bénévoles, et on identifie ce
                qu&apos;un seul système vous ferait gagner. Même si on ne travaille pas ensemble.
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
        .club-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
          align-items: stretch;
        }
        @media (max-width: 800px) {
          .club-grid { grid-template-columns: 1fr; gap: 18px; }
        }
      `}</style>
    </main>
  )
}
