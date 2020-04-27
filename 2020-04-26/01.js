class TreeNode {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

function createNums(count = 10) {
  let result = []
  for (let i = 0; i++ < count;) {
    let flag = true
    do {
      let num = Math.ceil(Math.random() * (count * 2 - 1) + 1)
      if (!result.includes(num)) {
        result.push(num)
        flag = false
      }
    } while (flag)
  }
  return result
}

function createTree(arr) {
  let root = null
  let p, parent = null, flag = 'left'
  for (let i = 0, item; item = arr[i++];) {
    let oneNode = new TreeNode(item)
    if (root === null) {
      root = oneNode
      continue
    }

    parent = null
    p = root
    while (p) {
      parent = p
      if (item <= p.val) {
        p = p.left
        flag = 'left'
      } else {
        p = p.right
        flag = 'right'
      }
    }

    if (flag === 'left') {
      parent.left = oneNode
    } else {
      parent.right = oneNode
    }
  }

  return root
}

function postOrder(root, result = []) {
  if (root) {
    postOrder(root.left, result)
    postOrder(root.right, result)
    result.push(root.val)
  }
}

function postOrder2(root) {
  let p = root, s = [], result = [], t
  do {
    while (p) {
      s.push(p)
      p = p.left
    }
    p = null
    flag = 1
    while (s.length && flag === 1) {
      t = s.pop()
      if (t.right === p) {
        result.push(t.val)
        p = t
      } else {
        s.push(t)
        flag = 0
        p = t.right
      }
    }

  } while (s.length)

  return result
}

// let arr = createNums()
let arr = [19, 7, 2, 12, 3, 9, 4, 10, 11, 17]
let root = createTree(arr)
// console.log(arr, root)
let result = []
postOrder(root, result)
console.log(arr)
console.log(root)
console.log(result)
console.log(postOrder2(root))



