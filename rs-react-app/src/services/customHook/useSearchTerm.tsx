import { useEffect, useState } from 'react';

const useSearchTerm = () => {
  const [searchTerm, setSearchTerm] = useState(() => {
    const savedSearchValue = localStorage.getItem('searchTerm');
    return savedSearchValue ? JSON.parse(savedSearchValue) : '';
  });

  useEffect(() => {
    if (searchTerm) {
      localStorage.setItem('searchTerm', JSON.stringify(searchTerm));
    } else {
      localStorage.removeItem('searchTerm');
    }
  }, [searchTerm]);
  return [searchTerm, setSearchTerm] as const;
};

export default useSearchTerm;
