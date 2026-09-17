'use client'

import Link from 'next/link'
import { Search, Boxes, Cpu, GraduationCap, ArrowRight, type LucideIcon } from 'lucide-react'
import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'
import { makeD, pick } from '@/lib/lang'
import { localizedHref } from '@/lib/routes'
import FanMockups from '@/components/methode/FanMockups'

type Block = {
  n: string
  icon: LucideIcon
  href: string
  linkFr: string; linkEn: string; linkHu: string
  fan?: boolean
  img?: string
  photo?: string
  eyebrowFr: string; eyebrowEn: string; eyebrowHu: string
  titleFr: string; titleEn: string; titleHu: string
  paraFr: string; paraEn: string; paraHu: string
  bulletsFr: string[]; bulletsEn: string[]; bulletsHu: string[]
}

const BLOCKS: Block[] = [
  {
    n: '01', icon: Search, href: '/services/audit', linkFr: 'Voir le consulting', linkEn: 'See consulting', linkHu: 'Tanácsadás megtekintése',
    img: 'methode/miro-full',
    eyebrowFr: 'On comprend', eyebrowEn: 'We understand', eyebrowHu: 'Megértjük',
    titleFr: 'Consulting opérationnel', titleEn: 'Operational consulting', titleHu: 'Operatív tanácsadás',
    paraFr: 'On radiographie votre activité de bout en bout, on repère les points de blocage et on vous remet une carte claire, chiffrée. C’est la fondation de tout le reste, et vous repartez avec, même si on s’arrête là.',
    paraEn: 'We X-ray your business end to end, spot the bottlenecks and hand you a clear, costed map. It’s the foundation of everything else, and it’s yours to keep even if we stop there.', paraHu: 'Végponttól végpontig átvilágítjuk a cégét, megtaláljuk a szűk keresztmetszeteket, és világos, beárazott térképet adunk a kezébe. Ez az alapja mindennek, ami utána jön, és az Öné marad akkor is, ha itt megállunk.',
    bulletsFr: ['Cartographie complète de vos process', 'Les bottlenecks classés par impact', 'Un plan d’action chiffré, à vous'],
    bulletsEn: ['Full mapping of your processes', 'Bottlenecks ranked by impact', 'A costed action plan, yours to keep'],
    bulletsHu: ['A folyamatai teljes feltérképezése', 'A szűk keresztmetszetek hatás szerint rangsorolva', 'Beárazott cselekvési terv, az Öné'],
  },
  {
    n: '02', icon: Boxes, href: '/services/logiciel-sur-mesure', linkFr: 'Voir le développement', linkEn: 'See development', linkHu: 'Fejlesztés megtekintése',
    fan: true,
    eyebrowFr: 'On construit', eyebrowEn: 'We build', eyebrowHu: 'Megépítjük',
    titleFr: 'Système sur-mesure', titleEn: 'Custom system', titleHu: 'Egyedi rendszer',
    paraFr: 'Le logiciel, le cockpit ou le portail taillé pour votre métier, pas l’inverse. Vos données réunies au même endroit, vos workflows intégrés, et le code qui vous appartient à 100 %.',
    paraEn: 'The software, cockpit or portal built for your trade, not the other way round. Your data in one place, your workflows built in, and code that’s 100% yours.', paraHu: 'A szoftver, vezérlőpult vagy portál a szakmájára építve, nem fordítva. Az adatai egy helyen, a munkafolyamatai beépítve, és a kód 100%-ban az Öné.',
    bulletsFr: ['Logiciel métier, ERP, portail, cockpit', 'Vos données unifiées, à jour en temps réel', 'Votre code, 100 % à vous'],
    bulletsEn: ['Business software, ERP, portal, cockpit', 'Your data unified, live in real time', 'Your code, 100% yours'],
    bulletsHu: ['Szakmai szoftver, ERP, portál, vezérlőpult', 'Az adatai egységesítve, valós időben frissülve', 'A kódja, 100%-ban az Öné'],
  },
  {
    n: '03', icon: Cpu, href: '/services/ia', linkFr: 'Voir l’IA & l’automatisation', linkEn: 'See AI & automation', linkHu: 'MI és automatizálás megtekintése',
    photo: 'methode/coding',
    eyebrowFr: 'On automatise', eyebrowEn: 'We automate', eyebrowHu: 'Automatizálunk',
    titleFr: 'IA & automatisation', titleEn: 'AI & automation', titleHu: 'MI és automatizálás',
    paraFr: 'L’IA et l’automatisation branchées sur vos vraies données, uniquement là où elles remplacent de vraies heures. Agents autonomes, lecture de documents, qualification et relances, analytics en temps réel.',
    paraEn: 'AI and automation plugged into your real data, only where they replace real hours. Autonomous agents, document reading, lead qualification and follow-ups, real-time analytics.', paraHu: 'MI és automatizálás a valódi adataira kötve, kizárólag ott, ahol valódi munkaórákat vált ki. Önálló ágensek, dokumentumolvasás, leadminősítés és utánkövetés, valós idejű elemzés.',
    bulletsFr: ['Des agents IA branchés sur vos données', 'L’admin et la saisie manuelle, automatisés', 'Des alertes qui attrapent les problèmes tôt'],
    bulletsEn: ['AI agents plugged into your data', 'Admin and manual data-entry, automated', 'Alerts that catch problems early'],
    bulletsHu: ['MI-ágensek a saját adataira kötve', 'Az adminisztráció és a kézi adatbevitel automatizálva', 'Riasztások, amelyek korán elkapják a bajt'],
  },
  {
    n: '04', icon: GraduationCap, href: '/services/formation', linkFr: 'Voir la formation', linkEn: 'See training', linkHu: 'Képzés megtekintése',
    photo: 'prototype/diag-feuille',
    eyebrowFr: 'On rend autonome', eyebrowEn: 'We hand over autonomy', eyebrowHu: 'Átadjuk az önállóságot',
    titleFr: 'Formation & accompagnement', titleEn: 'Training & support', titleHu: 'Képzés és támogatás',
    paraFr: 'Construire l’outil, c’est facile ; le faire adopter par toute votre équipe, c’est le vrai job, et il compte autant pour nous. On forme tout le monde, du dirigeant au terrain, jusqu’à ce que l’outil tourne sans nous. Le code et l’infrastructure vous appartiennent, documentés.',
    paraEn: 'Building the tool is easy; getting your whole team to adopt it is the real job, and it matters to us just as much. We train everyone, from leadership to the field, until the tool runs without us. The code and infrastructure are yours, documented.', paraHu: 'Az eszközt megépíteni könnyű; elérni, hogy az egész csapata használja, az az igazi munka, és nekünk ugyanannyira számít. Mindenkit betanítunk, a vezetőtől a terepen dolgozóig, amíg az eszköz nélkülünk is fut. A kód és az infrastruktúra az Öné, dokumentálva.',
    bulletsFr: ['Formation de toute l’équipe', 'Code + infrastructure documentés, à vous', 'On part quand vous êtes autonomes'],
    bulletsEn: ['Training for the whole team', 'Code + infrastructure documented, yours', 'We leave when you’re autonomous'],
    bulletsHu: ['Az egész csapat betanítása', 'Kód és infrastruktúra dokumentálva, az Öné', 'Akkor megyünk, amikor Ön önálló'],
  },
]

export default function ServicesFeatures() {
  const { lang } = useLang()
  const d = makeD(lang)

  return (
    <section style={{ padding: '20px 24px' }}>
      <div className="mx-auto" style={{ maxWidth: 1120 }}>
        {BLOCKS.map((b, i) => {
          const Icon = b.icon
          return (
            <FadeUp key={b.n}>
              <div className={`sf-block${i % 2 === 1 ? ' sf-block-rev' : ''}`}>
                <div className="sf-text">
                  <div className="sf-head">
                    <span className="sf-ico" aria-hidden="true"><Icon size={20} strokeWidth={1.7} /></span>
                    <span className="font-mono sf-num">{b.n}</span>
                  </div>
                  <span className="font-mono sf-eyebrow">{d(b.eyebrowFr, b.eyebrowEn, b.eyebrowHu)}</span>
                  <h3 className="font-serif italic sf-title">{d(b.titleFr, b.titleEn, b.titleHu)}</h3>
                  <p className="font-sans sf-para">{d(b.paraFr, b.paraEn, b.paraHu)}</p>
                  <ul className="sf-bullets">
                    {pick(lang, { fr: b.bulletsFr, en: b.bulletsEn, hu: b.bulletsHu }).map((bl) => (
                      <li key={bl} className="font-sans sf-bullet">
                        <span className="sf-dot" aria-hidden="true" />
                        {bl}
                      </li>
                    ))}
                  </ul>
                  <Link href={localizedHref(b.href, lang)} className="sf-link font-mono">
                    {d(b.linkFr, b.linkEn, b.linkHu)} <ArrowRight size={14} strokeWidth={2} />
                  </Link>
                </div>

                <div className="sf-viz">
                  {b.fan ? (
                    <FanMockups />
                  ) : b.photo ? (
                    <div className="sf-photo" role="img" aria-label={d(b.titleFr, b.titleEn, b.titleHu)} style={{ backgroundImage: `url(/realisations/${b.photo}.jpg)` }} />
                  ) : b.img ? (
                    <div className="sf-mock">
                      <div className="sf-mock-bar" aria-hidden="true"><i /><i /><i /></div>
                      <div className="sf-mock-shot" role="img" aria-label={d(b.titleFr, b.titleEn, b.titleHu)} style={{ backgroundImage: `url(/realisations/${b.img}.jpg)` }} />
                    </div>
                  ) : null}
                </div>
              </div>
            </FadeUp>
          )
        })}
      </div>

      <style jsx>{`
        .sf-block { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: center; padding: 56px 0; border-bottom: 1px solid var(--border); }
        .sf-block:last-child { border-bottom: none; }
        .sf-block-rev .sf-text { order: 2; }
        .sf-block-rev .sf-viz { order: 1; }
        .sf-head { display: flex; align-items: center; gap: 14px; margin-bottom: 18px; }
        .sf-ico { width: 44px; height: 44px; border-radius: 12px; display: flex; align-items: center; justify-content: center; background: var(--accent-subtle); color: var(--accent); border: 1px solid rgba(230,57,70,0.18); }
        .sf-num { font-size: 20px; color: var(--text-muted); letter-spacing: 1px; }
        .sf-eyebrow { display: block; font-size: 11px; letter-spacing: 2.5px; text-transform: uppercase; color: var(--accent); font-weight: 600; margin-bottom: 10px; }
        .sf-title { font-size: clamp(28px, 3.6vw, 40px); font-weight: 400; color: var(--text); line-height: 1.1; margin: 0 0 18px; }
        .sf-para { font-size: 15.5px; line-height: 1.75; font-weight: 300; color: var(--text-secondary); margin: 0 0 22px; }
        .sf-bullets { list-style: none; margin: 0 0 24px; padding: 0; display: flex; flex-direction: column; gap: 12px; }
        .sf-bullet { display: flex; align-items: flex-start; gap: 12px; font-size: 14.5px; font-weight: 300; color: var(--text); line-height: 1.5; }
        .sf-dot { flex: none; width: 6px; height: 6px; border-radius: 50%; background: var(--accent); margin-top: 8px; }
        .sf-link { display: inline-flex; align-items: center; gap: 7px; white-space: nowrap; font-size: 12.5px; letter-spacing: 0.4px; color: var(--accent); text-decoration: none; border-bottom: 1px solid rgba(230,57,70,0.3); padding-bottom: 3px; transition: gap 0.2s ease, border-color 0.2s ease; }
        .sf-link:hover { gap: 11px; border-color: var(--accent); }

        .sf-mock { border-radius: 14px; overflow: hidden; border: 1px solid var(--border); background: var(--bg-elevated); box-shadow: 0 24px 60px -30px rgba(0,0,0,0.5); }
        .sf-mock-bar { height: 30px; display: flex; align-items: center; gap: 6px; padding: 0 14px; background: var(--bg-card); border-bottom: 1px solid var(--border); }
        .sf-mock-bar i { width: 9px; height: 9px; border-radius: 50%; background: var(--text-muted); opacity: 0.5; }
        .sf-mock-screen { aspect-ratio: 16 / 10; background: var(--bg-elevated); }
        .sf-mock-screen :global(.dg-viz-svg) { width: 100%; height: 100%; display: block; }
        .sf-mock-shot { aspect-ratio: 16 / 10; background-color: #fff; background-size: contain; background-position: center; background-repeat: no-repeat; }
        .sf-photo { aspect-ratio: 16 / 10; border-radius: 14px; border: 1px solid var(--border); background-size: cover; background-position: center; box-shadow: 0 24px 60px -30px rgba(0,0,0,0.5); }

        @media (max-width: 860px) {
          .sf-block { grid-template-columns: 1fr; gap: 32px; padding: 44px 0; }
          .sf-block-rev .sf-text { order: 1; }
          .sf-block-rev .sf-viz { order: 2; }
        }
      `}</style>
    </section>
  )
}
