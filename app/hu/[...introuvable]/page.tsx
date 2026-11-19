import { notFound } from 'next/navigation'

/**
 * L'attrape-tout des adresses inconnues (19/11/2026).
 *
 * Avec un layout racine par langue, Next 14 n'habille plus une adresse qui
 * ne correspond à aucune route : il servait sa page 404 nue. Cette route
 * prend tout ce qui reste et appelle notFound(), ce qui rend le not-found.tsx
 * de la langue, avec le site autour, et un vrai statut 404.
 * Les fichiers de public/ et les réécritures de next.config passent avant.
 */
export default function Introuvable() {
  notFound()
}
