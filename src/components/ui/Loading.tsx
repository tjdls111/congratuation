import { motion } from 'framer-motion'

export default function Loading() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex space-x-2"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      >
        <motion.span
          className="text-2xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          🔍
        </motion.span>
        <motion.span
          className="text-2xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
        >
          🔍
        </motion.span>
        <motion.span
          className="text-2xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
        >
          🔍
        </motion.span>
      </motion.div>
      <motion.div
        className="text-lg"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        당신을 위한 순간을 살펴보는 중이에요..
      </motion.div>
    </motion.div>
  )
}
