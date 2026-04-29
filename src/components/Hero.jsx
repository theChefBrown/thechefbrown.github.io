import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Instagram, Mail } from 'lucide-react'

const roles = [
  'Full Stack Developer',
  'Shopify Liquid Expert',
  'Digital Growth Strategist',
  'WordPress Specialist',
  'SEO Engineer',
]

const socials = [
  {
    label: 'GitHub',
    icon: <Github size={18} />,
    href: 'https://github.com/theChefBrown',
  },
  {
    label: 'Instagram',
    icon: <Instagram size={18} />,
    href: 'https://www.instagram.com/barni_szaky/',
  },
  {
    label: 'Email',
    icon: <Mail size={18} />,
    href: 'mailto:szakacs.barna.dev@ygmail.com',
  },
]

function useTypingEffect(words) {
  const [index,     setIndex]     = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting,  setDeleting]  = useState(false)

  useEffect(() => {
    const word = words[index]
    let timeout

    if (!deleting) {
      if (displayed.length < word.length) {
        timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 70)
      } else {
        timeout = setTimeout(() => setDeleting(true), 2200)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
      } else {
        setDeleting(false)
        setIndex((prev) => (prev + 1) % words.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, index, words])

  return displayed
}

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function Hero() {
  const typed = useTypingEffect(roles)

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ── Background ─────────────────────────────────────── */}
      <div className="absolute inset-0 bg-[#070714]" />

      {/* Grid texture */}
      <div className="absolute inset-0 grid-bg opacity-100" />

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full bg-purple-700/20 blur-[130px] animate-pulse-slow" />
      <div
        className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] rounded-full bg-cyan-500/15 blur-[110px] animate-pulse-slow"
        style={{ animationDelay: '2.5s' }}
      />
      <div
        className="absolute top-2/3 left-1/3 w-[300px] h-[300px] rounded-full bg-pink-600/10 blur-[90px] animate-pulse-slow"
        style={{ animationDelay: '4s' }}
      />

      {/* ── Content ────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center pt-24 pb-20">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-5"
        >
          {/* Availability badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-semibold tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Open to new opportunities
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.p variants={itemVariants} className="text-slate-400 text-lg">
            Hi, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-7xl md:text-8xl font-black leading-none tracking-tight"
          >
            <span
              className="inline-block"
              style={{
                background: 'linear-gradient(135deg, #c084fc 0%, #38bdf8 50%, #f472b6 100%)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Szakacs Barna
            </span>
          </motion.h1>

          {/* Typing role */}
          <motion.div
            variants={itemVariants}
            className="h-10 flex items-center justify-center text-xl sm:text-2xl font-semibold text-slate-300"
          >
            <span>{typed}</span>
            <span className="ml-1 w-[2px] h-6 bg-cyan-400 rounded-full animate-pulse" />
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-slate-400 text-base sm:text-lg leading-relaxed"
          >
            CS & Electrical Engineering graduate from{' '}
            <span className="text-purple-300 font-medium">Transilvania University, Brașov</span>.{' '}
            I craft high-performance web experiences, e-commerce solutions, and full-stack applications — from pixel-perfect frontends to SEO-driven growth strategies.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <a
              href="#contact"
              className="w-48 sm:w-auto px-8 py-3.5 rounded-full font-semibold text-sm bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/45 transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
            >
              Get in Touch
            </a>
            <a
              href="#experience"
              className="w-48 sm:w-auto px-8 py-3.5 rounded-full font-semibold text-sm border border-white/10 hover:border-white/25 text-slate-300 hover:text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
            >
              View My Work
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mt-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.label !== 'Email' ? '_blank' : undefined}
                rel={s.label !== 'Email' ? 'noopener noreferrer' : undefined}
                aria-label={s.label}
                className="w-11 h-11 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-300 hover:-translate-y-1"
              >
                {s.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors group"
      >
        <span className="text-[10px] font-semibold tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={15} />
        </motion.div>
      </motion.a>
    </section>
  )
}
