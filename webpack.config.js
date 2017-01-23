var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  resolveLoader: {
    moduleDirectories: ['node_modules'],
    moduleTemplates: ['*-loader', '*'],
    extensions: ['', '.js']
  },
  module: {
    loaders: [{
      loader: 'babel',
      test: /\.js$/,
      exclude: [
        path.resolve(__dirname, 'node_modules')
      ]
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }]
  }
}
