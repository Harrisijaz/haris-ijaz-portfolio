import Card from './Card'
import SectionTitle from './SectionTitle'
import { services } from '../data/portfolioData'

const Services = () => (
  <section id="services" className="bg-[#050816] px-4 py-24 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <SectionTitle
        eyebrow="Services"
        title="Technical execution for serious clients"
        description="From backend systems to branded frontend experiences, each service is structured around measurable delivery."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ title, description, icon: Icon }) => (
          <Card className="min-h-56" key={title}>
            <div className="mb-5 inline-flex rounded-2xl bg-sky-400/10 p-4 text-2xl text-sky-300">
              <Icon />
            </div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="mt-4 leading-7 text-slate-300">{description}</p>
          </Card>
        ))}
      </div>
    </div>
  </section>
)

export default Services
