import type { Metadata } from 'next'

// Parent-route layout. Kept as a pass-through so it does NOT inject page-level
// metadata/schema onto the child pillar pages — each pillar page (and the
// /services index page) declares its own metadata + JSON-LD.
export const metadata: Metadata = {
  title: 'Nos services — logiciel sur-mesure, audit & IA | NateSystem',
}

export default function ServicesSegmentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
