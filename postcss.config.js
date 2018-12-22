const autoprefixer = require('autoprefixer');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
    autoprefixer({
      browsers: ['> 1%', 'last 4 versions'],
    }),
    postcssPresetEnv({ stage: 0 })
  ],
};
