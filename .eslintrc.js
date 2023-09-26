module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:i18next/recommended",
    "plugin:storybook/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "i18next",
    "react-hooks",
    "konstantine899-plugin",
    "unused-imports"
  ],
  rules: {
    "unused-imports/no-unused-imports": "error",
    "no-undef": "off",
    "no-param-reassign": "off",
    "implicit-arrow-linebreak": "warn",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "object-curly-newline": "warn",
    "react/jsx-indent": "off",
    "react/jsx-indent-props": "off",
    indent: "off",
    quotes: "off",
    "react/jsx-filename-extension": [
      2,
      {
        extensions: [".js", ".jsx", ".tsx"],
      },
    ],
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "no-unused-vars": "off",
    "react/require-default-props": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
    "react/function-component-definition": "off",
    "react/no-array-index-key": "off",
    "no-shadow": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "no-underscore-dangle": "off",
    "comma-dangle": "off",
    "max-len": [
      "error",
      {
        ignoreComments: true,
        code: 150,
      },
    ],
    "i18next/no-literal-string": [
      "warn",
      {
        markupOnly: true,
        ignoreAttribute: ["data-testid", "to"],
      },
    ],
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "error", // Checks effect dependencies
    "konstantine899-plugin/path-cheker": ["error", { alias: "@" }], // вторым параметром идет объект с опциями в котором указываю наш alias
    "konstantine899-plugin/public-api-imports": [
      "error",
      {
        alias: "@",
        testFilesPatterns: [
          "**/*.test.*",
          "**/*.stories.*",
          "**/StoreDecorator.tsx",
        ],
      },
    ],
    "konstantine899-plugin/layer-imports": [
      "error",
      {
        alias: "@",
        ignoreImportPatterns: ["**/StoreProvider", "**/testing"],
      },
    ],
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true,
  },
  /* overrides переопределяю правила */
  overrides: [
    {
      files: ["**/src/**/*.test.{ts.tsx}"] /* ищу тестовые файлы */,
      rules: {
        "i18next/no-literal-string":
          "off" /* отключаю правило переводов для тестовых файлов */,
      },
    },
  ],
};
