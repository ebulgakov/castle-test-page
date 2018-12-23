import { postCSSPlugin } from 'docz-plugin-postcss';
import { css } from 'docz-plugin-css';

export default {
  port: 4000,
  typescript: true,
  plugins: [postCSSPlugin(), css({
    preprocessor: 'sass',
    cssmodules: true
  })]
};
