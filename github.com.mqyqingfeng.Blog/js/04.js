var observer = new MutationObserver(() => {
  console.log('okkk')
})

var count = 0
var textNode = document.createTextNode(count)

observer.observe(textNode, { characterData: true })
setTimeout(() => {
  textNode.data = 1
}, 3000)