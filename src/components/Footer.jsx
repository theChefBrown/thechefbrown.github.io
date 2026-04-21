import { motion } from 'framer-motion'
import { Github, Instagram, Facebook, Twitter, Linkedin, Heart } from 'lucide-react'

const quickLinks = [
  { name: 'Home',           href: '#home'           },
  { name: 'About',          href: '#about'          },
  { name: 'Experience',     href: '#experience'     },
  { name: 'Skills',         href: '#skills'         },
  { name: 'Projects',       href: '#projects'       },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact',        href: '#contact'        },
]

const socials = [
  { icon: Github,    href: 'https://github.com/theChefBrown',                                label: 'GitHub'    },
  { icon: Linkedin,  href: 'https://www.linkedin.com/in/szakacs-barna-467018244',            label: 'LinkedIn'  },
  { icon: Instagram, href: 'https://www.instagram.com/barni_szaky/',                         label: 'Instagram' },
  { icon: Facebook,  href: 'https://www.facebook.com/barni.szakacs',    label: 'Facebook'  },
  { icon: Twitter,   href: 'https://twitter.com/ChefBrown10',           label: 'Twitter'   },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] pt-14 pb-8 overflow-hidden">
      {/* Subtle top gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <a href="#home" className="inline-block text-2xl font-black tracking-tight">
              <span className="gradient-text-purple-cyan">Barna</span>
              <span className="text-white">.</span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Full Stack Developer &amp; Digital Growth Specialist based in Brașov, Romania. Building modern web experiences that deliver real results.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-white font-semibold text-xs uppercase tracking-widest mb-5">Quick Links</p>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <p className="text-white font-semibold text-xs uppercase tracking-widest mb-5">Follow Me</p>
            <div className="flex flex-wrap gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  className="w-11 h-11 rounded-xl glass border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white hover:border-purple-500/30 hover:bg-purple-500/10 transition-colors duration-300"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>

            <div className="mt-6 space-y-1">
              <p className="text-slate-500 text-xs">barni_szakacs@yahoo.com</p>
              <p className="text-slate-500 text-xs">Brașov, Romania</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.05] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs flex items-center gap-1.5">
            Made with{' '}
            <Heart size={12} className="text-pink-500 fill-pink-500" />{' '}
            by Szakacs Barna &copy; 2026
          </p>
          <p className="text-slate-600 text-xs">Built with React · Vite · Tailwind CSS · Framer Motion</p>
        </div>
      </div>
    </footer>
  )
}
