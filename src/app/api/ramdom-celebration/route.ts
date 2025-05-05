import { NextResponse } from 'next/server'
import path from 'path'
import { promises as fs } from 'fs'

export async function GET() {
  try {
    const filePath = path.join(
      process.cwd(),
      'public',
      'random-celebration_ideas.json'
    )
    const fileContents = await fs.readFile(filePath, 'utf8')

    if (!fileContents) {
      return NextResponse.json({ error: 'JSON file is empty' }, { status: 500 })
    }

    const data = JSON.parse(fileContents)

    if (!Array.isArray(data) || data.length === 0) {
      return NextResponse.json(
        { error: 'No celebration ideas found' },
        { status: 404 }
      )
    }

    const randomIndex = Math.floor(Math.random() * data.length)
    const randomIdea = data[randomIndex]

    return NextResponse.json(randomIdea)
  } catch (error) {
    console.error('Error reading or parsing the file:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
