import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog NateSystem, Logiciel sur-mesure & IA appliquée aux PME',
  description:
    'Analyses, retours d\'expérience et guides pour intégrer l\'IA et le logiciel sur-mesure dans une PME française. Sans buzzword, avec des chiffres et des cas réels.',
  alternates: { canonical: 'https://www.natesystem.com/blog' },
  openGraph: {
    title: 'Blog NateSystem, Logiciel sur-mesure & IA appliquée aux PME',
    description:
      'Analyses, retours d\'expérience et guides pour intégrer l\'IA et le logiciel sur-mesure dans une PME française.',
    url: 'https://www.natesystem.com/blog',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'NateSystem' }],
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children
}
