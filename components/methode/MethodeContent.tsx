'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Map, MousePointerClick, FileText, Layers, Zap, type LucideIcon } from 'lucide-react'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import MobileCta from '@/components/layout/MobileCta'
import Divider from '@/components/ui/Divider'
import FadeUp from '@/components/ui/FadeUp'
import Process from '@/components/home/Process'
import WhatWeBuild from '@/components/home/WhatWeBuild'
import Faq from '@/components/home/Faq'
import Radiographie from '@/components/methode/Radiographie'
import { useLang } from '@/components/providers/LangProvider'
import { CAL_LINK } from '@/lib/constants'

export default function MethodeContent() {
  const { t, lang } = useLang()
  const d = (fr: string, en: string) => (lang === 'en' ? en : fr)

  const stats = [
    { v: d('2 semaines', '2 weeks'), l: d('pour la radiographie', 'for the X-ray') },
    { v: d('3 à 5 appels', '3–5 calls'), l: d('rien à préparer', 'nothing to prepare') },
    { v: d('1 prototype', '1 prototype'), l: d('cliquable, avant de signer', 'clickable, before you sign') },
  ]

  const pillars: { icon: LucideIcon; titleFr: string; titleEn: string; descFr: string; descEn: string }[] = [
    {
      icon: Map,
      titleFr: 'Cartographier',
      titleEn: 'Map',
      descFr: 'On met tout à plat : chaque étape, de l’arrivée d’un prospect au client qui recommande. Ce qui vit dans les têtes passe sur le papier.',
      descEn: 'We lay it all out: every step, from a prospect’s arrival to a client who refers you. What lives in people’s heads goes onto paper.',
    },
    {
      icon: Layers,
      titleFr: 'Unifier',
      titleEn: 'Unify',
      descFr: 'Vos données éparpillées rejoignent une seule source, à jour en temps réel. Fini les dix outils qui ne se parlent pas.',
      descEn: 'Your scattered data joins a single source, live in real time. No more ten tools that don’t talk to each other.',
    },
    {
      icon: Zap,
      titleFr: 'Automatiser',
      titleEn: 'Automate',
      descFr: 'L’IA et l’automatisation prennent le répétitif — uniquement là où elles remplacent de vraies heures. Jamais en décoration.',
      descEn: 'AI and automation take the repetitive work — only where they replace real hours. Never for show.',
    },
  ]

  const deliverables: { icon: LucideIcon; name: string; desc: string; img?: string; fit?: 'contain' | 'cover' }[] = [
    { icon: Map, name: t('v2.sprint.d1.name'), desc: t('v2.sprint.d1.desc') },
    { icon: MousePointerClick, name: t('v2.sprint.d2.name'), desc: t('v2.sprint.d2.desc'), img: 'proto-front', fit: 'contain' },
    { icon: FileText, name: t('v2.sprint.d3.name'), desc: t('v2.sprint.d3.desc'), img: 'feuille-photo', fit: 'cover' },
  ]

  return (
    <main>
      <Nav />

      {/* Hero */}
      <section style={{ padding: '160px 24px 40px' }}>
        <div className="mx-auto text-center" style={{ maxWidth: 880 }}>
          <FadeUp>
            <span className="section-label">{t('methode.hero.eyebrow')}</span>
            <h1 className="font-serif italic" style={{ fontSize: 'clamp(32px, 5.4vw, 54px)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text)', maxWidth: 820, margin: '14px auto 22px' }}>
              {t('methode.hero.title')}{' '}
              <span className="accent" style={{ color: 'var(--accent)' }}>{t('methode.hero.titleAccent')}</span>
            </h1>
            <p className="font-sans" style={{ fontSize: 'clamp(15px, 3vw, 18px)', fontWeight: 300, color: 'var(--text-secondary)', maxWidth: 660, margin: '0 auto 32px', lineHeight: 1.65 }}>
              {t('methode.hero.sub')}
            </p>
            <Link href={CAL_LINK} className="btn-primary" style={{ margin: '0 auto 40px', fontSize: 14 }}>
              <span className="btn-primary-dot" />{t('methode.hero.cta')} →
            </Link>
            <div className="methode-stats">
              {stats.map((s) => (
                <div key={s.v} className="methode-stat">
                  <span className="font-serif italic methode-stat-v">{s.v}</span>
                  <span className="font-mono methode-stat-l">{s.l}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* 3 piliers — Cartographier · Unifier · Automatiser */}
      <section style={{ padding: '90px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 1080 }}>
          <FadeUp className="text-center mb-14">
            <span className="section-label">{d('Le principe', 'The principle')}</span>
            <h2 className="section-title" style={{ maxWidth: 640, margin: '0 auto' }}>
              {d('Cartographier. Unifier. ', 'Map. Unify. ')}<span className="accent">{d('Automatiser.', 'Automate.')}</span>
            </h2>
          </FadeUp>
          <div className="methode-pillars">
            {pillars.map((p, i) => {
              const Icon = p.icon
              return (
                <FadeUp key={p.titleFr} delay={i * 0.08}>
                  <div className="methode-pillar">
                    <span className="methode-pillar-num font-mono">{String(i + 1).padStart(2, '0')}</span>
                    <span className="methode-pillar-ico" aria-hidden="true"><Icon size={20} strokeWidth={1.7} /></span>
                    <h3 className="font-serif italic methode-pillar-title">{d(p.titleFr, p.titleEn)}</h3>
                    <p className="font-sans methode-pillar-desc">{d(p.descFr, p.descEn)}</p>
                  </div>
                </FadeUp>
              )
            })}
          </div>
        </div>
      </section>

      <Divider />

      {/* La Radiographie interactive (la carte d'onboarding) */}
      <Radiographie />

      <Divider />

      {/* Les 4 temps (Process réutilisé) */}
      <Process />

      <Divider />

      {/* Les 3 livrables (avec image dans chaque case) */}
      <section style={{ padding: '100px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 1080 }}>
          <FadeUp className="text-center mb-11">
            <span className="section-label">{t('methode.deliv.label')}</span>
            <h2 className="section-title" style={{ maxWidth: 640, margin: '0 auto 14px' }}>
              {t('methode.deliv.title')}
            </h2>
            <p className="font-sans" style={{ fontSize: 15, fontWeight: 300, color: 'var(--text-secondary)', maxWidth: 460, margin: '0 auto' }}>
              {t('methode.deliv.sub')}
            </p>
          </FadeUp>

          <div className="methode-deliv-grid">
            {deliverables.map((del, i) => {
              const Icon = del.icon
              return (
                <FadeUp key={del.name} delay={i * 0.1}>
                  <div className="methode-deliv-card">
                    <div style={{ padding: '30px 26px 22px' }}>
                      <span className="methode-deliv-ico" aria-hidden="true">
                        <Icon size={20} strokeWidth={1.8} />
                      </span>
                      <p className="font-serif italic" style={{ fontSize: 22, fontWeight: 400, color: 'var(--text)', margin: '2px 0 8px' }}>
                        {del.name}
                      </p>
                      <p className="font-sans" style={{ fontSize: 14, lineHeight: 1.6, fontWeight: 300, color: 'var(--text-secondary)', margin: 0 }}>
                        {del.desc}
                      </p>
                    </div>
                    {del.img && (
                      <div style={{ position: 'relative', width: '100%', height: 172, marginTop: 'auto', background: 'var(--bg-elevated)', borderTop: '1px solid var(--border)' }}>
                        <Image
                          src={`/realisations/prototype/${del.img}.jpg`}
                          alt={del.name}
                          fill
                          sizes="(max-width: 900px) 90vw, 340px"
                          style={{ objectFit: del.fit, objectPosition: 'center top', padding: del.fit === 'contain' ? '10px' : 0 }}
                        />
                      </div>
                    )}
                  </div>
                </FadeUp>
              )
            })}
          </div>
        </div>
      </section>

      <Divider />

      {/* Ce qu'on construit (what we ship) */}
      <WhatWeBuild />

      <Divider />

      {/* FAQ */}
      <Faq />

      <Divider />

      {/* CTA */}
      <section style={{ padding: '80px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp>
            <div style={{ background: 'var(--bg-card)', border: '1px solid rgba(230,57,70,0.15)', borderRadius: 12, padding: '48px 40px', textAlign: 'center' }}>
              <h2 className="font-serif italic" style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 400, marginBottom: 16, color: 'var(--text)' }}>
                {t('methode.cta.title')}
              </h2>
              <p className="font-sans" style={{ fontSize: 15, fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 520, margin: '0 auto 32px' }}>
                {t('methode.cta.sub')}
              </p>
              <Link href={CAL_LINK} className="btn-primary" style={{ margin: '0 auto' }}>
                <span className="btn-primary-dot" />{t('methode.cta.button')}
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <Divider />
      <Footer />
      <MobileCta />

      <style jsx>{`
        /* Hero stats */
        .methode-stats { display: flex; flex-wrap: wrap; justify-content: center; gap: 14px 40px; }
        .methode-stat { display: flex; flex-direction: column; gap: 3px; }
        .methode-stat-v { font-size: clamp(22px, 3vw, 30px); font-weight: 400; color: var(--accent); line-height: 1; }
        .methode-stat-l { font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase; color: var(--text-muted); }

        /* 3 piliers */
        .methode-pillars { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; align-items: stretch; }
        .methode-pillar {
          position: relative; height: 100%;
          background: var(--bg-card); border: 1px solid var(--border); border-radius: 14px; padding: 30px 26px;
          transition: transform 280ms cubic-bezier(0.22,1,0.36,1), border-color 280ms ease;
        }
        .methode-pillar:hover { transform: translateY(-3px); border-color: var(--border-hover); }
        .methode-pillar-num { position: absolute; top: 22px; right: 24px; font-size: 12px; color: var(--text-muted); }
        .methode-pillar-ico {
          display: inline-flex; align-items: center; justify-content: center;
          width: 44px; height: 44px; border-radius: 11px; margin-bottom: 16px;
          background: var(--accent-subtle); border: 1px solid rgba(230,57,70,0.18); color: var(--accent);
        }
        .methode-pillar-title { font-size: 22px; font-weight: 400; color: var(--text); margin: 0 0 10px; }
        .methode-pillar-desc { font-size: 14px; line-height: 1.6; font-weight: 300; color: var(--text-secondary); margin: 0; }

        /* Livrables */
        .methode-deliv-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; align-items: stretch; }
        .methode-deliv-card {
          display: flex; flex-direction: column; height: 100%; overflow: hidden;
          background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px;
          box-shadow: 0 1px 2px rgba(15,23,42,0.04), 0 8px 24px -16px rgba(15,23,42,0.12);
          transition: transform 280ms cubic-bezier(0.22,1,0.36,1), border-color 280ms ease;
        }
        .methode-deliv-card:hover { transform: translateY(-3px); border-color: rgba(230,57,70,0.28); }
        .methode-deliv-ico {
          display: inline-flex; align-items: center; justify-content: center;
          width: 44px; height: 44px; border-radius: 11px; margin-bottom: 16px;
          background: var(--accent-subtle); border: 1px solid rgba(230,57,70,0.18); color: var(--accent);
        }
        @media (max-width: 900px) {
          .methode-pillars { grid-template-columns: 1fr; gap: 16px; }
          .methode-deliv-grid { grid-template-columns: 1fr; gap: 16px; }
        }
      `}</style>
    </main>
  )
}
