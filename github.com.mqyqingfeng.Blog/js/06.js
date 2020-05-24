// var a = { title: 'testttt' }
// var b = Object.create(a)
// console.log(b)
// console.log(b.__proto__)

// var a = { title: 'test222' }
// var b = new Object(a)
// console.log(b)

// o = Object.create({}, { p: { value: 42 } })
// // console.log(o.p)
// console.log(Object.getOwnPropertyDescriptors(o))

// var stu = { p: 42 }
// var desc = Object.getOwnPropertyDescriptors(stu)
// console.log(desc)

// Object.assign(null)
// Object.assign(undefined)

// console.log(Object.assign(2))

// var obj = { a: 1 }
// // console.log(Object.assign(obj, null) === obj)
// // console.log(Object.assign(obj, undefined, null) === obj)
// var s = 'ok'
// // console.log(Object.assign(obj, s))
// // console.log(Object(true))
// // console.log(Object(10))
// // console.log(Object('abc'))

// var o = Object.assign({ b: 'c' },
//   // Object.defineProperty({}, 'invisible', {
//   //   enumerable: false,
//   //   value: 'hello'
//   // })
//   // Object.create({ hello: 'world' })
//   { [Symbol('c')]: 'd' }
// )

// console.log(o)


// var b = 10;
// (function b() {
//   b = 20;
//   console.log(b);
// })();

// var a = 10;
// (function () {
//   console.log(a)
//   a = 5
//   console.log(window.a)
//   var a = 20;
//   console.log(a)
// })()

// var arr = [3, 15, 8, 29, 102, 22]
// // console.log(arr.sort((a, b) => a - b))
// console.log(arr.sort())


function newFunc(father, ...args) {
  var result = {}
  result.__proto__ = father.prototype
  var result2 = father.apply(result, args)
  var resultType = typeof result2
  if ((resultType ==='function' || resultType === 'object') && result2 !== null) {
    return result2
  }
  return result
}