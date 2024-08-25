// @ts-check
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import { fixupConfigRules } from "@eslint/compat";
import baseConfig from "@posture/eslint-config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const patchedNextConfig = fixupConfigRules([...compat.extends("next/core-web-vitals")]);

const config = [
  ...baseConfig,
  ...patchedNextConfig,
  { ignores: [".next/*"] },
];

export default config;
