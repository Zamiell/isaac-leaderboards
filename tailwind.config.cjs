/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable n/no-unpublished-require */

const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    screens: {
      sm: "890px",
    },
  },

  // Extra config
  mode: "jit", // Experimental setting

  plugins: [require("@tailwindcss/typography")],
};

module.exports = config;
