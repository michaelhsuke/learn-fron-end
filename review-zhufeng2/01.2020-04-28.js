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

var a = new Number(10)
console.log(typeof a)

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
 * 1.NaN: Not a Number
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
console.log([].toString(), Number([]))  // '' 0
console.log([100].toString(), Number([100]))  // '100' 100
console.log([100, 200].toString(), Number([100, 200])) // '100,200', NaN
// ③ 日期
var now = new Date()
console.log(now.toString(), Number(now.toString()))  // 'Tue Apr 28 2020 17:46:43 GMT+0800 (中国标准时间)' NaN
// ④ 正则
var reg = /^(\d|([1-9]\d+))(\.\d+)?$/g
console.log(reg.toString(), Number(reg.toString()))  // /^(\d|([1-9]\d+)(\.\d+)?)/g NaN

/**
 * （4）
 */

