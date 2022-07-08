//eg: [1,2,[3,4],[[5,6]]] -------->[1,2,3,4,5,6]
//plan A 有一个很简单的方法...看起来好像是没问题的 我第一反应想到的居然是这个...
function flatten(arr) {
  return arr.toString().split(',')
}
//plan B 不取巧的方法就是递归遍历 写起来实在是烦人
function flatten2(arr) {
  let newArr = []
  for (const item of arr) {
    if (Array.isArray(item)) {
      newArr = newArr.concat(flatten2(item))
    } else {
      newArr.push(item)
    }
  }
  return newArr
}
//plan C 装杯写法 reduce 不过不得不说 代码量和层级少了很多 看起来就很舒服
function flatten3(arr) {
  return arr.reduce(function (prev, next) {
    return prev.concat(Array.isArray(next) ? flatten3(next) : next)
  }, [])
}
