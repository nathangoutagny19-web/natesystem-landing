import type { Metadata } from 'next'

/**
 * LA CARTE DE PARTAGE DE LA HOME.
 *
 * Posée ici, sur la page, et pas dans le layout racine : le layout sert les
 * 160 pages du site, et un article de blog sur les ERP n'a rien à faire avec
 * une carte « écoles privées ». Seule la home change, le reste garde
 * /og-image.png.
 *
 * Next remplace l'objet `openGraph` du parent, il ne le fusionne pas champ par
 * champ : tout ce qu'on veut garder est réécrit ici. `title` n'est pas touché,
 * donc l'onglet du navigateur reste français.
 *
 * ⚠︎ LinkedIn garde les cartes en cache. Après déploiement, passer l'URL dans
 * le Post Inspector (linkedin.com/post-inspector) pour forcer le rafraîchissement,
 * sinon l'ancienne carte ressort pendant des jours.
 */
export const metadata: Metadata = {
  openGraph: {
    type: 'website',
    url: 'https://www.natesystem.com',
    siteName: 'NateSystem',
    title: 'Custom platforms for private schools | NateSystem',
    description:
      'Give your school administration 30 hours a month back. Custom software built on your calendar, your collective agreement, your sites. You own the code, hosted in the EU.',
    images: [
      {
        url: '/og-schools.png',
        width: 1200,
        height: 630,
        alt: 'NateSystem, custom platforms for private schools',
      },
    ],
    locale: 'en_US',
    alternateLocale: ['fr_FR', 'hu_HU'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom platforms for private schools | NateSystem',
    description: 'Give your school administration 30 hours a month back.',
    images: ['/og-schools.png'],
  },
}

import Nav from '@/components/layout/Nav'
import MobileCta from '@/components/layout/MobileCta'
import WorkTogetherPrompt from '@/components/layout/WorkTogetherPrompt'
import Hero from '@/components/home/Hero'
import Transformation from '@/components/home/Transformation'
import BrandFilm from '@/components/home/BrandFilm'
import CredibilityBand from '@/components/home/CredibilityBand'
import ClientsBar from '@/components/home/ClientsBar'
import Systems from '@/components/home/Systems'
import CaseStudy from '@/components/home/CaseStudy'
import MiniDiagnosticCta from '@/components/home/MiniDiagnosticCta'
import WhatWeDo from '@/components/home/WhatWeDo'
import Process from '@/components/home/Process'
import Different from '@/components/home/Different'
import Sectors from '@/components/home/Sectors'
import FunnyGuarantee from '@/components/home/FunnyGuarantee'
import Faq from '@/components/home/Faq'
import CtaFinal from '@/components/home/CtaFinal'
import AskAI from '@/components/home/AskAI'
import SprintDiagnostic from '@/components/v2/SprintDiagnostic'
import ComparisonV2 from '@/components/v2/ComparisonV2'
import Footer from '@/components/layout/Footer'
import Divider from '@/components/ui/Divider'

/**
 * HOME, remodelage inspiré OpsKings/Frontal, sauce NateSystem.
 * Le HAUT (Hero → mini-diagnostic → vidéo témoignage Chromosome) est validé.
 * Corps : Ce qu'on fait → Comment on travaille (→ /methode) → Ce qu'on construit
 *   → Cas concrets chiffrés → Ce qui nous rend différents (vidéo) → Le Diagnostic
 *   (offre) + secteurs → prise de RDV (Cal.com) → comparatif → garanties → FAQ →
 *   IA → crédibilité. « Qui code » (Nathan) est déplacé dans le footer.
 */
export default function Home() {
  return (
    <main>
      <Nav />

      {/* ─────────── HAUT VALIDÉ (jusqu'à la vidéo témoignage) ─────────── */}

      {/* 1, Hero : promesse business + VSL */}
      <Hero />

      {/* 2, Logos clients */}
      <ClientsBar />
      <Divider />

      {/* 3, Avant/Après (diagonale) + bascule « ils sont de l'autre côté » */}
      <Transformation />

      {/* 3a, le film de marque, 36 s. Il reprend la phrase de la section
          ci-dessus, volontairement : il la met en mouvement, il ne la
          remplace pas. Contenu à 680 px, pas pleine largeur. Français
          uniquement, le texte est incrusté dans l'image. */}
      <BrandFilm />
      <Divider />

      {/* 3b, Bandeau « Déployé. Mesuré. Rentabilisé. » (Systems) + CTA « Je veux le mien » */}
      <Systems />
      <Divider />

      {/* 4, La preuve : vidéo témoignage Chromosome */}
      <CaseStudy />

      {/* 4b, Encart mini-diagnostic gratuit, juste après le témoignage (plus petit) */}
      <MiniDiagnosticCta />
      <Divider />

      {/* ─────────── CORPS REMODELÉ ─────────── */}

      {/* 5, Ce qu'on fait (What we do) : 4 piliers */}
      <WhatWeDo />
      <Divider />

      {/* 6, Comment on travaille (méthode résumée) + CTA vers /methode détaillée */}
      <Process home />
      <Divider />

      {/* 8, Ce qui nous rend différents : vidéo + différenciateurs */}
      <Different />
      <Divider />

      {/* 9b, Bandeau crédibilité (4 engagements), juste sous « Ce qui nous rend
             différents » (choix Nathan). [[À CONFIRMER : bandeau = crédibilité ?]] */}
      <CredibilityBand />
      <Divider />

      {/* 10, Commence maintenant : l'offre d'entrée « Le Diagnostic » */}
      <SprintDiagnostic />

      {/* 11, Embed Cal.com SEUL (entête retirée), juste après l'offre d'entrée */}
      <CtaFinal />
      <Divider />

      {/* 12, Les secteurs qu'on sert (sélecteur interactif) */}
      <Sectors />
      <Divider />

      {/* 13, Comparatif honnête 4 colonnes */}
      <ComparisonV2 />
      <Divider />

      {/* 14, FAQ */}
      <Faq />
      <Divider />

      {/* 15, La garantie « funny » (clin d'œil resto), déplacée tout à la fin,
             juste avant « Demandez à l'IA » (choix Nathan). */}
      <FunnyGuarantee />
      <Divider />

      {/* 16, Demandez à l'IA : preuve sociale via IA */}
      <AskAI />

      {/* Footer, inclut désormais le bloc fondateur (Nathan + LinkedIn) en bas-gauche */}
      <Footer />

      <MobileCta />
      <WorkTogetherPrompt />
    </main>
  )
}
