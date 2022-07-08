// 和filter差不多思路 有手就行
Array.prototype._map = function (next) {
  if (typeof next !== 'function') throw Error('only function allowed')
  const newArr = []
  for (const item of this) {
    newArr.push(next(item))
  }
  return newArr
}
