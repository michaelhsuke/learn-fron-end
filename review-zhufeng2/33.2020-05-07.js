// var obj = new Proxy({}, {
//   get: function(target, propKey, receiver) {
//     console.log(`getting ${propKey}`)
//     return Reflect.get(target, propKey, receiver)
//   },
//   set: function (target, propKey, value, receiver) {
//     console.log(`setting ${propKey}`)
//     return Reflect.set(target, propKey, value, receiver)
//   }
// })

// console.log(obj.__proto__)

// var proxy = new Proxy({}, {
//   get: function(target, propKey, receiver) {
//     return 35
//   }
// })

// console.log(proxy.a)
// console.log(proxy.b)
// console.log(proxy.c)

// var proxy = new Proxy({}, {
//   get: function () {
//     return 35
//   }
// })

// var obj = Object.create(proxy)
// console.log(obj)
// console.log(obj.time)
// var handler = {
//   get: function (target, name) {
//     if (name === 'prototype') {
//       return Object.prototype
//     }
//     return `Hello, ${name}`
//   },
//   apply: function (target, thisBinding, args) {
//     return args[0]
//   },
//   construct: function (target, args) {
//     return { value: args[1] }
//   }
// }

// var fproxy = new Proxy(function (x, y) {
//   return x + y
// }, handler)

var handler = {
  get: function (target, name) {
    console.log('get')
    if (name === 'prototype') {
      return Object.prototype;
    }
    return 'Hello, ' + name;
  },

  apply: function (target, thisBinding, args) {
    console.log('apply', target, thisBinding, args)
    return args[0];
  },

  construct: function (target, args) {
    console.log('construct', target, args)
    return { value: args[1] };
  }
};

var fproxy = new Proxy(function (x, y) {
  console.log('x, y', x, y)
  return x + y;
}, handler);

console.log(fproxy.call)
console.log('fproxy', fproxy(1, 2))