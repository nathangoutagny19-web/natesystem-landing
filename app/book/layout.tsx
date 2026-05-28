import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Réserver un audit 30 min — NateSystem',
  description:
    'Audit opérationnel gratuit de 30 minutes : on cartographie votre activité, on identifie où l\'IA et le logiciel sur-mesure font gagner de vraies heures, vous repartez avec un plan chiffré.',
  alternates: { canonical: 'https://www.natesystem.com/book' },
  openGraph: {
    title: 'Réserver un audit 30 min — NateSystem',
    description:
      'Audit opérationnel gratuit. Vous repartez avec un plan chiffré, même si on ne travaille pas ensemble.',
    url: 'https://www.natesystem.com/book',
    type: 'website',
  },
}

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return children
}
