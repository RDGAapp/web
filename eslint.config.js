import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import react from "eslint-plugin-react";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import prettier from "eslint-plugin-prettier";
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
    ignores: ["src/types/db.ts", "eslint.config.js"],
}, ...fixupConfigRules(compat.extends(
    "plugin:react/recommended",
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier",
)), {
    plugins: {
        react: fixupPluginRules(react),
        "@typescript-eslint": fixupPluginRules(typescriptEslint),
        prettier,
    },

    languageOptions: {
        parser: tsParser,
        ecmaVersion: "latest",
        sourceType: "module",

        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },

            project: "./tsconfig.json",
        },
    },

    settings: {
        "import/resolver": {
            typescript: {},
        },
    },

    rules: {
        "no-shadow": 0,
        "react/jsx-uses-react": 0,
        "react/react-in-jsx-scope": 0,

        "react/jsx-filename-extension": [2, {
            extensions: [".jsx", ".tsx"],
        }],

        "import/extensions": ["error", "ignorePackages", {
            ts: "never",
            tsx: "never",
        }],

        "react/function-component-definition": [2, {
            namedComponents: ["function-expression", "arrow-function"],
        }],

        "no-param-reassign": ["error", {
            props: true,
            ignorePropertyModificationsFor: ["state", "event"],
        }],

        "import/order": ["error", {
            groups: ["builtin", "external", "internal"],

            pathGroups: [{
                pattern: "react",
                group: "external",
                position: "before",
            }],

            pathGroupsExcludedImportTypes: ["react"],
            "newlines-between": "always",

            alphabetize: {
                order: "asc",
                caseInsensitive: true,
            },
        }],

        "react/require-default-props": 0,

        "jsx-a11y/label-has-associated-control": [2, {
            required: {
                some: ["nesting", "id"],
            },
        }],

        "@typescript-eslint/no-explicit-any": 0,
        "react/jsx-props-no-spreading": 0,
        "jsx-a11y/control-has-associated-label": 0,
        "consistent-return": 0,
        "jsx-a11y/click-events-have-key-events": 0,
        "jsx-a11y/no-static-element-interactions": 0,
        "jsx-a11y/mouse-events-have-key-events": 0,
        "@typescript-eslint/no-empty-function": 0,

        "no-console": ["error", {
            allow: ["info", "warn", "error"],
        }],

        "import/no-extraneous-dependencies": ["error", {
            devDependencies: true,
        }],

        "import/no-unresolved": ["error", {
            ignore: ["^virtual:"],
        }],
    },
}];
