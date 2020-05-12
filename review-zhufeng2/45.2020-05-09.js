var len

function buildMaxHeap(arr) {
  len = arr.length
  for (var i = Math.floor(len / 2); i >= 0; i--) {
    heapify(arr, i)
  }
}

function heapify(arr, i) {
  var left = 2 * i + 1
  var right = 2 * i + 2
  var largest = i
  
}