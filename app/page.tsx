import Nav from '@/components/layout/Nav'
import MobileCta from '@/components/layout/MobileCta'
import WorkTogetherPrompt from '@/components/layout/WorkTogetherPrompt'
import Hero from '@/components/home/Hero'
import ClientsBar from '@/components/home/ClientsBar'
import Problem from '@/components/home/Problem'
import Solution from '@/components/home/Solution'
import CaseStudy from '@/components/home/CaseStudy'
import Process from '@/components/home/Process'
import Integrations from '@/components/home/Integrations'
import ForWho from '@/components/home/ForWho'
import Faq from '@/components/home/Faq'
import CtaFinal from '@/components/home/CtaFinal'
import Divider from '@/components/ui/Divider'

export default function Home() {
  return (
    <main>
      <Nav />

      {/* 1 — Hero */}
      <Hero />

      {/* 1bis — Clients trust bar (3 references, neutral, no red accent) */}
      <ClientsBar />
      <Divider />

      {/* 2 — Problem (absorbs CostPain + Quantification inline) */}
      <Problem />
      <Divider />

      {/* 3 — Solution (custom software + integrated AI) */}
      <Solution />
      <Divider />

      {/* 4 — Case Study Chromosome (video + metrics + quote unified) */}
      <CaseStudy />
      <Divider />

      {/* 5 — Process + Integrations (how we deliver) */}
      <Process />
      <Integrations />
      <Divider />

      {/* 6 — For who + promises strip (qualification + no lock-in) */}
      <ForWho />
      <Divider />

      {/* 7 — FAQ + single final CTA */}
      <Faq />
      <Divider />
      <CtaFinal />

      <MobileCta />
      <WorkTogetherPrompt />
    </main>
  )
}
