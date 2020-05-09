var stu1 = { name: '张三', score: 59 }
var stu2 = { name: '李四', score: 99 }

var handler = {
  has(target, prop) {
    if (prop === 'score' && target[prop] < 60) {
      console.log(`${target.name} 不及格`)
      return false
    }

    return prop in target
  }
}

var proxy1 = new Proxy(stu1, handler)
var proxy2 = new Proxy(stu2, handler)

// console.log('score' in proxy1)
// console.log('score' in proxy2)

for (var a in proxy1) {
  console.log(`${a} = ${proxy1[a]}`)
}

for (var a in proxy2) {
  console.log(`${a} = ${proxy2[a]}`)
}