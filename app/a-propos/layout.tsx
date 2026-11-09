import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'À propos, Nathan Goutagny, fondateur de NateSystem',
  description:
    'NateSystem construit des logiciels sur mesure pour l’hospitalité de luxe, et ils appartiennent à leurs clients. Fondé par Nathan Goutagny, basé au Monténégro et en France.',
  alternates: { canonical: 'https://www.natesystem.com/a-propos' },
  openGraph: {
    title: 'À propos, Nathan Goutagny, fondateur de NateSystem',
    description:
      'Logiciels sur mesure pour l’hospitalité de luxe. Fondé par Nathan Goutagny : celui qui vous écoute est celui qui code.',
    url: 'https://www.natesystem.com/a-propos',
    type: 'profile',
    locale: 'fr_FR',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'NateSystem' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'À propos, Nathan Goutagny, fondateur de NateSystem',
    description: 'Logiciels sur mesure pour l’hospitalité de luxe. Fondé par Nathan Goutagny.',
  },
}

// Person JSON-LD, E-E-A-T anchor. Articles' author links resolve here; AI
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
  homeLocation: { '@type': 'Place', name: 'Tivat, Montenegro' },
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
