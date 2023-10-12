#!/bin/bash

set -e # Exit on any errors

# Get the directory of this script:
# https://stackoverflow.com/questions/59895/getting-the-source-directory-of-a-bash-script-from-within
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

SECONDS=0

cd "$DIR"

# Step 1 - Type check the TypeScript.
yarn run check

# Step 2 - Use Prettier to check formatting.
npx prettier --check .

# Step 3 - Use ESLint to lint the TypeScript.
# We use "--max-warnings" so that any warnings will fail in CI.
npx eslint --max-warnings 0 .

# Step 4 - Check for unused imports.
# The "--error" flag makes it return an error code of 1 if unused exports are found.
# We ignore the same patterns as specified in the ".eslintrc.cjs" file.
# (Disabled during initial development.)
#npx ts-prune --error --ignore ".svelte-kit|migrations"

# Step 5 - Spell check every file using CSpell.
# We use "--no-progress" and "--no-summary" because we want to only output errors.
npx cspell --no-progress --no-summary .

# Step 6 - Check for orphaned words.
bash "$DIR/check-orphaned-words.sh"

# Step 7 - Check for base file updates.
bash "$DIR/check-file-updates.sh"

echo "Successfully linted in $SECONDS seconds."
