import type { Metadata } from 'next'
import { localeAlternates } from '@/lib/en-metadata'

export const metadata: Metadata = {
  title: 'Glossaire : logiciel sur mesure, IA et automatisation',
  description:
    'Les termes du logiciel sur mesure, de l’IA en entreprise et de l’automatisation, expliqués simplement : agent IA, RAG, ERP, RGPD, no-code, API, et d’autres.',
  alternates: localeAlternates('fr', '/glossaire'),
  openGraph: {
    title: 'Glossaire, logiciel sur-mesure, IA & automatisation pour PME',
    description:
      'Définitions claires des termes du logiciel sur-mesure, de l\'IA en entreprise et de l\'automatisation, pour dirigeants de PME.',
    url: 'https://www.natesystem.com/glossaire',
    type: 'website',
    locale: 'fr_FR',
    images: [{ url: '/og-image-2026-11.png', width: 1200, height: 630, alt: 'NateSystem' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Glossaire : logiciel sur mesure, IA et automatisation',
    description: 'Définitions claires des termes du logiciel sur-mesure, de l\'IA et de l\'automatisation pour PME.',
  },
}

export default function GlossaireLayout({ children }: { children: React.ReactNode }) {
  return children
}
