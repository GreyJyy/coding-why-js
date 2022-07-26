// 对通过new Date()生成的时间格式化为'yyyy-m-d hh:mm:ss'
function formatDate(time) {
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
