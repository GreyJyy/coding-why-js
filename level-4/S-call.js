//     给所有的函数添加一个minicall方法,实现call的功能
Function.prototype.minicall = function (thisArg, ...args) {
  // 1 需要在这里实现调用函数的功能 如何获取到是哪一个函数调用了minicall呢?
  // 4 解决传入null/undefined的边界情况
  thisArg = thisArg ?? window
  // 3 解决传入数字/字符串/布尔值的边界情况
  thisArg = Object(thisArg)
  // 2 如何绑定this指向
  // 方法一:直接调用call
  //! 缺点:我们做的是实现call,如果实现的过程中用到了call那就没有意义了
  //   func.call(thisArg)
  // 方法二:给传入的对象定义一个func属性,值就是传进来的this(调用minicall方法的具体函数) 然后进行隐式绑定
  //! 缺点:js的call方法是通过C++实现的,使用js实现只是一个模拟,同样传入一个空对象,call返回的是{},而minicall返回的是{func: ƒ},因为添加了一个func属性,但并不影响程序执行
  thisArg.func = this
  // 6 这里的func属性就是上面保存的this,this就是第一步定义的func,就是调用minicall的具体函数,thisArg.函数()是一种隐式绑定,func内部的this就指向了thisArg这个对象。
  const result = thisArg.func(...args)
  // 5 调用完毕将属性删除
  delete thisArg.func
  // 7 返回结果
  return result
}
