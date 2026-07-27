'use client'

import { Laptop, Cpu, Workflow, GraduationCap, type LucideIcon } from 'lucide-react'
import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'

type Item = { icon: LucideIcon; titleFr: string; titleEn: string; descFr: string; descEn: string }

const ITEMS: Item[] = [
  {
    icon: Laptop,
    titleFr: 'Logiciel sur-mesure',
    titleEn: 'Custom software',
    descFr: 'La plateforme interne qui fait tourner vos opérations : base unifiée, dashboards, portails, outils métier. Taillée pour votre process, pas l’inverse.',
    descEn: 'The internal platform that runs your operations: unified data, dashboards, portals, business tools. Built around your process, not the other way round.',
  },
  {
    icon: Cpu,
    titleFr: 'Système IA',
    titleEn: 'AI system',
    descFr: 'De l’IA intégrée là où elle remplace de vraies heures : lecture de documents, tri intelligent, agents qui exécutent des tâches multi-étapes dans vos outils.',
    descEn: 'AI embedded where it replaces real hours: document reading, smart triage, agents that run multi-step tasks inside your tools.',
  },
  {
    icon: Workflow,
    titleFr: 'Automatisation',
    titleEn: 'Automation',
    descFr: 'Les tâches répétitives qui tournent seules : commandes, factures, relances, passations. Vos équipes récupèrent des heures chaque semaine.',
    descEn: 'The repetitive tasks that run themselves: orders, invoices, follow-ups, handoffs. Your teams win back hours every week.',
  },
  {
    icon: GraduationCap,
    titleFr: 'Formation IA',
    titleEn: 'AI training',
    descFr: 'On rend vos équipes autonomes sur l’outil et sur l’IA au quotidien. Vous n’êtes prisonnier de personne, surtout pas de nous.',
    descEn: 'We make your teams autonomous on the tool and on AI day-to-day. You’re nobody’s hostage — least of all ours.',
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
