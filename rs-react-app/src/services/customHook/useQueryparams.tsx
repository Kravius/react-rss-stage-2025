// import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';

export default function useQueryParams() {
  const router = useRouter();
  // const searchParams = useSearchParams();
  const { query } = router;

  const setQuery = (key: string, value: string) => {
    const newQuery = {
      ...query,
      [key]: value,
    };

    router.push({
      pathname: router.pathname,
      query: newQuery,
    });
  };

  const goHome = () => {
    localStorage.setItem('search', '');
    const newUrl = {
      pathname: '/',
      query: { page: '1' },
    };
    router.push(newUrl);
  };

  // const goHome = () => {
  //   localStorage.setItem('searchTerm', '');

  //   const params = new URLSearchParams(searchParams);
  //   if (!params.has('page')) {
  //     params.set('page', '1');
  //   }

  //   router.push(`/?${params.toString()}`);
  // };

  //рабочая версия!!
  const removeParam = (key: string | null) => {
    if (!key) return;

    const newQuery = Object.fromEntries(
      Object.entries(query).filter(([k]) => k !== key)
    );

    router.push({
      pathname: router.pathname,
      query: newQuery,
    });
  };

  return { query, setQuery, removeParam, goHome };
}
