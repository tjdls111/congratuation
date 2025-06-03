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

import Card from '@/components/ui/Card'
import Text from '@/components/ui/Text'
import Icon from '@/components/ui/Icon'
import Subheader from '@/components/ui/Subheader'

export default function Celebration({
  event,
  showDate = true,
}: CelebrationProps) {
  if (!event) {
    return (
      <Card className="flex flex-col items-center justify-center space-y-6">
        <div className="flex items-center justify-center space-x-4 mb-4">
          <Icon>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </Icon>
          <Subheader>오늘의 기념일</Subheader>
        </div>
        <Text size="lg" color="muted" className="text-center max-w-md">
          오늘은 특별한 기념일이 없네요.
          새로운 아이디어를 찾아보세요!
        </Text>
      </Card>
    )
  }

  return (
    <Card>
      <div className="flex items-center space-x-4 mb-6">
        {showDate && (
          <Text size="lg" className="font-semibold text-gray-600">
            {event.date}
          </Text>
        )}
        <div>
          <Subheader>{event.title}</Subheader>
          <Text>{event.description}</Text>
        </div>
      </div>
      <ul className="mt-6 space-y-4">
        {event.suggestions.map((suggestion: string, i: number) => (
          <li key={i} className="flex items-center space-x-3">
            <Icon size={16}>
              <span>•</span>
            </Icon>
            <Text>{suggestion}</Text>
          </li>
        ))}
      </ul>
    </Card>
  )
}
