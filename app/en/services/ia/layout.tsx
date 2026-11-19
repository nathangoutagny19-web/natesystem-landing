import type { Metadata } from 'next'
import { enMetadata } from '@/lib/en-metadata'

export const metadata: Metadata = enMetadata({
  path: '/services/ia',
  title: 'Automation for luxury hospitality | NateSystem',
  description:
    'A first reply in the client’s language, reconfirmations, deposit follow-ups, WhatsApp threads sorted into clear requests. The tool suggests, you decide.',
})

export default function EnServicesIaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
