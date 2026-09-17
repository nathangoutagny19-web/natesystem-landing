import type { Metadata } from 'next'
import LegalNotice from '@/components/site/LegalNotice'

/**
 * `/hu/mentions-legales` : la traduction de courtoisie. Le slug reste français
 * pour que les deux versions partagent une adresse reconnaissable, et la page
 * dit elle-même que la version française fait foi.
 */

export const metadata: Metadata = {
  title: 'Jogi nyilatkozat, NateSystem',
  description:
    'A NateSystem jogi nyilatkozata és adatvédelmi tájékoztatója. Nathan Goutagny, egyéni vállalkozó, Lyon, Franciaország. Udvariassági fordítás; a francia változat az irányadó.',
  robots: { index: false, follow: true },
  alternates: {
    canonical: 'https://www.natesystem.com/hu/mentions-legales',
    languages: {
      'fr-FR': 'https://www.natesystem.com/mentions-legales',
      en: 'https://www.natesystem.com/en/mentions-legales',
      hu: 'https://www.natesystem.com/hu/mentions-legales',
      'x-default': 'https://www.natesystem.com/mentions-legales',
    },
  },
}

export default function EnMentionsLegales() {
  return <LegalNotice lang="hu" />
}
