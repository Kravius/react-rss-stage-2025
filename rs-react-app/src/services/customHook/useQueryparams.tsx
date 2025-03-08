'use client';
import { useSearchParams, useRouter } from 'next/navigation';

export default function useQueryParams() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const setQuery = (key: string, value: string) => {
    const newQuery = new URLSearchParams(searchParams);
    newQuery.set(key, value);
    router.push(`${window.location.pathname}?${newQuery.toString()}`);
  };

  const goHome = () => {
    localStorage.setItem('search', '');

    const params = new URLSearchParams(searchParams);
    if (!params.has('page')) {
      params.set('page', '1');
    }

    router.push(`/?${params.toString()}`);
  };

  const removeParam = (key: string | null) => {
    if (!key) return;
    const newParams = new URLSearchParams(searchParams);
    newParams.delete(key);
    router.push(`${window.location.pathname}?${newParams.toString()}`);
  };

  return { setQuery, removeParam, goHome };
}
