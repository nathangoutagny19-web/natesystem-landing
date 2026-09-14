import type { Metadata } from 'next'
import { enMetadata } from '@/lib/en-metadata'

export const metadata: Metadata = enMetadata({
  path: '/a-propos',
  title: 'About: Nathan Goutagny, founder of NateSystem',
  description:
    'Nathan Goutagny, software and applied-AI engineer based in Lyon. Founder of NateSystem. Years spent building custom operational systems for French and Hungarian companies, in restaurants, higher education and consulting.',
})

export default function EnAProposLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
