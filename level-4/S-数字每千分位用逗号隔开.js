//好题目 我想了10分钟 数组和字符串的方法运用还是欠缺了一点,需要查MDN文档找到我需要用的方法
//eg: 1000 --> 1,000  1000.55 --> 1,000.55
// 1.如果有小数会出问题
function formatNumber(num) {
  const str = num.toString(),
    len = str.length,
    remainder = len % 3
  if (len <= 3) return str
  if (remainder !== 0) return `${str.slice(0, remainder)},${str.slice(remainder, len).match(/\d{3}/g).join(',')}`
  return `${str.match(/\d{3}/g).join(',')}`
}

// 2.考虑了小数的边界情况
function formatNumber2(num) {
  const str = num.toString()
  let decimals = '',
    len = str.length
  if (str.indexOf('.') !== -1) {
    decimals = str.split('.')[1]
    len = str.split('.')[0].length
  }
  const rest = decimals ? `.${decimals}` : ''
  if (len <= 3) return str
  const remainder = len % 3
  if (remainder !== 0) return `${str.slice(0, remainder)},${str.slice(remainder, len).match(/\d{3}/g).join(',')}${rest}`
  return `${str.slice(0, len).match(/\d{3}/g).join(',')}${rest}`
}
