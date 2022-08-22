const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const fs = require('fs');

const srcPath = (subdir) => path.join(__dirname, 'src', subdir);
const getFilesAndDirectories = (source) =>
  fs.readdirSync(source, { withFileTypes: true }).map((dirent) => dirent.name);
let absoluteImports = {};
getFilesAndDirectories('src').forEach((fileName) => {
  const fileNameWithoutExtension = path.parse(fileName).name;
  absoluteImports[`@/${fileNameWithoutExtension}`] = srcPath(fileName);
});

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    static: './dist',
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      actions: srcPath('app/actions'),
      selectors: srcPath('app/selectors'),
      ui: srcPath('app/ui'),
      logger: srcPath('util/logger'),
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
