class MyPromise {
  constructor(executor) {
    this.status = 'pending'
    this.value = undefined
    this.fulfilledCallbacks = []
    this.rejectedCallbacks = []

    const resolveFn = result => {
      let timer = setTimeout(() => {
        clearTimeout(timer)
        timer = null
        if (this.status === 'pending') {
          this.status = 'fulfilled'
          this.value = result
          this.fulfilledCallbacks.forEach(fn => fn(result))
        }
      })
    }

    const rejectFn = reason => {
      clearTimeout(timer)
      timer = null
      setTimeout(() => {
        if (this.status === 'pending') {
          this.status = 'rejected'
          this.value = reason
          this.rejectedCallbacks.forEach(fn => fn(reason))
        }
      })
    }

    try {
      executor(resolveFn, rejectFn)
    } catch (err) {
      rejectFn(err)
    }
  }

  then(fulfilledCallback, rejectedCallback) {
    typeof fulfilledCallback === 'function' ? null : fulfilledCallback = result => result
    typeof rejectedCallback === 'function' ? null : rejectedCallback = reason => {
      throw new Error(reason)
    }
    return new MyPromise((resolve, reject) => {
      this.fulfilledCallbacks.push(() => {
        try {
          let x = fulfilledCallback(this.value)
          if (x instanceof MyPromise) {
            x.then(resolve, reject) 
          } else {
            resolve(x)
          }
        } catch(e) {
          reject(e)
        }
      })

      this.rejectedCallbacks.push(() => {
        try {
          let x = rejectedCallback(this.value)
          if (x instanceof MyPromise) {
            x.then(resolve, reject) 
          } else {
            resolve(x)
          }
        } catch(e) {
          reject(e)
        }
      })
    })
  }
}