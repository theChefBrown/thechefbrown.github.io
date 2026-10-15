import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

// Fixed pastel-blue backdrop; soft gradient blobs drift at different speeds while scrolling.
export default function Background() {
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const yA = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -260])
  const yB = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 200])
  const yC = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -140])

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-gradient-to-b from-[#f6f9ff] via-[#eaf1ff] to-[#e4ecff]">
      <motion.div
        style={{
          y: yA,
          background: 'radial-gradient(circle, rgba(125,170,255,0.55) 0%, rgba(125,170,255,0) 65%)',
        }}
        className="absolute -top-40 right-[-12%] h-[780px] w-[780px] rounded-full"
      />
      <motion.div
        style={{
          y: yB,
          background: 'radial-gradient(circle, rgba(165,180,252,0.5) 0%, rgba(165,180,252,0) 65%)',
        }}
        className="absolute top-[28%] left-[-16%] h-[720px] w-[720px] rounded-full"
      />
      <motion.div
        style={{
          y: yC,
          background: 'radial-gradient(circle, rgba(103,214,255,0.42) 0%, rgba(103,214,255,0) 65%)',
        }}
        className="absolute bottom-[-12%] right-[8%] h-[680px] w-[680px] rounded-full"
      />
      {/* Faint glass streak */}
      <div
        className="absolute -left-1/4 top-[55%] h-40 w-[150%] -rotate-[14deg] opacity-70"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.65), transparent)' }}
      />
    </div>
  )
}
