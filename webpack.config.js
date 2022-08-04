const path = require('path');

module.exports = {
  mode: "development",
  entry: './src/index.js',
  output: {
    filename: 'my_build.js',
    path: path.resolve(__dirname, 'build'),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
};