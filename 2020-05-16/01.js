// typeof x
// let x 

// new ReferenceError()
// new RangeError()
// new TypeError()
// new EvalError()
// new Error()

// console.log(typeof x)


// function fun(args) {
//   // {
//     let args = []
//   // }
// }

// fun()

/**
 * let 命令
 * 不存在变量提升
 * 暂时性死区：只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量。
 * 不允许重复声明
 */

/**
 * 块级作用域
 * es5只有全局作用域和函数作用域
 * 
 */

// // 浏览器的 ES6 环境
// function f() { console.log('I am outside!'); }

// (function () {
//   if (false) {
//     // 重复声明一次函数f
//     function f() { console.log('I am inside!'); }
//   }

//   f();
// }());

// function f() { console.log('I am outside!'); }
// (function () {
//   var f = undefined;
//   if (false) {
//     function f() { console.log('I am inside!'); }
//   }

//   f();
// }());

// var s = '\n'
// console.log(String.fromCodePoint(0x000D))
// var s = '"\u000D"'
// var s = '"\u2028"'
// console.log(JSON.parse(s))

// console.log('\uD800')

// console.log(JSON.stringify('\u{D834}'))
// console.log('\uD834\uDF06')

let msg = `Hello, ${place}`;