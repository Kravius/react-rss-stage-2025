// /// <reference types="vitest" />
// import path from 'path';
// import { defineConfig } from 'vite';

// export default defineConfig({
//   test: {
//     resolve: {
//       alias: {
//         '@services': path.resolve(__dirname, 'src/services'),
//         // Добавьте другие алиасы, если необходимо
//       },
//     },
//     environment: 'jsdom', // Указываем jsdom для работы с DOM
//     globals: true, // Включаем глобальные функции (например, `expect`)
//     setupFiles: './setupTest.js', // Указываем на файл настроек
//   },
// });

import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    environment: 'jsdom', // Указываем jsdom для работы с DOM
    globals: true, // Включаем глобальные функции (например, `expect`)
    setupFiles: './setupTest.js', // Указываем на файл настроек
  },
  resolve: {
    alias: {
      '@services': path.resolve(__dirname, 'src/services'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@type': path.resolve(__dirname, 'src/type'),
      // Добавьте другие алиасы, если необходимо
    },
  },
});

// "@components/*": ["src/components/*"],
// "@pages/*": ["src/pages1/*"],
// "@services/*": ["src/services/*"],
// "@store/*": ["src/store/*"],
// "@constants/*": ["src/constants/*"],
// "@type/*": ["src/type/*"]
