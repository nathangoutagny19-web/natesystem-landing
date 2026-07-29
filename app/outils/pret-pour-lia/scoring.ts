/**
 * Diagnostic « Votre entreprise est-elle prête pour l'IA ? »
 *
 * Logique pure et testable, séparée de l'UI :
 *   3 piliers × 4 questions, chaque réponse vaut 0 / 1 / 2.
 *   Score par pilier /8, score global /24.
 *   Couleur pilier : rouge 0-3 · orange 4-5 · vert 6-8.
 *   Verdict global + reco personnalisée sur le pilier le plus faible.
 */

export type Choice = 0 | 1 | 2
export type PillarId = 'process' | 'data' | 'adoption'
export type Level = 'red' | 'orange' | 'green'

export const CHOICES: { value: Choice; label: string }[] = [
  { value: 2, label: 'Oui, clairement' },
  { value: 1, label: 'Plutôt' },
  { value: 0, label: 'Pas vraiment' },
]

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

export const PILLARS: Pillar[] = [
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

/** Réponses = 12 valeurs (0/1/2), dans l'ordre des piliers puis des questions. */
export type Answers = (Choice | null)[]

export const TOTAL_QUESTIONS = PILLARS.reduce((n, p) => n + p.questions.length, 0) // 12
export const EMPTY_ANSWERS: Answers = Array<Choice | null>(TOTAL_QUESTIONS).fill(null)

/** Ordre à plat des questions, chacune reliée à son pilier. */
export const FLAT_QUESTIONS: { pillar: Pillar; pillarIndex: number; text: string }[] =
  PILLARS.flatMap((p, pi) => p.questions.map((text) => ({ pillar: p, pillarIndex: pi, text })))

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

/**
 * Calcule le diagnostic complet à partir des 12 réponses.
 * Les réponses non renseignées comptent 0.
 */
export function computeResult(answers: Answers): DiagnosticResult {
  const pillars: PillarResult[] = PILLARS.map((pillar, pi) => {
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

  let verdict: Verdict
  if (anyRed) {
    verdict = {
      level: 'red',
      headline: `L’IA amplifierait votre désordre. Avant l’IA, il faut d’abord ${weakest.action}.`,
    }
  } else if (allGreen) {
    verdict = { level: 'green', headline: 'Vous êtes prêt. Voici par où commencer.' }
  } else {
    verdict = { level: 'orange', headline: 'Bonne base. Voici quoi consolider avant de vous lancer.' }
  }

  return { pillars, total, verdict, weakest }
}
