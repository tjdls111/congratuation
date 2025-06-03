import { NextResponse } from 'next/server'
import { CelebrationItem } from '@/types/celebration'
import { celebrationIdeas } from '@/data/celebration_ideas'

export async function GET() {
  return NextResponse.json(celebrationIdeas as CelebrationItem[])
}
