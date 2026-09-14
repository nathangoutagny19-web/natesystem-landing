import { MethodeRoute } from '../../methode/page'

/**
 * `/en/methode` : le même composant, servi en anglais.
 *
 * La page est un composant serveur et ne voit pas le LangProvider : elle
 * expose son rendu comme une fonction prenant la langue, pour que le JSON-LD
 * et le fil d'ariane pointent dans l'arbre anglais. Les métadonnées anglaises
 * vivent dans le layout de cette route ; cette page réexportait celles du
 * français, ce qui posait une canonique vers /methode.
 */
export default function EnMethodePage() {
  return <MethodeRoute lang="en" />
}
