var fs = require('fs')

var readFile = function (filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, function (err, data) {
      if (err) {
        reject(err)
      }
      resolve(data)
    })
  })
}

function* gen() {
  yield readFile('./file/01.txt')
  yield readFile('./file/02.txt')
}

// var f = gen()
// f.next().value.then((res) => {
//   console.log(res.toString());
// })

function run(gen) {
  var f = gen()

  function next(data) {
    if (data) {
      console.log(data && data.toString && data.toString())
    }

    var result = f.next()
    if (result.done) {
      return
    }
    result.value.then(next)
  }

  next()
}

run(gen)

