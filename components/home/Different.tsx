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
    descFr: 'On déploie d’abord ce qui est déjà éprouvé et qui rapporte — logique 80/20 — puis on optimise. Que du solide qui tourne. Jamais d’outil à la mode, de rustine ni de truc à moitié fait.',
    descEn: 'We first ship what’s already proven and pays off — an 80/20 logic — then we optimise. Only solid things that run. Never a trendy tool, a band-aid or a half-built thing.',
  },
  {
    icon: Zap,
    titleFr: 'Rapidité & réactivité',
    titleEn: 'Speed & reactivity',
    descFr: 'Réponse en moins de 15 minutes pendant la semaine d’onboarding, un point en visio chaque semaine, du feedback en continu. On écoute, on ajuste, on exécute vite — et vous voyez le logiciel avancer.',
    descEn: 'A reply in under 15 minutes during onboarding week, a weekly video check-in, continuous feedback. We listen, adjust and execute fast — and you watch the software move forward.',
  },
  {
    icon: KeyRound,
    titleFr: 'Vous restez autonome',
    titleEn: 'You stay autonomous',
    descFr: 'Le code et l’infrastructure vous appartiennent. Avant de partir, on forme vos équipes à les utiliser et à les faire évoluer : jamais coincé, jamais dépendant. Et on reste là, réactif, si besoin.',
    descEn: 'The code and infrastructure are yours. Before we leave, we train your teams to use and evolve them: never stuck, never dependent. And we stay available if you need us.',
  },
  {
    icon: ShieldCheck,
    titleFr: 'La garantie résultat',
    titleEn: 'The results guarantee',
    descFr: 'On s’accorde d’avance sur des objectifs clairs et mesurables, et on travaille jusqu’à ce qu’ils soient atteints. Un engagement qui couvre aussi les délais, la propriété du code et la qualité.',
    descEn: 'We agree upfront on clear, measurable objectives, and we keep working until they’re met. A commitment that also covers deadlines, code ownership and quality.',
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
