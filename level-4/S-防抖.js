function debounce(callback, delay, immediate) {
  //result变量用于接收返回值
  let result,
    //这里的timeout复制操作只在首次触发事件时执行一次
    timeout = null
  //函数用一个变量接收,后续用于定义取消方法
  const debounced = function (...args) {
    if (timeout) clearTimeout(timeout)
    //为true时立即执行
    if (immediate) {
      //首次触发事件时保存！timeout的值必定为true
      const callNow = !timeout
      //定时器赋值给timeout，timeout的值变为定时器id
      timeout = setTimeout(() => {
        //delay毫秒以后定时器才会置空
        timeout = null
      }, delay)
      //首次必定执行，非首次以后，如果是delay毫秒内再次触发事件，则不执行，因为此时callNow为false；反之delay毫秒后触发事件则立即执行
      if (callNow) result = callback.apply(this, args)
      //为false时延迟执行
    } else {
      timeout = setTimeout(() => {
        callback.apply(this, args)
      }, delay)
    }
    return result
  }
  debounced.cancel = () => {
    if (timeout) clearTimeout(timeout)
    //如果immediate为true，取消后再次触发事件仍旧能立即执行
    timeout = null
  }
  return debounced()
}
