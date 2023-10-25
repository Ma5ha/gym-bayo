const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{apps,src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html,js,jsx}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors:{
        'gb-black':'#000000',
        'gb-black-lighter':'#0a0a0a',
        'gb-pure-white':'#ffffff',
        'gb-orange':'#f36201',
        'gb-grey':'#333333',
        'gb-grey-dark':'#151515',
        'gb-grey-light':'#232323'
      }
    },
  },
  plugins: [],
};
