const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: './src/index.js',

  output: {
    path: path.resolve('dist'),
    filename: 'main.bundle.js',
  },

  devtool: 'source-map',

  devServer: {
    compress: true,
    contentBase: path.join(__dirname, 'dist'),
    writeToDisk: true,
    watchContentBase: true,
    port: 3000,
    open: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    watchOptions: {
      ignored: '/node_modules/',
      aggregateTimeout: 300,
      poll: 1000,
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'node_modules')
        ]
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader'
          },
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Qual é o Número?',
      inject: 'body',
      hash: true,
      filename: 'index.html'
    })
  ]
}