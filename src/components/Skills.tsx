import Card from './Card'
import SectionTitle from './SectionTitle'
import { skillGroups } from '../data/portfolioData'

const Skills = () => (
  <section id="skills" className="bg-slate-950 px-4 py-24 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <SectionTitle
        eyebrow="Skills"
        title="Backend strength with full stack range"
        description="A focused stack for building APIs, dashboards, integrations, and production web platforms."
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map(({ title, skills, icon: Icon }) => (
          <Card key={title}>
            <div className="mb-6 inline-flex rounded-2xl bg-blue-600/15 p-4 text-2xl text-sky-300">
              <Icon />
            </div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span className="rounded-full bg-white/5 px-3 py-1.5 text-sm text-slate-300" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
)

export default Skills
