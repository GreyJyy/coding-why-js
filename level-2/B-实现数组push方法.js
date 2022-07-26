Array.prototype._push = function () {
  for (const item of arguments) {
    this[this.length] = item
  }
  return this
}
