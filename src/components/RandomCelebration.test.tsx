import { render, screen } from '@testing-library/react'
import RandomCelebration from './RandomCelebration'

describe('RandomCelebration', () => {
  const mockEvent = {
    date: '2023-10-01',
    title: 'Birthday Party',
    description: 'A fun birthday celebration with friends and family.',
    suggestions: ['Bring a gift', 'Wear party attire', 'RSVP by Friday'],
    type: 'Birthday',
    region: 'Local',
    source: '',
  }

  it('renders the event date and title', () => {
    render(<RandomCelebration event={mockEvent} />)
    expect(
      screen.getByText(`${mockEvent.date} - ${mockEvent.title}`)
    ).toBeInTheDocument()
  })

  it('renders the event description', () => {
    render(<RandomCelebration event={mockEvent} />)
    expect(screen.getByText(mockEvent.description)).toBeInTheDocument()
  })

  it('renders all suggestions as list items', () => {
    render(<RandomCelebration event={mockEvent} />)
    mockEvent.suggestions.forEach((suggestion) => {
      expect(screen.getByText(suggestion)).toBeInTheDocument()
    })
  })

  it('applies the correct styles to elements', () => {
    render(<RandomCelebration event={mockEvent} />)
    const container = screen
      .getByText(`${mockEvent.date} - ${mockEvent.title}`)
      .closest('div')
    expect(container).toHaveClass(
      'w-full bg-white shadow-lg rounded-xl p-6 sm:p-8'
    )
  })
})
