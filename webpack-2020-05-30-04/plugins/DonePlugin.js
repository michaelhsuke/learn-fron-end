class DonePlugin {
  apply(compiler) {
    compiler.hooks.done.tap('DonePlugin', (compilation) => {
      console.log(compilation)
      console.log('编译完成~~~')
    })
  }
}

module.exports = DonePlugin