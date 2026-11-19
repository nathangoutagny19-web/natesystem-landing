import type { Metadata } from 'next'
import SectorPillar from '@/components/sector/SectorPillar'
import { CONCIERGE } from '@/lib/pillars'
import { pillarMetadata } from '@/lib/pillar-metadata'

/* Page pilier (stratégie SEO du 19/11/2026), version française.
   L'autre version : /en/luxury-concierge-software. Contenu : lib/pillars.ts. */
export const metadata: Metadata = pillarMetadata(CONCIERGE, 'fr')

export default function ConciergePillarFr() {
  return <SectorPillar pillar={CONCIERGE} />
}
