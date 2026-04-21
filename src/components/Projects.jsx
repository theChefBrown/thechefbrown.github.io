import { motion } from 'framer-motion'
import { ExternalLink, Github, Zap, BarChart2, Sliders, Car, TrendingUp, CalendarDays, Package, PieChart } from 'lucide-react'

const projects = [
  {
    title: 'Ambisun Analytics',
    subtitle: 'Full-Stack Business Intelligence Dashboard',
    description:
      'A custom internal analytics platform built end-to-end for Ambisun, replacing manual spreadsheet tracking with a real-time business intelligence suite. The app centralises order management, product performance data, and sales analytics — giving the team a single source of truth for operational decisions.',
    tags: ['Next.js', 'React', 'Supabase', 'Vercel', 'Tailwind CSS', 'Recharts', 'PostgreSQL'],
    liveUrl: 'https://ambisun-intern.vercel.app/',
    gradient: 'from-purple-500 to-pink-500',
    borderColor: 'border-purple-500/25',
    glowColor: 'rgba(139,92,246,0.12)',
    features: [
      { icon: TrendingUp,   text: 'KPI dashboard: total orders, products sold, and period-over-period trends' },
      { icon: BarChart2,    text: 'Order timeline and product performance charts with date range filtering' },
      { icon: PieChart,     text: 'Product mix breakdown across pergola, glass, carport, and screen systems' },
      { icon: CalendarDays, text: 'Calendar view, order management, and analytics pages' },
    ],
    status: 'Live',
    statusColor: 'bg-emerald-400',
  },
  {
    title: 'EonDrive',
    subtitle: 'EV Range Comparison & Calculator',
    description:
      'A full-stack web application for browsing, comparing, and calculating the real-world range of electric vehicles. Users can filter 20+ EV models by make, price, and range, compare up to three vehicles side-by-side, and simulate adjusted range based on temperature, driving style, and air conditioning usage.',
    tags: ['TypeScript', 'Express.js', 'Node.js', 'JavaScript', 'Tailwind CSS', 'Docker', 'REST API'],
    liveUrl: 'https://thechefbrown.github.io/eondrive/public/index.html',
    githubUrl: 'https://github.com/theChefBrown/eondrive',
    gradient: 'from-cyan-500 to-blue-600',
    borderColor: 'border-cyan-500/25',
    glowColor: 'rgba(6,182,212,0.12)',
    features: [
      { icon: Car,      text: '20+ EV models with full specifications' },
      { icon: BarChart2, text: 'Side-by-side comparison of up to 3 vehicles' },
      { icon: Sliders,  text: 'Range calculator: temperature, driving style & AC variables' },
      { icon: Zap,      text: 'KM / Miles toggle and light / dark theme' },
    ],
    status: 'Live',
    statusColor: 'bg-emerald-400',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative section-padding overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-cyan-600/8 rounded-full blur-[140px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 font-semibold text-xs tracking-[0.25em] uppercase mb-3">What I've built</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Projects</h2>
          <div className="h-1 w-16 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
        </motion.div>

        <div className="flex flex-col gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: 'easeOut' }}
              className={`relative rounded-3xl border ${project.borderColor} overflow-hidden`}
              style={{ boxShadow: `0 8px 50px ${project.glowColor}` }}
            >
              {/* Top gradient accent bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${project.gradient}`} />

              <div className="p-7 sm:p-10 grid lg:grid-cols-5 gap-8 items-start bg-white/[0.03] backdrop-blur-sm">
                {/* ── Left: info (3 cols) ── */}
                <div className="lg:col-span-3 space-y-6">
                  {/* Header row */}
                  <div className="flex flex-wrap items-start gap-3">
                    <div>
                      <div className="flex items-center gap-2.5 mb-1">
                        <h3 className="text-2xl font-black text-white">{project.title}</h3>
                        <span
                          className="inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-400"
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${project.statusColor} animate-pulse`} />
                          {project.status}
                        </span>
                      </div>
                      <p className={`text-sm font-semibold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed">{project.description}</p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.08] text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA buttons */}
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r ${project.gradient} hover:opacity-90 transition-all duration-300 shadow-lg hover:-translate-y-0.5 active:scale-95`}
                      style={{ boxShadow: `0 4px 20px ${project.glowColor}` }}
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border border-white/10 hover:border-white/25 text-slate-300 hover:text-white transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
                      >
                        <Github size={14} />
                        Source Code
                      </a>
                    )}
                  </div>
                </div>

                {/* ── Right: feature list (2 cols) ── */}
                <div className="lg:col-span-2 space-y-3">
                  <p className="text-slate-500 text-[11px] font-semibold uppercase tracking-widest mb-4">Key Features</p>
                  {project.features.map(({ icon: Icon, text }) => (
                    <div
                      key={text}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.07] transition-colors duration-200"
                    >
                      <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center shrink-0`}>
                        <Icon size={13} className="text-white" />
                      </div>
                      <p className="text-slate-300 text-xs leading-snug">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
