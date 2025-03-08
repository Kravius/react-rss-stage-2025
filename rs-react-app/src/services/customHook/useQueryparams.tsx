'use client';
import { useSearchParams, useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';

export default function useQueryParams() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const setQuery = (key: string, value: string) => {
    const newQuery = new URLSearchParams(searchParams);
    newQuery.set(key, value);
    router.push(`${window.location.pathname}?${newQuery.toString()}`);
    // const newQuery = {
    //   ...query,
    //   [key]: value,
    // };
    // router.push({
    //   pathname: router.pathname,
    //   query: newQuery,
    // });
  };

  const goHome = () => {
    localStorage.setItem('search', '');

    const params = new URLSearchParams(searchParams);
    if (!params.has('page')) {
      params.set('page', '1');
    }

    router.push(`/?${params.toString()}`);
  };

  //рабочая версия!!
  const removeParam = (key: string | null) => {
    if (!key) return;
    const newParams = new URLSearchParams(searchParams);
    newParams.delete(key);
    router.push(`${window.location.pathname}?${newParams.toString()}`);
    // const newQuery = Object.fromEntries(
    //   Object.entries(query).filter(([k]) => k !== key)
    // );

    // router.push({
    //   pathname: router.pathname,
    //   query: newQuery,
    // });
  };

  return { setQuery, removeParam, goHome };
}
