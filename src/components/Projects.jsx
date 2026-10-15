import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import {
  ExternalLink, Github, Zap, BarChart2, Sliders, Car, TrendingUp, CalendarDays, PieChart,
  Box, FileText, Users, LayoutDashboard,
} from 'lucide-react'
import { useLanguage } from '../i18n'
import ScrollPanel from './ScrollPanel'
import SectionHeading from './SectionHeading'

const projects = [
  {
    title: 'Ambisun Analytics',
    image: './images/projects/ambisun-analytics.webp',
    tags: ['Next.js', 'React', 'Supabase', 'Vercel', 'Tailwind CSS', 'Recharts', 'PostgreSQL'],
    liveUrl: 'https://ambisun-intern.vercel.app/',
    gradient: 'from-blue-600 to-sky-600',
    icons: [TrendingUp, BarChart2, PieChart, CalendarDays],
  },
  {
    title: 'EonDrive',
    image: './images/projects/eondrive.webp',
    tags: ['TypeScript', 'Express.js', 'Node.js', 'JavaScript', 'Tailwind CSS', 'Docker', 'REST API'],
    liveUrl: 'https://thechefbrown.github.io/eondrive/',
    githubUrl: 'https://github.com/theChefBrown/eondrive',
    gradient: 'from-indigo-600 to-blue-500',
    icons: [Car, BarChart2, Sliders, Zap],
  },
  {
    title: 'PergolaLink Partners Portal',
    image: './images/projects/pergolalink.webp',
    tags: ['Next.js', 'React', 'Laravel', 'MySQL', 'REST API', '3D Configurator', 'PDF Generation'],
    liveUrl: 'https://thechefbrown.github.io/pergolalink-partners-portal/',
    githubUrl: 'https://github.com/theChefBrown/pergolalink-partners-portal',
    gradient: 'from-sky-600 to-cyan-600',
    icons: [Box, FileText, Users, LayoutDashboard],
  },
]

function ProjectCard({ project, index }) {
  const { t } = useLanguage()
  const copy = t.projects.items[index]
  const ref = useRef(null)
  const reduce = useReducedMotion()

  // The screenshot slowly zooms and drifts inside its frame while the card crosses the viewport.
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], reduce ? [1, 1, 1] : [1.2, 1.06, 1.2])
  const imgY = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['-5%', '5%'])

  const host = new URL(project.liveUrl).host
  const flip = index % 2 === 1

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: reduce ? 0 : 60, rotateX: reduce ? 0 : 12, transformPerspective: 1200 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="glass-card grid gap-6 !rounded-[1.75rem] p-4 sm:p-6 lg:grid-cols-12 lg:gap-8"
    >
      {/* Visual + features */}
      <div className={`space-y-4 lg:col-span-6 ${flip ? 'lg:order-2' : ''}`}>
        <div className="overflow-hidden rounded-2xl border border-white bg-white shadow-[0_24px_50px_-24px_rgba(37,99,235,0.5)]">
          <div className="flex items-center gap-1.5 border-b border-slate-100 bg-white px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
            <span className="ml-3 truncate rounded-full bg-slate-100 px-3 py-0.5 text-[10px] font-medium text-slate-500">{host}</span>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
            <motion.img
              src={project.image}
              alt={`${project.title} preview`}
              loading="lazy"
              width="1200"
              height="750"
              style={{ scale: imgScale, y: imgY }}
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>

        <div className="grid gap-2.5 sm:grid-cols-2">
          {project.icons.map((Icon, j) => (
            <div key={j} className="flex items-start gap-2.5 rounded-xl border border-white bg-white/60 p-3">
              <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-gradient-to-br ${project.gradient} text-white`}>
                <Icon size={13} />
              </span>
              <p className="text-[11.5px] leading-snug text-slate-600">{copy.features[j]}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Copy */}
      <div className="flex flex-col justify-center lg:col-span-6">
        <div className="mb-1 flex flex-wrap items-center gap-3">
          <h3 className="text-2xl font-extrabold tracking-tight text-[#0b1220]">{project.title}</h3>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-600">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            {t.projects.live}
          </span>
        </div>
        <p className={`mb-4 bg-gradient-to-r ${project.gradient} bg-clip-text text-sm font-bold text-transparent`}>{copy.subtitle}</p>
        <p className="mb-5 text-sm leading-relaxed text-slate-600">{copy.description}</p>

        <div className="mb-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="chip">{tag}</span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-dark">
            <ExternalLink size={15} />
            {t.projects.demo}
          </a>
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-glass">
              <Github size={15} />
              {t.projects.source}
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const { t } = useLanguage()

  return (
    <ScrollPanel id="projects" className="p-5 sm:p-10 lg:p-14">
      <SectionHeading eyebrow={t.projects.eyebrow} title={t.projects.title} className="mb-10" />
      <div className="space-y-8">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </ScrollPanel>
  )
}
