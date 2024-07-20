import react from "eslint-plugin-react";
import tsEslint from 'typescript-eslint';
import prettier from "eslint-plugin-prettier/recommended";
import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import jsxA11y from 'eslint-plugin-jsx-a11y';


export default tsEslint.config(
    js.configs.recommended,

    // ts eslint
    ...tsEslint.configs.recommended,
    {
        rules: {
            "@typescript-eslint/no-explicit-any": 0,
        },
    },

    prettier,

    // react
    react.configs.flat.recommended,
    react.configs.flat['jsx-runtime'],
    {
        settings: {
            react: {
                version: 'detect',
            }
        },
    },

    // import
    {
        plugins: {
            import: { rules: importPlugin.rules },
        },
        settings: {
            "import/resolver": {
                typescript: true,
            },
        },
        rules: {
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
        },
    },

    // jsx-a11y
    jsxA11y.flatConfigs.recommended,

    {
        files: ["**/*.{js, ts, tsx}"]
    },
    {
        ignores: ["src/types/db.ts", "eslint.config.js"],
    },
    {
        rules: {
            "no-console": ["error", {
                allow: ["info", "warn", "error"],
            }],
        },
    }
);
