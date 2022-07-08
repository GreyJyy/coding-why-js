//有手就行
// 前提数组元素是基本数据类型
function unique(arr) {
  return arr.filter((item, index) => index === arr.indexOf(item))
}
//今天做项目发现一个需求,元数据allList和selectedList是两个数组,里面的每一项数组元素是对象格式(selectedList里的元素必定存在于allList中);需要比对两个数组得到不重复的元素形成一个新数组返回。
//eg： allList：[对象1，对象2，对象3，对象4] / selectedList:[对象1，对象2] --->得到 unselectedList:[对象3，对象4]
//应用场景：从总数据中实时响应用户已选数据和未选数据,一般后端返回的数据都会有唯一id标识符，每一项数组元素都会有obj.id且不重复。
//一开始没思考基本数据类型元素和复杂数据类型元素的去重问题，用的是以下方法：
function unique(all, selected) {
  const newArr = [...all, ...selected]
  return newArr.filter((item, _, arr) => arr.indexOf(item) === arr.lastIndexOf(item))
}
//发现返回的永远是all这个总数据,想了下，如果数组元素都是复杂数据类型，那么全等比较的是内存地址，每一个数组元素的内存地址都是不同的，因此总是会返回所有数据。
//思考：无法比较复杂数据类型，那就比较复杂数据类型里的基本数据类型(id)
/**
 * 
 * @param {Array} all  
 * @param {Array} selected 
 * @returns 
 */
function unique(all, selected) {
 return all.filter((item1) => selected.every((item2) => item2.id !== item1.id))
  //findIndex也可以实现，但我想写短点就用every吧
}