function debounce(func, wait, immediate) {
  let timeout, context, args,result

  var debounced = function () {
    context = this
    args = arguments
    // console.log(timeout)
    if (timeout) {
      clearTimeout(timeout)
    }

    if (immediate) { // 立即执行
      // // 方案一
      // if (!timeout) {
      //   func.apply(context, args)
      // }
      // timeout = setTimeout(function () {
      //   timeout = null
      // }, wait)

      // 方案二
      let isCallNow = !timeout
      timeout = setTimeout(function () {
        timeout = null
      }, wait)
      if(isCallNow) {
        result = func.apply(context, args)
      }
    } else {
      timeout = setTimeout(function () {
        func.apply(context, args)
      }, wait)
    }
    
    return result
  }

  debounced.cancel = function () {
    console.log(timeout)
    clearTimeout(timeout)
    timeout = null
  }

  return debounced
}

