const path = require('path');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: './src/index.js',

  output: {
    path: path.resolve('dist'),
    filename: 'main.bundle.js',
  },

  devtool: (process.env.NODE_ENV !== 'production') && 'inline-source-map',

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

  optimization: {
    minimize: process.env.NODE_ENV === 'production',
    minimizer: [
      new TerserPlugin(), 
      new CssMinimizerPlugin()
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      ignoreOrder: false
    }),

    new HtmlWebpackPlugin({
      title: 'Qual é o Número?',
      inject: 'body',
      hash: true,
      filename: 'index.html'
    })
  ],

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
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader?url=false'
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: process.env.NODE_ENV === 'production' ? [require('autoprefixer'), require('cssnano')] : [require('autoprefixer')]
              }
            },
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          },
        ],
      },
    ]
  }
}