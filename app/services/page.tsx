'use client'

import Link from 'next/link'
import { Clock, TrendingUp, Repeat, Smile, Database, BookOpen, type LucideIcon } from 'lucide-react'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import MobileCta from '@/components/layout/MobileCta'
import Divider from '@/components/ui/Divider'
import FadeUp from '@/components/ui/FadeUp'
import ServicesFeatures from '@/components/services/ServicesFeatures'
import { CAL_LINK } from '@/lib/constants'
import { useLang } from '@/components/providers/LangProvider'
import type { Lang } from '@/lib/i18n'
import { localizedHref } from '@/lib/routes'
import type { TranslationKey } from '@/lib/i18n'

/**
 * Le JSON-LD suit la langue de la page : sous /en, les URL des sous-pages
 * doivent pointer dans l'arbre anglais, sinon Google lit un catalogue qui
 * renvoie ailleurs que la page qui le declare.
 */
function servicesJsonLd(lang: Lang) {
  const base = 'https://www.natesystem.com'
  const root = lang === 'en' ? `${base}/en` : base
  const names =
    lang === 'en'
      ? ['Audit & consulting', 'Custom software & platform', 'Agentic AI & data analytics', 'Training & support']
      : ['Audit & consulting', 'Logiciel & plateforme sur-mesure', 'IA agentique & data analytics', 'Formation & accompagnement']
  const paths = ['/services/audit', '/services/logiciel-sur-mesure', '/services/ia', '/services/formation']

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${root}/services#page`,
        name: lang === 'en' ? 'Our services' : 'Nos services',
        description:
          lang === 'en'
            ? 'NateSystem services: audit and consulting, custom software and platforms, agentic AI and data analytics, all serving one base of results common to any company.'
            : 'Les services NateSystem : audit & consulting, logiciel & plateforme sur-mesure, IA agentique & data analytics, au service d\'un socle de résultats commun à toute entreprise.',
        inLanguage: lang,
        isPartOf: { '@id': `${base}/#organization` },
      },
      {
        '@type': 'ItemList',
        itemListElement: names.map((name, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name,
          url: `${root}${paths[i]}`,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: lang === 'en' ? 'Home' : 'Accueil', item: root },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${root}/services` },
        ],
      },
    ],
  }
}

// Le socle de résultats, commun à toute entreprise (choix Nathan).
type Outcome = { icon: LucideIcon; titleKey: TranslationKey; descKey: TranslationKey }
const outcomes: Outcome[] = [
  { icon: Clock, titleKey: 'svc.out.time.title', descKey: 'svc.out.time.desc' },
  { icon: TrendingUp, titleKey: 'svc.out.deals.title', descKey: 'svc.out.deals.desc' },
  { icon: Repeat, titleKey: 'svc.out.retain.title', descKey: 'svc.out.retain.desc' },
  { icon: Smile, titleKey: 'svc.out.exp.title', descKey: 'svc.out.exp.desc' },
  { icon: Database, titleKey: 'svc.out.align.title', descKey: 'svc.out.align.desc' },
  { icon: BookOpen, titleKey: 'svc.out.know.title', descKey: 'svc.out.know.desc' },
]

export default function ServicesPage() {
  const { lang, t } = useLang()

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd(lang)) }} />
      <Nav />

      {/* Hero, mené par le résultat */}
      <section style={{ padding: '160px 24px 40px' }}>
        <div className="mx-auto text-center" style={{ maxWidth: 820 }}>
          <FadeUp>
            <span className="section-label">{t('svc.hero.label')}</span>
            <h1 className="font-serif italic" style={{ fontSize: 'clamp(32px, 5.4vw, 54px)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text)', maxWidth: 780, margin: '14px auto 24px' }}>
              {t('svc.hero.titlePrefix')}<span className="accent" style={{ color: 'var(--accent)' }}>{t('svc.hero.titleAccent')}</span>
            </h1>
            <p className="font-sans" style={{ fontSize: 'clamp(15px, 3vw, 18px)', fontWeight: 300, color: 'var(--text-secondary)', maxWidth: 660, margin: '0 auto 36px', lineHeight: 1.65 }}>
              {t('svc.hero.sub')}
            </p>
            <Link href={localizedHref(CAL_LINK, lang)} className="btn-primary" style={{ margin: '0 auto', fontSize: 14 }}>
              <span className="btn-primary-dot" />{t('hero.cta')} &rarr;
            </Link>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* Le socle de résultats */}
      <section style={{ padding: '70px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 1100 }}>
          <FadeUp className="text-center mb-16">
            <span className="section-label">{t('svc.outcomes.label')}</span>
            <h2 className="font-serif italic" style={{ fontSize: 'clamp(26px, 3.6vw, 38px)', fontWeight: 400, color: 'var(--text)', lineHeight: 1.2, margin: '4px auto 16px', maxWidth: 720 }}>
              {t('svc.outcomes.titlePrefix')}<span className="accent" style={{ color: 'var(--accent)' }}>{t('svc.outcomes.titleAccent')}</span>
            </h2>
          </FadeUp>

          <div className="svc-out-grid">
            {outcomes.map((o, i) => {
              const Icon = o.icon
              return (
                <FadeUp key={o.titleKey} delay={Math.min(i * 0.07, 0.35)}>
                  <div className="svc-out">
                    <span className="svc-out-ico" aria-hidden="true"><Icon size={20} strokeWidth={1.7} /></span>
                    <h3 className="font-sans svc-out-title">{t(o.titleKey)}</h3>
                    <p className="font-sans svc-out-desc">{t(o.descKey)}</p>
                  </div>
                </FadeUp>
              )
            })}
          </div>

          <FadeUp>
            <p className="font-sans svc-note">{t('svc.outcomes.note')}</p>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* Nos services, 4 blocs alternés (style /methode), chacun vers sa sous-page */}
      <section style={{ padding: '70px 24px 0' }}>
        <div className="mx-auto text-center" style={{ maxWidth: 720 }}>
          <FadeUp>
            <span className="section-label">{t('svc.how.label')}</span>
            <h2 className="font-serif italic" style={{ fontSize: 'clamp(26px, 3.6vw, 38px)', fontWeight: 400, color: 'var(--text)', lineHeight: 1.2, margin: '4px auto 0', maxWidth: 720 }}>
              {t('svc.how.titlePrefix')}<span className="accent" style={{ color: 'var(--accent)' }}>{t('svc.how.titleAccent')}</span>
            </h2>
          </FadeUp>
        </div>
      </section>
      <ServicesFeatures />

      <Divider />

      {/* CTA */}
      <section style={{ padding: '80px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp>
            <div style={{ background: 'var(--bg-card)', border: '1px solid rgba(230,57,70,0.15)', borderRadius: 12, padding: '48px 40px', textAlign: 'center' }}>
              <h2 className="font-serif italic" style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 400, marginBottom: 16, color: 'var(--text)' }}>
                {t('svc.cta.title')}
              </h2>
              <p className="font-sans" style={{ fontSize: 15, fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 520, margin: '0 auto 32px' }}>
                {t('svc.cta.sub')}
              </p>
              <Link href={localizedHref(CAL_LINK, lang)} className="btn-primary" style={{ margin: '0 auto' }}>
                <span className="btn-primary-dot" />{t('hero.cta')}
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
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
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

        @media (max-width: 1080px) { .svc-pillars { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) { .svc-pillars { grid-template-columns: 1fr; } }
      `}</style>
    </main>
  )
}
