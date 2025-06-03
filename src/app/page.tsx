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
          <Text size="lg" className="text-gray-600">
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
          ) : randomEvent ? (
            <Celebration event={randomEvent} />
          ) : (
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
          )}
        </div>
      </div>
    </div>
  )
}
