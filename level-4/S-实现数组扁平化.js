//eg: [1,2,[3,4],[[5,6]]] -------->[1,2,3,4,5,6]
//plan A
function flatten(arr) {
  return arr.toString().split(',')
}
//plan B
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
//plan C
function flatten3(arr) {
  return arr.reduce(function (prev, next) {
    return prev.concat(Array.isArray(next) ? flatten3(next) : next)
  }, [])
}
