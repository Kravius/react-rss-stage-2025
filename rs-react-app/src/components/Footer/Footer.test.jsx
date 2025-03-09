import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import React from 'react';

describe('Footer Component', () => {
  it('renders the ErrorBTN component', () => {
    render(<Footer />);
    expect(
      screen.getByRole('button', { name: /error click/i })
    ).toBeInTheDocument();
  });
});
