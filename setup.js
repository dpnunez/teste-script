const { exec } = require("child_process");
const fs = require('fs')

const dependencies = [
	"babel-eslint@^10.1.0",
	"eslint@^7.32.0",
	"eslint-config-prettier@^8.3.0",
	"eslint-plugin-import@^2.23.2",
	"eslint-plugin-prettier@^3.4.0",
	"eslint-plugin-react@^7.23.2",
	"eslint-plugin-react-hooks@^4.2.0",
	"prettier@^2.3.0",
]

const configEslint = {
	"env": {
			"browser": true,
			"es2021": true,
			"node": true
	},
	"extends": [
			"eslint:recommended",
			"plugin:react/recommended",
			"plugin:prettier/recommended"
	],
	"parser": "babel-eslint",
	"parserOptions": {
			"ecmaFeatures": {
					"jsx": true
			},
			"ecmaVersion": 12,
			"sourceType": "module"
	},
	"plugins": [
			"react",
			"prettier",
			"import",
			"react-hooks"
	],
	"rules": {
			"no-unused-vars": "warn",
			"react/prop-types": 0,
			"prettier/prettier": [
				"error",
				{
					"endOfLine": "auto"
				}
			],
			"quotes": [
					"error",
					"double"
			],
			"semi": [
					"error",
					"always"
			],
			"react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
			"react-hooks/exhaustive-deps": "warn" // Checks effect dependencies
	}
}


const configPrettier = `module.exports = {
  singleQuote: false,
  trailingComma: "all",
  useTabs: true,
  tabWidth: 2,
  arrowParens: "avoid",
}`


function installDeps() {
	exec(`yarn add -D ${dependencies.join(' ')}`, { shell: true })
}

function createConfigFiles() {
	fs.writeFileSync('.eslintrc.json', JSON.stringify(configEslint, null, 2))
	fs.writeFileSync('prettier.config.js', configPrettier)
}

installDeps()
createConfigFiles()




