import { NextResponse } from 'next/server'
import path from 'path'
import { promises as fs } from 'fs'

export async function GET() {
  try {
    const filePath = path.join(
      process.cwd(),
      'public',
      'celebration_ideas.json'
    )
    const fileContents = await fs.readFile(filePath, 'utf8')
    const data = JSON.parse(fileContents)
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error reading or parsing celebration_ideas.json:', error)
    return NextResponse.json(
      { error: 'Failed to load celebration ideas' },
      { status: 500 }
    )
  }
}
