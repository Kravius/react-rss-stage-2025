import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'], // Указываем путь к setupTests.ts
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  coverageReporters: ['text', 'html'],
  collectCoverageFrom: ['src/**/*.tsx'],
  coveragePathIgnorePatterns: [
    'node_modules',
    'src/__tests__',
    'src/setupTests.ts',
    'src/App.tsx',
  ],
};

export default config;
