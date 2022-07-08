//还可以的实现 有一个join的取巧用法
String.prototype._repeat = function (range) {
  //考虑了非数组以及重复次数小于0/等于无穷的边界情况
  if (typeof +range !== 'number' || +range < 0 || +range == Infinity)
    throw RangeError('repeat count must be positive and less than inifinity')
  //如果一个元素为 undefined 或 null，它会被转换为空字符串。以this通过join拼接所有的空字符串即可达到repeat的效果
  //将非整数转化为整数
  return new Array(Math.round(range) + 1).join(this)
}
