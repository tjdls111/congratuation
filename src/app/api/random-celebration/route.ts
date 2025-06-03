import { NextResponse } from 'next/server'
import { RandomCelebrationItem } from '@/types/celebration'
import { randomCelebrationIdeas } from '@/data/random_celebration_ideas'

export async function GET() {
  return NextResponse.json(randomCelebrationIdeas as RandomCelebrationItem[])
}
