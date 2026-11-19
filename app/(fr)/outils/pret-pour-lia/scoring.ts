/**
 * Diagnostic « Votre entreprise est-elle prête pour l'IA ? »
 *
 * Logique pure et testable, séparée de l'UI :
 *   3 piliers × 4 questions, chaque réponse vaut 0 / 1 / 2.
 *   Score par pilier /8, score global /24.
 *   Couleur pilier : rouge 0-3 · orange 4-5 · vert 6-8.
 *   Verdict global + reco personnalisée sur le pilier le plus faible.
 *
 * ─── BILINGUE ───
 * La page est servie sous `/outils/pret-pour-lia` et sous
 * `/en/outils/pret-pour-lia` par le même composant. Les questions, les piliers
 * et les recommandations sont du contenu, pas de l'interface : ils vivent ici,
 * dans les deux langues, plutôt que dans `lib/i18n.ts`. Le barème, lui, est
 * identique aux deux langues et n'est écrit qu'une fois.
 */

import type { Lang } from '@/components/providers/LangProvider'

export type Choice = 0 | 1 | 2
export type PillarId = 'process' | 'data' | 'adoption'
export type Level = 'red' | 'orange' | 'green'

export const CHOICES: Record<Lang, { value: Choice; label: string }[]> = {
  fr: [
    { value: 2, label: 'Oui, clairement' },
    { value: 1, label: 'Plutôt' },
    { value: 0, label: 'Pas vraiment' },
  ],
  en: [
    { value: 2, label: 'Yes, clearly' },
    { value: 1, label: 'Somewhat' },
    { value: 0, label: 'Not really' },
  ],
  hu: [
    { value: 2, label: 'Igen, egyértelműen' },
    { value: 1, label: 'Nagyjából' },
    { value: 0, label: 'Nem igazán' },
  ],
}

export type Pillar = {
  id: PillarId
  num: 1 | 2 | 3
  /** Nom court, pour les jauges. */
  name: string
  /** Intitulé complet du pilier. */
  question: string
  /** Formulation « verbe » pour le verdict rouge : « il faut d'abord … ». */
  action: string
  /** Reco personnalisée quand ce pilier est le plus faible. */
  recoTitle: string
  recoBody: string
  firstStep: string
  questions: string[]
}

const PILLARS_FR: Pillar[] = [
  {
    id: 'process',
    num: 1,
    name: 'Processus clairs',
    question: 'Vos processus sont-ils clairs ?',
    action: 'clarifier et documenter vos processus',
    recoTitle: 'Commencez par clarifier vos processus.',
    recoBody:
      'On ne peut pas automatiser un flou. Avant l’IA, vos façons de travailler doivent être nettes et répétables, sinon vous ne feriez qu’accélérer le désordre.',
    firstStep:
      'Choisissez UNE tâche répétitive qui vous coûte du temps chaque semaine, et écrivez ses étapes de A à Z, comme si vous formiez un nouvel arrivant. C’est votre premier processus documenté, et le meilleur candidat à l’automatisation.',
    questions: [
      'Si un nouvel employé arrivait demain, pourriez-vous lui expliquer vos processus clés sans improviser ?',
      'Vos tâches importantes suivent-elles toujours les mêmes étapes, quelle que soit la personne qui les réalise ?',
      'Vos façons de travailler sont-elles écrites quelque part, et pas seulement dans la tête des gens ?',
      'Sauriez-vous décrire en une phrase claire ce qu’une machine devrait faire à votre place sur une tâche répétitive ?',
    ],
  },
  {
    id: 'data',
    num: 2,
    name: 'Données fiables',
    question: 'Vos données sont-elles centralisées et fiables ?',
    action: 'centraliser et fiabiliser vos données',
    recoTitle: 'Commencez par fiabiliser vos données.',
    recoBody:
      'Une IA branchée sur des données éparpillées ou fausses se trompe vite, et à grande échelle. La centralisation, c’est le carburant propre dont elle a besoin pour être utile.',
    firstStep:
      'Listez où vivent vos infos clés (clients, ventes, stock, projets) : combien d’outils, combien de fichiers ? Puis choisissez UNE source de vérité par type de donnée, et arrêtez de la dupliquer ailleurs.',
    questions: [
      'Vos informations (clients, ventes, stock, projets) sont-elles réunies au même endroit ?',
      'Quand vous avez besoin d’un chiffre, l’obtenez-vous en quelques secondes, sans avoir à le reconstituer ?',
      'Êtes-vous sûr que vos données sont à jour et fiables ?',
      'Vos outils se parlent-ils entre eux, sans devoir recopier les infos de l’un à l’autre ?',
    ],
  },
  {
    id: 'adoption',
    num: 3,
    name: 'Adoption & humain',
    question: 'Adoption & humain aux commandes',
    action: 'embarquer vos équipes dans le changement',
    recoTitle: 'Commencez par embarquer votre équipe.',
    recoBody:
      'Le meilleur outil du monde ne sert à rien si personne ne l’utilise. L’adoption par les équipes, avec un humain qui garde la main, c’est ce qui sépare un vrai gain d’un gadget abandonné.',
    firstStep:
      'Repérez la personne qui pourrait porter le changement : curieuse, respectée, pas forcément la plus technique. C’est elle, bien accompagnée, qui fera la différence entre un outil vraiment adopté et un énième truc oublié au bout d’un mois.',
    questions: [
      'Quand vous mettez un nouvel outil en place, votre équipe l’adopte-t-elle vraiment, sans retourner à ses vieilles habitudes ?',
      'Vos équipes sont-elles plutôt curieuses que méfiantes face aux nouveaux outils ?',
      'Seriez-vous à l’aise pour qu’un humain garde toujours la validation finale sur ce que l’IA produit ?',
      'Avez-vous quelqu’un qui peut accompagner un changement d’outil sur la durée ?',
    ],
  },
]

const PILLARS_EN: Pillar[] = [
  {
    id: 'process',
    num: 1,
    name: 'Clear process',
    question: 'Are your processes clear?',
    action: 'clarify and write down your processes',
    recoTitle: 'Start by clarifying your processes.',
    recoBody:
      'You cannot automate what is still vague. Before AI, the way you work has to be clean and repeatable, otherwise all you do is speed up the mess.',
    firstStep:
      'Pick ONE repetitive task that costs you time every week, and write its steps out from start to finish, as if you were training a new hire. That is your first documented process, and the best candidate for automation.',
    questions: [
      'If a new employee started tomorrow, could you walk them through your key processes without improvising?',
      'Do your important tasks always follow the same steps, whoever carries them out?',
      'Are your ways of working written down somewhere, and not only in people’s heads?',
      'Could you describe in one clear sentence what a machine should do instead of you on a repetitive task?',
    ],
  },
  {
    id: 'data',
    num: 2,
    name: 'Reliable data',
    question: 'Is your data centralised and reliable?',
    action: 'centralise your data and make it reliable',
    recoTitle: 'Start by making your data reliable.',
    recoBody:
      'An AI plugged into scattered or wrong data gets it wrong fast, and at scale. Centralising is the clean fuel it needs to be of any use.',
    firstStep:
      'List where your key information lives (clients, sales, stock, projects): how many tools, how many files? Then pick ONE source of truth per type of data, and stop duplicating it anywhere else.',
    questions: [
      'Is your information (clients, sales, stock, projects) gathered in one place?',
      'When you need a figure, do you get it in seconds, without having to rebuild it?',
      'Are you confident your data is up to date and reliable?',
      'Do your tools talk to each other, without anyone retyping information from one into the next?',
    ],
  },
  {
    id: 'adoption',
    num: 3,
    name: 'Adoption & people',
    question: 'Adoption, with people in control',
    action: 'bring your teams along with the change',
    recoTitle: 'Start by bringing your team along.',
    recoBody:
      'The best tool in the world is useless if nobody uses it. Adoption by the teams, with a human keeping the final say, is what separates a real gain from an abandoned gadget.',
    firstStep:
      'Spot the person who could carry the change: curious, respected, not necessarily the most technical. With the right support, they are the difference between a tool that really gets used and one more thing dropped after a month.',
    questions: [
      'When you put a new tool in place, does your team really adopt it, without slipping back into old habits?',
      'Are your teams more curious than suspicious when a new tool arrives?',
      'Would you be comfortable with a human always keeping the final say on what the AI produces?',
      'Do you have someone who can support a change of tool over the long run?',
    ],
  },
]

const PILLARS_HU: Pillar[] = [
  {
    id: 'process',
    num: 1,
    name: 'Világos folyamatok',
    question: 'Világosak a folyamatai?',
    action: 'tisztázza és írja le a folyamatait',
    recoTitle: 'Kezdje a folyamatai tisztázásával.',
    recoBody:
      'Ami homályos, azt nem lehet automatizálni. Az MI előtt a munkamódszereinek tisztáknak és ismételhetőknek kell lenniük, különben csak a rendetlenséget gyorsítaná fel.',
    firstStep:
      'Válasszon EGY ismétlődő feladatot, amely minden héten időt visz el, és írja le a lépéseit elejétől a végéig, mintha egy új munkatársat tanítana be. Ez az első leírt folyamata, és egyben a legjobb jelölt az automatizálásra.',
    questions: [
      'Ha holnap új munkatárs érkezne, el tudná magyarázni neki a kulcsfolyamatait rögtönzés nélkül?',
      'A fontos feladatai mindig ugyanazokat a lépéseket követik, bárki is végzi őket?',
      'Le vannak írva valahol a munkamódszerei, és nem csak az emberek fejében élnek?',
      'Meg tudná fogalmazni egyetlen világos mondatban, mit kellene egy gépnek Ön helyett elvégeznie egy ismétlődő feladaton?',
    ],
  },
  {
    id: 'data',
    num: 2,
    name: 'Megbízható adatok',
    question: 'Egy helyen vannak és megbízhatók az adatai?',
    action: 'vonja egy helyre és tegye megbízhatóvá az adatait',
    recoTitle: 'Kezdje az adatai megbízhatóvá tételével.',
    recoBody:
      'A szétszórt vagy hibás adatokra kötött MI gyorsan és nagy léptékben téved. Az egy helyre gyűjtés az a tiszta üzemanyag, amelyre szüksége van ahhoz, hogy hasznos legyen.',
    firstStep:
      'Írja össze, hol élnek a kulcsinformációi (ügyfelek, értékesítés, készlet, projektek): hány eszközben, hány fájlban? Aztán válasszon adattípusonként EGY igazságforrást, és hagyja abba a máshová másolását.',
    questions: [
      'Egy helyen vannak az információi (ügyfelek, értékesítés, készlet, projektek)?',
      'Amikor egy számra van szüksége, megkapja másodpercek alatt, anélkül hogy össze kellene rakni?',
      'Biztos benne, hogy az adatai naprakészek és megbízhatók?',
      'Beszélnek egymással az eszközei, anélkül hogy bárkinek át kellene gépelnie az adatokat egyikből a másikba?',
    ],
  },
  {
    id: 'adoption',
    num: 3,
    name: 'Elfogadás és emberek',
    question: 'Elfogadás, emberi kézben tartott irányítással',
    action: 'vigye magával a csapatait a változásban',
    recoTitle: 'Kezdje azzal, hogy maga mellé állítja a csapatát.',
    recoBody:
      'A világ legjobb eszköze is hasztalan, ha senki nem használja. A csapatok elfogadása, emberrel a végső szónál, az választja el a valódi nyereséget az elhagyott kütyütől.',
    firstStep:
      'Keresse meg azt az embert, aki vinni tudná a változást: kíváncsi, tisztelik, és nem feltétlenül a legtechnikásabb. Megfelelő támogatással ő a különbség egy tényleg használt eszköz és egy hónap után elfelejtett újabb dolog között.',
    questions: [
      'Amikor új eszközt vezet be, a csapata valóban használatba veszi, anélkül hogy visszacsúszna a régi szokásokba?',
      'A csapatai inkább kíváncsiak, mint gyanakvók, ha új eszköz érkezik?',
      'Kényelmes lenne Önnek, ha mindig ember mondaná ki a végső szót abban, amit az MI előállít?',
      'Van olyan embere, aki hosszú távon végig tudja kísérni egy eszköz bevezetését?',
    ],
  },
]

export const PILLARS: Record<Lang, Pillar[]> = { fr: PILLARS_FR, en: PILLARS_EN, hu: PILLARS_HU }

/** Réponses = 12 valeurs (0/1/2), dans l'ordre des piliers puis des questions. */
export type Answers = (Choice | null)[]

/** Identique dans les deux langues : les deux jeux ont la même structure. */
export const TOTAL_QUESTIONS = PILLARS_FR.reduce((n, p) => n + p.questions.length, 0) // 12
export const EMPTY_ANSWERS: Answers = Array<Choice | null>(TOTAL_QUESTIONS).fill(null)

/** Ordre à plat des questions, chacune reliée à son pilier. */
export function flatQuestions(lang: Lang): { pillar: Pillar; pillarIndex: number; text: string }[] {
  return PILLARS[lang].flatMap((p, pi) => p.questions.map((text) => ({ pillar: p, pillarIndex: pi, text })))
}

export function levelOf(pillarScore: number): Level {
  if (pillarScore <= 3) return 'red'
  if (pillarScore <= 5) return 'orange'
  return 'green'
}

export type PillarResult = {
  pillar: Pillar
  score: number // /8
  level: Level
}

export type Verdict = {
  level: Level
  headline: string
}

export type DiagnosticResult = {
  pillars: PillarResult[]
  total: number // /24
  verdict: Verdict
  weakest: Pillar
}

/** Les trois verdicts globaux, dans les deux langues. */
const VERDICTS: Record<Lang, { red: (action: string) => string; orange: string; green: string }> = {
  fr: {
    red: (action) => `L’IA amplifierait votre désordre. Avant l’IA, il faut d’abord ${action}.`,
    orange: 'Bonne base. Voici quoi consolider avant de vous lancer.',
    green: 'Vous êtes prêt. Voici par où commencer.',
  },
  en: {
    red: (action) => `AI would amplify your mess. Before AI, you first need to ${action}.`,
    orange: 'Solid base. Here is what to strengthen before you start.',
    green: 'You are ready. Here is where to start.',
  },
  hu: {
    red: (action) => `Az MI felnagyítaná a rendetlenségét. Előbb ${action}.`,
    orange: 'Szilárd alap. Íme, mit érdemes megerősíteni, mielőtt belevág.',
    green: 'Készen áll. Íme, hol érdemes kezdeni.',
  },
}

/**
 * Calcule le diagnostic complet à partir des 12 réponses.
 * Les réponses non renseignées comptent 0.
 */
export function computeResult(answers: Answers, lang: Lang = 'fr'): DiagnosticResult {
  const pillars: PillarResult[] = PILLARS[lang].map((pillar, pi) => {
    const start = pi * 4
    const score = [0, 1, 2, 3].reduce((sum, q) => sum + (answers[start + q] ?? 0), 0)
    return { pillar, score, level: levelOf(score) }
  })

  const total = pillars.reduce((sum, p) => sum + p.score, 0)

  // Pilier le plus faible ; en cas d'égalité, le plus en amont (num le plus petit).
  const weakestResult = pillars.reduce((min, p) => (p.score < min.score ? p : min), pillars[0])
  const weakest = weakestResult.pillar

  const anyRed = pillars.some((p) => p.level === 'red')
  const allGreen = pillars.every((p) => p.level === 'green')

  const copy = VERDICTS[lang]
  let verdict: Verdict
  if (anyRed) {
    verdict = { level: 'red', headline: copy.red(weakest.action) }
  } else if (allGreen) {
    verdict = { level: 'green', headline: copy.green }
  } else {
    verdict = { level: 'orange', headline: copy.orange }
  }

  return { pillars, total, verdict, weakest }
}
