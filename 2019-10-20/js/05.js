var ary = [12, 14, 13, 25, 41, 60]

// ary = ary.concat([100])
// ary.splice(ary.length, 0, 100)
// ary.push(100)
ary = (ary.join(',') + ',100').split(',').map(function (num) {
  return parseInt(num)
})
console.log(ary)