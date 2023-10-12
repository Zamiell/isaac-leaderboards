// This is the configuration file for ESLint, the TypeScript linter:
// https://eslint.org/docs/latest/use/configure/

/** @type {import("eslint").Linter.Config} */
const config = {
  extends: [
    // The linter base is the shared IsaacScript config:
    // https://github.com/IsaacScript/isaacscript/blob/main/packages/eslint-config-isaacscript/configs/base.js
    "eslint-config-isaacscript/base",
  ],

  // Don't bother linting the compiled output.
  // @template-ignore-next-line
  ignorePatterns: ["**/dist/**", "**/.svelte-kit/**"],

  parserOptions: {
    // ESLint needs to know about the project's TypeScript settings in order for TypeScript-specific
    // things to lint correctly. We do not point this at "./tsconfig.json" because certain files
    // (such at this file) should be linted but not included in the actual project output.
    project: "./tsconfig.eslint.json",
  },

  rules: {
    // Insert changed or disabled rules here, if necessary.
    // @template-customization-start

    /**
     * This conflicts with the conventional SvelteKit format of:
     *
     * ```ts
     * throw error(401, "This is my error.");
     * ```
     */
    "@typescript-eslint/no-throw-literal": "off",

    // TODO: try disabling
    "import/extensions": "off",
    "import/order": "off",
    "no-param-reassign": "off",

    // @template-customization-end
  },
};

module.exports = config;
