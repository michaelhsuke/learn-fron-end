let fs = require("fs")
let path = require('path')
let filepath = path.resolve(__dirname + '/1.txt')
console.log(filepath)
Promise.promisify = function(fn) {
  return function() {
    var args = Array.from(arguments)
    return new Promise(function(resolve, reject) {
      console.log(args)
      fn.apply(
        null,
        args.concat(function(err) {
          console.log('aaaaa', arguments[1])
          err ? reject(err) : resolve(arguments[1])
        })
      )
    })
  }
}

var readFile = Promise.promisify(function () {
  console.log('okkk2222')
})
readFile(filepath, "utf8").then(function(data) {
  console.log(data)
})
