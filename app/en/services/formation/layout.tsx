import type { Metadata } from 'next'
import { enMetadata } from '@/lib/en-metadata'

export const metadata: Metadata = enMetadata({
  path: '/services/formation',
  title: 'Training & support, all the way to autonomy | NateSystem',
  description:
    'We train your teams, from management to the field, to run their own software until they are fully autonomous. Full documentation. Code and data are yours.',
})

export default function EnServicesFormationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
