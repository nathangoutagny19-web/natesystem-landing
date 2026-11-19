import type { Metadata } from 'next'
import { enMetadata } from '@/lib/en-metadata'

export const metadata: Metadata = enMetadata({
  path: '/a-propos',
  title: 'About: Nathan Goutagny, founder of NateSystem',
  description:
    'NateSystem builds bespoke software for luxury hospitality, and the client owns it. Founded by Nathan Goutagny, based in Montenegro and France.',
})

export default function EnAProposLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
