import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { portfolioCategories, portfolioItems } from '../data/portfolioData'
import type { PortfolioItem } from '../types'
import Badge from './Badge'
import Button from './Button'
import SectionTitle from './SectionTitle'

const PortfolioCard = ({ item, onLogoClick }: { item: PortfolioItem; onLogoClick: (item: PortfolioItem) => void }) => (
  <motion.article
    className="group overflow-hidden rounded-2xl border border-white/10 bg-[#111827] shadow-2xl shadow-black/20"
    layout
    initial={{ opacity: 0, scale: 0.94 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.94 }}
    whileHover={{ y: -8 }}
    transition={{ duration: 0.35 }}
  >
    <button
      aria-label={item.type === 'logo' ? `Open ${item.title} logo details` : undefined}
      className="block w-full text-left"
      onClick={() => item.type === 'logo' && onLogoClick(item)}
      type="button"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          alt={item.title}
          className={`h-full w-full transition duration-700 group-hover:scale-110 ${item.type === 'logo' ? 'bg-white object-contain p-5' : 'object-cover'}`}
          loading="lazy"
          src={item.image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent opacity-80" />
        <span className="absolute left-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
          {item.category}
        </span>
      </div>
    </button>
    <div className="p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-white">{item.title}</h3>
          {item.type === 'logo' ? (
            <p className="mt-2 text-sm text-sky-200">
              {item.industry} • {item.style}
            </p>
          ) : null}
        </div>
        {item.featured ? <span className="shrink-0 rounded-full bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-200">Featured</span> : null}
      </div>
      <p className="mt-4 line-clamp-3 leading-7 text-slate-300">{item.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {item.technologies.map((tech) => (
          <Badge key={tech} label={tech} />
        ))}
      </div>
      {item.type === 'project' ? (
        <div className="mt-6 flex flex-wrap gap-3">
          {item.github ? (
            <Button href={item.github} variant="ghost">
              <FaGithub /> GitHub
            </Button>
          ) : null}
          {item.liveDemo ? (
            <Button href={item.liveDemo} variant="secondary">
              <FaExternalLinkAlt /> {item.category === 'Mobile Apps' ? 'Install App' : 'Live Demo'}
            </Button>
          ) : null}
        </div>
      ) : (
        <div className="mt-6">
          <Button onClick={() => onLogoClick(item)} variant="secondary">
            View Logo
          </Button>
          {item.documentUrl ? (
            <Button className="mt-3 sm:ml-3 sm:mt-0" href={item.documentUrl} variant="ghost">
              Open PDF
            </Button>
          ) : null}
        </div>
      )}
    </div>
  </motion.article>
)

const LogoModal = ({ item, onClose }: { item: PortfolioItem | null; onClose: () => void }) => (
  <AnimatePresence>
    {item ? (
      <motion.div
        aria-modal="true"
        className="fixed inset-0 z-[70] grid place-items-center overflow-y-auto bg-slate-950/80 px-3 py-4 backdrop-blur sm:px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        role="dialog"
      >
        <motion.div
          className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-white/10 bg-[#111827] p-3 shadow-2xl sm:rounded-3xl sm:p-6"
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.96 }}
        >
          <button
            aria-label="Close logo details"
            className="absolute right-4 top-4 z-10 rounded-full bg-slate-950/80 p-3 text-white transition hover:bg-blue-600"
            onClick={onClose}
            type="button"
          >
            <FiX />
          </button>
          <img
            alt={item.title}
            className="aspect-[4/3] w-full rounded-2xl bg-white object-contain p-3 sm:aspect-[16/9] sm:p-5"
            src={item.image}
          />
          <div className="p-2 pt-6 sm:p-4">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">{item.industry}</p>
            <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">{item.title}</h3>
            <p className="mt-2 text-sky-200">{item.style}</p>
            <p className="mt-5 max-w-3xl leading-8 text-slate-300">{item.description}</p>
            {item.documentUrl ? (
              <div className="mt-6">
                <Button href={item.documentUrl} variant="secondary">
                  Open Complete PDF
                </Button>
              </div>
            ) : null}
          </div>
        </motion.div>
      </motion.div>
    ) : null}
  </AnimatePresence>
)

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedLogo, setSelectedLogo] = useState<PortfolioItem | null>(null)

  const filteredItems = useMemo(
    () => portfolioItems.filter((item) => activeCategory === 'All' || item.category === activeCategory),
    [activeCategory],
  )

  return (
    <section id="portfolio" className="bg-slate-950 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Portfolio"
          title="Project work and brand design in one showcase"
          description="Add future work by editing one object in the portfolio data array. The grid, filters, project actions, and logo modal update automatically."
        />
        <div className="mb-10 flex flex-wrap justify-center gap-2 sm:gap-3">
          {portfolioCategories.map((category) => (
            <button
              className={`rounded-full border px-3 py-2 text-xs font-semibold transition sm:px-4 sm:text-sm ${activeCategory === category ? 'border-sky-400 bg-sky-400 text-slate-950' : 'border-white/10 bg-white/5 text-slate-300 hover:border-sky-400/60 hover:text-white'}`}
              key={category}
              onClick={() => setActiveCategory(category)}
              type="button"
            >
              {category}
            </button>
          ))}
        </div>
        <motion.div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3" layout>
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <PortfolioCard item={item} key={item.id} onLogoClick={setSelectedLogo} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      <LogoModal item={selectedLogo} onClose={() => setSelectedLogo(null)} />
    </section>
  )
}

export default Portfolio
