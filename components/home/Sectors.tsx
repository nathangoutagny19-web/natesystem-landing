'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'

// Socle commun — ce que nos solutions apportent, quel que soit le secteur.
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

// ~8 secteurs, certains regroupés (« pas en avoir énormément »).
const SECTORS: Sector[] = [
  {
    nameFr: 'Hôtellerie, restauration & événementiel', nameEn: 'Hospitality & events',
    painFr: 'Réservations, plannings, staff et stocks éclatés sur dix outils qui ne se parlent pas — tout se joue dans l’urgence du service.',
    painEn: 'Bookings, rotas, staff and stock scattered across ten tools that don’t talk — it all plays out in the rush of service.',
    buildsFr: ['Backend de réservation + mails de confirmation auto', 'Plannings staff & bénévoles en temps réel', 'CRM clients + marges suivies au jour le jour'],
    buildsEn: ['Booking backend + automatic confirmation emails', 'Real-time staff & volunteer rotas', 'Client CRM + margins tracked day by day'],
  },
  {
    nameFr: 'Bureaux d’études, ingénierie & industrie', nameEn: 'Engineering & manufacturing',
    painFr: 'Affaires, documents techniques, production et heures suivis en parallèle — jamais au même endroit, jamais fiable.',
    painEn: 'Projects, technical docs, production and hours tracked in parallel — never in one place, never reliable.',
    buildsFr: ['Suivi d’affaires · temps passés · production', 'Gestion documentaire & chiffrage assistés', 'Traçabilité et contrôle qualité digitalisés'],
    buildsEn: ['Project · time · production tracking', 'Assisted document management & quoting', 'Digitised traceability & quality control'],
  },
  {
    nameFr: 'Immobilier', nameEn: 'Real estate',
    painFr: 'Leads, biens et mandats dispersés, de la donnée qui dort un peu partout.',
    painEn: 'Leads, listings and mandates scattered, data sleeping all over the place.',
    buildsFr: ['Qualification & relance automatique des leads', 'Pipeline biens · mandats · vendeurs', 'Estimations et pige assistées par IA'],
    buildsEn: ['Automatic lead qualification & follow-up', 'Pipeline: listings · mandates · sellers', 'AI-assisted valuations & prospecting'],
  },
  {
    nameFr: 'Services à domicile, construction & BTP', nameEn: 'Home services & construction',
    painFr: 'Chantiers, interventions, devis et conformité gérés au téléphone et dans des classeurs.',
    painEn: 'Sites, jobs, quotes and compliance managed on the phone and in binders.',
    buildsFr: ['Suivi chantiers & planning des interventions', 'Devis · factures · situations en un clic', 'App terrain + conformité auto-remplie'],
    buildsEn: ['Site tracking & job scheduling', 'Quotes · invoices · progress bills in one click', 'Field app + auto-filled compliance'],
  },
  {
    nameFr: 'RH & staffing', nameEn: 'HR & staffing',
    painFr: 'Candidats, missions et relances suivis dans des tableurs qui débordent.',
    painEn: 'Candidates, gigs and follow-ups tracked in spreadsheets bursting at the seams.',
    buildsFr: ['ATS sur-mesure candidats · missions', 'Matching & relances automatiques', 'Portail client + feuilles d’heures'],
    buildsEn: ['Custom ATS: candidates · gigs', 'Automatic matching & follow-ups', 'Client portal + timesheets'],
  },
  {
    nameFr: 'Services financiers', nameEn: 'Financial services',
    painFr: 'Données clients éparpillées et conformité qui grignote un temps fou.',
    painEn: 'Client data scattered and compliance eating up huge amounts of time.',
    buildsFr: ['Base clients unifiée & sécurisée', 'Reporting & conformité automatisés', 'Relances et suivi de dossiers assistés'],
    buildsEn: ['Unified, secure client base', 'Automated reporting & compliance', 'Assisted follow-ups & case tracking'],
  },
  {
    nameFr: 'Logistique & supply chain', nameEn: 'Logistics & supply chain',
    painFr: 'Flux, stocks et transport suivis dans des outils qui ne remontent rien de fiable.',
    painEn: 'Flows, stock and transport tracked in tools that surface nothing reliable.',
    buildsFr: ['Stock & réappros en temps réel', 'Suivi expéditions & transporteurs', 'Analytique flux, ruptures & coûts'],
    buildsEn: ['Real-time stock & reordering', 'Shipment & carrier tracking', 'Flow, stockout & cost analytics'],
  },
  {
    nameFr: 'Marketing & publicité', nameEn: 'Marketing & advertising',
    painFr: 'Briefs, production et reporting client dispersés, du temps perdu sur du répétitif.',
    painEn: 'Briefs, production and client reporting scattered, time lost on repetitive work.',
    buildsFr: ['Pipeline campagnes & assets centralisé', 'Reporting client automatisé', 'Génération de contenu assistée par IA'],
    buildsEn: ['Centralised campaign & asset pipeline', 'Automated client reporting', 'AI-assisted content generation'],
  },
]

export default function Sectors() {
  const { lang } = useLang()
  const d = (fr: string, en: string) => (lang === 'en' ? en : fr)
  const [active, setActive] = useState(0)
  const cur = SECTORS[active]

  return (
    <section id="secteurs" style={{ padding: '40px 24px 104px' }}>
      <div className="mx-auto" style={{ maxWidth: '1100px' }}>
        <FadeUp className="text-center mb-16">
          <span className="section-label">{d('Les secteurs qu’on sert', 'Industries we serve')}</span>
          <h2 className="font-serif italic" style={{ fontSize: 'clamp(26px, 3.6vw, 38px)', fontWeight: 400, color: 'var(--text)', lineHeight: 1.2, margin: '4px 0 16px' }}>
            {d('Le secteur change. ', 'The sector changes. ')}
            <span className="accent">{d('La méthode, non.', 'The method doesn’t.')}</span>
          </h2>
          <p className="font-sans" style={{ fontSize: '15px', fontWeight: 300, color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
            {d('Un socle commun pour tous — puis on personnalise pour votre métier. Cliquez sur le vôtre.',
               'A shared foundation for everyone — then we tailor it to your trade. Click yours.')}
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="sec-x">
            {/* Liste des secteurs — cliquable */}
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

                  {/* Socle commun — le même pour tous */}
                  <span className="font-mono sec-panel-label">{d('Ce que ça vous apporte — à tous les coups', 'What it brings you — every time')}</span>
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
