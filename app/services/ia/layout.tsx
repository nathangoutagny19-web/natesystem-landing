import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Automatisation pour l\'hôtellerie de prestige, votre équipe décide | NateSystem',
  description:
    'Première réponse dans la langue du client, reconfirmations, relances d\'acompte, fils WhatsApp transformés en demandes claires. L\'outil propose, une personne de votre équipe décide. Données hébergées en UE. Appel offert.',
  keywords: [
    'automatisation hôtellerie de luxe',
    'automatisation conciergerie de luxe',
    'réponse automatique demandes clients multilingue',
    'reconfirmation prestataires automatique',
    'relance acompte automatique',
    'WhatsApp demandes clients hôtellerie',
  ],
  alternates: { canonical: 'https://www.natesystem.com/services/ia' },
  openGraph: {
    title: 'Automatisation pour l\'hôtellerie de prestige, votre équipe décide | NateSystem',
    description:
      'Chaque demande reçoit une première réponse dans la langue du client. Reconfirmations et relances partent seules. L\'outil propose, une personne décide.',
    url: 'https://www.natesystem.com/services/ia',
    type: 'website',
    locale: 'fr_FR',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'NateSystem' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Automatisation pour l\'hôtellerie de prestige, votre équipe décide | NateSystem',
    description: 'Plus une demande qui attend sa réponse. L\'outil propose, votre équipe décide.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.natesystem.com/services/ia#service',
      name: 'Automatisation pour l\'hôtellerie de prestige',
      provider: { '@id': 'https://www.natesystem.com/#organization' },
      areaServed: ['FR', 'HU', 'EU'],
      serviceType: 'Automatisation : première réponse multilingue, structuration des demandes WhatsApp, reconfirmations des prestataires, relances d\'acompte',
      audience: { '@type': 'BusinessAudience', audienceType: 'Organisations de l\'hôtellerie de luxe et de prestige : villas, chalets et domaines, conciergeries de luxe, yachts, hôtels indépendants, lieux de réception et de séminaires, services VIP privés' },
      description:
        'Automatisation des tâches répétitives d\'une organisation de prestige : première réponse à chaque demande dans la langue du client, fils WhatsApp transformés en demandes structurées, reconfirmations du chauffeur, du chef et du ménage, relances d\'acompte en euros ou en dollars. L\'outil propose, une personne de l\'équipe décide. Les clients ne remplissent aucun formulaire. Données hébergées en UE.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Que peut-on automatiser dans une organisation de prestige ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Les tâches qui reviennent chaque jour et ne demandent pas de jugement : accuser réception d\'une demande dans la langue du client, transformer un fil WhatsApp en demande structurée prête pour le devis, reconfirmer le chauffeur, le chef ou l\'équipe de ménage, relancer un acompte jusqu\'au paiement. On automatise uniquement là où ça rend de vraies heures.',
          },
        },
        {
          '@type': 'Question',
          name: 'L\'automatisation remplace-t-elle mon équipe ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Non. L\'outil prépare, une personne de votre équipe relit et décide. Tout ce qui demande du jugement, le ton d\'une réponse, un geste pour un client, une exception, reste entre les mains de votre équipe. Elle passe moins de temps à recopier et à relancer, et plus de temps avec vos clients.',
          },
        },
        {
          '@type': 'Question',
          name: 'Mes clients doivent-ils changer leurs habitudes ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Non. Vos clients écrivent comme d\'habitude, sur WhatsApp, par mail ou par téléphone. Ils ne remplissent aucun formulaire et n\'ont aucun espace à créer. C\'est l\'outil qui structure la demande, pas le client.',
          },
        },
        {
          '@type': 'Question',
          name: 'Mes données et celles de mes clients sont-elles protégées ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Vos données sont hébergées en Europe, conformes RGPD, et restent chez vous en toute discrétion. L\'automatisation tourne sous votre contrôle, et le code vous appartient à 100 %.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.natesystem.com' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.natesystem.com/services' },
        { '@type': 'ListItem', position: 3, name: 'Automatisation', item: 'https://www.natesystem.com/services/ia' },
      ],
    },
  ],
}

export default function IaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}
