const { compilation } = require("webpack")

module.exports = class AsyncPlugin {
  apply(compiler) {
    compiler.hooks.emit.tapAsync('AsyncPlugin', (compilation, cb) => {
      setTimeout(() => {
        console.log(compilation)
        console.log('等一等')
        cb()
      }, 1000)

    })
  }
}