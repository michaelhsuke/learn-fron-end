class Watcher {
  constructor(node, expr, cb) {
    this.node = node
    this.expr = expr
    this.cb = cb
    this.subs = []
    // this.value = Utils.matchData(expr, )
  }
}