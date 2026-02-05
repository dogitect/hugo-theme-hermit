/**
 * @fileoverview ESLint configuration following Google JavaScript Style Guide.
 * @see https://google.github.io/styleguide/jsguide.html
 */

export default [
  {
    ignores: ['public/**', 'resources/**', 'node_modules/**'],
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      // Google Style: Disallow unused variables
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      // Google Style: Allow console for debugging
      'no-console': 'off',
      // Google Style: Require semicolons (handled by Prettier)
      // Google Style: Use single quotes (handled by Prettier)
      // Google Style: 2 space indentation (handled by Prettier)
    },
  },
]
