// var regex = new RegExp('xyz', 'i')
// console.log(regex)

function Person() {
  this.arr = ['aaa', 'bbb']
}

function Child() {
  this.name = 'cccc'
}

Child.prototype = new Person()

var child1 = new Child()
var child2 = new Child()
console.log(child1)
child1.arr.push('ddd')


console.log('child2', child2)