# Standardization

Berikut adalah langkah-langkah untuk mengimplementasikan hal-hal umum terkait standarisasi untuk memulai project pengembangan React Native:

## ✅ Introduction

Sistem ini menggunakan:

- React Native
- Node >=18
- Yarn

Setup Project

```shell
yarn install
```

Setup iOS

```shell
npx pod-install ios && yarn ios
```

Run Android

```
yarn android
```

## 🗂️ Folder Structure

```javascript
|___tests__                       // Contain all test of the application (inside is the same as the root folder, but ony contain App.test.tsx and src folder)
|
|src                              // Entry point for the app.
|___assets                        // Assets, images, fonts, styles, etc.
|   |______images
|   |____________icon             // Contain icon for the project
|   |____________{another}        // Another related to images
|   |______fonts                  // Contain fonts that used inside the project
|
|___features                      // Contain all of your features
|   |______app                    // Core of feature in the project, usually contain reusable API.
|   |____________enums            // Contain static value / constant
|   |____________types            // Contain types for feature
|   |____________navigations      // Contain routing, according feature
|   |____________screens          // Contain UI / View for the app
|   |____________utils            // Contain utility that reusable for another component or it-self
|   |
|   |
|   |______{another}              // Another features, the content same as above.
```

## ⚙️ VSCode Extension

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Prettier adalah suatu formatter yang digunakan untuk melakukan formatting ketika melakukan pengembangan menggunakan Tech Stack ini. Extension ini sangat dibutuhkan untuk membuat code yang ditulis memenuhi style yang sudah ditentukan.

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

ESLint adalah suatu extension yang digunakan untuk menganalisis apa yang terjadi di dalam suatu project yang menggunakan Tech Stack ini. ESLint sangat dibutuhkan dalam pengembangan, dikarenakan kita akan mudah untuk melakukan tracing error, fix bug, dan mungkin meningkatkan code quality dalam suatu pengembangan.

- [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

Extension ini berguna untuk membantu mempercepat pengembangan React dengan adanya snippet yang sudah disediakan di dalamnya.

### 🛠️ Implementasi

1. Install Dev Dependencies

```shell
yarn add -D prettier @react-native-community/eslint-config@^3.2.0 @typescript-eslint/eslint-plugin@^5.54.1 @typescript-eslint/parser@^5.54.1 eslint@^8.36.0 eslint-config-prettier@^8.7.0 eslint-plugin-prettier@5.0.0 eslint-plugin-react-hooks@^4.6.0
```

2. Update Prettier Config

```json
{
	"semi": false,
	"arrowParens": "avoid",
	"jsxSingleQuote": true,
	"singleQuote": true,
	"trailingComma": "none",
	"tabWidth": 2,
	"useTabs": true,
	"endOfLine": "auto"
}
```

3. Update ESLint Config

```json
// .eslintrc.json
{
	"root": true,
	"env": {
		"node": true,
		"browser": true,
		"es2021": true,
		"jest": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:prettier/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react-hooks/recommended"
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": ["react", "react-native", "@typescript-eslint", "react-hooks"],
	"ignorePatterns": [
		"!.*",
		"dist",
		"node_modules",
		"src/test",
		"__tests__",
		"__mocks__"
	],
	"rules": {
		// JSX
		"react/react-in-jsx-scope": "off",

		// Hook
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn"
	},
	"settings": {
		"react": {
			"version": "detect"
		}
	}
}
```

3. Update VsCode Settings

Tambahkan `.vscode/settings.json` atau update `settings.json` di dalam VSCode untuk menstandarisasi semua user yang memakai VSCode agar config nya dengan standar yang sudah ditentukan.

```json
{
	"typescript.tsdk": "node_modules\\typescript\\lib",
	"typescript.enablePromptUseWorkspaceTsdk": true,
	"editor.defaultFormatter": "rvest.vs-code-prettier-eslint",
	"editor.formatOnPaste": false, // required
	"editor.formatOnType": false, // required
	"editor.formatOnSave": true, // optional
	"editor.formatOnSaveMode": "file", // required to format on save
	"files.autoSave": "off", // optional but recommended
	"vs-code-prettier-eslint.prettierLast": "false", // set as "true" to run 'prettier' last not first
	"[javascript]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"[typescript]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"[typescriptreact]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"[json]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	}
}
```

4. Update `package.json`

Hal terakhir pada implementasi standarisasi dari sisi code adalah penambahan script untuk menjalankan eslint dan prettier secara bersamaan.

```json
// ...package.json
{
	"lint": "eslint \"src/**/*.{js,jsx,ts,tsx,json}\"",
	"lint:fix": "eslint --fix \"src/**/*.{js,jsx,ts,tsx,json}\"",
	"lint:format": "prettier --write \"src/**/*.{js,jsx,ts,tsx,css,md,json}\" --config ./.prettierrc"
}
```

## 🛠️ Commit Lint & Husky

1. Init Husky

```shell
npx husky-init && yarn
```

2. Install Commitlint

```shell
yarn add -D @commitlint/config-conventional @commitlint/cli
```

3. Tambahkan Hook Untuk Menjalankan Husky

```shell
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```

4. Tambahkan file `commitlint.config.js` di root project

```javascript
module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'type-enum': [
			2,
			'always',
			[
				'chore',
				'ci',
				'docs',
				'feat',
				'fix',
				'refactor',
				'revert',
				'style',
				'test'
			]
		],
		'type-case': [2, 'always', 'lowerCase'],
		'type-empty': [2, 'never'],
		'scope-case': [2, 'always', 'lowerCase']
	}
}
```

5. Tambahkan lint-staged untuk melakukan pre-commit

```shell
yarn add -D lint-staged
```

6. Update `package.json` dan sisipkan code berikut

```json
{
	"lint-staged": {
		"*.{js,jsx,ts,tsx}": ["yarn lint:format", "yarn lint"]
	}
}
```

7. Masuk ke dalam `.husky/pre-commit` dan update code menjadi seperti berikut

```sh
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

yarn lint-staged
```

## 🛠️ Unit Test

1. Buat atau Update file `jest.config.js` pada root directory menjadi seperti berikut:

```javascript
module.exports = {
	preset: 'react-native',
	cacheDirectory: './cache',
	coverageThreshold: {
		global: {
			statements: 80
		}
	},
	collectCoverageFrom: ['src/**/*.tsx'],
	transformIgnorePatterns: [
		'/node_modules/(?!(@react-native|react-native|react-native-reanimated|redux-persist|@react-navigation/.*)/).*/'
	],
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts']
}
```

2. Install React Testing Library

```shell
yarn add -D @testing-library/react-native @types/jest
```

3. Buat file `jest.setup.ts` pada root dir yang berisikan code seperti berikut:

```javascript
// Testing Library
import '@testing-library/react-native/extend-expect'

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')
```

4. Testing

Berikut adalah cara cara untuk melakukan testing di dalam React Native

Update `package.json` script menjadi seperti berikut:

```shell
yarn test
```

This will watch all the test files. It is very useful while writing tests and quickly seeing results.

```shell
yarn test:watch
```

- Unit Test
  Terdapat kode yang dimana file tersebut hanya mempunyai logika pengecekan, hal seperti ini adalah `unit` apabila kita merujuk ke ranah testing.

- Integration Test
  Integration test di sini adalah suatu test case yang dimana di dalamnya terdapat integrasi ke dalam API, atau memanggil data-data yang lain.

- UI Test
  UI test adalah suatu test yang hanya melihat UI (tampilan saja) dan tidak banyak logika atau bisnis proses di dalamnya.

Setup ini bisa disesuaikan sesuai package yang digunakan

5. **Bonus** Tambahkan CI pada GitHub workflows untuk melakukan pengetesan secara otomatis, berikut code nya

```yaml
name: Opinia - Test

on:
  pull_request:
    branches: ['main']

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Testing
        run: yarn install && yarn test
```
