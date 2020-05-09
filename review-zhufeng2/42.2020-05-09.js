// const target = {
//   m: function () {
//     console.log(this === proxy)
//   }
// }

// const proxy = new Proxy(target, {})
// target.m()
// proxy.m()

// var _name = new WeakMap()

// class Person {
//   constructor(name) {
//     _name.set(this, name)
//   }
//   get name() {
//     return _name.get(this)
//   }
// }

// var john = new Person('john')
// console.log(john.name)

// var proxy = new Proxy(john, {})
// console.log(proxy.name)

// var myObj = {
//   foo: 1,
//   bar: 2,
//   get baz() {
//     return this.foo + this.bar
//   },
//   get hello() {
//     return this.hello
//   }
// }

// var receiver = {
//   foo: 3,
//   bar: 4,
//   hello: 11
// }

// console.log(Reflect.get(myObj, 'hello', receiver))


// var p = {
//   a: 'a'
// }

// var obj = new Proxy(p, {
//   set(target, key, value, receiver) {
//     console.log('set')
//     Reflect.set(target, key, value, receiver)
//   },
//   defineProperty(target, key, attribute) {

//   }
// })

// function FancyThing() {

// }

// var myObj = new FancyThing()
// console.log(Object.getPrototypeOf(myObj) === FancyThing.prototype)
// console.log(Reflect.getPrototypeOf(myObj) === FancyThing.prototype)


const myObj = {}

// Object.setPrototypeOf(myObj, Array.prototype)
Reflect.setPrototypeOf(myObj, Array.prototype)
console.log(myObj.length)