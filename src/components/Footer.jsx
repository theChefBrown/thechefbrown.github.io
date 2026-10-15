import { motion } from 'framer-motion'
import { Github, Twitter, Linkedin, Heart } from 'lucide-react'
import { useLanguage } from '../i18n'

const sectionIds = ['home', 'about', 'experience', 'skills', 'projects', 'certifications', 'contact']

const socials = [
  { icon: Github, href: 'https://github.com/theChefBrown', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/szakacs-barna-467018244', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/ChefBrown10', label: 'Twitter' },
]

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="relative z-10 mx-auto max-w-[1200px] px-3 pb-24 sm:px-6">
      <div className="glass-panel p-6 sm:p-10">
        <div className="grid gap-10 sm:grid-cols-3">
          <div className="space-y-4">
            <a href="#home" className="inline-flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#0b1220] text-base font-extrabold text-white">B</span>
              <span className="text-base font-extrabold text-[#0b1220]">Szakacs Barna</span>
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-slate-600">{t.footer.description}</p>
          </div>

          <div>
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.22em] text-slate-400">{t.footer.quick}</p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {sectionIds.map((id, i) => (
                <li key={id}>
                  <a href={`#${id}`} className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600">
                    {t.nav[i]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.22em] text-slate-400">{t.footer.follow}</p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -3, scale: 1.08 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  className="grid h-11 w-11 place-items-center rounded-xl border border-white bg-white/70 text-slate-600 transition-colors hover:text-blue-600"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
            <div className="mt-6 space-y-1 text-xs text-slate-500">
              <p>szakacs.barna.dev@gmail.com</p>
              <p>Brașov, Romania</p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-200/70 pt-6 sm:flex-row">
          <p className="flex items-center gap-1.5 text-xs text-slate-500">
            {t.footer.made} <Heart size={12} className="fill-blue-500 text-blue-500" /> {t.footer.by} &copy; 2026
          </p>
          <p className="text-xs text-slate-400">{t.footer.built}</p>
        </div>
      </div>
    </footer>
  )
}
