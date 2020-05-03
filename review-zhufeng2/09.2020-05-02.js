var obj = {}
var a = [1, 2, 3, 4]
var b = [2,1,4,5]

for (var i = 0, len = a.length; i < len; i++) {
  var tmp = a[i]

  for (var j = i, len1 = a.length; j < len1; j++) {
    if (j > i) {
      tmp += a[j]
    }

    var key = i + ',' + j
    obj[key] = tmp
  }
}
var count = 0
for (var i = 0, len = b.length; i < len; i++) {
  for (var j = i, len1 = b.length; j < len1; j++) { 
    var key = i + ',' + j
    if (obj[key] == b[i] + b[j]) {
      count++
    }

  }
}

console.log(count)