import Nav from '@/components/layout/Nav'
import MobileCta from '@/components/layout/MobileCta'
import WorkTogetherPrompt from '@/components/layout/WorkTogetherPrompt'
import Hero from '@/components/home/Hero'
import ProductShowcase from '@/components/home/ProductShowcase'
import CredibilityBand from '@/components/home/CredibilityBand'
import ClientsBar from '@/components/home/ClientsBar'
import Systems from '@/components/home/Systems'
import Solutions from '@/components/home/Solutions'
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
      <Divider />

      {/* 4 — Les cas qu'on construit (marquee défilant — chaque card porte son ROI chiffré) */}
      <Systems />
      <Divider />

      {/* 5 — Témoignage vidéo (short Chromosome) — preuve juste sous les cas concrets */}
      <CaseStudy />
      <Divider />

      {/* 6 — 3 solutions : Audit / Plateforme digitale / IA agentique */}
      <Solutions />
      <Divider />

      {/* 7 — Méthode : audit → build & déploiement → formation → optimisation */}
      <Process />
      <Divider />

      {/* 8 — À propos Nathan */}
      <AboutNathan />
      <Divider />

      {/* 9 — FAQ (reprend aussi la data "pourquoi maintenant" + le stack technique,
             ce qui a permis de retirer les sections FOMO et Expertise de la home) */}
      <Faq />
      <Divider />

      {/* 10 — Bandeau crédibilité : 4 engagements fermes (réassurance avant conversion) */}
      <CredibilityBand />
      <Divider />

      {/* 11 — Prise de rendez-vous : embed Cal.com inline (zéro friction) */}
      <CtaFinal />

      <MobileCta />
      <WorkTogetherPrompt />
    </main>
  )
}
