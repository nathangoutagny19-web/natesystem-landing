import type { Lang } from './i18n'

/**
 * LE PETIT HELPER DE COPIE DANS LES PAGES.
 *
 * Certaines pages portent de la prose longue qui se relit mieux à côté de son
 * contexte que dans `lib/i18n.ts`. Elles utilisaient toutes le même motif
 * local `const d = (fr, en) => lang === 'en' ? en : fr`, écrit vingt-neuf fois.
 * Il vit ici désormais, pour qu'ajouter une langue soit une ligne et pas une
 * chasse dans vingt-neuf fichiers.
 *
 * Le troisième argument est optionnel le temps que le hongrois soit écrit
 * partout : une page pas encore traduite retombe sur l'anglais plutôt que de
 * casser le build. `npm run i18n:audit` liste ce qui manque encore.
 */
export function makeD(lang: Lang) {
  return (fr: string, en: string, hu?: string): string => {
    if (lang === 'hu') return hu ?? en
    if (lang === 'en') return en
    return fr
  }
}

/** Le nom de chaque langue, dans sa propre langue. */
export const LANG_LABEL: Record<Lang, string> = {
  fr: 'Français',
  en: 'English',
  hu: 'Magyar',
}

/** Choisit une valeur par langue. Pour les tableaux et les objets, là où `makeD`
 *  ne suffit pas. Une quatrième langue = une clé de plus, pas un ternaire. */
export function pick<T>(lang: Lang, values: Record<Lang, T>): T {
  return values[lang]
}
