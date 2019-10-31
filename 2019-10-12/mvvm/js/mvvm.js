class MVVM {
  constructor(options) {
    this.$options = options || {}
    this.$el = options.el || 'body'
    this.$data = options.data || {}
    if (!Utils.isElemenent(this.$el)) {
      this.$el = document.querySelector(this.$el)
    }
    this.proxyData()
    this.initComputed()
    new Observer(this.$data)
    new Compile(this)
  }

  initComputed() {
    const computed = this.$options.computed
    const self = this
    if (typeof computed === 'object') {
      Object.keys(computed).forEach(function(key) {
        const getter = typeof computed[key] === 'function' ? computed[key] : computed[key].get
        Object.defineProperty(self, key, {
          get: getter,
          set: () => {}
        })
      })
    }
    
  }

  proxyData() {
    Object.keys(this.$data).forEach(key => {
      Object.defineProperty(this, key, {
        get: () => {
          return this.$data[key]
        },
        set: newValue => {
          this.$data[key] = newValue
        }
      })
    })

  }
}