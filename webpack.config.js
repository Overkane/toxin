const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      Includes: path.resolve(__dirname, 'src/_includes/'),
      Layouts: path.resolve(__dirname, 'src/_layouts/'),
      Pages: path.resolve(__dirname, 'src/pages/'),
      Components: path.resolve(__dirname, 'src/components/'),
      Utilities: path.resolve(__dirname, 'src/_utilities/'),
      Fonts: path.resolve(__dirname, 'src/fonts/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: 'pug-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'resolve-url-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        exclude: [/fonts/],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        include: [/fonts/],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.$': 'jquery',
    }),
    new HTMLWebpackPlugin({
      filename: 'ui-kit/colors-type.html',
      template: './src/pages/ui-kit/colors-type/colors-type.pug',
    }),
    new HTMLWebpackPlugin({
      filename: 'ui-kit/form-elements.html',
      template: './src/pages/ui-kit/form-elements/form-elements.pug',
    }),
    new HTMLWebpackPlugin({
      filename: 'ui-kit/cards.html',
      template: './src/pages/ui-kit/cards/cards.pug',
    }),
    new HTMLWebpackPlugin({
      filename: 'ui-kit/headers-footers.html',
      template: './src/pages/ui-kit/headers-footers/headers-footers.pug',
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'src/**/*.jpg',
          to: 'img',
          flatten: true,
        },
        {
          from: 'src/**/*.png',
          to: 'img',
          flatten: true,
        },
        {
          from: 'src/**/*.svg',
          to: 'img',
          flatten: true,
        },
      ],
    }),
  ],
};
