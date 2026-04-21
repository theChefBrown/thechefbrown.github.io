import { motion } from 'framer-motion'
import { MapPin, GraduationCap, Globe } from 'lucide-react'

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '3',  label: 'Companies' },
  { value: '15+', label: 'Technologies' },
]

const languages = [
  { lang: 'Hungarian', level: 'Native'     },
  { lang: 'Romanian',  level: 'Native'     },
  { lang: 'English',   level: 'B2 Advanced' },
  { lang: 'German',    level: 'Basic'       },
]

const fadeLeft  = { hidden: { opacity: 0, x: -50 }, show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } } }
const fadeRight = { hidden: { opacity: 0, x:  50 }, show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.15 } } }
const fadeUp    = { hidden: { opacity: 0, y:  30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } } }

export default function About() {
  return (
    <section id="about" className="relative section-padding overflow-hidden">
      {/* Ambient orb */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-16"
        >
          <p className="text-purple-400 font-semibold text-xs tracking-[0.25em] uppercase mb-3">Who I am</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="h-1 w-16 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* ── Photo ── */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-br from-purple-500 via-cyan-500 to-pink-500 opacity-70 blur-[2px]" />
              {/* Photo */}
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden bg-[#0f0f1f]">
                <img
                  src="./images/pic_1.jpg"
                  alt="Szakacs Barna"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => { e.target.style.display = 'none' }}
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-5 -right-5 glass rounded-2xl px-4 py-2.5 border border-white/10 shadow-xl shadow-black/30"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-sm font-semibold text-white whitespace-nowrap">Open to work</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ── Text ── */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="space-y-7"
          >
            <div className="space-y-4 text-slate-300 leading-relaxed text-[15px]">
              <p>
                Computer Science and Electrical Engineering graduate from{' '}
                <span className="text-purple-400 font-semibold">Transilvania University of Brașov, Romania</span>.
                Over the course of five years across three companies, I have evolved into a versatile full-stack
                developer with a strong track record in digital growth, e-commerce, and performance-driven web
                engineering.
              </p>
              <p>
                My work spans custom Shopify Liquid storefronts, WordPress platforms, and full-stack applications
                built on{' '}
                <span className="text-cyan-400 font-semibold">React, Vite, Supabase &amp; Vercel</span>. Beyond
                writing code, I bring hands-on expertise in SEO strategy, local search optimisation, content
                production, and measurable lead generation — delivering end-to-end digital solutions that create
                real business impact.
              </p>
            </div>

            {/* Info pills */}
            <div className="flex flex-wrap gap-2">
              {[
                { icon: <MapPin size={13} className="text-purple-400" />,      text: 'Brașov, Romania'           },
                { icon: <GraduationCap size={13} className="text-cyan-400" />, text: 'CS & Electrical Engineering' },
                { icon: <Globe size={13} className="text-pink-400" />,         text: '4 Languages'               },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass text-slate-300 text-xs font-medium">
                  {icon}
                  {text}
                </div>
              ))}
            </div>

            {/* Languages */}
            <div>
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest mb-3">Languages</p>
              <div className="flex flex-wrap gap-2">
                {languages.map(({ lang, level }) => (
                  <span
                    key={lang}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/[0.05] border border-white/10 text-slate-300"
                  >
                    {lang}{' '}
                    <span className="text-purple-400">— {level}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="glass rounded-2xl p-4 text-center border border-white/[0.06] hover:border-purple-500/30 transition-all duration-300"
                >
                  <p className="text-2xl sm:text-3xl font-black gradient-text-purple-cyan mb-1">{value}</p>
                  <p className="text-slate-500 text-[11px] font-medium">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
