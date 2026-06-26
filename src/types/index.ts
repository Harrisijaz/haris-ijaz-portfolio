import type { IconType } from 'react-icons'

export type PortfolioType = 'project' | 'logo'

export interface PortfolioItem {
  id: number
  type: PortfolioType
  category: string
  title: string
  description: string
  technologies: string[]
  image: string
  github?: string
  liveDemo?: string
  documentUrl?: string
  featured: boolean
  industry?: string
  style?: string
}

export interface SkillGroup {
  title: string
  skills: string[]
  icon: IconType
}

export interface Service {
  title: string
  description: string
  icon: IconType
}

export interface Experience {
  company: string
  role: string
  duration: string
  responsibilities: string[]
}

export interface Testimonial {
  name: string
  role: string
  quote: string
}

export interface Statistic {
  label: string
  value: number
  suffix?: string
}
