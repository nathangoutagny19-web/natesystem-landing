import type { Metadata } from 'next'
import MontenegroPage from '@/components/montenegro/MontenegroPage'
import { MONTENEGRO_PAGES, montenegroMetadata } from '@/lib/montenegro'

/* Logiciel pour le charter et la gestion de yachts sur l'Adriatique,
   Monténégro et Croatie (19/11/2026). Contenu : lib/montenegro.ts. */
export const metadata: Metadata = montenegroMetadata('/adriatic')

export default function AdriaticPage() {
  return <MontenegroPage data={MONTENEGRO_PAGES['/adriatic']} />
}
