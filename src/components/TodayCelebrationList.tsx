import { CelebrationItem } from '@/app/page'

export default function TodayCelebrationList({
  event,
}: {
  event: CelebrationItem[]
}) {
  return (
    <ul className="w-full">
      {event.map((item, i) => (
        <li key={i} className="border-b pb-6 last:border-none">
          <strong className="text-xl sm:text-2xl text-purple-700 block mb-2">
            {item.date} : {item.title}
          </strong>
          <em className="text-lg sm:text-xl text-gray-600 block mb-4">
            {item.description}
          </em>
          <ul className="mt-2 list-none text-gray-700 space-y-2 pl-4">
            {item.suggestions.map((suggestion, j) => (
              <li key={j} className="text-base sm:text-lg pl-2">
                {suggestion}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  )
}
