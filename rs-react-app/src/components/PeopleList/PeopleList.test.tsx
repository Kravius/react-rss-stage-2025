import { render, screen, fireEvent } from '@testing-library/react';
import { beforeEach, describe, expect, it, Mock } from 'vitest';
import { vi } from 'vitest';
import PeopleList from './PeopleList'; // Путь к компоненту
import { useTheme } from '@services/ThemeContex';
import { useAppDispatch, useAppSelector } from '@store/store';
import { useSearchParams } from 'next/navigation';
import React from 'react';
// Мокаем хуки
vi.mock('@services/ThemeContex', () => ({
  useTheme: vi.fn(),
}));

vi.mock('@store/store', () => ({
  useAppDispatch: vi.fn(),
  useAppSelector: vi.fn(),
}));

vi.mock('next/navigation', () => ({
  useSearchParams: vi.fn(),
}));

describe('PeopleList Component', () => {
  const mockDispatch = vi.fn();

  beforeEach(() => {
    // Мокаем хук useAppDispatch
    (useAppDispatch as Mock).mockReturnValue(mockDispatch);

    // Мокаем хук useAppSelector
    (useAppSelector as Mock).mockReturnValue({
      saveEntities: {}, // пустой объект, или заполненный, как нужно для теста
    });

    // Мокаем хук useSearchParams
    (useSearchParams as Mock).mockReturnValue({
      get: vi.fn().mockReturnValue(null), // возвращаем null для поиска по person
    });

    // Мокаем useTheme, чтобы возвращать светлую тему
    (useTheme as Mock).mockReturnValue({
      isDark: false,
    });
  });

  it('should render the list of people', () => {
    const people = [
      { id: '1', name: 'Luke Skywalker', img: 'luke.jpg' },
      { id: '2', name: 'Darth Vader', img: 'vader.jpg' },
    ];

    render(<PeopleList people={people} />);

    // Проверяем, что имена людей отрисовались
    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
    expect(screen.getByText('Darth Vader')).toBeInTheDocument();
  });

  it('should call handleCheckedChange when checkbox is clicked', () => {
    const people = [{ id: '1', name: 'Luke Skywalker', img: 'luke.jpg' }];

    render(<PeopleList people={people} />);

    const checkbox = screen.getByRole('checkbox');

    // Симулируем клик по чекбоксу
    fireEvent.click(checkbox);

    // Проверяем, что dispatch был вызван
    expect(mockDispatch).toHaveBeenCalled();
  });

  it('should open Person details when button is clicked', () => {
    const people = [{ id: '1', name: 'Luke Skywalker', img: 'luke.jpg' }];

    render(<PeopleList people={people} />);

    const button = screen.getByText('Luke Skywalker');

    // Симулируем клик по кнопке
    fireEvent.click(button);

    // Проверяем, что открыта форма с персоной
    // В этом случае ты можешь проверить, что компонент Person отрисован или его props
    expect(screen.getByText('Person details')).toBeInTheDocument(); // Убедись, что это реально происходит
  });

  it('should show PersonStartScreen if no person is active', () => {
    const people = [{ id: '1', name: 'Luke Skywalker', img: 'luke.jpg' }];

    render(<PeopleList people={people} />);

    // По умолчанию должен быть отображен компонент PersonStartScreen
    expect(
      screen.getByText('Узнай больше о персонажах Звездных воин')
    ).toBeInTheDocument();
  });
});
