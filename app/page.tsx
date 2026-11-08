import Nav from '@/components/layout/Nav'
import MobileCta from '@/components/layout/MobileCta'
import Hero from '@/components/home/Hero'
import Transformation from '@/components/home/Transformation'
import CredibilityBand from '@/components/home/CredibilityBand'
import ClientsBar from '@/components/home/ClientsBar'
import Systems from '@/components/home/Systems'
import Testimonials from '@/components/home/Testimonials'
import MiniDiagnosticCta from '@/components/home/MiniDiagnosticCta'
import WhatWeDo from '@/components/home/WhatWeDo'
import Different from '@/components/home/Different'
import Sectors from '@/components/home/Sectors'
import Faq from '@/components/home/Faq'
import CtaFinal from '@/components/home/CtaFinal'
import ComparisonV2 from '@/components/v2/ComparisonV2'
import StatementBand from '@/components/home/StatementBand'
import AskAI from '@/components/home/AskAI'
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

      {/* Bande noire de positionnement, juste sous les logos et avant les
          secteurs (Nathan, 8 novembre 2026 : « mets avant les secteurs »). */}
      <StatementBand />

      {/* Les secteurs, juste après la bande (Nathan, 8 novembre 2026) :
          le visiteur voit tout de suite si on parle de son métier. */}
      <Sectors />
      <Divider />

      {/* 3, Avant/Après (diagonale) + bascule « ils sont de l'autre côté » */}
      <Transformation />

      {/* Le film de marque « Déployé. Mesuré. Rentabilisé. » (BrandFilm) est
          retiré de l'accueil le 8 novembre 2026 (Nathan). Il affichait aussi
          « En production en 4 à 8 semaines », une durée qu'on ne promet plus. */}

      {/* 3b, Bandeau « Déployé. Mesuré. Rentabilisé. » (Systems) + CTA « Je veux le mien » */}
      <Systems />
      <Divider />

      {/* 4, La preuve : les témoignages, mot pour mot (8 novembre 2026). Le
          carrousel de cas et ses vidéos sont partis sur /case-studies. */}
      <Testimonials />

      {/* 4b, Encart mini-diagnostic gratuit, juste après le témoignage (plus petit) */}
      <MiniDiagnosticCta />
      <Divider />

      {/* ─────────── CORPS REMODELÉ ─────────── */}

      {/* 5, Ce qu'on fait (What we do) : 4 piliers */}
      <WhatWeDo />
      <Divider />

      {/* « Comment on travaille » (Process) retiré de l'accueil le 8 novembre
          2026 : il répétait « Ce qu'on fait » juste au-dessus (Nathan). */}

      {/* 8, Ce qui nous rend différents : vidéo + différenciateurs */}
      <Different />
      <Divider />

      {/* 9b, Bandeau crédibilité (4 engagements), juste sous « Ce qui nous rend
             différents » (choix Nathan). [[À CONFIRMER : bandeau = crédibilité ?]] */}
      <CredibilityBand />
      <Divider />

      {/* « Le Diagnostic » (SprintDiagnostic) retiré de l'accueil le 8 novembre
          2026 (Nathan). */}

      {/* 11, Embed Cal.com SEUL (entête retirée), juste après l'offre d'entrée */}
      <CtaFinal />
      <Divider />


      {/* 13, Comparatif honnête 4 colonnes */}
      <ComparisonV2 />
      <Divider />

      {/* 14, FAQ */}
      <Faq />
      <Divider />

      {/* Garantie Voisine retirée de l'accueil le 8 novembre 2026 (Nathan). */}

      {/* 16, Demandez à l'IA : preuve sociale via IA */}
      <AskAI />

      {/* Footer, inclut désormais le bloc fondateur (Nathan + LinkedIn) en bas-gauche */}
      <Footer />

      <MobileCta />
    </main>
  )
}
