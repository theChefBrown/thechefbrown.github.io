import { motion } from 'framer-motion'
import { Award, Globe, BookOpen, Code, ExternalLink } from 'lucide-react'

const certs = [
  {
    icon: Award,
    iconColor: 'text-yellow-400',
    gradient: 'from-yellow-500/15 to-orange-500/15',
    border: 'border-yellow-500/20',
    glow: 'rgba(234,179,8,0.15)',
    title: 'Networking Essentials',
    issuer: 'Cisco',
    description:
      'Fundamentals of networking, how devices communicate, network addressing and essential services.',
    link: {
      label: 'View Credly Badge',
      href: 'https://www.credly.com/badges/103f4a50-4d90-4dcb-8bcf-db1d66f1b610',
    },
  },
  {
    icon: Globe,
    iconColor: 'text-cyan-400',
    gradient: 'from-cyan-500/15 to-blue-500/15',
    border: 'border-cyan-500/20',
    glow: 'rgba(6,182,212,0.15)',
    title: 'B2 Certificate in Advanced English',
    issuer: 'Cambridge Assessment English',
    description:
      'Upper-Intermediate / B2 level English proficiency certified by Cambridge.',
    link: {
      label: 'View Certificate',
      href: './docs/Cambridge.pdf',
    },
  },
  {
    icon: BookOpen,
    iconColor: 'text-purple-400',
    gradient: 'from-purple-500/15 to-pink-500/15',
    border: 'border-purple-500/20',
    glow: 'rgba(139,92,246,0.15)',
    title: 'Front-End Development',
    issuer: 'Teachadviser Academy',
    description:
      'Full front-end curriculum: HTML, CSS, Bootstrap, JavaScript. Back-end module: PHP & MySQL.',
  },
  {
    icon: Code,
    iconColor: 'text-emerald-400',
    gradient: 'from-emerald-500/15 to-teal-500/15',
    border: 'border-emerald-500/20',
    glow: 'rgba(16,185,129,0.15)',
    title: "Bachelor\u2019s Degree Project \u2014 eVerse",
    issuer: 'Transilvania University, Bra\u015fov',
    description:
      "Full-stack e-learning platform developed as the Bachelor\u2019s thesis: an online educational environment for future electrical engineers, covering curriculum delivery, user management, and interactive content.",
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="relative section-padding overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-yellow-400 font-semibold text-xs tracking-[0.25em] uppercase mb-3">Achievements</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Certifications &amp; Education</h2>
          <div className="h-1 w-16 mx-auto rounded-full bg-gradient-to-r from-yellow-500 to-orange-500" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certs.map((cert, i) => {
            const Icon = cert.icon
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
                className={`relative rounded-2xl p-6 border ${cert.border} bg-gradient-to-br ${cert.gradient} backdrop-blur-sm hover:-translate-y-1.5 transition-all duration-400 hover:shadow-2xl hover:shadow-black/30 flex flex-col`}
                style={{ boxShadow: `0 4px 30px ${cert.glow}` }}
              >
                <div className={`w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center mb-4 ${cert.iconColor}`}>
                  <Icon size={20} />
                </div>

                <h3 className="font-bold text-white text-sm leading-snug mb-1">{cert.title}</h3>
                <p className="text-slate-500 text-[11px] font-semibold uppercase tracking-wider mb-3">
                  {cert.issuer}
                </p>
                <p className="text-slate-300 text-xs leading-relaxed flex-1 mb-4">{cert.description}</p>

                {cert.link && (
                  <a
                    href={cert.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/70 hover:text-white transition-colors group mt-auto"
                  >
                    {cert.link.label}
                    <ExternalLink
                      size={11}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </a>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
