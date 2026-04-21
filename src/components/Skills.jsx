import { motion } from 'framer-motion'

const categories = [
  {
    title: 'Frontend',
    gradient: 'from-purple-500 to-indigo-500',
    glow: 'rgba(139,92,246,0.25)',
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'jQuery', 'React', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Shopify & E-commerce',
    gradient: 'from-emerald-500 to-teal-500',
    glow: 'rgba(16,185,129,0.25)',
    skills: ['Shopify Liquid', 'Theme Development', 'Custom Sections', 'E-commerce UX'],
  },
  {
    title: 'Backend & CMS',
    gradient: 'from-orange-500 to-red-500',
    glow: 'rgba(249,115,22,0.25)',
    skills: ['PHP', 'MySQL', 'WordPress', 'Custom Plugins', 'Supabase'],
  },
  {
    title: 'Tools & DevOps',
    gradient: 'from-cyan-500 to-blue-500',
    glow: 'rgba(6,182,212,0.25)',
    skills: ['Git', 'GitHub', 'Vite', 'Vercel', 'REST APIs', 'JSON'],
  },
  {
    title: 'SEO & Digital Marketing',
    gradient: 'from-pink-500 to-rose-500',
    glow: 'rgba(236,72,153,0.25)',
    skills: [
      'On-page SEO',
      'Local SEO',
      'Google Business Profile',
      'Content Strategy',
      'Facebook / Instagram',
      'TikTok',
      'YouTube',
    ],
  },
  {
    title: 'Media & Content',
    gradient: 'from-yellow-500 to-orange-500',
    glow: 'rgba(234,179,8,0.25)',
    skills: ['DaVinci Resolve', 'Video Editing', 'Photo Editing', 'Short-form Content', 'YouTube Shorts'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative section-padding overflow-hidden">
      {/* Ambient */}
      <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-pink-600/8 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-pink-400 font-semibold text-xs tracking-[0.25em] uppercase mb-3">What I work with</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Skills & Technologies</h2>
          <div className="h-1 w-16 mx-auto rounded-full bg-gradient-to-r from-pink-500 to-purple-500" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: 'easeOut' }}
              className="glass rounded-2xl p-6 border border-white/[0.06] hover:border-white/[0.14] transition-all duration-400 hover:-translate-y-1 group"
              style={{ '--glow': cat.glow }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-9 h-9 rounded-xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  style={{ boxShadow: `0 4px 20px ${cat.glow}` }}
                >
                  <div className="w-3 h-3 bg-white/90 rounded-sm" />
                </div>
                <h3 className={`font-bold text-sm bg-gradient-to-r ${cat.gradient} bg-clip-text text-transparent`}>
                  {cat.title}
                </h3>
              </div>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] font-medium px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-slate-300 hover:bg-white/[0.10] hover:text-white transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
