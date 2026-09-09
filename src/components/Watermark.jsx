import { motion, useReducedMotion } from 'framer-motion'
import logo from '../assets/logo.webp'

const POSITIONS = {
  'top-right': 'top-[-10%] right-[-6%]',
  'bottom-left': 'bottom-[-12%] left-[-8%]',
  'top-left': 'top-[-8%] left-[-6%]',
  'bottom-right': 'bottom-[-10%] right-[-8%]',
  center: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
}

export default function Watermark({
  position = 'top-right',
  size = 460,
  opacity = 0.045,
  spin = true,
  direction = 1,
}) {
  const reduceMotion = useReducedMotion()

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute ${POSITIONS[position]} z-0`}
      style={{ width: size, height: size, opacity }}
    >
      <motion.img
        src={logo}
        alt=""
        loading="lazy"
        decoding="async"
        className="w-full h-full object-contain select-none"
        animate={
          reduceMotion || !spin
            ? undefined
            : { rotate: direction * 360 }
        }
        transition={
          reduceMotion || !spin
            ? undefined
            : { duration: 70, repeat: Infinity, ease: 'linear' }
        }
      />
    </div>
  )
}
