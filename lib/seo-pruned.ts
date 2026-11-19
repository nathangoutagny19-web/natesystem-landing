/**
 * LES PAGES RETIRÉES DE GOOGLE (Nathan, 19 novembre 2026 : « go pour tout,
 * retire aussi les bureaux d'études »).
 *
 * Search Console, 3 mois au 19/11/2026 : zéro apparition sur la niche
 * (yachting, conciergerie, voyage, villas, hôtels de luxe), 40 % des
 * apparitions sur la page restauration en position 87, le reste sur Lyon,
 * l'IA et les bureaux d'études. Pour que Google voie NateSystem comme ce
 * qu'il est devenu, ces pages sortent de son index.
 *
 * Elles RESTENT EN LIGNE (un lien direct fonctionne toujours) : elles
 * portent « noindex, follow » et sortent du sitemap. Réversible : retirer un
 * chemin de cette liste le remet dans Google au passage suivant.
 *
 * Les pages bureaux d'études (/ressources/…) n'existent déjà plus (404) :
 * Google les retire de lui-même, rien à faire ici.
 */

/** Pages d'atterrissage hors niche. Chemin sans barre finale. */
export const PRUNED_ROUTES = [
  '/logiciel-sur-mesure-restauration',
  '/logiciel-interne-lyon',
  '/logiciel-interne-saint-etienne',
  '/logiciel-interne-villeurbanne',
  '/logiciel-interne-grenoble',
  '/logiciel-interne-clermont-ferrand',
  '/logiciel-interne-annecy',
  '/logiciel-interne-chambery',
  '/agence-logiciel-ia-lyon',
  '/logiciel-sur-mesure-enseignement-superieur',
  '/logiciel-sur-mesure-club-sportif',
  '/logiciel-sur-mesure-conseil',
] as const

/**
 * Articles hors niche : métiers qui ne sont pas la cible, et articles centrés
 * sur l'IA ou sur des outils (on ne vend jamais « de l'IA »). Les articles sur
 * le sur-mesure en général restent : ils parlent aussi à la cible.
 */
export const PRUNED_BLOG_SLUGS = [
  '10-meilleurs-outils-ia-automatisation-operations-2026',
  '7-signes-entreprise-prete-infrastructure-ia',
  'agents-ia-vs-chatgpt-quelle-difference',
  'automatisation-pme-guide-2026',
  'cest-quoi-ia-agentique-guide-pme-cas-usage',
  'cest-quoi-un-erp-pme',
  'combien-coute-chatbot-agent-ia-entreprise',
  'comment-automatiser-onboarding-client-ia',
  'crm-agence-immobiliere-sur-mesure',
  'ia-generative-vs-agents-ia-autonomes-guide-dirigeants',
  'integrer-ia-entreprise-guide-pme',
  'logiciel-gestion-entreprise-nettoyage-proprete',
  'logiciel-gestion-traiteur-evenementiel',
  'logiciel-installateur-photovoltaique-crm',
  'logiciel-sur-mesure-cabinet-avocats',
  'logiciel-sur-mesure-expertise-comptable',
  'make-vs-zapier-vs-n8n-comparatif',
  'rgpd-ia-ou-vont-les-donnees-entreprise',
  'supabase-vs-airtable-pme',
] as const

const ROUTE_SET = new Set<string>(PRUNED_ROUTES)
const BLOG_SET = new Set<string>(PRUNED_BLOG_SLUGS.map((s) => `/blog/${s}`))

/** Un chemin (sans domaine) est-il retiré de Google ? */
export function isPruned(path: string): boolean {
  const clean = path.replace(/^https?:\/\/[^/]+/, '').split('#')[0].split('?')[0].replace(/\/+$/, '') || '/'
  return ROUTE_SET.has(clean) || BLOG_SET.has(clean)
}

/** À poser dans le `metadata` des pages retirées. */
export const PRUNED_ROBOTS = { index: false, follow: true } as const
