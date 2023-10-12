/* eslint-disable import/no-extraneous-dependencies */

import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";

/**
 * @type {import('@sveltejs/kit').Config}
 */
const config = {
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],

  kit: {
    adapter: adapter(),
  },
};

// eslint-disable-next-line import/no-default-export
export default config;
