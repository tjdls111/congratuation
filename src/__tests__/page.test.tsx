import { render, screen, waitFor } from '@testing-library/react'
import Celebration from '../app/page'
import fetchMock from 'jest-fetch-mock'
import '@testing-library/jest-dom'

fetchMock.enableMocks()

describe('Celebration Component', () => {
  beforeEach(() => {
    fetchMock.resetMocks()
  })

  it("renders today's celebration data when available", async () => {
    const mockTodayData = [
      {
        title: 'Test Celebration',
        description: 'This is a test celebration.',
        suggestions: ['Suggestion 1', 'Suggestion 2'],
        type: 'Holiday',
        region: 'Global',
        source: 'Test Source',
        date: new Date().toISOString().split('T')[0],
      },
    ]

    fetchMock.mockResponseOnce(JSON.stringify(mockTodayData))

    render(<Celebration />)

    await waitFor(() => {
      expect(screen.getByText('Test Celebration')).toBeInTheDocument()
      expect(
        screen.getByText('This is a test celebration.')
      ).toBeInTheDocument()
      expect(screen.getByText('Suggestion 1')).toBeInTheDocument()
      expect(screen.getByText('Suggestion 2')).toBeInTheDocument()
    })
  })

  it('renders a random celebration idea when no data is available for today', async () => {
    const mockRandomData = {
      title: '랜덤 축하 아이디어 🎉',
      description: '랜덤으로 선택된 축하 아이디어입니다.',
      suggestions: [
        '새로운 취미 시작하기',
        '친구와 전화하기',
        '좋아하는 음식 먹기',
      ],
      type: '랜덤',
      region: '전세계',
      source: '',
      date: '01-01',
    }

    fetchMock.mockResponses([JSON.stringify(mockRandomData), { status: 200 }])

    render(<Celebration />)

    await waitFor(() => {
      expect(screen.getByText('랜덤 축하 아이디어 🎉')).toBeInTheDocument()
      expect(
        screen.getByText('랜덤으로 선택된 축하 아이디어입니다.')
      ).toBeInTheDocument()
    })
  })

  it('renders a fallback message when no data is available and random idea fetch fails', async () => {
    fetchMock.mockResponses(
      [JSON.stringify([]), { status: 200 }], // No data for today
      () => Promise.reject(new Error('Internal Server Error')) // Random idea fetch fails
    )

    render(<Celebration />)

    await waitFor(() => {
      expect(screen.getByText('오늘을 축하해')).toBeInTheDocument()
      expect(
        screen.getByText('축하할 아이디어가 없습니다.')
      ).toBeInTheDocument()
    })
  })
})
