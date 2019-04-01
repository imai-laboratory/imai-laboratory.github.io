const webpack = require("webpack");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
  {
    entry: './src/main.js',
    output: {
      path: `${__dirname}/dist`,
      filename: 'bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.js[x]?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['es2015', 'react']
          }
        }, {
          test: /\.css$/,
          loaders: ['style-loader', 'css-loader?modules'],
        }, {
          test: /\.json$/,
          loader: 'json-loader'
        }, {
          test: /\.(jpg|png|svg)$/,
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          }
        }, {
          test: /\.mp4$/,
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          }
        }
      ]
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({sourceMap: true}),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.AggressiveMergingPlugin(),
    ],
    devtool: 'source-map',
    devServer: {
      contentBase: 'dist',
      port: 8080,
    }
  },
  {
    entry: {
      style: `${__dirname}/src/stylesheets/style.scss`,
    },
    output: {
      path: `${__dirname}/dist`,
      filename: '[name].css'
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
        },{
          test: /\.(jpg|png|svg)$/,
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          }
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('[name].css'),
    ],
  }
];
