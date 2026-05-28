import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ressources — Guides, cas clients & playbooks NateSystem',
  description:
    'Cas clients vérifiés, guides pratiques et ressources pour les dirigeants qui veulent intégrer l\'IA et le logiciel sur-mesure dans leur PME.',
  alternates: { canonical: 'https://www.natesystem.com/resources' },
  openGraph: {
    title: 'Ressources NateSystem — Guides, cas clients & playbooks',
    description:
      'Cas clients vérifiés, guides pratiques et ressources pour les dirigeants de PME.',
    url: 'https://www.natesystem.com/resources',
    type: 'website',
  },
}

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return children
}
