import type { Lang } from './i18n'

/**
 * LES ROUTES QUI EXISTENT EN ANGLAIS.
 *
 * Source unique de vérité, lue par trois endroits qui divergeaient :
 *   · `app/sitemap.ts`, pour déclarer les URL anglaises ;
 *   · `mirrorPath()` dans le LangProvider, pour le drapeau de la nav ;
 *   · `localizedHref()` ci-dessous, pour tous les liens internes.
 *
 * Ce qui n'est PAS là est volontairement resté français : les sept pages de
 * villes, `prix-logiciel-sur-mesure`, `crm-sur-mesure`, les pages sectorielles
 * et les playbooks existent pour se placer sur des requêtes françaises. Une
 * version anglaise sous un slug français ne vise aucune recherche.
 *
 * Le blog est dans le même cas et il a été retiré de l'arbre anglais : trente
 * articles de fond écrits pour des requêtes françaises, sous des slugs
 * français. `/en/blog/*` redirige vers `/blog/*` (voir `next.config.mjs`).
 */
export const EN_ROUTES = [
  '/',
  '/methode',
  '/services',
  '/services/audit',
  '/services/formation',
  '/services/ia',
  '/services/logiciel-sur-mesure',
  '/a-propos',
  '/case-studies',
  '/outils',
  '/outils/pret-pour-lia',
  '/tools',
  '/tools/diagnostic-ia',
  '/resources',
  '/reviews',
  '/book',
  '/glossaire',
  '/mentions-legales',
  '/politique-anti-spam',
] as const

/** Les routes dynamiques traduites, testées par préfixe. */
const EN_DYNAMIC_PREFIXES = ['/case-studies/'] as const

const EN_SET = new Set<string>(EN_ROUTES)

/** Un chemin français a-t-il un équivalent sous /en ? */
export function hasEnglishVersion(path: string): boolean {
  const clean = path.split('#')[0].split('?')[0].replace(/\/+$/, '') || '/'
  if (EN_SET.has(clean)) return true
  return EN_DYNAMIC_PREFIXES.some((p) => clean.startsWith(p) && clean.length > p.length)
}

/**
 * Le href à poser dans un lien interne, selon la langue affichée.
 *
 * En français, rien ne bouge. En anglais, le chemin est préfixé `/en` s'il
 * existe en anglais, et laissé tel quel sinon : mieux vaut envoyer un
 * anglophone sur une page française qui existe que sur un /en/… en 404.
 *
 * Les ancres sont conservées : `/#rendez-vous` devient `/en#rendez-vous`.
 */
export function localizedHref(path: string, lang: Lang): string {
  if (lang === 'fr') return path
  if (!path.startsWith('/')) return path // externe, mailto, tel

  const hashAt = path.indexOf('#')
  const base = hashAt === -1 ? path : path.slice(0, hashAt)
  const hash = hashAt === -1 ? '' : path.slice(hashAt)

  if (!hasEnglishVersion(base || '/')) return path

  const trimmed = base.replace(/\/+$/, '')
  return (trimmed === '' ? '/en' : `/en${trimmed}`) + hash
}
