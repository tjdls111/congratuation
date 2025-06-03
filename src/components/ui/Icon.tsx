import type { ReactNode } from 'react'

interface IconProps {
  children: ReactNode
  size?: number
  className?: string
  color?: 'default' | 'pink' | 'green'
}

export default function Icon({
  children,
  size = 24,
  className = '',
  color = 'default',
}: IconProps) {
  const colorClasses = {
    default: 'text-[#7D7D7D]',
    pink: 'text-[#D8A7B1]',
    green: 'text-[#A0B6A4]',
  }

  return (
    <div className={`text-${colorClasses[color]} ${className}`} style={{ fontSize: size }}>
      {children}
    </div>
  )
}
