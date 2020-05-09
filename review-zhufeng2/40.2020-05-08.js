// console.log(2 ** 3)

// var proxy = new Proxy(function (a, b) { return a + b }, {
//   construct(target, args, newTarget) {
//     console.log('construct called')
//     return new target(...args)
//   },
//   apply(target, ctx, args) {
//     console.log('apply called', target, args)
//     return  target(...args)
//   }
// })

// console.log(proxy(2, 3))
// console.log(new proxy(2, 3))

// var proxy = new Proxy({ foo: 'bar' }, {
//   deleteProperty(target, prop) {
//     console.log(prop)
//     delete target[prop]
//     return true
//   }
// })

// delete proxy.foo
// console.log(proxy.foo)

// var target = {}
// var proxy = new Proxy(target, {
//   defineProperty(target, key, descriptor) {
//     return false
//   }
// })

// console.log(Object.defineProperty(proxy))


// var handler = {
//   defineProperty(target, key, descriptor) {
//     return false;
//   }
// };
// var target = {};
// var proxy = new Proxy(target, handler);
// proxy.foo = 'bar' // 不会生效
// console.log(proxy.foo)


// var proto = {}

// var p = new Proxy({}, {
//   getPrototypeOf(target) {
//     return proto
//   }
// })

// console.log(Object.getPrototypeOf(p) === proto)

// Object.getOwnPropertyNames
// Object.getOwnPropertySymbols
// Object.keys
// for...in 


// var target = {
//   a: 1,
//   b: 2,
//   c: 3
// }

// var proxy = new Proxy(target, {
//   ownKeys(target) {
//     console.log('ownKeys===')
//     return ['a']
//   }
// })

// for (var i in proxy) {
//   console.log(proxy)
// }


var target = {
  _bar: 'foo',
  _prop: 'bar',
  prop: 'baz'
}

var proxy = new Proxy(target, {
  ownKeys(target) {
    return Reflect.ownKeys(target).filter(key => key[0] !== '_')
  }
})

for (var val of Object.keys(proxy)) {
  console.log(val)
}