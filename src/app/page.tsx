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

        // If no data for today, pick a random idea
        if (filteredData.length === 0 && fetchedData.length > 0) {
          const randomIndex = Math.floor(Math.random() * fetchedData.length)
          setRandomIdea(fetchedData[randomIndex])
        }
      })
  }, [])

  return (
    <div>
      <h1>오늘의 축하 아이디어</h1>
      {todayData.length > 0 ? (
        <ul>
          {todayData.map((item, i) => (
            <li key={i}>
              <strong>
                {item.date} - {item.title}
              </strong>
              <br />
              <em>{item.description}</em>
              <ul>
                {item.suggestions.map((suggestion, j) => (
                  <li key={j}>{suggestion}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : randomIdea ? (
        <div>
          <h2>랜덤 축하 아이디어</h2>
          <strong>
            {randomIdea.date} - {randomIdea.title}
          </strong>
          <br />
          <em>{randomIdea.description}</em>
        </div>
      ) : (
        <p>축하할 아이디어가 없습니다.</p>
      )}
    </div>
  )
}
