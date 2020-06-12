var num = 1234
num = num + ''
var orgNumArr = num.split('')

var numArr = num.split('').sort((a, b) => (b - a))

console.log(orgNumArr, numArr)

var found = false
var start = 0
var end = num.length - 1
for (var i = 0, len = numArr.length; i < len; i++) {
  if(orgNumArr[i] == numArr[i]) {
    start = i + 1
  } else {
    end = findIndex(orgNumArr, numArr[i])
    found = true
    break
  }
}

function findIndex(org, val) {
  return org.indexOf(val)
}

if (found) {
  var t = orgNumArr[start]
  orgNumArr[start] = orgNumArr[end]
  orgNumArr[end] = t
}
var result = parseInt(orgNumArr.join(''))
console.log(result)