//----------------------------------Plan A
function curry(fn) {
  return function curried(...args) {
    //判断已接收参数与待接受参数数量是否相等,这里的apply必须使用this(解决测试用例二第一个打印的指向问题)
    if (args.length >= fn.length) return fn.apply(this, args)
    return function curried2(...args2) {
      //递归调用curried来检查参数个数是否达到要求,未达到则进行参数拼接,这里的apply必须使用this(解决测试用例二第二个打印的指向问题)
      //这里不能用bind,用bind的话不能递归调用,而是直接返回第二次调用的那个函数
      return curried.apply(this, [...args, ...args2])
    }
  }
}
//!----------------------------------Plan B : (并不严谨,目前我找不到解决this指向的办法,可能是我太笨,以后再看)
//! --又回来看了 还是没想到很好的解决办法 但是我应该是我们班学的最好的 我不知道估计没人知道了  下次问老师吧
//   function curry(fn, ...args) {
//     return fn.length <= args.length ? fn.apply(null, args) : curry.bind(this, fn, ...args)
//   }
//----------------------------------测试用例一:原函数不需要改变this指向(A与B均能通过)
function add(a, b, c) {
  return [a + b + c, this]
}
//   console.log(add(1, 2, 3))
//   const ca = curry(add)
//   console.log(ca(1)(2)(3))
//   console.log(ca(1, 2)(3))
//   console.log(ca(1, 2, 3))
//----------------------------------测试用例二:原函数需要改变this指向(B无法通过)
console.log(add.call({}, 1, 2, 3))
const ca = curry(add)
console.log(ca.call({}, 1, 2, 3))
console.log(ca(1)(2).call({}, 3))
