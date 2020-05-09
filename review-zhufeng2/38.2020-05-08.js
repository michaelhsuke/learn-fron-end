// var target = { _prop: 'hello', prop: 'world' }
// var proxy = new Proxy(target, {
//   has(target, key) {
//     if (key[0] === '_') {
//       return false
//     }
//     return key in target
//   }
// })

// var proxy = new Proxy({}, {
//   has(target, key) {
//     console.log('keyxxxxx', key)
//     if (key[0] === '_') {
//       return false
//     }

//     return key in target
//   }
// })

// console.log('_foo' in proxy)

var obj = { a: 10 }
Object.preventExtensions(obj)
// Object.freeze(obj)
// console.log(obj)
// obj.a = 20
// console.log(obj)
var p = new Proxy(obj, {
  has(target, prop) {
    return false
  }
})

console.log('a' in p)
console.log([...p])
