import type { Metadata } from 'next'
import { enMetadata } from '@/lib/en-metadata'

export const metadata: Metadata = enMetadata({
  path: '/case-studies',
  title: 'Case studies: NateSystem client work',
  description:
    'Real results, measured and documented. How our clients replaced their scattered tools with custom software with AI built in.',
})

export default function EnCaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
