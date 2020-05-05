var s = new Set('hello')
// console.log(s)
var arr = new Array(10).fill(0)
console.log(arr);

const fs = require('fs')

function * hello() {
  yield 1
  yield 2
  yield 3
}

var itor = hello()
console.log(itor)
console.log(itor.next())



function readLinesSync(file) {
  return {
    [Symbol.iterator]() {
      return {
        next() {
          return { done: false };
        },
        return() {
          console.log('return called')
          // file.close();
          return { done: true };
        }
      };
    },
  };
}

for (let line of readLinesSync()) {
  console.log(line);
  // break;
}