var arr = [1, 2, 10, 3]
var mark = ['+', '-', '*', '/']
var path = []
var ans = []
var sum = []

// f(0) = a[0]
// f(1) = f(0) mark a[1]
// f(2) = f(1) mark a[2]
// ...
// f(3) = f(2) mark a[3]


function f(index, arr) {
  if (index == 0) {
    return arr[index]
  }

  var b = arr[index]
  for (var i = 0; i < 4; i++) {
    if (i == 3 && !b) {
      continue
    }
    
    path[index] = mark[i]
    expr = `${f(index - 1, arr)}${mark[i]}${arr[index]}`
    
    console.log(expr)
    var result = eval(expr)

    if (index == 3) {
      if (result == 24) {
        for (var j = 0; j < 3; j++) {
          ans[j] = path[3 - j]
        }
      }
    }
    // return result
  }
}

console.log(f(3, arr))
console.log(ans)
