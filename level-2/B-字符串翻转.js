//eg: 调用reverse('ABC') ---> 打印'CBA'
//有手就行 侮辱智商
String.prototype._reverse = function (str) {
  return str.split('').reverse().join('')
}
//唯一的注意点就是要必须通过new String()的方式实例化对象之后再来调用 我一开始没想明白 这题有手真不一定行
const res = new String()._reverse('hello')
console.log(res)
