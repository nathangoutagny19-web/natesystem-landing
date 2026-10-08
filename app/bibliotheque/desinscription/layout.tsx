import type { Metadata } from 'next'

/* Une page de service : elle n'a rien à faire dans les résultats de recherche. */
export const metadata: Metadata = {
  title: 'Désinscription · Bibliothèque NateSystem',
  robots: { index: false, follow: false },
}

export default function DesinscriptionLayout({ children }: { children: React.ReactNode }) {
  return children
}
