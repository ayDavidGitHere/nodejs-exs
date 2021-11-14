var path = require('path');
module.exports = {
  entry: {
      main: './src/index.js',
      comp: './src/public/res/js/controllers/get_song.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.ts', '.wasm', '.ejs'],
    fallback: {'crypto': false},
  },
  mode: 'development',
  experiments: {
    topLevelAwait: true
  },
};
