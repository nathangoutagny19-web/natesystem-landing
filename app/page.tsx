import Nav from '@/components/layout/Nav'
import MobileCta from '@/components/layout/MobileCta'
import Hero from '@/components/home/Hero'
import Problem from '@/components/home/Problem'
import CostPain from '@/components/home/CostPain'
import Quantification from '@/components/home/Quantification'
import Solution from '@/components/home/Solution'
import InfraSystem from '@/components/home/InfraSystem'
import Results from '@/components/home/Results'
import Testimonial from '@/components/home/Testimonial'
import AgentShowcase from '@/components/home/AgentShowcase'
import Architecture from '@/components/home/Architecture'
import StrategyCall from '@/components/home/StrategyCall'
import Integrations from '@/components/home/Integrations'
import Process from '@/components/home/Process'
import Guarantees from '@/components/home/Guarantees'
import ForWho from '@/components/home/ForWho'
import Faq from '@/components/home/Faq'
import CtaFinal from '@/components/home/CtaFinal'
import Divider from '@/components/ui/Divider'

export default function Home() {
  return (
    <main>
      <Nav />

      {/* ——— DOULEUR ——— */}
      <Hero />
      <Divider />

      {/* ——— AGGRAVATION ——— */}
      <Problem />
      <Divider />
      <CostPain />
      <Divider />
      <Quantification />
      <Divider />

      {/* ——— SOLUTION ——— */}
      <Solution />
      <Divider />
      <InfraSystem />
      <Divider />

      {/* ——— PREUVE ——— */}
      <Results />
      <Divider />
      <Testimonial />
      <Divider />
      <AgentShowcase />
      <Divider />
      <Architecture />
      <Divider />

      {/* ——— OFFRE ——— */}
      <StrategyCall />
      <Divider />
      <Integrations />
      <Divider />
      <Process />
      <Divider />

      {/* ——— RISQUE ——— */}
      <Guarantees />
      <Divider />
      <ForWho />
      <Divider />
      <Faq />
      <Divider />

      {/* ——— ACTION ——— */}
      <CtaFinal />
      <MobileCta />
    </main>
  )
}
