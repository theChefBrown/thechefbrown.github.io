import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={className}
    >
      <p className="eyebrow mb-2">{eyebrow}</p>
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0b1220]">{title}</h2>
    </motion.div>
  )
}
