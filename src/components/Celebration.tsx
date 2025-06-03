interface CelebrationItem {
  title: string
  description: string
  suggestions: string[]
  type: string
  region: string
  source?: string
  date?: string
}

interface CelebrationProps {
  event: CelebrationItem | null
  showDate?: boolean
}

export default function Celebration({
  event,
  showDate = true,
}: CelebrationProps) {
  if (!event) {
    return (
      <p className="text-lg sm:text-xl text-gray-500 mt-10 text-center">
        오늘을 축하해요. 
        감사해요.
      </p>
    )
  }

  return (
    <div className="w-full bg-white shadow-lg rounded-xl p-6 sm:p-8">
      <strong className="text-xl sm:text-2xl text-purple-700 block mb-2">
        {showDate ? `${event.date} - ` : ''}{event.title}
      </strong>
      <em className="text-lg sm:text-xl text-gray-600 block mb-4">
        {event.description}
      </em>
      <ul className="mt-2 list-none text-gray-700 space-y-2 pl-4">
        {event.suggestions.map((suggestion: string, i: number) => (
          <li key={i} className="text-base sm:text-lg pl-2">
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  )
}
