// module.exports = {
//   plugins: {
//     'tailwindcss': {},
//     'postcss-preset-env': {}
//     ['autoprefixer', process.env.NODE_ENV === 'production'],
//     ['cssnano', process.env.NODE_ENV === 'production'],
//   }
// }

// const purgecss = [
//   "@fullhuman/postcss-purgecss",
//   {
//     content: ["./src/pages/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
//     defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
//   }
// ];

// module.exports = {
//   plugins: [
//     "postcss-flexbugs-fixes",
//     // "postcss-import",
//     "tailwindcss",
//     "cssnano",
//     "autoprefixer",
//     // ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
//   ]
// };

module.exports = {
  plugins: {
    tailwindcss: {},
  },
};
