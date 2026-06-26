import { motion } from 'framer-motion'
import { experiences } from '../data/portfolioData'
import SectionTitle from './SectionTitle'

const Experience = () => (
  <section id="experience" className="bg-[#050816] px-4 py-24 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-5xl">
      <SectionTitle
        eyebrow="Experience"
        title="Delivery across freelance and engineering work"
        description="A professional timeline built around product execution, backend architecture, and full stack delivery."
      />
      <div className="relative space-y-8 before:absolute before:left-4 before:top-2 before:h-full before:w-px before:bg-white/10 sm:before:left-1/2">
        {experiences.map((item, index) => (
          <motion.article
            className={`relative grid gap-6 sm:grid-cols-2 ${index % 2 ? '' : 'sm:text-right'}`}
            initial={{ opacity: 0, x: index % 2 ? 36 : -36 }}
            key={item.company}
            transition={{ duration: 0.55 }}
            viewport={{ once: true, amount: 0.3 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className={index % 2 ? 'sm:col-start-2' : ''}>
              <div className="glass ml-10 rounded-2xl p-6 sm:ml-0">
                <p className="text-sm font-semibold text-sky-300">{item.duration}</p>
                <h3 className="mt-2 text-2xl font-bold text-white">{item.role}</h3>
                <p className="mt-1 text-slate-300">{item.company}</p>
                <ul className="mt-5 space-y-3 text-left text-sm leading-7 text-slate-300">
                  {item.responsibilities.map((responsibility) => (
                    <li key={responsibility}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            </div>
            <span className="absolute left-2 top-8 h-5 w-5 rounded-full border-4 border-[#050816] bg-sky-400 sm:left-1/2 sm:-translate-x-1/2" />
          </motion.article>
        ))}
      </div>
    </div>
  </section>
)

export default Experience
