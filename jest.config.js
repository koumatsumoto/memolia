module.exports = {
  preset: 'jest-preset-angular',
  rootDir: '.',
  testURL: 'http://localhost/',
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '<rootDir>/src/test.ts'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coveragePathIgnorePatterns: ['/node_modules/', '/specs/', '/test-helpers/', '/testing/', '/tests/', '/dist/'],
  coverageReporters: ['lcov', 'text-summary'],
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest',
  },
  verbose: true,
  restoreMocks: true,
  setupFilesAfterEnv: ['<rootDir>/src/test.ts'],
};
