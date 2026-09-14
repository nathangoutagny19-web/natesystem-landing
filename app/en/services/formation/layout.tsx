import type { Metadata } from 'next'
import { enMetadata } from '@/lib/en-metadata'

export const metadata: Metadata = enMetadata({
  path: '/services/formation',
  title: 'Training & support, all the way to full autonomy | NateSystem',
  description:
    'We train your teams, from leadership to the field, to run their own custom software until they are fully autonomous. Full documentation, code and infrastructure 100 % yours. You depend on nobody. Free call.',
})

export default function EnServicesFormationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
