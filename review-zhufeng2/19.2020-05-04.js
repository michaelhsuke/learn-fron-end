class RangeIterator {
  constructor(start, stop) {
    this.start = start
    this.stop = stop
    this.value = start
  }

  [Symbol.iterator]() {
    return this
  }

  next() {
    if (this.value <= this.stop) {
      return { value: this.value++, done: false }
    } else {
      return { done: true }
    }
  }
}

function range(start, stop) {
  return new RangeIterator(start, stop)
}

for (let i of range(1, 10)) {
  console.log(i)
}