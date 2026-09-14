import type { Metadata } from 'next'
import MethodeContent from '@/components/methode/MethodeContent'

export const metadata: Metadata = {
  title: 'Notre approche, On radiographie votre activité avant de construire | NateSystem',
  description:
    'La méthode NateSystem en 4 temps : cartographier, unifier, automatiser, former. On comprend d\'abord où partent vos heures et votre argent, puis on construit le logiciel sur-mesure qui les récupère. Vous êtes propriétaire du code.',
  alternates: {
    canonical: 'https://www.natesystem.com/methode',
    languages: {
      'fr-FR': 'https://www.natesystem.com/methode',
      en: 'https://www.natesystem.com/en/methode',
      'x-default': 'https://www.natesystem.com/methode',
    },
  },
}

/**
 * Le JSON-LD suit la langue : servi depuis /en, il déclarait une WebPage
 * française dont l'@id et le fil d'ariane pointaient vers l'arbre français.
 */
function methodeJsonLd(lang: 'fr' | 'en') {
  const base = 'https://www.natesystem.com'
  const root = lang === 'en' ? `${base}/en` : base
  const en = lang === 'en'

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${root}/methode#page`,
        name: en ? 'Our method' : 'Notre approche',
        description: en
          ? 'The NateSystem method: we X-ray your business (map, unify, automate, train) before building anything at all.'
          : 'La méthode NateSystem : on radiographie votre activité (cartographier, unifier, automatiser, former) avant de construire quoi que ce soit.',
        inLanguage: lang,
        isPartOf: { '@id': `${base}/#organization` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: en ? 'Home' : 'Accueil', item: root },
          { '@type': 'ListItem', position: 2, name: en ? 'Our method' : 'Notre approche', item: `${root}/methode` },
        ],
      },
    ],
  }
}

export function MethodeRoute({ lang }: { lang: 'fr' | 'en' }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(methodeJsonLd(lang)) }} />
      <MethodeContent />
    </>
  )
}

export default function MethodePage() {
  return <MethodeRoute lang="fr" />
}
