class Observer {
  constructor(data) {
    this.observe(data)
  }

  observe(data) {
    if (typeof data === 'object') {
      Object.keys(data).forEach(key => {
        this.defineReactive(data, key, data[key])
        this.observe(data[key])
      })
    }
  }

  defineReactive(data, key, value) {
    let self = this
    var dep = new Dep()
    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: true,
      get() {
        Dep.target && dep.addSub(Dep.target)
        return value
      },
      set(newValue) {
        if (newValue !== value) {
          self.observe(newValue)
          value = newValue
          dep.notify()
        }
      }
    })
  }
}