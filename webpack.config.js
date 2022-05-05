const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  //set up entry - index.js
  entry: path.resolve(__dirname, './client/index.js'),
  //set up output - bundle.js
  output: {
    path: path.resolve(__dirname, './build'),
    // publicPath: '/',
    filename: 'bundle.js',
  },
  //set up mode
  mode: process.env.NODE_ENV,
  // mode: 'development',

  //DEV - add HtmlWebpackPlugin so that we can use htmlwebpackplugin based on our index.html
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './index.html'),
    }),
  ],

  //DEV - set up devServer so that we can use localhost8080
  devServer: {
    //use proxy so that the request for api/leaders can be made to localhost3000
    proxy: {
      '/api': 'http://localhost:3000',
    },
    // host: 'localhost',
    port: 8080,
    static: {
      directory: 'index.html',
      // directory: path.resolve(__dirname, 'build'),
      // publicPath: '/build',
      //   directory: 'index.html',
    },
  },

  //setup module (including transpiler)
  module: {
    rules: [
      //be able to read react jsx
      {
        // test: /\.?jsx || js$/,
        test: /\.jsx|\.js/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/env',
            '@babel/preset-react',
            // ['@babel/preset-react', { runtime: 'automatic' }],
          ],
        },
      },
      //be able to read scss
      //   {
      //     test: /\.s[ac]ss$/i,
      //     exclude: /(node_modules)/,
      //     use: ['style-loader', 'css-loader', 'sass-loader'],
      //       },
    ],
  },
  // externals: {
  //   react: 'React',
  // },
};
