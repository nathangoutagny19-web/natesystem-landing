import type { Metadata } from 'next'
import SectorPillar from '@/components/sector/SectorPillar'
import { YACHTING } from '@/lib/pillars'
import { pillarMetadata } from '@/lib/pillar-metadata'

/* Page pilier yachting, version française (stratégie SEO du 19/11/2026).
   La version anglaise : /en/yacht-management-software. */
export const metadata: Metadata = pillarMetadata(YACHTING, 'fr')

export default function YachtingPillarFr() {
  return <SectorPillar pillar={YACHTING} />
}
