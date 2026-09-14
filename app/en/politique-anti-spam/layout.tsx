import type { Metadata } from 'next'
import { enMetadata } from '@/lib/en-metadata'

/* La page elle-même sert les deux langues sur une seule URL, par choix : c'est
   une page lue par des services de délivrabilité, pas par un prospect. */
export const metadata: Metadata = enMetadata({
  path: '/politique-anti-spam',
  title: 'Anti-spam policy, NateSystem',
  description:
    'NateSystem policy on unsolicited outreach: our commitments, how we send, and how to opt out. French and English on the same page.',
  robots: { index: true, follow: true },
})

export default function EnPolitiqueAntiSpamLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
