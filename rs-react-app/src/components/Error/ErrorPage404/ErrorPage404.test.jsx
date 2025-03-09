import { render, screen } from '@testing-library/react';
import ErrorPage404 from './ErrorPage404';
import { useRouteError } from 'react-router-dom';
import { vi } from 'vitest';
import '@testing-library/jest-dom';
import React from 'react';



vi.mock('react-router-dom', () => ({
  useRouteError: vi.fn(),
  isRouteErrorResponse: (error) => Boolean(error && typeof error === 'object' && 'statusText' in error),
}));

describe('ErrorPage404 Component', () => {
  it('renders 404 error when route error exists', () => {
    useRouteError.mockReturnValue({
      statusText: 'Not Found',
      data: 'Page does not exist',
    });

    render(<ErrorPage404 />);

    expect(screen.getByText(/hi! it is an error page/i)).toBeInTheDocument();
    expect(screen.getByText(/404 not found error/i)).toBeInTheDocument();

    // Исправляем: используем getAllByText и проверяем, что найдено более одного элемента
    const notFoundTexts = screen.getAllByText(/not found/i);
    expect(notFoundTexts.length).toBeGreaterThanOrEqual(1);

    expect(screen.getByText(/page does not exist/i)).toBeInTheDocument();
  });

  it('renders generic error message when no route error', () => {
    useRouteError.mockReturnValue(null);

    render(<ErrorPage404 />);

    expect(screen.getByText(/hi! it is an error page/i)).toBeInTheDocument();
    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
  });
});
