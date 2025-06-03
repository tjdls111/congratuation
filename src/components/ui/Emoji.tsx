import type { ReactNode } from 'react'

interface EmojiProps {
  className?: string
}

const emojis = [
  '✨', '🎉', '🌸', '🌼', '🌈', '🌟', '🎈', '🌸', '🌺', '🌸','☃️','🎁',
  '🌼', '🌿', '🌱', '🍃', '🍂', '☃️','🍁', '🌸', '🌼', '🌸', '🌺','😸',
  '🌸', '🌼', '🌿', '🌱', '🍃', '🍂', '☃️','🍁', '🌸', '🌼', '🌸','🎁',
  '🌺', '🌸', '🌼', '🌿', '🌱', '🍃', '🍂', '☃️','🍁', '🌸', '🌼','🎁',
  '🌸', '🌺', '🌿', '🌱', '🍃', '🍂', '☃️','🍁', '🌸', '🌼', '🌸','🎁',
]

export default function Emoji({ className = '' }: EmojiProps) {
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)]
  return (
    <span className={`text-2xl ${className}`}>
      {randomEmoji}
    </span>
  )
}
