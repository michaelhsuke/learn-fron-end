const Utils = {
  isString(value) {
    return typeof value === 'string'
  },
  isElemenent(node) {
    return node && node.nodeType === 1
  },
  isTextNode(node) {
    return node && node.nodeType === 3
  },
  matchData(expr, data) {
    let result = null
    if (expr) {
      result = expr.split('.').reduce((obj, key) => {
        return obj[key]
      }, data)
    }
    return result
  },
  matchTplData(expr, data) {
    return expr.replace(TEMPLATE_REG, (...args) => {
      return this.matchData(args[1], data)
    })
  },
  setValue(expr, data, newValue) {
    const exprArr = expr.split('.')
    exprArr.reduce((obj, key, index) => {
      if (index == exprArr.length - 1) {
        obj[key] = newValue
      } else {
        return obj[key]
      }
    }, data)
  }
}

const TEMPLATE_REG = /\{\{\s*(\w+)\s*\}\}/g