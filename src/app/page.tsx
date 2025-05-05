'use client'
import { useEffect, useState } from 'react'

export default function Celebration() {
  interface CelebrationItem {
    date: string
    title: string
    description: string
  }

  const [data, setData] = useState<CelebrationItem[]>([])

  useEffect(() => {
    fetch('/api/celebration')
      .then((res) => res.json())
      .then(setData)
  }, [])

  return (
    <div>
      <h1>오늘의 축하 아이디어</h1>
      {data.length > 0 && (
        <ul>
          {data.slice(0, 3).map((item, i) => (
            <li key={i}>
              <strong>
                {item.date} - {item.title}
              </strong>
              <br />
              <em>{item.description}</em>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
