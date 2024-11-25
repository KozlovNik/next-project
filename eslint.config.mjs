import prettier from "eslint-plugin-prettier";
import reactHooks from "eslint-plugin-react-hooks";
import { fixupPluginRules } from "@eslint/compat";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: [
        "**/node_modules",
        "**/dist",
        "**/.eslintrc.js",
        "**/package.json",
        "**/package-lock.json",
    ],
}, ...compat.extends(
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "prettier",
), {
    plugins: {
        prettier,
        "react-hooks": fixupPluginRules(reactHooks),
    },

    languageOptions: {
        globals: {
            ...globals.browser,
        },

        parser: tsParser,
        ecmaVersion: 2020,
        sourceType: "module",

        parserOptions: {
            requireConfigFile: false,
            project: ["./tsconfig.json"],

            babelOptions: {
                presets: ["@typescript-eslint"],
            },
        },
    },

    settings: {
        "import/resolver": {
            react: {
                version: "detect",
            }
        }
    },

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
        "react-hooks/rules-of-hooks": "off",
        "react-hooks/exhaustive-deps": "warn",
        "react/react-in-jsx-scope": "off",
        "react/display-name": "warn",

        "react/no-unstable-nested-components": "off",
        "react/jsx-no-constructed-context-values": "off",
        "import/no-extraneous-dependencies": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
    },
}];

