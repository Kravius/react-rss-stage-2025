import { render, screen, fireEvent } from '@testing-library/react';
import Search from './Search';

describe('Search', () => {
  it('сохраняет значение в локальном хранилище при нажатии кнопки "Поиск"', () => {
    render(<Search />);
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /Search/i });

    fireEvent.change(input, { target: { value: 'Luke' } });
    fireEvent.click(button);

    expect(localStorage.getItem('searchTerm')).toBe('Luke');
  });

  it('извлекает значение из локального хранилища при монтировании', () => {
    localStorage.setItem('searchTerm', 'Darth');
    render(<Search />);
    expect(screen.getByDisplayValue('Darth')).toBeInTheDocument();
  });
});
