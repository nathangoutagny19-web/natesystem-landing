import Nav from '@/components/layout/Nav'
import MobileCta from '@/components/layout/MobileCta'
import WorkTogetherPrompt from '@/components/layout/WorkTogetherPrompt'
import Hero from '@/components/home/Hero'
import ProductShowcase from '@/components/home/ProductShowcase'
import CredibilityBand from '@/components/home/CredibilityBand'
import ClientsBar from '@/components/home/ClientsBar'
import Systems from '@/components/home/Systems'
import Fomo from '@/components/home/Fomo'
import Solutions from '@/components/home/Solutions'
import Expertise from '@/components/home/Expertise'
import Process from '@/components/home/Process'
import CaseStudy from '@/components/home/CaseStudy'
import AboutNathan from '@/components/home/AboutNathan'
import Faq from '@/components/home/Faq'
import CtaFinal from '@/components/home/CtaFinal'
import Divider from '@/components/ui/Divider'

export default function Home() {
  return (
    <main>
      <Nav />

      {/* 1 — Hero : promesse business immédiate */}
      <Hero />

      {/* 2 — Logos clients (preuve sociale immédiate, juste sous le hero) */}
      <ClientsBar />

      {/* 3 — Mockup produit pleine largeur (preuve visuelle immédiate) */}
      <ProductShowcase />

      {/* 4 — Bandeau crédibilité : 4 engagements fermes */}
      <CredibilityBand />
      <Divider />

      {/* 5 — Les cas qu'on construit (marquee défilant — chaque card porte son ROI chiffré) */}
      <Systems />
      <Divider />

      {/* 5 — FOMO chiffrée (Eurostat 2025 / McKinsey / Salesforce) — déclic décision */}
      <Fomo />

      {/* 6 — 3 solutions : Plateforme Dédiée / Écosystème IA / Audit */}
      <Solutions />
      <Divider />

      {/* 7 — Expertise & valeurs : on rassure juste après l'offre */}
      <Expertise />
      <Divider />

      {/* 8 — Méthode : audit → build → autonome */}
      <Process />
      <Divider />

      {/* 9 — Témoignages : Catherine Chromosome + emplacement futurs avis */}
      <CaseStudy />

      {/* 10 — À propos Nathan */}
      <AboutNathan />
      <Divider />

      {/* 11 — FAQ + CTA final */}
      <Faq />
      <Divider />
      <CtaFinal />

      <MobileCta />
      <WorkTogetherPrompt />
    </main>
  )
}
