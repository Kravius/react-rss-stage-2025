'use client';

import { ThemeProvider } from '@services/ThemeContex';
import { store } from '@store/store';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';

export function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider>{children}</ThemeProvider>
    </Provider>
  );
}
