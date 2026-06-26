import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { SiFiverr, SiUpwork } from 'react-icons/si'
import Button from './Button'
import SectionTitle from './SectionTitle'

interface ContactForm {
  name: string
  email: string
  subject: string
  projectDescription: string
  message: string
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

const initialForm: ContactForm = {
  name: '',
  email: '',
  subject: '',
  projectDescription: '',
  message: '',
}

const socialLinks = [
  { label: 'GitHub', href: '#', icon: FaGithub },
  { label: 'LinkedIn', href: '#', icon: FaLinkedin },
  { label: 'Upwork', href: '#', icon: SiUpwork },
  { label: 'Fiverr', href: '#', icon: SiFiverr },
  { label: 'WhatsApp', href: '#', icon: FaWhatsapp },
]

const Contact = () => {
  const [form, setForm] = useState<ContactForm>(initialForm)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [notice, setNotice] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const validate = () => {
    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      return 'Please fill in name, email, subject, and message.'
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      return 'Please enter a valid email address.'
    }

    return ''
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const validationError = validate()

    if (validationError) {
      setStatus('error')
      setNotice(validationError)
      return
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setStatus('error')
      setNotice('EmailJS environment variables are missing.')
      return
    }

    try {
      setStatus('loading')
      setNotice('')
      await emailjs.send(serviceId, templateId, { ...form }, { publicKey })
      setStatus('success')
      setNotice('Message sent successfully. I will get back to you soon.')
      setForm(initialForm)
    } catch {
      setStatus('error')
      setNotice('Message could not be sent. Please try again or email directly.')
    }
  }

  return (
    <section id="contact" className="bg-slate-950 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Contact"
          title="Start a project or technical conversation"
          description="Use the form for project inquiries, freelance work, consulting, or recruiter conversations."
        />
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="glass rounded-2xl p-5 sm:rounded-3xl sm:p-8">
            <h3 className="text-xl font-bold text-white sm:text-2xl">Haris Ijaz</h3>
            <div className="mt-6 space-y-4 text-slate-300">
              <p>
                Email:{' '}
                <a className="text-sky-300 hover:text-sky-200" href="mailto:harisijaz278@gmail.com">
                  harisijaz278@gmail.com
                </a>
              </p>
              <p>
                Phone:{' '}
                <a className="text-sky-300 hover:text-sky-200" href="tel:+923184506435">
                  03184506435
                </a>
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2 sm:gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  aria-label={label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-3 text-xl text-slate-200 transition hover:border-sky-400/60 hover:text-sky-300 sm:p-4"
                  href={href}
                  key={label}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </aside>
          <form className="glass rounded-2xl p-5 sm:rounded-3xl sm:p-8" onSubmit={handleSubmit}>
            <div className="grid gap-5 sm:grid-cols-2">
              <input
                className="rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400"
                name="name"
                onChange={handleChange}
                placeholder="Name"
                value={form.name}
              />
              <input
                className="rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400"
                name="email"
                onChange={handleChange}
                placeholder="Email"
                type="email"
                value={form.email}
              />
            </div>
            <input
              className="mt-5 w-full rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400"
              name="subject"
              onChange={handleChange}
              placeholder="Subject"
              value={form.subject}
            />
            <textarea
              className="mt-5 min-h-32 w-full resize-y rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400"
              name="projectDescription"
              onChange={handleChange}
              placeholder="Project Description"
              value={form.projectDescription}
            />
            <textarea
              className="mt-5 min-h-36 w-full resize-y rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400"
              name="message"
              onChange={handleChange}
              placeholder="Message"
              value={form.message}
            />
            {notice ? (
              <p className={`mt-5 rounded-xl px-4 py-3 text-sm ${status === 'success' ? 'bg-emerald-400/10 text-emerald-200' : 'bg-red-400/10 text-red-200'}`}>
                {notice}
              </p>
            ) : null}
            <div className="mt-6">
              <Button disabled={status === 'loading'} type="submit">
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
