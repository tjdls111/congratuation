import { render, screen } from '@testing-library/react'
import TodayCelebrationList from './TodayCelebrationList'

describe('TodayCelebrationList', () => {
  const mockEvents = [
    {
      date: '2023-10-01',
      title: 'Birthday Celebration',
      description: "Celebrate John's birthday with a party.",
      suggestions: ['Bring a gift', 'Wear party attire', 'RSVP by Friday'],
      type: 'Personal',
      region: 'Local',
      source: '',
    },
    {
      date: '2023-10-02',
      title: 'Anniversary Celebration',
      description: "Celebrate the company's 10th anniversary.",
      suggestions: [
        'Attend the gala',
        'Prepare a speech',
        'Network with colleagues',
      ],
      type: 'Corporate',
      region: 'Global',
      source: '',
    },
  ]

  it('renders a list of events', () => {
    render(<TodayCelebrationList event={mockEvents} />)

    // Check if the main list is rendered
    const list = screen.getByRole('list')
    expect(list).toBeInTheDocument()

    // Check if all events are rendered
    mockEvents.forEach((event) => {
      expect(
        screen.getByText(`${event.date} : ${event.title}`)
      ).toBeInTheDocument()
      expect(screen.getByText(event.description)).toBeInTheDocument()
    })
  })

  it('renders suggestions for each event', () => {
    render(<TodayCelebrationList event={mockEvents} />)

    mockEvents.forEach((event) => {
      event.suggestions.forEach((suggestion) => {
        expect(screen.getByText(suggestion)).toBeInTheDocument()
      })
    })
  })

  it('renders the correct number of list items', () => {
    render(<TodayCelebrationList event={mockEvents} />)

    const listItems = screen.getAllByRole('listitem')
    const totalSuggestions = mockEvents.reduce(
      (sum, event) => sum + event.suggestions.length,
      0
    )
    const expectedListItems = mockEvents.length + totalSuggestions

    expect(listItems).toHaveLength(expectedListItems)
  })
})
