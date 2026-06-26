import { FaArrowUp, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { SiFiverr, SiUpwork } from 'react-icons/si'
import { navItems } from '../data/portfolioData'

const socials = [
  { label: 'GitHub', href: '#', icon: FaGithub },
  { label: 'LinkedIn', href: '#', icon: FaLinkedin },
  { label: 'Upwork', href: '#', icon: SiUpwork },
  { label: 'Fiverr', href: '#', icon: SiFiverr },
  { label: 'WhatsApp', href: '#', icon: FaWhatsapp },
]

const Footer = () => (
  <footer className="border-t border-white/10 bg-[#050816] px-4 py-10 sm:px-6 lg:px-8">
    <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-xl font-black text-white">Haris<span className="text-sky-400">.</span></p>
        <p className="mt-2 text-sm text-slate-400">© {new Date().getFullYear()} Haris Ijaz. All rights reserved.</p>
      </div>
      <nav className="flex flex-wrap gap-x-3 gap-y-2" aria-label="Footer quick links">
        {navItems.map((item) => (
          <a className="text-sm text-slate-300 transition hover:text-sky-300" href={`#${item.toLowerCase()}`} key={item}>
            {item}
          </a>
        ))}
      </nav>
      <div className="flex flex-wrap items-center gap-3">
        {socials.map(({ label, href, icon: Icon }) => (
          <a aria-label={label} className="text-slate-300 transition hover:text-sky-300" href={href} key={label}>
            <Icon />
          </a>
        ))}
        <a aria-label="Back to top" className="rounded-full bg-blue-600 p-3 text-white transition hover:bg-blue-500" href="#home">
          <FaArrowUp />
        </a>
      </div>
    </div>
  </footer>
)

export default Footer
