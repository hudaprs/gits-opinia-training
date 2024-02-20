module.exports = {
  preset: 'react-native',
  cacheDirectory: './cache',
  coverageThreshold: {
    global: {
      statements: 80,
    },
  },
  collectCoverageFrom: ['src/**/*.tsx'],
  transformIgnorePatterns: [
    '/node_modules/(?!(@react-native|react-native|react-native-reanimated|redux-persist|@react-navigation/.*)/).*/',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
