/**
 * Diagnostic IA — logique de scoring pure (sans React).
 *
 * Prend les 12 réponses du questionnaire et retourne :
 *   - 3 KPI principaux (€ gaspillés SaaS / heures perdues / score maturité IA)
 *   - 3 leviers prioritaires personnalisés avec gain estimé + effort
 *
 * Tous les coefficients sont calibrés à partir des 3 calculettes
 * existantes (saas-calculator, calculateur-temps-perdu, ai-readiness)
 * pour rester cohérent avec ce que les utilisateurs ont déjà vu.
 */

// Constantes calibrées (héritées des calculettes existantes)
const WORKING_WEEKS_PER_YEAR = 47 // hérité de calculateur-temps-perdu
const DUPLICATE_SAAS_COST = 50 // €/mois moyen par doublon SaaS détecté

// ─────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────

export type DiagnosticAnswers = {
  // ACTE 1 — Stack SaaS
  saasCount: number // Q1 : nb d'outils SaaS payants (1-30)
  saasUsedCount: number // Q2 : nb réellement utilisés (≤ Q1)
  saasMonthlyCost: number // Q3 : coût mensuel total en €
  duplicatesCount: number // Q4 : nb de doublons connus

  // ACTE 2 — Temps perdu
  employees: number // Q5 : nb de personnes dans l'équipe
  hoursPerWeekPerPerson: number // Q6 : heures/sem/pers en répétitif
  monthlySalaryCost: number // Q7 : coût mensuel chargé moyen par employé
  automationLevel: 'none' | 'some' | 'lots' // Q8 : automatisation passée

  // ACTE 3 — Maturité IA
  aiUsage: 'no' | 'individual' | 'team' // Q9 : ChatGPT/Claude au quotidien
  processDocumented: 'no' | 'partial' | 'yes' // Q10 : process documentés
  dataCentralized: 'no' | 'partial' | 'yes' // Q11 : données centralisées
  aiLagFeeling: 'none' | 'a-bit' | 'yes' | 'a-lot' // Q12 : sentiment de retard
}

export type DiagnosticLever = {
  rank: 1 | 2 | 3
  title: string
  description: string
  estimatedGain: string // ex: "€620/mois économisés"
  effort: string // ex: "2-3 semaines"
  category: 'saas' | 'time' | 'ai'
}

export type DiagnosticResult = {
  // 3 KPI principaux
  saasWasteMonthly: number // € gaspillés/mois en SaaS
  hoursLostMonthly: number // heures perdues/mois en tâches répétitives
  aiMaturityScore: number // score 0-100

  // Dérivés (pour le rapport)
  saasWasteAnnual: number // × 12
  hoursLostAnnual: number // × 12
  hoursLostInETP: number // équivalent temps plein (sur base 1820h/an)
  timeWasteAnnualEuros: number // heures × coût horaire (estimé depuis salaire mensuel)

  // Catégorisation maturité IA (pour copy adapté)
  maturityTier: 'critical' | 'lagging' | 'average' | 'ahead'

  // 3 leviers prioritaires
  topLevers: DiagnosticLever[]
}

// ─────────────────────────────────────────────────────────────────────
// Calculs des 3 KPI
// ─────────────────────────────────────────────────────────────────────

function computeSaasWaste(a: DiagnosticAnswers): number {
  const safeCount = Math.max(a.saasCount, 1)
  const usedCount = Math.min(a.saasUsedCount, safeCount)
  const unusedRatio = 1 - usedCount / safeCount
  // Coût gaspillé sur outils non utilisés + coût moyen des doublons
  const unusedCost = Math.round(a.saasMonthlyCost * unusedRatio)
  const duplicateCost = a.duplicatesCount * DUPLICATE_SAAS_COST
  return Math.max(0, unusedCost + duplicateCost)
}

function computeHoursLostMonthly(a: DiagnosticAnswers): number {
  // Hours/sem/pers × pers × 4 semaines/mois
  return Math.round(a.employees * a.hoursPerWeekPerPerson * 4)
}

function computeAiMaturityScore(a: DiagnosticAnswers): number {
  let score = 0

  // Q8 — Automatisation passée (max 25)
  if (a.automationLevel === 'lots') score += 25
  else if (a.automationLevel === 'some') score += 12

  // Q9 — Utilisation IA (max 25)
  if (a.aiUsage === 'team') score += 25
  else if (a.aiUsage === 'individual') score += 12

  // Q10 — Process documentés (max 20)
  if (a.processDocumented === 'yes') score += 20
  else if (a.processDocumented === 'partial') score += 10

  // Q11 — Données centralisées (max 20)
  if (a.dataCentralized === 'yes') score += 20
  else if (a.dataCentralized === 'partial') score += 10

  // Q12 — Sentiment de retard (max 10, inversé : plus on se sent en retard, moins on score)
  if (a.aiLagFeeling === 'none') score += 10
  else if (a.aiLagFeeling === 'a-bit') score += 6
  else if (a.aiLagFeeling === 'yes') score += 3
  // 'a-lot' = 0

  return Math.min(100, Math.max(0, score))
}

function tierFromScore(score: number): DiagnosticResult['maturityTier'] {
  if (score < 25) return 'critical'
  if (score < 50) return 'lagging'
  if (score < 75) return 'average'
  return 'ahead'
}

// ─────────────────────────────────────────────────────────────────────
// Génération des 3 leviers prioritaires
// ─────────────────────────────────────────────────────────────────────

function generateTopLevers(
  a: DiagnosticAnswers,
  kpi: { saasWasteMonthly: number; hoursLostMonthly: number; aiMaturityScore: number }
): DiagnosticLever[] {
  const candidates: Array<DiagnosticLever & { priorityScore: number }> = []

  // Levier SaaS (si gaspillage > 100€/mois)
  if (kpi.saasWasteMonthly >= 100) {
    const annualGain = kpi.saasWasteMonthly * 12
    candidates.push({
      rank: 1, // sera remappé après tri
      title: 'Consolidation de votre stack SaaS',
      description: `Vous payez ${kpi.saasWasteMonthly}€/mois pour des outils non ou mal utilisés. Une cartographie + un audit de redondance permet de récupérer cette marge sans rien casser dans l'opérationnel quotidien.`,
      estimatedGain: `${annualGain.toLocaleString('fr-FR')}€/an économisés`,
      effort: '2-3 semaines',
      category: 'saas',
      priorityScore: kpi.saasWasteMonthly * 10, // 100€/mois → 1000
    })
  }

  // Levier temps perdu (si > 20h/mois)
  if (kpi.hoursLostMonthly >= 20) {
    const monthlyGainPct = a.automationLevel === 'lots' ? 0.4 : 0.6 // si déjà automatisé un peu, gain potentiel plus faible
    const gainedHours = Math.round(kpi.hoursLostMonthly * monthlyGainPct)
    candidates.push({
      rank: 2,
      title: "Automatisation des tâches répétitives prioritaires",
      description: `Vos équipes perdent ${kpi.hoursLostMonthly}h/mois sur des tâches qu'on peut automatiser. On commence par les 2 plus chronophages, avec un ROI mesurable en moins de 30 jours.`,
      estimatedGain: `~${gainedHours}h/mois récupérées (${Math.round(gainedHours / 4)}h/semaine)`,
      effort: '4-6 semaines',
      category: 'time',
      priorityScore: kpi.hoursLostMonthly * 30, // 20h/mois → 600
    })
  }

  // Levier maturité IA (toujours présent si score < 75)
  if (kpi.aiMaturityScore < 75) {
    const tier = tierFromScore(kpi.aiMaturityScore)
    const targetGain = Math.min(100 - kpi.aiMaturityScore, 25)
    let description: string
    let effort: string
    if (tier === 'critical') {
      description = `Votre score (${kpi.aiMaturityScore}/100) montre qu'il y a une fenêtre d'action évidente. On centralise vos données dans un seul système, on documente 2-3 process critiques, et on intègre l'IA là où elle remplace de vraies heures.`
      effort = '8-12 semaines'
    } else if (tier === 'lagging') {
      description = `Votre score (${kpi.aiMaturityScore}/100) est sous la moyenne du marché. On accélère sur 2 chantiers : centralisation des données + 1 process IA prioritaire avec ROI mesurable.`
      effort = '6-8 semaines'
    } else {
      description = `Votre score (${kpi.aiMaturityScore}/100) est correct mais peut encore monter. Sur les bons leviers, +${targetGain} points sont atteignables en quelques semaines.`
      effort = '4-6 semaines'
    }
    candidates.push({
      rank: 3,
      title: 'Mise à niveau IA & centralisation des données',
      description,
      estimatedGain: `Score maturité +${targetGain} points en moyenne`,
      effort,
      category: 'ai',
      priorityScore: (75 - kpi.aiMaturityScore) * 10, // score 0 → 750
    })
  }

  // Trie par impact, garde top 3, ré-attribue les rangs 1/2/3
  const top3 = candidates
    .sort((a, b) => b.priorityScore - a.priorityScore)
    .slice(0, 3)
    .map((c, i) => ({
      ...c,
      rank: (i + 1) as 1 | 2 | 3,
    }))

  // Supprime priorityScore (champ interne)
  return top3.map(({ priorityScore: _unused, ...rest }) => rest)
}

// ─────────────────────────────────────────────────────────────────────
// API publique
// ─────────────────────────────────────────────────────────────────────

export function computeDiagnostic(a: DiagnosticAnswers): DiagnosticResult {
  const saasWasteMonthly = computeSaasWaste(a)
  const hoursLostMonthly = computeHoursLostMonthly(a)
  const aiMaturityScore = computeAiMaturityScore(a)

  // Coût horaire estimé depuis le salaire mensuel (160h/mois moyenne)
  const hourlyRate = Math.max(15, Math.round(a.monthlySalaryCost / 160))
  const timeWasteAnnualEuros = hoursLostMonthly * 12 * hourlyRate

  // ETP perdu (sur base 1820h/an, INSEE)
  const hoursLostInETP = +(hoursLostMonthly * 12 / 1820).toFixed(2)

  const result: DiagnosticResult = {
    saasWasteMonthly,
    saasWasteAnnual: saasWasteMonthly * 12,
    hoursLostMonthly,
    hoursLostAnnual: hoursLostMonthly * 12,
    hoursLostInETP,
    timeWasteAnnualEuros,
    aiMaturityScore,
    maturityTier: tierFromScore(aiMaturityScore),
    topLevers: generateTopLevers(a, {
      saasWasteMonthly,
      hoursLostMonthly,
      aiMaturityScore,
    }),
  }

  return result
}

// Default answers (pour pré-remplir le questionnaire avec des valeurs plausibles)
export const DEFAULT_ANSWERS: DiagnosticAnswers = {
  saasCount: 8,
  saasUsedCount: 5,
  saasMonthlyCost: 1500,
  duplicatesCount: 1,
  employees: 12,
  hoursPerWeekPerPerson: 6,
  monthlySalaryCost: 4500,
  automationLevel: 'some',
  aiUsage: 'individual',
  processDocumented: 'partial',
  dataCentralized: 'no',
  aiLagFeeling: 'yes',
}

// Utilisé pour valider l'unused param suppression
void WORKING_WEEKS_PER_YEAR // évite l'erreur unused-var si on supprime plus tard
