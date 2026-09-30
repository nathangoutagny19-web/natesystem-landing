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
  'Des élèves et étudiants mieux suivis',
]
const BASE_HU = [
  'Központosított, tiszta adatok',
  'Havonta visszakapott órák',
  'Egyetlen, közös információ',
  'Az Ön szabályai, nem egy sablonéi',
  'Nyugodtabb csapatok',
  'Jobban követett diákok',
]

const BASE_EN = [
  'Centralised, clear data',
  'Hours given back every month',
  'One piece of information, shared',
  'Your rules, not a template’s',
  'Calmer teams',
  'Students properly followed',
]

type Sector = {
  nameFr: string; nameEn: string; nameHu: string
  painFr: string; painEn: string; painHu: string
  buildsFr: string[]; buildsEn: string[]; buildsHu: string[]
}

/**
 * LES HUIT MÉTIERS D'UNE ÉCOLE, PAS HUIT SECTEURS.
 *
 * Avant le 30 septembre 2026, cette liste tenait huit industries : ingénierie,
 * conseil, hôtellerie, immobilier, écoles, franchises, logistique, marketing.
 * Elle a été retournée avec le reste du site, quand NateSystem s'est resserré
 * sur les écoles privées.
 *
 * Huit entrées, même structure, même composant : ce qui change, c'est qu'un
 * directeur ne voit plus sept industries qui ne sont pas la sienne. C'est ce
 * que le transcript des experts edtech donne comme première cause de rejet,
 * « offers that aren't relevant to my job », et c'est aussi ce que fait le
 * leader du marché, qui adresse huit départements d'école un par un.
 *
 * Quatre côté administration, quatre côté pédagogie : les deux axes de
 * l'offre. Voir natesystem-os/knowledge/voix/socle-ecoles.md.
 */
const SECTORS: Sector[] = [
  {
    nameFr: 'Direction', nameEn: 'Leadership', nameHu: 'Vezetőség',
    painFr: 'Vous demandez un chiffre, il arrive trois jours plus tard et personne n’est sûr qu’il soit juste. Piloter un groupe scolaire sur des tableurs envoyés par mail, c’est décider en retard.',
    painEn: 'You ask for a figure, it arrives three days later and nobody is sure it is right. Running a school group on spreadsheets sent by email means deciding late.', painHu: 'Kér egy számot, három nap múlva érkezik meg, és senki sem biztos benne, hogy helyes. Iskolacsoportot e-mailben küldött táblázatokon vezetni annyi, mint késve dönteni.',
    buildsFr: ['Effectifs, heures et coûts de chaque site sur un écran', 'Les alertes qui comptent, avant que ça devienne un problème', 'Le même chiffre pour la direction et pour les établissements'],
    buildsEn: ['Headcount, hours and costs for every site on one screen', 'The alerts that matter, before they become a problem', 'The same figure for leadership and for the sites'],
    buildsHu: ['Minden telephely létszáma, órái és költségei egy képernyőn', 'A fontos riasztások, mielőtt problémává válnának', 'Ugyanaz a szám a vezetőségnek és az intézményeknek'],
  },
  {
    nameFr: 'Administratif & financier', nameEn: 'Admin & finance', nameHu: 'Gazdasági hivatal',
    painFr: 'Chaque mois, la paie se prépare à la main : on récupère les heures site par site, on corrige, on ressaisit. Quinze maillons entre le badge et le bulletin, et une erreur suffit à tout refaire.',
    painEn: 'Every month payroll is prepared by hand: hours collected site by site, corrected, re-entered. Fifteen links between the badge and the payslip, and one error means starting again.', painHu: 'Minden hónapban kézzel készül a bér: telephelyenként összeszedett órák, javítás, újbóli bevitel. Tizenöt láncszem a beléptetőkártya és a bérlap között, és egyetlen hiba mindent újrakezdet.',
    buildsFr: ['Heures supplémentaires et annualisation calculées sur votre convention', 'Export prêt pour la paie, sans ressaisie', 'Les écarts signalés avant la clôture, pas après'],
    buildsEn: ['Overtime and annualised hours calculated against your own agreement', 'Payroll-ready export, no re-entry', 'Discrepancies flagged before closing, not after'],
    buildsHu: ['Túlóra és éves munkaidő az Ön megállapodása szerint számolva', 'Bérszámfejtésre kész export, újbóli bevitel nélkül', 'Az eltérések a zárás előtt jeleznek, nem utána'],
  },
  {
    nameFr: 'Secrétariat & accueil', nameEn: 'Front office', nameHu: 'Titkárság és porta',
    painFr: 'Le téléphone sonne, une famille demande une attestation, un dossier est incomplet et la pièce manquante est dans un mail de mars. Le temps passé à chercher est du temps volé à l’accueil.',
    painEn: 'The phone rings, a family asks for a certificate, a file is incomplete and the missing document is in an email from March. Time spent searching is time taken from welcoming people.', painHu: 'Cseng a telefon, egy család igazolást kér, egy akta hiányos, a hiányzó irat pedig egy márciusi e-mailben van. A keresésre fordított idő a fogadástól vett idő.',
    buildsFr: ['Un dossier par élève, complet, au même endroit', 'Les relances de pièces manquantes qui partent seules', 'Les documents récurrents préparés, vous validez'],
    buildsEn: ['One record per student, complete, in one place', 'Reminders for missing documents that go out on their own', 'Recurring documents drafted, you just approve'],
    buildsHu: ['Diákonként egy teljes akta, egy helyen', 'A hiányzó iratok emlékeztetői maguktól mennek ki', 'Az ismétlődő dokumentumok elkészülnek, Ön jóváhagyja'],
  },
  {
    nameFr: 'Vie scolaire & internat', nameEn: 'School life & boarding', nameHu: 'Iskolai élet és kollégium',
    painFr: 'Surveillances, internat, restauration, sorties : des plannings qui changent tout le temps, tenus sur papier ou dans un tableur que trois personnes modifient en même temps.',
    painEn: 'Supervision, boarding, catering, trips: rotas that change constantly, kept on paper or in a spreadsheet three people edit at once.', painHu: 'Felügyelet, kollégium, étkeztetés, kirándulások: folyton változó beosztások, papíron vagy olyan táblázatban, amit egyszerre hárman szerkesztenek.',
    buildsFr: ['Un planning par site, visible dès qu’il change', 'Présences et absences constatées le jour même', 'Une alerte quand un créneau se vide, avec le lien pour le reprendre'],
    buildsEn: ['One rota per site, visible the second it changes', 'Attendance and absence recorded the same day', 'An alert when a slot empties, with the link to pick it up'],
    buildsHu: ['Telephelyenként egy beosztás, amint változik, látszik', 'A jelenlét és hiányzás aznap rögzül', 'Riasztás, ha egy műszak kiürül, a felvételi linkkel'],
  },
  {
    nameFr: 'Équipe pédagogique', nameEn: 'Teaching staff', nameHu: 'Tanári kar',
    painFr: 'Vos enseignants tiennent leurs propres tableurs parce que l’outil de l’école ne fait pas ce dont ils ont besoin. Du temps passé sur du suivi administratif, pas sur leur classe.',
    painEn: 'Your teachers keep their own spreadsheets because the school tool does not do what they need. Time spent on admin tracking, not on their class.', painHu: 'A tanárai saját táblázatokat vezetnek, mert az iskolai eszköz nem azt tudja, amire szükségük van. Adminisztrációra megy az idő, nem az osztályra.',
    buildsFr: ['Le suivi dont ils ont vraiment besoin, pas celui d’un éditeur', 'Saisie une fois, visible partout où c’est utile', 'Ce qui est répétitif préparé d’avance, à valider'],
    buildsEn: ['The tracking they actually need, not a vendor’s idea of it', 'Entered once, visible everywhere it matters', 'The repetitive parts drafted ahead, ready to approve'],
    buildsHu: ['Az a követés, amire tényleg szükségük van, nem egy gyártóé', 'Egyszer beírva, mindenhol látszik, ahol számít', 'Az ismétlődő rész előre elkészül, csak jóvá kell hagyni'],
  },
  {
    nameFr: 'Suivi des élèves et étudiants', nameEn: 'Student tracking', nameHu: 'Diákkövetés',
    painFr: 'L’information sur un élève est répartie entre le professeur principal, la vie scolaire et le secrétariat. Quand quelqu’un s’inquiète pour lui, personne n’a la vue complète.',
    painEn: 'What is known about a student is split between the form tutor, school life and the front office. When someone is worried, nobody has the full picture.', painHu: 'Amit egy diákról tudni lehet, megoszlik az osztályfőnök, az iskolai élet és a titkárság között. Ha valaki aggódik, senkinek sincs teljes képe.',
    buildsFr: ['Un parcours par élève, de l’inscription au diplôme', 'Ce que chaque rôle a le droit de voir, et rien de plus', 'Les signaux faibles remontés tôt, pas au conseil de classe'],
    buildsEn: ['One journey per student, from enrolment to leaving', 'What each role is allowed to see, and nothing more', 'Early signals surfaced early, not at the term review'],
    buildsHu: ['Diákonként egy pálya, a beiratkozástól a végzésig', 'Amit az adott szerep láthat, és semmi többet', 'A gyenge jelek korán jelennek meg, nem az osztályozó értekezleten'],
  },
  {
    nameFr: 'Stages & alternance', nameEn: 'Internships & placements', nameHu: 'Gyakorlat és duális képzés',
    painFr: 'Conventions, entreprises partenaires, tuteurs, soutenances : suivis dans un tableur par promotion, refait chaque année, et jamais au même format.',
    painEn: 'Agreements, partner companies, tutors, vivas: tracked in one spreadsheet per cohort, rebuilt every year, never in the same format.', painHu: 'Megállapodások, partnercégek, mentorok, védések: évfolyamonként egy táblázatban követve, évente újraírva, sosem ugyanabban a formában.',
    buildsFr: ['Entreprises, conventions et tuteurs au même endroit', 'Qui n’a pas encore de stage, vu tout de suite', 'Le réseau d’anciens qui reste joignable d’une promotion à l’autre'],
    buildsEn: ['Companies, agreements and tutors in one place', 'Who still has no placement, visible at a glance', 'An alumni network that stays reachable from one cohort to the next'],
    buildsHu: ['Cégek, megállapodások és mentorok egy helyen', 'Ki nincs még helyen, azonnal látszik', 'Egy öregdiák-hálózat, amely évfolyamról évfolyamra elérhető marad'],
  },
  {
    nameFr: 'Informatique', nameEn: 'IT', nameHu: 'Informatika',
    painFr: 'Vous héritez d’outils que vous n’avez pas choisis, avec des données d’élèves dispersées et des comptes que personne ne ferme. Et chaque nouveau projet vous retombe dessus.',
    painEn: 'You inherit tools you did not choose, with student data scattered and accounts nobody closes. And every new project lands on your desk.', painHu: 'Olyan eszközöket örököl, amelyeket nem Ön választott, szétszórt diákadatokkal és fiókokkal, amelyeket senki nem zár le. És minden új projekt Önre hárul.',
    buildsFr: ['Hébergement en Europe, accès cloisonnés par rôle', 'La reprise de vos données existantes, faite par nous', 'Le code et la documentation livrés : vous n’êtes captif de personne'],
    buildsEn: ['EU hosting, access partitioned by role', 'Migration of your existing data, done by us', 'Code and documentation delivered: you are captive to nobody'],
    buildsHu: ['Európai tárhely, szerepkörönként elkülönített hozzáférés', 'A meglévő adatai átvétele, általunk elvégezve', 'A kód és a dokumentáció átadva: senkinek nem kiszolgáltatott'],
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
          <span className="section-label">{d('Qui s’en sert, chez vous', 'Who uses it, at your school', 'Ki használja Önöknél')}</span>
          <h2 className="font-serif italic" style={{ fontSize: 'clamp(26px, 3.6vw, 38px)', fontWeight: 400, color: 'var(--text)', lineHeight: 1.2, margin: '4px 0 16px' }}>
            {d('Le métier change. ', 'The job changes. ', 'A munkakör változik. ')}
            <span className="accent">{d('La méthode, non.', 'The method doesn’t.', 'A módszer nem.')}</span>
          </h2>
          <p className="font-sans" style={{ fontSize: '15px', fontWeight: 300, color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
            {d('Un socle commun à tout l’établissement, puis ce qui change d’un métier à l’autre. Cliquez sur le vôtre.',
               'A shared foundation across the school, then what changes from one role to the next. Click yours.', 'Közös alap az egész intézményben, aztán ami munkakörönként változik. Kattintson a sajátjára.')}
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
                    {pick(lang, { fr: BASE_FR, en: BASE_EN, hu: BASE_HU }).map((b) => (
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
