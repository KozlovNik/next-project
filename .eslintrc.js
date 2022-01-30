module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    requireConfigFile: false,
    project: ["./tsconfig.json"],
    babelOptions: {
      presets: ["@typescript-eslint"],
    },
  },
  env: {
    browser: true,
    es6: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "airbnb",
    "airbnb-typescript",
    "prettier",
  ],
  plugins: ["prettier", "react-hooks"],
  rules: {
    "import/prefer-default-export": "off",
    "import/no-unresolved": "off",
    "import/no-cycle": "off",
    "no-restricted-imports": ["error", "lodash"],
    "react/function-component-definition": "off",
    "react/jsx-indent": "off",
    "react/jsx-curly-newline": "off",
    "react/require-default-props": "off",
    "react/destructuring-assignment": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/default-props-match-prop-types": "off",
    "react/jsx-wrap-multilines": "off",
    "react/sort-comp": "off",
    "react/no-access-state-in-setstate": "warn",
    "react/no-unused-prop-types": "warn",
    "react/prop-types": "off",
    "react/button-has-type": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-fragments": "warn",
    "react/static-property-placement": "off",
    "react/state-in-constructor": "off",
    "react/no-deprecated": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/react-in-jsx-scope": "off",
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        required: {
          some: ["nesting", "id"],
        },
      },
    ],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],

    // will be fixed after massive refactoring
    "react-hooks/rules-of-hooks": "off",
    "react/no-unstable-nested-components": "off",
    "react/jsx-no-constructed-context-values": "off",
    "import/no-extraneous-dependencies": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
  },
};
