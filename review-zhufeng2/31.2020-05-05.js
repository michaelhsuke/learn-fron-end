// // function f(m) {
// //   return m * 2
// // }

// // var thunk = function () {
// //   return x + 5
// // }

// // function f(thunk) {
// //   return thunk() * 2
// // }
// // const fs = require('fs')
// // var Thunk = function (filename) {
// //   return function (callback) {
// //     return fs.readFile(filename, callback)
// //   }
// // }

// // Thunk('./file/01.txt')(function (err, data) {
// //   console.log(err, data)
// // })


// // function Thunk(fn) {
// //   return function () {
// //     var args = Array.prototype.slice.call(arguments)
// //     var ctx = this
// //     return function (callback) {
// //       args.push(callback)
// //       fn.apply(ctx, args)
// //     }
// //   }
// // }

// const Thunk = function (fn) {
//   return function (...args) {
//     var ctx = this
//     return function (callback) {
//       fn.call(ctx, ...args, callback)
//     }
//   }
// }

// // Thunk(readFile)(fileA)(callback)

// // sum(1, 2)(3)(4)(5) = 10

// function sum() {
//   return function () {

//   }
// }


// function f(a, cb) {
//   cb(a)
// }

// const ft = Thunk(f)
// ft(1)(cb)Thunk(f)

// function Thunk(fn) {
//   return function (...args) {
//     return function (callback) {
//       var total = fn.call(this, ...args)
//       return total + callback
//       // return fn.call(this, ...args, callback)
//     }
//   }
// }

// var sum = Thunk(function (a, b) {
//   return a + b
// })

// console.log(sum(1, 2)(3))

// function sum(a) {
//   let temp = function (b) {
//     return sum(a + b)
//   }
//   // temp.toString这里写成temp.valueOf也可以
//   temp.valueOf = function () {
//     return a
//   }
//   return temp
// }

// let ans = sum(1)(2)(3)
// console.log(ans)

let sum = 0
function add(...args) {
  for (let i = 0; i < args.length; i++) {
    sum = sum + args[i]
  }
  return sum
}

function currying(fn) {
  let val = null
  let temp = function (...newArgs) {
    val = fn.apply(this, newArgs)
    return temp
  }
  temp.toString = function () {
    sum = 0
    return val
  }
  return temp
}

let addCurry = currying(add)
console.log(addCurry(1)(2)(3)(4, 5)) //15  这里是函数值为15,本质是函数字符串值
// console.log(addCurry(1)(2)(3, 4, 5)) //15
// console.log(addCurry(1, 2)(3, 4, 5)) //15


