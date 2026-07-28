'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Map, Boxes, Cpu, FileText, Clock, TrendingUp, Smile, Database, ShieldCheck, type LucideIcon } from 'lucide-react'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import MobileCta from '@/components/layout/MobileCta'
import Divider from '@/components/ui/Divider'
import FadeUp from '@/components/ui/FadeUp'
import ScreenMock from '@/components/ui/ScreenMock'
import MethodeFeatures from '@/components/methode/MethodeFeatures'
import Faq from '@/components/home/Faq'
import { useLang } from '@/components/providers/LangProvider'
import { CAL_LINK } from '@/lib/constants'

export default function MethodeContent() {
  const { t, lang } = useLang()
  const d = (fr: string, en: string) => (lang === 'en' ? en : fr)

  const stats = [
    { v: d('2 semaines', '2 weeks'), l: d('pour la radiographie', 'for the X-ray') },
    { v: d('Sans engagement', 'No commitment'), l: d('rien à préparer', 'nothing to prepare') },
    { v: d('1 prototype', '1 prototype'), l: d('cliquable, avant de signer', 'clickable, before you sign') },
  ]


  const deliverables: { icon: LucideIcon; name: string; desc: string; img: string; mock?: boolean }[] = [
    { icon: Map, name: d('La radiographie de votre entreprise', 'Your business, X-rayed'), desc: d('Comment votre activité tourne réellement : tout ce qui vit dans les têtes, mis sur papier.', 'How your business actually runs: everything living in people’s heads, put on paper.'), img: 'methode/miro-full', mock: true },
    { icon: Boxes, name: d('Systèmes & logiciels sur-mesure', 'Custom systems & software'), desc: d('Le cockpit taillé pour votre métier, avec vos données réunies au même endroit.', 'The cockpit built for your trade, with your data in one place.'), img: 'prototype/proto-front', mock: true },
    { icon: Cpu, name: d('IA & automatisation sur-mesure', 'Custom AI & automation'), desc: d('L’IA et l’automatisation branchées sur vos vraies données, là où elles font gagner des heures.', 'AI and automation plugged into your real data, where they save real hours.'), img: 'methode/coding' },
    { icon: FileText, name: d('Feuille de route & plan d’action', 'Roadmap & action plan'), desc: d('Quoi construire, dans quel ordre, pour combien. Un plan clair, sur-mesure.', 'What to build, in what order, for how much. A clear, custom plan.'), img: 'prototype/diag-feuille' },
  ]

  const results: { icon: LucideIcon; title: string; sub: string }[] = [
    { icon: Clock, title: d('Du temps gagné', 'Time saved'), sub: d('chaque semaine, sur le répétitif', 'every week, on the repetitive') },
    { icon: TrendingUp, title: d('Des deals plus gros', 'Bigger deals'), sub: d('un pipeline qui convertit', 'a pipeline that converts') },
    { icon: Smile, title: d('Une meilleure exp. client', 'A better client experience'), sub: d('et des clients qui restent', 'and clients who stay') },
    { icon: Database, title: d('La bonne data', 'The right data'), sub: d('au bon endroit, au bon moment', 'in the right place, at the right time') },
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

      {/* Le principe — blocs alternés (inspiré OpsKings how-we-work, sauce NateSystem) */}
      <section style={{ padding: '56px 24px 0' }}>
        <div className="mx-auto text-center" style={{ maxWidth: 700 }}>
          <FadeUp>
            <span className="section-label" style={{ marginBottom: 0 }}>{d('Le principe', 'The principle')}</span>
          </FadeUp>
        </div>
      </section>
      <MethodeFeatures />

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
                    {del.img && (del.mock ? (
                      <div style={{ marginTop: 'auto', padding: 16, background: 'var(--bg-elevated)', borderTop: '1px solid var(--border)' }}>
                        <div style={{ height: 158 }}>
                          <ScreenMock src={`/realisations/${del.img}.jpg`} alt={del.name} />
                        </div>
                      </div>
                    ) : (
                      <div style={{ position: 'relative', width: '100%', height: 172, marginTop: 'auto', background: 'var(--bg-elevated)', borderTop: '1px solid var(--border)' }}>
                        <Image
                          src={`/realisations/${del.img}.jpg`}
                          alt={del.name}
                          fill
                          sizes="(max-width: 900px) 90vw, 340px"
                          style={{ objectFit: 'cover', objectPosition: 'center top' }}
                        />
                      </div>
                    ))}
                  </div>
                </FadeUp>
              )
            })}
          </div>
        </div>
      </section>

      <Divider />

      {/* Le vrai livrable : le résultat + la garantie */}
      <section style={{ padding: '96px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 1000 }}>
          <FadeUp className="text-center mb-12">
            <span className="section-label">{d('Le vrai livrable', 'The real deliverable')}</span>
            <h2 className="section-title" style={{ maxWidth: 640, margin: '0 auto 14px' }}>
              {d('Mais surtout : ', 'But above all: ')}<span className="accent">{d('le résultat.', 'the result.')}</span>
            </h2>
            <p className="font-sans" style={{ fontSize: 15, fontWeight: 300, color: 'var(--text-secondary)', maxWidth: 480, margin: '0 auto' }}>
              {d('Les livrables, c’est bien. Ce que vous gardez vraiment, c’est ça :', 'Deliverables are nice. What you truly keep is this:')}
            </p>
          </FadeUp>

          <div className="methode-results">
            {results.map((r) => {
              const Icon = r.icon
              return (
                <FadeUp key={r.title}>
                  <div className="methode-result">
                    <span className="methode-result-ico" aria-hidden="true"><Icon size={20} strokeWidth={1.7} /></span>
                    <span className="font-serif italic methode-result-title">{r.title}</span>
                    <span className="font-sans methode-result-sub">{r.sub}</span>
                  </div>
                </FadeUp>
              )
            })}
          </div>

          {/* La garantie résultat */}
          <FadeUp delay={0.15}>
            <div className="methode-guarantee">
              <span className="methode-guarantee-ico" aria-hidden="true"><ShieldCheck size={22} strokeWidth={1.7} /></span>
              <div>
                <p className="font-mono methode-guarantee-label">{d('La garantie résultat', 'The result guarantee')}</p>
                <p className="font-serif italic methode-guarantee-text">
                  {d('On définit ensemble l’objectif et le délai. On l’atteint dans les temps, ou on continue à travailler gratuitement jusqu’à ce que ce soit le cas.',
                     'We set the goal and the timeline together. We hit it on time, or we keep working for free until we do.')}
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

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
        .methode-deliv-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; align-items: stretch; max-width: 900px; margin: 0 auto; }
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
        /* Le vrai résultat */
        .methode-results {
          display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 16px; margin-bottom: 32px;
        }
        .methode-result {
          display: flex; flex-direction: column; align-items: flex-start; gap: 6px;
          padding: 22px 20px; height: 100%;
          background: var(--bg-card); border: 1px solid var(--border); border-radius: 14px;
          transition: transform 260ms ease, border-color 260ms ease;
        }
        .methode-result:hover { transform: translateY(-3px); border-color: rgba(230,57,70,0.28); }
        .methode-result-ico {
          display: inline-flex; align-items: center; justify-content: center;
          width: 42px; height: 42px; border-radius: 11px; margin-bottom: 6px;
          background: var(--accent-subtle); border: 1px solid rgba(230,57,70,0.18); color: var(--accent);
        }
        .methode-result-title { font-size: 19px; font-weight: 400; color: var(--text); line-height: 1.2; }
        .methode-result-sub { font-size: 13px; font-weight: 300; color: var(--text-secondary); line-height: 1.45; }

        /* La garantie résultat */
        .methode-guarantee {
          display: flex; align-items: flex-start; gap: 20px;
          padding: 30px 32px; border-radius: 16px;
          background: linear-gradient(120deg, var(--accent-subtle), transparent 70%);
          border: 1px solid rgba(230,57,70,0.28);
        }
        .methode-guarantee-ico {
          flex: none; display: inline-flex; align-items: center; justify-content: center;
          width: 48px; height: 48px; border-radius: 12px;
          background: var(--accent); color: #fff;
        }
        .methode-guarantee-label {
          font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: var(--accent); font-weight: 600; margin: 2px 0 8px;
        }
        .methode-guarantee-text { font-size: clamp(18px, 2.4vw, 22px); font-weight: 400; color: var(--text); line-height: 1.45; margin: 0; max-width: 720px; }

        @media (max-width: 900px) {
          .methode-pillars { grid-template-columns: 1fr; gap: 16px; }
          .methode-deliv-grid { grid-template-columns: 1fr; gap: 16px; }
          .methode-results { grid-template-columns: repeat(2, 1fr); }
          .methode-guarantee { flex-direction: column; gap: 14px; padding: 26px 22px; }
        }
      `}</style>
    </main>
  )
}
