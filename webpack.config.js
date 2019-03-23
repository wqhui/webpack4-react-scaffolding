/*
 * @Author: qinghui_wu
 * @Date: 2018-11-04 17:56:24
 * @Last Modified by: qinghui_wu
 * @Last Modified time: 2019-03-23 18:20:04
 */
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')// 分离css和js
const CleanWebpackPlugin = require('clean-webpack-plugin')// 清理无效文件
const devMode = process.env.NODE_ENV !== 'production'

const path = require('path')
const ROOT_PATH = path.resolve(__dirname)

module.exports = {
  devtool: '#source-map',
  entry: './src/index.js', // 入口文件
  output: {// 输出
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  devServer: {// 本地开发服务
    contentBase: require('path').join(__dirname, 'dist'), // 设置服务器访问的基本目录
    compress: true,
    port: 8088, // 端口
    host: 'localhost',
    inline: true // 实时刷新
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // js jsx loader
        exclude: path.resolve(__dirname, 'node_modules'), // 忽略查找
        include: path.resolve(__dirname, 'src'), // 查找
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      }, {
        test: /\.(css|less)$/, // 样式loader
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true, // 指定启用css modules
              localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
            }
          },
          'postcss-loader', // 自动添加前缀
          'less-loader'
        ]
      }, {
        test: /\.(png|jpg|gif|woff|svg|eot|woff2|tff)$/,
        use: 'url-loader?limit=8129', // limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: ROOT_PATH + '/src/index.tmpl.html', // index html 模板
      filename: 'index.html', // 生成文件名
      minify: {
        collapseWhitespace: true // 把生成的 index.html 文件的内容的没用空格去掉，减少空间
      },
      hash: true // 为了更好的 cache，可以在文件名后加个 hash。
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css' // 指定css的类名格式
    }),
    new CleanWebpackPlugin(['dist']) // 实例化，参数为目录
  ]
}
