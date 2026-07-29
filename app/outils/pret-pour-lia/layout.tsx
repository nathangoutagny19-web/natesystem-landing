import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Test : votre entreprise est-elle prête pour l’IA ? (2 min, gratuit) | NateSystem',
  description:
    'Diagnostic IA gratuit pour dirigeants de PME : en 12 questions, découvrez si votre entreprise est prête pour l’IA. Processus, données, adoption : un vrai verdict et un premier pas concret, sans inscription.',
  keywords: [
    'entreprise prête pour l’IA',
    'diagnostic IA entreprise',
    'test maturité IA PME',
    'quiz intelligence artificielle entreprise',
    'audit IA gratuit',
    'par où commencer avec l’IA PME',
  ],
  alternates: { canonical: 'https://www.natesystem.com/outils/pret-pour-lia' },
  openGraph: {
    title: 'Votre entreprise est-elle prête pour l’IA ? Le test en 2 min',
    description:
      'Diagnostic IA gratuit : processus, données, adoption. Un vrai verdict et un premier pas concret, sans inscription.',
    url: 'https://www.natesystem.com/outils/pret-pour-lia',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Votre entreprise est-elle prête pour l’IA ?',
    description: 'Le test en 2 minutes, gratuit et sans inscription.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'Diagnostic IA · Votre entreprise est-elle prête pour l’IA ?',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      url: 'https://www.natesystem.com/outils/pret-pour-lia',
      description:
        'Test gratuit de maturité IA pour PME : 12 questions réparties sur 3 piliers (processus clairs, données fiables, adoption & humain). Score par pilier, verdict global et recommandation personnalisée.',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
      provider: { '@id': 'https://www.natesystem.com/#organization' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.natesystem.com' },
        { '@type': 'ListItem', position: 2, name: 'Outils gratuits', item: 'https://www.natesystem.com/outils' },
        { '@type': 'ListItem', position: 3, name: 'Diagnostic IA', item: 'https://www.natesystem.com/outils/pret-pour-lia' },
      ],
    },
  ],
}

export default function PretPourLiaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}
