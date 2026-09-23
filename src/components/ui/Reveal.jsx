import { motion, useReducedMotion } from 'framer-motion'

const variants = {
  rise: {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0 },
  },
  fade: {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  },
  clip: {
    hidden: { opacity: 0, clipPath: 'inset(0 100% 0 0)' },
    show: { opacity: 1, clipPath: 'inset(0 0% 0 0)' },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.94 },
    show: { opacity: 1, scale: 1 },
  },
}

export default function Reveal({
  children,
  variant = 'rise',
  delay = 0,
  duration = 0.7,
  className = '',
  once = true,
  amount = 0.3,
}) {
  const reduceMotion = useReducedMotion()
  const chosen = variants[variant] ?? variants.rise

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={chosen}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
