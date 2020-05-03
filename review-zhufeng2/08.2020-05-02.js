function minusKey(key, sum, obj) {
  key = parseInt(key)
  sum -= obj[key] * key
  delete obj[key]
  console.log('keys', Object.keys(obj))
  Object.keys(obj).forEach(newKey => {
    newKey = parseInt(newKey)
    if (newKey > key) {
      sum -= key * obj[newKey]
      obj[newKey - key] = (obj[newKey - key] || 0) + obj[newKey]

      delete obj[newKey]
    }
  })
  console.log(obj)
  return sum
}

function maxSum(obj) {
  var keys = Object.keys(obj)
  var max = null
  if (keys.length) {
    keys.forEach(key => {

    })
  }
}

function minimumValueAfterDispel(nums) {
  var sum = nums.reduce((total, next) => {
    return total + next
  }, 0)
  console.log(sum)
  var obj = {}
  nums.forEach(key => {
    obj[key] = obj[key] || 0
    obj[key]++
  })

  console.log(obj)

  var min = null
  var keys = Object.keys(obj).sort(function (a, b) {
    return b - a
  })
  for (let i = 0, len = keys.length; i < len; i++) {
    var tempObj = Object.assign({}, obj)
    var sum1 = minusKey(keys[i], sum, tempObj)
    var newKeys = Object.keys(tempObj)
    for (let j = 0, len1 = newKeys.length; j < len1; j++) {
      var newTempObj = Object.assign({}, tempObj)
      var sum2 = minusKey(newKeys[j], sum1, newTempObj)
      if (min === null || sum2 < min) {
        min = sum2
      }
    }
  }
  return min
}

console.log(minimumValueAfterDispel([2, 1, 3]))