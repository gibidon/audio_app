const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets'),
          to: path.resolve(__dirname, 'dist'),
        },
      ],
    }),
    new MiniCssExtractPlugin(),
  ],
  // alias: { "@": path.resolve(__dirname, "src") },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: { plugins: [require('postcss-preset-env')] },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|png|svg|jpg|jpeg|gif|mp3)$/i,
        type: 'asset/resource',
      },
      // {
      // 	test: /\.(png|svg|jpg|jpeg|gif)$/i,
      // 	type: "asset/resource",
      // },
      // {
      //   test: /\.[tj]sx?$/,
      //   use: 'ts-loader',
      //   exclude: /node_modules/,
      // },

      // { test: /\.(ogg|mp3|wav|mpe?g)$/i, loader: 'file-loader' },
    ],
  },
}
