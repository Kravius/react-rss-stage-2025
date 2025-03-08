'use client';
import { NextPage } from 'next';
// import styles from './Header.module.css';
import { useTheme } from '@services/ThemeContex';
import Search from '@components/Search/Search';

const Header: NextPage = () => {
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
