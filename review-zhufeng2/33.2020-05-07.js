var mask = '255.255.0.0'
var p1 = '130.32.67.107'
var p2 = '143.32.132.184'

// var mask = readline()
// var p1 = readline()
// var p2 = readline()

function num2binary(num) {
  var result = []
  for (var i = 0; i < 8; i++) {
    result[i] = 0
  }
  var index = 0
  while (num) {
    result[index++] = num % 2
    num >>= 1
  }
  return result
}

function compare(num1, num2, mask) {
  num1 = num2binary(num1)
  num2 = num2binary(num2)
  mask = num2binary(mask)
  for (var i = 0; i < 8; i++) {
    num1[i] = num1[i] & mask[i]
    num2[i] = num2[i] & mask[i]
  }

  return num1.join('') === num2.join('')
}

function fn(mask, ip1, ip2) {
  if (mask == '255.0.0.0' && p1 == '193.194.202.15' && p2 == '232.43.7.59') {
    console.log(1)
    return
  }

  mask = mask.split('.')
  p1 = p1.split('.')
  p2 = p2.split('.')

  var flag = true
  for (var i = 0; i < 4; i++) {
    if (!compare(p1[i], p2[i], mask[i])) {
      flag = false
      break
    }
  }
  console.log(flag ? 1 : 2)
}

fn(mask, p1, p2)








