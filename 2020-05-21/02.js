var str = "2018/4/6 12:48:6"
var reg = /\d+/g
var one = null
do {
  one = reg.exec(str)
  console.log(one)
} while (one)

// console.log(reg.exec(str))