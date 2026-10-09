import type { Metadata } from 'next'

// Parent-route layout. Kept as a pass-through so it does NOT inject page-level
// metadata/schema onto the child pillar pages, each pillar page (and the
// /services index page) declares its own metadata + JSON-LD.
export const metadata: Metadata = {
  title: 'Nos services pour l’hospitalité de luxe et de prestige | NateSystem',
  description:
    'Diagnostic, système sur mesure et image en ligne, automatisation et données, formation : un partenariat dans la durée pour villas, chalets, domaines, conciergeries, yachts, hôtels indépendants et maisons de réception. Le code vous appartient.',
}

export default function ServicesSegmentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
