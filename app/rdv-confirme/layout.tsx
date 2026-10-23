import type { Metadata } from 'next'
import { localeMetadata } from '@/lib/en-metadata'

/* Page vue après une réservation : pas d'indexation, pas de sitemap. */
export const metadata: Metadata = localeMetadata({
  lang: 'fr',
  path: '/rdv-confirme',
  title: 'Votre appel est confirmé | NateSystem',
  description: 'Comment va se passer notre appel, et la seule chose à préparer.',
  robots: { index: false, follow: false },
})

export default function RdvConfirmeLayout({ children }: { children: React.ReactNode }) {
  return children
}
