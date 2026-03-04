const path = require('path');
const webpack = require('webpack');
const ProgressPlugin = require('webpack/lib/ProgressPlugin');
const betterWebpackProgress = require('better-webpack-progress');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');


// @drawbotics/check-env was removed (check-env@1.0.0 unpublished from registry).
// It only asserted that NODE_ENV is set, which the build scripts already guarantee.
if (!process.env.NODE_ENV) {
  throw new Error('NODE_ENV is required');
}


const DEV_MODE = process.env.NODE_ENV === 'development';


module.exports = {
  mode: process.env.NODE_ENV,
  devtool: DEV_MODE ? 'cheap-module-source-map' : 'source-map',
  // stats: 'none',
  resolve: {
    extensions: [ '.js', '.jsx', '.less' ],
  },
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'file-icons.js',
    sourceMapFilename: 'file-icons.js.map',
    library: 'file-icons',
    libraryTarget: 'umd',
  },
  externals: [
    'react',
    'react-dom',
  ],
  plugins: [
    // new webpack.NamedModulesPlugin(),
    new webpack.EnvironmentPlugin({
      NODE_ENV: process.env.NODE_ENV,
    }),
    new ProgressPlugin(betterWebpackProgress({
      mode: 'compact',
    })),
    DEV_MODE ? {} :new MiniCSSExtractPlugin({
      filename: 'style.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: [ path.resolve(__dirname, 'src') ],
        use: [ 'babel-loader' ],
      },
      {
        test: /\.less?/,
        include: [ path.resolve(__dirname, 'src') ],
        use: [
          DEV_MODE ? 'style-loader' : MiniCSSExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('autoprefixer')(),
              ],
            },
          },
          'less-loader',
        ],
      },
    ],
  },
};
