// var str = '\u0061'
// console.log(str)

// var str2 = "\uD842\uDFB7"
// console.log(str2)

// var str3 = "\u20BB"
// var str3 = "\u{20BB7}"

// console.log(str3)

// var s1 = "\u{41}\u{42}\u{43}"
// var s2 = "\u{6F}"
// // console.log(s1)
// console.log(s2)

// var hello = 123
// console.log(hell\u{6F})

// for (var codePoint of 'foo') {
//   console.log(codePoint);
// }

// var text = String.fromCodePoint(0x20BB7)
// // for (var i = 0; i < text.length; i++) {
// //   console.log(text[i])
// // }
// for (var i of text) {
//   console.log(i)
// }

// console.log('\u4e2d')

// const json = '"\u2028"';
// JSON.parse(json); // 可能报错

// const PS = eval("'\u2029'");

// var str = String.raw({ raw: ['foo', 'bar', 'aaa'] }, 1 + 2, 4) // "foo3bar"
// console.log(str)
// var a = ['a', 'b', 'c']
// var num = [1, 2, 3]

// a.push('')

// var result = String.raw({ raw: a }, ...num)
// console.log(result)

var s = "𠮷";
// console.log(s.length)
// console.log(s[0])
// console.log(s.charCodeAt(0))
// console.log(s.charCodeAt(1))

// console.log(s.codePointAt(0))
// console.log(s.codePointAt(0).toString(16))
// console.log(s.codePointAt(1).toString(16))

// function is32Bit(c) {
//   return c.codePointAt(0) > 0xFFFF
// }

// console.log(is32Bit(s))
// console.log(is32Bit('a'))

// console.log('\u01D1')
// console.log('0.1'.padEnd(10, 0))

// console.log('1'.padStart(5, '1234'))

console.log('12'.padStart(10, 'YYYY-MM-DD')) // "YYYY-09-12"