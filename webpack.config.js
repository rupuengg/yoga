// Require Path
var path = require('path');

var DIST_PATH = path.resolve(__dirname, 'dist');
var SRC_PATH = path.resolve(__dirname, 'src');

var config = {
  entry: SRC_PATH + '/app/index.js',
  output: {
    path: DIST_PATH + '/app',
    filename: 'bundle.js',
    publicPath: '/app/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: SRC_PATH,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-2']
        }
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  }
};

module.exports = config;
