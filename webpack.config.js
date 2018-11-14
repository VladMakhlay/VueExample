const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
    },
    extensions: ['.js', '.css', '.png', '.jpg', '.gif', '.jpeg', '.vue'],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
       },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
           'file-loader'
         ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  devtool: 'inline-source-map',
  devServer: {
      contentBase: './dist'
  },
};