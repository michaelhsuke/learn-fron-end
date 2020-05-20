// var n = 20
// var i = 0

// const obj = {
//   [Symbol.iterator]: function () {
//     return {
//       next() {
//         return { value: i++, done: i >= 10 }
//       }
//     }
//   }
// }

// var it = obj[Symbol.iterator]()
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

function Parent() {
  
}

Parent.prototype = {
  constructor: Parent,
  add: function () {
    console.log('add')
  }
}

function Child() {

}

Child.prototype = new Parent()

var obj = new Child()
obj.add()
// obj.minus()
Parent.prototype.minus = function () {
  console.log('minus')
}
obj.minus()


