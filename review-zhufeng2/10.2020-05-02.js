var root = null
var a = [1, 2, 4, 7, 3, 5, 6, 8]
var b = [4, 7, 2, 1, 5, 3, 8, 6]

function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

function findIndex(vin, num) {
  if (vin && vin.length) {
    for (let i = 0, len = vin.length; i < len; i++) {
      if (vin[i] === num) {
        return i
      }
    }
  }
}

function reConstructBinaryTree(pre, vin) {
  if (pre && pre.length) {
    // write code here
    let a = pre[0]
    let bIndex = findIndex(vin, a)
    let oneNode = new TreeNode(a)
    if (root === null) {
      root = oneNode
    }
    oneNode.left = reConstructBinaryTree(pre.slice(1, bIndex + 1), vin.slice(0, bIndex))
    oneNode.right = reConstructBinaryTree(pre.slice(bIndex + 1), vin.slice(bIndex + 1))


    return oneNode
  }
}

reConstructBinaryTree(a, b)
console.log(root)