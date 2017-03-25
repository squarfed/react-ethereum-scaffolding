module.exports = {
  entry: './src/app.jsx',
  output: {
    path: __dirname,
    filename: './dist/bundle.js'
  },
  resolve: {
    root: __dirname,
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.scss?$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};
