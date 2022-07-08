//还行 思想不错
Array.prototype._filter = function (next) {
  if (typeof next !== 'function') throw Error('only function allowed')
  const newArr = []
  for (const item of this) {
    next(item) && newArr.push(item)
  }
  return newArr
}
