'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'

// Socle commun, ce que nos solutions apportent, quel que soit le secteur.
const BASE_FR = [
  'Données centralisées et claires',
  'Business plus rentable',
  'Leads mieux qualifiés',
  'Hyper-personnalisation',
  'Meilleure expérience client',
  'Rapidité & réactivité',
]
const BASE_EN = [
  'Centralised, clear data',
  'More profitable business',
  'Better-qualified leads',
  'Hyper-personalisation',
  'Better client experience',
  'Speed & responsiveness',
]

type Sector = {
  nameFr: string; nameEn: string
  painFr: string; painEn: string
  buildsFr: string[]; buildsEn: string[]
}

// 8 secteurs, resserrés sur le profil cible (service gros ticket d'abord,
// puis coordination / multi-sites / structure / luxe). Tier 1 en premier.
const SECTORS: Sector[] = [
  {
    nameFr: 'Bureaux d’études, ingénierie & industrie', nameEn: 'Engineering & manufacturing',
    painFr: 'Vos affaires, vos chiffrages, vos documents techniques et vos heures vivent dans dix fichiers séparés. Résultat : vous ne savez jamais en temps réel quelle affaire est vraiment rentable.',
    painEn: 'Your projects, quotes, technical docs and hours live in ten separate files. The result: you never know in real time which project is actually profitable.',
    buildsFr: ['Suivi d’affaires : temps passés, avancement et marge par projet', 'Chiffrage assisté et gestion documentaire centralisée', 'Traçabilité, contrôle qualité et conformité digitalisés'],
    buildsEn: ['Project tracking: time, progress and margin per project', 'Assisted quoting and centralised document management', 'Digitised traceability, quality control and compliance'],
  },
  {
    nameFr: 'Conseil & consulting', nameEn: 'Consulting',
    painFr: 'Votre matière grise se vend cher, mais elle se perd dans des slides, des mails et des tableurs. Le savoir des missions ne se capitalise nulle part, et chaque livrable repart de zéro.',
    painEn: 'Your expertise sells at a premium, but it gets lost in slides, emails and spreadsheets. Knowledge from past engagements is never capitalised, and every deliverable starts from scratch.',
    buildsFr: ['Gestion des missions : staffing, temps et rentabilité par dossier', 'Base de connaissance et livrables capitalisés, réutilisables', 'Portail client, reporting et facturation au temps automatisés'],
    buildsEn: ['Engagement management: staffing, time and profit per case', 'Reusable knowledge base and capitalised deliverables', 'Client portal, reporting and time-based billing automated'],
  },
  {
    nameFr: 'Hôtellerie, restauration & événementiel', nameEn: 'Hospitality & events',
    painFr: 'Réservations, plannings, staff et stocks éclatés sur dix outils qui ne se parlent pas. À l’échelle d’un groupe ou d’un gros événement, tout se joue dans l’urgence, sans vue d’ensemble.',
    painEn: 'Bookings, rotas, staff and stock scattered across ten tools that don’t talk. At the scale of a group or a big event, it all plays out under pressure, with no overall view.',
    buildsFr: ['Réservations et confirmations automatisées, multi-sites', 'Plannings staff et prestataires en temps réel', 'CRM clients et marges suivies au jour le jour, par site'],
    buildsEn: ['Automated bookings and confirmations, across sites', 'Real-time staff and vendor rotas', 'Client CRM and margins tracked daily, per site'],
  },
  {
    nameFr: 'Immobilier, promotion & construction', nameEn: 'Real estate, development & construction',
    painFr: 'Programmes, lots, mandats et leads dispersés. De la donnée qui dort partout, sur des opérations qui pèsent lourd, et aucune vue consolidée du pipeline.',
    painEn: 'Programmes, units, mandates and leads scattered. Data sleeping everywhere, on high-stakes operations, with no consolidated pipeline view.',
    buildsFr: ['Pipeline programmes, lots, mandats et acquéreurs', 'Qualification et relance automatiques des leads', 'Suivi d’opérations, budgets et intervenants centralisé'],
    buildsEn: ['Pipeline: programmes, units, mandates and buyers', 'Automatic lead qualification and follow-up', 'Centralised operations, budgets and stakeholders tracking'],
  },
  {
    nameFr: 'Institutions & écoles privées', nameEn: 'Institutions & private schools',
    painFr: 'Admissions, dossiers étudiants, plannings et scolarité gérés dans des outils qui datent. Des ressaisies partout, des données qui ne remontent jamais au bon endroit.',
    painEn: 'Admissions, student records, schedules and academics run on dated tools. Re-entry everywhere, data that never lands in the right place.',
    buildsFr: ['Admissions et dossiers étudiants centralisés', 'Plannings, campus et scolarité en temps réel', 'Suivi, reporting et communication automatisés'],
    buildsEn: ['Centralised admissions and student records', 'Real-time schedules, campus and academics', 'Automated tracking, reporting and communication'],
  },
  {
    nameFr: 'Têtes de réseau & franchises', nameEn: 'Networks & franchises',
    painFr: 'Vous pilotez un réseau, mais chaque point de vente remonte ses chiffres à sa façon, en retard, dans son coin. Impossible d’avoir une vue fiable et en temps réel de tout le réseau.',
    painEn: 'You run a network, but every location reports its numbers its own way, late, in its own corner. No reliable, real-time view of the whole network.',
    buildsFr: ['Remontée automatique des données de chaque site', 'Tableau de bord réseau consolidé en temps réel', 'Conformité, procédures et reporting standardisés'],
    buildsEn: ['Automatic data feed from every location', 'Consolidated network dashboard in real time', 'Standardised compliance, procedures and reporting'],
  },
  {
    nameFr: 'Logistique & supply chain', nameEn: 'Logistics & supply chain',
    painFr: 'Flux, stocks et transport suivis dans des outils qui ne remontent rien de fiable. Vous pilotez à retardement, sur des chiffres déjà faux.',
    painEn: 'Flows, stock and transport tracked in tools that surface nothing reliable. You steer with a lag, on numbers already wrong.',
    buildsFr: ['Stock et réappros en temps réel', 'Suivi expéditions et transporteurs', 'Analytique flux, ruptures et coûts'],
    buildsEn: ['Real-time stock and reordering', 'Shipment and carrier tracking', 'Flow, stockout and cost analytics'],
  },
  {
    nameFr: 'Marketing & publicité', nameEn: 'Marketing & advertising',
    painFr: 'Briefs, production et reporting client dispersés. Du temps perdu sur du répétitif, au lieu de le passer sur la création qui fait la différence.',
    painEn: 'Briefs, production and client reporting scattered. Time lost on repetitive work instead of the creative work that makes the difference.',
    buildsFr: ['Pipeline campagnes et assets centralisé', 'Reporting client automatisé', 'Génération de contenu assistée par IA'],
    buildsEn: ['Centralised campaign and asset pipeline', 'Automated client reporting', 'AI-assisted content generation'],
  },
]

export default function Sectors() {
  const { lang } = useLang()
  const d = (fr: string, en: string) => (lang === 'en' ? en : fr)
  const [active, setActive] = useState(0)
  const cur = SECTORS[active]

  return (
    <section id="secteurs" style={{ padding: '40px 24px 24px' }}>
      <div className="mx-auto" style={{ maxWidth: '1100px' }}>
        <FadeUp className="text-center mb-16">
          <span className="section-label">{d('Les secteurs qu’on sert', 'Industries we serve')}</span>
          <h2 className="font-serif italic" style={{ fontSize: 'clamp(26px, 3.6vw, 38px)', fontWeight: 400, color: 'var(--text)', lineHeight: 1.2, margin: '4px 0 16px' }}>
            {d('Le secteur change. ', 'The sector changes. ')}
            <span className="accent">{d('La méthode, non.', 'The method doesn’t.')}</span>
          </h2>
          <p className="font-sans" style={{ fontSize: '15px', fontWeight: 300, color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
            {d('Un socle commun pour tous, puis on personnalise pour votre métier. Cliquez sur le vôtre.',
               'A shared foundation for everyone, then we tailor it to your trade. Click yours.')}
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="sec-x">
            {/* Liste des secteurs, cliquable */}
            <div className="sec-list" role="tablist" aria-label={d('Secteurs', 'Industries')}>
              {SECTORS.map((s, i) => {
                const on = i === active
                return (
                  <button
                    key={s.nameFr}
                    role="tab"
                    aria-selected={on}
                    className={`sec-row${on ? ' sec-row-on' : ''}`}
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                  >
                    <span className="font-mono sec-row-idx">{String(i + 1).padStart(2, '0')}</span>
                    <span className="font-sans sec-row-name">{d(s.nameFr, s.nameEn)}</span>
                    <ArrowRight size={15} strokeWidth={2} className="sec-row-arrow" />
                  </button>
                )
              })}
            </div>

            {/* Panneau animé */}
            <div className="sec-panel">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="font-mono sec-panel-idx">
                    {d('Secteur', 'Industry')} · {String(active + 1).padStart(2, '0')}/{String(SECTORS.length).padStart(2, '0')}
                  </span>
                  <h3 className="font-serif italic sec-panel-title">{d(cur.nameFr, cur.nameEn)}</h3>
                  <p className="font-sans sec-panel-pain">{d(cur.painFr, cur.painEn)}</p>

                  {/* Socle commun, le même pour tous */}
                  <span className="font-mono sec-panel-label">{d('Ce que ça vous apporte, à tous les coups', 'What it brings you, every time')}</span>
                  <div className="sec-base">
                    {(lang === 'en' ? BASE_EN : BASE_FR).map((b) => (
                      <span key={b} className="sec-base-chip">{b}</span>
                    ))}
                  </div>

                  {/* Personnalisation secteur */}
                  <span className="font-mono sec-panel-label">{d('Et concrètement, pour votre secteur', 'And concretely, for your sector')}</span>
                  <ul className="sec-builds">
                    {(lang === 'en' ? cur.buildsEn : cur.buildsFr).map((b) => (
                      <li key={b} className="sec-build font-sans">
                        <span className="sec-build-dot" aria-hidden="true" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
