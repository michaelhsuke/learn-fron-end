class MyPromise {
  constructor(executor) {
    this.value = null
    this.status = 'pending'
    this.fulfilledCallbacks = []
    this.rejectedCallbacks = []

    const resolveFn = result => {
      let timer = setTimeout(() => {
        clearTimeout(timer)
        if (this.status !== 'pending') {
          return
        }

        this.value = result
        this.status = 'fulfilled'
        this.fulfilledCallbacks.forEach(item => item(this.value))
      }, 0)
    }

    const rejectFn = reason => {
      let timer = setTimeout(() => {
        clearTimeout(timer)
        if (this.status !== 'pending') {
          return
        }

        this.value = reason
        this.status = 'rejected'
        this.rejectedCallbacks.forEach(item => item(this.value))
      }, 0)
    }

    try {
      executor(resolveFn, rejectFn)
    } catch (e) {
      rejectFn(e)
    }
  }

  then(fulfilledCallback, rejectedCallback) {
    return new MyPromise((resolve, reject) => {
      this.fulfilledCallbacks.push(() => {
        try {
          let x = fulfilledCallback(this.value)
          x instanceof MyPromise ? x.then(resolve) : resolve(x)
        } catch (e) {
          reject(e)
        }
      })

      this.rejectedCallbacks.push(() => {
        try {
          let x = rejectedCallback(this.value)
          x instanceof MyPromise ? x.then(resolve) : resolve(x)
        } catch (e) {
          reject(e)
        }
      })
    })
  }

  catch(rejectFn) {
    return this.then(null, rejectFn)
  }
}