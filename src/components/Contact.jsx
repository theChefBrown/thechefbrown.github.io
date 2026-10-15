import { useState } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { Mail, Linkedin, Send, CheckCircle2, ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../i18n'
import ScrollPanel from './ScrollPanel'
import SectionHeading from './SectionHeading'

const contactDetails = [
  {
    icon: Mail,
    tile: 'bg-blue-100 text-blue-600',
    value: 'szakacs.barna.dev@gmail.com',
    href: 'mailto:szakacs.barna.dev@gmail.com',
  },
  {
    icon: Linkedin,
    tile: 'bg-sky-100 text-sky-600',
    value: 'Szakacs Barna',
    href: 'https://www.linkedin.com/in/szakacs-barna-467018244',
    external: true,
  },
]

const inputClass =
  'w-full rounded-xl border border-white bg-white/75 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 shadow-sm outline-none transition-all focus:border-blue-300 focus:bg-white focus:ring-2 focus:ring-blue-400/30'
const labelClass = 'mb-2 block text-[11px] font-bold uppercase tracking-wider text-slate-500'

export default function Contact() {
  const { t } = useLanguage()
  const reduce = useReducedMotion()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const { scrollYProgress } = useScroll()
  const orbY = useTransform(scrollYProgress, [0.75, 1], [reduce ? 0 : 90, reduce ? 0 : -50])
  const orbRotate = useTransform(scrollYProgress, [0.75, 1], [0, reduce ? 0 : 50])

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = `Portfolio Contact from ${form.name}`
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    window.location.href = `mailto:szakacs.barna.dev@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <ScrollPanel id="contact" className="relative overflow-hidden p-6 sm:p-10 lg:p-14">
      {/* Glass orb */}
      <motion.div
        aria-hidden
        style={{
          y: orbY,
          rotate: orbRotate,
          background:
            'radial-gradient(circle at 30% 28%, #fff 0%, rgba(255,255,255,0.85) 7%, rgba(186,214,255,0.8) 30%, rgba(99,140,255,0.6) 62%, rgba(79,70,229,0.5) 100%)',
          boxShadow:
            'inset -24px -34px 60px rgba(79,70,229,0.35), inset 22px 22px 50px rgba(255,255,255,0.85), 0 30px 80px rgba(59,130,246,0.3)',
        }}
        className="pointer-events-none absolute -bottom-24 -right-20 h-80 w-80 rounded-full"
      />

      <div className="relative grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <SectionHeading eyebrow={t.contact.eyebrow} title={t.contact.title} />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-600">{t.contact.intro}</p>

          <div className="mt-8 space-y-3">
            {contactDetails.map(({ icon: Icon, tile, value, href, external }, i) => (
              <a
                key={value}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="glass-card group flex items-center gap-4 p-4"
              >
                <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${tile}`}>
                  <Icon size={18} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[10.5px] font-bold uppercase tracking-wider text-slate-400">{t.contact.details[i]}</span>
                  <span className="block truncate text-sm font-bold text-[#0b1220]">{value}</span>
                </span>
                <ArrowUpRight size={16} className="text-slate-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-600" />
              </a>
            ))}
          </div>

          <p className="mt-6 max-w-md text-xs leading-relaxed text-slate-500">{t.contact.note}</p>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40, rotateX: reduce ? 0 : 10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ transformPerspective: 1200 }}
          className="glass-float space-y-5 !rounded-[1.75rem] p-6 sm:p-8 lg:col-span-7"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="contact-name" className={labelClass}>{t.contact.name}</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder={t.contact.namePlaceholder}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="contact-email" className={labelClass}>{t.contact.email}</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder={t.contact.emailPlaceholder}
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label htmlFor="contact-message" className={labelClass}>{t.contact.message}</label>
            <textarea
              id="contact-message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={6}
              placeholder={t.contact.messagePlaceholder}
              className={`${inputClass} resize-none`}
            />
          </div>

          <button type="submit" className="btn-dark w-full !py-3.5">
            {sent ? <CheckCircle2 size={17} /> : <Send size={17} />}
            {sent ? t.contact.sending : t.contact.send}
          </button>
        </motion.form>
      </div>
    </ScrollPanel>
  )
}
