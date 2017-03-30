'use strict';

const path = require('path');
const webpack = require('webpack');
const ExtJSReactorWebpackTSPlugin = require('reactor-webpack-ts-plugin').default;
const HtmlWebpackPlugin = require('html-webpack-plugin');

const babelOptions = {
  "presets": [
    "react",
    [
      "es2015",
      {
        "modules": false
      }
    ],
    "es2016"
  ]
};
const sourcePath = path.join(__dirname, './src');

module.exports = function (env) {
  const nodeEnv = env && env.prod ? 'production' : 'development';
  const isProd = nodeEnv === 'production';

  const plugins = [
    new ExtJSReactorWebpackTSPlugin({
      sdk: 'ext', // you need to copy the Ext JS SDK to the root of this package, or you can specify a full path to some other location
      toolkit: 'classic',
      theme: 'theme-triton',
      overrides: ['overrides'],
      packages: ['charts'],
      production: isProd
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: nodeEnv
    })
  ];

  if (isProd) {
    plugins.push(
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          screw_ie8: true
        }
      })
    );
  } else {
    plugins.push(
      new webpack.HotModuleReplacementPlugin()
    );
  }

  plugins.push(new HtmlWebpackPlugin({
    template: 'src/index.html',
    hash: true
  }));

  return {
    devtool: isProd ? 'source-map' : 'eval',
    context: sourcePath,

    entry: [
      './src/index'
    ],

    output: {
      path: path.join(__dirname, 'build'),
      filename: 'bundle.js',
    },

    module: {
      rules: [
        {
          enforce: 'pre',
          loader: "source-map-loader",
          test: /\.js?$/
        },
        {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: babelOptions
            },
            {
              loader: 'ts-loader'
            }
          ]
        },
        {
          test: /\.js(x?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: babelOptions
            }
          ]
        }
      ],
    },

    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      // The following is only needed when running this boilerplate within the extjs-reactor repo with lerna bootstrap.  You can remove this from your own projects.
      alias: {
        "react-dom": path.resolve('./node_modules/react-dom'),
        "react": path.resolve('./node_modules/react')
      }
    },

    plugins,

    stats: {
      colors: {
        green: '\u001b[32m',
      }
    },

    devServer: {
      contentBase: './build',
      historyApiFallback: true,
      port: 8081,
      compress: isProd,
      inline: !isProd,
      hot: !isProd,
      stats: {
        assets: true,
        children: false,
        chunks: false,
        hash: false,
        modules: false,
        publicPath: false,
        timings: true,
        version: false,
        warnings: true,
        colors: {
          green: '\u001b[32m'
        }
      },
    }
  };
};
