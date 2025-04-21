import { describe, test, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Favourites from './Favourites';

// Simple mock for localStorage
const setupLocalStorageMock = (initialFavourites) => {
  let storedData = initialFavourites ? JSON.stringify(initialFavourites) : null;
  
  const localStorageMock = {
    getItem: vi.fn(() => storedData),
    setItem: vi.fn((_, value) => {
      storedData = value;
    })
  };
  
  Object.defineProperty(window, 'localStorage', { value: localStorageMock });
  return localStorageMock;
};

describe("Favourites Component", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });
  
  test('renders empty state when no favourites', () => {
    const localStorageMock = setupLocalStorageMock([]);
    
    render(<Favourites />);
    
    expect(screen.getByText(/No favourites yet/i)).toBeInTheDocument();
    expect(localStorageMock.getItem).toHaveBeenCalledWith('favourites');
  });
  
  test('renders favourites from localStorage', () => {
    const mockFavourites = [
      { quote: 'Test quote 1', author: 'Author 1' }
    ];
    
    setupLocalStorageMock(mockFavourites);
    
    render(<Favourites />);
    
    expect(screen.getByText(/"Test quote 1"/i)).toBeInTheDocument();
    expect(screen.getByText(/— Author 1/i)).toBeInTheDocument();
  });
  
  // Test only the core functionality - this is the most important test
  test('loads favourites from localStorage on mount', () => {
    const mockFavourites = [
      { quote: 'Test quote', author: 'Test Author' }
    ];
    
    const localStorageMock = setupLocalStorageMock(mockFavourites);
    
    render(<Favourites />);
    
    expect(localStorageMock.getItem).toHaveBeenCalledWith('favourites');
    expect(screen.getByText(/"Test quote"/i)).toBeInTheDocument();
  });
});