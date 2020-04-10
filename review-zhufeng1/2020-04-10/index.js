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
// visitTree(t1, nodeIndex)
var patches = []
const TYPES = {
  ATTR: 'ATTR',
  REMOVE: 'REMOVE',
  TAG: 'TAG',
  ADD: 'ADD'
}
function domDiff(t1, t2) {
  if (t1) {
    nodeIndex++
    if (!t2) {
      patches.push({
        type: TYPES.REMOVE,
        index: nodeIndex
      })
    } else {
      // 比较tag
      if (t1.tag !== t2.tag) {
        patches.push({
          type: TYPES.TAG,
          index: nodeIndex,
          newValue: t2.tag
        })
        compareAttr(t1.props, t2.props, nodeIndex)
      }
      // 比较props
    }
  }
}

function compareAttr(props1, props2, nodexIndex) {
  Object.keys(props1).forEach(key => {
    
  })
}