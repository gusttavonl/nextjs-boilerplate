module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/stories.tsx',
    '!src/pages/**/*.tsx',
    '!src/styles/**/*.ts',
    '!src/utils/graphql/apollo.ts',
    '!src/utils/graphql/apolloCache.ts',
    '!src/types/**/*.d.ts',
    '!src/graphql/**/*.ts',
    '!src/**/mock.ts',
    '!src/utils/helpers/*.tsx',
    '!src/utils/tests/helpers.tsx'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^styled-components':
      '<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js'
  }
}
