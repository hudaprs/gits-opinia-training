module.exports = {
  preset: 'react-native',
  collectCoverageFrom: ['src/**/*.tsx'],
  transformIgnorePatterns: [
    '/node_modules/(?!(@react-native|react-native|react-native-reanimated|redux-persist|@react-navigation/.*)/).*/',
  ],
  cacheDirectory: './cache',
  coverageThreshold: {
    global: {
      statements: 80,
    },
  },
};
