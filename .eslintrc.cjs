module.exports = {
	extends: ['@theoparis/eslint-config'],
	parserOptions: {
		extraFileExtensions: ['.svelte']
	},
	rules: {
		'no-shadow': 'off'
	},
	env: {
		es6: true,
		browser: true
	},
	overrides: [
		{
			files: ['*.svelte'],
			processor: 'svelte3/svelte3'
		}
	],
	settings: {
		'svelte3/typescript': require('typescript'),
		// ignore style tags in Svelte because of Tailwind CSS
		// See https://github.com/sveltejs/eslint-plugin-svelte3/issues/70
		'svelte3/ignore-styles': () => true
	},
	plugins: ['svelte3'],
	ignorePatterns: ['node_modules', 'dist']
};
