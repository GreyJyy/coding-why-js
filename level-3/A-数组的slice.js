Array.prototype.minislice = function (start = 0, end = this.length) {
  const arr = this
  const newArr = []
  for (let i = start; i < end; i++) {
    newArr.push(arr[i])
  }
  return newArr
}
//---------------------------------------------------------------------------测试代码
console.log([1, 2, 3, 4].minislice(0, 2)) //[1,2]
console.log(Array.prototype.minislice.call([1, 2, 3, 4], 0, 2)) //[1,2]
//将arguments转化为数组 方法一声明一个空数组遍历arguments;方法二采用数组的slice方法;方法三ES6 Array.from(可迭代对象);方法四ES6 数组展开运算符
const newArr1 = Array.prototype.slice.call(arguments)
const newArr2 = [].slice.call(arguments)
//以上两者等价
const newArr3 = Array.from(arguments)
const newArr4 = [...arguments]
