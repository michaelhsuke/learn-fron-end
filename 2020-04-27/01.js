var obj = {
  name: 'xuke',
  products: ['apple', 'banana', 'orange'],
  team: {
    developers: ['zhangsan', 'lisi']
  }
}

var clonedObj = deepClone(obj)
console.log(clonedObj)
console.log(clonedObj.products === obj.products)

function deepClone(obj) {
  if (typeof obj != 'object') {
    return obj
  }

  var result = Object.create(null)

  Object.keys(obj).forEach(key => {
    result[key] = deepClone(obj[key])
  })

  return result
}