'use client'

import { ShieldCheck, Code2, MapPin, LineChart, type LucideIcon } from 'lucide-react'
import FadeUp from '@/components/ui/FadeUp'
import LiteYouTube from '@/components/ui/LiteYouTube'
import { useLang } from '@/components/providers/LangProvider'

const VIDEO_ID = '6Sg4_wkyOa8'

type Point = { icon: LucideIcon; titleFr: string; titleEn: string; descFr: string; descEn: string }

const POINTS: Point[] = [
  {
    icon: Code2,
    titleFr: 'Le code est à vous, à 100 %',
    titleEn: 'The code is 100 % yours',
    descFr: 'Livré, hébergé chez vous, documenté. Zéro abonnement pour y accéder, zéro lock-in. N’importe quel dev compétent peut reprendre derrière.',
    descEn: 'Delivered, hosted on your side, documented. No subscription to access it, no lock-in. Any competent dev can pick up from there.',
  },
  {
    icon: ShieldCheck,
    titleFr: 'Codé par le fondateur',
    titleEn: 'Founder-coded',
    descFr: 'Pas de commercial, pas de junior qui sous-traite. Celui qui vous parle est celui qui construit — et il répond de chaque livraison.',
    descEn: 'No sales rep, no junior subcontracting. The person you talk to is the one who builds — and answers for every delivery.',
  },
  {
    icon: MapPin,
    titleFr: 'Hébergé en UE, RGPD-natif',
    titleEn: 'EU-hosted, GDPR-native',
    descFr: 'Vos données restent en Europe, protégées et conformes. Pas de zone grise sur où elles vivent.',
    descEn: 'Your data stays in Europe, protected and compliant. No grey area on where it lives.',
  },
  {
    icon: LineChart,
    titleFr: 'Chaque résultat mesuré',
    titleEn: 'Every result measured',
    descFr: 'On chiffre le gain avec vous, avant et après. Pas de promesse en l’air : des heures et des euros, documentés.',
    descEn: 'We quantify the gain with you, before and after. No vague promises: hours and euros, documented.',
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
