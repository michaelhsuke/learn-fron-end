class Watcher {
  constructor(data, expr, cb) {
    this.data = data
    this.expr = expr
    this.cb = cb
    Dep.target = this
    this.value = Utils.matchData(expr, this.data)
    Dep.target = null
  }

  update() {
    let newValue = Utils.matchData(this.expr, this.data)
    if (this.value !== newValue) {
      this.value = newValue
      this.cb(newValue)
    }
  }
}

class Dep {
  constructor() {
    this.subs = []
  }

  addSub(fn) {
    fn && this.subs.push(fn)
  }

  notify() {
    this.subs.forEach(watcher => watcher.update())
  }
}