var wm = new WeakMap()
var key = {}
var obj = { foo: 1 }
wm.set(key, obj)
console.log(wm)

obj = null
console.log(wm)