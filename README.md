# Haris Ijaz Portfolio

A premium, production-ready portfolio website for Haris Ijaz, a Software Engineer and Freelancer specializing in Java, Spring Boot, backend APIs, full stack development, React, TypeScript, mobile apps, and logo design.

The site is built to present professional work for freelance clients, recruiters, companies, Upwork, Fiverr, LinkedIn, and personal branding.

## Features

- Modern dark theme with glassmorphism, gradients, and responsive layouts
- Animated hero section with typing effect and floating technology icons
- Sticky responsive navbar with active section highlighting
- Data-driven portfolio with filters for:
  - Web Applications
  - Backend APIs
  - Full Stack
  - Mobile Apps
  - UI/UX
  - Logo Design
- Project cards with GitHub, live demo, and install links
- Logo design showcase with modal previews
- Experience timeline
- Animated statistics counters
- Testimonials slider
- EmailJS contact form with validation, loading, success, and error states
- SEO metadata with React Helmet Async
- Structured data for better search visibility
- Fully responsive for mobile, tablet, laptop, desktop, and wide screens

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM
- React Icons
- EmailJS
- React Helmet Async
- ESLint

## Project Structure

```text
src/
├── assets/
├── components/
│   ├── About.tsx
│   ├── Badge.tsx
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Portfolio.tsx
│   ├── SectionTitle.tsx
│   ├── Services.tsx
│   ├── Skills.tsx
│   ├── Statistics.tsx
│   └── Testimonials.tsx
├── data/
│   └── portfolioData.ts
├── types/
│   └── index.ts
├── App.tsx
├── index.css
└── main.tsx
```

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run linting:

```bash
npm run lint
```

## EmailJS Setup

Create a `.env` file in the project root using `.env.example` as a reference:

```env
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

After adding valid EmailJS credentials, the contact form will send messages without changing component code.

## Updating Portfolio Items

All portfolio projects and logo designs are managed from one file:

```text
src/data/portfolioData.ts
```

Add a new project or logo by adding another object to the `portfolioItems` array:

```ts
{
  id: 16,
  type: 'project',
  category: 'Web Applications',
  title: 'Project Name',
  description: 'Short project description.',
  technologies: ['React', 'TypeScript', 'Tailwind CSS'],
  image: projectImage,
  github: 'https://github.com/example/repo',
  liveDemo: 'https://example.com',
  featured: true,
}
```

Logo items use the same array:

```ts
{
  id: 17,
  type: 'logo',
  category: 'Logo Design',
  title: 'Brand Name',
  description: 'Short logo description.',
  technologies: ['Brand Identity', 'Logo Design'],
  image: logoImage,
  featured: true,
  industry: 'Technology',
  style: 'Modern App Icon',
}
```

No component changes are required when adding new portfolio items.

## Current Portfolio Categories

- Web Applications
- Backend APIs
- Full Stack
- Mobile Apps
- UI/UX
- Logo Design

## Deployment

The project can be deployed to any static hosting platform that supports Vite builds, including:

- Vercel
- Netlify
- AWS Amplify
- GitHub Pages
- Firebase Hosting

Production build output is generated in:

```text
dist/
```

## Notes

- Replace placeholder social links in `Contact.tsx` and `Footer.tsx` when final URLs are available.
- Add the final resume PDF as `public/resume.pdf` to enable the Download Resume button.
- Update SEO URLs and Open Graph image in `App.tsx` before public deployment.

## Author

**Haris Ijaz**  
Software Engineer and Freelancer  
Email: [harisijaz278@gmail.com](mailto:harisijaz278@gmail.com)
