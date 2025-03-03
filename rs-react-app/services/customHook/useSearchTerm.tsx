// 'use client';
// import { useEffect, useState } from 'react';

// const useSearchTerm = () => {
//   const [searchTerm, setSearchTerm] = useState(() => {
//     const savedSearchValue = localStorage.getItem('searchTerm');
//     return savedSearchValue ? JSON.parse(savedSearchValue) : '';
//   });

//   useEffect(() => {
//     if (searchTerm) {
//       localStorage.setItem('searchTerm', JSON.stringify(searchTerm));
//     } else {
//       localStorage.removeItem('searchTerm');
//     }
//   }, [searchTerm]);
//   return [searchTerm, setSearchTerm] as const;
// };

// export default useSearchTerm;

import { useEffect, useState } from 'react';

const useSearchTerm = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    // Проверяем, что мы находимся в браузере (на клиенте)
    if (typeof window !== 'undefined') {
      try {
        const savedSearchValue = localStorage.getItem('searchTerm');
        if (savedSearchValue) {
          setSearchTerm(JSON.parse(savedSearchValue));
        }
      } catch (error) {
        console.error('Error parsing searchTerm from localStorage', error);
      }
    }
  }, []);

  useEffect(() => {
    // Сохраняем значение в localStorage только на клиенте
    if (typeof window !== 'undefined') {
      try {
        if (searchTerm) {
          localStorage.setItem('searchTerm', JSON.stringify(searchTerm));
        } else {
          localStorage.removeItem('searchTerm');
        }
      } catch (error) {
        console.error('Error saving searchTerm to localStorage', error);
      }
    }
  }, [searchTerm]);

  return [searchTerm, setSearchTerm] as const;
};

export default useSearchTerm;
