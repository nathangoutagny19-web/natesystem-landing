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
 * HOME — remodelage inspiré OpsKings/Frontal, sauce NateSystem.
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

      {/* 1 — Hero : promesse business + VSL */}
      <Hero />

      {/* 2 — Logos clients */}
      <ClientsBar />
      <Divider />

      {/* 3 — Avant/Après (diagonale) + bascule « ils sont de l'autre côté » */}
      <Transformation />

      {/* 3b — Encart mini-diagnostic gratuit, sous la bascule */}
      <MiniDiagnosticCta />

      {/* 4 — La preuve : vidéo témoignage Chromosome */}
      <CaseStudy />
      <Divider />

      {/* ─────────── CORPS REMODELÉ ─────────── */}

      {/* 5 — Ce qu'on fait (What we do) : 4 piliers */}
      <WhatWeDo />
      <Divider />

      {/* 6 — Comment on travaille (méthode résumée) + CTA vers /methode détaillée */}
      <Process />
      <Divider />

      {/* 7 — Ce qu'on construit (What we ship) : bande de mockups anonymisés */}
      <WhatWeBuild />
      <Divider />

      {/* 8 — Ce qui nous rend différents : vidéo + différenciateurs */}
      <Different />
      <Divider />

      {/* 9b — Bandeau crédibilité (4 engagements), juste sous « Ce qui nous rend
             différents » (choix Nathan). [[À CONFIRMER : bandeau = crédibilité ?]] */}
      <CredibilityBand />
      <Divider />

      {/* 10 — Commence maintenant : l'offre d'entrée « Le Diagnostic » */}
      <SprintDiagnostic />

      {/* 11 — Embed Cal.com SEUL (entête retirée), juste après l'offre d'entrée */}
      <CtaFinal />
      <Divider />

      {/* 12 — Les secteurs qu'on sert (sélecteur interactif) */}
      <Sectors />
      <Divider />

      {/* 12b — Exemples de solutions déployées dans ces secteurs (Systems),
             déplacé juste sous les secteurs (choix Nathan). */}
      <Systems />
      <Divider />

      {/* 13 — Comparatif honnête 4 colonnes */}
      <ComparisonV2 />
      <Divider />

      {/* 13 — La garantie « funny » (clin d'œil resto) — la section Garanties
             fermes a été retirée, on garde juste ce clin d'œil humain. */}
      <FunnyGuarantee />
      <Divider />

      {/* 14 — FAQ */}
      <Faq />
      <Divider />

      {/* 15 — Demandez à l'IA : preuve sociale via IA */}
      <AskAI />

      {/* Footer — inclut désormais le bloc fondateur (Nathan + LinkedIn) en bas-gauche */}
      <Footer />

      <MobileCta />
      <WorkTogetherPrompt />
    </main>
  )
}
