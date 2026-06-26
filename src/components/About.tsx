import { motion } from 'framer-motion'
import Card from './Card'
import SectionTitle from './SectionTitle'

const highlights = ['Clean Architecture', 'Performance Optimization', 'Database Design', 'Freelance Delivery']

const About = () => (
  <section id="about" className="bg-[#050816] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
    <div className="mx-auto max-w-7xl">
      <SectionTitle
        eyebrow="About"
        title="A practical engineer for complex web products"
        description="I combine backend depth, frontend execution, and client-focused delivery to build systems that are maintainable after launch."
      />
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Card className="flex flex-col justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">Profile</p>
            <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">Haris Ijaz</h3>
            <p className="mt-5 leading-8 text-slate-300">
              Java Software Engineer, Spring Boot Developer, Backend Developer, Full Stack Developer, React Developer,
              and Freelancer focused on professional-grade product delivery.
            </p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <span className="rounded-xl bg-white/5 px-4 py-3 text-sm text-slate-200" key={item}>
                {item}
              </span>
            ))}
          </div>
        </Card>
        <motion.div
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
          initial={{ opacity: 0, x: 36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
        >
          <p className="leading-8 text-slate-300">
            I build reliable web systems with Java, Spring Boot, REST APIs, microservices, and strong system
            architecture practices. My backend work focuses on secure authentication, clean service boundaries,
            database design, API performance, and maintainable code that can grow with the business.
          </p>
          <p className="mt-6 leading-8 text-slate-300">
            On the frontend, I create responsive interfaces with React, TypeScript, Angular, JavaScript, and Tailwind CSS.
            I also work with Node.js, Laravel, PHP, MySQL, PostgreSQL, MongoDB, Redis, and integrations across payment
            gateways and third-party APIs. As a freelancer, I care about clear communication, predictable delivery,
            and solutions that make sense beyond the first release.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
)

export default About
