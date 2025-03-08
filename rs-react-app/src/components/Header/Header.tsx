'use client';

// import styles from './Header.module.css';
import { useTheme } from '@services/ThemeContex';
import Search from '@components/Search/Search';
import React from 'react';

const Header: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <header>
      <button onClick={toggleTheme}>
        {isDark ? 'turn light' : 'turn dark'}
      </button>
      <Search />
    </header>
  );
};

export default Header;
