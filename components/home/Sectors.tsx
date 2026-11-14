'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'
import { makeD, pick } from '@/lib/lang'
import SectorGlyph from '@/components/home/SectorGlyph'
import { SECTOR_LIST, SECTOR_EVENT, type SectorSlug } from '@/lib/sectors'

// Socle commun, ce que la plateforme apporte quel que soit le métier.
export type Sector = {
  slug: SectorSlug
  painFr: string; painEn: string; painHu: string
  buildsFr: string[]; buildsEn: string[]; buildsHu: string[]
  /** Remplace la dernière pastille du socle (« Des clients mieux servis ») quand le métier ne parle pas de clients. */
  servedFr?: string; servedEn?: string; servedHu?: string
}

/**
 * LES MÉTIERS DE LA CIBLE (quatre depuis le 14 novembre 2026, lib/sectors.ts).
 *
 * 30 septembre 2026 : la liste tenait les huit métiers d'une école privée.
 * 8 octobre 2026, sur décision de Nathan : elle passe aux métiers qui
 * répondent réellement à la prospection (conciergeries, villas, voyage de
 * luxe, yachting), les écoles restent en huitième, Chartreux étant toujours
 * la preuve n° 1. La structure du composant ne change pas.
 *
 * Les douleurs viennent de la recherche du 6 octobre
 * (~/Business/Commercial/6:10prospection/douleurs-conciergeries-voyage-luxe-2026-10-06.md)
 * et des sites lus pendant la prospection. Aucun chiffre inventé.
 * La restauration n'apparaît pas : règle permanente, jamais en niche.
 */
export const SECTORS: Sector[] = [
  /* Les quatre secteurs de Nathan (14 novembre 2026), dans son ordre. Les
     noms viennent de lib/sectors.ts. Les textes reprennent ceux déjà publiés :
     hôtels (version d'octobre, avant leur retrait du 8 novembre), conciergerie
     et voyage sur mesure réunis, villas et yachting inchangés. Aucun chiffre. */
  {
    slug: 'hotels',
    painFr: 'Un groupe passe de 40 à 20 la veille, et il faut tout refaire à la main : les repas, le planning des équipes, le ménage, la facture. Le logiciel hôtelier garde les réservations, le reste vit dans des Word et des Excel.',
    painEn: 'A group drops from 40 to 20 the day before, and everything has to be redone by hand: meals, staff rota, housekeeping, invoice. The hotel software keeps the bookings, the rest lives in Word and Excel files.',
    painHu: 'Egy csoport előző nap 40-ről 20 főre csökken, és mindent kézzel kell újracsinálni: étkezések, beosztás, takarítás, számla. A szállodai szoftver tárolja a foglalásokat, a többi Word- és Excel-fájlokban él.',
    buildsFr: ['Un changement d’effectif qui se répercute partout, tout seul', 'Les chambres, les salles et le ménage sur un seul planning', 'Vous gardez la main sur chaque détail : plan de table, chambre calme, exception'],
    buildsEn: ['A change in numbers that ripples everywhere on its own', 'Rooms, function rooms and housekeeping on one planner', 'You stay in control of every detail: table plan, quiet room, exception'],
    buildsHu: ['A létszámváltozás magától mindenhol megjelenik', 'Szobák, termek és takarítás egyetlen tervezőn', 'Minden részlet az Ön kezében marad: ültetési rend, csendes szoba, kivétel'],
  },
  {
    slug: 'conciergerie',
    painFr: 'Tout arrive sur WhatsApp, à toute heure, et tout passe par vous : chaque devis refait à la main, savoir quel partenaire a confirmé, ce que tel client préfère, ce qu’il reste à facturer.',
    painEn: 'Everything comes in on WhatsApp, at all hours, and everything goes through you: every quote rebuilt by hand, which partner confirmed, what this client prefers, what is left to invoice.',
    painHu: 'Minden WhatsAppon érkezik, bármikor, és minden Önön megy keresztül: minden árajánlat kézzel újra, melyik partner igazolt vissza, mit szeret az adott ügyfél, mit kell még számlázni.',
    buildsFr: ['Toutes les demandes au même endroit, attribuées et suivies jusqu’au bout', 'Le devis et l’itinéraire montés depuis votre grille de prix, à vos couleurs', 'Guides, chauffeurs et partenaires : qui a accepté, qui a refusé, qui relancer'],
    buildsEn: ['Every request in one place, assigned and followed through', 'The quote and itinerary built from your price grid, in your colours', 'Guides, drivers and partners: who accepted, who declined, who to chase'],
    buildsHu: ['Minden kérés egy helyen, kiosztva és végigkövetve', 'Az árajánlat és az útiterv az árlistájából, az Ön színeiben', 'Idegenvezetők, sofőrök és partnerek: ki fogadta el, ki utasította el, kit kell megkeresni'],
  },
  {
    slug: 'proprietes',
    painFr: 'Vous pourriez gérer plus de maisons, mais chaque nouveau bien met des semaines à être prêt, les prestataires se coordonnent un par un, et les propriétaires attendent des nouvelles.',
    painEn: 'You could manage more homes, but every new property takes weeks to get ready, suppliers are coordinated one by one, and owners are waiting for news.',
    painHu: 'Több házat is kezelhetne, de minden új ingatlan hetekig tart, mire elkészül, a beszállítókat egyesével kell összehangolni, a tulajdonosok pedig hírekre várnak.',
    buildsFr: ['Les interventions de chaque maison planifiées, suivies et prouvées en photo', 'Le compte rendu du propriétaire préparé depuis le terrain et envoyé à temps', 'Chaque nouveau bien suivi étape par étape jusqu’à sa mise en location'],
    buildsEn: ['Each home’s interventions scheduled, tracked and proven with photos', 'The owner’s report prepared from the field and sent on time', 'Each new property followed step by step until it goes live'],
    buildsHu: ['Minden ház munkái ütemezve, követve és fotóval igazolva', 'A tulajdonosi jelentés a helyszínről összeállítva és időben elküldve', 'Minden új ingatlan lépésről lépésre követve a kiadásig'],
  },
  {
    slug: 'yachting',
    painFr: 'Arrivées, avitaillement, disponibilités : chaque demande de charter repart de zéro, bateau par bateau, et chaque dépense avancée pour un yacht en gestion doit finir sur le relevé de son propriétaire, ligne par ligne.',
    painEn: 'Arrivals, provisioning, availability: every charter request starts from scratch, boat by boat, and every expense advanced for a managed yacht has to end up on its owner’s statement, line by line.',
    painHu: 'Érkezések, ellátmány, elérhetőség: minden bérlési kérés nulláról indul, hajóról hajóra, és minden kezelt jachtért megelőlegezett költségnek tételesen meg kell jelennie a tulajdonos kimutatásán.',
    buildsFr: ['Le devis monté depuis votre flotte et vos tarifs, sans tout ressaisir', 'Chaque dépense rattachée à son yacht et refacturée avec votre commission', 'Le relevé mensuel de chaque propriétaire, prêt à envoyer'],
    buildsEn: ['The quote built from your fleet and your rates, without retyping', 'Every expense tied to its yacht and recharged with your commission', 'Each owner’s monthly statement, ready to send'],
    buildsHu: ['Az árajánlat a flottájából és áraiból, újragépelés nélkül', 'Minden költség a jachtjához kötve, jutalékkal továbbszámlázva', 'Minden tulajdonos havi kimutatása, küldésre készen'],
  },
]

const infoOf = (s: Sector) => SECTOR_LIST.find((x) => x.slug === s.slug)!

export default function Sectors() {
  const { lang } = useLang()
  const d = makeD(lang)
  const [active, setActive] = useState(0)
  /* Téléphone et tablette : accordéon, un métier ouvert à la fois (-1 : aucun). */
  const [open, setOpen] = useState(0)
  const cur = SECTORS[active]
  const nameOf = (s: Sector) => infoOf(s).name[lang]

  /* Ouvre le secteur demandé par le menu ou par une tuile de l'accueil
     (/services#secteur-hotels…), à l'arrivée sur la page comme quand on est
     déjà dessus. */
  useEffect(() => {
    const go = (slug: string | null, scroll: boolean) => {
      const i = SECTORS.findIndex((x) => x.slug === slug)
      if (i < 0) return
      setActive(i)
      setOpen(i)
      if (scroll) {
        window.setTimeout(() => {
          const el = document.getElementById('secteurs')
          if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
        }, 120)
      }
    }
    const fromHash = () => {
      const m = window.location.hash.match(/^#secteur-([a-z]+)$/)
      go(m ? m[1] : null, true)
    }
    const onEvent = (e: Event) => go((e as CustomEvent<string>).detail, true)
    fromHash()
    window.addEventListener('hashchange', fromHash)
    window.addEventListener(SECTOR_EVENT, onEvent)
    return () => {
      window.removeEventListener('hashchange', fromHash)
      window.removeEventListener(SECTOR_EVENT, onEvent)
    }
  }, [])

  return (
    <section id="secteurs" style={{ padding: '40px 24px 24px' }}>
      <div className="mx-auto" style={{ maxWidth: '1100px' }}>
        <FadeUp className="text-center mb-16">
          <span className="section-label">{d('Pour qui on construit', 'Who we build for', 'Kiknek építünk')}</span>
          <h2 className="font-serif italic" style={{ fontSize: 'clamp(26px, 3.6vw, 38px)', fontWeight: 400, color: 'var(--text)', lineHeight: 1.2, margin: '4px 0 16px' }}>
            {d('Le métier change. ', 'The job changes. ', 'A munkakör változik. ')}
            <span className="accent">{d('La méthode, non.', 'The method doesn’t.', 'A módszer nem.')}</span>
          </h2>
          <p className="font-sans" style={{ fontSize: '15px', fontWeight: 300, color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
            {d('Ce qui change d’un métier à l’autre. Cliquez sur le vôtre.',
               'What changes from one trade to the next. Click yours.', 'Ami szakmánként változik. Kattintson a sajátjára.')}
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="sec-x">
            {/* Liste des secteurs, cliquable */}
            <div className="sec-list" role="tablist" aria-label={d('Métiers', 'Roles', 'Munkakörök')}>
              {SECTORS.map((s, i) => {
                const on = i === active
                return (
                  <button
                    key={s.slug}
                    role="tab"
                    aria-selected={on}
                    className={`sec-row${on ? ' sec-row-on' : ''}`}
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                  >
                    <span className="font-mono sec-row-idx">{String(i + 1).padStart(2, '0')}</span>
                    <span className="font-sans sec-row-name">{nameOf(s)}</span>
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
                  <SectorGlyph index={infoOf(cur).glyph} />
                  <h3 className="font-serif italic sec-panel-title">{nameOf(cur)}</h3>
                  <p className="font-sans sec-panel-pain">{d(cur.painFr, cur.painEn, cur.painHu)}</p>

                  {/* Personnalisation secteur */}
                  <span className="font-sans sec-panel-label">{d('Concrètement', 'In practice', 'A gyakorlatban')}</span>
                  <ul className="sec-builds">
                    {pick(lang, { fr: cur.buildsFr, en: cur.buildsEn, hu: cur.buildsHu }).map((b) => (
                      <li key={b} className="sec-build font-sans">
                        {b}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Téléphone et tablette (8 novembre 2026) : un accordéon à la place
              de la bande d'onglets qui défilait de côté et n'en montrait qu'un.
              Les métiers sont visibles d'un coup d'œil, un seul s'ouvre. */}
          <div className="sec-acc">
            {SECTORS.map((s, i) => {
              const isOpen = i === open
              return (
                <div key={s.slug} className={`sec-acc-item${isOpen ? ' sec-acc-open' : ''}`}>
                  <button
                    className="sec-acc-head"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    <span className="font-mono sec-acc-idx">{String(i + 1).padStart(2, '0')}</span>
                    <span className="font-sans sec-acc-name">{nameOf(s)}</span>
                    <span className="sec-acc-plus" aria-hidden="true" />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div className="sec-acc-body">
                          <SectorGlyph index={infoOf(s).glyph} />
                          <p className="font-sans sec-panel-pain">{d(s.painFr, s.painEn, s.painHu)}</p>
                          <span className="font-sans sec-panel-label">{d('Concrètement', 'In practice', 'A gyakorlatban')}</span>
                          <ul className="sec-builds">
                            {pick(lang, { fr: s.buildsFr, en: s.buildsEn, hu: s.buildsHu }).map((b) => (
                              <li key={b} className="sec-build font-sans">{b}</li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
