var str = 'hello'
console.log(str.charCodeAt(0))
console.log(String.fromCharCode(104))

console.log(String.fromCodePoint(0x20BB7))
console.log(String.fromCodePoint(0x78, 0x1f680, 0x79))

var str = String.fromCodePoint(0x78, 0x1f680, 0x79)
console.log(str)
console.log(str.codePointAt(0))

// String.fromCharCode
// String.fromCodePoint
// str.charCodeAt
// str.codePointAt

console.log(str.charCodeAt(0))