import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Le Diagnostic IA — par NateSystem',
  description:
    "En 4 minutes, mesurez ce que votre PME perd chaque mois en SaaS inutiles, temps répétitif et opportunités IA ratées. Rapport gratuit, sans email, sans pitch.",
  alternates: { canonical: 'https://www.natesystem.com/tools/diagnostic-ia' },
  openGraph: {
    title: 'Le Diagnostic IA — par NateSystem',
    description:
      'Mesurez en 4 min le gaspillage opérationnel de votre PME : SaaS inutiles, temps perdu, maturité IA. Rapport gratuit + 3 leviers prioritaires.',
    url: 'https://www.natesystem.com/tools/diagnostic-ia',
    type: 'website',
  },
}

// WebApplication schema — a free, no-signup interactive tool. Eligible for
// software rich results and tells AI engines this is a usable tool, not an article.
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  '@id': 'https://www.natesystem.com/tools/diagnostic-ia#app',
  name: 'Le Diagnostic IA',
  url: 'https://www.natesystem.com/tools/diagnostic-ia',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  inLanguage: 'fr-FR',
  description:
    'Outil interactif gratuit : en 4 minutes, mesurez ce que votre PME perd chaque mois en SaaS inutiles, temps répétitif et opportunités IA ratées. Rapport téléchargeable avec 3 leviers prioritaires.',
  provider: { '@id': 'https://www.natesystem.com/#organization' },
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
}

export default function DiagnosticIaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}
