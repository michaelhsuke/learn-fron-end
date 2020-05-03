var transferArr = [
  [2, 2, 3, 1, 3, 4, 3],
  [4, 2, 1, 2, 2, 1, 2]
]

var stations = [
  [7, 9, 3, 4, 8, 4],
  [8, 5, 6, 4, 5, 7],
]

var result = [[], []]
var pos = [[], []]


function minCost(i, j) {
  if (j == 0) {
    result[i][j] = transferArr[i][j] + stations[i][j]
    pos[i][j] = i
    return
  }
  var val1 = result[1 - i][j - 1] + transferArr[1 - i][j] + stations[i][j]
  var val2 = result[i][j - 1] + stations[i][j]
  var index = val1 < val2 ? (1 - i) : i
  result[i][j] = Math.min(val1, val2)
  pos[i][j] = index
}

for (var i = 0, len = 6; i < len; i++) {
  minCost(0, i);
  minCost(1, i)
}


var val1 = result[0][5] + 3
var val2 = result[1][5] + 2
var finalIndex = val1 < val2 ? 0 : 1
var minTime = Math.min(val1, val2)
var path = []
path[6] = finalIndex

console.log(minTime);
console.log(finalIndex);
console.log(result)
console.log(pos)

for (var i = 5; i >= 0; i--) {
  path[i] = pos[path[i + 1]][i]
}

console.log(path)

