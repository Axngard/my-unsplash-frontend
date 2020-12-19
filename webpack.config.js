const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
   entry: path.resolve(__dirname, 'src', 'index.tsx'),
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'src/bundle.[hash].js',
      publicPath: '/',
      chunkFilename: 'src/[name].[hash].js'
   },
   module: {
      rules: [
         {
            use: 'babel-loader',
            exclude: /node_modules/,
            test: /\.tsx?$/
         },
         {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
         },
         {
            test: /\.(png|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
            loader: 'file-loader',
            options: {
               name: 'assets/[name].[ext]'
            }
         }
      ]
   },
   devServer: {
      historyApiFallback: true,
      host: 'localhost',
      disableHostCheck: true
   },
   resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      alias: {
         '@components': path.resolve(__dirname, 'src', 'components'),
         '@src': path.resolve(__dirname, 'src')
      }
   },
   optimization: {
      splitChunks: {
         cacheGroups: {
            vendor: {
               name: 'vendors',
               test: /[\\/]node_modules[\\/]/,
               chunks: 'all'
            },
            common: {
               test: /[\\/]src[\\/]components[\\/]/,
               minSize: 0,
               chunks: 'all'
            }
         }
      }
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: path.resolve(__dirname, 'public', 'index.html'),
         filename: 'index.html'
      }),
      new MiniCssExtractPlugin({
         filename: 'styles/[name].[chunkhash].css',
         chunkFilename: 'styles/[name].css'
      }),
      new WorkboxWebpackPlugin.GenerateSW({
         navigateFallback: '/index.html',
         runtimeCaching: [
            {
               urlPattern: new RegExp(
                  'https://myunsplash-images-cuttingedgecoders'
               ),
               handler: 'CacheFirst',
               options: {
                  cacheName: 'images'
               }
            }
         ]
      }),
      new Dotenv({ path: './.env' })
   ]
}
