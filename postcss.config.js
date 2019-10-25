/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line no-unused-vars
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/assets/css/tailwind.css',
  ],
  whitelist: ['no-underline'],
  whitelistPatternsChildren: [],
  whitelistPatterns: [
    /^bg-/,
    /^text-/,
    /-(leave|enter|appear)(|-(to|from|active))$/,
    /^(?!cursor-move).+-move$/,
    /^router-link(|-exact)-active$/,
  ],
  defaultExtractor: (content) => {
    const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '');
    return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || [];
  },
});

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    // ...process.env.NODE_ENV === 'production'
    //   ? [purgecss]
    //   : [],
  ],
};
