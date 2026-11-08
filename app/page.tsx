import Nav from '@/components/layout/Nav'
import MobileCta from '@/components/layout/MobileCta'
import Hero from '@/components/home/Hero'
import ClientsBar from '@/components/home/ClientsBar'
import CaseStudy from '@/components/home/CaseStudy'
import SectorsAccordion from '@/components/home/SectorsAccordion'
import Ecosystem from '@/components/home/Ecosystem'
import Process from '@/components/home/Process'
import Faq from '@/components/home/Faq'
import StatementBand from '@/components/home/StatementBand'
import CtaFinal from '@/components/home/CtaFinal'
import Footer from '@/components/layout/Footer'
import Divider from '@/components/ui/Divider'

/**
 * HOME, refonte du 8 novembre 2026 sur le modèle de gourmetmarketing.net
 * (Nathan : « au moins le professionnalisme de Gourmet », « on vend un
 * écosystème digital »). Une section, un rôle, alternance sombre / clair :
 *
 *   Hero sombre (phrase, 40 heures en rouge, vidéo à droite) → logos
 *   → écosystème en mouvement (sombre) → preuve (carrousel des cas)
 *   → secteurs (sombre) → méthode → bande de positionnement (sombre)
 *   → FAQ → rendez-vous.
 *
 * Plus de quadrillage, de halo ni d'effets qui suivent la souris (retirés du
 * layout racine). Les composants retirés de l'accueil restent dans le dépôt.
 */
export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <ClientsBar />
      <Ecosystem />
      <CaseStudy />
      <SectorsAccordion />
      <Process home />
      <StatementBand />
      <Faq />
      <Divider />
      <CtaFinal />
      <Footer />
      <MobileCta />
    </main>
  )
}
