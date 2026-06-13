import type { Metadata } from 'next'
import { DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { LangProvider } from '@/components/providers/LangProvider'
import WhatsAppFloat from '@/components/layout/WhatsAppFloat'
import CookieConsent from '@/components/site/CookieConsent'

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
  title: 'NateSystem — Logiciel sur-mesure propulsé par l\'IA',
  description:
    'Le logiciel sur-mesure qui pilote votre activité, propulsé par l\'IA — intelligence artificielle agentique, automatisation, data analytics — là où elle remplace de vraies heures de travail. Vos données, votre infrastructure, votre code.',
  keywords: [
    'logiciel sur-mesure IA',
    'IA intégrée logiciel métier',
    'intelligence artificielle agentique PME',
    'automatisation IA entreprise',
    'data analytics PME',
    'infrastructure IA souveraine',
    'command center métier',
    'alternative SaaS PME',
    'NateSystem',
    'Nathan Goutagny',
  ],
  authors: [{ name: 'Nathan Goutagny', url: 'https://www.natesystem.com' }],
  creator: 'Nathan Goutagny',
  metadataBase: new URL('https://www.natesystem.com'),
  alternates: {
    canonical: 'https://www.natesystem.com',
    languages: {
      'fr-FR': 'https://www.natesystem.com',
      'en-US': 'https://www.natesystem.com',
      'hu-HU': 'https://www.natesystem.com',
    },
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: 'https://www.natesystem.com',
    title: 'NateSystem — Logiciel sur-mesure propulsé par l\'IA',
    description:
      'Le logiciel sur-mesure qui pilote votre activité, propulsé par l\'IA — agentique, automatisation, data analytics — là où ça compte. Vos données, votre infrastructure, votre code.',
    siteName: 'NateSystem',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'NateSystem' }],
    locale: 'fr_FR',
    alternateLocale: ['en_US', 'hu_HU'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NateSystem — Logiciel sur-mesure propulsé par l\'IA',
    description: 'Le logiciel sur-mesure qui pilote votre activité, propulsé par l\'IA là où ça compte.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${dmSans.variable} ${jetbrainsMono.variable} light`} suppressHydrationWarning>
      <head>
        {/* Organization + LocalBusiness schema (JSON-LD) — invisible to users,
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
              url: 'https://www.natesystem.com',
              email: 'nathan@natesystem.com',
              description:
                'NateSystem construit le logiciel sur-mesure qui pilote votre activité, propulsé par l\'IA — IA agentique, automatisation, data analytics. Vos données, votre infrastructure, votre code. Hébergé en UE, RGPD-natif.',
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
        {/* FAQPage schema (JSON-LD) — mirrors the home FAQ section verbatim (FR).
            Eligible for FAQ rich results and feeds AI answer engines. Invisible. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  q: 'Qu\'est-ce que vous construisez concrètement ?',
                  a: 'Du logiciel métier sur-mesure — la plateforme interne qui fait tourner vos opérations. Base unifiée, dashboards, portails clients, outils internes. L\'IA et l\'automatisation sont intégrées uniquement là où elles remplacent de vraies heures de travail, pas en décoration.',
                },
                {
                  q: 'Combien de temps ça prend ?',
                  a: '4 à 8 semaines pour la première version, selon le périmètre. On s\'accorde sur un périmètre fixe et une date de livraison fixe avant la première ligne de code. Points hebdo, démos mensuelles, zéro dérive, zéro facture surprise. Le pricing est partagé pendant l\'appel de découverte pour coller à vos vrais besoins.',
                },
                {
                  q: 'Le système restera-t-il fiable une fois en production ?',
                  a: '99,9 % de SLA de disponibilité en production. Monitoring actif avec alertes automatiques, sauvegardes automatiques toutes les 6 heures stockées sur deux régions, 24 h de fenêtre de réponse sur les incidents critiques. Après la période de 90 jours post-lancement, vous choisissez : un contrat de maintenance, ou une passation complète avec documentation à votre équipe.',
                },
                {
                  q: 'Quelles automatisations et fonctionnalités IA peuvent être intégrées ?',
                  a: 'Là où ça fait gagner de vraies heures. Les classiques : workflows automatisés (commandes, factures, relances, passations internes), analytics prédictif (anticiper stock, no-shows, tendances de ventes), lecture de documents (factures, contrats, formulaires), tri intelligent (classer, router, rédiger des réponses), agents autonomes qui exécutent des tâches multi-étapes dans vos outils, et interfaces conversationnelles pour vos équipes ou vos clients. On choisit ce qui vaut le coup pour vous — pas tout parce que c\'est à la mode.',
                },
                {
                  q: 'Et si vous disparaissez demain ?',
                  a: '100 % du code vous appartient et est hébergé sur votre infrastructure. Documentation complète incluse. N\'importe quel développeur compétent peut reprendre derrière. Zéro abonnement, zéro lock-in, zéro otage.',
                },
                {
                  q: 'Est-ce que ça marche pour mon secteur ?',
                  a: 'Restauration, conseil, BTP, santé, retail — partout où il y a des opérations récurrentes et de la vraie donnée qui y circule. La stack s\'adapte. La méthode ne change pas.',
                },
              ].map((item) => ({
                '@type': 'Question',
                name: item.q,
                acceptedAnswer: { '@type': 'Answer', text: item.a },
              })),
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
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='12' fill='%231a1a1a'/%3E%3Ctext x='12' y='48' font-family='Georgia,serif' font-style='italic' font-size='46' font-weight='bold' fill='white'%3EN%3C/text%3E%3Ccircle cx='49' cy='46' r='4' fill='%23E63946'/%3E%3C/svg%3E"
        />
        {/* Inline theme script — runs before paint to prevent flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('ns-theme');if(t==='light'||t==='dark'){document.documentElement.classList.toggle('light',t==='light')}else{document.documentElement.classList.add('light');localStorage.setItem('ns-theme','light')}}catch(e){}})()`,
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
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
