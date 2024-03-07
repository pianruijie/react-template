/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  verbose: true,
  preset: 'ts-jest',
  cacheDirectory: './node_modules/jest/cache',
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '^lodash-es$': 'lodash'
  },
  roots: ['<rootDir>/src'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '\\.(gif|ttf|eot|svg)$': '<rootDir>/src/__tests__/__mock__/fileMock.js',
    '\\.(css|less|sass|scss)$': '<rootDir>/src/__tests__/__mock__/styleMock.js'
  },
  testMatch: ['**/__tests__/*.(jsx|ts|tsx)', '**/?(*.)+(spec|test).(js|jsx|ts|tsx)'],
  setupFilesAfterEnv: ['<rootDir>/src/__tests__/jest.setup.js']
};
