import { useRouter } from 'next/router';

export default function useQueryParams() {
  const router = useRouter();
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

  const removeParam = (param: string) => {
    const newQuery = { ...query };
    delete newQuery[param];

    router.push(
      {
        pathname: router.pathname,
        query: newQuery,
      },
      undefined,
      { scroll: false }
    );
  };

  //рабочая версия!!
  // const removeParam = (key: string | null) => {
  //   if (!key) return;

  //   const newQuery = Object.fromEntries(
  //     Object.entries(query).filter(([k]) => k !== key)
  //   );

  //   router.push({
  //     pathname: router.pathname,
  //     query: newQuery,
  //   });
  // };

  return { query, setQuery, removeParam };
}
