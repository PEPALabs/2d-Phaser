const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: {
    main: './src/index.tsx'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        phaser: {
          test: /[\\/]node_modules[\\/]phaser[\\/]/,
          name: 'phaser',
          chunks: 'all'
        }
      }
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-[contenthash].bundle.js',
    assetModuleFilename: 'asset-packs/[name]-[hash][ext][query]',
    publicPath: 'auto'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
        include: path.join(__dirname, 'static/css')
      },
      // {
      //     test: /\.jsx?$/,
      //     exclude: /node_modules/,
      //     use: "babel-loader",
      //     include: path.join(__dirname, 'src'),
      // },
      {
        test: /\.(tsx|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
        include: path.join(__dirname, 'src')
      },

      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.json/,
        type: 'asset/resource',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.json', '.css', '.unityweb', '.loader', '.wasm', 'data']
  },
  devServer: {
    historyApiFallback: true,
    allowedHosts: 'all',
    static: {
      directory: path.resolve(__dirname, './dist')
    },
    open: true,
    hot: true,
    port: 8080
  },
  plugins: [
    new Dotenv({ path: `.env.${process.env.NODE_ENV}` }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html'),
      minify: false
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: 'static',
          globOptions: {
            // asset pack files are imported in code as modules
            ignore: ['**/publicroot', '**/*-pack.json']
          }
        }
      ]
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
