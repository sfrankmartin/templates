import js from "@eslint/js";
import tseslint from "typescript-eslint";
import { FlatCompat } from "@eslint/eslintrc";
import unusedImports from "eslint-plugin-unused-imports";

const compat = new FlatCompat();

export default [
  /* ─────────────────── Ignore build artefacts first ─────────────────── */
  {
    ignores: [".next/**/*", "dist/**/*", "coverage/**/*", "node_modules/**/*"],
  },

  /* ───────────────── Converters for legacy shareables ────────────────── */
  ...compat.extends("next/core-web-vitals", "prettier"),

  /* ──────────────── ESLint-core JavaScript recommendations ───────────── */
  js.configs.recommended,

  /* ─────────────────── TypeScript + JSX recommendations ──────────────── */
  ...tseslint.config({
    files: ["**/*.{ts,tsx}"],
    // parserOptions: { project: './tsconfig.json' },  // enable if you want type-aware linting
  }),

  /* ───────── Allow Jest globals in any *.test.* file (JS or TS) ──────── */
  {
    files: ["**/*.test.{js,jsx,ts,tsx}"],
    languageOptions: {
      globals: {
        describe: "readonly",
        it: "readonly",
        test: "readonly",
        expect: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        jest: "readonly",
      },
    },
    rules: {
      // you can also install eslint-plugin-jest instead of hard-coding globals
      // 'jest/valid-expect': 'error',
    },
  },

  /* ─────────────────────── Your own custom rules ─────────────────────── */
  {
    plugins: { "unused-imports": unusedImports },
    rules: {
      "unused-imports/no-unused-imports": "warn",
    },
  },

  {
    /* Turn off JS-only rules that clash with TypeScript’s type system */
    files: ["**/*.{ts,tsx}"],
    rules: {
      "no-undef": "off", // <── kills the “React is not defined” error
    },
  },
];
