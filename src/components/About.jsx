import { useEffect, useRef } from 'react'
import { animate, motion, useInView, useReducedMotion } from 'framer-motion'
import { Briefcase, Building2, Layers, MapPin, GraduationCap, Globe } from 'lucide-react'
import { useLanguage } from '../i18n'
import ScrollPanel from './ScrollPanel'
import SectionHeading from './SectionHeading'

function CountUp({ value }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const reduce = useReducedMotion()
  const target = parseInt(value, 10)
  const suffix = String(value).replace(/^\d+/, '')

  useEffect(() => {
    if (!inView || Number.isNaN(target)) return
    if (reduce) {
      ref.current.textContent = `${target}${suffix}`
      return
    }
    const controls = animate(0, target, {
      duration: 1.4,
      ease: 'easeOut',
      onUpdate: (v) => { ref.current.textContent = `${Math.round(v)}${suffix}` },
    })
    return () => controls.stop()
  }, [inView, target, suffix, reduce])

  return <span ref={ref}>{Number.isNaN(target) ? value : `0${suffix}`}</span>
}

const statIcons = [Briefcase, Building2, Layers]
const pillIcons = [
  { Icon: MapPin, color: 'text-blue-600' },
  { Icon: GraduationCap, color: 'text-indigo-600' },
  { Icon: Globe, color: 'text-sky-600' },
]

export default function About() {
  const { t } = useLanguage()

  return (
    <ScrollPanel id="about" className="p-6 sm:p-10 lg:p-14">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        {/* Left */}
        <div className="lg:col-span-5">
          <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />

          <div className="mt-8 grid grid-cols-3 gap-3">
            {t.about.stats.map(([value, label], i) => {
              const Icon = statIcons[i]
              return (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 24, scale: 0.92 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
                  className="glass-card p-4 text-center"
                >
                  <span className="mx-auto mb-3 grid h-9 w-9 place-items-center rounded-xl bg-blue-100 text-blue-600">
                    <Icon size={17} />
                  </span>
                  <p className="gradient-text text-2xl font-extrabold leading-none sm:text-3xl">
                    <CountUp value={value} />
                  </p>
                  <p className="mt-2 text-[11px] font-semibold leading-snug text-slate-500">{label}</p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6 lg:col-span-7"
        >
          <div className="space-y-4 text-[15px] leading-relaxed text-slate-600">
            <p>{t.about.paragraphs[0]}</p>
            <p>{t.about.paragraphs[1]}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {pillIcons.map(({ Icon, color }, i) => (
              <span key={i} className="chip gap-1.5 !px-3.5 !py-1.5 !text-xs">
                <Icon size={13} className={color} />
                {t.about.pills[i]}
              </span>
            ))}
          </div>

          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-slate-400">{t.about.languages}</p>
            <div className="flex flex-wrap gap-2">
              {t.about.languageLevels.map(([lang, level]) => (
                <span key={lang} className="chip !px-3.5 !py-1.5 !text-xs">
                  {lang}
                  <span className="ml-1.5 text-blue-600">{level}</span>
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </ScrollPanel>
  )
}
