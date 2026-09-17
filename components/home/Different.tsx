'use client'

import { Target, Infinity as InfinityIcon, Zap, KeyRound, ShieldCheck, type LucideIcon } from 'lucide-react'
import FadeUp from '@/components/ui/FadeUp'
import VslPlayer from '@/components/ui/VslPlayer'
import { useLang } from '@/components/providers/LangProvider'
import { makeD } from '@/lib/lang'

type Point = { icon: LucideIcon; titleFr: string; titleEn: string; titleHu: string; descFr: string; descEn: string; descHu: string }

const POINTS: Point[] = [
  {
    icon: Target,
    titleFr: 'Orienté résultat, zéro bricolage',
    titleEn: 'Result-driven, zero patching', titleHu: 'Eredményvezérelt, semmi foltozás',
    descFr: 'On déploie d’abord ce qui est déjà éprouvé et qui rapporte, logique 80/20, puis on optimise. Que du solide qui tourne. Jamais d’outil à la mode, de rustine ni de truc à moitié fait.',
    descEn: 'We first ship what’s already proven and pays off, an 80/20 logic, then we optimise. Only solid things that run. Never a trendy tool, a band-aid or a half-built thing.', descHu: 'Először azt visszük élesbe, ami már bizonyított és megtérül, 80/20 logikával, aztán optimalizálunk. Csak szilárd dolgok, amelyek futnak. Soha nem divatos eszköz, nem ragtapasz, nem félkész megoldás.',
  },
  {
    icon: InfinityIcon,
    titleFr: 'Pensé pour durer',
    titleEn: 'Built to last', titleHu: 'Tartósra építve',
    descFr: 'On est là pour le long terme. On construit votre solution vraiment autour de vos process, vos workflows, vos équipes et votre métier, pour qu’elle soit la plus efficace possible et qu’elle tienne dans le temps. Pas un coup one-shot : une infrastructure qui vous accompagne sur des années.',
    descEn: 'We’re here for the long run. We build your solution truly around your processes, workflows, teams and trade, so it’s as effective as possible and lasts over time. Not a one-off: an infrastructure that supports you for years.', descHu: 'Hosszú távra jövünk. A megoldását valóban a folyamatai, munkafolyamatai, csapatai és szakmája köré építjük, hogy a lehető leghatékonyabb legyen és kitartson az időben. Nem egyszeri munka: infrastruktúra, amely évekig tartja Önt.',
  },
  {
    icon: Zap,
    titleFr: 'Rapidité & réactivité',
    titleEn: 'Speed & reactivity', titleHu: 'Gyorsaság és reakcióképesség',
    descFr: 'Réponse en moins de 15 minutes pendant la semaine d’onboarding, un point en visio chaque semaine, du feedback en continu. On écoute, on ajuste, on exécute vite, et vous voyez le logiciel avancer.',
    descEn: 'A reply in under 15 minutes during onboarding week, a weekly video check-in, continuous feedback. We listen, adjust and execute fast, and you watch the software move forward.', descHu: 'Válasz 15 percen belül a bevezetés hetében, heti videós egyeztetés, folyamatos visszajelzés. Meghallgatjuk, igazítunk és gyorsan végrehajtunk, Ön pedig látja, ahogy a szoftver halad.',
  },
  {
    icon: KeyRound,
    titleFr: 'Vous restez autonome',
    titleEn: 'You stay autonomous', titleHu: 'Ön önálló marad',
    descFr: 'Le code et l’infrastructure vous appartiennent. Avant de partir, on forme vos équipes à les utiliser et à les faire évoluer : jamais coincé, jamais dépendant. Et on reste là, réactif, si besoin.',
    descEn: 'The code and infrastructure are yours. Before we leave, we train your teams to use and evolve them: never stuck, never dependent. And we stay available if you need us.', descHu: 'A kód és az infrastruktúra az Öné. Mielőtt elmennénk, betanítjuk a csapatait a használatára és a továbbfejlesztésére: soha nem akad el, soha nem függ tőlünk. És elérhetők maradunk, ha szüksége van ránk.',
  },
  {
    icon: ShieldCheck,
    titleFr: 'La garantie résultat',
    titleEn: 'The results guarantee', titleHu: 'Az eredménygarancia',
    descFr: 'On s’accorde d’avance sur des objectifs clairs et mesurables, et on travaille jusqu’à ce qu’ils soient atteints. Un engagement qui couvre aussi les délais, la propriété du code et la qualité.',
    descEn: 'We agree upfront on clear, measurable objectives, and we keep working until they’re met. A commitment that also covers deadlines, code ownership and quality.', descHu: 'Előre megállapodunk világos, mérhető célokban, és addig dolgozunk, amíg teljesülnek. Ez a vállalás a határidőkre, a kód tulajdonjogára és a minőségre is kiterjed.',
  },
]

export default function Different() {
  const { lang } = useLang()
  const d = makeD(lang)

  return (
    <section id="different" style={{ padding: '120px 24px' }}>
      <div className="mx-auto" style={{ maxWidth: '1120px' }}>
        <FadeUp className="text-center mb-16">
          <span className="section-label">{d('Pourquoi nous', 'Why us', 'Miért mi')}</span>
          <h2 className="section-title" style={{ maxWidth: '720px', margin: '0 auto 20px' }}>
            {d('Ce qui nous rend ', 'What makes us ', 'Ami mássá tesz ')}
            <span className="accent">{d('différents.', 'different.', 'minket.')}</span>
          </h2>
        </FadeUp>

        <div className="diff-row">
          <div className="diff-video-wrap">
            <VslPlayer
              src="/different.mp4"
              subtitles="different"
              poster="/different-poster.jpg"
              label={d('Regarder la vidéo', 'Watch the video', 'Videó megtekintése')}
              duration="3 min"
              title={d('Ce qui rend NateSystem différent', 'What makes NateSystem different', 'Ami mássá teszi a NateSystemet')}
            />
          </div>

          <div className="diff-points">
            {POINTS.map((p, i) => {
              const Icon = p.icon
              return (
                <FadeUp key={p.titleFr} delay={0.1 + i * 0.07}>
                  <div className="diff-point">
                    <span className="diff-point-icon"><Icon size={18} strokeWidth={1.7} /></span>
                    <div>
                      <h3 className="font-sans diff-point-title">{d(p.titleFr, p.titleEn, p.titleHu)}</h3>
                      <p className="font-sans diff-point-desc">{d(p.descFr, p.descEn, p.descHu)}</p>
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
