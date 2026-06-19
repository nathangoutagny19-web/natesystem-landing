import Nav from '@/components/layout/Nav'
import MobileCta from '@/components/layout/MobileCta'
import WorkTogetherPrompt from '@/components/layout/WorkTogetherPrompt'
import Hero from '@/components/home/Hero'
import ProductShowcase from '@/components/home/ProductShowcase'
import CredibilityBand from '@/components/home/CredibilityBand'
import ClientsBar from '@/components/home/ClientsBar'
import Systems from '@/components/home/Systems'
import Solutions from '@/components/home/Solutions'
import Comparison from '@/components/home/Comparison'
import Process from '@/components/home/Process'
import CaseStudy from '@/components/home/CaseStudy'
import AboutNathan from '@/components/home/AboutNathan'
import Faq from '@/components/home/Faq'
import CtaFinal from '@/components/home/CtaFinal'
import Footer from '@/components/layout/Footer'
import Divider from '@/components/ui/Divider'

export default function Home() {
  return (
    <main>
      <Nav />

      {/* 1 — Hero : promesse business immédiate */}
      <Hero />

      {/* 2 — Logos clients (preuve sociale immédiate, juste sous le hero) */}
      <ClientsBar />
      <Divider />

      {/* 3 — Bloc "cas concrets" : le marquee chiffré, puis la mockup produit
             (un exemple concret, bientôt d'autres vidéos), puis le short
             témoignage. Resserrés sans Divider pour lire comme un seul bloc. */}
      <Systems />
      <ProductShowcase />
      <CaseStudy />
      <Divider />

      {/* 4 — 3 solutions : Audit / Plateforme sur-mesure / IA agentique */}
      <Solutions />
      <Divider />

      {/* 5 — Comparatif vs prestataire classique : lève la dernière objection
             avant la méthode (la marche manquante de l'escalier de conversion) */}
      <Comparison />
      <Divider />

      {/* 6 — Méthode : audit → build & déploiement → formation → optimisation */}
      <Process />
      <Divider />

      {/* 6 — À propos Nathan */}
      <AboutNathan />
      <Divider />

      {/* 7 — Bandeau crédibilité : 4 engagements fermes (réassurance avant conversion) */}
      <CredibilityBand />
      <Divider />

      {/* 8 — Prise de rendez-vous : embed Cal.com inline (zéro friction) */}
      <CtaFinal />
      <Divider />

      {/* 9 — FAQ en dernier (reprend aussi la data "pourquoi maintenant" + le stack
             technique, ce qui a permis de retirer FOMO et Expertise de la home) */}
      <Faq />

      <Footer />

      <MobileCta />
      <WorkTogetherPrompt />
    </main>
  )
}
