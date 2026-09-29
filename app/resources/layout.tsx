import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ressources, guides, cas clients et démos NateSystem',
  description:
    'Cas clients vérifiés, guides pratiques et ressources pour les dirigeants qui veulent intégrer l\'IA et le logiciel sur-mesure dans leur PME.',
  alternates: { canonical: 'https://www.natesystem.com/resources' },
  openGraph: {
    title: 'Ressources NateSystem, guides, cas clients et démos',
    description:
      'Cas clients vérifiés, guides pratiques et ressources pour les dirigeants de PME.',
    url: 'https://www.natesystem.com/resources',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'NateSystem' }],
  },
}

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return children
}
