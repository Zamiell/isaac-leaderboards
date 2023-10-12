/* eslint-disable n/file-extension-in-import */

import { sveltekit } from "@sveltejs/kit/vite";

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
};

// eslint-disable-next-line import/no-default-export
export default config;
