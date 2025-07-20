import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Home page', () => {
  it('renders the heading', () => {
    render(<Home />);
    const link = screen.getByRole('link', {
      name: /Read our docs/i,
    });
    expect(link).toBeInTheDocument();
  });
});
