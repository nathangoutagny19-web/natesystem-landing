import Nav from '@/components/layout/Nav'
import MobileCta from '@/components/layout/MobileCta'
import Hero from '@/components/home/Hero'
import Problem from '@/components/home/Problem'
import Solution from '@/components/home/Solution'
import Results from '@/components/home/Results'
import Testimonial from '@/components/home/Testimonial'
import Process from '@/components/home/Process'
import CtaFinal from '@/components/home/CtaFinal'
import Divider from '@/components/ui/Divider'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Divider />
      <Problem />
      <Divider />
      <Solution />
      <Divider />
      <Results />
      <Divider />
      <Testimonial />
      <Divider />
      <Process />
      <Divider />
      <CtaFinal />
      <MobileCta />
    </main>
  )
}
