import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Réalisations — Cas clients NateSystem',
  description:
    'Des résultats réels, mesurés et documentés. Comment nos clients ont remplacé leurs outils épars par du logiciel sur-mesure propulsé par l\'IA.',
  alternates: { canonical: 'https://www.natesystem.com/case-studies' },
  openGraph: {
    title: 'Réalisations NateSystem — Cas clients',
    description: 'Des résultats réels, mesurés et documentés chez de vrais clients.',
    url: 'https://www.natesystem.com/case-studies',
    type: 'website',
  },
}

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return children
}
