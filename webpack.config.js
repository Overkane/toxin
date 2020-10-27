const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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
      Components: path.resolve(__dirname, 'src/components/'),
      Utilities: path.resolve(__dirname, 'src/_utilities/'),
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
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        exclude: [/fonts/],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img',
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
              name: '[name].[ext]',
              publicPath: 'fonts',
              outputPath: 'fonts',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    // Use HTMLWebpackPLugin with template set to our pug template.
    new HTMLWebpackPlugin({
      filename: 'ui-kit/colors-type.html',
      template: './src/pages/ui-kit/colors-type.pug',
    }),
    new HTMLWebpackPlugin({
      filename: 'ui-kit/form-elements.html',
      template: './src/pages/ui-kit/form-elements.pug',
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
};
