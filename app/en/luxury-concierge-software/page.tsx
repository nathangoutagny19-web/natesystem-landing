import type { Metadata } from 'next'
import SectorPillar from '@/components/sector/SectorPillar'
import { CONCIERGE } from '@/lib/pillars'
import { pillarMetadata } from '@/lib/pillar-metadata'

/* Page pilier (stratégie SEO du 19/11/2026), version anglaise.
   L'autre version : /logiciel-conciergerie-de-luxe. Contenu : lib/pillars.ts. */
export const metadata: Metadata = pillarMetadata(CONCIERGE, 'en')

export default function ConciergePillarEn() {
  return <SectorPillar pillar={CONCIERGE} />
}
