var s = 'hello world'
for (let ch of s) {
  console.log(ch)
}

var itor = s[Symbol.iterator]()
var item = itor.next()
while(!item.done) {
  console.log(item.value)
  item = itor.next()
}

var obj = {
  a: 1,
  b: 2, 
  c: 3,
  [Symbol.iterator]: function () {
    return {
      next: function () {
        
      }
    }
  }
}

for (var item of obj) {
  console.log(item)
}


/**
 * 可以遍历的对象：Array Set Map arguments NodeList String
 */