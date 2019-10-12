const Utils = {
  isString(value) {
    return typeof value === 'string'
  },
  isElemenent(node) {
    return node && node.nodeType === 1
  }
}