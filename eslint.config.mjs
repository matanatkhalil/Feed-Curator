import js from "@eslint/js";
import prettier from "eslint-config-prettier";

export default [
  js.configs.recommended,
  prettier,
  {
    languageOptions: {
      globals: {
        browser: true,
        node: true,
        es2021: true,
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "no-console": "warn",
      "no-unused-vars": "warn",
      "semi": ["error", "always"],
      "eqeqeq": "error",
    },
  },
];