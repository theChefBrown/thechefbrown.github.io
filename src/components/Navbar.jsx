import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../i18n'

const sectionIds = ['home', 'about', 'experience', 'skills', 'projects', 'certifications', 'contact']

export default function Navbar() {
  const { t } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home')

  // A thin band across the middle of the viewport decides the active section, even for very tall ones.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="fixed inset-x-0 top-3 z-50 px-3 sm:px-6"
    >
      <div className="glass-float mx-auto flex max-w-[1200px] items-center justify-between gap-3 rounded-[1.5rem] px-3 py-2.5 sm:px-4">
        <a href="#home" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#0b1220] text-base font-extrabold text-white">B</span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-bold text-[#0b1220]">Szakacs Barna</span>
            <span className="block text-[11px] text-slate-500">{t.hero.roles[0]}</span>
          </span>
        </a>

        <nav className="hidden lg:block" aria-label="Primary">
          <ul className="flex items-center gap-0.5 rounded-full bg-white/50 p-1">
            {sectionIds.map((id, i) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`relative block rounded-full px-3.5 py-1.5 text-[13px] font-semibold transition-colors ${
                    active === id ? 'text-[#0b1220]' : 'text-slate-500 hover:text-[#0b1220]'
                  }`}
                >
                  {active === id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-white shadow-sm"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative">{t.nav[i]}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="btn-dark hidden !px-5 !py-2.5 lg:inline-flex">
          {t.navbar.talk}
          <ArrowUpRight size={15} />
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={t.navbar.menu}
          aria-expanded={menuOpen}
          className="grid h-10 w-10 place-items-center rounded-xl bg-white/70 text-slate-700 transition-colors hover:text-blue-700 lg:hidden"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="glass-float mx-auto mt-2 max-w-[1200px] rounded-2xl p-2 lg:hidden"
          >
            {sectionIds.map((id, i) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className={`block rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                  active === id ? 'bg-white text-[#0b1220]' : 'text-slate-600 hover:bg-white/70'
                }`}
              >
                {t.nav[i]}
              </a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-dark mt-2 w-full">
              {t.navbar.talk}
              <ArrowUpRight size={15} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
