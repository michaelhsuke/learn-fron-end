/**
 * 一、JS的数据类型
 * （一）基本数据类型（值类型）
 * Number
 * String
 * Boolean
 * null
 * undefined
 *
 * （二）引用类型
 * 对象
 * 数组
 * 日期
 * 正则
 *
 * （三）es6新增Symbol类型
 */

// var a = new Number(10)
// console.log(typeof a)

/**
 * 二、数据类型详解
 * （一）number数字类型
 *
 */
// console.log(Number('13'))
// console.log(Number('hello'))
// console.log(Number(true))
// console.log(Number(false))
// console.log(Number(null))
// console.log(Number(undefined))
// console.log(isNaN(undefined))
// console.log(isNaN(null));
// console.log(isNaN({ a: 1 }))
/**
 * 1. NaN: Not a Number
 * （1）isNaN的检测机制
 * 首先判断待检测值是否为数值类型，如果不是，先转换为数值类型
 * （2）基本数据类型转数值
 * 直接用Number这个方法转换
 * ① 字符串转数值
 * 如果当前字符串出现任意一个非有效数字字符（包括+-号，必须出现在开头且后跟有效字符），结果为NaN
 */
// console.log(Number('11'))    // 11
// console.log(Number('11px'))  // NaN
// console.log(Number('abc'))   // NaN
// console.log(Number('12.5'))  // 12.5
// console.log(Number(''))      // 0
// console.log(Number('-'))      // NaN
// console.log(Number('+'))      // NaN
/**
 * ② 布尔型转数值
 */
// console.log(Number(true))  // 1
// console.log(Number(false)) // 0

/**
 * ③ null、undefined转数值
 */
// console.log(Number(null))  // 0
// console.log(Number(undefined))  // undefined

/**
 * （3）引用类型转为数值：先调用引用值的toString方法转为字符串，再调用字符串转数值的规则（Number）
 */
// ① 普通对象
// console.log(({}).toString(), Number({}))  // '[object Object]' => NaN
// console.log(Number({ a: 1 }))  // NaN
// console.log(Number({ a: 1, b: [1, 2, 3] }))  // NaN
// ② 数组
// console.log([].toString(), Number([]))  // '' 0
// console.log([100].toString(), Number([100]))  // '100' 100
// console.log([100, 200].toString(), Number([100, 200])) // '100,200', NaN
// // ③ 日期
// var now = new Date()
// console.log(now.toString(), Number(now.toString()))  // 'Tue Apr 28 2020 17:46:43 GMT+0800 (中国标准时间)' NaN
// // ④ 正则
// var reg = /^(\d|([1-9]\d+))(\.\d+)?$/g
// console.log(reg.toString(), Number(reg.toString()))  // /^(\d|([1-9]\d+)(\.\d+)?)/g NaN

/**
 * （4）parseInt/parseFloat
 * 等同于Number,和Number的区别在于字符串转换
 * Number：出现任意非有效数字字符，结果为NaN
 * parseInt: 把字符串开始部分的整数部分解析出来
 * parseFloat: 把字符串开始部分的浮点数部分解析出来
 */
// console.log(parseInt('13.4px'))  // 13
// console.log(Number('13.4px'))  // NaN
// console.log(parseInt(' 0'))  // 0
// console.log(parseInt(' '))  // NaN
// console.log(Number(''))  // 0
// console.log(Number('   0'))  // 0
// console.log(parseInt(3, 2))  // NaN
// console.log(parseInt(2, 3))  // 2

/**
 * （5）NaN的比较
 */
// console.log(NaN === NaN)
// console.log(NaN == NaN)
// console.log(Object.is(NaN, NaN))

/**
 * （二）布尔类型
 * 其他数据转为布尔型
 * - Boolean
 * - !
 * - !!
 * 只有（NaN、0、null、undefined、''）五个值会转为false, 其他的都是true
 */
// console.log(Boolean('true'))  // true
// console.log(Boolean('false'))  // true
// console.log(Boolean(''))  // false
// console.log(Boolean(null)) // false
// console.log(Boolean(undefined))  // false
// console.log(Boolean(0))  // false
// console.log(Boolean(NaN))  // false
// console.log(Boolean([]))  // true
// console.log(Boolean({}))  // true

/**
 * （三）对象
 */
// var obj = {}
// var arr = []
// obj[{}] = 'hello'
// arr[[]] = 'ok'
// arr[[0]] = 'ok'
// console.log(obj)
// console.log(arr)

// 在JS的数学运算中（+ - * / %），除+外，其余运算符在运算时，如遇到非数字类型的，首先会转化为数字类型（Number）,然后再进行运算
// +号除了数字相加，还有字符串拼接功能，如在运算中遇到字符串（+号前后都可以），则为字符串拼接，而不是数学运算
// console.log(+({}))  // NaN
// console.log(0 + ({}))  // NaN
// console.log(+(new Date()))
// console.log(0 + (new Date()))
// console.log(+(new RegExp()))
// console.log(0 + (new RegExp()))

/**
 * （四）数据类型检测
 * - instanceof
 * - instance.constructor
 * - Object.prototype.toString.call()
 * - typeof: number string boolean object undefined function 
 */
// console.log(typeof null)
// console.log(Object.prototype.toString.call({}))  // [object Object]
// console.log(Object.prototype.toString.call([]))  // [object Array]

// function myInstanceOf(obj, type) {
//   var proto = obj.__proto__
//   while(proto) {
//     if (type.prototype && proto === type.prototype) {
//       return true
//     }
//     proto = proto.__proto__
//   }
//   return false
// }

// console.log(myInstanceOf([], Array))
// console.log(myInstanceOf([], Object))
// console.log(myInstanceOf(function () {}, Object))
// console.log(1 instanceof Object)
// console.log(myInstanceOf(1, Object))
// var num = new Number(10)
// console.log(num instanceof Object)

// [] null {} /aaa/ => typeof => 结果都是'object'
// switch case 中的每一种case都是基于'==='来比较的

console.log(null == undefined)