'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'

type Sector = {
  nameFr: string; nameEn: string
  painFr: string; painEn: string
  buildsFr: string[]; buildsEn: string[]
}

const SECTORS: Sector[] = [
  {
    nameFr: 'Hôtellerie & restauration', nameEn: 'Hotels & restaurants',
    painFr: 'Réservations, plannings, stocks et coûts éclatés sur dix outils qui ne se parlent pas.',
    painEn: 'Bookings, rotas, stock and costs scattered across ten tools that don’t talk to each other.',
    buildsFr: ['Base unifiée résa · stock · staff', 'Dashboards de marge en temps réel', 'Commandes fournisseurs automatisées'],
    buildsEn: ['Unified booking · stock · staff base', 'Real-time margin dashboards', 'Automated supplier orders'],
  },
  {
    nameFr: 'Événementiel & clubs', nameEn: 'Events & clubs',
    painFr: 'Viviers, missions, bénévoles et coordination gérés à la main, toujours dans l’urgence.',
    painEn: 'Talent pools, gigs, volunteers and coordination all managed by hand, always in a rush.',
    buildsFr: ['Portail missions & disponibilités', 'Coordination des équipes en direct', 'Adhérents & billetterie centralisés'],
    buildsEn: ['Gigs & availability portal', 'Live team coordination', 'Members & ticketing centralised'],
  },
  {
    nameFr: 'Conseil & cabinets', nameEn: 'Consulting & firms',
    painFr: 'La méthode et le savoir enfermés dans des Excel et dans quelques têtes.',
    painEn: 'Method and know-how locked inside spreadsheets and a few people’s heads.',
    buildsFr: ['Portail projets & livrables', 'Base clients unifiée', 'Agents qui rédigent CR et propositions'],
    buildsEn: ['Projects & deliverables portal', 'Unified client base', 'Agents that draft notes and proposals'],
  },
  {
    nameFr: 'Marketing & publicité', nameEn: 'Marketing & advertising',
    painFr: 'Briefs, production et reporting client dispersés, du temps perdu sur du répétitif.',
    painEn: 'Briefs, production and client reporting scattered, time lost on repetitive work.',
    buildsFr: ['Pipeline campagnes & assets', 'Reporting client automatisé', 'Génération de contenu assistée'],
    buildsEn: ['Campaign & asset pipeline', 'Automated client reporting', 'Assisted content generation'],
  },
  {
    nameFr: 'Recrutement & staffing', nameEn: 'Recruiting & staffing',
    painFr: 'Candidats, missions et relances suivis dans des tableurs qui débordent.',
    painEn: 'Candidates, gigs and follow-ups tracked in spreadsheets bursting at the seams.',
    buildsFr: ['ATS sur-mesure candidats · missions', 'Matching & relances automatiques', 'Portail client & feuilles d’heures'],
    buildsEn: ['Custom ATS: candidates · gigs', 'Automatic matching & follow-ups', 'Client portal & timesheets'],
  },
  {
    nameFr: 'Ingénierie & bureaux d’études', nameEn: 'Engineering & design offices',
    painFr: 'Affaires, documents techniques et heures suivis en parallèle, jamais au même endroit.',
    painEn: 'Projects, technical docs and hours tracked in parallel, never in one place.',
    buildsFr: ['Suivi d’affaires & temps passés', 'Gestion documentaire technique', 'Chiffrage & conformité assistés'],
    buildsEn: ['Project & time tracking', 'Technical document management', 'Assisted quoting & compliance'],
  },
  {
    nameFr: 'Industrie & production', nameEn: 'Manufacturing & production',
    painFr: 'Production, stock et qualité pilotés sur des fichiers et du papier.',
    painEn: 'Production, stock and quality run on files and paper.',
    buildsFr: ['Suivi production & ordres de fab.', 'Stock & traçabilité temps réel', 'Contrôle qualité digitalisé'],
    buildsEn: ['Production & work-order tracking', 'Real-time stock & traceability', 'Digitised quality control'],
  },
  {
    nameFr: 'Logistique & supply chain', nameEn: 'Logistics & supply chain',
    painFr: 'Flux, stocks et transport suivis dans des outils qui ne remontent rien de fiable.',
    painEn: 'Flows, stock and transport tracked in tools that surface nothing reliable.',
    buildsFr: ['Stock & réappros en temps réel', 'Suivi expéditions & transporteurs', 'Analytique flux & ruptures'],
    buildsEn: ['Real-time stock & reordering', 'Shipment & carrier tracking', 'Flow & stockout analytics'],
  },
  {
    nameFr: 'BTP & construction', nameEn: 'Construction & trades',
    painFr: 'Chantiers, devis et conformité gérés au téléphone et dans des classeurs.',
    painEn: 'Sites, quotes and compliance managed on the phone and in binders.',
    buildsFr: ['Suivi de chantiers & planning', 'Devis · factures · situations', 'Conformité & documents auto-remplis'],
    buildsEn: ['Site tracking & scheduling', 'Quotes · invoices · progress bills', 'Compliance & auto-filled documents'],
  },
  {
    nameFr: 'Services à domicile', nameEn: 'Home services',
    painFr: 'Interventions, tournées et facturation dispatchées à la main chaque jour.',
    painEn: 'Jobs, routes and billing dispatched by hand every single day.',
    buildsFr: ['Planning & tournées optimisés', 'App terrain pour les intervenants', 'Facturation & relances automatiques'],
    buildsEn: ['Optimised scheduling & routes', 'Field app for your teams', 'Automated billing & follow-ups'],
  },
  {
    nameFr: 'Immobilier', nameEn: 'Real estate',
    painFr: 'Leads, biens et mandats dispersés, de la donnée qui dort un peu partout.',
    painEn: 'Leads, listings and mandates scattered, data sleeping all over the place.',
    buildsFr: ['CRM leads · biens · mandats', 'Estimations & pige assistées', 'Relances & reporting vendeurs auto'],
    buildsEn: ['CRM: leads · listings · mandates', 'Assisted valuations & prospecting', 'Auto follow-ups & seller reporting'],
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
            {d('Cliquez sur votre métier — on vous montre le bordel typique, et ce qu’on construit pour y mettre fin.',
               'Click your line of work — we show you the typical mess, and what we build to end it.')}
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="sec-x">
            {/* Liste des secteurs — alignée, cliquable */}
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

            {/* Panneau animé — ce qui se passe quand on change */}
            <div className="sec-panel">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="font-mono sec-panel-idx">{d('Secteur', 'Industry')} · {String(active + 1).padStart(2, '0')}/{String(SECTORS.length).padStart(2, '0')}</span>
                  <h3 className="font-serif italic sec-panel-title">{d(cur.nameFr, cur.nameEn)}</h3>
                  <p className="font-sans sec-panel-pain">{d(cur.painFr, cur.painEn)}</p>

                  <span className="font-mono sec-panel-label">{d('Ce qu’on construit', 'What we build')}</span>
                  <ul className="sec-builds">
                    {(lang === 'en' ? cur.buildsEn : cur.buildsFr).map((bch) => (
                      <li key={bch} className="sec-build font-sans">
                        <span className="sec-build-dot" aria-hidden="true" />
                        {bch}
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
