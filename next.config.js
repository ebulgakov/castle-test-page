// next.config.js
const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');

const nextConfig = {
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[name]-[local]___[hash:base64:5]',
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg/,
      use: ['@svgr/webpack'],
    });

    config.module.rules.push({
      test: /\.(jpe?g|png|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            context: '',
            emitFile: true,
            name: '[path][name].[ext]',
            publicPath: '/',
          },
        },
      ],
    });

    return config;
  },
};

module.exports = withTypescript(withSass(nextConfig));