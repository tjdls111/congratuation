import type { ReactNode } from 'react'

interface TextProps {
  children: ReactNode
  size?: 'sm' | 'md' | 'lg'
  className?: string
  color?: 'default' | 'muted'
}

export default function Text({
  children,
  size = 'md',
  className = '',
  color = 'default',
}: TextProps) {
  const sizeClasses = {
    sm: 'text-sm sm:text-base',
    md: 'text-base sm:text-lg',
    lg: 'text-lg sm:text-xl',
  }

  const colorClasses = {
    default: 'text-gray-700',
    muted: 'text-gray-500',
  }

  return (
    <p className={`${sizeClasses[size]} ${colorClasses[color]} ${className}`}>
      {children}
    </p>
  )
}
