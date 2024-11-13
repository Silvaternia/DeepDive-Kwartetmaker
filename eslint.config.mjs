import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    {
        rules: {
            "max-len": ["error", { code: 120 }],
            indent: ["error", 4, { SwitchCase: 1 }],
            "no-plusplus": "warn",
            quotes: ["error", "double"],

        }
    }
];
