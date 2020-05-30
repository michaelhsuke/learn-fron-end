require('./index.less')
require('./index.css')
require('./a.js')
require('./b.js')

let fn = () => {
  console.log('xuke')
}
fn()

class A {
  a = 1;
}

var a = new A()
console.log(a.a)