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
    n: '01', icon: Search, href: '/services/audit', linkFr: 'Voir le diagnostic', linkEn: 'See the diagnostic', linkHu: 'A diagnózis megtekintése',
    img: 'methode/miro-full',
    eyebrowFr: 'On comprend', eyebrowEn: 'We understand', eyebrowHu: 'Megértjük',
    titleFr: 'Le diagnostic', titleEn: 'The diagnostic', titleHu: 'A diagnózis',
    paraFr: 'On met à plat comment votre organisation tourne vraiment, de la première demande d’un client jusqu’au départ, et on repère où se perdent le temps, les erreurs et les clients. C’est la fondation de tout le reste, et vous repartez avec, même si on s’arrête là.',
    paraEn: 'We lay out how your organisation really runs, from a client’s first request to departure, and spot where time, mistakes and clients slip away. It’s the foundation of everything else, and you keep it, even if we stop there.', paraHu: 'Kiterítjük, hogyan működik valójában a szervezete, az ügyfél első kérésétől a távozásig, és megtaláljuk, hol vész el az idő, hol csúsznak be hibák és hol tűnnek el az ügyfelek. Ez minden más alapja, és Öné marad, akkor is, ha itt megállunk.',
    bulletsFr: ['La carte complète de votre organisation', 'Ce qui coûte le plus, classé par impact', 'Une maquette cliquable avant tout engagement'],
    bulletsEn: ['The full map of your organisation', 'What costs you most, ranked by impact', 'A clickable prototype before any commitment'],
    bulletsHu: ['A szervezete teljes térképe', 'Ami a legtöbbe kerül, hatás szerint rangsorolva', 'Kattintható prototípus minden elköteleződés előtt'],
  },
  {
    n: '02', icon: Boxes, href: '/services/logiciel-sur-mesure', linkFr: 'Voir le système sur mesure', linkEn: 'See the bespoke system', linkHu: 'Az egyedi rendszer megtekintése',
    fan: true,
    eyebrowFr: 'On construit', eyebrowEn: 'We build', eyebrowHu: 'Megépítjük',
    titleFr: 'Votre système et votre image en ligne', titleEn: 'Your system and your online presence', titleHu: 'A rendszere és az online megjelenése',
    paraFr: 'Le logiciel taillé pour votre façon de recevoir : séjours et événements, prestataires, fiches clients, planning, devis et facturation, au même endroit. Et la vitrine qui va avec : un site, des pages pour vos événements, reliés au même système. Le code vous appartient à 100 %.',
    paraEn: 'The software cut to the way you receive clients: stays and events, suppliers, client profiles, rota, quotes and invoicing, in one place. And the showcase to match: a website and event pages connected to the same system. You own 100% of the code.', paraHu: 'A vendégfogadásához szabott szoftver: tartózkodások és események, beszállítók, ügyféladatlapok, beosztás, árajánlatok és számlázás egy helyen. És a hozzá illő kirakat: weboldal és eseményoldalak ugyanahhoz a rendszerhez kötve. A forráskód 100%-ban az Öné.',
    bulletsFr: ['Une seule saisie, toute l’organisation suit', 'Un site et des pages d’événements branchés dessus', 'Vous gardez la main sur chaque détail'],
    bulletsEn: ['Enter it once, the whole organisation follows', 'A website and event pages connected to it', 'You stay in control of every detail'],
    bulletsHu: ['Egyszer viszi be, az egész szervezet követi', 'Weboldal és eseményoldalak rákötve', 'Minden részlet az Ön kezében marad'],
  },
  {
    n: '03', icon: Cpu, href: '/services/ia', linkFr: 'Voir l’automatisation', linkEn: 'See automation', linkHu: 'Az automatizálás megtekintése',
    photo: 'methode/coding',
    eyebrowFr: 'On automatise et on suit', eyebrowEn: 'We automate and track', eyebrowHu: 'Automatizálunk és követünk',
    titleFr: 'Automatisation & données', titleEn: 'Automation & data', titleHu: 'Automatizálás és adatok',
    paraFr: 'Le répétitif tourne seul, uniquement là où ça rend de vraies heures : première réponse à chaque demande dans la langue du client, reconfirmations de la veille, relances d’acomptes. Et chaque demande porte son origine, pour savoir enfin d’où viennent vos clients et ce qu’ils rapportent.',
    paraEn: 'Repetitive work runs on its own, only where it gives real hours back: a first reply to every request in the client’s language, day-before reconfirmations, deposit follow-ups. And every request carries its source, so you finally know where your clients come from and what they bring in.', paraHu: 'Az ismétlődő munka magától megy, csak ott, ahol valódi órákat ad vissza: első válasz minden kérésre az ügyfél nyelvén, előző napi megerősítések, előlegek utánkövetése. És minden kérés hordozza a forrását, hogy végre tudja, honnan jönnek az ügyfelei és mit hoznak.',
    bulletsFr: ['Une réponse à chaque demande, même tard le soir', 'Les reconfirmations et relances, automatisées', 'Des chiffres suivis, qui restent chez vous'],
    bulletsEn: ['A reply to every request, even late at night', 'Reconfirmations and follow-ups, automated', 'Tracked numbers that stay with you'],
    bulletsHu: ['Válasz minden kérésre, késő este is', 'Megerősítések és utánkövetés automatizálva', 'Követett számok, amelyek Önnél maradnak'],
  },
  {
    n: '04', icon: GraduationCap, href: '/services/formation', linkFr: 'Voir la formation', linkEn: 'See training', linkHu: 'Képzés megtekintése',
    photo: 'prototype/diag-feuille',
    eyebrowFr: 'On forme et on fait évoluer', eyebrowEn: 'We train and keep evolving', eyebrowHu: 'Képzünk és fejlesztünk',
    titleFr: 'Formation & partenariat', titleEn: 'Training & partnership', titleHu: 'Képzés és partnerség',
    paraFr: 'Construire l’outil, c’est facile ; le faire adopter par vous, l’accueil, les équipes sur le terrain et les prestataires, c’est le vrai travail. On forme chacun jusqu’à l’autonomie, puis on fait évoluer le système avec vous, saison après saison. Un partenariat dans la durée, pas une livraison.',
    paraEn: 'Building the tool is easy; getting you, the front desk, field teams and suppliers to use it is the real work. We train everyone until they’re autonomous, then keep the system evolving with you, season after season. A long-term partnership, not a delivery.', paraHu: 'Az eszközt megépíteni könnyű; elérni, hogy Ön, a recepció, a terepen dolgozó csapatok és a beszállítók használják, az az igazi munka. Mindenkit az önállóságig képzünk, aztán szezonról szezonra együtt fejlesztjük a rendszert. Hosszú távú partnerség, nem egyszeri átadás.',
    bulletsFr: ['Formation de toute l’équipe, prestataires compris', 'Un seul interlocuteur qui connaît votre organisation', 'Le système grandit avec vous, saison après saison'],
    bulletsEn: ['Training for the whole team, suppliers included', 'One point of contact who knows your organisation', 'The system grows with you, season after season'],
    bulletsHu: ['Az egész csapat képzése, a beszállítókkal együtt', 'Egyetlen kapcsolattartó, aki ismeri a szervezetét', 'A rendszer szezonról szezonra Önnel együtt nő'],
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
