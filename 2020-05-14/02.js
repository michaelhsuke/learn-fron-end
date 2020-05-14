// var s = '𠮷';

// console.log(/^.$/.test(s))
// console.log(/^.$/u.test(s))

// function codePointLength(text) {
//   var result = text.match(/[\s\S]/gu)
//   return result ? result.length : 0
// }

// var s = '𠮷𠮷'
// console.log(s.length)

var r1 = /hello/
var r2 = /hello/u

console.log(r1.unicode)
console.log(r2.unicode)
