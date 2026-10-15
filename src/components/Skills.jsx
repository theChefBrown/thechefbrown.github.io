import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { Layout, ShoppingBag, Database, Wrench, Briefcase, Rocket } from 'lucide-react'
import { useLanguage } from '../i18n'
import ScrollPanel from './ScrollPanel'
import SectionHeading from './SectionHeading'

const categories = [
  {
    icon: Layout,
    tile: 'bg-blue-100 text-blue-600',
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'jQuery', 'React', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    icon: ShoppingBag,
    tile: 'bg-sky-100 text-sky-600',
    skills: ['Shopify Liquid', 'Theme Development', 'Custom Sections', 'E-commerce UX'],
  },
  {
    icon: Database,
    tile: 'bg-indigo-100 text-indigo-600',
    skills: ['Node.js', 'Express.js', 'PHP', 'MySQL', 'PostgreSQL', 'Supabase', 'REST APIs'],
  },
  {
    icon: Wrench,
    tile: 'bg-cyan-100 text-cyan-600',
    skills: ['TypeScript', 'Git', 'GitHub', 'Docker', 'Vite', 'Vercel', 'JSON'],
  },
  {
    icon: Briefcase,
    tile: 'bg-violet-100 text-violet-600',
    skills: [
      'Role-Based Access',
      'Workflow Management',
      'Task & Order Management',
      'Notifications',
      'Calendar Scheduling',
      'Operational Reporting',
    ],
  },
  {
    icon: Rocket,
    tile: 'bg-teal-100 text-teal-600',
    skills: ['Responsive UI', 'API Integration', 'Data Visualisation', 'Performance Optimisation', 'Accessibility'],
  },
]

const rowA = ['React', 'TypeScript', 'Next.js', 'Node.js', 'Express', 'Laravel', 'PHP', 'MySQL', 'PostgreSQL']
const rowB = ['Supabase', 'Tailwind CSS', 'Shopify Liquid', 'WordPress', 'Docker', 'Git', 'Vite', 'Vercel', 'REST APIs']

function TickerRow({ items, x }) {
  return (
    <motion.div style={{ x }} className="flex w-max gap-3">
      {[...items, ...items].map((name, i) => (
        <span
          key={i}
          className="glass-card flex items-center gap-2.5 !rounded-2xl px-5 py-3 text-sm font-bold text-slate-700"
        >
          <span className="h-2 w-2 rounded-full bg-gradient-to-br from-indigo-500 to-sky-400" />
          {name}
        </span>
      ))}
    </motion.div>
  )
}

export default function Skills() {
  const { t } = useLanguage()
  const reduce = useReducedMotion()
  const tickerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: tickerRef, offset: ['start end', 'end start'] })
  const xForward = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '-35%'])
  const xBack = useTransform(scrollYProgress, [0, 1], [reduce ? '0%' : '-35%', '0%'])

  return (
    <ScrollPanel id="skills" className="p-6 sm:p-10 lg:p-14">
      <SectionHeading eyebrow={t.skills.eyebrow} title={t.skills.title} className="mb-10" />

      <div
        ref={tickerRef}
        className="-mx-6 mb-10 space-y-3 overflow-hidden py-2 sm:-mx-10 lg:-mx-14"
        style={{
          WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
          maskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
        }}
      >
        <TickerRow items={rowA} x={xForward} />
        <TickerRow items={rowB} x={xBack} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map(({ icon: Icon, tile, skills }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 36, rotateX: reduce ? 0 : 12, scale: reduce ? 1 : 0.95 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: 'easeOut' }}
            whileHover={{ y: -4 }}
            style={{ transformPerspective: 1000 }}
            className="glass-card p-6"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className={`grid h-10 w-10 place-items-center rounded-xl ${tile}`}>
                <Icon size={18} />
              </span>
              <h3 className="text-sm font-extrabold text-[#0b1220]">{t.skills.categories[i]}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="chip cursor-default transition-colors hover:text-blue-700">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </ScrollPanel>
  )
}
