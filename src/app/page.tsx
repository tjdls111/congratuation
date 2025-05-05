'use client'
import { useEffect, useState } from 'react'

export default function Celebration() {
  interface CelebrationItem {
    title: string
    description: string
    suggestions: string[]
    type: string
    region: string
    source: string
    date: string
  }

  const [todayData, setTodayData] = useState<CelebrationItem[]>([])
  const [randomIdea, setRandomIdea] = useState<CelebrationItem | null>(null)

  useEffect(() => {
    fetch('/api/celebration')
      .then((res) => res.json())
      .then((fetchedData) => {
        const today = `${(new Date().getMonth() + 1)
          .toString()
          .padStart(2, '0')}-${new Date()
          .getDate()
          .toString()
          .padStart(2, '0')}`

        const filteredData = fetchedData.filter(
          (item: CelebrationItem) => item.date === today
        )
        setTodayData(filteredData)

        if (filteredData.length === 0) {
          fetch('/api/random-celebration')
            .then((res) => res.json())
            .then((randomData) => {
              setRandomIdea(randomData)
            })
            .catch((error) => {
              console.error('Error fetching random celebration idea:', error)
            })
        }
      })
      .catch((error) => {
        console.error("Error fetching today's celebration data:", error)
      })
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-purple-100 to-blue-100 flex flex-col items-center py-10">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-purple-600 m-4 mb-8 drop-shadow-md text-center">
        오늘을 축하해 🎉
      </h1>
      <div className="flex flex-col items-center justify-center w-full max-w-3xl p-4 sm:p-8 bg-white shadow-lg rounded-xl mx-2 sm:mx-4">
        {todayData.length > 0 ? (
          <ul className="w-full">
            {todayData.map((item, i) => (
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
        ) : randomIdea ? (
          <div className="w-full bg-white shadow-lg rounded-xl p-6 sm:p-8">
            <strong className="text-xl sm:text-2xl text-purple-700 block mb-2">
              {randomIdea.date} - {randomIdea.title}
            </strong>
            <em className="text-lg sm:text-xl text-gray-600 block mb-4">
              {randomIdea.description}
            </em>
            <ul className="mt-2 list-none text-gray-700 space-y-2 pl-4">
              {randomIdea.suggestions.map((suggestion, i) => (
                <li key={i} className="text-base sm:text-lg pl-2">
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-lg sm:text-xl text-gray-500 mt-10 text-center">
            축하할 아이디어를 떠올리고 있어요~
          </p>
        )}
      </div>
    </div>
  )
}
