class Compile {
  constructor(vm) {
    this.vm = vm
    this.el = vm.$el
    this.data = vm.$data || {}
    if (this.el) {
      this.run()
    }
  }

  run() {
    let fragment = document.createDocumentFragment()
    let firstChild
    while (firstChild = this.el.firstChild) {
      fragment.appendChild(firstChild)
    }

    this.compile(fragment)
    this.el.appendChild(fragment)
  }

  compile(el) {
    this.walk(el.childNodes)
  }

  walk(nodes) {
    if (nodes && nodes.length) {
      nodes.forEach(item => {
        this.parseNode(item)
        if (item.childNodes) {
          this.walk(item.childNodes)
        }
      })
    }
  }

  parseNode(node) {
    if (Utils.isTextNode(node)) {
      this.parseTextNode(node)
    } else if (Utils.isElemenent(node)) {
      this.parseElement(node)
    }
  }

  parseTextNode(node) {
    let textContent = node.textContent
    if (TEMPLATE_REG.test(textContent)) {
      CompileUtils.text(node, textContent, this.data)
    }
  }

  parseElement(node) {
    let attrs = node.attributes
    Object.keys(attrs).forEach(key => {
      const attr = attrs[key]
      const attrName = attr.name
      if (attrName.includes('v-')) {
        let [ , type] = attrName.split('-')
        CompileUtils[type](node, attr.value, this.data)
      }
    })
  }
}

const CompileUtils = {
  text: function (node, expr, data) {
    const updateFn = this.updater['text']
    updateFn && updateFn(node, Utils.matchTplData(expr, data))
  },
  model: function (node, expr, data) {
    const updateFn = this.updater['model']
    updateFn && updateFn(node, Utils.matchData(expr, data))
  },
  updater: {
    text(node, value) {
      node.textContent = value
    },
    model: function (node, value) {
      node.value = value
    }
  }
}