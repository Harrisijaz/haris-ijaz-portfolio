import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaDownload, FaJava, FaReact } from 'react-icons/fa'
import { SiSpringboot, SiTypescript } from 'react-icons/si'
import heroImg from '../assets/hero.png'
import { titles } from '../data/portfolioData'
import Button from './Button'

const techIcons = [
  { icon: FaJava, label: 'Java', className: 'left-2 top-24 sm:left-12' },
  { icon: SiSpringboot, label: 'Spring Boot', className: 'right-4 top-20 sm:right-16' },
  { icon: FaReact, label: 'React', className: 'bottom-16 left-8 sm:left-20' },
  { icon: SiTypescript, label: 'TypeScript', className: 'bottom-12 right-8 sm:right-24' },
]

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0)
  const [typedText, setTypedText] = useState('')

  useEffect(() => {
    const currentTitle = titles[titleIndex]

    if (typedText.length < currentTitle.length) {
      const timeout = window.setTimeout(() => {
        setTypedText(currentTitle.slice(0, typedText.length + 1))
      }, 70)

      return () => window.clearTimeout(timeout)
    }

    const timeout = window.setTimeout(() => {
      setTypedText('')
      setTitleIndex((index) => (index + 1) % titles.length)
    }, 1600)

    return () => window.clearTimeout(timeout)
  }, [titleIndex, typedText])

  return (
    <section id="home" className="animated-gradient relative flex min-h-screen items-center overflow-hidden px-4 pb-14 pt-24 sm:px-6 sm:pb-16 lg:px-8">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.04)_1px,transparent_1px)] bg-[size:72px_72px]" />
      {techIcons.map(({ icon: Icon, label, className }, index) => (
        <motion.div
          aria-label={label}
          className={`absolute hidden rounded-2xl border border-white/10 bg-white/5 p-4 text-2xl text-sky-200 shadow-xl backdrop-blur md:block ${className}`}
          key={label}
          animate={{ y: [0, -18, 0], rotate: [0, index % 2 ? -5 : 5, 0] }}
          transition={{ duration: 5 + index, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Icon />
        </motion.div>
      ))}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 py-8 sm:py-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:py-16">
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
          <p className="mb-5 inline-flex max-w-full rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-xs font-semibold leading-tight text-sky-200 sm:text-sm">
            Software Engineer and Freelancer
          </p>
          <h1 className="max-w-4xl text-[clamp(2.45rem,12vw,4.6rem)] font-black leading-[1.05] text-white lg:text-7xl">
            Haris Ijaz
            <span className="mt-3 block text-gradient">builds reliable digital products.</span>
          </h1>
          <p className="typing-caret mt-6 min-h-8 text-lg font-semibold text-sky-200 sm:min-h-9 sm:text-2xl">{typedText}</p>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            I design and develop clean, scalable applications with Java, Spring Boot, REST APIs, microservices,
            React, TypeScript, and production-focused architecture.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Button href="#portfolio">View Portfolio</Button>
            <Button href="#contact" variant="secondary">
              Contact Me
            </Button>
            <Button href="/resume.pdf" variant="ghost">
              <FaDownload /> Download Resume
            </Button>
          </div>
        </motion.div>
        <motion.div
          className="relative mx-auto w-full max-w-[18rem] sm:max-w-sm md:max-w-md"
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="absolute -inset-6 rounded-full bg-sky-400/20 blur-3xl" />
          <div className="glass relative overflow-hidden rounded-[1.5rem] p-4 sm:rounded-[2rem] sm:p-8">
            <div className="aspect-[4/5] rounded-[1.5rem] bg-gradient-to-br from-blue-600 via-sky-400 to-slate-900 p-1">
              <div className="flex h-full items-center justify-center rounded-[1.35rem] bg-slate-950">
                <img alt="Professional profile placeholder" className="h-32 w-32 object-contain opacity-95 sm:h-44 sm:w-44" src={heroImg} />
              </div>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-2 text-center text-xs sm:mt-6 sm:gap-3 sm:text-sm">
              {['Java', 'APIs', 'React'].map((item) => (
                <span className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-slate-200" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
