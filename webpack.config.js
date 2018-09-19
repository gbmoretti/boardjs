const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: './app.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/assets/',
  },

  module: {
    rules: [
      {
        test: /\.css$/, loader: "style-loader!css-loader"
      }
    ],
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
  }
};
