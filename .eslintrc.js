module.exports = {
	env: {
		es2021: true,
		node: true,
	},
	extends: 'xo',
	overrides: [
		{
			extends: [
				'xo-typescript',
				'prettier',
			],
			files: [
				'*.ts',
				'*.tsx',
			],
			rules: {
				'@typescript-eslint/naming-convention': ['warn',
					{
						selector: 'property',
						format: ['strictCamelCase'],
						filter: {
							regex: '\\d+',
							match: false,
						},
					}],
				'@typescript-eslint/no-unsafe-assignment': 'off',
				'@typescript-eslint/no-unsafe-call': 'off',
			},
		},
	],
	parserOptions: {
		project: './tsconfig.eslint.json',
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
};
