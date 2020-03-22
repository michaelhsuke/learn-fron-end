var rTextExpr = /\{\{[\s]*(.+?)[\s]*\}\}/g;
var Utils = {
  isDomNode(node) {
    return node && node.nodeType === 1
  },
  isTextNode(node) {
    return node && node.nodeType === 3
  },
  isDirective(name) {
    return /^v-/.test(name)
  },
  getExprValue(expr, data) {
    expr = expr.split('.') || [];
    return expr.reduce(function (prev, key) {
      return prev[key] || {}
    }, data)
  },
  getFullExprValue(expr, data) {
    return expr.replace(rTextExpr, function (a, b) {
      b = b.trim();
      return Utils.getExprValue(b, data);
    })
  },
  containTextExpr(value) {
    return rTextExpr.test(value);
  }
}