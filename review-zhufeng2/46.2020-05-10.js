function require(path) {
  var path = require.resolve(path)
  var mod = require.modules[path]
  if (!mod) {
    throw new Error("error: no mod")
  }
  if (!mod.exports) {
    mod.exports = {}
    mod.call(mod.exports, mod, mod.exports, require.relative(path))
  }

  return mod.exports
}
require.modules = {}
require.register = function (path, fn) {
  require.modules[path] = fn
}

require.relative = function (parent) {
  return function (p) {

  }
}

require.resolve = function (p) {
  return require.modules[p] && p
}

require.register('hello', function (fn, mod) {
  fn.exports = { hello: 123 }
})
var a = require('hello')
console.log(a)