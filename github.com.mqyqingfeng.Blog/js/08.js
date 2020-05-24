function sum(...args) {
  var arr = [...args]
  function store(...args) {
    var len = args.length
    if (len >= 1) {
      arr = [...arr, ...args]
      return store
    } else {
      return arr.reduce((a, b) => a + b)
    }
  }

  return store
}

console.log(sum(100)(2)(3)(4)(15)())
