function TreeNode(val) {
  this.val = val
  this.next = null
}

TreeNode.prototype[Symbol.iterator] = function() {
  var iterator = { next: next }
  var current = this
  function next() {
    if (current) {
      var value = current.val
      current = current.next
      return { done: false, value: value }
    } else {
      return { done: true }
    }

  }
  return iterator
}

var n1 = new TreeNode(1)
var n2 = new TreeNode(2)
var n3 = new TreeNode(3)

n1.next = n2
n2.next = n3

for (var i of n1) {
  console.log(i)
}

for (var i of n2) {
  console.log(i)
}

