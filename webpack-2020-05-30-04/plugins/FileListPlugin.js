module.exports = class FileListPlugin {
  constructor(options) {
    this.options = options
  }
  apply(compiler) {
    compiler.hooks.emit.tap('FileListPlugin', (compilation, options) => {
      let assets = compilation.assets

      let content = '## 文件名       资源大小\n'
      Object.entries(assets).forEach(([filename, statObj]) => {
        content += `- ${filename}      ${statObj.size()}\n`
      })

      assets[this.options.filename] = {
        source() {
          return content
        },
        size() {
          return content.length
        }
      }
    })
  }
}