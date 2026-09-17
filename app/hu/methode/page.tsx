import { MethodeRoute } from '../../methode/page'

/**
 * `/hu/methode` : le même composant, servi en hongrois.
 *
 * La page est un composant serveur et ne voit pas le LangProvider : elle
 * expose son rendu comme une fonction prenant la langue, pour que le JSON-LD
 * et le fil d'ariane pointent dans l'arbre hongrois. Les métadonnées hongroises
 * vivent dans le layout de cette route ; cette page réexportait celles du
 * français, ce qui posait une canonique vers /methode.
 */
export default function HuMethodePage() {
  return <MethodeRoute lang="hu" />
}
