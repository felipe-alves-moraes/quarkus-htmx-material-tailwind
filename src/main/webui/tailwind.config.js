/** @type {import('tailwindcss').Config} */

import withMT from "@material-tailwind/html/utils/withMT";

module.exports = withMT({
  content: [
    "../resources/templates/**/*.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});

