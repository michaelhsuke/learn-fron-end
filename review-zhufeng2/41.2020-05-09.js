// var target = {
//   a: 1,
//   b: 2,
//   c: 3,
//   [Symbol.for('secret')]: '4'
// }

// Object.defineProperty(target, 'key', {
//   enumerable: false,
//   configurable: false,
//   writable: true,
//   value: 'static'
// })

// var proxy = new Proxy(target, {
//   ownKeys(target) {
//     return ['a', 'd', Symbol.for('secret'), 'key']
//   }
// })

// console.log(Object.keys(proxy))

var target = {}
var handler = {}

var { proxy, revoke } = Proxy.revocable(target, handler)
proxy.foo = 123
console.log(proxy.foo)
revoke()
console.log(proxy.foo)