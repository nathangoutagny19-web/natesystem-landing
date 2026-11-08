'use client'

import { Search, Boxes, Cpu, GraduationCap, RefreshCcw, type LucideIcon } from 'lucide-react'
import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'
import { makeD, pick } from '@/lib/lang'
import { VizCarte, VizGrowth, VizTeach, VizFeuille } from '@/components/v2/DiagViz'
import FanMockups from '@/components/methode/FanMockups'

type Block = {
  n: string
  icon: LucideIcon
  Viz: () => React.JSX.Element
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
    n: '01',
    icon: Search,
    Viz: VizCarte,
    img: 'methode/miro-full',
    eyebrowFr: 'La cartographie', eyebrowEn: 'The mapping', eyebrowHu: 'A feltérképezés',
    titleFr: 'On met tout à plat', titleEn: 'We lay it all out', titleHu: 'Mindent kiterítünk',
    /* Le parcours réel de chaque contrat signé (8 novembre 2026) : appel de
       20 min, proposition à prix ferme, lancement avec import des fichiers,
       livraison chaque semaine. Plus de cartographie offerte avant engagement. */
    paraFr: 'Tout commence par un appel de 20 minutes : vous nous expliquez comment vous travaillez, on écoute. Vous recevez ensuite une proposition, avec un prix ferme et un périmètre écrit noir sur blanc. Au lancement, on importe vos fichiers et on sort ce qui vit dans les têtes, la vôtre, celle de l’équipe, celle de la personne qui sait et qui partirait avec la moitié du fonctionnement. On suit le chemin complet d’une demande, du premier message à la facture, et on repère où ça casse et où le temps se perd. Puis on livre chaque semaine.',
    paraEn: 'It all starts with a 20-minute call: you tell us how you work, we listen. You then receive a proposal, with a firm price and a scope written down in black and white. At kickoff, we import your files and pull out what lives in people’s heads, yours, your team’s, the one person who would walk out with half of how things run. We follow the whole path of a request, from first message to invoice, and spot where it breaks and where time is lost. Then we deliver every week.', paraHu: 'Minden egy 20 perces hívással kezdődik: Ön elmondja, hogyan dolgozik, mi meghallgatjuk. Ezután ajánlatot kap, fix árral és írásban rögzített feladatkörrel. Induláskor importáljuk a fájljait, és előhozzuk, ami a fejekben él: az Önében, a csapatáéban, azéban a kulcsemberében, aki a működés felét magával vinné. Végigkövetjük egy kérés teljes útját, az első üzenettől a számláig, és megtaláljuk, hol romlik el és hol vész el az idő. Aztán minden héten szállítunk.',
    bulletsFr: ['Chaque rôle passé en revue, de la direction aux prestataires', 'Le chemin d’une demande, du premier message à la facture', 'Une proposition à prix ferme, puis une livraison chaque semaine'],
    bulletsEn: ['Every role reviewed, from management to suppliers', 'The path of a request, from first message to invoice', 'A firm-price proposal, then a delivery every week'],
    bulletsHu: ['Minden szerepkör átnézve, a vezetéstől a beszállítókig', 'Egy kérés útja, az első üzenettől a számláig', 'Fix áras ajánlat, aztán heti szállítás'],
  },
  {
    n: '02',
    icon: Boxes,
    Viz: VizGrowth,
    fan: true,
    eyebrowFr: 'Le système sur mesure · l’interface', eyebrowEn: 'The bespoke system · front-end', eyebrowHu: 'Az egyedi rendszer · felület',
    titleFr: 'L’interface que vos équipes pilotent', titleEn: 'The interface your teams run', titleHu: 'A felület, amelyet a csapatai használnak',
    paraFr: 'La partie visible : l’écran que vos équipes ouvrent le matin, taillé exactement sur votre façon de travailler, pas l’inverse. Chacun voit ce qui le concerne : les demandes du jour, les missions à confirmer, les prestataires à relancer. La direction ne voit pas la même chose qu’un prestataire, et c’est voulu : la discrétion fait partie de votre service.',
    paraEn: 'The visible part: the screen your teams open in the morning, cut exactly to the way you work, not the other way round. Everyone sees what concerns them: today’s requests, jobs to confirm, suppliers to chase. Management doesn’t see what a supplier sees, on purpose: discretion is part of your service.', paraHu: 'A látható rész: a képernyő, amelyet a csapatai reggel megnyitnak, pontosan az Ön munkamódjára szabva, nem fordítva. Mindenki azt látja, ami rá tartozik: a napi kéréseket, a megerősítendő megbízásokat, a beszállítókat, akiket emlékeztetni kell. A vezetőség nem ugyanazt látja, mint egy beszállító, és ez szándékos: a diszkréció a szolgáltatása része.',
    bulletsFr: ['Une interface pensée pour votre organisation, pas un modèle', 'Une seule connexion, vos biens, vos clients et vos missions sur la même page', 'Des accès par rôle, chacun voit ce qu’il doit voir, rien de plus'],
    bulletsEn: ['An interface designed for your organisation, not a template', 'One login, your properties, clients and jobs on the same page', 'Role-based access, each person sees what they should, nothing more'],
    bulletsHu: ['A szervezetére tervezett felület, nem sablon', 'Egyetlen belépés, az ingatlanjai, ügyfelei és megbízásai ugyanazon az oldalon', 'Szerepkör szerinti hozzáférés, mindenki azt látja, amit kell, többet nem'],
  },
  {
    n: '03',
    icon: Cpu,
    Viz: VizGrowth,
    photo: 'methode/coding',
    eyebrowFr: 'Le moteur · les coulisses', eyebrowEn: 'The engine · behind the scenes', eyebrowHu: 'A motor · a háttér',
    titleFr: 'Ce qui tourne en coulisses', titleEn: 'What runs behind the scenes', titleHu: 'Ami a színfalak mögött fut',
    paraFr: 'La partie invisible qui fait le vrai travail : vos données réunies, les reconfirmations de la veille, les relances d’acomptes. On automatise uniquement là où ça rend de vraies heures. Un chauffeur qui n’a pas confirmé ? Le système vous prévient la veille, pas le jour de l’arrivée.',
    paraEn: 'The invisible part that does the real work: your data in one place, day-before reconfirmations, deposit follow-ups. We automate only where it gives real hours back. A driver who hasn’t confirmed? The system tells you the day before, not on arrival day.', paraHu: 'A láthatatlan rész, amely az igazi munkát végzi: az adatai egy helyen, az előző napi megerősítések, az előlegek utánkövetése. Csak ott automatizálunk, ahol valódi órákat ad vissza. Egy sofőr nem erősített meg? A rendszer előző nap szól, nem az érkezés napján.',
    bulletsFr: ['Vos données réunies, à jour en temps réel', 'Les ressaisies, relances et reconfirmations, automatisées', 'Chaque demande suivie jusqu’au bout, dans le respect du RGPD'],
    bulletsEn: ['Your data in one place, live', 'Re-entry, follow-ups and reconfirmations, automated', 'Every request followed through to the end, GDPR-compliant'],
    bulletsHu: ['Az adatai egy helyen, valós időben', 'Az újbóli bevitel, az utánkövetés és a megerősítések automatizálva', 'Minden kérés végig követve, GDPR-konform módon'],
  },
  {
    n: '04',
    icon: GraduationCap,
    Viz: VizTeach,
    photo: 'prototype/diag-feuille',
    eyebrowFr: 'Jusqu’à l’autonomie', eyebrowEn: 'Until you’re autonomous', eyebrowHu: 'Amíg önálló nem lesz',
    titleFr: 'Formation & accompagnement', titleEn: 'Training & support', titleHu: 'Képzés és támogatás',
    paraFr: 'C’est là qu’on est vraiment différents. Construire l’outil, c’est la partie facile ; le faire adopter par vous, votre équipe au bureau, les équipes sur le terrain et les prestataires, c’est le vrai travail, et il compte autant pour nous que la construction. On forme chacun jusqu’à ce que l’outil tourne sans nous, et vous lâchez l’heure par heure sans perdre la main.',
    paraEn: 'This is where we’re truly different. Building the tool is the easy part; getting you, your office team, field teams and suppliers to use it is the real work, and it matters to us as much as the build. We train everyone until the tool runs without us, and you let go of the hour-by-hour without losing control.', paraHu: 'Itt vagyunk igazán mások. Az eszközt megépíteni a könnyebbik rész; elérni, hogy Ön, az irodai csapata, a terepen dolgozó csapatok és a beszállítók használják, az az igazi munka, és nekünk annyira számít, mint maga az építés. Mindenkit betanítunk, amíg az eszköz nélkülünk is fut, Ön pedig elengedheti az óráról órára követést, anélkül hogy kiengedné a kezéből az irányítást.',
    bulletsFr: ['Formation de tout le monde, de la direction aux prestataires', 'Code et documentation 100 % à vous, données clients comprises', 'Une équipe qui avance sans tout vous demander'],
    bulletsEn: ['Training for everyone, from management to suppliers', 'Code and documentation 100% yours, client data included', 'A team that moves forward without asking you everything'],
    bulletsHu: ['Mindenki betanítása, a vezetéstől a beszállítókig', 'A kód és a dokumentáció 100%-ban az Öné, az ügyféladatokkal együtt', 'Egy csapat, amely nem kérdez meg mindent Öntől'],
  },
  {
    n: '05',
    icon: RefreshCcw,
    Viz: VizFeuille,
    photo: 'methode/meet-call',
    eyebrowFr: 'Le partenariat dans la durée', eyebrowEn: 'The long-term partnership', eyebrowHu: 'A hosszú távú partnerség',
    titleFr: 'On fait évoluer, saison après saison', titleEn: 'We keep it evolving, season after season', titleHu: 'Szezonról szezonra fejlesztjük',
    paraFr: 'Rien n’est figé, et c’est tout le principe d’un partenariat. On regarde ce qui sert et ce qui ne sert pas, et on ajuste. Nouveaux besoins, nouveaux clients, nouvelle saison : le système grandit avec votre organisation. Une haute saison ne tourne pas comme un mois calme, et l’outil suit votre rythme.',
    paraEn: 'Nothing is set in stone, and that’s the whole point of a partnership. We look at what gets used and what doesn’t, and we adjust. New needs, new clients, a new season: the system grows with your organisation. High season doesn’t run like a quiet month, and the tool follows your rhythm.', paraHu: 'Semmi nincs kőbe vésve, és pont ez a partnerség lényege. Megnézzük, mi hasznos és mi nem, és igazítunk. Új igények, új ügyfelek, új szezon: a rendszer a szervezetével együtt nő. A főszezon nem úgy működik, mint egy csendes hónap, és az eszköz követi a ritmusát.',
    bulletsFr: ['On regarde qui s’en sert vraiment, et on ajuste', 'De nouvelles fonctions quand la saison les réclame', 'Un seul interlocuteur qui connaît votre organisation, dans la durée'],
    bulletsEn: ['We look at who actually uses it, and adjust', 'New features when the season calls for them', 'One point of contact who knows your organisation, for the long term'],
    bulletsHu: ['Megnézzük, ki használja valójában, és igazítunk', 'Új funkciók, amikor a szezon megkívánja', 'Egyetlen kapcsolattartó, aki hosszú távon ismeri a szervezetét'],
  },
]

export default function MethodeFeatures() {
  const { lang } = useLang()
  const d = makeD(lang)

  return (
    <section style={{ padding: '40px 24px 20px' }}>
      <div className="mx-auto" style={{ maxWidth: 1120 }}>
        {BLOCKS.map((b, i) => {
          const Icon = b.icon
          const Viz = b.Viz
          return (
            <FadeUp key={b.n}>
              <div className={`mf-block${i % 2 === 1 ? ' mf-block-rev' : ''}`}>
                {/* Texte */}
                <div className="mf-text">
                  <div className="mf-head">
                    <span className="mf-ico" aria-hidden="true"><Icon size={20} strokeWidth={1.7} /></span>
                    <span className="font-mono mf-num">{b.n}</span>
                  </div>
                  <span className="font-mono mf-eyebrow">{d(b.eyebrowFr, b.eyebrowEn, b.eyebrowHu)}</span>
                  <h3 className="font-serif italic mf-title">{d(b.titleFr, b.titleEn, b.titleHu)}</h3>
                  <p className="font-sans mf-para">{d(b.paraFr, b.paraEn, b.paraHu)}</p>
                  <ul className="mf-bullets">
                    {pick(lang, { fr: b.bulletsFr, en: b.bulletsEn, hu: b.bulletsHu }).map((bl) => (
                      <li key={bl} className="font-sans mf-bullet">
                        <span className="mf-dot" aria-hidden="true" />
                        {bl}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Illustration : éventail · vraie capture · photo · ou illustration SVG */}
                <div className="mf-viz">
                  {b.fan ? (
                    <FanMockups />
                  ) : b.photo ? (
                    <div className="mf-photo" role="img" aria-label={d(b.titleFr, b.titleEn, b.titleHu)} style={{ backgroundImage: `url(/realisations/${b.photo}.jpg)` }} />
                  ) : b.img ? (
                    <div className="mf-mock">
                      <div className="mf-mock-bar" aria-hidden="true"><i /><i /><i /></div>
                      <div className="mf-mock-shot" role="img" aria-label={d(b.titleFr, b.titleEn, b.titleHu)} style={{ backgroundImage: `url(/realisations/${b.img}.jpg)` }} />
                    </div>
                  ) : (
                    <div className="mf-mock">
                      <div className="mf-mock-bar" aria-hidden="true"><i /><i /><i /></div>
                      <div className="mf-mock-screen"><Viz /></div>
                    </div>
                  )}
                </div>
              </div>
            </FadeUp>
          )
        })}
      </div>

      <style jsx>{`
        .mf-block {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: center;
          padding: 56px 0;
          border-bottom: 1px solid var(--border);
        }
        .mf-block:last-child { border-bottom: none; }
        .mf-block-rev .mf-text { order: 2; }
        .mf-block-rev .mf-viz { order: 1; }

        .mf-head { display: flex; align-items: center; gap: 14px; margin-bottom: 18px; }
        .mf-ico {
          width: 44px; height: 44px; border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          background: var(--accent-subtle); color: var(--accent);
          border: 1px solid rgba(230, 57, 70, 0.18);
        }
        .mf-num { font-size: 20px; color: var(--text-muted); letter-spacing: 1px; }
        .mf-eyebrow {
          display: block; font-size: 11px; letter-spacing: 2.5px; text-transform: uppercase;
          color: var(--accent); font-weight: 600; margin-bottom: 10px;
        }
        .mf-title { font-size: clamp(28px, 3.6vw, 40px); font-weight: 400; color: var(--text); line-height: 1.1; margin: 0 0 18px; }
        .mf-para { font-size: 15.5px; line-height: 1.75; font-weight: 300; color: var(--text-secondary); margin: 0 0 22px; }
        .mf-bullets { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 12px; }
        .mf-bullet { display: flex; align-items: flex-start; gap: 12px; font-size: 14.5px; font-weight: 300; color: var(--text); line-height: 1.5; }
        .mf-dot { flex: none; width: 6px; height: 6px; border-radius: 50%; background: var(--accent); margin-top: 8px; }

        /* Mockup navigateur autour de l'illustration */
        .mf-mock {
          border-radius: 14px; overflow: hidden;
          border: 1px solid var(--border); background: var(--bg-elevated);
          box-shadow: 0 24px 60px -30px rgba(0, 0, 0, 0.5);
        }
        .mf-mock-bar {
          height: 30px; display: flex; align-items: center; gap: 6px; padding: 0 14px;
          background: var(--bg-card); border-bottom: 1px solid var(--border);
        }
        .mf-mock-bar i { width: 9px; height: 9px; border-radius: 50%; background: var(--text-muted); opacity: 0.5; }
        .mf-mock-screen { aspect-ratio: 16 / 10; background: var(--bg-elevated); }
        .mf-mock-screen :global(.dg-viz-svg) { width: 100%; height: 100%; display: block; }
        /* Vraie capture (contenue en entier) dans le mockup */
        .mf-mock-shot {
          aspect-ratio: 16 / 10;
          background-color: #fff;
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
        }
        /* Vraie photo, cadre plein (cover), sans barre navigateur */
        .mf-photo {
          aspect-ratio: 16 / 10;
          border-radius: 14px;
          border: 1px solid var(--border);
          background-size: cover;
          background-position: center;
          box-shadow: 0 24px 60px -30px rgba(0, 0, 0, 0.5);
        }

        @media (max-width: 860px) {
          .mf-block { grid-template-columns: 1fr; gap: 32px; padding: 44px 0; }
          .mf-block-rev .mf-text { order: 1; }
          .mf-block-rev .mf-viz { order: 2; }
        }
      `}</style>
    </section>
  )
}
