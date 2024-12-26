import Hero from '@/components/hero'
import About from '@/components/about'
import Experience from '@/components/experience'
import Skills from '@/components/skills'
import Portfolio from '@/components/portfolio'
import Services from '@/components/services'
import Achievements from '@/components/achievements'
import Testimonials from '@/components/testimonials'
import Contact from '@/components/contact'
import Blog from '@/components/blog'

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Portfolio />
      <Services />
      <Achievements />
      <Testimonials />
      <Contact />
      <Blog />
    </main>
  )
}

