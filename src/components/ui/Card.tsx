import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white shadow-lg rounded-2xl p-8 sm:p-10 ${className}`}>
      {children}
    </div>
  )
}
