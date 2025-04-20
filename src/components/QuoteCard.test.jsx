import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { vi } from 'vitest';
import QuoteCard from './QuoteCard';

// Mock the fetch function
global.fetch = vi.fn();

describe('QuoteCard', () => {
  afterEach(() => {
    // Reset fetch mock calls after each test to ensure clean tests
    fetch.mockClear();
  });

  it('renders correctly, fetches a quote, and handles "Get New Quote" button click', async () => {
    // Set up mock fetch behavior
    fetch.mockResolvedValueOnce({
      json: () => Promise.resolve({
        quote: 'Life is beautiful.',
        author: 'Unknown',
      }),
    });

    render(<QuoteCard />);

    // Check if the "Get New Quote" button is rendered
    const button = screen.getByText('New Quote');
    expect(button).toBeInTheDocument();

    // Check that the quote is loading initially
    expect(screen.getByTestId('loader')).toBeInTheDocument();


    // Wait for the quote to be fetched and displayed
    await waitFor(() => expect(screen.getByText('"Life is beautiful."')).toBeInTheDocument());

    // Check that the "Get New Quote" button is now clickable and not disabled
    expect(button).toBeEnabled();

    // Simulate clicking the "Get New Quote" button
    fireEvent.click(button);

    // Ensure the fetch is called after the button click
    expect(fetch).toHaveBeenCalledTimes(2);
  });

  it('shows an alert when a quote is saved to favourites', async () => {
    // Set up mock fetch behavior
    fetch.mockResolvedValueOnce({
      json: () => Promise.resolve({
        quote: 'Life is beautiful.',
        author: 'Unknown',
      }),
    });

    render(<QuoteCard />);

    // Wait for the quote to be fetched and displayed
    await waitFor(() => expect(screen.getByText('"Life is beautiful."')).toBeInTheDocument());

    const saveButton = screen.getByText('Save to Favourites');
    fireEvent.click(saveButton);

    // Wait for the alert to appear
    await waitFor(() => expect(screen.getByRole('alert')).toHaveTextContent('Quote saved to favourites!'));
  });

  it('shows a warning alert if the quote is already in favourites', async () => {
    // Set up mock fetch behavior
    fetch.mockResolvedValueOnce({
      json: () => Promise.resolve({
        quote: 'Life is beautiful.',
        author: 'Unknown',
      }),
    });

    render(<QuoteCard />);

    // Wait for the quote to be fetched and displayed
    await waitFor(() => expect(screen.getByText('"Life is beautiful."')).toBeInTheDocument());

    const saveButton = screen.getByText('Save to Favourites');
    fireEvent.click(saveButton);

    // Simulate saving the same quote again (it should already be in the favourites)
    fireEvent.click(saveButton);

    // Wait for the warning alert to appear
    await waitFor(() => expect(screen.getByRole('alert')).toHaveTextContent('Quote is already in favourites.'));
  });

  it('disables "Save to Favourites" button when no quote is available', async () => {
    // Set up mock fetch behavior with an empty quote
    fetch.mockResolvedValueOnce({
      json: () => Promise.resolve({
        quote: '',
        author: '',
      }),
    });

    render(<QuoteCard />);

    const saveButton = screen.getByText('Save to Favourites');
    expect(saveButton).toBeDisabled(); // Button should be disabled if no quote is fetched
  });

  it('disables "Save to Favourites" button when loading', async () => {
    // Set up mock fetch behavior
    fetch.mockResolvedValueOnce({
      json: () => Promise.resolve({
        quote: 'Life is beautiful.',
        author: 'Unknown',
      }),
    });

    render(<QuoteCard />);

    const saveButton = screen.getByText('Save to Favourites');
    
    // Initially, the button should be disabled while loading
    expect(saveButton).toBeDisabled();

    // Wait for the quote to be fetched and displayed
    await waitFor(() => expect(screen.getByText('"Life is beautiful."')).toBeInTheDocument());

    // After loading, the button should be enabled
    expect(saveButton).not.toBeDisabled();
  });
});

