import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header'; // Путь к вашему компоненту
import { useTheme } from '@services/ThemeContex'; // Убедитесь, что путь правильный
import { describe, expect, it, vi, Mock } from 'vitest';
import React from 'react';

// Мокаем хук useTheme, чтобы контролировать его значения в тестах
vi.mock('@services/ThemeContex', () => ({
  useTheme: vi.fn(),
}));

// Мокаем useRouter
vi.mock('next/navigation', () => ({
  useRouter: vi.fn().mockReturnValue({
    push: vi.fn(),
  }),
  useSearchParams: vi.fn().mockReturnValue(new URLSearchParams('')),
}));

describe('Header', () => {
  it('should render and toggle theme', () => {
    // Мокаем значения, которые возвращает useTheme
    const mockToggleTheme = vi.fn();
    (useTheme as Mock).mockReturnValue({
      isDark: false,
      toggleTheme: mockToggleTheme,
    });

    // Рендерим компонент
    render(<Header />);

    // Проверяем, что текст кнопки соответствует светлой теме
    const button = screen.getByText(/turn dark/i);
    expect(button).toBeInTheDocument();

    // Проверяем, что кнопка вызывает toggleTheme при клике
    fireEvent.click(button);
    expect(mockToggleTheme).toHaveBeenCalled();
  });

  it('should toggle theme to dark', () => {
    const mockToggleTheme = vi.fn();
    (useTheme as Mock).mockReturnValue({
      isDark: true,
      toggleTheme: mockToggleTheme,
    });

    render(<Header />);

    const button = screen.getByText('turn light');
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(mockToggleTheme).toHaveBeenCalled();
  });
});
