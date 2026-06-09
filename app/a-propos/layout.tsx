import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'À propos — Nathan Goutagny, fondateur de NateSystem',
  description:
    'Nathan Goutagny, ingénieur logiciel & IA appliquée basé à Lyon. Fondateur de NateSystem. Des années à construire des systèmes opérationnels sur-mesure pour des PME françaises et hongroises — restauration, enseignement supérieur, conseil.',
  alternates: { canonical: 'https://www.natesystem.com/a-propos' },
  openGraph: {
    title: 'À propos — Nathan Goutagny, fondateur de NateSystem',
    description:
      'Ingénieur logiciel & IA appliquée à Lyon. Fondateur de NateSystem. Si vous me parlez, c\'est moi qui code derrière — pas un commercial, pas un junior.',
    url: 'https://www.natesystem.com/a-propos',
    type: 'profile',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'À propos — Nathan Goutagny, fondateur de NateSystem',
    description: 'Ingénieur logiciel & IA appliquée à Lyon. Fondateur de NateSystem.',
  },
}

// Person JSON-LD — E-E-A-T anchor. Articles' author links resolve here; AI
// engines read this to attribute expertise to a real, identified person.
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://www.natesystem.com/a-propos#nathan',
  name: 'Nathan Goutagny',
  url: 'https://www.natesystem.com/a-propos',
  image: 'https://www.natesystem.com/nathan.png',
  jobTitle: 'Fondateur · Ingénieur logiciel & IA appliquée',
  worksFor: { '@id': 'https://www.natesystem.com/#organization' },
  homeLocation: { '@type': 'Place', name: 'Lyon, France' },
  sameAs: ['https://www.linkedin.com/in/nathan-goutagny'],
  knowsAbout: [
    'Logiciel métier sur-mesure',
    'Intégration de l\'IA en entreprise',
    'IA agentique',
    'Automatisation des processus',
    'Data analytics',
    'Architecture logicielle',
    'PME',
  ],
  email: 'nathan@natesystem.com',
}

export default function AProposLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      {children}
    </>
  )
}
