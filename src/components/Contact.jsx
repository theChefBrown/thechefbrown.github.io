import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Instagram, Linkedin, Send, CheckCircle2 } from 'lucide-react'

const contactDetails = [
  {
    icon: Mail,
    iconColor: 'text-purple-400',
    label: 'Email',
    value: 'szakacs.barna.dev@gmail.com',
    href: 'mailto:szakacs.barna.dev@gmail.com',
    border: 'border-purple-500/20',
  },
  {
    icon: Phone,
    iconColor: 'text-cyan-400',
    label: 'Phone',
    value: '+40 743 064 917',
    href: 'tel:+40743064917',
    border: 'border-cyan-500/20',
  },
  {
    icon: Linkedin,
    iconColor: 'text-blue-400',
    label: 'LinkedIn',
    value: 'Szakacs Barna',
    href: 'https://www.linkedin.com/in/szakacs-barna-467018244',
    external: true,
    border: 'border-blue-500/20',
  },
  {
    icon: Instagram,
    iconColor: 'text-pink-400',
    label: 'Instagram',
    value: '@barni_szaky',
    href: 'https://www.instagram.com/barni_szaky/',
    external: true,
    border: 'border-pink-500/20',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = `Portfolio Contact from ${form.name}`
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    window.location.href = `mailto:barni_szakacs@yahoo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section id="contact" className="relative section-padding overflow-hidden">
      {/* Ambient */}
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-cyan-600/8 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 font-semibold text-xs tracking-[0.25em] uppercase mb-3">Get in touch</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Contact Me</h2>
          <div className="h-1 w-16 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-purple-500" />
          <p className="text-slate-400 mt-6 max-w-xl mx-auto text-sm leading-relaxed">
            Have a project, an idea, or an opportunity? I'd love to hear from you — whether it's a quick question or a detailed brief.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* ── Form (3/5 width) ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white placeholder-slate-600 text-sm focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.07] transition-all duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white placeholder-slate-600 text-sm focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.07] transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white placeholder-slate-600 text-sm focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.07] transition-all duration-200 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/35 transition-shadow duration-300"
              >
                {sent ? (
                  <>
                    <CheckCircle2 size={17} />
                    Opening your email client…
                  </>
                ) : (
                  <>
                    <Send size={17} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* ── Info (2/5 width) ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="lg:col-span-2 space-y-5"
          >
            <div className="glass rounded-2xl p-7 border border-white/[0.06] space-y-5">
              <h3 className="font-bold text-white text-base">Reach me directly</h3>

              {contactDetails.map(({ icon: Icon, iconColor, label, value, href, external, border }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 group"
                >
                  <div
                    className={`w-11 h-11 rounded-xl glass border ${border} flex items-center justify-center ${iconColor} shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-[11px] font-semibold uppercase tracking-wider mb-0.5">{label}</p>
                    <p className="text-slate-300 group-hover:text-white transition-colors text-sm font-medium">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="glass rounded-2xl p-6 border border-white/[0.06]">
              <p className="text-slate-400 text-sm leading-relaxed">
                I'm currently open to new roles and freelance projects — frontend, full-stack, Shopify, WordPress, SEO strategy, or digital growth consulting. Let's build something great.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
