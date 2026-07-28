'use client'

import { Search, Boxes, Cpu, GraduationCap, type LucideIcon } from 'lucide-react'
import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'
import { VizCarte, VizGrowth, VizTeach } from '@/components/v2/DiagViz'
import FanMockups from '@/components/methode/FanMockups'

type Block = {
  n: string
  icon: LucideIcon
  Viz: () => React.JSX.Element
  fan?: boolean
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
    eyebrowFr: 'La cartographie', eyebrowEn: 'The mapping',
    titleFr: 'On met tout à plat', titleEn: 'We lay it all out',
    paraFr: 'Tout ce qui vit dans les têtes — la vôtre, celle de votre équipe, celle du collaborateur clé qui partirait avec la moitié de votre process — on le sort et on le met sur papier. En 3 à 5 appels sur deux semaines, on analyse toute l’opération, de bout en bout : de l’arrivée d’un lead au client qui vous en envoie un autre. Le résultat : une carte claire de votre activité, qui devient le socle de tout ce qu’on construit.',
    paraEn: 'Everything that lives in people’s heads — yours, your team’s, the key person who’d walk out with half your process — gets pulled out and put on paper. Over 3–5 calls in two weeks, we analyse the whole operation, end to end: from a lead entering your world to a client sending you the next one. The output: a clear map of your business that becomes the backbone of everything we build.',
    bulletsFr: ['Cartographie complète — chaque service, chaque workflow', 'Audit sous-système — chaque partie examinée à part', 'Un langage commun — toute l’équipe voit enfin la même image'],
    bulletsEn: ['Full process mapping — every department, every workflow', 'Sub-system audit — each part examined on its own', 'A shared language — the whole team finally sees the same picture'],
  },
  {
    n: '02',
    icon: Boxes,
    Viz: VizGrowth,
    fan: true,
    eyebrowFr: 'Votre cockpit sur-mesure', eyebrowEn: 'Your custom cockpit',
    titleFr: 'Vos données, réunies', titleEn: 'Your data, unified',
    paraFr: 'Une fois qu’on sait comment vous tournez, on construit le cockpit sur-mesure. Pensez-le comme un logiciel conçu exactement pour votre façon de travailler — pas l’inverse. Tout le monde s’y connecte, chacun voit ce qu’il doit voir. Chaque client, chaque projet, chaque commande, chaque membre d’équipe, au même endroit.',
    paraEn: 'Once we know how you run, we build the custom cockpit. Think of it as software designed specifically for how you actually operate — not the other way round. Everyone logs in, everyone sees what they need. Every client, every project, every order, every team member, in one place.',
    bulletsFr: ['Un système, une connexion — toute l’entreprise sur la même page', 'Vos workflows métier intégrés au cœur du système', 'Des vues par rôle — chacun voit ce dont il a besoin, rien d’autre'],
    bulletsEn: ['One system, one login — the whole company on the same page', 'Your business workflows built into the system', 'Role-based views — each person sees what they need, nothing else'],
  },
  {
    n: '03',
    icon: Cpu,
    Viz: VizGrowth,
    eyebrowFr: 'L’IA au bon endroit', eyebrowEn: 'AI where it counts',
    titleFr: 'Automatiser le répétitif', titleEn: 'Automate the repetitive',
    paraFr: 'On ajoute l’IA et l’automatisation uniquement là où elles remplacent de vraies heures — jamais en décoration. Une échéance ratée ? Le système alerte tout seul. Une note vocale ? Il interroge vos données, exécute l’action et confirme. Chaque automatisation existe parce que votre activité en a besoin, pas parce que c’est à la mode.',
    paraEn: 'We add AI and automation only where they replace real hours — never for show. A missed deadline? The system alerts on its own. A voice note? It queries your data, takes the action and confirms. Every automation exists because your operation needs it, not because it’s trendy.',
    bulletsFr: ['L’admin et la saisie manuelle, automatisés', 'Des agents IA branchés sur vos vraies données', 'Des alertes qui attrapent les problèmes avant vous'],
    bulletsEn: ['Admin and manual data-entry, automated', 'AI agents plugged into your real data', 'Alerts that catch problems before you do'],
  },
  {
    n: '04',
    icon: GraduationCap,
    Viz: VizTeach,
    eyebrowFr: 'Jusqu’à l’autonomie', eyebrowEn: 'Until you’re autonomous',
    titleFr: 'On vous rend autonomes', titleEn: 'We make you autonomous',
    paraFr: 'C’est là qu’on est vraiment différents. Au lieu de vous garder en dépendance, on forme vos équipes — du dirigeant au terrain — jusqu’à ce qu’elles pilotent l’outil seules. Le code et l’infrastructure vous appartiennent à 100 %, documentés. On reste dispo si vous voulez, mais vous n’êtes jamais coincé avec personne.',
    paraEn: 'This is where we’re truly different. Instead of keeping you dependent, we train your teams — from leadership to the field — until they run the tool on their own. The code and infrastructure are 100% yours, documented. We stay available if you want, but you’re never locked in with anyone.',
    bulletsFr: ['Formation de toute l’équipe, du dirigeant au terrain', 'Code + infrastructure 100 % à vous, documentés', 'On part quand vous êtes autonomes — jamais avant'],
    bulletsEn: ['Training for the whole team, leadership to the field', 'Code + infrastructure 100% yours, documented', 'We leave when you’re autonomous — never before'],
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

                {/* Illustration : éventail de mockups (bloc 02) ou mockup navigateur + illustration SVG */}
                <div className="mf-viz">
                  {b.fan ? (
                    <FanMockups />
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

        @media (max-width: 860px) {
          .mf-block { grid-template-columns: 1fr; gap: 32px; padding: 44px 0; }
          .mf-block-rev .mf-text { order: 1; }
          .mf-block-rev .mf-viz { order: 2; }
        }
      `}</style>
    </section>
  )
}
