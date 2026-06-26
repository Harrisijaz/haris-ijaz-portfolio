import { motion } from 'framer-motion'

interface SectionTitleProps {
  eyebrow: string
  title: string
  description?: string
}

const SectionTitle = ({ eyebrow, title, description }: SectionTitleProps) => (
  <motion.div
    className="mx-auto mb-12 max-w-3xl text-center"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.55 }}
  >
    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">{eyebrow}</p>
    <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">{title}</h2>
    {description ? <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">{description}</p> : null}
  </motion.div>
)

export default SectionTitle
