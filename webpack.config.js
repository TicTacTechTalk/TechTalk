const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const OUTPUT_DIR = 'dist';

module.exports = {
  entry: './index.js',
  output: {
    path: path.join(__dirname, OUTPUT_DIR),
    filemame: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
    plugins: [
      new CleanWebpackPlugin([OUTPUT_DIR]),
      new HtmlWebpackPlugin({
        template: './public/index.html'
      })
    ]
};