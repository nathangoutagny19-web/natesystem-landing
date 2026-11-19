import type { Metadata } from 'next'
import { localeAlternates } from '@/lib/en-metadata'

export const metadata: Metadata = {
  title: 'Outils & démos NateSystem, Diagnostic IA gratuit pour PME',
  description:
    'Le Diagnostic IA : ce que vos abonnements SaaS gaspillent, le temps perdu par l’équipe et votre maturité IA, avec 3 leviers prioritaires et un PDF.',
  alternates: localeAlternates('fr', '/tools'),
  openGraph: {
    title: 'Outils & démos NateSystem, Diagnostic IA gratuit pour PME',
    description:
      'Le Diagnostic IA gratuit : ce que votre stack SaaS gaspille, le temps perdu, votre maturité IA, 3 leviers priorisés. Plus deux démos live de logiciels métier.',
    url: 'https://www.natesystem.com/tools',
    type: 'website',
    images: [{ url: '/og-image-2026-11.png', width: 1200, height: 630, alt: 'NateSystem' }],
  },
}

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  return children
}
