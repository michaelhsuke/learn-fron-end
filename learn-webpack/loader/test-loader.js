const babel = require('@babel/core')
const loaderUtils = require('loader-utils')

function loader(source) {
  console.log('test-loader====')
  // console.log(Object.getPrototypeOf(this))
  console.log(Object.keys(this))

  return source
}

module.exports = loader