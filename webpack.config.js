const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
   entry: path.resolve(__dirname, 'src', 'index.tsx'),
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/'
   },
   module: {
      rules: [
         {
            use: 'babel-loader',
            exclude: /node_modules/,
            test: /\.tsx?$/
         }
      ]
   },
   devServer: {
      historyApiFallback: true,
      host: 'localhost',
      disableHostCheck: true
   },
   resolve: {
      extensions: ['.ts', '.tsx', '.js']
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: path.resolve(__dirname, 'public', 'index.html'),
         filename: 'index.html'
      })
   ]
}
