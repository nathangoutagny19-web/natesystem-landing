'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import FadeUp from '@/components/ui/FadeUp'
import { useLang, type Lang } from '@/components/providers/LangProvider'
import { API_URL } from '@/lib/constants'

/* ═══════════════════════════════════════════════════════════════════
   Localized copy — HU primary, FR/EN fallback.
   Every label, helper and option has all three languages.
   ═══════════════════════════════════════════════════════════════════ */

type Trio = { hu: string; en: string; fr: string }

const t = (trio: Trio, lang: Lang): string => trio[lang] ?? trio.hu

/* ——— Page chrome ——— */
const PAGE = {
  label:      { hu: 'DIGITÁLIS ÉRETTSÉGI AUDIT',               en: 'DIGITAL MATURITY AUDIT',               fr: 'AUDIT DE MATURITÉ DIGITALE' },
  title:      { hu: 'Éttermi digitális',                        en: 'Restaurant digital',                    fr: 'Audit digital' },
  titleAccent:{ hu: 'érettségi audit.',                         en: 'maturity audit.',                        fr: 'pour restaurants.' },
  sub:        {
    hu: 'Ez az ingyenes audit felméri éttermének digitális érettségét 6 kategóriában, megbecsüli, mennyit veszít a megfelelő eszközök hiánya miatt, és egy 90 napos prioritási tervet készít. Töltse ki, és Nathan Goutagny személyesen elkészíti az Ön jelentését.',
    en: 'This free audit scores your restaurant\'s digital maturity across 6 categories, estimates what you lose from missing tools, and produces a 90-day prioritized roadmap. Fill it in and Nathan Goutagny personally prepares your report.',
    fr: 'Cet audit gratuit évalue la maturité digitale de votre restaurant sur 6 catégories, estime ce que vous perdez par manque d\'outils, et produit une feuille de route prioritaire à 90 jours. Remplissez-le et Nathan Goutagny prépare personnellement votre rapport.',
  },
  meta: {
    hu: '24 kérdés · 10–15 perc · Ingyenes',
    en: '24 questions · 10–15 minutes · Free',
    fr: '24 questions · 10 à 15 minutes · Gratuit',
  },
  partnerLine: {
    hu: 'Kis Zoltán éttermi tanácsadási partnerségén keresztül kínálva.',
    en: 'Offered through our partnership with restaurant consultant Kis Zoltán.',
    fr: 'Offert via notre partenariat avec le consultant restauration Kis Zoltán.',
  },
  next:       { hu: 'Tovább',                       en: 'Continue',                      fr: 'Continuer' },
  back:       { hu: '← Vissza',                     en: '← Back',                        fr: '← Retour' },
  submit:     { hu: 'Audit elküldése',              en: 'Submit audit',                  fr: 'Envoyer l\'audit' },
  sending:    { hu: 'Küldés…',                      en: 'Sending…',                       fr: 'Envoi…' },
  required:   { hu: 'Kötelező',                     en: 'Required',                       fr: 'Requis' },
  optional:   { hu: 'opcionális',                   en: 'optional',                       fr: 'optionnel' },
  consentLabel: {
    hu: 'Hozzájárulok, hogy a NateSystem kapcsolatba lépjen velem az audit eredményével.',
    en: 'I agree NateSystem may contact me with the results of this audit.',
    fr: 'J\'accepte que NateSystem me contacte avec les résultats de cet audit.',
  },
  contactLabel: {
    hu: 'Kapcsolattartási adatok',
    en: 'Your contact details',
    fr: 'Vos coordonnées',
  },
  restaurant: { hu: 'Étterem neve',     en: 'Restaurant name',     fr: 'Nom du restaurant' },
  firstName:  { hu: 'Keresztnév',       en: 'First name',           fr: 'Prénom' },
  email:      { hu: 'Munkahelyi e-mail',en: 'Work email',            fr: 'Email professionnel' },
  phone:      { hu: 'Telefonszám',      en: 'Phone',                 fr: 'Téléphone' },
  city:       { hu: 'Város',            en: 'City',                  fr: 'Ville' },
  step: {
    hu: (n: number, total: number) => `${n} / ${total} lépés`,
    en: (n: number, total: number) => `Step ${n} of ${total}`,
    fr: (n: number, total: number) => `Étape ${n} sur ${total}`,
  },
  stepDotLabel: {
    hu: 'Kategória',
    en: 'Category',
    fr: 'Catégorie',
  },
  thankYou: {
    hu: 'Köszönjük! Átirányítjuk a következő lépésre…',
    en: 'Thanks! Redirecting you to the next step…',
    fr: 'Merci ! Redirection vers l\'étape suivante…',
  },
}

/* ——— Category names ——— */
const CATEGORIES: Trio[] = [
  { hu: 'A. Webes jelenlét',                  en: 'A. Web presence',                    fr: 'A. Présence web' },
  { hu: 'B. Foglalási folyamat',              en: 'B. Reservation flow',                fr: 'B. Flux de réservation' },
  { hu: 'C. Láthatóság és akvizíció',         en: 'C. Visibility and acquisition',      fr: 'C. Visibilité et acquisition' },
  { hu: 'D. Ügyfélkapcsolat',                  en: 'D. Customer engagement',             fr: 'D. Relation client' },
  { hu: 'E. Belső működés',                   en: 'E. Internal operations',             fr: 'E. Opérations internes' },
  { hu: 'F. Ambíció és büdzsé',               en: 'F. Ambition and budget',             fr: 'F. Ambition et budget' },
]

/* ——— Question model ——— */

type QuestionType = 'single' | 'multi' | 'text' | 'slider' | 'textarea'

interface Question {
  id: string
  category: number // 0..5 → A..F
  type: QuestionType
  label: Trio
  helper?: Trio
  required?: boolean
  options?: Trio[]             // for single / multi
  min?: number; max?: number   // for slider
  maxLength?: number           // for textarea
  showIf?: (answers: Answers) => boolean
}

type Answers = Record<string, string | string[] | number | undefined>

const QUESTIONS: Question[] = [
  /* ═════════════ A — Web presence ═════════════ */
  {
    id: 'A1',
    category: 0,
    type: 'single',
    required: true,
    label: {
      hu: 'Van jelenleg dedikált weboldala az éttermének?',
      en: 'Do you currently have a dedicated website for your restaurant?',
      fr: 'Avez-vous actuellement un site web dédié pour votre restaurant ?',
    },
    options: [
      { hu: 'Igen',              en: 'Yes',              fr: 'Oui' },
      { hu: 'Nem',               en: 'No',               fr: 'Non' },
      { hu: 'Nem vagyok biztos', en: 'I\'m not sure',    fr: 'Je ne suis pas sûr' },
    ],
  },
  {
    id: 'A2',
    category: 0,
    type: 'text',
    label: {
      hu: 'Ha igen, mi a weboldal címe?',
      en: 'If yes, what is the URL?',
      fr: 'Si oui, quelle est l\'URL ?',
    },
    helper: { hu: 'https://…', en: 'https://…', fr: 'https://…' },
    showIf: (a) => a.A1 === 'Yes',
  },
  {
    id: 'A3',
    category: 0,
    type: 'single',
    label: {
      hu: 'Mikor készült a weboldal?',
      en: 'When was it created?',
      fr: 'Quand a-t-il été créé ?',
    },
    options: [
      { hu: 'Kevesebb mint 1 éve', en: 'Less than 1 year', fr: 'Il y a moins d\'1 an' },
      { hu: '1–3 éve',             en: '1–3 years',        fr: 'Entre 1 et 3 ans' },
      { hu: 'Több mint 3 éve',     en: 'More than 3 years',fr: 'Plus de 3 ans' },
      { hu: 'Nem tudom',           en: 'I don\'t know',    fr: 'Je ne sais pas' },
    ],
    showIf: (a) => a.A1 === 'Yes',
  },
  {
    id: 'A4',
    category: 0,
    type: 'single',
    label: {
      hu: 'Ki készítette?',
      en: 'Who built it?',
      fr: 'Qui l\'a construit ?',
    },
    options: [
      { hu: 'Én magam',                                    en: 'Myself',                                   fr: 'Moi-même' },
      { hu: 'Egy ismerős',                                 en: 'Someone I know',                           fr: 'Une connaissance' },
      { hu: 'Profi ügynökség',                             en: 'A professional agency',                    fr: 'Une agence professionnelle' },
      { hu: 'No-code platform (Wix, Squarespace stb.)',    en: 'A no-code platform (Wix, Squarespace…)',   fr: 'Une plateforme no-code (Wix, Squarespace…)' },
    ],
    showIf: (a) => a.A1 === 'Yes',
  },
  {
    id: 'A5',
    category: 0,
    type: 'slider',
    min: 1,
    max: 5,
    label: {
      hu: '1-től 5-ig, mennyire elégedett a jelenlegi weboldallal?',
      en: 'On a scale of 1 to 5, how satisfied are you with your current website?',
      fr: 'Sur une échelle de 1 à 5, à quel point êtes-vous satisfait de votre site actuel ?',
    },
    showIf: (a) => a.A1 === 'Yes',
  },

  /* ═════════════ B — Reservation flow ═════════════ */
  {
    id: 'B1',
    category: 1,
    type: 'multi',
    required: true,
    label: {
      hu: 'Jelenleg hogyan foglalnak Önöknél az ügyfelek? (Több válasz is lehetséges)',
      en: 'How do clients currently book with you? (Multiple allowed)',
      fr: 'Comment vos clients réservent-ils actuellement ? (Plusieurs réponses possibles)',
    },
    options: [
      { hu: 'Telefon',                                                   en: 'Phone',                                                    fr: 'Téléphone' },
      { hu: 'E-mail',                                                    en: 'Email',                                                    fr: 'Email' },
      { hu: 'Űrlap a weboldalon',                                        en: 'Form on website',                                          fr: 'Formulaire sur le site' },
      { hu: 'Harmadik féltől származó platform (Asztalfoglalás, TheFork, OpenTable)', en: 'Third-party platform (Asztalfoglalás, TheFork, OpenTable)', fr: 'Plateforme tierce (Asztalfoglalás, TheFork, OpenTable)' },
      { hu: 'Csak bejövő vendég (walk-in)',                              en: 'Walk-in only',                                             fr: 'Walk-in uniquement' },
    ],
  },
  {
    id: 'B2',
    category: 1,
    type: 'single',
    label: {
      hu: 'Körülbelül mennyi időt tölt a csapata naponta a foglalások kezelésével?',
      en: 'Roughly how much time does your team spend per day handling reservations?',
      fr: 'Combien de temps par jour votre équipe passe-t-elle sur les réservations ?',
    },
    options: [
      { hu: 'Kevesebb mint 15 perc',   en: 'Less than 15 min', fr: 'Moins de 15 min' },
      { hu: '15–30 perc',              en: '15–30 min',         fr: '15 à 30 min' },
      { hu: '30–60 perc',              en: '30–60 min',         fr: '30 à 60 min' },
      { hu: 'Több mint 1 óra',         en: 'More than 1 hour',  fr: 'Plus d\'1 heure' },
    ],
  },
  {
    id: 'B3',
    category: 1,
    type: 'single',
    label: {
      hu: 'Az elmúlt hónapban kellett-e elutasítania vendéget teltház miatt?',
      en: 'Have you turned away clients in the past month because you were fully booked?',
      fr: 'Avez-vous refusé des clients le mois dernier à cause du complet ?',
    },
    options: [
      { hu: 'Igen, gyakran',       en: 'Yes, often',      fr: 'Oui, souvent' },
      { hu: 'Igen, néha',          en: 'Yes, sometimes',  fr: 'Oui, parfois' },
      { hu: 'Ritkán',              en: 'Rarely',          fr: 'Rarement' },
      { hu: 'Soha',                en: 'Never',           fr: 'Jamais' },
      { hu: 'Nem tudom',           en: 'I don\'t know',   fr: 'Je ne sais pas' },
    ],
  },
  {
    id: 'B4',
    category: 1,
    type: 'single',
    label: {
      hu: 'Követi a nem-jelenléteket és a lemondásokat?',
      en: 'Do you track no-shows and cancellations?',
      fr: 'Suivez-vous les no-shows et les annulations ?',
    },
    options: [
      { hu: 'Igen, szisztematikusan',  en: 'Yes, systematically',  fr: 'Oui, systématiquement' },
      { hu: 'Igen, informálisan',       en: 'Yes, informally',       fr: 'Oui, de manière informelle' },
      { hu: 'Nem',                      en: 'No',                    fr: 'Non' },
    ],
  },

  /* ═════════════ C — Visibility & acquisition ═════════════ */
  {
    id: 'C1',
    category: 2,
    type: 'single',
    required: true,
    label: {
      hu: 'A Google Business Profile-ja igényelve van és aktívan kezelt?',
      en: 'Is your Google Business Profile claimed and actively managed?',
      fr: 'Votre fiche Google Business Profile est-elle revendiquée et activement gérée ?',
    },
    options: [
      { hu: 'Igen, havonta frissítve',  en: 'Yes and updated monthly', fr: 'Oui, mise à jour mensuellement' },
      { hu: 'Igen, de ritkán frissítve', en: 'Yes but rarely updated',  fr: 'Oui mais rarement mise à jour' },
      { hu: 'Nem tudom',                 en: 'I don\'t know',            fr: 'Je ne sais pas' },
      { hu: 'Nem',                       en: 'No',                       fr: 'Non' },
    ],
  },
  {
    id: 'C2',
    category: 2,
    type: 'multi',
    label: {
      hu: 'Futtatott fizetett hirdetést az elmúlt 12 hónapban? (Több is lehet)',
      en: 'Have you run paid advertising in the last 12 months? (Multiple allowed)',
      fr: 'Avez-vous fait de la publicité payante dans les 12 derniers mois ? (Plusieurs réponses)',
    },
    options: [
      { hu: 'Google Ads',          en: 'Google Ads',          fr: 'Google Ads' },
      { hu: 'Meta Ads (FB/IG)',    en: 'Meta Ads (FB/IG)',    fr: 'Meta Ads (FB/IG)' },
      { hu: 'Egyéb',               en: 'Other',               fr: 'Autre' },
      { hu: 'Egyik sem',           en: 'None',                fr: 'Aucune' },
    ],
  },
  {
    id: 'C3',
    category: 2,
    type: 'single',
    label: {
      hu: 'Honnan érkezik a legtöbb új vendége?',
      en: 'Where do most of your new customers come from?',
      fr: 'D\'où viennent la plupart de vos nouveaux clients ?',
    },
    options: [
      { hu: 'Szájhagyomány',                           en: 'Word of mouth',                            fr: 'Bouche-à-oreille' },
      { hu: 'Google keresés',                           en: 'Google search',                            fr: 'Recherche Google' },
      { hu: 'Közösségi média',                          en: 'Social media',                             fr: 'Réseaux sociaux' },
      { hu: 'Turisztikai kalauzok (Michelin, TripAdvisor)', en: 'Tourist guides (Michelin, TripAdvisor)', fr: 'Guides touristiques (Michelin, TripAdvisor)' },
      { hu: 'Egyéb',                                    en: 'Other',                                   fr: 'Autre' },
    ],
  },
  {
    id: 'C4',
    category: 2,
    type: 'single',
    label: {
      hu: 'Aktív az étterme Instagramon?',
      en: 'Do you have an active presence on Instagram?',
      fr: 'Avez-vous une présence active sur Instagram ?',
    },
    options: [
      { hu: 'Igen, hetente vagy többször posztolok',   en: 'Yes, posting weekly+',  fr: 'Oui, je poste chaque semaine ou plus' },
      { hu: 'Igen, időnként',                          en: 'Yes occasionally',      fr: 'Oui, occasionnellement' },
      { hu: 'Alig',                                    en: 'Barely',                fr: 'À peine' },
      { hu: 'Nincs fiók',                              en: 'No account',            fr: 'Pas de compte' },
    ],
  },

  /* ═════════════ D — Customer engagement ═════════════ */
  {
    id: 'D1',
    category: 3,
    type: 'single',
    required: true,
    label: {
      hu: 'Gyűjt ügyfélkapcsolati adatokat (e-mail, telefonszám)?',
      en: 'Do you collect customer contact details (email, phone)?',
      fr: 'Collectez-vous les coordonnées clients (email, téléphone) ?',
    },
    options: [
      { hu: 'Igen, szisztematikusan',  en: 'Yes, systematically',   fr: 'Oui, systématiquement' },
      { hu: 'Igen, néha',              en: 'Yes, sometimes',         fr: 'Oui, parfois' },
      { hu: 'Nem',                     en: 'No',                     fr: 'Non' },
    ],
  },
  {
    id: 'D2',
    category: 3,
    type: 'single',
    label: {
      hu: 'Küld hírlevelet vagy promóciókat a vendégeinek?',
      en: 'Do you send newsletters or promotions to your clients?',
      fr: 'Envoyez-vous des newsletters ou promotions à vos clients ?',
    },
    options: [
      { hu: 'Igen, rendszeresen',          en: 'Yes, regularly',           fr: 'Oui, régulièrement' },
      { hu: 'Igen, alkalmanként',           en: 'Yes, occasionally',        fr: 'Oui, à l\'occasion' },
      { hu: 'Nem, de szeretnék',            en: 'No, but I\'d like to',     fr: 'Non, mais j\'aimerais' },
      { hu: 'Nem érdekel',                  en: 'No interest',              fr: 'Pas intéressé' },
    ],
  },
  {
    id: 'D3',
    category: 3,
    type: 'single',
    label: {
      hu: 'Körülbelül hány százalékuk visszatérő vendég?',
      en: 'Roughly what percentage of your clients are recurring?',
      fr: 'Environ quel pourcentage de vos clients sont récurrents ?',
    },
    options: [
      { hu: 'Kevesebb mint 20%', en: 'Less than 20%', fr: 'Moins de 20%' },
      { hu: '20–50%',            en: '20–50%',        fr: '20 à 50%' },
      { hu: '50% vagy több',     en: '50%+',          fr: '50% ou plus' },
      { hu: 'Nem tudom',         en: 'I don\'t know', fr: 'Je ne sais pas' },
    ],
  },
  {
    id: 'D4',
    category: 3,
    type: 'single',
    label: {
      hu: 'Van hűségprogramja?',
      en: 'Do you have any loyalty or rewards program?',
      fr: 'Avez-vous un programme de fidélité ?',
    },
    options: [
      { hu: 'Igen, digitális',   en: 'Yes, digital',     fr: 'Oui, digital' },
      { hu: 'Igen, papíralapú',  en: 'Yes, paper-based', fr: 'Oui, papier' },
      { hu: 'Nincs',             en: 'No',               fr: 'Non' },
    ],
  },

  /* ═════════════ E — Internal operations ═════════════ */
  {
    id: 'E1',
    category: 4,
    type: 'single',
    required: true,
    label: {
      hu: 'Hogyan kezeli a készletet és a beszállítói rendeléseket?',
      en: 'How do you manage inventory and supplier orders?',
      fr: 'Comment gérez-vous les stocks et les commandes fournisseurs ?',
    },
    options: [
      { hu: 'Dedikált szoftverrel',      en: 'Dedicated software',     fr: 'Logiciel dédié' },
      { hu: 'Excel vagy Google Sheets',  en: 'Excel or Google Sheets', fr: 'Excel ou Google Sheets' },
      { hu: 'Papíron',                    en: 'Paper',                 fr: 'Papier' },
      { hu: 'Nincs formális követés',     en: 'No formal tracking',    fr: 'Pas de suivi formel' },
    ],
  },
  {
    id: 'E2',
    category: 4,
    type: 'single',
    label: {
      hu: 'A pénztárgépe (POS) kapcsolódik más eszközökhöz (könyvelés, készlet, foglalások)?',
      en: 'Is your POS connected to other tools (accounting, stock, reservations)?',
      fr: 'Votre caisse (POS) est-elle connectée à d\'autres outils (compta, stock, réservations) ?',
    },
    options: [
      { hu: 'Igen, teljesen integrált',  en: 'Yes, fully integrated',  fr: 'Oui, entièrement intégrée' },
      { hu: 'Részben',                   en: 'Partially',               fr: 'Partiellement' },
      { hu: 'Nem, önálló',               en: 'No, standalone',          fr: 'Non, autonome' },
      { hu: 'Nincs POS-om',              en: 'I don\'t have a POS',      fr: 'Je n\'ai pas de POS' },
    ],
  },
  {
    id: 'E3',
    category: 4,
    type: 'single',
    label: {
      hu: 'Hány órát tölt a csapata hetente kézi adatrögzítéssel (Excel, copy-paste, papírról digitálisra)?',
      en: 'How many hours per week does your team spend on manual data entry (Excel, copy-paste, paper-to-digital)?',
      fr: 'Combien d\'heures/semaine votre équipe passe-t-elle en saisie manuelle (Excel, copier-coller, papier → digital) ?',
    },
    options: [
      { hu: 'Kevesebb mint 2 óra', en: 'Less than 2h',  fr: 'Moins de 2h' },
      { hu: '2–5 óra',             en: '2–5h',          fr: '2 à 5h' },
      { hu: '5–10 óra',            en: '5–10h',         fr: '5 à 10h' },
      { hu: 'Több mint 10 óra',    en: 'More than 10h', fr: 'Plus de 10h' },
    ],
  },

  /* ═════════════ F — Ambition & budget ═════════════ */
  {
    id: 'F1',
    category: 5,
    type: 'textarea',
    maxLength: 500,
    label: {
      hu: 'Mi a legnagyobb frusztrációja abban, ahogy ma az étterme digitálisan működik?',
      en: 'What frustrates you most in how your restaurant runs digitally today?',
      fr: 'Qu\'est-ce qui vous frustre le plus dans la façon dont votre restaurant fonctionne numériquement aujourd\'hui ?',
    },
    helper: {
      hu: 'Szabad szöveg, maximum 500 karakter',
      en: 'Open text, max 500 characters',
      fr: 'Texte libre, 500 caractères max',
    },
  },
  {
    id: 'F2',
    category: 5,
    type: 'single',
    label: {
      hu: 'Mi a legfontosabb fejlesztés Önnek most?',
      en: 'Which improvement matters most to you right now?',
      fr: 'Quelle amélioration compte le plus pour vous en ce moment ?',
    },
    options: [
      { hu: 'Több új vendég',                en: 'More new customers',           fr: 'Plus de nouveaux clients' },
      { hu: 'Több visszatérő vendég',         en: 'More repeat customers',        fr: 'Plus de clients récurrents' },
      { hu: 'Kevesebb adminisztráció',        en: 'Less time on admin tasks',     fr: 'Moins de temps sur l\'admin' },
      { hu: 'Jobb márka- és arculatkép',      en: 'Better brand image',           fr: 'Meilleure image de marque' },
      { hu: 'Jobb csapateszközök',            en: 'Better team tools',            fr: 'De meilleurs outils pour l\'équipe' },
    ],
  },
  {
    id: 'F3',
    category: 5,
    type: 'single',
    label: {
      hu: 'Fontolgatta digitális eszközökbe való beruházást a következő 12 hónapban?',
      en: 'Have you considered investing in digital tools in the next 12 months?',
      fr: 'Envisagez-vous d\'investir dans des outils digitaux dans les 12 prochains mois ?',
    },
    options: [
      { hu: 'Igen, világos terv van',  en: 'Yes, clear plan',    fr: 'Oui, plan clair' },
      { hu: 'Igen, nyitott vagyok rá', en: 'Yes, open to it',    fr: 'Oui, ouvert à l\'idée' },
      { hu: 'Nem',                      en: 'No',                 fr: 'Non' },
      { hu: 'Nem tudom',                en: 'I don\'t know',      fr: 'Je ne sais pas' },
    ],
  },
  {
    id: 'F4',
    category: 5,
    type: 'single',
    label: {
      hu: 'Körülbelül milyen éves keretet szánna digitális eszközökre (HUF)?',
      en: 'Rough annual budget you\'d consider for digital tooling (HUF)?',
      fr: 'Budget annuel approximatif pour les outils digitaux (HUF) ?',
    },
    options: [
      { hu: 'Kevesebb mint 500 000 Ft',  en: 'Less than 500k',   fr: 'Moins de 500k' },
      { hu: '500 000 – 1,5 millió Ft',   en: '500k – 1.5M',       fr: '500k – 1,5M' },
      { hu: '1,5 – 3 millió Ft',         en: '1.5M – 3M',         fr: '1,5M – 3M' },
      { hu: 'Több mint 3 millió Ft',     en: 'More than 3M',      fr: 'Plus de 3M' },
      { hu: 'Még nem tudom',             en: 'Not sure yet',      fr: 'Pas encore sûr' },
    ],
  },
]

/* ═══════════════════════════════════════════════════════════════════
   Component
   ═══════════════════════════════════════════════════════════════════ */

interface ContactInfo {
  restaurant: string
  firstName: string
  email: string
  phone: string
  city: string
  consent: boolean
}

type Step = 'contact' | 0 | 1 | 2 | 3 | 4 | 5 | 'sending'

const CATEGORY_COUNT = CATEGORIES.length // 6

export default function RestaurantAuditPage() {
  const { lang } = useLang()
  const router = useRouter()

  const [step, setStep] = useState<Step>('contact')
  const [contact, setContact] = useState<ContactInfo>({
    restaurant: '', firstName: '', email: '', phone: '', city: '', consent: false,
  })
  const [answers, setAnswers] = useState<Answers>({})
  const [submitting, setSubmitting] = useState(false)

  const contactValid =
    contact.restaurant.trim() &&
    contact.firstName.trim() &&
    contact.email.trim().includes('@') &&
    contact.consent

  const visibleQuestionsForCategory = (cat: number): Question[] =>
    QUESTIONS.filter(q => q.category === cat && (!q.showIf || q.showIf(answers)))

  const categoryRequiredAnswered = (cat: number): boolean =>
    visibleQuestionsForCategory(cat)
      .filter(q => q.required)
      .every(q => {
        const v = answers[q.id]
        if (Array.isArray(v)) return v.length > 0
        return v !== undefined && v !== '' && v !== null
      })

  const setAnswer = (id: string, value: Answers[string]) =>
    setAnswers(prev => ({ ...prev, [id]: value }))

  const toggleMulti = (id: string, value: string) => {
    setAnswers(prev => {
      const current = Array.isArray(prev[id]) ? (prev[id] as string[]) : []
      const next = current.includes(value) ? current.filter(v => v !== value) : [...current, value]
      return { ...prev, [id]: next }
    })
  }

  const goNext = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    if (step === 'contact') setStep(0)
    else if (typeof step === 'number' && step < CATEGORY_COUNT - 1) setStep((step + 1) as Step)
    else void handleSubmit()
  }

  const goBack = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    if (step === 'contact') return
    if (step === 0) setStep('contact')
    else if (typeof step === 'number') setStep((step - 1) as Step)
  }

  const handleSubmit = async () => {
    setSubmitting(true)
    setStep('sending')
    try {
      await fetch(`${API_URL}/api/leads/capture`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          resourceId: 'restaurant-audit',
          prenom: contact.firstName,
          email: contact.email,
          nom: '',
          entreprise: contact.restaurant,
          phone: contact.phone,
          city: contact.city,
          lang,
          audit: answers,
          newsletter: false,
        }),
      })
    } catch { /* swallow — we still redirect so the user doesn't lose progress */ }

    // Store the audit context locally so /book can reference it if needed later.
    try {
      window.localStorage.setItem('ns_restaurant_audit', JSON.stringify({
        contact, answers, lang, submittedAt: new Date().toISOString(),
      }))
    } catch { /* private mode — ignore */ }

    router.push('/book')
  }

  /* Progress bar: contact (1) + 6 categories = 7 steps */
  const TOTAL_STEPS = 1 + CATEGORY_COUNT
  const stepIndex = step === 'contact' ? 0 : step === 'sending' ? TOTAL_STEPS : (step as number) + 1
  const progress = Math.min(100, ((stepIndex + (step === 'sending' ? 0 : 1)) / TOTAL_STEPS) * 100)

  const inputClass =
    'w-full px-4 py-3 rounded-xl text-sm transition focus:outline-none focus:ring-2 focus:ring-[#E63946]/30 focus:border-[#E63946]'

  return (
    <main className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <Nav />

      {/* Progress bar */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: 3, zIndex: 200, background: 'var(--border)' }}>
        <div style={{ height: '100%', width: `${progress}%`, background: 'var(--accent)', transition: 'width 0.5s ease' }} />
      </div>

      <section style={{ padding: '140px 24px 80px' }}>
        <div className="mx-auto" style={{ maxWidth: 720 }}>

          {/* ── Intro (step='contact' only) ── */}
          {step === 'contact' && (
            <FadeUp className="text-center mb-10">
              <span className="section-label">{t(PAGE.label, lang)}</span>
              <h1 className="section-title" style={{ margin: '12px auto 16px' }}>
                {t(PAGE.title, lang)}{' '}
                <span className="accent">{t(PAGE.titleAccent, lang)}</span>
              </h1>
              <p
                className="font-sans"
                style={{
                  fontSize: 15,
                  fontWeight: 300,
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  maxWidth: 560,
                  margin: '0 auto 14px',
                }}
              >
                {t(PAGE.sub, lang)}
              </p>
              <p
                className="font-mono"
                style={{ fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', color: 'var(--text-muted)' }}
              >
                {t(PAGE.meta, lang)}
              </p>
              <p
                className="font-sans italic"
                style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 8, fontWeight: 300 }}
              >
                {t(PAGE.partnerLine, lang)}
              </p>
            </FadeUp>
          )}

          {/* ── Contact step ── */}
          {step === 'contact' && (
            <FadeUp>
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 16, padding: '32px' }}>
                <p
                  className="font-mono mb-6"
                  style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--accent)' }}
                >
                  {t(PAGE.contactLabel, lang)}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <TextField
                    label={t(PAGE.restaurant, lang)}
                    required
                    value={contact.restaurant}
                    onChange={v => setContact({ ...contact, restaurant: v })}
                    inputClass={inputClass}
                  />
                  <TextField
                    label={t(PAGE.firstName, lang)}
                    required
                    value={contact.firstName}
                    onChange={v => setContact({ ...contact, firstName: v })}
                    inputClass={inputClass}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <TextField
                    label={t(PAGE.email, lang)}
                    required
                    type="email"
                    value={contact.email}
                    onChange={v => setContact({ ...contact, email: v })}
                    inputClass={inputClass}
                  />
                  <TextField
                    label={t(PAGE.phone, lang)}
                    value={contact.phone}
                    onChange={v => setContact({ ...contact, phone: v })}
                    inputClass={inputClass}
                  />
                </div>

                <div className="mt-4">
                  <TextField
                    label={t(PAGE.city, lang)}
                    value={contact.city}
                    onChange={v => setContact({ ...contact, city: v })}
                    inputClass={inputClass}
                  />
                </div>

                <label
                  className="flex items-start gap-3 mt-6 cursor-pointer"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  <input
                    type="checkbox"
                    checked={contact.consent}
                    onChange={e => setContact({ ...contact, consent: e.target.checked })}
                    style={{ marginTop: 4, accentColor: 'var(--accent)' }}
                  />
                  <span style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6, fontWeight: 300 }}>
                    {t(PAGE.consentLabel, lang)}
                  </span>
                </label>

                <NavButtons
                  lang={lang}
                  onNext={goNext}
                  canNext={Boolean(contactValid)}
                  showBack={false}
                />
              </div>
            </FadeUp>
          )}

          {/* ── Category steps ── */}
          {typeof step === 'number' && (
            <FadeUp>
              <div className="text-center mb-8">
                <span className="section-label">{t(PAGE.label, lang)}</span>
                <h2
                  className="font-serif italic"
                  style={{
                    fontSize: 'clamp(22px, 2.4vw, 30px)',
                    lineHeight: 1.25,
                    margin: '12px auto 8px',
                    color: 'var(--text)',
                  }}
                >
                  {t(CATEGORIES[step], lang)}
                </h2>
                <p
                  className="font-mono"
                  style={{ fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', color: 'var(--text-muted)' }}
                >
                  {PAGE.step[lang](step + 2, TOTAL_STEPS)}
                </p>
              </div>

              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 16, padding: '32px' }}>
                {visibleQuestionsForCategory(step).map((q, idx) => (
                  <div key={q.id} style={{ marginTop: idx === 0 ? 0 : 28 }}>
                    <QuestionBlock
                      question={q}
                      lang={lang}
                      answer={answers[q.id]}
                      onSingle={v => setAnswer(q.id, v)}
                      onMulti={v => toggleMulti(q.id, v)}
                      onText={v => setAnswer(q.id, v)}
                      onSlider={v => setAnswer(q.id, v)}
                      requiredLabel={t(PAGE.required, lang)}
                      optionalLabel={t(PAGE.optional, lang)}
                      inputClass={inputClass}
                    />
                  </div>
                ))}

                <NavButtons
                  lang={lang}
                  onNext={goNext}
                  onBack={goBack}
                  canNext={categoryRequiredAnswered(step)}
                  showBack
                  isLast={step === CATEGORY_COUNT - 1}
                  submitting={submitting}
                />
              </div>
            </FadeUp>
          )}

          {/* ── Sending state ── */}
          {step === 'sending' && (
            <div style={{ paddingTop: 60 }}>
              <FadeUp className="text-center">
                <h2
                  className="font-serif italic accent"
                  style={{ fontSize: 28, lineHeight: 1.3 }}
                >
                  {t(PAGE.thankYou, lang)}
                </h2>
              </FadeUp>
            </div>
          )}
        </div>
      </section>

      <Footer />

      <style>{`
        .ra-pill {
          padding: 8px 16px; border-radius: 100px;
          font-family: var(--font-sans); font-size: 13px; font-weight: 400;
          color: var(--text-secondary); background: var(--bg-elevated);
          border: 1px solid var(--border); cursor: pointer; transition: all 0.2s;
          text-align: left; line-height: 1.4;
        }
        .ra-pill:hover { border-color: var(--border-hover); color: var(--text); }
        .ra-pill[data-active="true"] {
          background: var(--accent-subtle); border-color: var(--accent);
          color: var(--accent); font-weight: 500;
        }
        .ra-label {
          display: block; font-family: var(--font-sans); font-size: 14px;
          font-weight: 500; color: var(--text); margin-bottom: 8px; line-height: 1.45;
        }
        .ra-helper {
          display: block; font-family: var(--font-sans); font-size: 12px;
          color: var(--text-muted); margin-bottom: 10px; font-weight: 300;
        }
        .ra-slider {
          appearance: none; width: 100%; height: 3px; background: var(--border);
          border-radius: 2px; outline: none; margin-top: 8px;
        }
        .ra-slider::-webkit-slider-thumb {
          appearance: none; width: 22px; height: 22px; border-radius: 50%;
          background: var(--accent); cursor: pointer;
          box-shadow: 0 2px 6px rgba(230,57,70,0.25);
        }
        .ra-slider::-moz-range-thumb {
          width: 22px; height: 22px; border-radius: 50%;
          background: var(--accent); cursor: pointer; border: 0;
          box-shadow: 0 2px 6px rgba(230,57,70,0.25);
        }
      `}</style>
    </main>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   Sub-components
   ═══════════════════════════════════════════════════════════════════ */

function QuestionBlock({
  question, lang, answer,
  onSingle, onMulti, onText, onSlider,
  requiredLabel, optionalLabel, inputClass,
}: {
  question: Question
  lang: Lang
  answer: Answers[string]
  onSingle: (v: string) => void
  onMulti: (v: string) => void
  onText: (v: string) => void
  onSlider: (v: number) => void
  requiredLabel: string
  optionalLabel: string
  inputClass: string
}) {
  const label = t(question.label, lang)
  const helper = question.helper ? t(question.helper, lang) : null

  return (
    <div>
      <span className="ra-label">
        {label}{' '}
        {question.required
          ? <span style={{ color: 'var(--accent)', fontSize: 12, fontWeight: 400 }}>· {requiredLabel}</span>
          : <span style={{ color: 'var(--text-muted)', fontSize: 12, fontWeight: 300 }}>({optionalLabel})</span>}
      </span>
      {helper && <span className="ra-helper">{helper}</span>}

      {question.type === 'single' && question.options && (
        <div className="flex flex-wrap gap-2">
          {question.options.map(opt => {
            const labelEn = opt.en
            return (
              <button
                key={labelEn}
                type="button"
                onClick={() => onSingle(labelEn)}
                className="ra-pill"
                data-active={answer === labelEn ? 'true' : undefined}
              >
                {t(opt, lang)}
              </button>
            )
          })}
        </div>
      )}

      {question.type === 'multi' && question.options && (
        <div className="flex flex-wrap gap-2">
          {question.options.map(opt => {
            const labelEn = opt.en
            const selected = Array.isArray(answer) && answer.includes(labelEn)
            return (
              <button
                key={labelEn}
                type="button"
                onClick={() => onMulti(labelEn)}
                className="ra-pill"
                data-active={selected ? 'true' : undefined}
              >
                {t(opt, lang)}
              </button>
            )
          })}
        </div>
      )}

      {question.type === 'text' && (
        <input
          type="text"
          value={typeof answer === 'string' ? answer : ''}
          onChange={e => onText(e.target.value)}
          placeholder={helper ?? ''}
          className={inputClass}
          style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', color: 'var(--text)' }}
        />
      )}

      {question.type === 'textarea' && (
        <textarea
          value={typeof answer === 'string' ? answer : ''}
          onChange={e => onText(e.target.value.slice(0, question.maxLength ?? 1000))}
          rows={4}
          className={inputClass}
          style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', color: 'var(--text)', resize: 'vertical' }}
        />
      )}

      {question.type === 'slider' && (
        <div>
          <input
            type="range"
            min={question.min ?? 1}
            max={question.max ?? 5}
            value={typeof answer === 'number' ? answer : question.min ?? 1}
            onChange={e => onSlider(Number(e.target.value))}
            className="ra-slider"
          />
          <div
            className="flex justify-between mt-2"
            style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)' }}
          >
            <span>{question.min ?? 1}</span>
            <span style={{ color: 'var(--accent)', fontWeight: 500 }}>
              {typeof answer === 'number' ? answer : (question.min ?? 1)}
            </span>
            <span>{question.max ?? 5}</span>
          </div>
        </div>
      )}
    </div>
  )
}

function TextField({
  label, required, type = 'text', value, onChange, inputClass,
}: {
  label: string
  required?: boolean
  type?: string
  value: string
  onChange: (v: string) => void
  inputClass: string
}) {
  return (
    <div>
      <label className="ra-label">
        {label}{required && <span style={{ color: 'var(--accent)' }}> *</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        className={inputClass}
        style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', color: 'var(--text)' }}
        required={required}
      />
    </div>
  )
}

function NavButtons({
  lang, onNext, onBack, canNext, showBack, isLast, submitting,
}: {
  lang: Lang
  onNext: () => void
  onBack?: () => void
  canNext: boolean
  showBack: boolean
  isLast?: boolean
  submitting?: boolean
}) {
  const nextLabel = isLast
    ? (submitting ? t(PAGE.sending, lang) : t(PAGE.submit, lang))
    : t(PAGE.next, lang)

  return (
    <div className="flex gap-3 mt-8">
      {showBack && onBack && (
        <button
          type="button"
          onClick={onBack}
          style={{
            padding: '14px 24px',
            background: 'transparent',
            border: '1px solid var(--border)',
            borderRadius: 12,
            color: 'var(--text-secondary)',
            fontFamily: 'var(--font-sans)',
            fontSize: 14,
            fontWeight: 400,
            cursor: 'pointer',
          }}
        >
          {t(PAGE.back, lang)}
        </button>
      )}
      <button
        type="button"
        onClick={onNext}
        disabled={!canNext || submitting}
        className="flex-1 flex items-center justify-center gap-2"
        style={{
          padding: '14px 32px',
          background: 'var(--accent)',
          color: '#fff',
          fontFamily: 'var(--font-sans)',
          fontSize: 15,
          fontWeight: 600,
          borderRadius: 12,
          border: 'none',
          cursor: canNext && !submitting ? 'pointer' : 'not-allowed',
          opacity: canNext && !submitting ? 1 : 0.5,
          transition: 'all 0.3s',
          boxShadow: '0 4px 16px rgba(230,57,70,0.25)',
        }}
      >
        {nextLabel}
      </button>
    </div>
  )
}
