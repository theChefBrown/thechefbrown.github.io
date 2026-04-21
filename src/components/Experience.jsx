import { motion } from 'framer-motion'
import { Calendar, ChevronRight, ExternalLink } from 'lucide-react'

const experiences = [
  {
    id: 1,
    company: 'Ambisun',
    companyUrl: 'https://www.ambisun.ro/',
    role: 'Web Developer & Digital Growth Specialist',
    duration: 'Jun 2025 — Present',
    type: 'Full-time',
    accentFrom: '#06b6d4',
    accentTo: '#3b82f6',
    gradientClass: 'from-cyan-500 to-blue-500',
    borderClass: 'border-cyan-500/30',
    summary:
      'Spearheaded the full digital transformation of Ambisun, repositioning the company from an exclusively offline operation into a competitive online presence within the premium pergola and glass systems market.',
    achievements: [
      'Executed a full website redesign covering architecture, copywriting, and UX — aligned with the brand and conversion goals',
      'Implemented a comprehensive SEO strategy with a strong local search focus, producing measurable improvements in Google rankings',
      'Produced and optimised all website copy for search intent, engagement, and lead conversion',
      'Engineered custom contact and lead-generation forms, directly contributing to new client acquisition within the first six months',
      'Improved Core Web Vitals through script separation, conditional loading, and asset optimisation',
      'Developed bespoke WordPress plugins to support outlet and internal business workflows',
      'Managed and grew multichannel digital presence: Instagram, Facebook, Google Business Profile, TikTok, and YouTube',
      'Produced and edited branded video content and YouTube Shorts using DaVinci Resolve',
      'Designed and deployed a full-stack internal analytics application (React, Vite, Supabase, Vercel) to track product sales and operations',
      'Acted as a cross-functional bridge between technical, marketing, and production teams; contributed hands-on knowledge from site assembly and workshop experience',
    ],
    tech: ['WordPress', 'PHP', 'CSS', 'SEO / Local SEO', 'React', 'Vite', 'Supabase', 'Vercel', 'DaVinci Resolve', 'Git'],
  },
  {
    id: 2,
    company: 'GoSocial Development',
    role: 'Frontend Web Developer',
    duration: 'Sep 2022 — Apr 2025',
    type: 'Full-time',
    accentFrom: '#8b5cf6',
    accentTo: '#ec4899',
    gradientClass: 'from-purple-500 to-pink-500',
    borderClass: 'border-purple-500/30',
    summary:
      'Contributed to a range of client-facing e-commerce and web projects with a primary focus on Shopify Liquid theme development, frontend performance, and delivery of polished, conversion-optimised interfaces.',
    achievements: [
      'Built and customised Shopify Liquid themes and e-commerce storefronts tailored to client requirements',
      'Delivered responsive, accessible interfaces using HTML5, CSS3, and Bootstrap',
      'Implemented interactive frontend features and dynamic UI components with JavaScript and jQuery',
      'Integrated third-party services and APIs using JSON-based data interchange',
      'Managed source code and collaborative workflows via Git',
      'Developed and maintained WordPress sites, broadening full-stack delivery capability',
    ],
    tech: ['Shopify Liquid', 'JavaScript', 'jQuery', 'HTML5', 'CSS3', 'Bootstrap', 'WordPress', 'Git', 'JSON'],
  },
  {
    id: 3,
    company: 'Flashnet',
    companyUrl: 'https://www.flashnet.ro/',
    role: 'Junior Web Developer',
    duration: '2020 — 2022',
    type: 'Full-time',
    accentFrom: '#f97316',
    accentTo: '#eab308',
    gradientClass: 'from-orange-500 to-yellow-500',
    borderClass: 'border-orange-500/30',
    summary:
      'Gained foundational industry experience across frontend and backend development, working on client projects under professional mentorship and building core engineering discipline.',
    achievements: [
      'Developed and maintained client websites across both frontend and backend layers',
      'Designed and managed relational databases using PHP and MySQL',
      'Applied C and C++ in systems-level and embedded contexts',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'C / C++'],
  },
]

function ExperienceCard({ exp, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay: index * 0.12, ease: 'easeOut' }}
      className="relative pl-10 sm:pl-14"
    >
      {/* Timeline dot */}
      <div
        className={`absolute left-0 top-6 w-6 h-6 rounded-full bg-gradient-to-br ${exp.gradientClass} flex items-center justify-center shadow-lg`}
        style={{ boxShadow: `0 0 20px ${exp.accentFrom}55` }}
      >
        <div className="w-2 h-2 rounded-full bg-white/90" />
      </div>

      {/* Card */}
      <div className={`glass rounded-2xl p-6 sm:p-7 border ${exp.borderClass} hover:border-opacity-60 transition-all duration-400 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30 group`}>
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div className="space-y-0.5">
            <span
              className={`inline-flex text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-gradient-to-r ${exp.gradientClass} text-white mb-1.5`}
            >
              {exp.type}
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white leading-snug">{exp.role}</h3>
            <div className="flex items-center gap-1.5">
              {exp.companyUrl ? (
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-bold text-sm bg-gradient-to-r ${exp.gradientClass} bg-clip-text text-transparent flex items-center gap-1 hover:opacity-80 transition-opacity`}
                >
                  {exp.company}
                  <ExternalLink size={11} className="text-slate-400" />
                </a>
              ) : (
                <p className={`font-bold text-sm bg-gradient-to-r ${exp.gradientClass} bg-clip-text text-transparent`}>
                  {exp.company}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-slate-500 text-xs font-medium shrink-0">
            <Calendar size={13} />
            {exp.duration}
          </div>
        </div>

        {/* Summary */}
        <p className="text-slate-400 text-sm leading-relaxed mb-4">{exp.summary}</p>

        {/* Achievements */}
        <ul className="space-y-2 mb-5">
          {exp.achievements.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
              <ChevronRight
                size={13}
                className="mt-[3px] shrink-0"
                style={{ color: exp.accentFrom }}
              />
              {item}
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {exp.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/[0.08] text-slate-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="relative section-padding overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-cyan-600/8 rounded-full blur-[130px] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 font-semibold text-xs tracking-[0.25em] uppercase mb-3">Career Path</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Work Experience</h2>
          <div className="h-1 w-16 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-purple-500" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-3 top-8 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-purple-500/30 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <ExperienceCard key={exp.id} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
