function Element(type, props, children) {
  this.type = type
  this.props = props
  this.children = children
}

function createElement(type, props, children) {
  return new Element(type, props, children)
}


var virtualDom = createElement('ul', { class: 'list' }, [
  createElement('li', { class: 'item' }, ['a']),
  createElement('li', { class: 'item' }, ['b']),
  createElement('li', { class: 'item' }, ['c']),
])

var virtualDom2 = createElement('ul', { class: 'list-group' }, [
  createElement('li', { class: 'item' }, ['a']),
  createElement('li', { class: 'item' }, ['b']),
  createElement('div', { class: 'item' }, ['c']),
])

// console.log(virtualDom)

function setAttr(el, key, value) {
  key = (key + '').toUpperCase()
  switch (key) {
    case 'VALUE':
      el.value = value
      break;
    case 'CLASS':
      el.className = value
      break;
    default:
      el.setAttribute(key, value)
  }

}

function render(root) {
  var node = document.createElement(root.type)
  var props = root.props || {}
  Object.keys(props).forEach(key => {
    setAttr(node, key, props[key])
  });

  (root.children || []).forEach(item => {
    var newNode = item instanceof Element ? render(item) : document.createTextNode(item)
    node.appendChild(newNode)
  })

  return node
}

function renderDom(el, target) {
  console.log(target)
  target.appendChild(el)
}

var root = render(virtualDom)
console.log(root)
renderDom(root, document.getElementById('root'))

var patches = diff(virtualDom, virtualDom2)