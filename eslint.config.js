import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import airbnb from "eslint-config-airbnb";
import airbnbHooks from "eslint-config-airbnb/hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";


export default [
  // airbnb,
  // airbnbHooks.rules,
  // jsxA11y.configs,
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
  {
    languageOptions: { globals: globals.browser },
    rules: {
    //   // ...airbnb.rules,
    //   'no-console': 'warn',
    //   '@typescript-eslint/no-explicit-any': 'error',
    //   // '@typescript-eslint/no-empty-function': 'on',
    //   // '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/semi': 'off',
      '@typescript-eslint/quotes': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
      'react/react-in-jsx-scope': 'off',
    //   'react/jsx-uses-react': 'off',s
    //   // 'import/extensions': [
    //   //   'error',
    //   //   'ignorePackages',
    //   //   {
    //   //     js: 'never',
    //   //     jsx: 'never',
    //   //     ts: 'never',
    //   //     tsx: 'never',
    //   //   },
    //   // ],
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
  }
];