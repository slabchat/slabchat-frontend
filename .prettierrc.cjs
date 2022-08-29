module.exports = {
	arrowParens: 'avoid',
	singleQuote: true,
	printWidth: 80,
	tabWidth: 2,
	useTabs: true,
	semi: true,
	trailingComma: 'none',
	plugins: [require('prettier-plugin-svelte')],
	svelteSortOrder: 'options-styles-scripts-markup',
	svelteStrictMode: false,
	svelteIndentScriptAndStyle: true
};
