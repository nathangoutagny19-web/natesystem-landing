'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'
import { makeD, pick } from '@/lib/lang'

// Socle commun, ce que la plateforme apporte quel que soit le métier.
const BASE_FR = [
  'Données centralisées et claires',
  'Des heures rendues chaque mois',
  'Une seule information, partagée',
  'Vos règles, pas celles d’un modèle',
  'Des équipes plus sereines',
  'Des clients mieux servis',
]
const BASE_HU = [
  'Központosított, tiszta adatok',
  'Havonta visszakapott órák',
  'Egyetlen, közös információ',
  'Az Ön szabályai, nem egy sablonéi',
  'Nyugodtabb csapatok',
  'Jobban kiszolgált ügyfelek',
]

const BASE_EN = [
  'Centralised, clear data',
  'Hours given back every month',
  'One piece of information, shared',
  'Your rules, not a template’s',
  'Calmer teams',
  'Clients better served',
]

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
  {
    nameFr: 'Conciergerie privée', nameEn: 'Private concierge', nameHu: 'Magán concierge',
    painFr: 'Les demandes arrivent par WhatsApp, par mail et par téléphone, à toute heure. Le chauffeur, le chef, la table « confirmée » : tout tient dans une tête, jusqu’au jour où un détail passe à la trappe.',
    painEn: 'Requests come in by WhatsApp, email and phone, at all hours. The driver, the chef, the « confirmed » table: it all lives in one head, until the day a detail slips.',
    painHu: 'A kérések WhatsAppon, e-mailben és telefonon érkeznek, bármikor. A sofőr, a séf, a „megerősített” asztal: minden egy fejben van, amíg egy nap el nem csúszik egy részlet.',
    buildsFr: ['Chaque demande suivie, de la réception à la confirmation', 'Les prestataires reconfirmés la veille, sans y penser', 'La fiche de chaque client, partagée par toute l’équipe'],
    buildsEn: ['Every request tracked, from arrival to confirmation', 'Suppliers reconfirmed the day before, without thinking about it', 'Each client’s profile, shared by the whole team'],
    buildsHu: ['Minden kérés követve, a beérkezéstől a megerősítésig', 'A szolgáltatók előző nap újra megerősítve, külön gondolkodás nélkül', 'Minden ügyfél adatlapja, az egész csapat számára elérhető'],
  },
  {
    nameFr: 'Gestion de villas', nameEn: 'Villa management', nameHu: 'Villakezelés',
    painFr: 'Interventions, ménages, états des lieux, cautions, artisans : chaque propriétaire attend un compte rendu clair, et le préparer prend des heures de ressaisie chaque mois.',
    painEn: 'Maintenance, cleaning, check-in reports, deposits, contractors: every owner expects a clear report, and preparing it takes hours of re-entry every month.',
    painHu: 'Javítások, takarítás, állapotfelmérés, kauciók, szakemberek: minden tulajdonos világos beszámolót vár, és ennek elkészítése havonta órákig tartó újragépelés.',
    buildsFr: ['Un portail par propriétaire : calendrier, interventions, photos', 'Le rapport mensuel qui se prépare tout seul', 'Les artisans et leurs passages suivis par villa'],
    buildsEn: ['One portal per owner: calendar, work done, photos', 'The monthly report that builds itself', 'Contractors and their visits tracked per villa'],
    buildsHu: ['Tulajdonosonként egy portál: naptár, elvégzett munkák, fotók', 'A havi jelentés, ami magától elkészül', 'A szakemberek és látogatásaik villánként követve'],
  },
  {
    nameFr: 'Voyage de luxe sur mesure', nameEn: 'Bespoke luxury travel', nameHu: 'Egyedi luxusutazás',
    painFr: 'Chaque proposition se monte à la main, partenaire par partenaire, puis il faut suivre le voyageur jusqu’à son retour. Le temps passé à produire, c’est du temps en moins pour conseiller.',
    painEn: 'Every proposal is built by hand, partner by partner, then the traveller has to be followed until they are home. Time spent producing is time taken from advising.',
    painHu: 'Minden ajánlat kézzel készül, partnerről partnerre, aztán az utazót hazaérkezéséig követni kell. Amit a gyártásra fordítanak, az a tanácsadástól hiányzik.',
    buildsFr: ['Vos itinéraires réutilisables, pour des devis plus rapides', 'Les disponibilités partenaires suivies au même endroit', 'Chaque voyageur suivi jusqu’à son retour'],
    buildsEn: ['Your itineraries made reusable, for faster quotes', 'Partner availability tracked in one place', 'Every traveller followed until they are home'],
    buildsHu: ['Újrafelhasználható útitervek a gyorsabb ajánlatokért', 'A partnerek elérhetősége egy helyen követve', 'Minden utazó követve hazaérkezéséig'],
  },
  {
    nameFr: 'Yachting & transport VIP', nameEn: 'Yachting & VIP transport', nameHu: 'Jacht és VIP szállítás',
    painFr: 'Arrivées de yachts, avitaillement, transferts, chauffeurs : le planning change d’heure en heure, et chaque dépense avancée pour un client doit être refacturée sans rien oublier.',
    painEn: 'Yacht arrivals, provisioning, transfers, drivers: the schedule changes by the hour, and every expense advanced for a client has to be re-billed without missing one.',
    painHu: 'Jachtérkezések, ellátás, transzferek, sofőrök: a beosztás óránként változik, és minden ügyfélnek megelőlegezett költséget hiánytalanul tovább kell számlázni.',
    buildsFr: ['Un planning en direct par bateau et par véhicule', 'Les commandes d’avitaillement suivies jusqu’à la livraison', 'Chaque dépense avancée, rattachée et refacturée'],
    buildsEn: ['A live schedule per yacht and per vehicle', 'Provisioning orders tracked through to delivery', 'Every advanced expense, assigned and re-billed'],
    buildsHu: ['Élő beosztás hajónként és járművenként', 'Az ellátási rendelések követése a kiszállításig', 'Minden megelőlegezett költség hozzárendelve és továbbszámlázva'],
  },
  {
    nameFr: 'Événementiel & mariages', nameEn: 'Events & weddings', nameHu: 'Rendezvények és esküvők',
    painFr: 'Un lieu, dix prestataires, un rétroplanning et un budget à tenir, souvent pour plusieurs événements à la fois en saison. Le moindre changement se propage par message, un par un.',
    painEn: 'One venue, ten suppliers, a countdown plan and a budget to hold, often for several events at once in season. Every change spreads by message, one by one.',
    painHu: 'Egy helyszín, tíz szolgáltató, egy visszaszámláló terv és egy tartandó költségvetés, szezonban gyakran több rendezvényre egyszerre. Minden változás üzenetenként, egyesével terjed.',
    buildsFr: ['Le déroulé de chaque événement, partagé en temps réel', 'Les prestataires confirmés, et les manques visibles', 'Le budget suivi ligne par ligne'],
    buildsEn: ['Each event’s run of show, shared in real time', 'Suppliers confirmed, and gaps visible', 'The budget tracked line by line'],
    buildsHu: ['Minden rendezvény menete valós időben megosztva', 'A megerősített szolgáltatók, és a hiányok láthatóan', 'A költségvetés tételenként követve'],
  },
  {
    nameFr: 'Immobilier de prestige', nameEn: 'Prestige real estate', nameHu: 'Prémium ingatlan',
    painFr: 'Entre les demandes de location, les acheteurs à qualifier et les vendeurs à relancer, les contacts s’empilent dans les boîtes mail. Celui qui n’a pas été rappelé au bon moment est parti ailleurs.',
    painEn: 'Between rental enquiries, buyers to qualify and sellers to follow up, contacts pile up in inboxes. The one not called back at the right time has gone elsewhere.',
    painHu: 'A bérleti érdeklődők, a minősítendő vevők és az utánkövetendő eladók között a kapcsolatok felhalmozódnak a postafiókokban. Akit nem hívtak vissza időben, máshová ment.',
    buildsFr: ['Chaque contact qualifié dès son arrivée', 'Les relances qui partent au bon moment', 'Biens, acheteurs et visites suivis au même endroit'],
    buildsEn: ['Every contact qualified as soon as it comes in', 'Follow-ups that go out at the right time', 'Properties, buyers and viewings tracked in one place'],
    buildsHu: ['Minden kapcsolat minősítve, amint beérkezik', 'Az utánkövetések a megfelelő időben mennek ki', 'Ingatlanok, vevők és megtekintések egy helyen követve'],
  },
  {
    /* Le cas type : L'Hermitage (Saint-Chamond), maison de réception de groupe.
       Douleurs tirées de l'appel avec Florian Méheust, 2 octobre 2026. Le nom
       n'apparaît pas : c'est un prospect, pas un client. */
    nameFr: 'Hôtels indépendants & maisons de réception', nameEn: 'Independent hotels & event venues', nameHu: 'Független szállodák és rendezvényházak',
    painFr: 'Un groupe passe de 40 à 20 la veille, et il faut tout refaire à la main : les repas, le planning des équipes, le ménage, la facture. Le logiciel hôtelier garde les réservations, le reste vit dans des Word et des Excel.',
    painEn: 'A group drops from 40 to 20 the day before, and everything has to be redone by hand: meals, staff rota, housekeeping, invoice. The hotel software keeps the bookings, the rest lives in Word and Excel files.',
    painHu: 'Egy csoport előző nap 40-ről 20 főre csökken, és mindent kézzel kell újracsinálni: étkezések, beosztás, takarítás, számla. A szállodai szoftver tárolja a foglalásokat, a többi Word- és Excel-fájlokban él.',
    buildsFr: ['Un changement d’effectif qui se répercute partout, tout seul', 'Les chambres, les salles et le ménage sur un seul planning', 'Vous gardez la main sur chaque détail : plan de table, chambre calme, exception'],
    buildsEn: ['A change in numbers that ripples everywhere on its own', 'Rooms, function rooms and housekeeping on one planner', 'You stay in control of every detail: table plan, quiet room, exception'],
    buildsHu: ['A létszámváltozás magától mindenhol megjelenik', 'Szobák, termek és takarítás egyetlen tervezőn', 'Minden részlet az Ön kezében marad: ültetési rend, csendes szoba, kivétel'],
  },
  {
    nameFr: 'Écoles privées', nameEn: 'Private schools', nameHu: 'Magániskolák',
    painFr: 'Paie, plannings, dossiers d’élèves, suivi pédagogique : un établissement privé tourne souvent sur une dizaine de tableurs, refaits chaque année.',
    painEn: 'Payroll, rotas, student records, academic tracking: a private school often runs on a dozen spreadsheets, rebuilt every year.',
    painHu: 'Bérszámfejtés, beosztások, diákaktak, tanulmányi követés: egy magániskola gyakran egy tucat, évente újraírt táblázaton működik.',
    buildsFr: ['Heures et paie calculées sur votre convention', 'Un dossier par élève, complet, au même endroit', 'Ce que chaque rôle a le droit de voir, et rien de plus'],
    buildsEn: ['Hours and payroll calculated against your own agreement', 'One record per student, complete, in one place', 'What each role is allowed to see, and nothing more'],
    buildsHu: ['Órák és bér az Ön megállapodása szerint számolva', 'Diákonként egy teljes akta, egy helyen', 'Amit az adott szerep láthat, és semmi többet'],
    servedFr: 'Des élèves et des familles mieux suivis',
    servedEn: 'Students and families better followed',
    servedHu: 'Jobban követett diákok és családok',
  },
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
            {d('Un socle commun à chaque organisation, puis ce qui change d’un métier à l’autre. Cliquez sur le vôtre.',
               'A shared foundation for every business, then what changes from one trade to the next. Click yours.', 'Közös alap minden vállalkozásnak, aztán ami szakmánként változik. Kattintson a sajátjára.')}
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
                    {d('Métier', 'Role', 'Munkakör')} · {String(active + 1).padStart(2, '0')}/{String(SECTORS.length).padStart(2, '0')}
                  </span>
                  <h3 className="font-serif italic sec-panel-title">{d(cur.nameFr, cur.nameEn, cur.nameHu)}</h3>
                  <p className="font-sans sec-panel-pain">{d(cur.painFr, cur.painEn, cur.painHu)}</p>

                  {/* Socle commun, le même pour tous */}
                  <span className="font-mono sec-panel-label">{d('Ce que ça vous apporte, à tous les coups', 'What it brings you, every time', 'Amit mindenképp hoz Önnek')}</span>
                  <div className="sec-base">
                    {[
                      ...pick(lang, { fr: BASE_FR, en: BASE_EN, hu: BASE_HU }).slice(0, -1),
                      pick(lang, {
                        fr: cur.servedFr ?? BASE_FR[BASE_FR.length - 1],
                        en: cur.servedEn ?? BASE_EN[BASE_EN.length - 1],
                        hu: cur.servedHu ?? BASE_HU[BASE_HU.length - 1],
                      }),
                    ].map((b) => (
                      <span key={b} className="sec-base-chip">{b}</span>
                    ))}
                  </div>

                  {/* Personnalisation secteur */}
                  <span className="font-mono sec-panel-label">{d('Et concrètement, pour ce métier', 'And concretely, for this role', 'És konkrétan, ennél a munkakörnél')}</span>
                  <ul className="sec-builds">
                    {pick(lang, { fr: cur.buildsFr, en: cur.buildsEn, hu: cur.buildsHu }).map((b) => (
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
