'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Map, Boxes, Cpu, FileText, Clock, TrendingUp, Smile, Database, type LucideIcon } from 'lucide-react'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import MobileCta from '@/components/layout/MobileCta'
import Divider from '@/components/ui/Divider'
import FadeUp from '@/components/ui/FadeUp'
import ScreenMock from '@/components/ui/ScreenMock'
import MethodeFeatures from '@/components/methode/MethodeFeatures'
import Faq from '@/components/home/Faq'
import { useLang } from '@/components/providers/LangProvider'
import { makeD } from '@/lib/lang'
import { CAL_LINK } from '@/lib/constants'
import { localizedHref } from '@/lib/routes'

export default function MethodeContent() {
  const { t, lang } = useLang()
  const d = makeD(lang)

  const stats = [
    /* Le parcours vendu aujourd'hui (8 novembre 2026) : un appel de 20 min,
       puis une proposition à prix ferme. Plus de « prototype avant de
       signer » : on ne dit plus « prototype » et on ne construit rien gratuitement. */
    { v: d('20 minutes', '20 minutes', '20 perc'), l: d('pour comprendre comment vous travaillez', 'to understand how you work', 'hogy megértsük, hogyan dolgozik') },
    { v: d('Rien à préparer', 'Nothing to prepare', 'Semmit nem kell előkészíteni'), l: d('vous parlez, on écrit', 'you talk, we write', 'Ön beszél, mi írunk') },
    { v: d('1 prix ferme', '1 firm price', '1 fix ár'), l: d('périmètre écrit, avant de signer', 'written scope, before you sign', 'írásban rögzített feladatkör, aláírás előtt') },
  ]


  const deliverables: { icon: LucideIcon; name: string; desc: string; img: string; mock?: boolean }[] = [
    { icon: Map, name: d('La cartographie de votre organisation', 'Your organisation, mapped', 'A szervezete feltérképezve'), desc: d('Qui fait quoi, avec quel outil, à quelle étape. De la première demande jusqu’à la facture.', 'Who does what, with which tool, at which step. From the first request to the invoice.', 'Ki mit csinál, milyen eszközzel, melyik lépésben. Az első kéréstől a számláig.'), img: 'methode/miro-full' },
    { icon: Boxes, name: d('La plateforme sur mesure', 'The bespoke platform', 'Az egyedi platform'), desc: d('Vos prestataires, vos tarifs, vos saisons, encodés une fois. Vos biens, vos clients et vos missions sur un seul écran.', 'Your suppliers, your rates, your seasons, encoded once. Your properties, your clients and your jobs on one screen.', 'A beszállítói, az árai, a szezonjai egyszer lekódolva. Az ingatlanjai, az ügyfelei és a megbízásai egyetlen képernyőn.'), img: 'prototype/proto-front' },
    { icon: Cpu, name: d('Ce qui tourne tout seul', 'What runs on its own', 'Ami magától megy'), desc: d('Ressaisies, reconfirmations de la veille, relances d’acomptes, documents récurrents. Ce qui revient à chaque demande, automatisé.', 'Re-entry, day-before reconfirmations, deposit follow-ups, recurring documents. What comes back with every request, automated.', 'Újbóli bevitel, előző napi megerősítések, előlegek utánkövetése, ismétlődő dokumentumok. Ami minden kérésnél visszatér, automatizálva.'), img: 'methode/coding' },
    { icon: FileText, name: d('La proposition à prix ferme', 'The firm-price proposal', 'A fix áras ajánlat'), desc: d('Ce qu’on construit, dans quel ordre et pour quel prix, écrit noir sur blanc avant de commencer.', 'What we build, in what order and at what price, written down in black and white before we start.', 'Mit építünk, milyen sorrendben és milyen áron, írásban rögzítve, mielőtt elkezdjük.'), img: 'prototype/diag-feuille' },
  ]

  const results: { icon: LucideIcon; title: string; sub: string }[] = [
    { icon: Clock, title: d('Des heures rendues', 'Hours given back', 'Visszakapott órák'), sub: d('chaque mois, sur le répétitif', 'every month, on the repetitive', 'havonta, az ismétlődő munkán') },
    { icon: TrendingUp, title: d('Des décisions sur des chiffres justes', 'Decisions on figures you trust', 'Döntések megbízható számokon'), sub: d('plus au doigt mouillé ni trois jours plus tard', 'no more guesswork, no more three-day waits', 'nincs több találgatás vagy háromnapos várakozás') },
    { icon: Smile, title: d('Des équipes sereines', 'Calmer teams', 'Nyugodtabb csapatok'), sub: d('et des clients mieux servis', 'and clients better served', 'és jobban kiszolgált ügyfelek') },
    { icon: Database, title: d('Une seule information', 'One single record', 'Egyetlen információ'), sub: d('la même pour la direction et les équipes', 'the same for management and the teams', 'ugyanaz a vezetésnek és a csapatoknak') },
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
            <Link href={localizedHref(CAL_LINK, lang)} className="btn-primary" style={{ margin: '0 auto 40px', fontSize: 14 }}>
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

      {/* Le principe, blocs alternés (inspiré OpsKings how-we-work, sauce NateSystem) */}
      <section style={{ padding: '56px 24px 0' }}>
        <div className="mx-auto text-center" style={{ maxWidth: 700 }}>
          <FadeUp>
            <span className="section-label" style={{ marginBottom: 0 }}>{d('Le principe', 'The principle', 'Az elv')}</span>
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
            <span className="section-label">{d('Ce qui reste après', 'What is left afterwards', 'Ami utána marad')}</span>
            <h2 className="section-title" style={{ maxWidth: 640, margin: '0 auto 14px' }}>
              {d('Mais surtout : ', 'But above all: ', 'De mindenekelőtt: ')}<span className="accent">{d('le résultat.', 'the result.', 'az eredmény.')}</span>
            </h2>
            <p className="font-sans" style={{ fontSize: 15, fontWeight: 300, color: 'var(--text-secondary)', maxWidth: 480, margin: '0 auto' }}>
              {d('Les livrables, c’est bien. Ce que vos équipes gardent vraiment, c’est ça :', 'Deliverables are nice. What your teams actually keep is this:', 'Az átadott anyagok jók. De amit valóban megtart, az ez:')}
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

          {/* « La garantie heures rendues » (« on continue gratuitement ») est
              retirée le 8 novembre 2026 : engagement d'offre non cadré (M1),
              contraire à la FAQ « Vous promettez des résultats ? Non », et
              refusée par un client le 02/11. */}
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
              <Link href={localizedHref(CAL_LINK, lang)} className="btn-primary" style={{ margin: '0 auto' }}>
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

        @media (max-width: 900px) {
          .methode-pillars { grid-template-columns: 1fr; gap: 16px; }
          .methode-deliv-grid { grid-template-columns: 1fr; gap: 16px; }
          .methode-results { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </main>
  )
}
