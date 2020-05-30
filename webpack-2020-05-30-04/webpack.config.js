const DonePlugin = require('./plugins/DonePlugin')
const AsyncPlugin = require('./plugins/AsyncPlugin')
const FileListPlugin = require('./plugins/FileListPlugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    // new DonePlugin(),
    // new AsyncPlugin(),
    new FileListPlugin({
      filename: 'filelist.md'
    })
  ]
} 