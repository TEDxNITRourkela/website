const path = require('path');
// const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const dotenv = require('dotenv');

module.exports = (env) => {
  // eslint-disable-next-line
  console.log('WEBPACK ENV: ', env);

  // Variables
  const isProduction = env === 'production';
  const isDev = env === 'development';

  // call dotenv and it will return an Object with a parsed key
  // const envVars = dotenv.config().parsed || {};
  // envVars.NODE_ENV = env || '';

  // reduce it to a nice object, the same as before
  // const envKeys = Object.keys(envVars).reduce((prev, next) => {
  //   // eslint-disable-next-line
  //   prev[`process.env.${next}`] = JSON.stringify(envVars[next]);
  //   return prev;
  // }, {});

  /* ========= Plugins ========= */
  // Maps environment variables from .env file to the project
  // const DefinePlugin = new webpack.DefinePlugin(envKeys);

  // Cleans 'dist' folder everytime before a new build
  const CleanPlugin = new CleanWebpackPlugin({
    root: __dirname,
    verbose: true,
    dry: false,
  });

  const AnalyzerPlugin = new BundleAnalyzerPlugin({
    analyzerMode: 'disabled',
  });

  const HTMLPlugin = new HtmlWebpackPlugin({
    template: 'template.html',
    chunksSortMode: 'none',
    favicon: './src/assets/static/favicon.ico',
  });

  const CopyPlugin = new CopyWebpackPlugin({
    patterns: [{ from: './src/assets/static', to: '.' }],
  });

  // Building Webpack
  const config = {};

  config.entry = ['babel-polyfill', './src/index.js'];

  config.output = {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  };

  config.optimization = {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\]node_modules[\\]/,
          name: 'vendor',
          chunks: 'initial',
        },
      },
    },
    runtimeChunk: {
      name: 'manifest',
    },
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: false,
        uglifyOptions: {
          ecma: 8,
          mangle: false,
          keep_classnames: true,
          keep_fnames: true,
        },
      }),
    ],
  };

  config.plugins = [
    CleanPlugin,
    AnalyzerPlugin,
    HTMLPlugin,
    CopyPlugin,
    // DefinePlugin,
  ];

  config.module = {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|cot)$/,
        loader: 'file-loader',
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  };

  config.resolve = {
    extensions: ['.js'],
  };

  if (isProduction) {
    config.output = {
      // path: path.join(__dirname, 'dist'),
      // publicPath: path.join(__dirname, 'dist', '/'),
      // chunkFilename: '[name].[chunkhash].bundle.js',
      // filename: '[name].[chunkhash].bundle.js',
      path: path.join(__dirname, 'dist'),
      chunkFilename: '[name].bundle.js',
      filename: '[name].bundle.js',
    };

    config.mode = 'production';
    config.devtool = 'source-map';
  }

  if (isDev) {
    config.output = {
      path: path.join(__dirname, 'dist'),
      chunkFilename: '[name].bundle.js',
      filename: '[name].bundle.js',
    };

    config.mode = 'development';
    config.devtool = 'inline-source-map';
    config.devServer = {
      contentBase: path.join(__dirname, 'dist'),
      historyApiFallback: true,
      open: true,
    };
  }

  return config;
};
