module.exports = {
  env: {
      browser: true,
      es6: true,
      node: true
  },
  parserOptions: {
    ecmaFeatures: {
        jsx: true,
    },
    sourceType: 'module'
  },
  extends: [
      'eslint:recommended',
      'plugin:react/recommended',
  ],
  plugins: [
      'react',
      'react-hooks',
  ],
  rules: {
      'react/jsx-uses-react': 'error',   
      'react/jsx-uses-vars': 'error', 
      'react/prop-types': 0,
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      "react/react-in-jsx-scope": "off",
  },
  settings: {
      react: {
          version: 'latest',
      },
  }
};
