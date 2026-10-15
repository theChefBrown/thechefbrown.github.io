import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from 'framer-motion'
import { Calendar, Check, ExternalLink } from 'lucide-react'
import { useLanguage } from '../i18n'
import ScrollPanel from './ScrollPanel'
import SectionHeading from './SectionHeading'

const experiences = [
  {
    id: 1,
    company: 'Ambisun',
    companyUrl: 'https://www.ambisun.ro/',
    accent: '#2563eb',
    gradient: 'from-blue-600 to-sky-600',
    tech: ['WordPress', 'PHP', 'CSS', 'React', 'Next.js', 'Laravel', 'MySQL', 'Vite', 'Supabase', 'Vercel', 'Git'],
  },
  {
    id: 2,
    company: 'GoSocial Development',
    accent: '#4f46e5',
    gradient: 'from-indigo-600 to-blue-500',
    tech: ['Shopify Liquid', 'JavaScript', 'jQuery', 'HTML5', 'CSS3', 'Bootstrap', 'WordPress', 'Git', 'JSON'],
  },
  {
    id: 3,
    company: 'Flashnet',
    companyUrl: 'https://www.flashnet.ro/',
    accent: '#0891b2',
    gradient: 'from-sky-600 to-cyan-600',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'C / C++'],
  },
]

function ExperienceCard({ exp, index }) {
  const { t } = useLanguage()
  const copy = t.experience.items[index]
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start 0.65'] })

  const scale = useTransform(scrollYProgress, [0, 1], [reduce ? 1 : 0.94, 1])
  const rotateX = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : 6, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [reduce ? 1 : 0.2, 1])

  return (
    <div ref={ref} className="relative pl-10 sm:pl-14">
      <div
        className={`absolute left-0 top-8 grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br ${exp.gradient} ring-4 ring-white`}
        style={{ boxShadow: `0 0 22px ${exp.accent}66` }}
      >
        <span className="h-2 w-2 rounded-full bg-white" />
      </div>

      <motion.div
        style={{ scale, rotateX, opacity, transformPerspective: 1200, transformOrigin: '0% 50%' }}
        className="glass-card p-6 sm:p-8"
      >
        <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-extrabold leading-snug text-[#0b1220] sm:text-xl">{copy.role}</h3>
            {exp.companyUrl ? (
              <a
                href={exp.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-0.5 inline-flex items-center gap-1 bg-gradient-to-r ${exp.gradient} bg-clip-text text-sm font-bold text-transparent`}
              >
                {exp.company}
                <ExternalLink size={12} className="text-slate-400" />
              </a>
            ) : (
              <p className={`mt-0.5 bg-gradient-to-r ${exp.gradient} bg-clip-text text-sm font-bold text-transparent`}>
                {exp.company}
              </p>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="chip gap-1.5">
              <Calendar size={12} className="text-blue-600" />
              {copy.duration}
            </span>
            <span className="chip !bg-[#0b1220] !text-white">{t.experience.fullTime}</span>
          </div>
        </div>

        <p className="mb-5 text-sm leading-relaxed text-slate-600">{copy.summary}</p>

        <ul className="mb-6 grid gap-x-8 gap-y-3 md:grid-cols-2">
          {copy.achievements.map((text, i) => (
            <li key={i} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-slate-600">
              <span
                className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full text-white"
                style={{ background: exp.accent }}
              >
                <Check size={10} strokeWidth={3} />
              </span>
              {text}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {exp.tech.map((name) => (
            <span key={name} className="chip">{name}</span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default function Experience() {
  const { t } = useLanguage()
  const reduce = useReducedMotion()
  const timelineRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ['start 0.75', 'end 0.6'] })
  const spring = useSpring(scrollYProgress, { stiffness: 90, damping: 25 })
  const scaleY = reduce ? 1 : spring

  return (
    <ScrollPanel id="experience" className="p-6 sm:p-10 lg:p-14">
      <SectionHeading eyebrow={t.experience.eyebrow} title={t.experience.title} className="mb-10" />

      <div ref={timelineRef} className="relative">
        <div className="absolute bottom-0 left-[11px] top-8 w-px bg-slate-200/80" />
        <motion.div
          style={{ scaleY }}
          className="absolute bottom-0 left-[11px] top-8 w-px origin-top bg-gradient-to-b from-blue-500 via-indigo-500 to-sky-400/40"
        />

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </ScrollPanel>
  )
}
