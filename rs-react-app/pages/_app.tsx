import React from 'react';
import './globals.css';
import { AppProps } from 'next/app';

import { Provider } from 'react-redux';
import { store } from '@store/store';
import { ThemeProvider } from '@services/ThemeContex';
import Head from 'next/head';
import { ErrorBoundary } from '@components/Error/ErrorBoundary/ErrorBoundary';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Head>
          <title>STAR WARS API</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <ErrorBoundary>
          <Component {...pageProps} />
        </ErrorBoundary>
      </ThemeProvider>
    </Provider>
  );
}
