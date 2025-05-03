import eslintPluginAstro from "eslint-plugin-astro";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

/** @type {import("eslint").Linter.Config} */
export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    files: [
      "**/*.astro/*.js",
      "*.astro/*.js",
      "**/*.astro/*.ts",
      "*.astro/*.ts",
    ],
    rules: {
      "prettier/prettier": "off",
    },
  },
];
