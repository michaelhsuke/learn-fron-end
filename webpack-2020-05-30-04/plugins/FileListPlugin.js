module.exports = class FileListPlugin {
  apply(compiler) {
    console.log('aaaa========', this)
    compiler.hooks.emit.tap('FileListPlugin', (compilation, options) => {
      let assets = compilation.assets
      
      // let content = '## 文件名       资源大小'
      // Object.entries(assets).forEach([filename, statObj] => {
      //   content += `-${filename}      ${statObj.size()}`
      // })
      // console.log(content)
      // assets[this.filename] = {
      //   source() {
      //     return content
      //   },
      //   size() {
      //     return content.length
      //   }
      // }
    })
  }
}