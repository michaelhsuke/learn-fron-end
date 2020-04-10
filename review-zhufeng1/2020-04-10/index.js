class Element {
  constructor(tag, props, children) {
    this.tag = tag
    this.props = props
    this.children = children
  }
}

function createElement(tag, props, children) {
  return new Element(tag, props, children)
}

function setAttr(el, props) {
  Object.keys(props).forEach(key => {
    switch (key) {
      case 'class':
        el.className = props[key]
        break
      default:
        el[key] = props[key]
    }
  })
}

function renderNode(root) {
  let theNode = null
  if (root) {
    theNode = root.tag ? document.createElement(root.tag) : document.createTextNode(root)
    setAttr(theNode, root.props || {})
    let children = root.children || []
    children.forEach(child => {
      let childNode = renderNode(child)
      if (childNode) {
        theNode.appendChild(childNode)
      }
    })
  }
  return theNode
}

function renderDom(tree, root) {
  root.appendChild(tree)
}

function updateDomTree(root, patches) {

}




function visitTree(root) {
  if (root) {
    nodeIndex++
    console.log('index, node', nodeIndex, root);
    (root.children || []).forEach(child => {
      visitTree(child)
    })
  }
}

var t1 = createElement('ul', { class: 'list' }, [
  createElement('li', { class: 'item' }, ['a']),
  createElement('li', { class: 'item' }, ['b']),
  createElement('li', { class: 'item' }, ['c']),
])

var t2 = createElement('ul', { class: 'list-new' }, [
  createElement('li', { class: 'item' }, ['a']),
  createElement('li', { class: 'item' }, ['b']),
  createElement('div', { class: 'item' }, ['c']),
])

// var patches = domDiff(t1, t2)
// var newDomTree = updateDomTree(t1, patches)
// renderDom(renderNode(t1), document.getElementById('root'))

var nodeIndex = 0
var patches = {}

const TYPES = {
  ATTR: 'ATTR',
  REMOVE: 'REMOVE',
  TAG: 'TAG',
  ADD: 'ADD',
  TEXT: 'TEXT',
  REPLACE: 'REPLACE',
}

function diffChildren(oldChildren, newChildren) {
  (oldChildren || []).forEach((child, idx) => {
    domDiff(child, newChildren[idx], ++nodeIndex)
  })
}

function isString(node) {
  return typeof node === 'string'
}

function domDiff(t1, t2, index) {
  console.log('index===', index)
  let currentPatches = []
  if (!t2) {
    currentPatches.push({
      type: TYPES.REMOVE,
    })
  } else {
    if (t1.tag == t2.tag) {
      // 比较属性
      let attrs = compareAttr(t1.props, t2.props)
      if (Object.keys(attrs).length) {
        currentPatches.push({
          type: TYPES.ATTR,
          attrs
        })
      }
      diffChildren(t1.children, t2.children)
    } else {
      if (isString(t1) && isString(t2)) {
        if (t1 !== t2) {
          currentPatches.push({
            type: TYPES.TEXT,
            text: t2
          })
        }
      } else {
        currentPatches.push({
          type: TYPES.REPLACE,
          newNode: t2
        })
      }
    }
  }

  if (currentPatches.length > 0) {
    patches[index] = currentPatches
  }
}

function compareAttr(oldProps, newProps) {
  let ret = {}
  if (oldProps && newProps) {
    Object.keys(oldProps).forEach(key => {
      if (oldProps[key] !== newProps[key]) {
        ret[key] = newProps[key]
      }
    })

    Object.keys(newProps).forEach(key => {
      if (!oldProps[key]) {
        ret[key] = newProps[key]
      }
    })
  }

  return ret
}

var el = renderNode(t1)
console.log('el===', el);

domDiff(t1, t2, nodeIndex)
console.log('patches===', patches)