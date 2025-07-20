export default {
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    // Handle CSS modules
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    // Handle alias "@/*"
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  // Tell Jest how to turn TS/JSX into runnable JS
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          parser: { syntax: 'typescript', tsx: true },
          transform: { react: { runtime: 'automatic' } },
        },
      },
    ],
  },

  testPathIgnorePatterns: ['/node_modules/', '/.next/', '<rootDir>/e2e/'],
  collectCoverageFrom: ['src/**/*.{ts, tsx}', '!src/**/*.d.ts', '!**/node_modules/**'],
};
