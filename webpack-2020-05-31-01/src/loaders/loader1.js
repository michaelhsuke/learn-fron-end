const babel = require('@babel/core')
const loaderUtils = require('loader-utils')

function Loader(source) {
  // console.log('loader1===', source)
  const options = loaderUtils.getOptions(this)
  const cb = this.async()
  babel.transform(source, {
    ...options,
    sourceMap: true,
    filename: this.resourcePath.split('/').pop()
  }, (err, result) => {
    cb(err, result.code, result.map)
  })
  return source
}

module.exports = Loader