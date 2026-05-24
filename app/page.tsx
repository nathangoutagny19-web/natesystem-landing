import Nav from '@/components/layout/Nav'
import MobileCta from '@/components/layout/MobileCta'
import WorkTogetherPrompt from '@/components/layout/WorkTogetherPrompt'
import Hero from '@/components/home/Hero'
import CredibilityBand from '@/components/home/CredibilityBand'
import ClientsBar from '@/components/home/ClientsBar'
import Constat from '@/components/home/Constat'
import Systems from '@/components/home/Systems'
import Solutions from '@/components/home/Solutions'
import Process from '@/components/home/Process'
import CaseStudy from '@/components/home/CaseStudy'
import Fomo from '@/components/home/Fomo'
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

      {/* 4 — Le constat : transition narrative vers les 5 systèmes */}
      <Constat />

      {/* 5 — Les 5 systèmes qui marchent (avec ROI chiffrés) */}
      <Systems />
      <Divider />

      {/* 6 — 3 solutions : Plateforme Dédiée (reco) / Écosystème IA / Audit */}
      <Solutions />
      <Divider />

      {/* 7 — Méthode : audit → build → déploiement */}
      <Process />
      <Divider />

      {/* 8 — Témoignages : Catherine Chromosome + emplacement futurs avis */}
      <CaseStudy />

      {/* 9 — FOMO chiffrée sur sources Eurostat / McKinsey / Salesforce */}
      <Fomo />

      {/* 10 — À propos Nathan : un seul opérateur, déploiements concrets */}
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
