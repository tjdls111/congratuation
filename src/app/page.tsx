'use client'
import { useEffect, useState } from 'react'
import Celebration from '../components/Celebration'

interface CelebrationItem {
  title: string
  description: string
  suggestions: string[]
  type: string
  region: string
  source?: string
  date?: string
}

export default function Home() {
  const [todayEvent, setTodayEvent] = useState<CelebrationItem[]>([])
  const [randomEvent, setRandomEvent] = useState<CelebrationItem | null>(null)

  const fetchCelebrationData = async () => {
    try {
      const res = await fetch('/api/celebration')
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`)
      }
      const fetchedData = await res.json()

      const today = `${(new Date().getMonth() + 1)
        .toString()
        .padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}`
      const filteredData = fetchedData.filter(
        (item: CelebrationItem) => item.date === today
      )
      setTodayEvent(filteredData)

      if (filteredData.length === 0) {
        const randomRes = await fetch('/api/random-celebration')
        if (!randomRes.ok) {
          throw new Error(`HTTP error! status: ${randomRes.status}`)
        }
        const randomData = await randomRes.json()
        const randomItem =
          randomData[Math.floor(Math.random() * randomData.length)]
        setRandomEvent(randomItem)
      }
    } catch (error) {
      console.error("Error fetching today's celebration data:", error)
    }
  }

  useEffect(() => {
    fetchCelebrationData()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-purple-100 to-blue-100 flex flex-col items-center py-10">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-purple-600 m-4 mb-8 drop-shadow-md text-center">
        오늘을 축하해 🎉
      </h1>
      <div className="flex flex-col items-center justify-center w-full max-w-3xl p-4 sm:p-8 bg-white shadow-lg rounded-xl mx-2 sm:mx-4">
        {todayEvent.length > 0 ? (
          <div className="space-y-4">
            {todayEvent.map((event: CelebrationItem, index: number) => (
              <Celebration key={index} event={event} />
            ))}
          </div>
        ) : randomEvent ? (
          <Celebration event={randomEvent} />
        ) : (
          <p className="text-lg sm:text-xl text-gray-500 mt-10 text-center">
            축하할 아이디어를 떠올리고 있어요~
          </p>
        )}
      </div>
    </div>
  )
}
