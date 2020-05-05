// var arr = [1, [[2, 3], 4], [5, 6]]
// var flat = function* (a) {
//   var n = a.length
//   for (var i = 0; i < n; i++) {
//     var item = a[i]
//     if (typeof item !== 'number') {
//       yield* flat(item)
//     } else {
//       yield item
//     }
//   }
// }

// for (var f of flat(arr)) {
//   console.log(f)
// }

// =========================================

// function* demo() {
//   console.log('Hello' + (yield))
//   console.log('Hello' + (yield 123))
// }
// var it = demo()
// console.log(it.next())
// console.log(it.next())

// =========================================
// function* demo() {
//   foo(yield 'a', yield 'b')

//   function foo() {
//     console.log('arguments', arguments)
//   }
// }
// var it = demo()
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

// function* gen() {

// }

// var g = gen()
// console.log(g[Symbol.iterator]() === g)

// function* f() {
//   for (var i = 0; true; i++) {
//     var reset = yield i
//     if (reset) {
//       i = -1
//     }
//   }
// }
// var g = f()
// console.log(g.next())
// console.log(g.next())
// console.log(g.next(1))

// function* demo(x) {
//   var y = yield (x + 1)
//   console.log('y==', y)
//   var z = yield(y / 3)
//   return y
// }

// var it = demo(6)
// console.log(it.next())
// console.log(it.next(12))
// console.log(it.next())

// function* dataConsumer() {
//   console.log('started')
//   console.log(`1.${yield}`)
//   console.log(`2.${yield}`)
//   return 'result'
// }

// var it = dataConsumer()
// console.log(it.next())
// console.log(it.next('a'))
// console.log(it.next('b'))

// function wrapper(generatorFunction) {
//   return function (...args) {
//     console.log(args)
//     let generatorObject = generatorFunction(...args)
//     generatorObject.next()
//     return generatorObject
//   }
// }

// var wrapped = wrapper(function* () {
//   console.log(`First Input: ${yield}`)
//   return 'DONE'
// })
// console.log(wrapped().next('hello'))

// function* fib() {
//   let [prev, curr] = [0, 1];
//   for (; ;) {
//     yield curr;
//     [prev, curr] = [curr, prev + curr];
//   }
// }
// // let it = fib()
// // console.log(it.next())
// // console.log(it.next())

// for (let val of fib()) {
//   if (val > 1000) break
//   console.log(val)
// }

// function* objectEntries(obj) {
//   var ownKeys = Reflect.ownKeys(obj)
//   for (let key of ownKeys) {
//     yield [key, obj[key]]
//   }
// }

// var obj = { foo: 'bar', name: 'Joe Doe' }
// for (var item of objectEntries(obj)) {
//   console.log(item)
// }

var g = function* () {
  try {
    yield
  } catch (e) {
    console.log('内部错误', e)
  }
}

var it = g()
it.next()

try {
  it.throw('a')
  it.throw('b')
  it.throw('c')
} catch (e) {
  console.log('外部错误', e)
}