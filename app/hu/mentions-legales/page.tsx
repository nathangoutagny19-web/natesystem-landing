import type { Metadata } from 'next'
import LegalNotice from '@/components/site/LegalNotice'

/**
 * `/hu/mentions-legales` : la traduction de courtoisie. Le slug reste français
 * pour que les deux versions partagent une adresse reconnaissable, et la page
 * dit elle-même que la version française fait foi.
 */

export const metadata: Metadata = {
  title: 'Legal notice, NateSystem',
  description:
    'Legal notice and privacy policy of NateSystem, Nathan Goutagny, sole trader, Lyon, France. Courtesy translation; the French version applies.',
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
