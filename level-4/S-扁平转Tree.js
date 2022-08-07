//递归遍历
// const getChildren = (arr, res, pid) => {
//   for (const item of arr) {
//     if (item.pid === pid) {
//       const newItem = { ...item, children: [] }
//       res.push(newItem)
//       getChildren(arr, newItem.children, item.id)
//     }
//   }
// }
// const arr2Tree = (arr, pid) => {
//   const res = []
//   getChildren(arr, res, pid)
//   return res
// }

//最优性能
function arr2Tree(items, root) {
  const result = []
  const itemMap = {}
  for (const item of items) {
    const id = item.id
    const pid = item.pid
    if (!itemMap[id]) {
      itemMap[id] = {
        children: []
      }
    }
    itemMap[id] = {
      ...item,
      children: itemMap[id]['children']
    }

    const treeItem = itemMap[id]

    if (pid === root) {
      result.push(treeItem)
    } else {
      if (!itemMap[pid]) {
        itemMap[pid] = {
          children: []
        }
      }
      itemMap[pid].children.push(treeItem)
    }
  }
  return result
}
