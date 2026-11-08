import Nav from '@/components/layout/Nav'
import MobileCta from '@/components/layout/MobileCta'
import Hero from '@/components/home/Hero'
import ClientsBar from '@/components/home/ClientsBar'
import Outcomes from '@/components/home/Outcomes'
import CaseStudy from '@/components/home/CaseStudy'
import SectorsAccordion from '@/components/home/SectorsAccordion'
import ServicesGrid from '@/components/home/ServicesGrid'
import Process from '@/components/home/Process'
import Faq from '@/components/home/Faq'
import CtaFinal from '@/components/home/CtaFinal'
import Footer from '@/components/layout/Footer'
import Divider from '@/components/ui/Divider'

/**
 * HOME, version courte du 8 novembre 2026, sur le modèle de gourmetmarketing.net
 * (demande de Nathan : « plus clair, plus simple, de la valeur par mot, moins
 * de bordel »). Une section, un rôle :
 *
 *   Hero → logos → résultats → preuve (témoignages) → secteurs en accordéon
 *   → services → comment ça marche → FAQ → rendez-vous.
 *
 * Retirés de l'accueil (les composants restent dans le dépôt) : Transformation,
 * BrandFilm, Systems, MiniDiagnosticCta, WhatWeDo, Different, CredibilityBand,
 * SprintDiagnostic, Sectors (cartes), ComparisonV2, FunnyGuarantee, AskAI.
 *
 * Ancres du pied de page et du menu : #resultats, #case-study, #secteurs,
 * #prestations, #process, #faq, #rendez-vous.
 */
export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <ClientsBar />
      <Divider />
      <Outcomes />
      <Divider />
      <CaseStudy />
      <Divider />
      <SectorsAccordion />
      <Divider />
      <ServicesGrid />
      <Divider />
      <Process home />
      <Divider />
      <Faq />
      <Divider />
      <CtaFinal />
      <Footer />
      <MobileCta />
    </main>
  )
}
