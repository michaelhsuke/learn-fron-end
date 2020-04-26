// DGBAECF
// GDBEFCA


function createBTree(post = [], inSort = [], count = 0) {
  if (count <= 0) {
    return null
  }

  let key = post[post.length - 1]
  let node = new TreeNode(key)
  let foundInIndex = -1
  for (let i = 0, len = inSort.length; i < len; i++) {
    if (inSort[i] === key) {
      foundInIndex = i
      break
    }
  }
  console.log(post.slice(0, foundInIndex), inSort.slice(0, foundInIndex))
  let remainLen = inSort.length - foundInIndex
  console.log(post.slice(post.length - inSort.length + foundInIndex, post.length - 1), inSort.slice(foundInIndex + 1, inSort.length))
  node.left = createBTree(post.slice(0, foundInIndex), inSort.slice(0, foundInIndex), foundInIndex)
  node.right = createBTree(post.slice(post.length - inSort.length + foundInIndex, post.length - 1), inSort.slice(foundInIndex + 1, inSort.length), inSort.length - foundInIndex - 1)
  return node
}

function InOrder(root) {
  if (root) {
    InOrder(root.left)
    console.log(root.val)
    InOrder(root.right)
  }
}

function preOrder(root) {
  if (root) {
    console.log(root.val);
    preOrder(root.left)
    preOrder(root.right)
    
  }
}

// DGBAECF
// GDBEFCA
let a = 'DGBAECF', b = 'GDBEFCA'
let tree = createBTree(b, a, a.length)
console.log(tree)
// InOrder(tree)
preOrder(tree)