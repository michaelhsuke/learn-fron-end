// var a1 = [1, 2]
// var a2 = [...a1]
// console.log(a1 === a2)

// var [...a3] = a1
// console.log(a1 === a3)

// var arr1 = ['a', 'b']
// var arr2 = ['c']
// var arr3 = ['d', 'e']

// console.log(arr1.concat(arr2, arr3))
// console.log(arr1.push('f'))
// console.log(arr1.push('g'))
// console.log(arr1.push('h'))
// console.log(arr1)

// var a1 = [{ foo: 1 }]
// var a2 = [{ bar: 2 }]
// var a3 = a1.concat(a2)

// // console.log(a3)
// var a4 = [...a1, ...a2]
// console.log(a4)

// var s = '\uD83D\uDE80'
// console.log(s)


// Number.prototype[Symbol.iterator] = function* () {
//   var i = 0
//   var num = this.valueOf()

//   while (i < num) {
//     yield i++
//   }
// }


// console.log([...5])

// var map = new Map([
//   [1, 'one'],
//   [2, 'two'],
//   [3, 'three'],
// ])

// console.log(map.keys())
// console.log(map[Symbol.iterator] === map.entries)
// console.log([...map])

// var set = new Set([1, 2, 3])
// console.log(set[Symbol.iterator] === set.values)
// console.log([...set])

// var go = function* () {
//   yield 1
//   yield 2
//   yield 3
// }

// var it = go()
// // console.log(it[Symbol.iterator])
// // console.log(it.next())
// console.log([...it])

// const toArray = (() => Array.from ? Array.from : obj => [].slice.call(obj) )()


// function toArray = (function () {
//   return function (obj) { return [].slice.call(obj) }
// })()

// console.log(toArray({ length: 1 }))

// var a = { length: 3 }
// console.log([].slice.call(a))

// function typesOf() {
//   return Array.from(arguments, x => typeof x)
// }

// console.log(typesOf(null, 1, 'hello', NaN))

var letter = [...'abc']
var entries = letter.entries()
console.log(entries.next().value)
console.log(entries.next().value)
console.log(entries.next().value)
