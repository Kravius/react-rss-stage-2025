import { render, screen } from '@testing-library/react';
import ErrorMessage from './ErrorMessage';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import React from 'react';

describe('ErrorMessage component', () => {
  it('renders the error message correctly', () => {
    render(<ErrorMessage />);

    const message = screen.getByText('No result for your search');
    expect(message).toBeInTheDocument();
  });
});
