import PolitiqueAntiSpam from '../../politique-anti-spam/page'

/**
 * `/hu/politique-anti-spam` : la page sert les trois langues sur
 * une seule adresse, par choix, parce qu'elle est lue par des services de
 * délivrabilité et pas par un prospect. Seul le lien de retour change, pour
 * ne pas éjecter le visiteur hors de l'arbre hongrois. Les métadonnées
 * hongroises vivent dans le layout de cette route.
 */
export default function EnPolitiqueAntiSpam() {
  return <PolitiqueAntiSpam lang="hu" />
}
