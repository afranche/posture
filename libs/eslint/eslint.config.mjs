import functional from "eslint-plugin-functional";
import tseslint from "typescript-eslint";

export default tseslint.config({
  files: ["**/*.ts"],
  extends: [
    functional.configs.externalTypescriptRecommended,
    functional.configs.recommended,
    functional.configs.stylistic,
  ],
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      projectService: true,
    },
  },
  rules: {
    "sort-imports": "error"
  },
});
