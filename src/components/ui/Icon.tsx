import type { ReactNode } from 'react'

interface IconProps {
  children: ReactNode
  size?: number
  className?: string
  color?: string
}

export default function Icon({
  children,
  size = 24,
  className = '',
  color = 'gray-400',
}: IconProps) {
  return (
    <div className={`text-${color} ${className}`} style={{ fontSize: size }}>
      {children}
    </div>
  )
}
