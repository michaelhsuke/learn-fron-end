var obj = {
  a: function () {
    console.log('a')
  },
  name: 'test',
  time: new Date()
}

var obj2 = JSON.parse(JSON.stringify(obj))
console.log(obj2)