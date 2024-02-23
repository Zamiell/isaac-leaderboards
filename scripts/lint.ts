import { $, lintScript } from "isaacscript-common-node";

await lintScript(async () => {
  const promises = [
    // Use Prettier to check formatting.
    // - "--log-level=warn" makes it only output errors.
    $`prettier --log-level=warn --check .`,

    // Type-check the code using the TypeScript compiler.
    // @template-ignore-next-line
    $`npm run check`, // Invokes `svelte-check`.

    // Use ESLint to lint the TypeScript.
    // - "--max-warnings 0" makes warnings fail, since we set all ESLint errors to warnings.
    $`eslint --max-warnings 0 .`,

    // Check for unused files, dependencies, and exports.
    // @template-ignore-next-line
    /// $`knip --no-progress`,

    // Spell check every file using CSpell.
    // - "--no-progress" and "--no-summary" make it only output errors.
    $`cspell --no-progress --no-summary .`,

    // Check for unused CSpell words.
    $`cspell-check-unused-words`,

    // @template-customization-start

    // Check for base file updates.
    $`isaacscript check-ts --ignore build.ts,tsconfig.json`,

    // @template-customization-end
  ];

  await Promise.all(promises);
});
