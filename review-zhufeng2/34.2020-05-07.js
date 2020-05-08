var str = 'hello'
var stat = [0, 0, 0, 0]
var len = str.length
var exprs = [/[A-Za-z]/, / /, /[0-9]/, '']
for (var i = 0; i < len; i++) {
  var ch = str[i]
  var matched = false
  for (var j = 0; j < 3; j++) {
    if (exprs[j].test(ch)) {
      matched = true
      stat[j]++
      break
    }
  }

  if (!matched) {
    num[3]++
  }
}
for (var i = 0; i < 4; i++) {
  console.log(stat[i])
}
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
