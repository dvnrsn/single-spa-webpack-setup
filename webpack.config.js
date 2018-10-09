const path = require('path');

module.exports = {
  entry: './root-application.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: '/dist/',
  },
  module: {
    rules: [{
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-syntax-dynamic-import']
        }
      }
    }]
  },
  mode: 'development',
  devtool: 'source-map',
  // devServer: {
  //   publicPath: '/dist/',
  // }
};