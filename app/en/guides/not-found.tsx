import type { Metadata } from 'next'
import NotFoundPage from '@/components/layout/NotFoundPage'

/* La 404 de l'arbre « en » (19/11/2026). Voir components/layout/NotFoundPage.tsx. */
export const metadata: Metadata = { robots: { index: false, follow: true } }

export default function NotFound() {
  return <NotFoundPage lang="en" />
}
