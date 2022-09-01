const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    screens: {
      sm: "890px",
    },
  },

  // Extra config
  mode: "jit", // Experimental setting
  darkMode: "class", // Allows the button to toggle
  // TODO: For dark mode, we have to add all classes, which is painful.
};

module.exports = config;
