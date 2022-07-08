//     给所有的函数添加一个miniapply方法,实现apply的功能
Function.prototype.miniapply = function (thisArg, argArray) {
  // 1 需要在这里实现调用函数的功能 如何获取到是哪一个函数调用了minicall呢?
  // 4 解决传入null/undefined的边界情况
  thisArg = thisArg ?? window
  // 3 解决传入数字/字符串/布尔值的边界情况
  thisArg = Object(thisArg)
  // 2 如何绑定this指向
  thisArg.func = this
  // 5 定义一个接收返回结果的变量
  let result
  // 6 将不传参(因为不传参的话形参默认就是undefined)/undefined/null合并为一个判断分支(全部进入typeof为object的分支)
  argArray = argArray ?? null
  // 7 拦截数组类型的参数进行传参(因为对数组调用typeof返回的也是object)
  if (argArray instanceof Array) {
    result = thisArg.func(...argArray)
    // 8 对于不传参/undefined/null的边界情况直接调用函数
  } else if (typeof argArray === 'object') {
    result = thisArg.func()
    // 9 其余情况(参数为字符串/数字类型)抛出错误
  } else {
    throw new TypeError('CreateListFromArrayLike called on non-object')
  }
  // 10 调用结束删除thisArg的func属性
  delete thisArg.func
  // 11 返回结果
  return result
}
