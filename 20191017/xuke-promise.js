function XukePromise(func) {
  this.value = undefined
  this.status = 'pending'
  this.fulfilledCallbacks = []
  this.rejectedCallbacks = []

  const resolve = value => {
    var timer = setTimeout(() => {
      clearTimeout(timer)
      timer = null
      if (this.status === 'pending') {
        this.status = 'fulfilled'
        this.value = value
        this.fulfilledCallbacks.forEach(fn => fn(value))
      }
    })
    
  }

  const reject = reason => {
    var timer = setTimeout(() => {
      clearTimeout(timer)
      timer = null
      if (this.status === 'pending') {
        this.status = 'rejected'
        this.value = reason
        this.rejectedCallbacks.forEach(fn => fn(reason))
      }
    })
  }

  try {
    func(resolve, reject)
  } catch (e) {
    reject(e)
  }

  this.then = (onFulfilled, onRejected) => {
    // this.fulfilledCallbacks.push(onFulfilled)
    // this.rejectedCallbacks.push(onRejected)
    // console.log('then====', this.fulfilledCallbacks.length)
    // return this
    typeof onFulfilled !== 'function' ? onFulfilled = () => {
      return this.value
    } : null

    typeof onRejected !== 'function' ? onRejected = () => {

    } : null
    return new Promise((resolve, reject) => {
      this.fulfilledCallbacks.push(() => {
        let result = onFulfilled(this.value)
        result instanceof XukePromise ? result.then(resolve, reject) : resolve(result)
      })

      this.rejectedCallbacks.push(() => {
        let result = onRejected(this.value)
        result instanceof XukePromise ? result.then(resolve, reject) : resolve(result)
      })

    })
  }

  this.catch = function (callback) {
    return this.then(null, callback)
  }
}

XukePromise.all = function (arr) {
  let result = [], index = 0
  return new Promise((resolve, reject) => {
    for (let i = 0, len = arr.len; i < len; i++) {
      arr[i].then(value => {
        index++
        result[i] = value
        if (index === arr.length) {
          resolve(result)
        }
      }).catch(function(err) {
        reject(err)
      })
    }

  })
}

var p1 = new XukePromise(function (resolve, reject) {
  resolve(100)
})

var p2 = p1.then(function (data) {
  console.log(data)
  return 200
})

var p3 = p2.then(function () {
  return new Promise(resolve => {
    resolve(500)
  })
})

p3.then(function (data) {
  console.log(data)
})

// console.log(p1)