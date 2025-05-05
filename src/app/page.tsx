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
        const today = new Date().toISOString().split('T')[0] // Get today's date in YYYY-MM-DD format
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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">오늘을 축하해</h1>
      {todayData.length > 0 ? (
        <ul className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6 space-y-4">
          {todayData.map((item, i) => (
            <li key={i} className="border-b pb-4 last:border-none">
              <strong className="text-lg text-gray-800">
                {item.date} - {item.title}
              </strong>
              <br />
              <em className="text-gray-600">{item.description}</em>
              <ul className="mt-2 list-disc list-inside text-gray-700">
                {item.suggestions.map((suggestion, j) => (
                  <li key={j}>{suggestion}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : randomIdea ? (
        <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-purple-600 mb-4">
            오늘을 축하해
          </h2>
          <strong className="text-lg text-gray-800">
            {randomIdea.date} - {randomIdea.title}
          </strong>
          <br />
          <em className="text-gray-600">{randomIdea.description}</em>
          <ul className="mt-2 list-disc list-inside text-gray-700">
            {randomIdea.suggestions.map((suggestion, i) => (
              <li key={i}>{suggestion}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-gray-500 text-lg">축하할 아이디어가 없습니다.</p>
      )}
    </div>
  )
}
