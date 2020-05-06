// function* gen() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// var f = gen()
// console.log(f.next())
// console.log(f.return(100));

function* numbers() {
  yield 1;
  try {
    yield 2;
    yield 3;
  } finally {
    yield 4;
    yield 5;
  }
  yield 6;
}

var g = numbers()
console.log(g.next());
console.log(g.next());
console.log(g.return(7));
console.log(g.next());


