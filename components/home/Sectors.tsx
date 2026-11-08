'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'
import { makeD, pick } from '@/lib/lang'

// Socle commun, ce que la plateforme apporte quel que soit le métier.
type Sector = {
  nameFr: string; nameEn: string; nameHu: string
  painFr: string; painEn: string; painHu: string
  buildsFr: string[]; buildsEn: string[]; buildsHu: string[]
  /** Remplace la dernière pastille du socle (« Des clients mieux servis ») quand le métier ne parle pas de clients. */
  servedFr?: string; servedEn?: string; servedHu?: string
}

/**
 * HUIT MÉTIERS DU LUXE ET DE L'HOSPITALITÉ.
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
const SECTORS: Sector[] = [
  /* Six secteurs du 8 novembre 2026, réécrits par la session prospection sur
     les données du CRM (6:10prospection/04-prompts-et-contexte/
     website-secteurs-2026-11-08.md) : douleurs tirées des appels et de la
     pain map, sans nom ni chiffre. Hôtels, écoles et immobilier (vente)
     retirés ; le transport VIP rejoint le voyage sur mesure. */
  {
    nameFr: 'Yachting : charter, gestion et agents', nameEn: 'Yachting: charter, management and agents', nameHu: 'Jachtozás: bérlés, kezelés és ügynökök',
    painFr: 'Arrivées, avitaillement, disponibilités : chaque demande de charter repart de zéro, bateau par bateau, et chaque dépense avancée pour un yacht en gestion doit finir sur le relevé de son propriétaire, ligne par ligne.',
    painEn: 'Arrivals, provisioning, availability: every charter request starts from scratch, boat by boat, and every expense advanced for a managed yacht has to end up on its owner’s statement, line by line.',
    painHu: 'Érkezések, ellátmány, elérhetőség: minden bérlési kérés nulláról indul, hajóról hajóra, és minden kezelt jachtért megelőlegezett költségnek tételesen meg kell jelennie a tulajdonos kimutatásán.',
    buildsFr: ['Le devis monté depuis votre flotte et vos tarifs, sans tout ressaisir', 'Chaque dépense rattachée à son yacht et refacturée avec votre commission', 'Le relevé mensuel de chaque propriétaire, prêt à envoyer'],
    buildsEn: ['The quote built from your fleet and your rates, without retyping', 'Every expense tied to its yacht and recharged with your commission', 'Each owner’s monthly statement, ready to send'],
    buildsHu: ['Az árajánlat a flottájából és áraiból, újragépelés nélkül', 'Minden költség a jachtjához kötve, jutalékkal továbbszámlázva', 'Minden tulajdonos havi kimutatása, küldésre készen'],
  },
  {
    nameFr: 'Villas, chalets et gestion de propriétés', nameEn: 'Villas, chalets and property management', nameHu: 'Villák, faházak és ingatlankezelés',
    painFr: 'Vous pourriez gérer plus de maisons, mais chaque nouveau bien met des semaines à être prêt, les prestataires se coordonnent un par un, et les propriétaires attendent des nouvelles.',
    painEn: 'You could manage more homes, but every new property takes weeks to get ready, suppliers are coordinated one by one, and owners are waiting for news.',
    painHu: 'Több házat is kezelhetne, de minden új ingatlan hetekig tart, mire elkészül, a beszállítókat egyesével kell összehangolni, a tulajdonosok pedig hírekre várnak.',
    buildsFr: ['Les interventions de chaque maison planifiées, suivies et prouvées en photo', 'Le compte rendu du propriétaire préparé depuis le terrain et envoyé à temps', 'Chaque nouveau bien suivi étape par étape jusqu’à sa mise en location'],
    buildsEn: ['Each home’s interventions scheduled, tracked and proven with photos', 'The owner’s report prepared from the field and sent on time', 'Each new property followed step by step until it goes live'],
    buildsHu: ['Minden ház munkái ütemezve, követve és fotóval igazolva', 'A tulajdonosi jelentés a helyszínről összeállítva és időben elküldve', 'Minden új ingatlan lépésről lépésre követve a kiadásig'],
  },
  {
    nameFr: 'Conciergerie privée', nameEn: 'Private concierge', nameHu: 'Magán concierge',
    painFr: 'Tout arrive sur WhatsApp, à toute heure, et tout passe par vous : savoir quel prestataire a accepté, ce que tel client préfère, ce qu’il reste à facturer.',
    painEn: 'Everything comes in on WhatsApp, at all hours, and everything goes through you: which supplier accepted, what this client prefers, what is left to invoice.',
    painHu: 'Minden WhatsAppon érkezik, bármikor, és minden Önön megy keresztül: melyik beszállító fogadta el, mit szeret az adott ügyfél, mit kell még számlázni.',
    buildsFr: ['Toutes les demandes au même endroit, attribuées et suivies jusqu’au bout', 'La fiche de chaque client, qui se souvient de ses préférences', 'Chaque extra retrouvé sur la facture'],
    buildsEn: ['Every request in one place, assigned and followed through', 'Each client’s profile, remembering their preferences', 'Every extra back on the invoice'],
    buildsHu: ['Minden kérés egy helyen, kiosztva és végigkövetve', 'Minden ügyfél adatlapja, amely emlékszik a preferenciáira', 'Minden extra a számlán'],
  },
  {
    nameFr: 'Voyage sur mesure, DMC et transport VIP', nameEn: 'Bespoke travel, DMC and VIP transport', nameHu: 'Egyedi utazás, DMC és VIP szállítás',
    painFr: 'Chaque devis est refait à la main alors que vos tarifs ne changent pas, et sur le terrain il faut savoir qui a accepté le transfert, qui a confirmé l’hôtel et qui reste à relancer.',
    painEn: 'Every quote is rebuilt by hand even though your rates don’t change, and on the ground you need to know who accepted the transfer, who confirmed the hotel and who still needs chasing.',
    painHu: 'Minden árajánlatot kézzel készítenek újra, pedig az árak nem változnak, a helyszínen pedig tudni kell, ki vállalta a transzfert, ki igazolta vissza a szállodát, és kit kell még megkeresni.',
    buildsFr: ['Le devis et l’itinéraire montés depuis votre grille de prix, à vos couleurs', 'Guides, chauffeurs et partenaires : qui a accepté, qui a refusé, qui relancer', 'Vos prestataires voient leur mission, jamais le numéro de vos clients'],
    buildsEn: ['The quote and itinerary built from your price grid, in your colours', 'Guides, drivers and partners: who accepted, who declined, who to chase', 'Your suppliers see their mission, never your clients’ numbers'],
    buildsHu: ['Az árajánlat és az útiterv az árlistájából, az Ön színeiben', 'Idegenvezetők, sofőrök és partnerek: ki fogadta el, ki utasította el, kit kell megkeresni', 'A beszállítók a feladatukat látják, soha nem az ügyfelei számát'],
  },
  {
    nameFr: 'Sécurité privée haut de gamme', nameEn: 'High-end private security', nameHu: 'Prémium magánbiztonság',
    painFr: 'Des audits sur site, des rapports recopiés à la main, des agents à affecter, et des clients qui veulent savoir sans attendre où en est leur dispositif.',
    painEn: 'On-site audits, reports copied out by hand, agents to assign, and clients who want to know right away where their protection plan stands.',
    painHu: 'Helyszíni auditok, kézzel átmásolt jelentések, beosztandó ügynökök, és ügyfelek, akik azonnal tudni akarják, hol tart a védelmük.',
    buildsFr: ['Le diagnostic sur tablette, et le rapport qui se rédige à partir du terrain', 'Les missions, les agents et les comptes rendus au même endroit', 'Un espace client : son plan d’action, ses équipements, ses échéances'],
    buildsEn: ['The assessment on a tablet, and the report written from the field', 'Missions, agents and reports in one place', 'A client space: their action plan, their equipment, their deadlines'],
    buildsHu: ['A felmérés tableten, a jelentés a helyszínről készül', 'Megbízások, ügynökök és jelentések egy helyen', 'Ügyfélfelület: akcióterv, eszközök, határidők'],
  },
  {
    nameFr: 'Événementiel et mariages haut de gamme', nameEn: 'High-end events and weddings', nameHu: 'Prémium rendezvények és esküvők',
    painFr: 'Un lieu, dix prestataires, un rétroplanning et un budget à tenir, souvent pour plusieurs événements à la fois en saison. Le moindre changement se propage par message, un par un.',
    painEn: 'One venue, ten suppliers, a countdown plan and a budget to hold, often for several events at once in season. Every change spreads by message, one by one.',
    painHu: 'Egy helyszín, tíz szolgáltató, egy visszaszámláló terv és egy tartandó költségvetés, szezonban gyakran több rendezvényre egyszerre. Minden változás üzenetenként, egyesével terjed.',
    buildsFr: ['Le déroulé de chaque événement, partagé en temps réel', 'Les prestataires confirmés, et les manques visibles', 'Le budget suivi ligne par ligne'],
    buildsEn: ['Each event’s run of show, shared in real time', 'Suppliers confirmed, and gaps visible', 'The budget tracked line by line'],
    buildsHu: ['Minden rendezvény menete valós időben megosztva', 'A megerősített szolgáltatók, és a hiányok láthatóan', 'A költségvetés tételenként követve'],
  },
]

/* UN ÉCRAN PAR MÉTIER (8 novembre 2026, Nathan : la section paraissait vide).
   Captures du kit de démo neutre (~/Projects/Prototypes/demo-kit, prospect
   « demo-villas », entièrement fictif : aucun nom, lieu ou prix réel), sans
   la barre latérale ni le bandeau du bas. Même ordre que SECTORS.
   ⚠︎ Sécurité et événementiel n'ont pas encore d'écran neutre à eux : ils
   montrent l'écran « Aujourd'hui » et l'écran des prestataires du même kit.
   Les démos sécurité (Lutèce) et mariage (Lili Events) portent les vraies
   informations de prospects : jamais sur le site. */
const SHOTS: { src: string; alt: Record<'fr' | 'en' | 'hu', string> }[] = [
  { src: '/realisations/secteurs/yachting.jpg', alt: { fr: 'Écran Yachts : embarquements, avitaillement et marge', en: 'Yachts screen: boardings, provisioning and margin', hu: 'Jachtok képernyő: beszállások, ellátás és árrés' } },
  { src: '/realisations/secteurs/villas.jpg', alt: { fr: 'Écran Séjours : séjours, paiements et propriétaires', en: 'Stays screen: stays, payments and owners', hu: 'Tartózkodások képernyő: tartózkodások, fizetések és tulajdonosok' } },
  { src: '/realisations/secteurs/conciergerie.jpg', alt: { fr: 'Écran Demandes : chaque demande attribuée et suivie', en: 'Requests screen: every request assigned and followed', hu: 'Kérések képernyő: minden kérés kiosztva és követve' } },
  { src: '/realisations/secteurs/voyage.jpg', alt: { fr: 'Écran Partenaires : qui a accepté, qui relancer', en: 'Partners screen: who accepted, who to chase', hu: 'Partnerek képernyő: ki fogadta el, kit kell emlékeztetni' } },
  { src: '/realisations/secteurs/securite.jpg', alt: { fr: 'Écran Aujourd’hui : ce qui demande votre attention', en: 'Today screen: what needs your attention', hu: 'Mai nap képernyő: ami a figyelmét igényli' } },
  { src: '/realisations/secteurs/evenementiel.jpg', alt: { fr: 'Écran Prestataires : factures et budget suivis', en: 'Suppliers screen: invoices and budget tracked', hu: 'Beszállítók képernyő: számlák és költségvetés követve' } },
]

export default function Sectors() {
  const { lang } = useLang()
  const d = makeD(lang)
  const [active, setActive] = useState(0)
  const cur = SECTORS[active]

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
                    key={s.nameFr}
                    role="tab"
                    aria-selected={on}
                    className={`sec-row${on ? ' sec-row-on' : ''}`}
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                  >
                    <span className="font-mono sec-row-idx">{String(i + 1).padStart(2, '0')}</span>
                    <span className="font-sans sec-row-name">{d(s.nameFr, s.nameEn, s.nameHu)}</span>
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
                  <h3 className="font-serif italic sec-panel-title">{d(cur.nameFr, cur.nameEn, cur.nameHu)}</h3>
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
        </FadeUp>

        {/* L'écran du métier actif. Les six images sont empilées et chargées
            d'avance : le survol d'un métier ne fait pas clignoter l'écran. */}
        <FadeUp delay={0.15}>
          <div className="sec-shot" aria-live="polite">
            <div className="sec-shot-bar" aria-hidden="true"><i /><i /><i /></div>
            <div className="sec-shot-stack">
              {SHOTS.map((sh, i) => (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  key={sh.src}
                  src={sh.src}
                  alt={i === active ? sh.alt[lang] : ''}
                  aria-hidden={i === active ? undefined : true}
                  width={1600}
                  height={759}
                  className={i === active ? 'sec-shot-on' : undefined}
                />
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
