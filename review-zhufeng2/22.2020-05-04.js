/**
 * params { number } value
 */
var myIterable = {
  [Symbol.iterator]: function* () {
    yield 1
    yield 2
    yield 3
  }
}

for (let i of myIterable) {
  console.log(i)
}

console.log([...myIterable])

/**
 * Example 2
 */
var arr = ['red', 'gree', 'blue']
var obj = {}
var fn = () => {
  obj[Symbol.iterator] = arr[Symbol.iterator].bind(arr)
  for (var v of obj) {
    console.log(v)
  }
}

// fn()
for (var item of arr.entries()) {
  console.log(item)
}

for (var item of arr.keys()) {
  console.log(item)
}

for (var item of arr.values()) {
  console.log(item)
}

/**
 * Example 3
 */

console.log('========3========')
console.time();
var engines = new Set(['Trient', 'Gecko', 'Webkit', 'Webkit'])
for (var item of engines) {
  console.log(item)
}
console.timeEnd()

var fruits = new Map()
fruits.set('apple', 10)
fruits.set('banana', 20)
fruits.set('pears', 30)
console.log(fruits)
for (let [key, value] of fruits) {
  console.log(key, value)
}

for (let item of fruits) {
  console.log(item)
}

console.log(engines.entries())
console.log(fruits.entries())

console.log(engines.keys())
console.log(fruits.keys())

console.log(engines.values())
console.log(fruits.values())

var engineIterator = engines.values()
console.log(engineIterator.next())

function* entries(obj) {
  for (let key of Object.keys(obj)) {
    yield [key, obj[key]]
  }
}

var obj = {
  a: 1,
  b: 2,
  c: 3
}

for (let i of entries(obj)) {
  console.log(i)
}