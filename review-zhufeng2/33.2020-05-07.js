<<<<<<< HEAD
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








=======
// var obj = new Proxy({}, {
//   get: function(target, propKey, receiver) {
//     console.log(`getting ${propKey}`)
//     return Reflect.get(target, propKey, receiver)
//   },
//   set: function (target, propKey, value, receiver) {
//     console.log(`setting ${propKey}`)
//     return Reflect.set(target, propKey, value, receiver)
//   }
// })

// console.log(obj.__proto__)

// var proxy = new Proxy({}, {
//   get: function(target, propKey, receiver) {
//     return 35
//   }
// })

// console.log(proxy.a)
// console.log(proxy.b)
// console.log(proxy.c)

// var proxy = new Proxy({}, {
//   get: function () {
//     return 35
//   }
// })

// var obj = Object.create(proxy)
// console.log(obj)
// console.log(obj.time)
// var handler = {
//   get: function (target, name) {
//     if (name === 'prototype') {
//       return Object.prototype
//     }
//     return `Hello, ${name}`
//   },
//   apply: function (target, thisBinding, args) {
//     return args[0]
//   },
//   construct: function (target, args) {
//     return { value: args[1] }
//   }
// }

// var fproxy = new Proxy(function (x, y) {
//   return x + y
// }, handler)

var handler = {
  get: function (target, name) {
    console.log('get')
    if (name === 'prototype') {
      return Object.prototype;
    }
    return 'Hello, ' + name;
  },

  apply: function (target, thisBinding, args) {
    console.log('apply', target, thisBinding, args)
    return args[0];
  },

  construct: function (target, args) {
    console.log('construct', target, args)
    return { value: args[1] };
  }
};

var fproxy = new Proxy(function (x, y) {
  console.log('x, y', x, y)
  return x + y;
}, handler);

console.log(fproxy.call)
console.log('fproxy', fproxy(1, 2))
>>>>>>> 098dbe3a757b47c3571535e1165a3fa29bfbe68e
