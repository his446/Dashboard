import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import pluginImport from "eslint-plugin-import";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
    plugins: {
      import: pluginImport,
    },
    settings: {
      "import/resolver": {
        typescript: {
          // Make sure this matches your tsconfig path
          project: "./tsconfig.json",
        },
      },
    },
  },
];

export default eslintConfig;
