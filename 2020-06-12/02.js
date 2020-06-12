var times = ['23:59', '00:00']
times = Array.from(new Set(times))

function transTime(time) {
  let [ h = 0, m = 0 ] = time.split(':')
  var numReg = /^\d+$/

  h = numReg.test(h) ? parseInt(h) : 0
  m = numReg.test(m) ? parseInt(m) : 0
  return (h * 60 + m)
}

var timestamps = times.map(item => {
  return transTime(item)
}).sort((a, b) => (a - b))

if (timestamps.includes(0)) {
  timestamps.push(1440)
}

var minGap = Infinity
for (let i = 0, len = timestamps.length; i < len - 1; i++) {
  let curGap = timestamps[i + 1] - timestamps[i]
  if (curGap < minGap) {
    minGap = curGap
  }
}

console.log(minGap)
