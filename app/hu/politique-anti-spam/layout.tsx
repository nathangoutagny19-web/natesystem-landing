import type { Metadata } from 'next'
import { localeMetadata } from '@/lib/en-metadata'

/* La page elle-même sert les deux langues sur une seule URL, par choix : c'est
   une page lue par des services de délivrabilité, pas par un prospect. */
export const metadata: Metadata = localeMetadata({
  lang: 'hu',
  path: '/politique-anti-spam',
  title: 'Spamellenes irányelv, NateSystem',
  description:
    'A NateSystem irányelve a kéretlen megkeresésekről: vállalásaink, a küldés gyakorlata, és hogyan lehet leiratkozni. Francia és angol nyelven ugyanazon az oldalon.',
  robots: { index: true, follow: true },
})

export default function HuPolitiqueAntiSpamLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
