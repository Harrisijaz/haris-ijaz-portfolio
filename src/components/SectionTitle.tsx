import { motion } from 'framer-motion'

interface SectionTitleProps {
  eyebrow: string
  title: string
  description?: string
}

const SectionTitle = ({ eyebrow, title, description }: SectionTitleProps) => (
  <motion.div
    className="mx-auto mb-10 max-w-3xl text-center sm:mb-12"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.55 }}
  >
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-sky-300 sm:text-sm sm:tracking-[0.25em]">{eyebrow}</p>
    <h2 className="text-[clamp(1.85rem,7vw,3rem)] font-bold leading-tight text-white lg:text-5xl">{title}</h2>
    {description ? <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">{description}</p> : null}
  </motion.div>
)

export default SectionTitle
