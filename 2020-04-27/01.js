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
  name: 'xuke'
}

var obj4 = Object.freeze(obj3)
console.log(obj4)
obj4.name = 'michael'
console.log(obj4)
obj4 = 'todo'
console.log(obj4)