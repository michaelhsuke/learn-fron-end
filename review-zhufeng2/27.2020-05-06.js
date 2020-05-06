// var foos = new WeakSet()

// class Foo {
//   constructor() {
//     foos.add(this)
//   }

//   method() {
//     if (!foos.has(this)) {
//       throw new TypeError('Foo.prototype.method 只能在Foo的实例上调用')
//     }
//   }
// }

// var key = { foo: 1 }
// var obj = { test: 1234 }
// var wm = new WeakMap
// wm.set(key, obj)
// console.log(wm.get(key))
// key = null
// console.log(wm.get(key))


const _counter = new WeakMap()
const _action = new WeakMap()

class CountDown {
  constructor(counter, action) {
    _counter.set(this, counter)
    _action.set(this, action)
  }

  dec() {
    var counter = _counter.get(this)
    if (counter < 1) {
      return
    }

    counter--
    _counter.set(this, counter)
    if (counter === 0) {
      _action.get(this)()
    }
  }
}

var a = new CountDown(2, function () { console.log('DONE') })
a.dec()
a.dec()
a.dec()
