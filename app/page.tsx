import Nav from '@/components/layout/Nav'
import MobileCta from '@/components/layout/MobileCta'
import WorkTogetherPrompt from '@/components/layout/WorkTogetherPrompt'
import Hero from '@/components/home/Hero'
import CredibilityBand from '@/components/home/CredibilityBand'
import ClientsBar from '@/components/home/ClientsBar'
import Fomo from '@/components/home/Fomo'
import Solutions from '@/components/home/Solutions'
import Process from '@/components/home/Process'
import Systems from '@/components/home/Systems'
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

      {/* 2 — Bandeau crédibilité : 4 engagements fermes */}
      <CredibilityBand />

      {/* 3 — Logos clients */}
      <ClientsBar />
      <Divider />

      {/* 4 — FOMO chiffrée (Eurostat 2025 / McKinsey / Salesforce) — amorce la décision */}
      <Fomo />

      {/* 5 — 3 solutions : Plateforme Dédiée / Écosystème IA / Audit */}
      <Solutions />
      <Divider />

      {/* 6 — Méthode : audit → build → autonome */}
      <Process />
      <Divider />

      {/* 7 — Les cas qu'on construit (marquee défilant : 5 systèmes IA + 3 logiciels métier) */}
      <Systems />
      <Divider />

      {/* 8 — Témoignages : Catherine Chromosome + emplacement futurs avis */}
      <CaseStudy />

      {/* 9 — À propos Nathan */}
      <AboutNathan />
      <Divider />

      {/* 10 — FAQ + CTA final */}
      <Faq />
      <Divider />
      <CtaFinal />

      <MobileCta />
      <WorkTogetherPrompt />
    </main>
  )
}
