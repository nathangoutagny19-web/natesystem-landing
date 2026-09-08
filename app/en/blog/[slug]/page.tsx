/**
 * `/en/blog/[slug]` : rend exactement le composant de `/blog/[slug]`.
 * La langue vient de `app/en/layout.tsx`, pas d'une copie du contenu.
 */
export { default } from '../../../blog/[slug]/page'
export { generateStaticParams } from '../../../blog/[slug]/page'
