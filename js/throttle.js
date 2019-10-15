function throttleSimple(func, wait) {
  let canRun = true, context, args, timer
  return function () {
    context = this, args = arguments
    if (canRun) {
      func.apply(context, args)
      canRun = false
      timer = setTimeout(function () {
        clearTimeout(timer)
        timer = null
        canRun = true
      }, wait)
    }
  }
}

/**
 * options.leading === false：禁用第一次执行
 * options.trailing === false：禁用停止触发的回调
 */
function throttle(func, wait, options = {}) {
  let timer, context, args, previous = 0

  const later = function () {
    previous= options.leading === false ? 0 : Date.now()
    func.apply(context, args)
    timer = null
  }

  return function () {
    context = this, args = arguments
    const now = Date.now()
    if (!previous && options.leading === false) {
      previous = now
    }
    const remaining = wait - (now - previous)
    if (remaining <= 0 || remaining > wait) {
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
      previous = now
      func.apply(context, args)
    } else if(!timer && options.trailing !== false) {
      timer = setTimeout(later, remaining)
    }
  }

  // todo 带取消请求功能
}
