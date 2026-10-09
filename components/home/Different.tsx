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
    descFr: 'Un logiciel du marché vous demande de rentrer dans ses cases, parce qu’il est vendu à tout le monde. Ici, vos règles sont encodées une fois, telles qu’elles sont : vos prestataires, vos tarifs, vos saisons, votre façon de recevoir. C’est l’outil qui s’aligne.',
    descEn: 'An off-the-shelf tool asks you to fit its boxes, because it is sold to everyone. Here your rules are encoded once, exactly as they are: your suppliers, your rates, your seasons, the way you receive clients. The tool is what adapts.', descHu: 'Egy dobozos szoftver arra kéri, hogy illeszkedjen a rubrikáiba, mert mindenkinek eladják. Itt a szabályait egyszer, úgy ahogy vannak, lekódoljuk: a beszállítóit, az árait, a szezonjait, a vendégfogadását. Az eszköz igazodik.',
  },
  {
    icon: InfinityIcon,
    titleFr: 'Vous gardez la main',
    titleEn: 'You stay in control', titleHu: 'Ön dönt',
    descFr: 'L’automatisation fait le travail répétitif, le jugement reste humain. L’outil propose un planning, un plan de table, une réponse : la personne décide. La personnalisation, c’est votre métier, on ne vous la retire pas.',
    descEn: 'Automation does the repetitive work, judgement stays human. The tool suggests a rota, a table plan, a reply: a person decides. Personal service is your trade, and we don’t take it away from you.', descHu: 'Az automatizálás végzi az ismétlődő munkát, az ítélet emberi marad. Az eszköz beosztást, ültetési rendet, választ javasol: egy ember dönt. A személyre szabás az Ön szakmája, nem vesszük el Öntől.',
  },
  {
    icon: Zap,
    titleFr: 'Un seul système, de la première visite à la facture',
    titleEn: 'One system, from the first visit to the invoice', titleHu: 'Egyetlen rendszer, az első látogatástól a számláig',
    descFr: 'Le site, les campagnes, les demandes, les séjours et les chiffres parlent entre eux. Vous savez d’où vient chaque client et ce qu’il rapporte, sans recouper cinq outils qui s’ignorent.',
    descEn: 'The website, the campaigns, the requests, the stays and the numbers talk to each other. You know where each client comes from and what they bring in, without cross-checking five tools that ignore each other.', descHu: 'A weboldal, a kampányok, a kérések, a tartózkodások és a számok beszélnek egymással. Tudja, honnan jön minden ügyfél és mit hoz, anélkül hogy öt, egymásról nem tudó eszközt kellene összevetnie.',
  },
  {
    icon: KeyRound,
    titleFr: 'Celui qui code est celui qui vous parle',
    titleEn: 'The person who codes is the person you talk to', titleHu: 'Aki kódol, az beszél Önnel',
    descFr: 'Pas de commercial, pas de junior à qui on repasse le dossier. Un point régulier, une réponse rapide en pleine saison, et vous voyez l’outil avancer d’une fois sur l’autre.',
    descEn: 'No sales rep, no junior the file gets handed down to. Regular check-ins, a fast reply in the middle of the season, and you watch the tool move forward from one time to the next.', descHu: 'Nincs értékesítő, nincs junior, akinek továbbadják az ügyet. Rendszeres egyeztetés, gyors válasz a szezon közepén is, és alkalomról alkalomra látja, hogyan halad az eszköz.',
  },
  {
    icon: ShieldCheck,
    titleFr: 'Un partenariat dans la durée',
    titleEn: 'A long-term partnership', titleHu: 'Hosszú távú partnerség',
    descFr: 'Pas une prestation qu’on livre avant de disparaître. Le système évolue avec vous, saison après saison, et vos équipes sont formées jusqu’à l’autonomie. Le code vous appartient, vos données restent en Europe : rien ne dépend d’un outil que vous ne contrôlez pas.',
    descEn: 'Not a job we deliver before vanishing. The system evolves with you, season after season, and your teams are trained until they’re autonomous. You own the code, your data stays in Europe: nothing depends on a tool you don’t control.', descHu: 'Nem egy megbízás, amelyet átadunk, aztán eltűnünk. A rendszer Önnel együtt fejlődik, szezonról szezonra, a csapatát pedig az önállóságig képezzük. A forráskód az Öné, az adatai Európában maradnak: semmi nem függ olyan eszköztől, amelyet nem Ön irányít.',
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
