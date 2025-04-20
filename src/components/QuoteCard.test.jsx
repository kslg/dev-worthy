import { render, screen, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'
import QuoteCard from './QuoteCard'

// Mock the fetch function
global.fetch = vi.fn()

describe('QuoteCard', () => {
  it('renders and clicks the "Get New Quote" button', () => {
    render(<QuoteCard />)

    // Find the "Get New Quote" button
    const button = screen.getByText('Get New Quote')
    expect(button).toBeInTheDocument()

    // Simulate a button click
    fireEvent.click(button)

    // Make sure the button gets disabled after clicking (if your component disables it)
    expect(button).toBeDisabled()
  })
})
