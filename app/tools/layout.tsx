import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Outils & démos NateSystem — Diagnostic IA gratuit pour PME',
  description:
    'Le Diagnostic IA : chiffrez ce que votre stack SaaS gaspille, le temps que votre équipe perd et votre maturité IA — 3 leviers priorisés, PDF téléchargeable. Plus deux démos live de logiciels métier en conditions réelles.',
  alternates: { canonical: 'https://www.natesystem.com/tools' },
  openGraph: {
    title: 'Outils & démos NateSystem — Diagnostic IA gratuit pour PME',
    description:
      'Le Diagnostic IA gratuit : ce que votre stack SaaS gaspille, le temps perdu, votre maturité IA — 3 leviers priorisés. Plus deux démos live de logiciels métier.',
    url: 'https://www.natesystem.com/tools',
    type: 'website',
  },
}

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  return children
}
