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
      <div className="flex flex-col items-center justify-center p-8">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
          <h2 className="text-2xl font-bold text-purple-600">오늘은 공식 기념일은 없지만, 나만의 하루를 기념해보는 건 어때요?</h2>
        </div>
        <ul className="mt-2 list-none text-gray-700 space-y-2 pl-4">
        {["지금 기분을 한 줄로 적어보기",
"따뜻한 차 한 잔 마시며 숨 고르기",
"좋아하는 노래 한 곡 재생하기",
"5분 산책하며 주변 풍경 관찰하기"].map((suggestion: string, i: number) => (
          <li key={i} className="text-base sm:text-lg pl-2">
            {suggestion}
          </li>
        ))}
      </ul>
      </div>
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
