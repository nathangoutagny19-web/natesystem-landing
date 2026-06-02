import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Réserver 20 min · offert — NateSystem',
  description:
    'Appel de consulting offert, 20 minutes : on évalue ensemble si on peut bosser ensemble. Vous repartez avec une roadmap IA sur-mesure, même si on ne travaille pas ensemble.',
  alternates: { canonical: 'https://www.natesystem.com/book' },
  openGraph: {
    title: 'Réserver 20 min · offert — NateSystem',
    description:
      'Appel de consulting offert. Vous repartez avec une roadmap IA, même si on ne travaille pas ensemble.',
    url: 'https://www.natesystem.com/book',
    type: 'website',
  },
}

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return children
}
