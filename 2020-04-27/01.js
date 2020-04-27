var obj = {
  name: 'xuke',
  products: ['apple', 'banana', 'orange'],
  team: {
    developers: ['zhangsan', 'lisi']
  },
  time: new Date(),
  run: function () {
    console.log('hello')
  }
}

var a = new Date()
console.log(typeof a)

var clonedObj = deepClone(obj)
console.log(obj, clonedObj)
console.log(clonedObj.products === obj.products)
console.log(clonedObj.run === obj.run)

function deepClone(obj) {
  if (obj === null) {
    return null
  }

  if (obj instanceof Date) {
    return new Date(obj)
  }

  if (obj instanceof RegExp) {
    return new RegExp(obj)
  }

  if (typeof obj !== 'object') {
    return obj
  }

  var result = new obj.constructor

  Object.keys(obj).forEach(key => {
    result[key] = deepClone(obj[key])
  })

  return result
}

// Object.defineProperty(obj, 'xuke', {
//   get() {},
//   set(),
//   value: '',
//   configurable: true,
//   enumerable: false,
//   writable: false
// })

var obj3 = {
  name: 'xuke',
  a: Symbol('a'),
  [Symbol('b')]: 'bbbb'
}

// var obj4 = Object.freeze(obj3)
obj4 = obj3
console.log(obj4)
// obj4.name = 'michael'
// console.log(obj4)
// obj4 = 'todo'
// console.log(obj4)

console.dir(Object)
console.log(Object.getOwnPropertyDescriptors(obj4));
console.log(Object.getOwnPropertyDescriptor(obj4, 'name'));
console.log(Object.getOwnPropertyNames(obj4))
console.log(Object.getOwnPropertySymbols(obj4));

console.log(Object.keys(obj4))
console.log(Object.values(obj4))
console.log(Object.entries(obj4))
console.log(Object.is(NaN, NaN))
console.log(Object.is(+0, -0))
console.log(Object.is(obj, obj3))
console.log(Object.is(obj3, obj3))
console.log(Object.getPrototypeOf(obj3))


