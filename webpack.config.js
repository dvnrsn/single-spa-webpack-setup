const path = require('path');

module.exports = {
  entry: './root-application.js',
  output: {
    filename: 'main.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: '/dist/',
  },
  mode: 'development',
  devtool: 'source-map',
  // devServer: {
  //   publicPath: '/dist/',
  // }
};