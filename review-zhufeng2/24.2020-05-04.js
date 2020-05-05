// const g = function* (x, y) {
//   let result = yield x + y;
//   return result;
// };

// const gen = g(1, 2);
// console.log(gen.next()); // Object {value: 3, done: false}

// console.log(gen.next(1)); 

// const f = function* () {
//   yield 1
// }

// var it = f()
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

function* gen(){
  yield ["a", "b", "c"];
}

console.log(gen().next()) // { value:"a", done:false }