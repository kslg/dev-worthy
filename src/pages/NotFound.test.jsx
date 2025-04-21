import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFound from './NotFound';

describe('NotFound Component', () => {
  test('renders 404 page correctly', () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    
    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText('Page not found.')).toBeInTheDocument();
    expect(screen.getByText('Back to Home')).toBeInTheDocument();
  });
});