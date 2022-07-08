//定时器写法 停止触发事件后仍旧会执行一次
function throttle(callback, delay) {
  let timeout = null
  return function (...args) {
    if (timeout) return
    timeout = setTimeout(() => {
      callback.apply(this, args)
      timeout = null
    }, delay)
  }
}
//时间戳写法 停止触发事件后执行也停止
function throttle(callback, delay) {
  let preTimeStamp = 0
  return function (...args) {
    const nowTimeStamp = +new Date()
    if (nowTimeStamp - preTimeStamp <= delay) return
    callback.apply(this, args)
    preTimeStamp = nowTimeStamp
  }
}
//定时器时间戳结合版本
function throttle(callback, delay) {
  let preTimeStamp = 0,
    timeout = null
  return function (...args) {
    //记录触发瞬间的时间戳
    const nowTimeStamp = +new Date(),
      difTimeStamp = nowTimeStamp - preTimeStamp
    if (difTimeStamp < delay) {
      //多次触发时,监测是否已经设置了定时器,如果有则等待已设置的定时器执行
      if (timeout) return
      //如果两次触发间隔在delay毫秒内,则设置一个定时器,在剩余时间(delay-两次触发间隔)后调用回调函数
      timeout = setTimeout(() => {
        callback.apply(this, args)
        //调用瞬间置空timeout便于下次执行
        timeout = null
        //将起始时间戳重置为调用瞬间的时间
        preTimeStamp = +new Date()
      }, delay - difTimeStamp)
      return
    }
    //如果两次触发间隔大于delay毫秒,则移除遗留的定时器
    clearTimeout(timeout)
    //置空timeout便于下次执行
    timeout = null
    //直接调用函数
    callback.apply(this, args)
    //将起始时间戳重置为触发瞬间的时间戳
    preTimeStamp = nowTimeStamp
  }
}
