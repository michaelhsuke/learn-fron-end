// function Foo() {
//   Foo.a = function () {
//     console.log(1)
//   }
//   this.a = function () {
//     console.log(2)
//   }
// }
// Foo.prototype.a = function () {
//   console.log(3)
// }
// Foo.a = function () {
//   console.log(4)
// }
// Foo.a();  // 4
// let obj = new Foo();
// obj.a();  // 2
// Foo.a();  // 1

// var name = 'Tom';
// (function () {
//   if (typeof name == 'undefined') {
//     var name = 'Jack';
//     console.log('Goodbye ' + name);
//   } else {
//     console.log('Hello ' + name);
//   }
// })();

// var name = 'Tom';
// (function () {
//   if (typeof name == 'undefined') {
//     name = 'Jack';
//     console.log('Goodbye ' + name);
//   } else {
//     console.log('Hello ' + name);
//   }
// })();

function wait() {
  return new Promise(resolve =>
    setTimeout(resolve, 10 * 1000)
  )
}

async function main() {
  console.time();
  // const x = wait();
  // const y = wait();
  // const z = wait();
  // await x;
  // await y;
  // await z;

  await wait();
  await wait();
  await wait();
  console.timeEnd();
}
main();