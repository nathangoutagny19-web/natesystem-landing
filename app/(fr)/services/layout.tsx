import type { Metadata } from 'next'
import { localeMetadata } from '@/lib/en-metadata'

// Parent-route layout. Kept as a pass-through so it does NOT inject page-level
// metadata/schema onto the child pillar pages, each pillar page (and the
// /services index page) declares its own metadata + JSON-LD.
export const metadata: Metadata = localeMetadata({
  lang: 'fr',
  path: '/services',
  title: 'Nos services pour l’hospitalité de luxe | NateSystem',
  description:
    'Diagnostic, outil sur mesure, automatisation, formation et suivi pour hôtels de luxe, conciergeries, gestion de propriétés et yachting. Le code est à vous.',
})

export default function ServicesSegmentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
