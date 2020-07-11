var MyMap = (function(){
  var keys = []
  var values = []

  return {
    get(key) {
      return values[keys.indexOf(key)]
    },
    set(key, value) {
      var index = keys.indexOf(key)
      if (index === -1) {
        keys.push(key)
        values.push(value)
      } else {
        values[index] = value
      }
    },
    has(key) {
      return keys.indexOf(key) > -1
    }
  }
})()