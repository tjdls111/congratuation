'use client'
import { useEffect, useState } from 'react'
import Celebration from '../components/Celebration'
import Card from '@/components/ui/Card'
import Text from '@/components/ui/Text'
import Icon from '@/components/ui/Icon'
import Header from '@/components/ui/Header'
import Subheader from '@/components/ui/Subheader'

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
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-12">
          <Header size="lg">오늘을 축하해 🎉</Header>
          <Text size="lg" className="text-gray-600 mt-2">
            오늘의 특별한 순간을 기념하고, 새로운 아이디어를 발견하세요.
          </Text>
        </div>
        <div className="w-full max-w-3xl mx-auto">
          {todayEvent.length > 0 ? (
            <div className="space-y-6">
              {todayEvent.map((event: CelebrationItem, index: number) => (
                <Celebration key={index} event={event} />
              ))}
            </div>
          ) : (
            <Celebration event={randomEvent} />
          ) }
        </div>
      </div>
    </div>
  )
}
