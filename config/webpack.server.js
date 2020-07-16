const { resolve } = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: './src/server-entry.tsx',
  output: {
    path: resolve('lib'),
    filename: 'plugins/SSRPlugin.js',
    libraryTarget: 'commonjs',
  },
  target: 'node',
  externals: [nodeExternals()],
  node: {
    __filename: false,
    __dirname: false,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-typescript'],
          plugins: [
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
      {
        test: /\.(svg|gif|jpe?g|png|css)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/images/[name].[ext]',
          publicPath: (url) => url.replace('assets', ''),
          emitFile: false,
        },
      },
    ],
  },
}
