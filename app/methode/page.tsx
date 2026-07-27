import type { Metadata } from 'next'
import MethodeContent from '@/components/methode/MethodeContent'

export const metadata: Metadata = {
  title: 'Notre approche — On radiographie votre activité avant de construire | NateSystem',
  description:
    'La méthode NateSystem en 4 temps : cartographier, unifier, automatiser, former. On comprend d\'abord où partent vos heures et votre argent — puis on construit le logiciel sur-mesure qui les récupère. Vous êtes propriétaire du code.',
  alternates: { canonical: 'https://www.natesystem.com/methode' },
}

const methodeJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.natesystem.com/methode#page',
      name: 'Notre approche',
      description:
        'La méthode NateSystem : on radiographie votre activité (cartographier, unifier, automatiser, former) avant de construire quoi que ce soit.',
      isPartOf: { '@id': 'https://www.natesystem.com/#organization' },
    },
    {
      '@type': 'HowTo',
      name: 'La méthode NateSystem en 4 temps',
      description: 'Comment NateSystem transforme une activité éparpillée en un système sur-mesure que l\'équipe pilote.',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Cartographier', text: 'On met à plat comment votre activité tourne réellement — chaque tâche, chaque outil, chaque donnée.' },
        { '@type': 'HowToStep', position: 2, name: 'Unifier', text: 'Vos données éparpillées reviennent dans une seule base conçue pour votre métier.' },
        { '@type': 'HowToStep', position: 3, name: 'Automatiser', text: 'L\'IA et l\'automatisation prennent le répétitif, uniquement là où elles remplacent de vraies heures.' },
        { '@type': 'HowToStep', position: 4, name: 'Former', text: 'Votre équipe pilote l\'outil, la documentation est complète, 100 % du code vous appartient.' },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.natesystem.com' },
        { '@type': 'ListItem', position: 2, name: 'Notre approche', item: 'https://www.natesystem.com/methode' },
      ],
    },
  ],
}

export default function MethodePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(methodeJsonLd) }} />
      <MethodeContent />
    </>
  )
}
