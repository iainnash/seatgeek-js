var path = require('path');

module.exports = {
  entry: '../../SeatGeek.js',
  output: {
    path: './',
    filename: 'bundle.js',
    library: 'SeatGeek',
    libraryTarget: 'var'
  },
  module: {
    noParse: /validate\.js/,
    loaders: [
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js']
  },
  resolveLoader: {
    packageMains: ['json-loader']
  },
  node: {
    console: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};