'use client'

import { Target, Zap, KeyRound, ShieldCheck, type LucideIcon } from 'lucide-react'
import FadeUp from '@/components/ui/FadeUp'
import LiteYouTube from '@/components/ui/LiteYouTube'
import { useLang } from '@/components/providers/LangProvider'

const VIDEO_ID = '6Sg4_wkyOa8'

type Point = { icon: LucideIcon; titleFr: string; titleEn: string; descFr: string; descEn: string }

const POINTS: Point[] = [
  {
    icon: Target,
    titleFr: 'Orienté résultat, zéro bricolage',
    titleEn: 'Result-driven, zero patching',
    descFr: 'Approche 100 % orientée résultat : que du solide qui tourne et qui rapporte. Jamais de rustine ni de truc à moitié fait.',
    descEn: 'A 100 % result-driven approach: only solid software that runs and pays off. Never a band-aid or a half-built thing.',
  },
  {
    icon: Zap,
    titleFr: 'Rapidité & réactivité',
    titleEn: 'Speed & reactivity',
    descFr: 'Exécution rapide, feedback en continu. Vous voyez avancer chaque semaine, et on réagit vite dès qu’il faut ajuster.',
    descEn: 'Fast execution, continuous feedback. You see progress every week, and we react fast the moment something needs adjusting.',
  },
  {
    icon: KeyRound,
    titleFr: 'Vous restez autonome',
    titleEn: 'You stay autonomous',
    descFr: 'Dès les premiers résultats atteints, on vous laisse la main : équipes autonomes, code documenté à vous. Vous ne dépendez de personne.',
    descEn: 'As soon as the first results land, we hand over: autonomous teams, documented code you own. You depend on no one.',
  },
  {
    icon: ShieldCheck,
    titleFr: 'La garantie résultat',
    titleEn: 'The results guarantee',
    descFr: 'Si les résultats promis ne sont pas là, on continue à travailler dessus jusqu’à les atteindre. Une garantie qui couvre aussi les délais, la propriété du code et la qualité.',
    descEn: 'If the promised results aren’t there, we keep working until they are. A guarantee that also covers deadlines, code ownership and quality.',
  },
]

export default function Different() {
  const { lang } = useLang()
  const d = (fr: string, en: string) => (lang === 'en' ? en : fr)

  return (
    <section id="different" style={{ padding: '120px 24px' }}>
      <div className="mx-auto" style={{ maxWidth: '1120px' }}>
        <FadeUp className="text-center mb-16">
          <span className="section-label">{d('Pourquoi nous', 'Why us')}</span>
          <h2 className="section-title" style={{ maxWidth: '720px', margin: '0 auto 20px' }}>
            {d('Ce qui nous rend ', 'What makes us ')}
            <span className="accent">{d('différents.', 'different.')}</span>
          </h2>
        </FadeUp>

        <div className="diff-row">
          <div className="diff-video">
            <LiteYouTube id={VIDEO_ID} title={d('Ce qui rend NateSystem différent', 'What makes NateSystem different')} />
          </div>

          <div className="diff-points">
            {POINTS.map((p, i) => {
              const Icon = p.icon
              return (
                <FadeUp key={p.titleFr} delay={0.1 + i * 0.07}>
                  <div className="diff-point">
                    <span className="diff-point-icon"><Icon size={18} strokeWidth={1.7} /></span>
                    <div>
                      <h3 className="font-sans diff-point-title">{d(p.titleFr, p.titleEn)}</h3>
                      <p className="font-sans diff-point-desc">{d(p.descFr, p.descEn)}</p>
                    </div>
                  </div>
                </FadeUp>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
