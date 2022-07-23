/* 
实现数组的乱序输出：
大概思路就是遍历数组里的每一个元素,然后生成一个随机数,交换这个元素与生成随机数代表的索引的位置;
然后再找下一个元素,继续生成随机数,继续交换,以此类推...
*/
function derange(arr) {
  //以下写法乱序后的数组有概率与原数组一致,数组元素越多,出现一致的概率越低(但其实从概率学角度来讲这样的乱序才是等概率的乱序)
  for (let i = 0; i < arr.length; i++) {
    //本来想用Math.round()来取整，但是仔细思考这种方法会造成随机数分布不均匀的情况发生，首尾被取到的概率应该是其余整数的一半。
    const random = Math.floor(Math.random() * arr.length)
    ;[arr[i], arr[random]] = [arr[random], arr[i]]
  }

  //* ---------------------------------------------------------------------forEach实现
  // arr.forEach((_, index, arr) => {
  //   const random = Math.floor(Math.random() * arr.length)
  //   ;[arr[index], arr[random]] = [arr[random], arr[index]]
  // })
  //* ---------------------------------------------------------------------forEach实现

  //------------------------------------------------------------------
  //! 千万不能用下面这种写法,因为在每次迭代中，会将不同属性的值分配给变量item,直接导致item的值被覆盖,出现重复元素。
  // for (let item of arr) {
  //   const random = Math.floor(Math.random() * arr.length)
  //   ;[item, arr[random]] = [arr[random], item]
  // }
  //------------------------------------------------------------------
  //? 以下写法乱序后的数组必定与原数组不同(但是元素被放置到每个位置的概率并不是相等的)
  //   for (let i = 1; i < arr.length; i++) {
  //     const random = Math.floor(Math.random() * (arr.length - i) + i)
  //     i === 1 ? ([arr[0], arr[random]] = [arr[random], arr[0]]) : ([arr[i], arr[random]] = [arr[random], arr[i]])
  //   }
  return arr
}

const arr = [1, 2, 3]
console.log(derange(arr))
