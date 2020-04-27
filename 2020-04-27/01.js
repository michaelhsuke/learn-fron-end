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
  if (obj instanceof Date) {
    return new Date(obj)
  }

  // if (obj instanceof Function) {
  //   return new Function(obj)
  // }

  if (typeof obj != 'object') {
    return obj
  }

  var result = Object.create(null)

  Object.keys(obj).forEach(key => {
    result[key] = deepClone(obj[key])
  })

  return result
}