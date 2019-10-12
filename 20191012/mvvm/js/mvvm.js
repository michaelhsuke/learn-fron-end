class MVVM {
  constructor(options) {
    this.$options = options || {}
    this.$el = options.el || 'body'
    this.$data = options.data || {}
    if (!Utils.isElemenent(this.$el)) {
      this.$el = document.querySelector(this.$el)
    }
    // debugger
    // Utils.isElemenent(this.$el) ? null : (this.$el = document.getElementById(this.$el))
    new Compile(this)
  }
}