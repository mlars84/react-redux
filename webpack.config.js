const Dotenv = require('dotenv-webpack')
const DashboardPlugin = require('webpack-dashboard/plugin')
const Visualizer = require('webpack-visualizer-plugin')

module.exports = {
  entry: [
    './src/index.js'
  ],
  plugins: [
    new Dotenv({
      path: '/.env', // Path to .env file (this is the default) 
      safe: true // load .env.example (defaults to "false" which does not use dotenv-safe) 
    }),
    new DashboardPlugin({ port: 7000 }),
    new Visualizer()
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'env', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    inline: true,
    port: 7000
  }
};
