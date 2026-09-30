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
    titleFr: 'Votre organisation ne change pas',
    titleEn: 'Your organisation does not change', titleHu: 'A szervezete nem változik',
    descFr: 'Un logiciel du marché vous demande de rentrer dans ses cases, parce qu’il est vendu à tout le monde. Ici, vos règles sont encodées une fois, telles qu’elles sont. C’est l’outil qui s’aligne.',
    descEn: 'An off-the-shelf tool asks you to fit its boxes, because it is sold to everyone. Here your rules are encoded once, exactly as they are. The tool is what adapts.', descHu: 'Egy piaci szoftver arra kéri, hogy illeszkedjen a dobozaiba, mert mindenkinek árulják. Itt az Ön szabályait egyszer, úgy ahogy vannak, lekódoljuk. Az eszköz igazodik.',
  },
  {
    icon: InfinityIcon,
    titleFr: 'Bâti sur le calendrier scolaire',
    titleEn: 'Built on the school calendar', titleHu: 'A tanévi naptárra építve',
    descFr: 'Trimestres, vacances, semaines d’examens, votre convention collective. Les outils génériques ont été écrits pour des entreprises qui n’ont rien de tout ça, et ça se voit dès le premier mois.',
    descEn: 'Terms, holidays, exam weeks, your own collective agreement. Generic tools were written for companies that have none of that, and it shows in the first month.', descHu: 'Félévek, szünetek, vizsgaidőszakok, az Ön kollektív szerződése. Az általános eszközöket olyan cégeknek írták, amelyeknek ezek egyike sincs, és ez az első hónapban látszik.',
  },
  {
    icon: Zap,
    titleFr: 'Celui qui code est celui qui vous parle',
    titleEn: 'The person who codes is the person you talk to', titleHu: 'Aki kódol, az beszél Önnel',
    descFr: 'Pas de commercial, pas de junior à qui on repasse le dossier. Un point chaque semaine, une réponse rapide pendant la mise en service, et vous voyez l’outil avancer d’une fois sur l’autre.',
    descEn: 'No sales rep, no junior the file gets handed down to. A weekly check-in, a fast reply during rollout, and you watch the tool move forward from one week to the next.', descHu: 'Nincs értékesítő, nincs junior, akinek továbbadják az ügyet. Heti egyeztetés, gyors válasz a bevezetés alatt, és hétről hétre látja, hogyan halad az eszköz.',
  },
  {
    icon: KeyRound,
    titleFr: 'Les données de vos élèves restent chez vous',
    titleEn: 'Your student data stays with you', titleHu: 'A diákadatok Önöknél maradnak',
    descFr: 'Ce sont des données de mineurs. Hébergement en Europe, RGPD pris en compte dès la conception, accès cloisonnés par rôle. Et le code vous appartient : aucun abonnement pour garder l’accès.',
    descEn: 'These are minors’ records. EU hosting, GDPR designed in from the start, access partitioned by role. And you own the code: no subscription to keep access.', descHu: 'Ezek kiskorúak adatai. Európai tárhely, a GDPR a tervezéstől beépítve, szerepkörönként elkülönített hozzáférés. A kód pedig az Öné: nincs előfizetés a hozzáférésért.',
  },
  {
    icon: ShieldCheck,
    titleFr: 'On ne disparaît pas à la livraison',
    titleEn: 'We do not vanish on delivery', titleHu: 'Nem tűnünk el az átadáskor',
    descFr: 'On forme chacun, de la direction à l’accueil, jusqu’à ce que l’outil tourne sans nous. Et on reste joignable après, parce qu’une école ne fonctionne pas en janvier comme en septembre.',
    descEn: 'We train everyone, from leadership to the front desk, until the tool runs without us. And we stay reachable after, because a school does not run in January the way it runs in September.', descHu: 'Mindenkit betanítunk, a vezetőségtől a portáig, amíg az eszköz nélkülünk is megy. Utána is elérhetők maradunk, mert egy iskola januárban nem úgy működik, mint szeptemberben.',
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
