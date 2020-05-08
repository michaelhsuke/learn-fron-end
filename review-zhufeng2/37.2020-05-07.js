// var validator = {
//   set: function (target, prop, value) {
//     if (prop === 'age') {
//       if (!Number.isInteger(value)) {
//         throw new TypeError('not an integer')
//       }
//       if (value > 200) {
//         throw new RangeError('invalid value')
//       }
//     }

//     target[prop] = value
//   }
// }

// var person = new Proxy({}, validator)
// console.log(person.age = 100)
// // person.age = 'hello'
// person.age = 300


// const handler = {
//   get(target, key) {
//     invariant(key, 'get')
//     return target[key]
//   },
//   set(target, key, value) {
//     invariant(key, 'set')
//     target[key] = value
//     return true
//   }
// }

// function invariant(key, action) {
//   if (key[0] === '_') {
//     throw new Error(`invalid ${action} to private ${key}`)
//   }
// }

// const target = {}
// var proxy = new Proxy(target, handler)
// proxy.key = 'hello'
// console.log(proxy.key)

// proxy._key = 'good'


// const handler = {
//   set: function (obj, prop, value, receiver) {
//     obj[prop] = receiver
//   }
// }

// var proxy = new Proxy({}, handler)
// proxy.foo = 'bar'

// console.log(proxy.foo === proxy)

var handler = {
  set: function (obj, key, value, receiver) {
    console.log('receiver===', receiver)
    obj[key] = receiver
  }
}

var myObj = {}
var proxy = new Proxy({}, handler)
Object.setPrototypeOf(myObj, proxy)

myObj.foo = 'bar'
console.log(myObj.foo === myObj)