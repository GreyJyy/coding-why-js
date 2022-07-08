//这都写烂了 有手就行
// 对通过new Date()生成的时间格式化为'yyyy-m-d hh:mm:ss'
function formatDate(time) {
  // const y = time.getFullYear(),
  //   m = (time.getMonth() + 1).toString().padStart(2, '0'),
  //   d = time.getDate().toString().padStart(2, '0'),
  //   hh = time.getHours().toString().padStart(2, '0'),
  //   mm = time.getMinutes().toString().padStart(2, '0'),
  //   ss = time.getSeconds().toString().padStart(2, '0')
  // return `${y}-${m}-${d} ${hh}:${mm}:${ss}`

  // 整活来个解构+遍历格式化(但是好像看起来比上面那个写的还多,像个小丑)
  const [y, m, d, hh, mm, ss] = [
    time.getFullYear(),
    time.getMonth() + 1,
    time.getDate(),
    time.getHours(),
    time.getMinutes(),
    time.getSeconds()
  ]
  for (let item of [y, m, d, hh, mm, ss]) {
    item = item.toString().padStart(2, '0')
  }
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}
