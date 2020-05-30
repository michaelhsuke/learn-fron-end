require('@babel/polyfill')
var o =  {
  a: 1,
  b: 2,
  c: 'zzzz'
}

o[Symbol.iterator] = function* gen() {
  let keys = Object.keys(o)
  for (let key of keys) {
    yield o[key]
  }
}

for (let val of o) {
  console.log(val)
}

'aaaa'.includes('a')


class B {
  
}