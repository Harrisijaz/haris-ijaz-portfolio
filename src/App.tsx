import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Skills from './components/Skills'
import Statistics from './components/Statistics'
import Testimonials from './components/Testimonials'

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Haris Ijaz',
  jobTitle: 'Software Engineer and Freelancer',
  email: 'mailto:harisijaz278@gmail.com',
  telephone: '+923184506435',
  knowsAbout: ['Java', 'Spring Boot', 'REST APIs', 'Microservices', 'React', 'TypeScript', 'Angular', 'Node.js', 'Laravel'],
  url: 'https://harisijaz.dev',
}

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return <div className="fixed left-0 top-0 z-[80] h-1 bg-sky-400" style={{ width: `${progress}%` }} />
}

const HomePage = () => (
  <>
    <Helmet>
      <title>Haris Ijaz | Java, Spring Boot, React and Full Stack Developer</title>
      <meta
        name="description"
        content="Premium portfolio for Haris Ijaz, a Software Engineer and Freelancer specializing in Java, Spring Boot, REST APIs, microservices, React, TypeScript, and full stack development."
      />
      <meta property="og:title" content="Haris Ijaz | Software Engineer and Freelancer" />
      <meta property="og:description" content="Java, Spring Boot, React, TypeScript, backend APIs, full stack systems, and logo design services." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://harisijaz.dev" />
      <meta property="og:image" content="/og-image.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Haris Ijaz | Software Engineer and Freelancer" />
      <meta name="twitter:description" content="Production-ready portfolio for international freelance clients, recruiters, and companies." />
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
    <Navbar />
    <main>
      <Hero />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Experience />
      <Statistics />
      <Testimonials />
      <Contact />
    </main>
    <Footer />
  </>
)

const App = () => (
  <>
    <ScrollProgress />
    <Routes>
      <Route element={<HomePage />} path="*" />
    </Routes>
  </>
)

export default App
