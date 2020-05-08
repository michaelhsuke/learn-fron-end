// const person = {
//   sayName() {

//   }
// }

// console.log(person.sayName.name)

// const obj = {
//   get foo() {},
//   set foo(x) {}
// }

// const desc = Object.getOwnPropertyDescriptor(obj, 'foo')
// console.log(desc.get.name)
// console.log(desc.set.name)

// console.log((new Function()).name)

// function doSomething() {

// }
// console.log(doSomething.bind().name)

// var s1 = Symbol('aaa')
// var s2 = Symbol('bbb')
// var obj = {
//   [s1]() {},
//   [s2]() {}
// }

// // console.log(obj[s1].name)
// // console.log(obj[s2].name)

// var obj = {
//   foo: 3
// }

// console.log(Object.getOwnPropertyDescriptor(obj, 'foo'))
// var obj = { foo: 1, bar: 2 }
// // Object.defineProperty(obj, 'foo', {
// //   enumerable: false
// // })

// // console.log(Object.entries(obj))
// // console.log(JSON.stringify(obj))
// var obj2 = Object.assign({}, obj)
// console.log(obj2);

// Object.keys
// Object.getOwnPropertyNames
// Object.getOwnPropertySymbols
// Reflect.ownKeys

// var r = Object(true)
// console.log({ ...r })

// var obj = {}
// console.log(obj?.a)
// console.log(Math.trunc(4.1))
// console.log(Math.max(...[1, 2, 3]))

// const a1 = [{ foo: 1 }]
// const a2 = [{ bar: 2 }]

// const a3 = a1.concat(a2)
// // console.log(a3)
// const a4 = [...a1, ...a2]

// console.log(a4[0] === a1[0])

var [a, ...rest] =[1, 2, 3]
console.log(a, rest)