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

export default function DiagnosticIaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
