import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Outils gratuits — Calculateurs, audits & quiz NateSystem',
  description:
    'Outils gratuits pour dirigeants de PME : calculateur de coût SaaS, audit restaurant, quiz IA readiness, calculateur de temps perdu. Sans email obligatoire.',
  alternates: { canonical: 'https://www.natesystem.com/tools' },
  openGraph: {
    title: 'Outils gratuits NateSystem — Calculateurs, audits & quiz',
    description:
      'Outils gratuits pour dirigeants de PME : calculateur de coût SaaS, audit restaurant, quiz IA readiness, calculateur de temps perdu.',
    url: 'https://www.natesystem.com/tools',
    type: 'website',
  },
}

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  return children
}
