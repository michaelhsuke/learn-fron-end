// var it = makeIterator(['a', 'b']);

// // it.next() // { value: "a", done: false }
// // it.next() // { value: "b", done: false }
// // it.next() // { value: undefined, done: true }

// function makeIterator(array) {
//   var nextIndex = 0;
//   return {
//     next: function () {
//       return nextIndex < array.length ?
//         { value: array[nextIndex++], done: false } :
//         { value: undefined, done: true };
//     }
//   };
// }

// for (var i of it) {
//   console.log(i)
// }


var obj = {
  [Symbol.iterator]: function* () {
    yield 1
    yield 2
    yield 3
  }
}

// for (let i of obj) {
//   console.log(i)
// }

var it = obj[Symbol.iterator]()
console.log(it.next())