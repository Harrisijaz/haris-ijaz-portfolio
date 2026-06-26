import { useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { statistics } from '../data/portfolioData'

const Counter = ({ value, suffix = '' }: { value: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) {
      return
    }

    const duration = 1200
    const start = performance.now()
    const frame = (time: number) => {
      const progress = Math.min((time - start) / duration, 1)
      setCount(Math.floor(progress * value))
      if (progress < 1) {
        requestAnimationFrame(frame)
      }
    }

    requestAnimationFrame(frame)
  }, [isInView, value])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

const Statistics = () => (
  <section className="bg-slate-950 px-4 py-20 sm:px-6 lg:px-8" aria-label="Portfolio statistics">
    <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {statistics.map((item) => (
        <motion.div
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center"
          initial={{ opacity: 0, y: 24 }}
          key={item.label}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="text-4xl font-black text-white">
            <Counter suffix={item.suffix} value={item.value} />
          </p>
          <p className="mt-2 text-sm font-medium text-slate-300">{item.label}</p>
        </motion.div>
      ))}
    </div>
  </section>
)

export default Statistics
