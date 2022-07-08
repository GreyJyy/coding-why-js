//前提:不允许使用reduce
// 1. 只考虑一维数组  eg: [1,2,3,4] exp:10
//plan A 循环遍历累加实现
function getSum(arr) {
  let sum = 0
  for (const item of arr) {
    sum += item
  }
  return sum
}
//plan B 递归实现
function getSum2(arr) {
  return arr.length === 1 ? arr[0] : arr[0] + getSum2(arr.slice(1))
}

// 2. 多维数组求和  eg: [1,2,[3,4],[[5,6],7]] exp:28
//plan A toString + split实现
function getDeepSum(arr) {
  let sum = 0
  for (const item of arr.toString().split(',')) {
    sum += +item
  }
  return sum
}
//plan B 递归实现
function getDeepSum2(arr) {
  let sum = 0
  for (const item of arr) {
    Array.isArray(item) ? (sum += getDeepSum2(item)) : (sum += +item)
  }
  return sum
}
