import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ErrorBTN from './ErrorBtn';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import React from 'react';

import { vi } from 'vitest';

describe('ErrorBTN Component', () => {
  it('renders the button with provided text', () => {
    render(<ErrorBTN>Error click</ErrorBTN>);
    expect(
      screen.getByRole('button', { name: /error click/i })
    ).toBeInTheDocument();
  });

  it('throws an error when clicked', async () => {
    vi.spyOn(console, 'error').mockImplementation(() => {});

    render(
      <ErrorBoundary>
        <ErrorBTN>Error click</ErrorBTN>
      </ErrorBoundary>
    );

    const button = screen.getByRole('button', { name: /error click/i });
    await userEvent.click(button);

    expect(screen.getByText(/simulated error/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /reload page/i })
    ).toBeInTheDocument();

    vi.restoreAllMocks();
  });
});
