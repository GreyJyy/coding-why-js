function customInstanceof(left,right) {
  //如果left值类型或null，返回false
  if(typeof left !== 'object' || left === null) return false
  //获取left的原型对象
  let proto = Object.getPrototypeOf(left)
  while(true) {
  //找到顶层仍旧没有，返回false
  if(proto === null) return false
  //如果right的prototype出现在了left的原型链上，返回true
  if(proto === right.prototype) return true
  //否则继续沿着left的原型链查找下去
  proto = Object.getPrototypeOf(proto)
   }
  }