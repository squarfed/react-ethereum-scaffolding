var path = require('path')

module.exports = {
  entry: './src/App.jsx',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.sol']
  },
  devServer: {
    contentBase: path.join(__dirname, '/public/'),
    inline: true,
    host: '0.0.0.0',
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader' // translates CSS into CommonJS
        }, {
          loader: 'sass-loader' // compiles Sass to CSS
        }]
      },
      {
        test: /\.sol$/,
        use: [
            {loader: 'web3-loader'},
            {loader: 'solc-loader'}
        ]
      }
    ]
  }
}
