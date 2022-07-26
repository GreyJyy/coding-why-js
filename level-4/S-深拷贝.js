//1 简单版本
// function deepClone(obj) {
//   if (typeof obj !== 'object' && obj !== null) return obj
//   const target = new obj.constructor()
//   for (const key in obj) {
//     target[key] = deepClone(obj[key])
//   }
//   return target
// }

//2 解决循环引用问题
// function deepClone(obj, hash = new WeakMap()) {
//   if (typeof obj !== 'object' && obj !== null) return obj
//   const target = new obj.constructor()
//   if (hash.has(obj)) return hash.get(obj)
//   hash.set(obj, target)
//   Object.keys(obj).forEach(key => (target[key] = deepClone(obj[key])))
//   return target
// }

//3 加入类型判断 完整版
function deepClone(obj, hash = new WeakMap()) {
  //  支持null与undefined
  if (obj == null) return obj
  //  支持日期对象
  if (obj instanceof Date) return new Date(obj)
  //  支持正则
  if (obj instanceof RegExp) return new RegExp(obj)
  //  支持函数与值类型
  if (typeof obj !== 'object') return obj
  //  避免循环引用
  if (hash.has(obj)) return hash.get(obj)
  //  支持[]与{}
  const target = new obj.constructor()
  //  缓存遍历过的对象
  hash.set(obj, target)
  //  遍历对象或数组(Object.keys排除了对象继承属性的干扰)
  //  循环递归
  Object.keys(obj).forEach(key => (target[key] = deepClone(obj[key])))
  return target
}

// for test
const obj1 = {
  name: 'jy',
  age: 20,
  friends: ['KOBE', 'JAMES'],
  sons: {
    mike: {
      andy: 'andy'
    }
  }
}
const obj2 = deepClone(obj1)
obj2.name = 'aaa'
obj2.sons.add = 1
obj2.friends.push('CCC')
console.log(obj2)
console.log(obj1)
