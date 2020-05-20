let s = 'hello'
console.log(s)

function* gen() {
  yield 1
  yield 2
  yield 3
}

for (let i of gen()) {
  console.log(i)
}