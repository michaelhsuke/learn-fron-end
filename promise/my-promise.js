const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

function MyPromise(fn) {
  let self = this
  self.value = null
  self.error = null
  self.onFulfilledCallbacks = []
  self.onRejectedCallbacks = []
  self.status = PENDING

  function resolve(value) {
    if (self.status === PENDING) {
      setTimeout(() => {
        self.status = FULFILLED
        self.value = value
        self.onFulfilledCallbacks.forEach(cb => cb(this.value))
      })
    }
  }

  function reject(error) {
    if (self.status === PENDING) {
      setTimeout(() => {
        self.status = REJECTED
        self.error = error
        self.onRejectedCallbacks.forEach(cb => cb(this.error))
      })
    }
  }

  fn(resolve, reject)
}

MyPromise.prototype.then = function (onFulfilled, onRejected) {
  if (this.status === PENDING) {
    this.onFulfilledCallbacks.push(onFulfilled)
    this.onRejectedCallbacks.push(onRejected)
  } else if (this.status === FULFILLED) {
    onFulfilled(this.value)
  } else {
    onRejected(this.error)
  }
  return this
}

module.exports = MyPromise