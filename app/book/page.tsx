'use client'

import { useState } from 'react'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { API_URL } from '@/lib/constants'
import { useLang, type Lang } from '@/components/providers/LangProvider'
import { whatsappLink } from '@/lib/whatsapp'

/* ——— Localized copy — labels, options, UI strings ——— */

type BookCopy = {
  // Step 1 — info form
  step1Label: string
  step1Title: string
  step1TitleAccent: string
  step1Sub: string
  fieldFirstName: string
  fieldFirstNamePh: string
  fieldLastName: string
  fieldLastNamePh: string
  fieldEmail: string
  fieldEmailPh: string
  fieldCompany: string
  fieldCompanyPh: string
  fieldWebsite: string
  fieldWebsitePh: string
  fieldRole: string
  fieldSector: string
  fieldSelect: string
  fieldTeamSize: string
  fieldChallenge: string
  fieldBudget: string
  fieldDetails: string
  fieldDetailsPh: string
  step1Cta: string
  step1Reassurance: string

  // Audit steps
  auditStepLabel: string
  audit1Title: string
  audit1TitleAccent: string
  audit1Sub: string
  audit1QTools: string
  audit1QSaas: string
  audit1QConnected: string

  audit2Title: string
  audit2TitleAccent: string
  audit2Sub: string
  audit2QTasks: string
  audit2QHours: string
  audit2QWho: string

  audit3Title: string
  audit3TitleAccent: string
  audit3Sub: string
  audit3QProcess: string
  audit3QData: string
  audit3QAbsence: string

  audit4Title: string
  audit4TitleAccent: string
  audit4Sub: string
  audit4QResults: string
  audit4QUrgency: string
  audit4QTried: string

  back: string
  next: string
  sending: string
  seeSlots: string

  // Calendar
  calDone: string
  calTitle: string
  calTitleAccent: string
  calThanks: (firstName: string) => string
  calOpenWhatsApp: string

  // Options
  roles: string[]
  sectors: string[]
  teamSizes: string[]
  challenges: string[]
  budgets: string[]
  toolsList: string[]
  saasCounts: string[]
  toolsConnected: string[]
  repetitiveTasks: string[]
  hoursWasted: string[]
  whoDoesIt: string[]
  processDocs: string[]
  dataLocations: string[]
  absenceImpact: string[]
  desiredResults: string[]
  urgency: string[]
  triedBefore: string[]
}

const COPY: Record<Lang, BookCopy> = {
  fr: {
    step1Label: 'ÉTAPE 1/3 · INFORMATIONS',
    step1Title: 'Réservez votre',
    step1TitleAccent: 'session stratégique.',
    step1Sub: '30 minutes pour analyser vos opérations, identifier les opportunités d\'automatisation, et définir un plan d\'action concret.',
    fieldFirstName: 'Prénom',
    fieldFirstNamePh: 'Votre prénom',
    fieldLastName: 'Nom',
    fieldLastNamePh: 'Votre nom',
    fieldEmail: 'Email professionnel',
    fieldEmailPh: 'prenom@entreprise.com',
    fieldCompany: 'Entreprise',
    fieldCompanyPh: 'Nom de l\'entreprise',
    fieldWebsite: 'Site web',
    fieldWebsitePh: 'https://...',
    fieldRole: 'Votre rôle',
    fieldSector: 'Secteur',
    fieldSelect: 'Sélectionnez',
    fieldTeamSize: 'Taille de l\'équipe',
    fieldChallenge: 'Défi principal',
    fieldBudget: 'Budget annuel envisagé',
    fieldDetails: 'Précisions (optionnel)',
    fieldDetailsPh: 'Décrivez brièvement votre situation...',
    step1Cta: 'Continuer → Audit express',
    step1Reassurance: 'Gratuit · Sans engagement · Vos données restent confidentielles',
    auditStepLabel: 'ÉTAPE 2/3 · AUDIT EXPRESS',
    audit1Title: 'Vos outils',
    audit1TitleAccent: 'actuels.',
    audit1Sub: 'Pour comprendre votre écosystème technique et identifier les quick wins.',
    audit1QTools: 'Quels outils utilisez-vous au quotidien ?',
    audit1QSaas: 'Combien d\'abonnements SaaS payez-vous ?',
    audit1QConnected: 'Vos outils communiquent-ils entre eux ?',
    audit2Title: 'Vos tâches',
    audit2TitleAccent: 'répétitives.',
    audit2Sub: 'Pour identifier ce qui peut être automatisé immédiatement.',
    audit2QTasks: 'Quelles tâches prennent le plus de temps chaque semaine ?',
    audit2QHours: 'Combien d\'heures/semaine votre équipe passe sur ces tâches ?',
    audit2QWho: 'Qui les fait principalement ?',
    audit3Title: 'Vos process',
    audit3TitleAccent: '& données.',
    audit3Sub: 'Pour évaluer la maturité de votre infrastructure actuelle.',
    audit3QProcess: 'Vos process internes sont-ils documentés ?',
    audit3QData: 'Où vivent vos données critiques ?',
    audit3QAbsence: 'Que se passe-t-il quand un collaborateur clé est absent ?',
    audit4Title: 'Vos objectifs',
    audit4TitleAccent: '& urgence.',
    audit4Sub: 'Pour prioriser les recommandations de votre session stratégique.',
    audit4QResults: 'Quel résultat vous ferait dire "ça valait le coup" dans 90 jours ?',
    audit4QUrgency: 'Quel est votre niveau d\'urgence ?',
    audit4QTried: 'Avez-vous déjà essayé de résoudre ce problème ?',
    back: '← Retour',
    next: 'Continuer →',
    sending: 'Envoi...',
    seeSlots: 'Voir les créneaux disponibles →',
    calDone: 'AUDIT COMPLÉTÉ',
    calTitle: 'Direction',
    calTitleAccent: 'WhatsApp.',
    calThanks: (n) => `Merci ${n} ! Vos réponses sont enregistrées. On vous redirige vers WhatsApp avec un message déjà prêt — il ne reste qu'à l'envoyer.`,
    calOpenWhatsApp: 'Ouvrir WhatsApp',
    roles: ['Dirigeant / CEO', 'Directeur Marketing', 'Directeur Commercial', 'Directeur Ops / COO', 'DRH / RH', 'DSI / CTO', 'Consultant', 'Autre'],
    sectors: ['Restauration / Hôtellerie', 'Conseil / Services', 'BTP / Immobilier', 'Commerce / Retail', 'Industrie', 'Éducation', 'Santé', 'Tech / SaaS', 'Autre'],
    teamSizes: ['1-5 personnes', '6-20 personnes', '21-50 personnes', '51-100 personnes', '100+ personnes'],
    challenges: [
      'Trop d\'outils qui ne communiquent pas', 'Tâches répétitives qui prennent trop de temps',
      'Données éparpillées et non exploitées', 'Process non documentés',
      'Difficulté à scaler sans recruter', 'Autre',
    ],
    budgets: ['< 5 000€/an', '5 000€ – 10 000€/an', '10 000€ – 25 000€/an', '25 000€ – 50 000€/an', '50 000€+/an'],
    toolsList: [
      'Google Workspace', 'Microsoft 365', 'Slack', 'Notion', 'HubSpot', 'Salesforce',
      'Airtable', 'Excel / Sheets', 'Monday', 'Trello', 'Asana', 'Pipedrive',
      'Odoo', 'Sage / Cegid', 'LinkedIn', 'Instagram / Meta', 'WhatsApp Business',
      'AWS', 'Google Cloud', 'Azure', 'OVH', 'Outils internes / sur-mesure', 'Autre',
    ],
    saasCounts: ['1-3', '4-7', '8-12', '13+', 'Aucune idée'],
    toolsConnected: [
      'Oui, via intégrations ou Zapier/Make', 'Partiellement (copier-coller fréquent)',
      'Non, tout est en silo', 'Je ne sais pas',
    ],
    repetitiveTasks: [
      'Saisie / transfert de données', 'Plannings / scheduling', 'Reporting / tableaux de bord',
      'Relances clients / prospects', 'Facturation / devis', 'Onboarding collaborateurs / clients',
      'Communication interne', 'Gestion de stock / commandes', 'Autre',
    ],
    hoursWasted: ['Moins de 5h/sem', '5-10h/sem', '10-20h/sem', '20-40h/sem', '40h+/sem'],
    whoDoesIt: [
      'Le dirigeant', 'Un manager', 'Plusieurs personnes', 'Tout le monde un peu', 'Un assistant / office manager',
    ],
    processDocs: [
      'Oui, entièrement', 'Partiellement', 'Non — tout est dans la tête des gens', 'On a essayé mais c\'est pas à jour',
    ],
    dataLocations: [
      'CRM', 'Fichiers Excel / Sheets', 'Emails', 'Dans la tête des gens',
      'ERP / logiciel métier', 'Papier', 'Base de données', 'Autre',
    ],
    absenceImpact: [
      'Rien ne bouge — on attend', 'On se débrouille mais c\'est le chaos',
      'Un collègue prend le relais facilement', 'On a des process de backup documentés',
    ],
    desiredResults: [
      'Gagner 10h+/semaine', 'Réduire les erreurs opérationnelles',
      'Ne plus dépendre d\'une personne clé', 'Avoir un tableau de bord en temps réel',
      'Automatiser la prospection / relances', 'Réduire les coûts SaaS', 'Scaler sans recruter',
    ],
    urgency: [
      'Critique — on perd de l\'argent chaque semaine', 'Important — dans les 3 prochains mois',
      'Nice to have — quand on aura le temps', 'Je veux juste explorer',
    ],
    triedBefore: [
      'Non, jamais', 'Oui, avec un freelance / consultant',
      'Oui, avec un outil (Zapier, Make...)', 'Oui, en interne mais ça n\'a pas marché',
    ],
  },
  en: {
    step1Label: 'STEP 1/3 · INFORMATION',
    step1Title: 'Book your',
    step1TitleAccent: 'strategy session.',
    step1Sub: '30 minutes to analyze your operations, identify automation opportunities, and define a concrete action plan.',
    fieldFirstName: 'First name',
    fieldFirstNamePh: 'Your first name',
    fieldLastName: 'Last name',
    fieldLastNamePh: 'Your last name',
    fieldEmail: 'Work email',
    fieldEmailPh: 'firstname@company.com',
    fieldCompany: 'Company',
    fieldCompanyPh: 'Company name',
    fieldWebsite: 'Website',
    fieldWebsitePh: 'https://...',
    fieldRole: 'Your role',
    fieldSector: 'Industry',
    fieldSelect: 'Select',
    fieldTeamSize: 'Team size',
    fieldChallenge: 'Main challenge',
    fieldBudget: 'Expected annual budget',
    fieldDetails: 'More info (optional)',
    fieldDetailsPh: 'Briefly describe your situation...',
    step1Cta: 'Continue → Express audit',
    step1Reassurance: 'Free · No commitment · Your data stays confidential',
    auditStepLabel: 'STEP 2/3 · EXPRESS AUDIT',
    audit1Title: 'Your current',
    audit1TitleAccent: 'tools.',
    audit1Sub: 'To understand your technical ecosystem and identify quick wins.',
    audit1QTools: 'Which tools do you use daily?',
    audit1QSaas: 'How many SaaS subscriptions do you pay for?',
    audit1QConnected: 'Do your tools talk to each other?',
    audit2Title: 'Your repetitive',
    audit2TitleAccent: 'tasks.',
    audit2Sub: 'To identify what can be automated immediately.',
    audit2QTasks: 'Which tasks take the most time each week?',
    audit2QHours: 'How many hours/week does your team spend on them?',
    audit2QWho: 'Who mostly does them?',
    audit3Title: 'Your processes',
    audit3TitleAccent: '& data.',
    audit3Sub: 'To assess the maturity of your current infrastructure.',
    audit3QProcess: 'Are your internal processes documented?',
    audit3QData: 'Where does your critical data live?',
    audit3QAbsence: 'What happens when a key employee is absent?',
    audit4Title: 'Your goals',
    audit4TitleAccent: '& urgency.',
    audit4Sub: 'To prioritize the recommendations for your strategy session.',
    audit4QResults: 'What result, in 90 days, would make you say "it was worth it"?',
    audit4QUrgency: 'What is your urgency level?',
    audit4QTried: 'Have you already tried to solve this problem?',
    back: '← Back',
    next: 'Continue →',
    sending: 'Sending...',
    seeSlots: 'See available slots →',
    calDone: 'AUDIT COMPLETED',
    calTitle: 'Heading to',
    calTitleAccent: 'WhatsApp.',
    calThanks: (n) => `Thanks ${n}! Your answers are saved. We're sending you to WhatsApp with a message ready to go — all you have to do is press send.`,
    calOpenWhatsApp: 'Open WhatsApp',
    roles: ['CEO / Founder', 'Marketing Director', 'Sales Director', 'Ops Director / COO', 'HR Director', 'CTO / CIO', 'Consultant', 'Other'],
    sectors: ['Restaurant / Hospitality', 'Consulting / Services', 'Construction / Real Estate', 'Retail / Commerce', 'Industry', 'Education', 'Healthcare', 'Tech / SaaS', 'Other'],
    teamSizes: ['1-5 people', '6-20 people', '21-50 people', '51-100 people', '100+ people'],
    challenges: [
      'Too many tools that don\'t communicate', 'Repetitive tasks taking too much time',
      'Scattered, unused data', 'Undocumented processes',
      'Can\'t scale without hiring', 'Other',
    ],
    budgets: ['< €5,000/year', '€5,000 – €10,000/year', '€10,000 – €25,000/year', '€25,000 – €50,000/year', '€50,000+/year'],
    toolsList: [
      'Google Workspace', 'Microsoft 365', 'Slack', 'Notion', 'HubSpot', 'Salesforce',
      'Airtable', 'Excel / Sheets', 'Monday', 'Trello', 'Asana', 'Pipedrive',
      'Odoo', 'Sage / Cegid', 'LinkedIn', 'Instagram / Meta', 'WhatsApp Business',
      'AWS', 'Google Cloud', 'Azure', 'OVH', 'Custom / internal tools', 'Other',
    ],
    saasCounts: ['1-3', '4-7', '8-12', '13+', 'No idea'],
    toolsConnected: [
      'Yes, via integrations or Zapier/Make', 'Partially (frequent copy-paste)',
      'No, everything is siloed', 'I don\'t know',
    ],
    repetitiveTasks: [
      'Data entry / transfer', 'Scheduling', 'Reporting / dashboards',
      'Client / prospect follow-ups', 'Invoicing / quoting', 'Client / employee onboarding',
      'Internal communication', 'Stock / order management', 'Other',
    ],
    hoursWasted: ['Less than 5h/week', '5-10h/week', '10-20h/week', '20-40h/week', '40h+/week'],
    whoDoesIt: [
      'The CEO', 'A manager', 'Several people', 'A bit of everyone', 'An assistant / office manager',
    ],
    processDocs: [
      'Yes, fully', 'Partially', 'No — it\'s all in people\'s heads', 'We tried but it\'s outdated',
    ],
    dataLocations: [
      'CRM', 'Excel / Sheets files', 'Emails', 'In people\'s heads',
      'ERP / business software', 'Paper', 'Database', 'Other',
    ],
    absenceImpact: [
      'Nothing moves — we wait', 'We manage but it\'s chaos',
      'A colleague takes over easily', 'We have documented backup processes',
    ],
    desiredResults: [
      'Save 10h+/week', 'Reduce operational errors',
      'Stop depending on one key person', 'Have a real-time dashboard',
      'Automate prospecting / follow-ups', 'Cut SaaS costs', 'Scale without hiring',
    ],
    urgency: [
      'Critical — we lose money every week', 'Important — within the next 3 months',
      'Nice to have — when we have time', 'Just exploring',
    ],
    triedBefore: [
      'No, never', 'Yes, with a freelancer / consultant',
      'Yes, with a tool (Zapier, Make...)', 'Yes, internally but it didn\'t work',
    ],
  },
  hu: {
    step1Label: '1/3. LÉPÉS · INFORMÁCIÓK',
    step1Title: 'Foglalja le',
    step1TitleAccent: 'stratégiai hívását.',
    step1Sub: '30 perc, hogy elemezzük a működését, azonosítsuk az automatizálási lehetőségeket, és konkrét cselekvési tervet határozzunk meg.',
    fieldFirstName: 'Keresztnév',
    fieldFirstNamePh: 'Az Ön keresztneve',
    fieldLastName: 'Vezetéknév',
    fieldLastNamePh: 'Az Ön vezetékneve',
    fieldEmail: 'Munkahelyi e-mail',
    fieldEmailPh: 'vezeteknev@ceg.hu',
    fieldCompany: 'Cég',
    fieldCompanyPh: 'Cég neve',
    fieldWebsite: 'Weboldal',
    fieldWebsitePh: 'https://...',
    fieldRole: 'Az Ön szerepköre',
    fieldSector: 'Iparág',
    fieldSelect: 'Válasszon',
    fieldTeamSize: 'Csapat mérete',
    fieldChallenge: 'Fő kihívás',
    fieldBudget: 'Tervezett éves büdzsé',
    fieldDetails: 'További információ (opcionális)',
    fieldDetailsPh: 'Röviden írja le helyzetét...',
    step1Cta: 'Tovább → Gyors audit',
    step1Reassurance: 'Ingyenes · Elkötelezettség nélkül · Adatai bizalmasak maradnak',
    auditStepLabel: '2/3. LÉPÉS · GYORS AUDIT',
    audit1Title: 'Jelenlegi',
    audit1TitleAccent: 'eszközei.',
    audit1Sub: 'Hogy megértsük a technikai ökoszisztémáját és azonosítsuk a gyors nyereségeket.',
    audit1QTools: 'Milyen eszközöket használ napi szinten?',
    audit1QSaas: 'Hány SaaS-előfizetést fizet?',
    audit1QConnected: 'Beszélnek-e az eszközei egymással?',
    audit2Title: 'Ismétlődő',
    audit2TitleAccent: 'feladatai.',
    audit2Sub: 'Hogy azonosítsuk, mi automatizálható azonnal.',
    audit2QTasks: 'Mely feladatok viszik el a legtöbb időt hetente?',
    audit2QHours: 'Hány óra/hét telik el ezzel a csapatánál?',
    audit2QWho: 'Főleg ki csinálja?',
    audit3Title: 'Folyamatai',
    audit3TitleAccent: '& adatai.',
    audit3Sub: 'Hogy felmérjük a jelenlegi infrastruktúrája érettségét.',
    audit3QProcess: 'Dokumentáltak-e a belső folyamatai?',
    audit3QData: 'Hol élnek a kritikus adatai?',
    audit3QAbsence: 'Mi történik, ha egy kulcsfontosságú munkatárs távol van?',
    audit4Title: 'Céljai',
    audit4TitleAccent: '& sürgősség.',
    audit4Sub: 'Hogy rangsoroljuk a stratégiai hívás ajánlásait.',
    audit4QResults: 'Milyen eredmény mondatná Önnel 90 nap múlva, hogy "megérte"?',
    audit4QUrgency: 'Mennyire sürgős?',
    audit4QTried: 'Próbálta már megoldani ezt a problémát?',
    back: '← Vissza',
    next: 'Tovább →',
    sending: 'Küldés...',
    seeSlots: 'Elérhető időpontok megtekintése →',
    calDone: 'AUDIT KÉSZ',
    calTitle: 'Indulás a',
    calTitleAccent: 'WhatsAppba.',
    calThanks: (n) => `Köszönjük, ${n}! A válaszai elmentve. Átirányítjuk a WhatsAppba egy előre megírt üzenettel — csak el kell küldenie.`,
    calOpenWhatsApp: 'WhatsApp megnyitása',
    roles: ['Vezérigazgató / Alapító', 'Marketingigazgató', 'Értékesítési igazgató', 'Műveleti igazgató / COO', 'HR-igazgató', 'CTO / CIO', 'Tanácsadó', 'Egyéb'],
    sectors: ['Vendéglátás / Szállodaipar', 'Tanácsadás / Szolgáltatások', 'Építőipar / Ingatlan', 'Kereskedelem', 'Ipar', 'Oktatás', 'Egészségügy', 'Tech / SaaS', 'Egyéb'],
    teamSizes: ['1–5 fő', '6–20 fő', '21–50 fő', '51–100 fő', '100+ fő'],
    challenges: [
      'Túl sok eszköz, amely nem beszél egymással', 'Ismétlődő feladatok, amelyek túl sok időt vesznek el',
      'Szétszórt, kihasználatlan adatok', 'Nem dokumentált folyamatok',
      'Nem tudunk skálázni új emberek nélkül', 'Egyéb',
    ],
    budgets: ['< 5 000 €/év', '5 000 € – 10 000 €/év', '10 000 € – 25 000 €/év', '25 000 € – 50 000 €/év', '50 000 €+/év'],
    toolsList: [
      'Google Workspace', 'Microsoft 365', 'Slack', 'Notion', 'HubSpot', 'Salesforce',
      'Airtable', 'Excel / Sheets', 'Monday', 'Trello', 'Asana', 'Pipedrive',
      'Odoo', 'Sage / Cegid', 'LinkedIn', 'Instagram / Meta', 'WhatsApp Business',
      'AWS', 'Google Cloud', 'Azure', 'OVH', 'Egyedi / belső eszközök', 'Egyéb',
    ],
    saasCounts: ['1–3', '4–7', '8–12', '13+', 'Fogalmam sincs'],
    toolsConnected: [
      'Igen, integrációkon vagy Zapier/Make-en keresztül', 'Részben (gyakori másolás-beillesztés)',
      'Nem, minden külön silóban van', 'Nem tudom',
    ],
    repetitiveTasks: [
      'Adatrögzítés / áthelyezés', 'Ütemezés', 'Riportálás / irányítópultok',
      'Ügyfél- / érdeklődő-utánkövetés', 'Számlázás / árajánlatok', 'Munkatársak / ügyfelek beillesztése',
      'Belső kommunikáció', 'Készlet- / rendeléskezelés', 'Egyéb',
    ],
    hoursWasted: ['Kevesebb mint 5 óra/hét', '5–10 óra/hét', '10–20 óra/hét', '20–40 óra/hét', '40 óra+/hét'],
    whoDoesIt: [
      'A vezető', 'Egy menedzser', 'Több ember', 'Mindenki egy kicsit', 'Asszisztens / irodavezető',
    ],
    processDocs: [
      'Igen, teljesen', 'Részben', 'Nem — mindenki fejében van', 'Próbáltuk, de elavult',
    ],
    dataLocations: [
      'CRM', 'Excel / Sheets fájlok', 'E-mailek', 'Emberek fejében',
      'ERP / szakmai szoftver', 'Papíron', 'Adatbázis', 'Egyéb',
    ],
    absenceImpact: [
      'Semmi sem mozdul — várunk', 'Boldogulunk, de káosz van',
      'Egy kolléga könnyen átveszi', 'Dokumentált tartalékfolyamataink vannak',
    ],
    desiredResults: [
      'Heti 10+ óra megtakarítás', 'Működési hibák csökkentése',
      'Ne függjek egy kulcsemberen', 'Valós idejű irányítópult',
      'Értékesítési utánkövetés automatizálása', 'SaaS-költségek csökkentése', 'Skálázás új emberek nélkül',
    ],
    urgency: [
      'Kritikus — minden héten pénzt veszítünk', 'Fontos — a következő 3 hónapban',
      'Jó lenne — ha lesz időnk', 'Csak tájékozódom',
    ],
    triedBefore: [
      'Nem, soha', 'Igen, szabadúszóval / tanácsadóval',
      'Igen, eszközzel (Zapier, Make...)', 'Igen, házon belül, de nem működött',
    ],
  },
}

/* ——— Types ——— */

interface FormData {
  prenom: string; nom: string; email: string; entreprise: string; site: string
  role: string; secteur: string; taille: string; challenge: string; budget: string; details: string
}

interface AuditData {
  tools: string[]; saasCount: string; toolsConnected: string
  tasks: string[]; hoursWasted: string; whoDoesIt: string
  processDocs: string; dataLocations: string[]; absenceImpact: string
  desiredResults: string[]; urgency: string; triedBefore: string
}

type Step = 'form' | 'audit-1' | 'audit-2' | 'audit-3' | 'audit-4' | 'calendar'

/* ——— Component ——— */

export default function BookPage() {
  const { lang } = useLang()
  const c = COPY[lang]

  const [form, setForm] = useState<FormData>({
    prenom: '', nom: '', email: '', entreprise: '', site: '',
    role: '', secteur: '', taille: '', challenge: '', budget: '', details: '',
  })
  const [audit, setAudit] = useState<AuditData>({
    tools: [], saasCount: '', toolsConnected: '',
    tasks: [], hoursWasted: '', whoDoesIt: '',
    processDocs: '', dataLocations: [], absenceImpact: '',
    desiredResults: [], urgency: '', triedBefore: '',
  })
  const [step, setStep] = useState<Step>('form')
  const [submitting, setSubmitting] = useState(false)

  const canSubmitForm = form.prenom.trim() && form.email.trim() && form.entreprise.trim() && form.role && form.secteur && form.taille
  const canSubmitAudit1 = audit.tools.length > 0 && !!audit.saasCount && !!audit.toolsConnected
  const canSubmitAudit2 = audit.tasks.length > 0 && !!audit.hoursWasted && !!audit.whoDoesIt
  const canSubmitAudit3 = !!audit.processDocs && audit.dataLocations.length > 0 && !!audit.absenceImpact
  const canSubmitAudit4 = audit.desiredResults.length > 0 && !!audit.urgency && !!audit.triedBefore

  const updateField = (field: keyof FormData, value: string) => setForm(prev => ({ ...prev, [field]: value }))

  const toggleMulti = (field: 'tools' | 'tasks' | 'dataLocations' | 'desiredResults', value: string) => {
    setAudit(prev => {
      const arr = prev[field] as string[]
      return { ...prev, [field]: arr.includes(value) ? arr.filter(v => v !== value) : [...arr, value] }
    })
  }
  const setAuditField = (field: keyof AuditData, value: string) => setAudit(prev => ({ ...prev, [field]: value }))

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setStep('audit-1')
  }

  /**
   * Form completion now hands off to WhatsApp instead of Cal.com.
   * The full backend POST is preserved — even if the visitor never
   * sends the WhatsApp message, the lead is stored. WhatsApp is the
   * "warm conversion" surface, the backend POST is the safety net.
   */
  const goToCalendar = async () => {
    setSubmitting(true)
    try {
      await fetch(`${API_URL}/api/leads/capture`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prenom: form.prenom, email: form.email, role: form.role,
          secteur: form.secteur, resourceId: 'strategy-call', newsletter: false,
          nom: form.nom, entreprise: form.entreprise, site: form.site,
          taille: form.taille, challenge: form.challenge, budget: form.budget,
          details: form.details, audit, lang,
        }),
      })
    } catch { /* continue silently — WhatsApp is the user-facing handoff */ }

    // Show the post-form thank-you state, then redirect into WhatsApp
    // with the visitor's first name injected into the message.
    setStep('calendar')
    setSubmitting(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })

    if (typeof window !== 'undefined') {
      const url = whatsappLink(lang, { firstName: form.prenom })
      // Small delay so the user sees the success state for a beat,
      // then we move them to WhatsApp. Most browsers allow this since
      // it's still part of the same user-initiated click chain.
      window.setTimeout(() => {
        window.location.href = url
      }, 600)
    }
  }

  const inputClass = 'w-full px-4 py-3 rounded-xl text-sm transition focus:outline-none focus:ring-2 focus:ring-[#E63946]/30 focus:border-[#E63946]'

  const stepIndex = ['form', 'audit-1', 'audit-2', 'audit-3', 'audit-4', 'calendar'].indexOf(step)
  const progress = ((stepIndex + 1) / 6) * 100

  return (
    <main className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <Nav />

      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: 3, zIndex: 200, background: 'var(--border)' }}>
        <div style={{ height: '100%', width: `${progress}%`, background: 'var(--accent)', transition: 'width 0.5s ease' }} />
      </div>

      <section style={{ padding: '140px 24px 80px' }}>
        <div className="mx-auto" style={{ maxWidth: 640 }}>

          {step === 'form' && (
            <>
              <div className="text-center mb-10">
                <span className="section-label">{c.step1Label}</span>
                <h1 className="section-title" style={{ margin: '12px auto 16px' }}>
                  {c.step1Title}{' '}<span className="accent">{c.step1TitleAccent}</span>
                </h1>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 480, margin: '0 auto' }}>
                  {c.step1Sub}
                </p>
              </div>

              <form onSubmit={handleFormSubmit} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 16, padding: '32px' }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label={c.fieldFirstName} required><input type="text" value={form.prenom} onChange={e => updateField('prenom', e.target.value)} placeholder={c.fieldFirstNamePh} className={inputClass} style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', color: 'var(--text)' }} required /></Field>
                  <Field label={c.fieldLastName}><input type="text" value={form.nom} onChange={e => updateField('nom', e.target.value)} placeholder={c.fieldLastNamePh} className={inputClass} style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', color: 'var(--text)' }} /></Field>
                </div>
                <Field label={c.fieldEmail} required className="mt-4"><input type="email" value={form.email} onChange={e => updateField('email', e.target.value)} placeholder={c.fieldEmailPh} className={inputClass} style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', color: 'var(--text)' }} required /></Field>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <Field label={c.fieldCompany} required><input type="text" value={form.entreprise} onChange={e => updateField('entreprise', e.target.value)} placeholder={c.fieldCompanyPh} className={inputClass} style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', color: 'var(--text)' }} required /></Field>
                  <Field label={c.fieldWebsite}><input type="text" value={form.site} onChange={e => updateField('site', e.target.value)} placeholder={c.fieldWebsitePh} className={inputClass} style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', color: 'var(--text)' }} /></Field>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <Field label={c.fieldRole} required>
                    <select value={form.role} onChange={e => updateField('role', e.target.value)} className={inputClass} style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', color: form.role ? 'var(--text)' : 'var(--text-muted)' }} required>
                      <option value="" disabled>{c.fieldSelect}</option>
                      {c.roles.map(r => <option key={r} value={r}>{r}</option>)}
                    </select>
                  </Field>
                  <Field label={c.fieldSector} required>
                    <select value={form.secteur} onChange={e => updateField('secteur', e.target.value)} className={inputClass} style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', color: form.secteur ? 'var(--text)' : 'var(--text-muted)' }} required>
                      <option value="" disabled>{c.fieldSelect}</option>
                      {c.sectors.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </Field>
                </div>
                <PillField label={c.fieldTeamSize} required options={c.teamSizes} value={form.taille} onChange={v => updateField('taille', v)} />
                <PillField label={c.fieldChallenge} options={c.challenges} value={form.challenge} onChange={v => updateField('challenge', v)} />
                <PillField label={c.fieldBudget} required options={c.budgets} value={form.budget} onChange={v => updateField('budget', v)} />
                <Field label={c.fieldDetails} className="mt-4">
                  <textarea value={form.details} onChange={e => updateField('details', e.target.value)} placeholder={c.fieldDetailsPh} rows={3} className={inputClass} style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', color: 'var(--text)', resize: 'vertical' }} />
                </Field>
                <SubmitButton disabled={!canSubmitForm} label={c.step1Cta} />
                <p className="text-center mt-3" style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--text-muted)', fontWeight: 300 }}>
                  {c.step1Reassurance}
                </p>
              </form>
            </>
          )}

          {step === 'audit-1' && (
            <AuditStep
              stepLabel={c.auditStepLabel}
              title={c.audit1Title}
              titleAccent={c.audit1TitleAccent}
              subtitle={c.audit1Sub}
              backLabel={c.back}
              nextLabel={c.next}
              onNext={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setStep('audit-2') }}
              canNext={canSubmitAudit1}
              onBack={() => setStep('form')}
            >
              <MultiPillField label={c.audit1QTools} required options={c.toolsList} selected={audit.tools} onToggle={v => toggleMulti('tools', v)} />
              <PillField label={c.audit1QSaas} required options={c.saasCounts} value={audit.saasCount} onChange={v => setAuditField('saasCount', v)} />
              <PillField label={c.audit1QConnected} required options={c.toolsConnected} value={audit.toolsConnected} onChange={v => setAuditField('toolsConnected', v)} />
            </AuditStep>
          )}

          {step === 'audit-2' && (
            <AuditStep
              stepLabel={c.auditStepLabel}
              title={c.audit2Title}
              titleAccent={c.audit2TitleAccent}
              subtitle={c.audit2Sub}
              backLabel={c.back}
              nextLabel={c.next}
              onNext={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setStep('audit-3') }}
              canNext={canSubmitAudit2}
              onBack={() => setStep('audit-1')}
            >
              <MultiPillField label={c.audit2QTasks} required options={c.repetitiveTasks} selected={audit.tasks} onToggle={v => toggleMulti('tasks', v)} />
              <PillField label={c.audit2QHours} required options={c.hoursWasted} value={audit.hoursWasted} onChange={v => setAuditField('hoursWasted', v)} />
              <PillField label={c.audit2QWho} required options={c.whoDoesIt} value={audit.whoDoesIt} onChange={v => setAuditField('whoDoesIt', v)} />
            </AuditStep>
          )}

          {step === 'audit-3' && (
            <AuditStep
              stepLabel={c.auditStepLabel}
              title={c.audit3Title}
              titleAccent={c.audit3TitleAccent}
              subtitle={c.audit3Sub}
              backLabel={c.back}
              nextLabel={c.next}
              onNext={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setStep('audit-4') }}
              canNext={canSubmitAudit3}
              onBack={() => setStep('audit-2')}
            >
              <PillField label={c.audit3QProcess} required options={c.processDocs} value={audit.processDocs} onChange={v => setAuditField('processDocs', v)} />
              <MultiPillField label={c.audit3QData} required options={c.dataLocations} selected={audit.dataLocations} onToggle={v => toggleMulti('dataLocations', v)} />
              <PillField label={c.audit3QAbsence} required options={c.absenceImpact} value={audit.absenceImpact} onChange={v => setAuditField('absenceImpact', v)} />
            </AuditStep>
          )}

          {step === 'audit-4' && (
            <AuditStep
              stepLabel={c.auditStepLabel}
              title={c.audit4Title}
              titleAccent={c.audit4TitleAccent}
              subtitle={c.audit4Sub}
              backLabel={c.back}
              onNext={goToCalendar}
              canNext={canSubmitAudit4}
              onBack={() => setStep('audit-3')}
              nextLabel={submitting ? c.sending : c.seeSlots}
              disabled={submitting}
            >
              <MultiPillField label={c.audit4QResults} required options={c.desiredResults} selected={audit.desiredResults} onToggle={v => toggleMulti('desiredResults', v)} />
              <PillField label={c.audit4QUrgency} required options={c.urgency} value={audit.urgency} onChange={v => setAuditField('urgency', v)} />
              <PillField label={c.audit4QTried} required options={c.triedBefore} value={audit.triedBefore} onChange={v => setAuditField('triedBefore', v)} />
            </AuditStep>
          )}

          {step === 'calendar' && (
            <div className="text-center" style={{ padding: '40px 0' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '6px 16px', borderRadius: 100, marginBottom: 24,
                background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)',
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round"><polyline points="20 6 9 17 4 12" /></svg>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#22c55e', letterSpacing: 1 }}>{c.calDone}</span>
              </div>
              <h2 className="section-title" style={{ margin: '0 auto 16px', fontSize: 'clamp(24px, 4vw, 36px)' }}>
                {c.calTitle}{' '}<span className="accent">{c.calTitleAccent}</span>
              </h2>
              <p
                className="font-sans"
                style={{ fontSize: 15, color: 'var(--text-secondary)', fontWeight: 300, lineHeight: 1.7, maxWidth: 480, margin: '0 auto 32px' }}
              >
                {c.calThanks(form.prenom)}
              </p>

              {/* Manual fallback in case the auto-redirect was blocked */}
              <a
                href={whatsappLink(lang, { firstName: form.prenom })}
                className="btn-primary inline-flex"
                style={{ fontSize: 14 }}
              >
                <span className="btn-primary-dot" />
                {c.calOpenWhatsApp}
              </a>
            </div>
          )}
        </div>
      </section>

      <Footer />

      <style>{`
        .book-label { display: block; font-family: var(--font-sans); font-size: 13px; font-weight: 500; color: var(--text-secondary); margin-bottom: 6px; }
        .book-pill {
          padding: 6px 14px; border-radius: 100px; font-family: var(--font-sans); font-size: 12px; font-weight: 400;
          color: var(--text-secondary); background: var(--bg-elevated); border: 1px solid var(--border); cursor: pointer; transition: all 0.2s;
        }
        .book-pill:hover { border-color: var(--border-hover); color: var(--text); }
        .book-pill[data-active="true"] { background: var(--accent-subtle); border-color: var(--accent); color: var(--accent); font-weight: 500; }
      `}</style>
    </main>
  )
}

/* ——— Sub-components ——— */

function Field({ label, required, className, children }: { label: string; required?: boolean; className?: string; children: React.ReactNode }) {
  return (
    <div className={className}>
      <label className="book-label">{label} {required && <span style={{ color: 'var(--accent)' }}>*</span>}</label>
      {children}
    </div>
  )
}

function PillField({ label, required, options, value, onChange }: { label: string; required?: boolean; options: readonly string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="mt-4">
      <label className="book-label">{label} {required && <span style={{ color: 'var(--accent)' }}>*</span>}</label>
      <div className="flex flex-wrap gap-2 mt-1">
        {options.map(o => (
          <button key={o} type="button" onClick={() => onChange(o)} className="book-pill" data-active={value === o ? 'true' : undefined}>{o}</button>
        ))}
      </div>
    </div>
  )
}

function MultiPillField({ label, required, options, selected, onToggle }: { label: string; required?: boolean; options: readonly string[]; selected: string[]; onToggle: (v: string) => void }) {
  return (
    <div className="mt-4">
      <label className="book-label">{label} {required && <span style={{ color: 'var(--accent)' }}>*</span>}</label>
      <div className="flex flex-wrap gap-2 mt-1">
        {options.map(o => (
          <button key={o} type="button" onClick={() => onToggle(o)} className="book-pill" data-active={selected.includes(o) ? 'true' : undefined}>{o}</button>
        ))}
      </div>
    </div>
  )
}

function SubmitButton({ disabled, label }: { disabled: boolean; label: string }) {
  return (
    <button type="submit" disabled={disabled} className="w-full mt-6 flex items-center justify-center gap-2" style={{
      padding: '16px 32px', background: 'var(--accent)', color: '#fff',
      fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 600,
      borderRadius: 12, border: 'none', cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1, transition: 'all 0.3s',
      boxShadow: '0 4px 16px rgba(230,57,70,0.25)',
    }}>
      {label}
    </button>
  )
}

function AuditStep({ stepLabel, title, titleAccent, subtitle, children, onNext, canNext, onBack, nextLabel, backLabel, disabled }: {
  stepLabel: string; title: string; titleAccent: string; subtitle: string
  children: React.ReactNode; onNext: () => void; canNext: boolean; onBack: () => void
  nextLabel: string; backLabel: string; disabled?: boolean
}) {
  return (
    <>
      <div className="text-center mb-10">
        <span className="section-label">{stepLabel}</span>
        <h1 className="section-title" style={{ margin: '12px auto 16px' }}>
          {title}{' '}<span className="accent">{titleAccent}</span>
        </h1>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 480, margin: '0 auto' }}>
          {subtitle}
        </p>
      </div>

      <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 16, padding: '32px' }}>
        {children}

        <div className="flex gap-3 mt-6">
          <button type="button" onClick={onBack} style={{
            padding: '14px 24px', background: 'transparent', border: '1px solid var(--border)',
            borderRadius: 12, color: 'var(--text-secondary)', fontFamily: 'var(--font-sans)',
            fontSize: 14, fontWeight: 400, cursor: 'pointer', transition: 'all 0.2s',
          }}>
            {backLabel}
          </button>
          <button type="button" onClick={onNext} disabled={!canNext || disabled} className="flex-1 flex items-center justify-center gap-2" style={{
            padding: '14px 32px', background: 'var(--accent)', color: '#fff',
            fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 600,
            borderRadius: 12, border: 'none', cursor: canNext && !disabled ? 'pointer' : 'not-allowed',
            opacity: canNext && !disabled ? 1 : 0.5, transition: 'all 0.3s',
            boxShadow: '0 4px 16px rgba(230,57,70,0.25)',
          }}>
            {nextLabel}
          </button>
        </div>
      </div>
    </>
  )
}
