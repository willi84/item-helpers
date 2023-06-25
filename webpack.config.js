const glob = require('glob');
const path = require('path');
const fs = require('fs');

/*[...]*/

module.exports = {
  mode: 'production',
  output: {
    // path: path.join(__dirname, '/src/_js'),
    path: path.join(__dirname, '/build/assets/js'),
    filename: '[name].js',
    clean: true
  },
  entry: {
    main: `${__dirname}/src/app/frontend/index.ts`,
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
    ]
  }
};