import type { Metadata } from 'next'

import Nav from '@/components/layout/Nav'
import MobileCta from '@/components/layout/MobileCta'
import WorkTogetherPrompt from '@/components/layout/WorkTogetherPrompt'
import Footer from '@/components/layout/Footer'
import Divider from '@/components/ui/Divider'

// Reused home sections (imported, never modified — see REFONTE-2026-07.md).
import ClientsBar from '@/components/home/ClientsBar'
import Constat from '@/components/home/Constat'
import CostPain from '@/components/home/CostPain'
import Quantification from '@/components/home/Quantification'
import Process from '@/components/home/Process'
import Systems from '@/components/home/Systems'
import CaseStudy from '@/components/home/CaseStudy'
import WhatWeBuild from '@/components/home/WhatWeBuild'
import AboutNathan from '@/components/home/AboutNathan'
import Guarantees from '@/components/home/Guarantees'
import Faq from '@/components/home/Faq'

// New v2 sections.
import HeroV2 from '@/components/v2/HeroV2'
import SprintDiagnostic from '@/components/v2/SprintDiagnostic'
import SectorPain from '@/components/v2/SectorPain'
import ComparisonV2 from '@/components/v2/ComparisonV2'
import CtaFinalV2 from '@/components/v2/CtaFinalV2'

// Alternative home for internal comparison — MUST NEVER be indexed (the real
// home is heavily SEO-worked). No canonical, no sitemap, no crawl.
export const metadata: Metadata = {
  title: 'NateSystem — v2 (aperçu interne)',
  robots: { index: false, follow: false },
}

/**
 * /v2 — version alternative de la home (positionnement résultat > livrable).
 * Plan : REFONTE-2026-07.md §4.4. La home actuelle (app/page.tsx) est intacte.
 * Ordre : Hero → Logos → Constat → Coût → Méthode → Sprint Diagnostic →
 * Cas concrets → Chromosome → Ce qu'on construit → Pour votre métier →
 * Comparaison 4 col → Qui construit → Garantie → FAQ → CTA.
 */
export default function HomeV2() {
  return (
    <main>
      <Nav />

      {/* 1 — Hero : le résultat, le modèle en 3 temps, une preuve, UN CTA */}
      <HeroV2 />

      {/* 2 — Logos clients */}
      <ClientsBar />
      <Divider />

      {/* 3 — Le constat + ce que ça coûte au quotidien (2ᵉ personne) */}
      <Constat />
      <CostPain />
      <Divider />

      {/* 4 — Le chiffre de la perte + passerelle diagnostic */}
      <Quantification />
      <Divider />

      {/* 5 — La méthode, remontée tôt pour rassurer */}
      <Process />
      <Divider />

      {/* 6 — L'offre d'entrée nommée */}
      <SprintDiagnostic />
      <Divider />

      {/* 7 — Cas concrets chiffrés (Systems = les ~11 cas) + 8 — Chromosome */}
      <Systems />
      <CaseStudy />
      <Divider />

      {/* 9 — Ce qu'on construit (écrans réels) */}
      <WhatWeBuild />
      <Divider />

      {/* 10 — Pour votre métier : mêmes problèmes, langages différents */}
      <SectorPain />
      <Divider />

      {/* 11 — La comparaison honnête, 4 colonnes */}
      <ComparisonV2 />
      <Divider />

      {/* 12 — Qui construit (le bus factor est traité dans la note fondateur) */}
      <AboutNathan />
      <Divider />

      {/* 13 — La garantie, en section pleine (⚠️ termes à valider — voir récap) */}
      <Guarantees />
      <Divider />

      {/* 14 — FAQ */}
      <Faq />
      <Divider />

      {/* 15 — CTA final : Démarrer le Sprint Diagnostic (embed Cal.com) */}
      <CtaFinalV2 />

      <Footer />

      <MobileCta />
      <WorkTogetherPrompt />
    </main>
  )
}
