const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  entry: './src/store',
  cache: false,

  mode: 'development',
  devtool: 'source-map',

  optimization: {
    minimize: false
  },

  output: {
    publicPath: 'http://localhost:3004/'
  },

  resolve: {
    extensions: ['.jsx', '.js', '.json']
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: require.resolve('babel-loader'),
        options: {
          presets: [require.resolve('@babel/preset-react')]
        }
      },
      {
        test: /\.md$/,
        loader: 'raw-loader'
      }
    ]
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'store',
      library: { type: 'var', name: 'store' },
      filename: 'store.js',
      remotes: {
      },
      exposes: {
        "./store" : './src/store.js'
      },
      shared: []
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
  ]
};
