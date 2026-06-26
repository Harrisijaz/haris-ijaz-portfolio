import {
  FaDatabase,
  FaDocker,
  FaJava,
  FaLaptopCode,
  FaNodeJs,
  FaPaintBrush,
  FaReact,
  FaServer,
} from 'react-icons/fa'
import { FiActivity, FiCpu, FiLayers, FiLink, FiZap } from 'react-icons/fi'
import { SiLaravel, SiSpringboot, SiTypescript } from 'react-icons/si'
import clinixSummaryMockup from '../assets/clinixsummary-mockup.png'
import codeHubBanner from '../assets/codehub-banner.png'
import codeHubLogo from '../assets/codehub-logo.png'
import ezecoCrmMockup from '../assets/ezeco-crm-mockup.png'
import lawyersDiaryLogo from '../assets/lawyers-diary-logo.png'
import lawyersDiaryShowcase from '../assets/lawyers-diary-showcase.png'
import oktaLogoPreview from '../assets/okta-logo-preview.svg'
import senifoneLogo from '../assets/senifone-logo.png'
import senifoneShowcase from '../assets/senifone-showcase.png'
import travelTriberShowcase from '../assets/travel-triber-showcase.png'
import type {
  Experience,
  PortfolioItem,
  Service,
  SkillGroup,
  Statistic,
  Testimonial,
} from '../types'

export const navItems = ['Home', 'About', 'Skills', 'Services', 'Portfolio', 'Experience', 'Contact']

export const titles = [
  'Java Software Engineer',
  'Spring Boot Developer',
  'Backend Developer',
  'Full Stack Developer',
  'React Developer',
  'Freelancer',
]

export const skillGroups: SkillGroup[] = [
  {
    title: 'Backend',
    icon: FaServer,
    skills: ['Java', 'Spring Boot', 'REST APIs', 'Microservices', 'Node.js', 'PHP', 'Laravel', 'JWT', 'OAuth', 'Redis', 'Kafka'],
  },
  {
    title: 'Frontend',
    icon: FaReact,
    skills: ['React', 'Next.js', 'Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Database',
    icon: FaDatabase,
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    title: 'Tools',
    icon: FaDocker,
    skills: ['Git', 'GitHub', 'Docker', 'Linux', 'IntelliJ IDEA', 'VS Code', 'Postman'],
  },
]

export const services: Service[] = [
  { title: 'Backend Development', description: 'Robust Java, Spring Boot, Node.js, PHP, and Laravel systems built around clear domain boundaries.', icon: SiSpringboot },
  { title: 'Frontend Development', description: 'Responsive React, TypeScript, Angular, and Tailwind interfaces with polished user flows.', icon: FaReact },
  { title: 'Full Stack Development', description: 'End-to-end product delivery from database design to API contracts and frontend implementation.', icon: FaLaptopCode },
  { title: 'REST API Development', description: 'Secure, documented, versioned APIs with validation, authentication, and predictable error handling.', icon: FiLink },
  { title: 'Microservices', description: 'Service decomposition, messaging, observability, and reliable integration patterns.', icon: FiLayers },
  { title: 'System Architecture', description: 'Practical architecture decisions for scale, maintainability, deployment, and team velocity.', icon: FiCpu },
  { title: 'Database Design', description: 'Normalized schemas, indexing strategies, query tuning, and data modeling for real workloads.', icon: FaDatabase },
  { title: 'Performance Optimization', description: 'Backend and frontend profiling that improves latency, bundle weight, and runtime stability.', icon: FiZap },
  { title: 'Bug Fixing', description: 'Focused debugging for production issues, legacy systems, regressions, and integration failures.', icon: FiActivity },
  { title: 'Deployment', description: 'Release-ready builds, environment configuration, Docker workflows, and Linux server setup.', icon: FaDocker },
  { title: 'API Integration', description: 'Reliable third-party integrations for SaaS platforms, CRMs, payment systems, and internal tools.', icon: FaNodeJs },
  { title: 'Payment Gateway Integration', description: 'Checkout, webhook, subscription, and invoice flows designed for secure transactions.', icon: FaJava },
  { title: 'Logo Design', description: 'Clean, memorable logo marks for startups, personal brands, and digital products.', icon: FaPaintBrush },
  { title: 'Brand Identity Design', description: 'Color, typography, and visual systems that make product brands look consistent and credible.', icon: SiTypescript },
  { title: 'Technical Consulting', description: 'Architecture reviews, delivery planning, technical audits, and pragmatic roadmap guidance.', icon: SiLaravel },
]

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    type: 'project',
    category: 'Full Stack',
    title: 'Workmate',
    description: 'A full stack human capital management platform with authentication, employee workflows, RBAC access control, and production-ready frontend/backend delivery.',
    technologies: ['React', 'TypeScript', 'Java', 'Spring Boot', 'AWS', 'Spring Cloud', 'Spring Security', 'RBAC'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    github: 'https://github.com/Workmatehcm/workmate-Frontend.git',
    liveDemo: 'https://develop.d38nz7vxsc6w6c.amplifyapp.com/login',
    featured: true,
  },
  {
    id: 2,
    type: 'project',
    category: 'Full Stack',
    title: 'CareSync',
    description: 'A full stack healthcare coordination platform with secure backend services, role-based workflows, responsive UI, and deployment-ready delivery.',
    technologies: ['React', 'TypeScript', 'Java', 'Spring Boot', 'AWS', 'Spring Cloud', 'Spring Security', 'RBAC'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
    liveDemo: 'https://main.d2scx9wm5epjt3.amplifyapp.com/',
    featured: true,
  },
  {
    id: 3,
    type: 'project',
    category: 'Web Applications',
    title: 'Verdant Cafe',
    description: 'A polished cafe website built as a frontend web application with smooth animations, modern sections, and responsive design.',
    technologies: ['React', 'TypeScript', 'HTML', 'CSS', 'JavaScript', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80',
    github: 'https://github.com/Harrisijaz/cafe-website.git',
    liveDemo: 'https://cafe-website-steel-haris.vercel.app/',
    featured: true,
  },
  {
    id: 4,
    type: 'project',
    category: 'Web Applications',
    title: 'CodeHub Web Application',
    description: 'A modern company website for CodeHub with animated frontend sections, service positioning, and clean responsive presentation.',
    technologies: ['Next.js', 'Framer Motion', 'HTML', 'CSS', 'Tailwind CSS', 'JavaScript'],
    image: codeHubBanner,
    github: 'https://github.com/Harrisijaz/codehub-website.git',
    liveDemo: 'https://codehub-website-seven.vercel.app/',
    featured: false,
  },
  {
    id: 5,
    type: 'project',
    category: 'Web Applications',
    title: 'Developer Portfolio',
    description: 'A responsive personal portfolio web application designed to showcase skills, projects, contact flows, and professional branding.',
    technologies: ['React', 'Framer Motion', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    github: 'https://github.com/Harrisijaz/my-portfolio.git',
    liveDemo: 'https://my-portfolio-swart-theta-21.vercel.app/#contact',
    featured: false,
  },
  {
    id: 6,
    type: 'project',
    category: 'Full Stack',
    title: 'Ezeco CRM',
    description: 'A construction CRM and ERP platform for project lifecycle management, compliance tracking, operational oversight, RBAC workflows, and team accountability.',
    technologies: ['Next.js', 'Laravel', 'RBAC', 'SQL', 'CRM', 'ERP'],
    image: ezecoCrmMockup,
    github: 'https://github.com/rccjaved/crm-dashboard.git',
    liveDemo: 'https://crm.ezeco.uk/auth/login',
    featured: true,
  },
  {
    id: 7,
    type: 'project',
    category: 'Backend APIs',
    title: 'ClinixSummary',
    description: 'An AI-powered medical SaaS platform with GPT-backed clinical note generation, encrypted APIs, subscription workflows, and healthcare-focused backend architecture.',
    technologies: ['AI Powered', 'GPT API', 'Laravel', 'Encrypted APIs', 'Tailwind CSS', 'Bootstrap'],
    image: clinixSummaryMockup,
    github: 'https://github.com/rccjaved/clinicsummary',
    liveDemo: 'https://clinixsummary.ai/',
    featured: true,
  },
  {
    id: 8,
    type: 'project',
    category: 'Mobile Apps',
    title: 'Travel Triber',
    description: 'A tour booking mobile app for discovering travel packages, comparing trip details, and planning journeys from a polished mobile experience.',
    technologies: ['Mobile App', 'Android', 'Tour Booking', 'Maps', 'Travel UI'],
    image: travelTriberShowcase,
    liveDemo: 'https://play.google.com/store/apps/details?id=com.hawknest.travio.customer.android',
    featured: true,
  },
  {
    id: 9,
    type: 'project',
    category: 'Mobile Apps',
    title: 'Senifone',
    description: 'A companion safety mobile app with SOS alert history, device restriction controls, safe zones, and location-based notifications.',
    technologies: ['Mobile App', 'Android', 'SOS Alerts', 'Safe Zones', 'Location Services'],
    image: senifoneShowcase,
    liveDemo: 'https://play.google.com/store/apps/details?id=com.senifone.companion.senifone_companion',
    featured: true,
  },
  {
    id: 10,
    type: 'project',
    category: 'Mobile Apps',
    title: "Lawyer's Diary",
    description: 'A legal workflow mobile app for case tracking, client management, calendar planning, and organized lawyer productivity.',
    technologies: ['Mobile App', 'iOS', 'Case Management', 'Calendar', 'Legal Tech'],
    image: lawyersDiaryShowcase,
    liveDemo: 'https://apps.apple.com/kr/app/lawyers-diary/id6752351977?l=en-GB',
    featured: true,
  },
  {
    id: 11,
    type: 'logo',
    category: 'Logo Design',
    title: 'CodeHub Technologies',
    description: 'A professional technology logo built around a bold C-shaped mark, directional symbol, and blue gradient identity.',
    technologies: ['Technology', 'Software', 'Gradient'],
    image: codeHubLogo,
    featured: true,
    industry: 'Web Platforms, Mobile Apps, AI Workflows, CMS',
    style: 'Modern Tech Mark',
  },
  {
    id: 12,
    type: 'logo',
    category: 'Logo Design',
    title: 'CodeHub Brand Banner',
    description: 'A wide-format brand presentation for CodeHub Technologies with service positioning and subtle digital patterns.',
    technologies: ['Brand Banner', 'Technology', 'Digital'],
    image: codeHubBanner,
    featured: true,
    industry: 'Software Services',
    style: 'Wide Brand Lockup',
  },
  {
    id: 13,
    type: 'logo',
    category: 'Logo Design',
    title: 'Okta Logos Complete',
    description: 'A complete logo design presentation prepared as a PDF showcase for a clean modern brand identity.',
    technologies: ['Logo System', 'PDF Showcase', 'Brand Identity'],
    image: oktaLogoPreview,
    documentUrl: '/OktaLogos_Complete.pdf',
    featured: true,
    industry: 'Brand Identity',
    style: 'Complete Logo Presentation',
  },
  {
    id: 14,
    type: 'logo',
    category: 'Logo Design',
    title: 'Senifone App Logo',
    description: 'A clean orange mobile app icon mark designed for the Senifone companion safety product.',
    technologies: ['Mobile App Logo', 'Safety', 'Minimal'],
    image: senifoneLogo,
    featured: true,
    industry: 'Personal Safety',
    style: 'Rounded App Icon',
  },
  {
    id: 15,
    type: 'logo',
    category: 'Logo Design',
    title: "Lawyer's Diary App Icon",
    description: 'A professional legal app icon using a balanced scales mark for case management and lawyer productivity.',
    technologies: ['Mobile App Logo', 'Legal Tech', 'Icon Design'],
    image: lawyersDiaryLogo,
    featured: true,
    industry: 'Legal Technology',
    style: 'Professional App Icon',
  },
]

export const portfolioCategories = ['All', 'Web Applications', 'Backend APIs', 'Full Stack', 'Mobile Apps', 'UI/UX', 'Logo Design']

export const experiences: Experience[] = [
  {
    company: 'Freelance Clients',
    role: 'Software Engineer and Full Stack Developer',
    duration: '2022 - Present',
    responsibilities: [
      'Build custom web applications, backend APIs, dashboards, and integrations for international clients.',
      'Translate client goals into reliable technical scopes, milestones, and production-ready releases.',
      'Improve performance, maintainability, and deployment workflows across existing codebases.',
    ],
  },
  {
    company: 'Product Engineering Projects',
    role: 'Java and Spring Boot Developer',
    duration: '2021 - Present',
    responsibilities: [
      'Design REST APIs, database schemas, authentication flows, and modular service layers.',
      'Apply clean architecture practices for scalable Java, Spring Boot, and microservice systems.',
      'Collaborate across frontend and backend boundaries to deliver complete product features.',
    ],
  },
]

export const statistics: Statistic[] = [
  { label: 'Projects Delivered', value: 35, suffix: '+' },
  { label: 'Client Collaborations', value: 18, suffix: '+' },
  { label: 'Technologies Used', value: 30, suffix: '+' },
  { label: 'Years Experience', value: 4, suffix: '+' },
]

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah Mitchell',
    role: 'Startup Founder',
    quote: 'Haris translated our messy product idea into a clean backend and a polished interface faster than expected.',
  },
  {
    name: 'Daniel Carter',
    role: 'Product Manager',
    quote: 'The API design, documentation, and delivery discipline made collaboration straightforward from day one.',
  },
  {
    name: 'Ayesha Khan',
    role: 'Business Owner',
    quote: 'Professional communication, strong technical judgment, and a final website that immediately felt premium.',
  },
]
