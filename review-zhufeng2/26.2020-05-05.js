// function makeIterator(arr) {
//   this.arr = arr
//   // return {
//   //   next() {
//   //     var result = { value: index < len ? arr[index] : undefined, done: index >= len }
//   //     index++
//   //     return result
//   //   }
//   // }
// }

// makeIterator[Symbol.iterator] = function* () {
//   yield 1
//   yield 2
//   yield 3 
// }

// var it = makeIterator(['a', 'b'])
// // console.log(it.next())
// // console.log(it.next())
// // console.log(it.next())
// // console.log(it.next())
// // console.log(it.next())
// // console.log(it.next())

// for (var item of it) {
//   console.log(item)
// }

// function idMaker() {
//   var index = 0;

//   return {
//     next: function() {
//       return {value: index++, done: false};
//     }
//   };
// }

// var it = idMaker()
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

// for (var i of it) {
//   console.log(i)
// }


const obj = {
  [Symbol.iterator] : function* () {
    yield 1
    yield 2
    yield 3
    // return {
    //   next: function () {
    //     return {
    //       value: 1,
    //       done: true
    //     };
    //   }
    // };
  }
};

// var it = obj[Symbol.iterator]()

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
for (var i of obj) {
  console.log(i)
}
