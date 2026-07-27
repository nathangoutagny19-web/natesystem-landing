'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'

type Category = {
  nameFr: string; nameEn: string
  subFr: string[]; subEn: string[]
  painFr: string; painEn: string
  buildsFr: string[]; buildsEn: string[]
}

// Regroupés par catégories (demande Nathan : « classer par catégories, pas en avoir trop »).
const CATS: Category[] = [
  {
    nameFr: 'Hospitality & événementiel', nameEn: 'Hospitality & events',
    subFr: ['Restauration', 'Hôtellerie', 'Clubs', 'Événementiel'],
    subEn: ['Restaurants', 'Hotels', 'Clubs', 'Events'],
    painFr: 'Réservations, plannings, staff et stocks éclatés sur dix outils qui ne se parlent pas — et tout se joue dans l’urgence du service.',
    painEn: 'Bookings, rotas, staff and stock scattered across ten tools that don’t talk — and it all plays out in the rush of service.',
    buildsFr: ['Base unifiée résa · staff · stock', 'Plannings & équipes en temps réel', 'Marges et coûts suivis au jour le jour'],
    buildsEn: ['Unified base: booking · staff · stock', 'Real-time rotas & teams', 'Margins and costs tracked day by day'],
  },
  {
    nameFr: 'Conseil & services pro', nameEn: 'Consulting & pro services',
    subFr: ['Consulting', 'Services pro', 'Marketing & pub', 'Recrutement & staffing'],
    subEn: ['Consulting', 'Pro services', 'Marketing & ads', 'Recruiting & staffing'],
    painFr: 'La méthode, les livrables et le suivi client enfermés dans des Excel et quelques têtes — du temps perdu sur du répétitif à chaque mission.',
    painEn: 'Method, deliverables and client follow-up locked in spreadsheets and a few heads — time lost on repetitive work on every engagement.',
    buildsFr: ['Portail projets · livrables · clients', 'Reporting & relances automatisés', 'Agents IA qui rédigent CR et propositions'],
    buildsEn: ['Projects · deliverables · clients portal', 'Automated reporting & follow-ups', 'AI agents drafting notes and proposals'],
  },
  {
    nameFr: 'Industrie, technique & terrain', nameEn: 'Industry, engineering & field',
    subFr: ['Industrie & production', 'Bureaux d’études', 'BTP & construction', 'Services à domicile'],
    subEn: ['Manufacturing', 'Engineering offices', 'Construction & trades', 'Home services'],
    painFr: 'Affaires, chantiers, production et heures suivis en parallèle sur des fichiers et du papier — jamais au même endroit, jamais fiable.',
    painEn: 'Projects, sites, production and hours tracked in parallel on files and paper — never in one place, never reliable.',
    buildsFr: ['Suivi d’affaires · chantiers · production', 'App terrain pour vos équipes', 'Devis · conformité · docs auto-remplis'],
    buildsEn: ['Tracking: projects · sites · production', 'Field app for your teams', 'Quotes · compliance · auto-filled docs'],
  },
  {
    nameFr: 'Logistique & immobilier', nameEn: 'Logistics & real estate',
    subFr: ['Logistique & supply chain', 'Immobilier'],
    subEn: ['Logistics & supply chain', 'Real estate'],
    painFr: 'Flux, stocks, biens et mandats dispersés dans des outils qui ne remontent rien de fiable — de la donnée qui dort un peu partout.',
    painEn: 'Flows, stock, listings and mandates scattered across tools that surface nothing reliable — data sleeping all over the place.',
    buildsFr: ['Stock · flux · biens en temps réel', 'Suivi expéditions ou mandats centralisé', 'Analytique & relances automatiques'],
    buildsEn: ['Real-time stock · flows · listings', 'Centralised shipment or mandate tracking', 'Analytics & automatic follow-ups'],
  },
]

export default function Sectors() {
  const { lang } = useLang()
  const d = (fr: string, en: string) => (lang === 'en' ? en : fr)
  const [active, setActive] = useState(0)
  const cur = CATS[active]

  return (
    <section id="secteurs" style={{ padding: '40px 24px 104px' }}>
      <div className="mx-auto" style={{ maxWidth: '1000px' }}>
        <FadeUp className="text-center mb-14">
          <span className="section-label">{d('Les secteurs qu’on sert', 'Industries we serve')}</span>
          <h2 className="font-serif italic" style={{ fontSize: 'clamp(26px, 3.6vw, 38px)', fontWeight: 400, color: 'var(--text)', lineHeight: 1.2, margin: '4px 0 16px' }}>
            {d('Le secteur change. ', 'The sector changes. ')}
            <span className="accent">{d('La méthode, non.', 'The method doesn’t.')}</span>
          </h2>
          <p className="font-sans" style={{ fontSize: '15px', fontWeight: 300, color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
            {d('Choisissez votre univers — on vous montre le bordel typique, et ce qu’on construit pour y mettre fin.',
               'Pick your world — we show you the typical mess, and what we build to end it.')}
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          {/* Onglets par catégorie */}
          <div className="secx-tabs" role="tablist" aria-label={d('Catégories', 'Categories')}>
            {CATS.map((c, i) => (
              <button
                key={c.nameFr}
                role="tab"
                aria-selected={i === active}
                className={`secx-tab${i === active ? ' on' : ''}`}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                type="button"
              >
                {d(c.nameFr, c.nameEn)}
              </button>
            ))}
          </div>

          {/* Panneau animé */}
          <div className="secx-panel">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="secx-panel-inner">
                  <div className="secx-panel-left">
                    <p className="font-mono secx-idx">
                      {d('Univers', 'World')} · {String(active + 1).padStart(2, '0')}/{String(CATS.length).padStart(2, '0')}
                    </p>
                    <h3 className="font-serif italic secx-name">{d(cur.nameFr, cur.nameEn)}</h3>
                    <div className="secx-subs">
                      {(lang === 'en' ? cur.subEn : cur.subFr).map((s) => (
                        <span key={s} className="font-mono secx-chip">{s}</span>
                      ))}
                    </div>
                    <p className="font-sans secx-pain">{d(cur.painFr, cur.painEn)}</p>
                  </div>
                  <div className="secx-panel-right">
                    <p className="font-mono secx-label">{d('Ce qu’on construit', 'What we build')}</p>
                    <ul className="secx-builds">
                      {(lang === 'en' ? cur.buildsEn : cur.buildsFr).map((b) => (
                        <li key={b} className="font-sans secx-build">
                          <span className="secx-dot" aria-hidden="true" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </FadeUp>
      </div>

      <style jsx>{`
        .secx-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
          margin-bottom: 32px;
        }
        .secx-tab {
          font-family: var(--font-sans);
          font-size: 14.5px;
          font-weight: 500;
          color: var(--text-secondary);
          padding: 10px 18px;
          border-radius: 999px;
          border: 1px solid var(--border);
          background: var(--bg-card);
          cursor: pointer;
          transition: color 0.25s ease, background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .secx-tab:hover { border-color: var(--border-hover); color: var(--text); }
        .secx-tab.on {
          color: #fff;
          background: var(--accent);
          border-color: var(--accent);
          box-shadow: 0 10px 26px -12px var(--accent-glow);
        }

        .secx-panel { max-width: 900px; margin: 0 auto; }
        .secx-panel-inner {
          display: grid;
          grid-template-columns: 1.3fr 0.7fr;
          gap: 40px;
          align-items: start;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 18px;
          padding: 34px 36px;
        }
        .secx-idx { font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: var(--accent); font-weight: 600; }
        .secx-name { font-size: clamp(24px, 3vw, 32px); font-weight: 400; color: var(--text); margin: 8px 0 16px; line-height: 1.15; }
        .secx-subs { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 18px; }
        .secx-chip {
          font-size: 11px; letter-spacing: 0.3px;
          color: var(--text-secondary);
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          border-radius: 6px;
          padding: 5px 10px;
        }
        .secx-pain { font-size: 15px; font-weight: 300; line-height: 1.65; color: var(--text-secondary); max-width: 460px; }
        .secx-label { font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: var(--text-muted); margin-bottom: 14px; }
        .secx-builds { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px; }
        .secx-build { display: flex; gap: 10px; font-size: 14px; font-weight: 300; color: var(--text); line-height: 1.45; align-items: flex-start; }
        .secx-dot { flex: none; width: 6px; height: 6px; border-radius: 50%; background: var(--accent); margin-top: 7px; }

        @media (max-width: 760px) {
          .secx-panel-inner { grid-template-columns: 1fr; gap: 24px; padding: 26px 22px; }
        }
      `}</style>
    </section>
  )
}
