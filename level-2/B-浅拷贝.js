// -----------------------------------------------------手写实现一个浅拷贝
function shallowClone(source) {
  const target = {}
  Object.keys(source).forEach((key) => {
    target[key] = source[key]
  })
  return target
}
//-----------------------------------------------------Object.assign()
const obj1 = {
  person: {
    name: 'Grey',
    age: 26
  },
  sports: 'basketball'
}
const obj2 = Object.assign({}, obj1)
console.log(obj1 === obj2) //false
obj1.person.age = 18
console.log(obj2) // age变成了18
//-----------------------------------------------------------展开运算符
const obj3 = { ...obj1 }
console.log(obj1 === obj3) //false
obj1.person.age = 20
console.log(obj3) // age变成了20
//---------------------------------------------Array.prototype.concat()
const arr1 = [1, 2, { name: 'Grey', age: 26 }]
const arr2 = arr1.concat()
console.log(arr1 === arr2) //false
arr1[2].age = 19
console.log(arr2) // age变成了19
//----------------------------------------------Array.prototype.slice()
const arr3 = arr1.slice()
console.log(arr3 === arr1) //false
arr1[2].age = 16
console.log(arr3) // age变成了16
