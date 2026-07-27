import Nav from '@/components/layout/Nav'
import MobileCta from '@/components/layout/MobileCta'
import WorkTogetherPrompt from '@/components/layout/WorkTogetherPrompt'
import Hero from '@/components/home/Hero'
import Transformation from '@/components/home/Transformation'
import CredibilityBand from '@/components/home/CredibilityBand'
import ClientsBar from '@/components/home/ClientsBar'
import WhatWeBuild from '@/components/home/WhatWeBuild'
import Systems from '@/components/home/Systems'
import CaseStudy from '@/components/home/CaseStudy'
import Process from '@/components/home/Process'
import AboutNathan from '@/components/home/AboutNathan'
import Guarantees from '@/components/home/Guarantees'
import Faq from '@/components/home/Faq'
import CtaFinal from '@/components/home/CtaFinal'
import AskAI from '@/components/home/AskAI'
import SprintDiagnostic from '@/components/v2/SprintDiagnostic'
import ComparisonV2 from '@/components/v2/ComparisonV2'
import Footer from '@/components/layout/Footer'
import Divider from '@/components/ui/Divider'

/**
 * HOME — le HAUT (Hero → vidéo Chromosome) est validé par Nathan, on n'y touche pas.
 * Toute la refonte (Lot 3) porte sur ce qui vient APRÈS la vidéo Chromosome :
 *   coût du bordel → offre d'entrée (Sprint Diagnostic) → méthode → secteurs →
 *   comparatif 4 colonnes → qui construit → garanties → FAQ → prise de RDV.
 * Sections retirées de la home : Solutions + Twist (redondantes) et l'ancien
 * Comparison 1v1 (remplacé par ComparisonV2 4 colonnes).
 */
export default function Home() {
  return (
    <main>
      <Nav />

      {/* ─────────── HAUT VALIDÉ — NE PAS TOUCHER (jusqu'à la vidéo Chromosome) ─────────── */}

      {/* 1 — Hero : promesse business immédiate + VSL */}
      <Hero />

      {/* 2 — Logos clients (preuve sociale immédiate, juste sous le hero) */}
      <ClientsBar />

      {/* 2b — "Ce qu'on construit" : bande de mockups anonymisés (blur) */}
      <WhatWeBuild />
      <Divider />

      {/* 3 — Transformation Avant/Après (diagonale) : schéma AVANT + ce qui coûte cher,
             puis résultats + schéma APRÈS, reliés par une flèche dessinée. Le « coût du
             bordel » est désormais fusionné ici (plus de section CostPain séparée). */}
      <Transformation />
      <Divider />

      {/* 4 — Cas concrets : le marquee chiffré + le short témoignage Chromosome */}
      <Systems />
      <CaseStudy />
      <Divider />

      {/* ─────────── REFONTE — APRÈS LA VIDÉO CHROMOSOME (Lot 3) ─────────── */}

      {/* 5 — La méthode en résumé (audit → build → formation → optimisation) */}
      <Process />
      <Divider />

      {/* 6 — L'offre d'entrée « Le Diagnostic » (juste après la méthode) →
             CTA principal vers la prise de RDV + porte self-serve diagnostic. */}
      <SprintDiagnostic />
      <Divider />

      {/* 7 — Comparatif honnête 4 colonnes : Freelance / Agence traditionnelle / SaaS / NateSystem */}
      <ComparisonV2 />
      <Divider />

      {/* 8 — Qui construit : Nathan + le contrepoids (code livré, propriété 100 %) */}
      <AboutNathan />
      <Divider />

      {/* 9 — Les garanties fermes */}
      <Guarantees />
      <Divider />

      {/* 10 — FAQ (reprend "pourquoi maintenant" + le stack technique) */}
      <Faq />
      <Divider />

      {/* 11 — Prise de rendez-vous : embed Cal.com inline (ancre #rendez-vous) — le closer */}
      <CtaFinal />
      <Divider />

      {/* 12 — Demandez à l'IA : preuve sociale via IA */}
      <AskAI />
      <Divider />

      {/* 13 — Bandeau crédibilité : 4 engagements fermes, juste avant le footer */}
      <CredibilityBand />

      <Footer />

      <MobileCta />
      <WorkTogetherPrompt />
    </main>
  )
}
