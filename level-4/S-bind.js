//     给所有的函数添加一个minibind方法,实现bind的功能
Function.prototype.minibind = function (thisArg, ...argArray) {
  // 1 确定调用minibind的函数
  const func = this
  // 2 解决传入null/undefined的边界情况
  thisArg = thisArg ?? window
  // 3 解决传入数字/字符串/布尔值的边界情况
  thisArg = Object(thisArg)
  return function (...args) {
    // 4 绑定this指向(这里不能是this只能是func(在第一步保存了this指向),如果这里用this指向的是window)
    thisArg.func = func
    // 5 隐式绑定
    const result = thisArg.func(...argArray, ...args)
    // 6 调用完毕将属性删除
    delete thisArg.func
    // 7 返回结果
    return result
  }
}
