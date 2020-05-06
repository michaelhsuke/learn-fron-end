// var s = new Set().add('a').add('b').add('c')
// var [x, ...y] = s
// console.log(x, y)

// var str = 'hello'
// console.log([...str])

// var generator = function* () {
//   yield 1
//   yield* { key: [2, 3, 4], [Symbol.iterator]() { return { next() { return { value: 'good', done: true } } } } }
//   yield 5
// }
// for (var val of generator()) {
//   console.log(val)
// }

Array.from()