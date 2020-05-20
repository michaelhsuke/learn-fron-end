function* gen() {
  yield 1
  yield 2
  yield 3
  return 4
}

var it = gen()
console.log(typeof it[Symbol.iterator])
for (var val of it) {
  console.log(val)
}
console.log(it.next())