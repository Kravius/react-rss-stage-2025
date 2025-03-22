import { useCallback, useMemo, useState } from 'react';

import { Country } from 'src/type/type';
import CountryRow from './CountryRow.tsx/CountryRow';

interface CreateBodyTableProps {
  dataForSort: Country[];
}

const CreateBodyTable: React.FC<CreateBodyTableProps> = ({ dataForSort }) => {
  const [active, setActive] = useState<{ [key: string]: string }>(
    JSON.parse(localStorage.getItem('index') || '{}')
  );

  const handelCountryClick = useCallback(
    (index: string) => {
      if (active[index] === index) {
        setActive((prev) => {
          const { [index]: _, ...rest } = prev;

          localStorage.setItem('index', JSON.stringify(rest));
          return rest;
        });
      } else {
        setActive((prev) => {
          const newActive = { ...prev, [index]: index };
          localStorage.setItem('index', JSON.stringify(newActive));
          return newActive;
        });
      }
    },
    [active]
  );

  const memoizeRows = useMemo(() => {
    return dataForSort.map((country) => {
      return (
        <CountryRow
          key={country.idFromData}
          country={country}
          active={active[country.idFromData]}
          handelCountryClick={handelCountryClick}
        />
      );
    });
  }, [dataForSort, active, handelCountryClick]);
  return <tbody>{memoizeRows}</tbody>;
};

export default CreateBodyTable;
