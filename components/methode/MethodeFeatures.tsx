'use client'

import { Search, Boxes, Cpu, GraduationCap, RefreshCcw, type LucideIcon } from 'lucide-react'
import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'
import { VizCarte, VizGrowth, VizTeach, VizFeuille } from '@/components/v2/DiagViz'
import FanMockups from '@/components/methode/FanMockups'

type Block = {
  n: string
  icon: LucideIcon
  Viz: () => React.JSX.Element
  fan?: boolean
  img?: string
  photo?: string
  eyebrowFr: string; eyebrowEn: string
  titleFr: string; titleEn: string
  paraFr: string; paraEn: string
  bulletsFr: string[]; bulletsEn: string[]
}

const BLOCKS: Block[] = [
  {
    n: '01',
    icon: Search,
    Viz: VizCarte,
    img: 'methode/miro-full',
    eyebrowFr: 'La cartographie', eyebrowEn: 'The mapping',
    titleFr: 'On met tout à plat', titleEn: 'We lay it all out',
    paraFr: 'Tout ce qui vit dans les têtes, la vôtre, celle de votre équipe, celle du collaborateur clé qui partirait avec la moitié de votre process, on le sort et on le met sur papier. En quelques appels sur deux semaines, on analyse toute l’opération, de bout en bout : de l’arrivée d’un lead au client qui vous en envoie un autre. Le résultat : une carte claire de votre activité, qui devient le socle de tout ce qu’on construit.',
    paraEn: 'Everything that lives in people’s heads, yours, your team’s, the key person who’d walk out with half your process, gets pulled out and put on paper. Over a few calls in two weeks, we analyse the whole operation, end to end: from a lead entering your world to a client sending you the next one. The output: a clear map of your business that becomes the backbone of everything we build.',
    bulletsFr: ['Cartographie complète, chaque service, chaque workflow', 'Audit sous-système, chaque partie examinée à part', 'Un langage commun, toute l’équipe voit enfin la même image'],
    bulletsEn: ['Full process mapping, every department, every workflow', 'Sub-system audit, each part examined on its own', 'A shared language, the whole team finally sees the same picture'],
  },
  {
    n: '02',
    icon: Boxes,
    Viz: VizGrowth,
    fan: true,
    eyebrowFr: 'Le système sur-mesure · front-end', eyebrowEn: 'The custom system · front-end',
    titleFr: 'L’interface que vos équipes pilotent', titleEn: 'The interface your teams run',
    paraFr: 'La partie visible : l’interface, le cockpit, le logiciel taillé exactement pour votre façon de travailler, pas l’inverse. Tout le monde s’y connecte, chacun voit ce qu’il doit voir. Chaque client, chaque projet, chaque commande, chaque membre d’équipe, au même endroit.',
    paraEn: 'The visible part: the interface, the cockpit, the software built exactly for how you work, not the other way round. Everyone logs in, everyone sees what they need. Every client, project, order and team member, in one place.',
    bulletsFr: ['Une interface pensée pour votre métier, pas un template', 'Un système, une connexion, toute l’entreprise sur la même page', 'Des vues par rôle, chacun voit ce dont il a besoin, rien d’autre'],
    bulletsEn: ['An interface designed for your trade, not a template', 'One system, one login, the whole company on the same page', 'Role-based views, each person sees what they need, nothing else'],
  },
  {
    n: '03',
    icon: Cpu,
    Viz: VizGrowth,
    eyebrowFr: 'Le moteur · back-end & IA', eyebrowEn: 'The engine · back-end & AI',
    titleFr: 'L’automatisation & l’IA en coulisses', titleEn: 'Automation & AI behind the scenes',
    paraFr: 'La partie invisible qui fait le vrai travail : vos données unifiées, les workflows, les agents IA. On automatise uniquement là où ça remplace de vraies heures. Une échéance ratée ? Le système alerte. Une note vocale ? Il interroge vos données, exécute l’action et confirme.',
    paraEn: 'The invisible part that does the real work: your unified data, the workflows, the AI agents. We automate only where it replaces real hours. A missed deadline? The system alerts. A voice note? It queries your data, takes the action and confirms.',
    bulletsFr: ['Vos données unifiées, à jour en temps réel', 'L’admin et la saisie manuelle, automatisés', 'Des agents IA branchés sur vos vraies données'],
    bulletsEn: ['Your data unified, live in real time', 'Admin and manual data-entry, automated', 'AI agents plugged into your real data'],
  },
  {
    n: '04',
    icon: RefreshCcw,
    Viz: VizFeuille,
    img: 'prototype/proto-front',
    eyebrowFr: 'L’amélioration continue', eyebrowEn: 'Continuous improvement',
    titleFr: 'On fait évoluer, en continu', titleEn: 'We keep it evolving',
    paraFr: 'Rien n’est figé. Après quelques semaines d’usage, on regarde ce qui marche vraiment et on ajuste. Le système grandit avec votre activité, nouvelles fonctions, nouveaux automatismes, à votre rythme. Et si vous voulez, on reste à vos côtés pour le faire évoluer.',
    paraEn: 'Nothing is set in stone. After a few weeks of use, we look at what actually works and adjust. The system grows with your business, new features, new automations, at your pace. And if you want, we stay by your side to keep it evolving.',
    bulletsFr: ['On mesure l’usage réel et on optimise', 'De nouvelles capacités ajoutées quand vous en avez besoin', 'Un système qui grandit avec vous, jamais figé'],
    bulletsEn: ['We measure real usage and optimise', 'New capabilities added when you need them', 'A system that grows with you, never frozen'],
  },
  {
    n: '05',
    icon: GraduationCap,
    Viz: VizTeach,
    photo: 'prototype/diag-feuille',
    eyebrowFr: 'Jusqu’à l’autonomie', eyebrowEn: 'Until you’re autonomous',
    titleFr: 'Formation & accompagnement', titleEn: 'Training & support',
    paraFr: 'C’est là qu’on est vraiment différents : on vous rend autonomes. Au lieu de vous garder en dépendance, on forme vos équipes, du dirigeant au terrain, jusqu’à ce qu’elles pilotent l’outil seules. Le code et l’infrastructure vous appartiennent à 100 %, documentés. On reste dispo si vous voulez, mais vous n’êtes jamais coincé avec personne.',
    paraEn: 'This is where we’re truly different: we make you autonomous. Instead of keeping you dependent, we train your teams, from leadership to the field, until they run the tool on their own. The code and infrastructure are 100% yours, documented. We stay available if you want, but you’re never locked in with anyone.',
    bulletsFr: ['Formation de toute l’équipe, du dirigeant au terrain', 'Code + infrastructure 100 % à vous, documentés', 'On part quand vous êtes autonomes, jamais avant'],
    bulletsEn: ['Training for the whole team, leadership to the field', 'Code + infrastructure 100% yours, documented', 'We leave when you’re autonomous, never before'],
  },
]

export default function MethodeFeatures() {
  const { lang } = useLang()
  const d = (fr: string, en: string) => (lang === 'en' ? en : fr)

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
                  <span className="font-mono mf-eyebrow">{d(b.eyebrowFr, b.eyebrowEn)}</span>
                  <h3 className="font-serif italic mf-title">{d(b.titleFr, b.titleEn)}</h3>
                  <p className="font-sans mf-para">{d(b.paraFr, b.paraEn)}</p>
                  <ul className="mf-bullets">
                    {(lang === 'en' ? b.bulletsEn : b.bulletsFr).map((bl) => (
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
                    <div className="mf-photo" role="img" aria-label={d(b.titleFr, b.titleEn)} style={{ backgroundImage: `url(/realisations/${b.photo}.jpg)` }} />
                  ) : b.img ? (
                    <div className="mf-mock">
                      <div className="mf-mock-bar" aria-hidden="true"><i /><i /><i /></div>
                      <div className="mf-mock-shot" role="img" aria-label={d(b.titleFr, b.titleEn)} style={{ backgroundImage: `url(/realisations/${b.img}.jpg)` }} />
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
