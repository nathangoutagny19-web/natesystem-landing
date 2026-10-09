import type { Metadata } from 'next'
import { DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { LangProvider } from '@/components/providers/LangProvider'
import WhatsAppFloat from '@/components/layout/WhatsAppFloat'
import CookieConsent from '@/components/site/CookieConsent'
import PointerGlow from '@/components/ui/PointerGlow'
import { Analytics } from '@vercel/analytics/next'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'NateSystem, logiciel sur mesure pour l’hospitalité de luxe et de prestige',
  description:
    'Logiciel sur mesure, image en ligne et données suivies pour villas, chalets, domaines, conciergeries, yachts, hôtels indépendants et maisons de réception. Une seule saisie, et toute votre organisation suit. Un partenariat dans la durée, le code vous appartient.',
  keywords: [
    'logiciel sur mesure conciergerie de luxe',
    'logiciel gestion villa de luxe',
    'logiciel maison de réception',
    'logiciel hôtel de groupe sur mesure',
    'site internet conciergerie de luxe',
    'suivi des demandes clients hospitalité',
    'NateSystem',
    'Nathan Goutagny',
  ],
  authors: [{ name: 'Nathan Goutagny', url: 'https://www.natesystem.com' }],
  creator: 'Nathan Goutagny',
  metadataBase: new URL('https://www.natesystem.com'),
  alternates: {
    canonical: 'https://www.natesystem.com',
    /* 08/09/2026 — LE HREFLANG ANGLAIS EST RÉTABLI.
       Il avait été retiré parce que les deux langues partageaient une seule
       URL : déclarer 'en' vers la même adresse est invalide, et une
       déclaration invalide vaut moins que pas de déclaration. L'anglais a
       maintenant ses propres routes sous /en, donc la déclaration redevient
       vraie. x-default pointe sur le français, qui reste la version servie
       par défaut. */
    languages: {
      'fr-FR': 'https://www.natesystem.com',
      en: 'https://www.natesystem.com/en',
      hu: 'https://www.natesystem.com/hu',
      'x-default': 'https://www.natesystem.com',
    },
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: 'https://www.natesystem.com',
    title: 'NateSystem, logiciel sur mesure pour l’hospitalité de luxe et de prestige',
    description:
      'Votre façon de recevoir vos clients est unique. Votre logiciel devrait l’être aussi. Logiciel, image en ligne et données suivies, dans un partenariat qui évolue avec vous.',
    siteName: 'NateSystem',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'NateSystem' }],
    locale: 'fr_FR',
    alternateLocale: ['en_US', 'hu_HU'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NateSystem, logiciel sur mesure pour l’hospitalité de luxe et de prestige',
    description: 'Votre façon de recevoir vos clients est unique. Votre logiciel devrait l’être aussi.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${dmSans.variable} ${jetbrainsMono.variable} light`} suppressHydrationWarning>
      <head>
        {/* Organization + LocalBusiness schema (JSON-LD), invisible to users,
            powers Google rich results and AI citability (ChatGPT / Perplexity /
            AI Overviews). Knowledge-graph anchor for the whole site. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              '@id': 'https://www.natesystem.com/#organization',
              name: 'NateSystem',
              alternateName: 'Nate System',
              url: 'https://www.natesystem.com',
              email: 'nathan@natesystem.com',
              logo: 'https://www.natesystem.com/logo.png',
              image: 'https://www.natesystem.com/logo.png',
              description:
                'NateSystem construit le logiciel sur-mesure qui pilote votre activité, propulsé par l\'IA, IA agentique, automatisation, data analytics. Vos données, votre infrastructure, votre code. Hébergé en UE, RGPD-natif.',
              founder: {
                '@type': 'Person',
                name: 'Nathan Goutagny',
                jobTitle: 'Fondateur · Ingénieur logiciel & IA appliquée',
                url: 'https://www.natesystem.com',
              },
              areaServed: ['FR', 'HU', 'EU'],
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Lyon',
                addressCountry: 'FR',
              },
              knowsAbout: [
                'Logiciel sur-mesure',
                'Intégration IA en entreprise',
                'IA agentique',
                'Automatisation des processus',
                'Data analytics',
                'Audit IA',
              ],
              slogan: 'Logiciel sur-mesure · IA intégrée · Vous appartient',
            }),
          }}
        />
        {/* Le schema FAQPage vivait ici, donc sur les 160 pages du site, et en
            français y compris sous /en. Il est désormais émis par le composant
            FAQ lui-même (components/home/Faq.tsx) : sur la seule page qui
            l'affiche, dans la langue affichée, et avec exactement le texte que
            le visiteur lit. C'est ce que Google demande, et ça ne peut plus
            diverger du visible. */}
        {/* Instrument Serif from Google Fonts (no next/font support for italic-only) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
        {/* Le site ouvre TOUJOURS en clair. Decision de Nathan, 8 septembre 2026.
            Le theme n'est plus persiste : ce script efface la preference laissee
            par l'ancienne version, sinon un visiteur qui avait bascule en sombre
            une fois rouvrait en sombre pour toujours. Le bouton continue de
            fonctionner, mais seulement pour la session en cours. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var d=document.documentElement;d.classList.add('light');d.classList.remove('dark');localStorage.removeItem('ns-theme')}catch(e){}})()`,
          }}
        />
        {/* Cookie consent & all analytics/tracking (GA4, Clarity, Leadsy/Instantly)
            are now handled by the self-hosted <CookieConsent /> component, which
            only injects those scripts AFTER the visitor clicks "Accepter".
            Replaced Iubenda (its autoblocking veil + offscreen buttons broke UX). */}
      </head>
      <body>
        <ThemeProvider>
          <LangProvider>
            <div className="grid-bg" aria-hidden="true" />
            <div className="noise" aria-hidden="true" />
            <div className="content">
              {children}
            </div>
            <WhatsAppFloat />
            <CookieConsent />
            <PointerGlow />
          </LangProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
