import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  children: ReactNode
  className?: string
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <motion.div
      className={`bg-white border border-gray-100 rounded-xl p-8 sm:p-10 transition-all duration-200 hover:shadow-md ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: 0.2 }}
    >
      {children}
    </motion.div>
  )
}
