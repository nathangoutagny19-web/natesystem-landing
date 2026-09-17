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
    paraFr: 'Tout ce qui vit dans les têtes, la vôtre, celle de votre équipe, celle du collaborateur clé qui partirait avec la moitié de votre process, on le sort et on le met sur papier. En quelques appels sur deux semaines, on analyse toute l’opération, de bout en bout : de l’arrivée d’un lead au client qui vous en envoie un autre. On repère les points de blocage, ces fameux « bottlenecks », on les classe par ordre d’impact et on les prend en compte. Le résultat : une carte claire de votre activité, qui devient le socle de tout ce qu’on construit.',
    paraEn: 'Everything that lives in people’s heads, yours, your team’s, the key person who’d walk out with half your process, gets pulled out and put on paper. Over a few calls in two weeks, we analyse the whole operation, end to end: from a lead entering your world to a client sending you the next one. We spot the bottlenecks, rank them by impact and factor them in. The output: a clear map of your business that becomes the backbone of everything we build.', paraHu: 'Minden, ami a fejekben él, az Önében, a csapatáéban, azéban a kulcsemberében, aki a folyamatai felét magával vinné, előkerül és papírra kerül. Néhány hívás alatt, két hét leforgása alatt végigelemezzük az egész működést, elejétől a végéig: attól, hogy egy érdeklődő belép a világába, addig, hogy egy ügyfél elküldi a következőt. Megtaláljuk a szűk keresztmetszeteket, hatás szerint rangsoroljuk és beszámítjuk őket. Az eredmény: a cége világos térképe, amely mindennek a gerince lesz, amit megépítünk.',
    bulletsFr: ['Cartographie complète, chaque service, chaque workflow', 'Audit sous-système, chaque partie examinée à part', 'Un langage commun, toute l’équipe voit enfin la même image'],
    bulletsEn: ['Full process mapping, every department, every workflow', 'Sub-system audit, each part examined on its own', 'A shared language, the whole team finally sees the same picture'],
    bulletsHu: ['Teljes folyamat-feltérképezés, minden részleg, minden munkafolyamat', 'Alrendszer-audit, minden rész külön megvizsgálva', 'Közös nyelv, az egész csapat végre ugyanazt a képet látja'],
  },
  {
    n: '02',
    icon: Boxes,
    Viz: VizGrowth,
    fan: true,
    eyebrowFr: 'Le système sur-mesure · front-end', eyebrowEn: 'The custom system · front-end', eyebrowHu: 'Az egyedi rendszer · felület',
    titleFr: 'L’interface que vos équipes pilotent', titleEn: 'The interface your teams run', titleHu: 'A felület, amelyet a csapatai használnak',
    paraFr: 'La partie visible : l’interface, le cockpit, le logiciel taillé exactement pour votre façon de travailler, pas l’inverse. Tout le monde s’y connecte, chacun voit ce qu’il doit voir. Chaque client, chaque projet, chaque commande, chaque membre d’équipe, au même endroit.',
    paraEn: 'The visible part: the interface, the cockpit, the software built exactly for how you work, not the other way round. Everyone logs in, everyone sees what they need. Every client, project, order and team member, in one place.', paraHu: 'A látható rész: a felület, a vezérlőpult, a szoftver, pontosan arra építve, ahogyan Ön dolgozik, nem fordítva. Mindenki belép, mindenki azt látja, amire szüksége van. Minden ügyfél, projekt, rendelés és csapattag, egy helyen.',
    bulletsFr: ['Une interface pensée pour votre métier, pas un template', 'Un système, une connexion, toute l’entreprise sur la même page', 'Des vues par rôle, chacun voit ce dont il a besoin, rien d’autre'],
    bulletsEn: ['An interface designed for your trade, not a template', 'One system, one login, the whole company on the same page', 'Role-based views, each person sees what they need, nothing else'],
    bulletsHu: ['Az Ön szakmájára tervezett felület, nem sablon', 'Egy rendszer, egy belépés, az egész cég ugyanazon az oldalon', 'Szerepkör szerinti nézetek, mindenki azt látja, amire szüksége van, mást nem'],
  },
  {
    n: '03',
    icon: Cpu,
    Viz: VizGrowth,
    photo: 'methode/coding',
    eyebrowFr: 'Le moteur · back-end & IA', eyebrowEn: 'The engine · back-end & AI', eyebrowHu: 'A motor · háttérrendszer és MI',
    titleFr: 'L’automatisation & l’IA en coulisses', titleEn: 'Automation & AI behind the scenes', titleHu: 'Automatizálás és MI a színfalak mögött',
    paraFr: 'La partie invisible qui fait le vrai travail : vos données unifiées, les workflows, les agents IA. On automatise uniquement là où ça remplace de vraies heures. Une échéance ratée ? Le système alerte. Une note vocale ? Il interroge vos données, exécute l’action et confirme.',
    paraEn: 'The invisible part that does the real work: your unified data, the workflows, the AI agents. We automate only where it replaces real hours. A missed deadline? The system alerts. A voice note? It queries your data, takes the action and confirms.', paraHu: 'A láthatatlan rész, amely az igazi munkát végzi: az egységesített adatai, a munkafolyamatok, az MI-ágensek. Csak ott automatizálunk, ahol valódi órákat vált ki. Kicsúszott határidő? A rendszer riaszt. Egy hangüzenet? Lekérdezi az adatait, elvégzi a műveletet, és visszaigazolja.',
    bulletsFr: ['Vos données unifiées, à jour en temps réel', 'L’admin et la saisie manuelle, automatisés', 'Des agents IA branchés sur vos vraies données'],
    bulletsEn: ['Your data unified, live in real time', 'Admin and manual data-entry, automated', 'AI agents plugged into your real data'],
    bulletsHu: ['Az adatai egységesítve, valós időben frissülve', 'Az adminisztráció és a kézi adatbevitel automatizálva', 'MI-ágensek a valódi adataira kötve'],
  },
  {
    n: '04',
    icon: RefreshCcw,
    Viz: VizFeuille,
    photo: 'methode/meet-call',
    eyebrowFr: 'L’amélioration continue', eyebrowEn: 'Continuous improvement', eyebrowHu: 'Folyamatos fejlesztés',
    titleFr: 'On fait évoluer, en continu', titleEn: 'We keep it evolving', titleHu: 'Folyamatosan fejlesztjük',
    paraFr: 'Rien n’est figé. Après quelques semaines d’usage, on regarde ce qui marche vraiment et on ajuste. Le système grandit avec votre activité, nouvelles fonctions, nouveaux automatismes, à votre rythme. Et si vous voulez, on reste à vos côtés pour le faire évoluer.',
    paraEn: 'Nothing is set in stone. After a few weeks of use, we look at what actually works and adjust. The system grows with your business, new features, new automations, at your pace. And if you want, we stay by your side to keep it evolving.', paraHu: 'Semmi nincs kőbe vésve. Néhány hét használat után megnézzük, mi működik valójában, és igazítunk rajta. A rendszer együtt nő a cégével: új funkciók, új automatizmusok, az Ön tempójában. És ha kéri, mellette maradunk, hogy továbbvigyük.',
    bulletsFr: ['On mesure l’usage réel et on optimise', 'De nouvelles capacités ajoutées quand vous en avez besoin', 'Un système qui grandit avec vous, jamais figé'],
    bulletsEn: ['We measure real usage and optimise', 'New capabilities added when you need them', 'A system that grows with you, never frozen'],
    bulletsHu: ['Mérjük a tényleges használatot, és optimalizálunk', 'Új képességek, amikor szüksége van rájuk', 'Rendszer, amely Önnel együtt nő, sosem merevedik meg'],
  },
  {
    n: '05',
    icon: GraduationCap,
    Viz: VizTeach,
    photo: 'prototype/diag-feuille',
    eyebrowFr: 'Jusqu’à l’autonomie', eyebrowEn: 'Until you’re autonomous', eyebrowHu: 'Amíg önálló nem lesz',
    titleFr: 'Formation & accompagnement', titleEn: 'Training & support', titleHu: 'Képzés és támogatás',
    paraFr: 'C’est là qu’on est vraiment différents. Construire l’outil, c’est la partie facile ; le faire adopter par toute votre équipe, c’est le vrai job, et il compte autant pour nous que la construction. On forme tout le monde, du dirigeant au terrain, jusqu’à ce que l’outil tourne sans nous. Le code et l’infrastructure vous appartiennent à 100 %, documentés.',
    paraEn: 'This is where we’re truly different. Building the tool is the easy part; getting your whole team to adopt it is the real job, and it matters to us as much as the build. We train everyone, from leadership to the field, until the tool runs without us. The code and infrastructure are 100% yours, documented.', paraHu: 'Itt vagyunk igazán mások. Az eszközt megépíteni a könnyebbik rész; elérni, hogy az egész csapata használja, az az igazi munka, és nekünk annyira számít, mint maga az építés. Mindenkit betanítunk, a vezetőtől a terepen dolgozóig, amíg az eszköz nélkülünk is fut. A kód és az infrastruktúra 100%-ban az Öné, dokumentálva.',
    bulletsFr: ['Formation de toute l’équipe, du dirigeant au terrain', 'Code + infrastructure 100 % à vous, documentés', 'On part quand vous êtes autonomes, jamais avant'],
    bulletsEn: ['Training for the whole team, leadership to the field', 'Code + infrastructure 100% yours, documented', 'We leave when you’re autonomous, never before'],
    bulletsHu: ['Az egész csapat betanítása, a vezetőtől a terepen dolgozóig', 'Kód és infrastruktúra 100%-ban az Öné, dokumentálva', 'Akkor megyünk, amikor Ön önálló, előbb soha'],
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
