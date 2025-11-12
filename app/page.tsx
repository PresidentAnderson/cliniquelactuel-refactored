import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import AppointmentCTA from '@/components/AppointmentCTA'
import LatestArticles from '@/components/LatestArticles'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <AppointmentCTA />
      <LatestArticles />
    </>
  )
}
