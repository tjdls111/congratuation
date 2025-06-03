import type { ReactNode } from 'react'

interface SkeletonProps {
  children?: ReactNode
  className?: string
}

export default function Skeleton({ children, className = '' }: SkeletonProps) {
  return (
    <div className={`animate-pulse ${className}`}>
      {children}
    </div>
  )
}
