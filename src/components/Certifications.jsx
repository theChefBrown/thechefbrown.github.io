import { motion, useReducedMotion } from 'framer-motion'
import { Award, Globe, BookOpen, Code, ExternalLink } from 'lucide-react'
import { useLanguage } from '../i18n'
import ScrollPanel from './ScrollPanel'
import SectionHeading from './SectionHeading'

const certs = [
  {
    icon: Award,
    tile: 'bg-blue-100 text-blue-600',
    issuer: 'Cisco',
    href: 'https://www.credly.com/badges/103f4a50-4d90-4dcb-8bcf-db1d66f1b610',
  },
  {
    icon: Globe,
    tile: 'bg-sky-100 text-sky-600',
    issuer: 'Cambridge Assessment English',
    href: './docs/Cambridge.pdf',
  },
  {
    icon: BookOpen,
    tile: 'bg-indigo-100 text-indigo-600',
    issuer: 'Teachadviser Academy',
  },
  {
    icon: Code,
    tile: 'bg-cyan-100 text-cyan-600',
    issuer: 'Transilvania University, Brașov',
  },
]

export default function Certifications() {
  const { t } = useLanguage()
  const reduce = useReducedMotion()

  return (
    <ScrollPanel id="certifications" className="p-6 sm:p-10 lg:p-14">
      <SectionHeading eyebrow={t.certifications.eyebrow} title={t.certifications.title} className="mb-10" />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {certs.map(({ icon: Icon, tile, issuer, href }, i) => {
          const [title, description] = t.certifications.items[i]
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, rotateX: reduce ? 0 : 14, scale: reduce ? 1 : 0.94 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -4 }}
              style={{ transformPerspective: 1000 }}
              className="glass-card flex flex-col p-6"
            >
              <span className={`mb-5 grid h-11 w-11 place-items-center rounded-xl ${tile}`}>
                <Icon size={20} />
              </span>
              <h3 className="mb-1 text-sm font-extrabold leading-snug text-[#0b1220]">{title}</h3>
              <p className="mb-3 text-[10.5px] font-bold uppercase tracking-wider text-blue-600">{issuer}</p>
              <p className="mb-4 flex-1 text-xs leading-relaxed text-slate-600">{description}</p>
              {href && (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-auto inline-flex items-center gap-1.5 text-xs font-bold text-[#0b1220] transition-colors hover:text-blue-600"
                >
                  {t.certifications.links[i]}
                  <ExternalLink size={11} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              )}
            </motion.div>
          )
        })}
      </div>
    </ScrollPanel>
  )
}
