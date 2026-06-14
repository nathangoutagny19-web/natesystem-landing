import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Glossaire — logiciel sur-mesure, IA & automatisation pour PME | NateSystem',
  description:
    'Le glossaire NateSystem : définitions claires des termes du logiciel sur-mesure, de l\'IA en entreprise et de l\'automatisation — agent IA, RAG, ERP, RGPD, no-code, API, et plus. Pour dirigeants de PME.',
  alternates: { canonical: 'https://www.natesystem.com/glossaire' },
  openGraph: {
    title: 'Glossaire — logiciel sur-mesure, IA & automatisation pour PME',
    description:
      'Définitions claires des termes du logiciel sur-mesure, de l\'IA en entreprise et de l\'automatisation, pour dirigeants de PME.',
    url: 'https://www.natesystem.com/glossaire',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Glossaire — logiciel sur-mesure, IA & automatisation pour PME | NateSystem',
    description: 'Définitions claires des termes du logiciel sur-mesure, de l\'IA et de l\'automatisation pour PME.',
  },
}

export default function GlossaireLayout({ children }: { children: React.ReactNode }) {
  return children
}
