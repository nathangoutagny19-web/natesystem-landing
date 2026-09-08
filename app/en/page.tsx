/**
 * La home anglaise. Elle ne duplique rien : elle rend exactement le même
 * composant que `/`, et c'est `app/en/layout.tsx` qui fournit `lang="en"` à
 * tout l'arbre. Une seule page à maintenir, deux URL indexables.
 */
export { default } from '../page'
