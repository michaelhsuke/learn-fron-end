// window.addEventListener('load', function () {
//   console.log('window load', document.getElementById('container'));
// })

// document.addEventListener('readystatechange', function () {
//   console.log('document ' + document.readyState, document.getElementById('container'));
// })

document.addEventListener('DOMContentLoaded', function () {
  console.log('document DOMContentLoaded', document.getElementById('container'))
  var $dom1 = document.getElementById('container')
  var $itemList = $dom1.getElementsByTagName('li')
  // var $newNode = $itemList[0].cloneNode()
  // $newNode.innerHTML = '4'
  // // console.log($newNode)
  // $dom1.appendChild($newNode)
  // var $newNode1 = $itemList[1].cloneNode(true)
  // $dom1.insertBefore($newNode1, $itemList[0])
  // $dom1.removeChild($itemList[2])

  var $firstNode = $itemList[0]

  console.log($dom1.childNodes)
  console.log($dom1.children)
  console.log($firstNode.childNodes)
  console.log(typeof $firstNode.children)
  console.log($firstNode.parentNode)
})

// var $dom1 = document.getElementById('container')
// console.log($dom1)
// var $itemList = $dom1.getElementsByTagName('li')
// console.log($itemList)
