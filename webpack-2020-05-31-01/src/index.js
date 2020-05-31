// console.log('index.js')

class Person {
  constructor(name) {
    this.name = name
  }

  getName() {
    return this.name
  }
}

let person = new Person('xuke')
console.log(person)