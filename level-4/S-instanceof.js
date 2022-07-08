// instanceof 运算符用于判断构造函数的 prototype 属性是否出现在对象的原型链中的任何位置。
function myinstanceof(right, left) {
  // 1 获取类型的原型
  let proto = Object.getPrototypeOf(left)
  // 2 获得对象的原型
  const prototype = right.prototype
  // 3 循环判断对象的原型是否等于类型的原型，直到对象原型为 null，因为原型链最终为 null
  while (true) {
    if (!proto) return false
    if (proto === prototype) return true
    proto = Object.getPrototypeOf(proto)
  }
}
