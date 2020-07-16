const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/client-entry.tsx',
  output: {
    path: resolve('lib/assets'),
    filename: 'scripts/[name].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-typescript',
            '@babel/preset-react',
          ],
          plugins: [
            [
              '@babel/plugin-transform-runtime',
              {
                regenerator: true,
              },
            ],
            [
              '@babel/plugin-proposal-decorators',
              {
                legacy: true,
              },
            ],
            '@babel/plugin-proposal-class-properties',
          ],
        },
        exclude: /(node_modules)/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      minify: {
        removeComments: false,
      },
    }),
  ],
}
