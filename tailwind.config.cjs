const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
  },

  plugins: [],

  // Extra config
  mode: "jit", // Experimental setting
  darkMode: "class", // Allows the button to toggle
  // TODO: For dark mode, we have to add all classes, which is a pain in the ass.
};

module.exports = config;
