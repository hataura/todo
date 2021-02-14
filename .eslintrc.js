module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
    project: "./tsconfig.json",
  },
  globals: {
    fetch: false,
    AbortController: false,
  },
  env: {
    node: true,
    es6: true,
    browser: true,
  },
  extends: [
    "airbnb-typescript",
    "plugin:@typescript-eslint/eslint-recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint",
  ],
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "import/prefer-default-export": "off",
    "no-console": "off",
    "import/no-extraneous-dependencies": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/quotes": "off",
  },
};
