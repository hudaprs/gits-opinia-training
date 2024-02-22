module.exports = {
	presets: ['module:@react-native/babel-preset'],
	plugins: [
		[
			'module-resolver',
			{
				root: ['./src'],
				alias: {
					/**
					 * Regular expression is used to match all files inside `./src` directory and map each `.src/folder/[..]` to `@folder/[..]` path
					 */
					'^@/(.+)': './src/\\1'
				},
				extensions: [
					'.ios.js',
					'.android.js',
					'.js',
					'.jsx',
					'.json',
					'.tsx',
					'.ts',
					'.native.js'
				]
			}
		]
	]
}
