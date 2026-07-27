'use client'

import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'

type Sector = { fr: string; en: string; tagFr: string; tagEn: string }

const SECTORS: Sector[] = [
  { fr: 'Restauration & hôtellerie', en: 'Food & hospitality', tagFr: 'Couverts, plannings, stocks, coûts', tagEn: 'Covers, rotas, stock, costs' },
  { fr: 'Conseil & cabinets', en: 'Consulting & firms', tagFr: 'Méthode enfermée dans des Excel', tagEn: 'Expertise locked in spreadsheets' },
  { fr: 'Institutions & enseignement', en: 'Institutions & education', tagFr: 'RH, pointage, stock, plannings', tagEn: 'HR, time tracking, stock, schedules' },
  { fr: 'Événementiel & staffing', en: 'Events & staffing', tagFr: 'Viviers, missions, coordination', tagEn: 'Talent pools, gigs, coordination' },
  { fr: 'Clubs & associations', en: 'Clubs & non-profits', tagFr: 'Bénévoles, adhérents, événements', tagEn: 'Volunteers, members, events' },
  { fr: 'BTP & installateurs', en: 'Construction & trades', tagFr: 'Chantiers, devis, conformité', tagEn: 'Sites, quotes, compliance' },
  { fr: 'Commerce & artisanat', en: 'Retail & crafts', tagFr: 'Stock, ventes, fournisseurs', tagEn: 'Stock, sales, suppliers' },
  { fr: 'Santé & médico-social', en: 'Health & care', tagFr: 'Dossiers, plannings, traçabilité', tagEn: 'Records, schedules, traceability' },
]

export default function Sectors() {
  const { lang } = useLang()
  const d = (fr: string, en: string) => (lang === 'en' ? en : fr)

  return (
    <section id="secteurs" style={{ padding: '32px 24px 96px' }}>
      <div className="mx-auto" style={{ maxWidth: '1100px' }}>
        <FadeUp className="text-center mb-12">
          <span className="section-label">{d('Les secteurs qu’on sert', 'Industries we serve')}</span>
          <h2 className="font-serif italic" style={{ fontSize: 'clamp(24px, 3.4vw, 34px)', fontWeight: 400, color: 'var(--text)', lineHeight: 1.2, margin: '4px 0 14px' }}>
            {d('Le secteur change. ', 'The sector changes. ')}
            <span className="accent">{d('La méthode, non.', 'The method doesn’t.')}</span>
          </h2>
          <p className="font-sans" style={{ fontSize: '14px', fontWeight: 300, color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.65 }}>
            {d('Partout où il y a des process répétitifs et de la donnée éparpillée. La stack s’adapte, notre façon de travailler ne bouge pas.',
               'Anywhere there are repetitive processes and scattered data. The stack adapts, the way we work stays the same.')}
          </p>
        </FadeUp>

        <div className="sectors-grid">
          {SECTORS.map((s, i) => (
            <FadeUp key={s.fr} delay={Math.min(i * 0.05, 0.35)}>
              <div className="sector-cell">
                <span className="font-sans sector-name">{d(s.fr, s.en)}</span>
                <span className="font-mono sector-tag">{d(s.tagFr, s.tagEn)}</span>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
