import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Github, Linkedin, Mail, Sparkles } from 'lucide-react'
import { useLanguage } from '../i18n'

const socials = [
  { label: 'GitHub', icon: Github, href: 'https://github.com/theChefBrown' },
  { label: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/szakacs-barna-467018244' },
  { label: 'Email', icon: Mail, href: 'mailto:szakacs.barna.dev@gmail.com' },
]

const companies = ['Ambisun', 'GoSocial', 'Flashnet']

function useTypingEffect(words) {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index % words.length]
    let timeout

    if (!deleting) {
      if (displayed.length < word.length) {
        timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 70)
      } else {
        timeout = setTimeout(() => setDeleting(true), 2200)
      }
    } else if (displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else {
      setDeleting(false)
      setIndex((prev) => (prev + 1) % words.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, index, words])

  return displayed
}

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function Hero() {
  const { t } = useLanguage()
  const typed = useTypingEffect(t.hero.roles)
  const ref = useRef(null)
  const reduce = useReducedMotion()

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const textY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 70])
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, reduce ? 1 : 0.1])
  const frameY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90])
  const frameScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.14])
  const frameTilt = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 10])
  const badgeUp = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -70])
  const badgeDown = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 60])

  const [yearsValue, yearsLabel] = t.about.stats[0]

  return (
    <section ref={ref} id="home" className="scroll-mt-28 pt-24 sm:pt-28">
      <div className="glass-panel relative overflow-hidden p-6 sm:p-10 lg:p-14">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-28 -top-28 h-[460px] w-[460px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(147,197,253,0.6), rgba(147,197,253,0) 65%)' }}
        />

        <div className="relative grid items-center gap-12 lg:grid-cols-12">
          {/* Text */}
          <motion.div style={{ y: textY, opacity: textOpacity }} className="lg:col-span-7">
            <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col items-start gap-5">
              <motion.p variants={item} className="eyebrow">{t.hero.greeting}</motion.p>

              <motion.h1
                variants={item}
                className="text-5xl font-extrabold leading-[1.02] tracking-tight text-[#0b1220] sm:text-6xl xl:text-7xl"
              >
                Szakacs Barna
              </motion.h1>

              <motion.div variants={item} className="flex h-10 items-center text-2xl font-bold sm:text-3xl">
                <span className="gradient-text">{typed}</span>
                <span className="ml-1 h-7 w-[3px] animate-pulse rounded-full bg-blue-500" />
              </motion.div>

              <motion.p variants={item} className="max-w-xl text-[15px] leading-relaxed text-slate-600 sm:text-base">
                {t.hero.tagline}
              </motion.p>

              <motion.div variants={item} className="flex flex-wrap items-center gap-3">
                <a href="#projects" className="btn-dark">
                  {t.hero.work}
                  <ArrowUpRight size={16} />
                </a>
                <a href="#contact" className="btn-glass">{t.hero.contact}</a>
                <div className="flex items-center gap-2 sm:ml-2">
                  {socials.map(({ label, icon: Icon, href }) => (
                    <a
                      key={label}
                      href={href}
                      target={label !== 'Email' ? '_blank' : undefined}
                      rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                      aria-label={label}
                      className="grid h-11 w-11 place-items-center rounded-full border border-white bg-white/70 text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-blue-600"
                    >
                      <Icon size={17} />
                    </a>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={item}
                className="mt-3 flex w-full flex-wrap items-center gap-x-8 gap-y-2 border-t border-slate-200/70 pt-6"
              >
                <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                  {t.experience.eyebrow}
                </span>
                {companies.map((name) => (
                  <span key={name} className="text-lg font-extrabold tracking-tight text-slate-400">{name}</span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Portrait */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto w-full max-w-[420px]"
            >
              <motion.div
                style={{ y: frameY, scale: frameScale, rotateX: frameTilt, transformPerspective: 1200, transformOrigin: '50% 100%' }}
                className="relative aspect-[4/5]"
              >
                <div className="absolute inset-x-0 bottom-0 top-[9%] rounded-[2.5rem] border border-white bg-gradient-to-b from-white/80 via-sky-100/70 to-blue-200/60 shadow-[0_40px_80px_-30px_rgba(37,99,235,0.45)]" />
                <div className="absolute inset-x-3 bottom-3 top-[12%] rounded-[2.1rem] border border-white/70" />
                <img
                  src="./images/portrait.webp"
                  alt="Szakacs Barna"
                  width="1400"
                  height="2237"
                  fetchpriority="high"
                  draggable="false"
                  className="absolute bottom-0 left-1/2 h-full w-auto max-w-none -translate-x-1/2 select-none"
                  style={{
                    WebkitMaskImage: 'linear-gradient(to bottom, #000 80%, transparent 100%)',
                    maskImage: 'linear-gradient(to bottom, #000 80%, transparent 100%)',
                  }}
                />
              </motion.div>

              <motion.div style={{ y: badgeUp }} className="absolute -right-2 top-4 z-10 sm:-right-6">
                <div className="glass-float animate-float rounded-2xl px-5 py-3 text-center">
                  <p className="gradient-text text-3xl font-extrabold leading-none">{yearsValue}</p>
                  <p className="mt-1 text-[11px] font-semibold text-slate-500">{yearsLabel}</p>
                </div>
              </motion.div>

              <motion.div style={{ y: badgeDown }} className="absolute -left-2 bottom-20 z-10 sm:-left-8">
                <div className="glass-float flex max-w-[220px] items-center gap-3 rounded-2xl px-4 py-3">
                  <span className="relative flex h-2.5 w-2.5 shrink-0">
                    <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/70" />
                    <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  </span>
                  <span className="text-xs font-semibold leading-snug text-slate-700">{t.hero.availability}</span>
                </div>
              </motion.div>

              <motion.div style={{ y: badgeUp }} className="absolute -left-3 top-[34%] z-10 hidden sm:block">
                <div className="glass-float grid h-12 w-12 place-items-center rounded-full text-blue-600">
                  <Sparkles size={20} />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
