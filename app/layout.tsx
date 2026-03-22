import type { Metadata } from 'next'
import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'NateSystem — Scale Operations Without Scaling Headcount',
  description:
    'We deploy intelligent AI systems directly into your operations. Your tools connect, your processes automate, your team focuses on what matters. Results in 90 days.',
  keywords: [
    'infrastructure IA',
    'agents IA PME',
    'automatisation processus',
    'NateSystem',
    'Nathan Goutagny',
    'transformation digitale PME',
    'AI infrastructure France',
  ],
  authors: [{ name: 'Nathan Goutagny', url: 'https://natesystem.com' }],
  creator: 'Nathan Goutagny',
  metadataBase: new URL('https://natesystem.com'),
  alternates: {
    canonical: 'https://natesystem.com',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: 'https://natesystem.com',
    title: 'NateSystem — Scale Operations Without Scaling Headcount',
    description:
      'We deploy intelligent AI systems directly into your operations. Connect your tools, automate your processes, and let your team focus on what matters.',
    siteName: 'NateSystem',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NateSystem — AI Infrastructure for SMEs',
      },
    ],
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NateSystem — Scale Operations Without Scaling Headcount',
    description:
      'We deploy intelligent AI systems directly into your operations.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${montserrat.variable}`}
    >
      <head>
        <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='12' fill='%230A0A0A'/%3E%3Ctext x='10' y='50' font-family='Georgia,serif' font-style='italic' font-size='48' font-weight='400' fill='%23FAF7F2'%3EN%3C/text%3E%3Ccircle cx='50' cy='47' r='5' fill='%23C9A84C'/%3E%3C/svg%3E" />
        <link rel="preconnect" href="https://www.youtube-nocookie.com" />
      </head>
      <body>
        <div className="grid-bg" aria-hidden="true" />
        <div className="noise" aria-hidden="true" />
        <div className="content">
          {children}
        </div>
      </body>
    </html>
  )
}
