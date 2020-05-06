function run(fn) {
  var gen = fn()

  function next(err, data) {
    var result = gen.next()
    if (result.done) {
      return
    }
    result.value(next)
  }

  next()
}

function add() {
  var _args = [...arguments]

  var _adder = function () {
    var curArgs = [...arguments]
    if (!curArgs.length) {
      return _adder.toString()
    }
    _args = _args.concat([...arguments])
    return _adder
  }

  _adder.toString = function () {
    return _args.reduce((a, b) => a + b, 0)
  }

  return _adder
}

var result = add(1)(2)(3)(4)(5)()
console.log(result)