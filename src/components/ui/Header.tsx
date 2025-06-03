import type { ReactNode } from 'react'

interface HeaderProps {
  children: ReactNode
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function Header({ children, size = 'md', className = '' }: HeaderProps) {
  const sizeClasses = {
    sm: 'text-2xl sm:text-3xl',
    md: 'text-3xl sm:text-4xl',
    lg: 'text-4xl sm:text-5xl',
  }

  return (
    <h1 className={`font-bold text-[#2E2E2E] ${sizeClasses[size]} ${className}`}>
      {children}
    </h1>
  )
}
