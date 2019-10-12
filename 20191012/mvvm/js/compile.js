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

    this.el.appendChild(fragment)

    // debugger
    // while(firstChild) {
    //   fragment.appendChild(firstChild)
    // }
    // this.compile(fragment)
    // console.log(typeof this.el)
    
    // this.el.append(fragment)
  }

  compile(el) {
    console.log(el)
  }
}