var target = function () {
  return 'I am the target'
}

var p = new Proxy(target, {
  apply: function () {
    return 'I am the proxy'
  }
})

console.log(p.call(this))


function sum(left, right) {
  return left + right
}

var proxy = new Proxy(sum, {
  apply(target, ctx, args) {
    console.log('arguments===', arguments)
    return Reflect.apply(...arguments) * 2
  }
})

console.log(proxy(1, 2))
console.log(proxy.call(this, 3, 4))
console.log(proxy.apply(this, [5, 6]))

Reflect.apply(proxy, null, [9, 10])