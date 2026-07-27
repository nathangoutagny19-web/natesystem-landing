'use client'

import { Search, Boxes, Cpu, GraduationCap, type LucideIcon } from 'lucide-react'
import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'

type Item = { icon: LucideIcon; titleFr: string; titleEn: string; descFr: string; descEn: string }

const ITEMS: Item[] = [
  {
    icon: Search,
    titleFr: 'Consulting & cartographie',
    titleEn: 'Consulting & mapping',
    descFr: 'On analyse vos process, opérations et workflows — de l’arrivée d’un prospect au client qui recommande. On cartographie tout, puis on repère où vous gagnez le plus.',
    descEn: 'We analyse your processes, operations and workflows — from a prospect’s arrival to a client who refers you. We map it all, then pinpoint where you gain the most.',
  },
  {
    icon: Boxes,
    titleFr: 'Développement sur-mesure',
    titleEn: 'Custom development',
    descFr: 'Logiciels métier, ERP, portails, cockpits — construits autour de vos opérations, pas l’inverse. Vos données unifiées, votre code qui vous appartient.',
    descEn: 'Business software, ERP, portals, cockpits — built around your operations, not the other way round. Your data unified, your code owned by you.',
  },
  {
    icon: Cpu,
    titleFr: 'Transformation & IA',
    titleEn: 'Digital & AI',
    descFr: 'De l’IA et de l’automatisation intégrées par-dessus votre système, uniquement là où elles remplacent de vraies heures. Jamais en décoration.',
    descEn: 'AI and automation layered on top of your system, only where they replace real hours. Never for show.',
  },
  {
    icon: GraduationCap,
    titleFr: 'Formation & accompagnement',
    titleEn: 'Training & support',
    descFr: 'On forme vos équipes, du dirigeant au terrain, à utiliser ces outils au quotidien — jusqu’à l’autonomie complète.',
    descEn: 'We train your teams, from leadership to the field, to use these tools day-to-day — all the way to full autonomy.',
  },
]

export default function WhatWeDo() {
  const { lang } = useLang()
  const d = (fr: string, en: string) => (lang === 'en' ? en : fr)

  return (
    <section id="ce-quon-fait" style={{ padding: '120px 24px' }}>
      <div className="mx-auto" style={{ maxWidth: '1100px' }}>
        <FadeUp className="text-center mb-16">
          <span className="section-label">{d('Ce qu’on fait', 'What we do')}</span>
          <h2 className="section-title" style={{ maxWidth: '720px', margin: '0 auto 20px' }}>
            {d('Une infrastructure, ', 'One infrastructure, ')}
            <span className="accent">{d('pas des rustines.', 'not band-aids.')}</span>
          </h2>
          <p className="font-sans" style={{ fontSize: '15px', fontWeight: 300, color: 'var(--text-secondary)', maxWidth: '620px', margin: '0 auto', lineHeight: 1.7 }}>
            {d('On remplace les outils génériques qui ne collent pas par du sur-mesure que vous possédez. L’IA et l’automatisation sont intégrées uniquement là où elles font gagner de vraies heures.',
               'We replace ill-fitting generic tools with custom software you own. AI and automation are embedded only where they save real hours.')}
          </p>
        </FadeUp>

        <div className="wwd-grid">
          {ITEMS.map((it, i) => {
            const Icon = it.icon
            return (
              <FadeUp key={it.titleFr} delay={i * 0.08}>
                <div className="wwd-card">
                  <span className="wwd-icon"><Icon size={20} strokeWidth={1.6} /></span>
                  <h3 className="font-serif italic wwd-title">{d(it.titleFr, it.titleEn)}</h3>
                  <p className="font-sans wwd-desc">{d(it.descFr, it.descEn)}</p>
                </div>
              </FadeUp>
            )
          })}
        </div>
      </div>
    </section>
  )
}
