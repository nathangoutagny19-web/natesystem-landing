/**
 * `/en/atelier` : rend exactement le composant de `/atelier`.
 * La langue vient de `app/en/layout.tsx`, pas d'une copie du contenu.
 *
 * L'URL garde le mot « atelier » plutôt que « workshop » : elle est déjà en
 * ligne, elle est dictée au téléphone et collée dans des emails, et la couper
 * en deux adresses selon la langue créerait un lien mort pour rien.
 */
export { default } from '../../atelier/page'
