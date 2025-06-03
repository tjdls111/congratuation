import type { ReactNode } from 'react'

interface SubheaderProps {
  children: ReactNode
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function Subheader({ children, size = 'md', className = '' }: SubheaderProps) {
  const sizeClasses = {
    sm: 'text-lg sm:text-xl',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl',
  }

  return (
    <h2 className={`font-semibold text-gray-800 ${sizeClasses[size]} ${className}`}>
      {children}
    </h2>
  )
}
