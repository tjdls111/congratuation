import { NextResponse } from 'next/server'
import path from 'path'
import { promises as fs } from 'fs'

export async function GET() {
  const filePath = path.join(
    process.cwd(),
    'public',
    'random_celebration_ideas.json'
  )
  const fileContents = await fs.readFile(filePath, 'utf8')
  const data = JSON.parse(fileContents)
  return NextResponse.json(data)
}
