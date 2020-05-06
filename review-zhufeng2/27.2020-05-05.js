// function Itor(start, end) {
//   this.start = start
//   this.end = end 
// }

// Itor.prototype[Symbol.iterator] = function () {
//   return {
//     next() {
//       return { value: 'hello', done: false }
//     }
//   }
// }

// var it = new Itor()
// for (var val of it) {
//   console.log(val)
// }

// var obj = {
//   [Symbol.iterator]() {
//     return {
//       next() {
//         var n = Math.random() * 100
//         return { value: n, done: n > 80 }
//       }
//     }
//   }
// }

// for (var val of obj) {
//   console.log(val)
// }

// var obj = {
//   0: 'a',
//   1: 'b',
//   2: 'c',
//   length: 3,
//   [Symbol.iterator]: [][Symbol.iterator]
// }

// for (var val of obj) {
//   console.log(val)
// }

// var it = obj[Symbol.iterator]()
// console.log(it.next())

// var m = new Map([['a', 1], ['b', 2]])
// console.log(m.__proto__)
// // console.log(m.size);
// m.set('c', 3)
// // console.log(m.size)
// m.delete('a')
// console.log(m.entries())

/**
 * 原生具有Iterator接口
 * Array
 * Map
 * Set
 * String
 * TypedArray
 * arguments
 * NodeList
 */

 /**
  * 调用Iterator的场合
  * 解构赋值
  * 扩展运算符
  * yield*
  * for...of
  * Array.from
  * Map() Set() 
  * Promise.all()
  * Promise.race()
  */

  /**
   * 遍历器 生成函数
   */

