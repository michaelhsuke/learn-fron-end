// function* hello() {
//   yield 1
//   yield 2
//   return 3
// }

// // for (var val of hello()) {
// //   console.log(val);
// // }
// var it = hello()
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

// function* gen() {
//   yield 123 + 456;
// }

// var g = gen()
// console.log(g.next())

// function* f() {
//   console.log('执行了！')
// }

// var generator = f();

// setTimeout(function () {
//   generator.next()
// }, 2000);


// function* f() {
//   console.log(`1.${yield}`)
//   console.log(`2.${yield}`)
// }

// var g = f()
// console.log(g.next())
// console.log(g.next('aaaaaa'))

// console.log(g[Symbol.iterator]() === g)

// function* numbers() {
//   yield 1
//   yield 2
//   yield 3
//   yield 4
//   return 5
// }

// var a = Array.from(numbers())
// console.log(a)
// var s = new Set(numbers())
// console.log(s)

// var g = function* () {
//   try {
//     yield
//   } catch (e) {
//     console.log('内部', e)
//   }
// }

// var it = g()
// it.next()
// it.throw('a')

var g = function* () {
  while (true) {
    try {
      yield;
      console.log('aaaa')
    } catch (e) {
      if (e != 'a') throw e;
      console.log('内部捕获', e);
    }
  }
};

var it = g()
console.log(it.next())
try {
  it.throw('a')
  it.throw('a')
  // it.throw('a')
  // it.throw('a')
  it.throw('abc')
  it.throw('a')
} catch(e) {
  console.log('外部捕获', e)
}
