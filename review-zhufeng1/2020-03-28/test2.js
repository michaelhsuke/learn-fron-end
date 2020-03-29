var n = parseInt(readline());
var ans = 0;
var dataArr = []
for(var i = 0;i < n; i++){
    dataArr.push(readline())
}

function tranDate2Num(str) {
  var ret = str.split(/[-:. ]/g)
  ret = ret.join('')
  return ret
}

dateArr = dateArr.map(item => tranDate2Num(item))

var data = {}
for (var i = 0, len = dateArr.length; i < len; i++) {
  var day = dateArr[i].slice(0, 8)
  data[day] = data[day] || []
  data[day].push(dateArr[i].slice(8))
}


Object.keys(data).forEach(function (key) {
  var items = data[key] || []
  items.sort()
})


var count = 0
Object.keys(data).forEach(function (key) {
  var items = data[key]
  var minDate = items[0]
  count++
  for (var i = 1, len = items.length; i < len; i++) {
    if (items[i] == minDate) {
      count++
    }
  }
})

print(count)