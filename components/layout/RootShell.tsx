/* eslint-disable @next/next/no-head-element, @next/next/no-page-custom-font --
   Ce fichier est le <html> des layouts racines de l'App Router, pas un
   _document du Pages Router : ces deux règles ne s'y appliquent pas. */
import { DM_Sans } from 'next/font/google'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import StyledJsxRegistry from '@/components/providers/StyledJsxRegistry'
import { LangProvider } from '@/components/providers/LangProvider'
import WhatsAppFloat from '@/components/layout/WhatsAppFloat'
import CookieConsent from '@/components/site/CookieConsent'
import { Analytics } from '@vercel/analytics/next'
import type { Lang } from '@/lib/i18n'

/**
 * LE SOCLE COMMUN DES TROIS LAYOUTS RACINES (19/11/2026).
 *
 * Le site a trois layouts racines, un par langue : `app/(fr)/layout.tsx`,
 * `app/en/layout.tsx`, `app/hu/layout.tsx`. C'est la seule façon, en
 * Next 14, de servir `<html lang="en">` dès le HTML sous /en : le layout
 * racine est statique et ne connaît pas l'URL. Avant, toutes les pages
 * partaient en `lang="fr"` et un script corrigeait après coup, ce que Bing
 * (donc ChatGPT) ne voit pas forcément.
 *
 * Tout ce qui était dans l'ancien layout racine vit ici, une seule fois.
 * Changer une ligne ici la change dans les trois langues.
 */

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
})

/* JetBrains Mono n'est plus chargée (14 novembre 2026, Nathan : « cette typo
   fait IA, fais un truc plus élégant »). Les étiquettes passent en DM Sans,
   en petites capitales espacées : --font-mono pointe sur DM Sans (globals.css). */

const ORG_TEXT = {
  fr: {
    description:
      'NateSystem construit des logiciels sur mesure pour les métiers du service dans l’hospitalité de luxe : yachting (charter, management, agents et brokers), conciergerie de luxe et travel designers, gestion de propriétés de luxe (villas, chalets, domaines) et hôtels de luxe. Chaque outil est construit autour de la façon dont la maison travaille déjà. Le client possède 100 % du code et des données.',
    jobTitle: 'Fondateur · Ingénieur logiciel',
    slogan: 'Votre façon de servir vos clients est unique. Votre logiciel devrait l’être aussi.',
  },
  en: {
    description:
      'NateSystem builds bespoke software for service businesses in luxury hospitality: yachting (charter, yacht management, agents and brokers), luxury concierge services and travel designers, luxury property management (villas, chalets, estates) and luxury hotels. Each tool is built around the way the business already works. The client owns 100% of the code and data. Based in Tivat, Montenegro.',
    jobTitle: 'Founder · Software engineer',
    slogan: 'The way you serve your clients is unique. Your software should be too.',
  },
} as const

export default function RootShell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  const text = lang === 'fr' ? ORG_TEXT.fr : ORG_TEXT.en

  return (
    <html lang={lang} className={`${dmSans.variable} light`} suppressHydrationWarning>
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
              description: text.description,
              founder: {
                '@type': 'Person',
                name: 'Nathan Goutagny',
                jobTitle: text.jobTitle,
                url: 'https://www.natesystem.com',
              },
              /* Les pays de la carte de la page À propos (Nathan, 14/11/2026). */
              areaServed: ['FR', 'CH', 'HU', 'ME', 'ES', 'US', 'AE'],
              /* La base : Tivat (19/11/2026, « je vais settle down à Tivat »).
                 Ville seulement, aucune adresse de rue inventée. */
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Tivat',
                addressRegion: 'Baie de Kotor',
                addressCountry: 'ME',
              },
              knowsAbout: [
                'Logiciel sur mesure',
                'Bespoke software',
                'Logiciel de gestion de yachts et de charter',
                'Yacht management software',
                'Yacht charter software',
                'Logiciel pour conciergerie de luxe',
                'Luxury concierge software',
                'Logiciel pour travel designers',
                'Gestion de propriétés de luxe : villas, chalets, domaines',
                'Luxury villa management software',
                'Logiciel pour hôtels de luxe',
                'Luxury hotel software',
                'Hospitalité de luxe',
              ],
              slogan: text.slogan,
            }),
          }}
        />
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
            are handled by the self-hosted <CookieConsent /> component, which
            only injects those scripts AFTER the visitor clicks "Accepter". */}
      </head>
      <body>
        <StyledJsxRegistry>
        <ThemeProvider>
          <LangProvider initialLang={lang}>
            {/* La grille de fond et la lueur qui suivait la souris sont retirées
                le 9 novembre 2026 (Nathan : « ça fait site tech »). */}
            <div className="noise" aria-hidden="true" />
            <div className="content">{children}</div>
            <WhatsAppFloat />
            <CookieConsent />
          </LangProvider>
        </ThemeProvider>
        </StyledJsxRegistry>
        <Analytics />
      </body>
    </html>
  )
}
