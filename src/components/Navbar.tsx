import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { navItems } from '../data/portfolioData'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
      const current = navItems
        .map((item) => item.toLowerCase())
        .findLast((id) => {
          const section = document.getElementById(id)
          return section ? section.offsetTop - 120 <= window.scrollY : false
        })

      if (current) {
        setActiveSection(current)
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const renderLink = (item: string) => {
    const id = item.toLowerCase()
    const isActive = activeSection === id

    return (
      <a
        className={`relative px-3 py-2 text-sm font-medium transition ${isActive ? 'text-white' : 'text-slate-300 hover:text-white'}`}
        href={`#${id}`}
        key={item}
        onClick={() => setIsOpen(false)}
      >
        {item}
        <span
          className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-sky-400 transition-transform ${isActive ? 'scale-x-100' : 'scale-x-0'}`}
        />
      </a>
    )
  }

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 transition ${isScrolled ? 'border-b border-white/10 bg-slate-950/70 shadow-2xl shadow-black/20 backdrop-blur-xl' : 'bg-transparent'}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <Link className="text-lg font-black tracking-wide text-white" to="/">
          Haris<span className="text-sky-400">.</span>
        </Link>
        <div className="hidden items-center gap-1 lg:flex">{navItems.map(renderLink)}</div>
        <button
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          className="rounded-xl border border-white/10 bg-white/5 p-3 text-white lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          type="button"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>
      {isOpen ? <div className="mx-4 mb-4 grid rounded-2xl border border-white/10 bg-slate-950/95 p-3 shadow-2xl lg:hidden">{navItems.map(renderLink)}</div> : null}
    </motion.header>
  )
}

export default Navbar
