import type { Metadata } from 'next'
import MontenegroPage from '@/components/montenegro/MontenegroPage'
import { MONTENEGRO_PAGES, montenegroMetadata } from '@/lib/montenegro'

export const metadata: Metadata = montenegroMetadata('/montenegro')

export default function MontenegroHubPage() {
  return <MontenegroPage data={MONTENEGRO_PAGES['/montenegro']} />
}
