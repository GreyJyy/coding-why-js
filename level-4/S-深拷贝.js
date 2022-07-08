//-----------------------通过JSON.parse(JSON.stringify()) 无法正确处理函数与正则
//-----------------------通过循环递归实现一个深拷贝
function deepClone(obj, hash = new WeakMap()) {
  // 1 支持null与undefined
  if (obj == null) return obj
  // 2 支持日期对象
  if (obj instanceof Date) return new Date(obj)
  // 3 支持正则
  if (obj instanceof RegExp) return new RegExp(obj)
  // 4 支持函数
  if (typeof obj !== 'object') return obj
  // 7 避免循环引用
  if (hash.get(obj)) return hash.get(obj)
  // 5 支持[]与{}
  const cloneObj = new obj.constructor()
  // 6 缓存遍历过的对象
  hash.set(obj, cloneObj)
  // 8 遍历对象与数组(Object.keys排除了继承属性的干扰)
  Object.keys(obj).forEach((key) => {
    // 9 循环递归
    cloneObj[key] = deepClone(obj[key], hash)
  })
  return cloneObj
}
