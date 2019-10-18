var i = 0

function timeCount() {
  i++
  postMessage(i)
  setTimeout("timeCount()", 500)
}

timeCount()