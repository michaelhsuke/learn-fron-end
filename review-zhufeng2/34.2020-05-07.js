async function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield Promise.resolve(i)
  }
}

var gen = range(1, 3)
// console.log(range(1, 3))
console.log(gen.next())

async function run() {
  var gen = range(1, 3)
  var result = await gen.next()
  console.log(result)
}

// run(range(1, 3))
run()