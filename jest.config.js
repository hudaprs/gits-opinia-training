module.exports = {
	preset: 'react-native',
	cacheDirectory: './cache',
	coverageThreshold: {
		global: {
			statements: 100
		}
	},
	collectCoverageFrom: [
		'src/**/*.tsx',
		'src/**/utils/*.ts',
		'!src/features/home/screens/Native/**/*.{ts,tsx}'
	],
	transformIgnorePatterns: [
		'/node_modules/(?!(@react-native|react-native|react-native-reanimated|redux-persist|@react-navigation/.*)/).*/'
	],
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts']
}
