// var n = parseInt(readline());
// console.log(n)

// var str1 = '2020-03-28 21:33:01.149'
// var str2 = '2020-03-28 21:33:01.150'
// var ret1 = formatDate(str1)
// var ret2 = formatDate(str2)
// console.log(ret1 < ret2)

var minDate = null
var count = 0

function tranDate2Num(str) {
  var ret = str.split(/[-:. ]/g)
  ret = ret.join('')
  return ret
}

var dateArr = [
  '1992-08-20 12:12:12.001',
  '1992-08-20 12:12:12.003',
  '1992-08-20 12:12:12.203',
  '1992-08-21 12:12:12.001',
  '1992-08-21 12:12:12.003'
]
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

console.log(data)

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

console.log(count)


// /**
//  * ret = 1 一样大
//  * ret = 2 a小
//  * ret = 3 b小
//  */
// function min(a, b) {
//   var normalLen = a.length
//   for (var i = 0; i < normalLen; i++) {
//     var t1 = parseInt(a[i]) || 0;
//     var t2 = parseInt(b[i]) || 0;
//     if (t1 > t2) {
//       return 3
//     } else if (t1 < t2) {
//       return 2
//     }
//   }

//   return 1
// }

// for (var i = 0, item; item = dateArr[i++];) {
//   if (minDate === null) {
//     minDate = item
//     count = 1
//   } else {
//     var t = min(minDate, item)
//     if (t == 1) {
      
//       count++ 
//     } else if (t == 3) {
//       minDate = item
//       count = 1
//     }
//   }
//   console.log(minDate.join(''), item.join(''))
// }

// console.log('result===', minDate, count)