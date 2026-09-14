import type { Metadata } from 'next'
import LegalNotice from '@/components/site/LegalNotice'

export const metadata: Metadata = {
  title: 'Mentions légales, NateSystem',
  description:
    'Mentions légales et politique de confidentialité de NateSystem, Nathan Goutagny, entrepreneur individuel, Lyon, France.',
  robots: { index: false, follow: true },
  alternates: {
    canonical: 'https://www.natesystem.com/mentions-legales',
    languages: {
      'fr-FR': 'https://www.natesystem.com/mentions-legales',
      en: 'https://www.natesystem.com/en/mentions-legales',
      'x-default': 'https://www.natesystem.com/mentions-legales',
    },
  },
}

export default function MentionsLegales() {
  return <LegalNotice lang="fr" />
}
