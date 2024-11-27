const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Example: extending the font family with the default sans-serif font
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      // Other customizations...
    },
  },
  plugins: [],
};
