const removeDuplicates = function (nums, k) {
  const len = nums.length
  let fast = k,
    slow = k
  if (len <= k) return len
  while (fast < len) {
    if (nums[fast] !== nums[slow - k]) {
      nums[slow] = nums[fast]
      slow++
    }
    fast++
  }
  return slow
}
