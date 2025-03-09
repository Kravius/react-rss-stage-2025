import { renderHook } from '@testing-library/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { vi } from 'vitest';
import useQueryParams from './useQueryParams';

// Мокаем useRouter и useSearchParams
vi.mock('next/navigation', () => ({
  useRouter: vi.fn(),
  useSearchParams: vi.fn(),
}));

describe('useQueryParams', () => {
  let pushMock;

  beforeEach(() => {
    pushMock = vi.fn();
    useRouter.mockReturnValue({ push: pushMock });
    useSearchParams .mockReturnValue(new URLSearchParams());
  });

  it('should update query parameters using setQuery', () => {
    const { result } = renderHook(() => useQueryParams());

    result.current.setQuery('key', 'value');

    expect(pushMock).toHaveBeenCalledWith(`${window.location.pathname}?key=value`);
  });

  it('should navigate to home and set default page parameter in goHome', () => {
    const { result } = renderHook(() => useQueryParams());

    result.current.goHome();

    expect(pushMock).toHaveBeenCalledWith(`/?page=1`);
  });

  it('should remove query parameter in removeParam', () => {
    useSearchParams.mockReturnValue(new URLSearchParams('key=value&test=123'));

    const { result } = renderHook(() => useQueryParams());

    result.current.removeParam('key');

    expect(pushMock).toHaveBeenCalledWith(`${window.location.pathname}?test=123`);
  });
});
