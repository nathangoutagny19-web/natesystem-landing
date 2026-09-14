import type { Metadata } from 'next'
import { enMetadata } from '@/lib/en-metadata'

export const metadata: Metadata = enMetadata({
  path: '/services/logiciel-sur-mesure',
  title: 'Custom software & platform | NateSystem',
  description:
    'The custom business software that brings your tools and your data into one platform: unified database, dashboards, portals, internal tools. You own the code, hosted in the EU. Live in 4 to 8 weeks. Free audit.',
})

export default function EnServicesLogicielSurMesureLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
