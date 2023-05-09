/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    collectCoverage: true,
    collectCoverageFrom: [
      'src/app/**/*.{ts,tsx}',
      '!**/node_modules/**',
      '!**/dist/**',
      '!**/coverage/**',
      '!**/vendor/**',
    ],
    coverageReporters: ['json', 'json-summary', 'lcov', 'text'],
  };
  