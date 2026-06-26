import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { testimonials } from '../data/portfolioData'
import SectionTitle from './SectionTitle'

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = testimonials[activeIndex]

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % testimonials.length)
    }, 5000)

    return () => window.clearInterval(interval)
  }, [])

  const move = (direction: number) => {
    setActiveIndex((index) => (index + direction + testimonials.length) % testimonials.length)
  }

  return (
    <section className="bg-[#050816] px-4 py-24 sm:px-6 lg:px-8" aria-label="Testimonials">
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          eyebrow="Testimonials"
          title="Client-ready communication and delivery"
          description="Placeholder testimonials are structured for quick replacement with real client feedback."
        />
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-3xl p-8 text-center sm:p-12"
          initial={{ opacity: 0, y: 24 }}
          key={active.name}
          transition={{ duration: 0.4 }}
        >
          <p className="mx-auto max-w-3xl text-xl leading-9 text-slate-200">"{active.quote}"</p>
          <h3 className="mt-8 text-xl font-bold text-white">{active.name}</h3>
          <p className="mt-1 text-sky-200">{active.role}</p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              aria-label="Previous testimonial"
              className="rounded-full border border-white/10 bg-white/5 p-3 text-white transition hover:bg-blue-600"
              onClick={() => move(-1)}
              type="button"
            >
              <FiChevronLeft />
            </button>
            <div className="flex gap-2">
              {testimonials.map((item, index) => (
                <button
                  aria-label={`Show testimonial from ${item.name}`}
                  className={`h-2 rounded-full transition-all ${index === activeIndex ? 'w-8 bg-sky-400' : 'w-2 bg-white/25'}`}
                  key={item.name}
                  onClick={() => setActiveIndex(index)}
                  type="button"
                />
              ))}
            </div>
            <button
              aria-label="Next testimonial"
              className="rounded-full border border-white/10 bg-white/5 p-3 text-white transition hover:bg-blue-600"
              onClick={() => move(1)}
              type="button"
            >
              <FiChevronRight />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
