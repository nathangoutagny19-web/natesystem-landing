import Nav from '@/components/site/Nav'
import Hero from '@/components/site/Hero'
import Problem from '@/components/site/Problem'
import Solution from '@/components/site/Solution'
import Results from '@/components/site/Results'
import Testimonial from '@/components/site/Testimonial'
import Process from '@/components/site/Process'
import CtaFinal from '@/components/site/CtaFinal'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <Results />
      <Testimonial />
      <Process />
      <CtaFinal />
    </main>
  )
}
