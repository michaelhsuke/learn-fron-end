const fs = require('fs')

let p = new Promise((aaa, bbb) => {
  fs.readFile('./file/1.txt', 'utf8', (err, data) => {
    err ? bbb(err) : aaa(data)
  })
})

let f1 = function (data) {
  console.log(data)
  return new Promise((f1, f2) => {
    fs.readFile('./file/2.txt', 'utf8', (err, data) => {
      err ? f2(err) : f1(data)
    })
  })
}

let f2 = function (data) {
  console.log(data)
  return new Promise((f1, f2) => {
    fs.readFile('./file/3.txt', 'utf8', (err, data) => {
      err ? f2(err) : f1(data)
    })
  })
}

let f3 = function (data) {
  console.log(data)
}

let errorLog = function (error) {
  console.log(error)
}

p.then(f1).then(f2).then(f3).catch(errorLog)

