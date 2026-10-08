/**
 * `/en/library` : rend exactement le composant de `/library`.
 * La langue vient de `app/en/layout.tsx`, pas d'une copie du contenu.
 *
 * L'URL garde le mot français, comme /atelier : une adresse se dicte et se
 * colle, la couper en deux selon la langue crée des liens morts pour rien.
 */
export { default } from '../../library/page'
