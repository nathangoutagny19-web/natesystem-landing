import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Calculateur de Temps Perdu | NateSystem',
  description:
    'Calculez en 10 minutes combien d\'heures et d\'euros votre équipe perd chaque semaine sur des tâches répétitives. Outil gratuit par NateSystem.',
  openGraph: {
    title: 'Calculateur de Temps Perdu | NateSystem',
    description:
      'Découvrez combien coûte le temps perdu de votre équipe sur les tâches répétitives.',
    url: 'https://natesystem.com/tools/calculateur-temps-perdu/',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
