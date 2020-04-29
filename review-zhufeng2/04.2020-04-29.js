Math.abs
Math.floor
Math.ceil
Math.round
Math.min
Math.max
Math.pow
Math.sqrt
Math.random

var arr = [1, 2, 3]
// arr.splice(2, 0, 100, 200, 300)
// // console.log(arr)
// // console.log(arr.splice(1, 1))
// // console.log(arr)
// var result = []
// while(arr && arr.length) {
//   result.push(arr.splice(0, 3))
// }
// console.log(result)
// console.log(arr.push(4, 5, 6))
// console.log(arr)
// arr.unshift(100, true, 200)
// console.log(arr)

console.log(arr.reduce(function (prev, next) {
  return prev + next
}))

var obj = {
  a: {
    b: {
      c: 100
    }
  }
}

function fn(expr, data) {
  return expr.split('.').reduce(function (obj, key) {
    return obj && obj[key] || undefined
  }, data)
}
console.log(fn('a.b', obj));


var arr = [1, 1, 1, 2, 2, 3, 1, 4, 5, 6, 5, 4]
var obj = {}
arr.forEach(val => {
  obj[val] = val
})
console.log(Object.keys(obj))
console.log(Array.from(new Set(arr)))
arr.join(',')