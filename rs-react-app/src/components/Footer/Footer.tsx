'use client';

import ErrorBTN from '@components/Error/ErrorBtn/ErrorBtn';
// import styles from './Footer.module.css';
import { NextPage } from 'next';

const Footer: NextPage = () => {
  return (
    <footer>
      <ErrorBTN>Error click</ErrorBTN>
    </footer>
  );
};

export default Footer;
