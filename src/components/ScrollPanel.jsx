import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

// Section wrapper: the panel zooms and tilts into place as its top edge enters the viewport.
export default function ScrollPanel({ id, className = '', children }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start 0.45'] })

  const scale = useTransform(scrollYProgress, [0, 1], [reduce ? 1 : 0.93, 1])
  const rotateX = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : 8, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.55], [reduce ? 1 : 0.15, 1])

  return (
    <section ref={ref} id={id} className="scroll-mt-28">
      <motion.div
        style={{ scale, rotateX, opacity, transformPerspective: 1400, transformOrigin: '50% 0%' }}
        className={`glass-panel will-change-transform ${className}`}
      >
        {children}
      </motion.div>
    </section>
  )
}
