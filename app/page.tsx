import Nav from '@/components/layout/Nav'
import MobileCta from '@/components/layout/MobileCta'
import WorkTogetherPrompt from '@/components/layout/WorkTogetherPrompt'
import Hero from '@/components/home/Hero'
import Transformation from '@/components/home/Transformation'
import CredibilityBand from '@/components/home/CredibilityBand'
import ClientsBar from '@/components/home/ClientsBar'
import Systems from '@/components/home/Systems'
import Solutions from '@/components/home/Solutions'
import Twist from '@/components/home/Twist'
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

      {/* 3 — Transformation Avant/Après : le prospect se reconnaît dans le chaos,
             puis se projette dans l'après fluide ("c'est mon cas"). */}
      <Transformation />
      <Divider />

      {/* 4 — Bloc "cas concrets" : le marquee chiffré, puis le short témoignage.
             Resserrés sans Divider pour lire comme un seul bloc. */}
      <Systems />
      <CaseStudy />
      <Divider />

      {/* 4 — 3 solutions : Audit / Plateforme sur-mesure / IA agentique */}
      <Solutions />
      <Divider />

      {/* 5 — Twist "On ne fait pas que du logiciel" : le cœur bénéfices,
             juste avant la méthode */}
      <Twist />
      <Divider />

      {/* 6 — Méthode : audit → build & déploiement → formation → optimisation */}
      <Process />
      <Divider />

      {/* 6 — Comparatif vs prestataire classique : lève l'objection juste après
             avoir montré la méthode */}
      <Comparison />
      <Divider />

      {/* 6 — Prise de rendez-vous : embed Cal.com inline (zéro friction) */}
      <CtaFinal />
      <Divider />

      {/* 7 — À propos Nathan : qui construit, juste après l'invitation à réserver */}
      <AboutNathan />
      <Divider />

      {/* 8 — FAQ (reprend aussi la data "pourquoi maintenant" + le stack technique,
             ce qui a permis de retirer FOMO et Expertise de la home) */}
      <Faq />
      <Divider />

      {/* 9 — Bandeau crédibilité : 4 engagements fermes, tout en bas avant le footer */}
      <CredibilityBand />

      <Footer />

      <MobileCta />
      <WorkTogetherPrompt />
    </main>
  )
}
